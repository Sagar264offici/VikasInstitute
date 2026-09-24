import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FieldConfig {
  nodes: number;
  edges: number;
  pointSize: number;
  nodeOpacity: number;
  lineOpacity: number;
  ringOpacity: number;
  ringScale: number;
  frameInterval: number;
}

interface NeuralFieldProps {
  className?: string;
  variant?: 'hero' | 'footer';
  tone?: 'light' | 'dark';
}

function makeConfig(variant: 'hero' | 'footer', aspect: number): FieldConfig {
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const compact = aspect < 0.9;
  const footer = variant === 'footer';
  return {
    nodes: compact ? (footer ? 44 : 52) : footer ? 84 : 140,
    edges: compact ? (footer ? 60 : 72) : footer ? 116 : 190,
    pointSize: compact ? (footer ? 2.2 : 2.7) : footer ? 2.6 : 3.2,
    nodeOpacity: compact ? (footer ? 0.5 : 0.78) : footer ? 0.6 : 0.9,
    lineOpacity: compact ? (footer ? 0.22 : 0.34) : footer ? 0.3 : 0.42,
    ringOpacity: compact ? (footer ? 0.16 : 0.26) : footer ? 0.22 : 0.32,
    ringScale: footer ? 0.78 : 1,
    frameInterval: coarse ? 1000 / 30 : 1000 / 60,
  };
}

function ringPoints(radius: number, segments: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
  }
  return pts;
}

export default function NeuralField({ className = '', variant = 'hero', tone = 'light' }: NeuralFieldProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hostCandidate = hostRef.current;
    if (!hostCandidate) return;
    const host = hostCandidate;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      const probe = document.createElement('canvas');
      const gl = probe.getContext('webgl2') || probe.getContext('webgl');
      if (!gl) return;
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }
    renderer.setClearColor(0x000000, 0);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 12;

    const dpr = Math.min(window.devicePixelRatio || 1, finePointer ? 2 : 1.5);
    renderer.setPixelRatio(dpr);

    const canvas = renderer.domElement;
    canvas.style.display = 'block';
    host.appendChild(canvas);

    const dotCanvas = document.createElement('canvas');
    dotCanvas.width = 64;
    dotCanvas.height = 64;
    const dotCtx = dotCanvas.getContext('2d');
    if (!dotCtx) {
      renderer.dispose();
      return;
    }
    const grad = dotCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.55)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    dotCtx.fillStyle = grad;
    dotCtx.fillRect(0, 0, 64, 64);
    const dotTexture = new THREE.CanvasTexture(dotCanvas);

    const GOLD = new THREE.Color('#e8b64c');
    const nodeColor = tone === 'dark' ? new THREE.Color('#f2f0e9') : new THREE.Color('#17324d');
    const ringInnerColor = tone === 'dark' ? new THREE.Color('#e6e4dc') : new THREE.Color('#17324d');
    const group = new THREE.Group();
    scene.add(group);

    let config = makeConfig(variant, 1);
    const state = { base: null as Float32Array | null, pos: null as Float32Array | null, seeds: null as Float32Array | null, edges: [] as Array<{ u: number; v: number }>, pGeo: null as THREE.BufferGeometry | null, linePos: null as Float32Array | null, lGeo: null as THREE.BufferGeometry | null, outerRing: null as THREE.LineLoop | null, innerRing: null as THREE.LineLoop | null };

    function buildGeometry() {
      const sx = Math.max(6.5, (host.clientWidth / Math.max(1, host.clientHeight)) * 4.2);
      const sy = 4.4;
      const sz = 2.6;

      const base = new Float32Array(config.nodes * 3);
      const seeds = new Float32Array(config.nodes * 9);
      for (let i = 0; i < config.nodes; i++) {
        base[i * 3] = (Math.random() - 0.5) * 2 * sx;
        base[i * 3 + 1] = (Math.random() - 0.5) * 2 * sy;
        base[i * 3 + 2] = (Math.random() - 0.5) * 2 * sz;
        const s = i * 9;
        seeds[s] = 0.25 + Math.random() * 0.5;
        seeds[s + 1] = Math.random() * Math.PI * 2;
        seeds[s + 2] = 0.25 + Math.random() * 0.5;
        seeds[s + 3] = Math.random() * Math.PI * 2;
        seeds[s + 4] = 0.25 + Math.random() * 0.5;
        seeds[s + 5] = Math.random() * Math.PI * 2;
        seeds[s + 6] = 3 + Math.random() * 5;
        seeds[s + 7] = Math.random() * Math.PI * 2;
        seeds[s + 8] = (variant === 'footer' ? 0.06 : 0.12) + Math.random() * 0.1;
      }

      const candidates: Array<{ u: number; v: number; d: number }> = [];
      for (let i = 0; i < config.nodes; i++) {
        for (let j = i + 1; j < config.nodes; j++) {
          const dx = base[i * 3] - base[j * 3];
          const dy = base[i * 3 + 1] - base[j * 3 + 1];
          const dz = base[i * 3 + 2] - base[j * 3 + 2];
          candidates.push({ u: i, v: j, d: dx * dx + dy * dy + dz * dz });
        }
      }
      candidates.sort((a, b) => a.d - b.d);
      const edges = candidates
        .slice(0, Math.min(config.edges, candidates.length))
        .map((c) => ({ u: c.u, v: c.v }));

      const colors = new Float32Array(config.nodes * 3);
      for (let i = 0; i < config.nodes; i++) {
        const c = Math.random() < 0.3 ? GOLD : nodeColor;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      const pos = new Float32Array(config.nodes * 3);
      pos.set(base);

      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const pMat = new THREE.PointsMaterial({
        size: config.pointSize,
        map: dotTexture,
        vertexColors: true,
        transparent: true,
        opacity: config.nodeOpacity,
        depthWrite: false,
        sizeAttenuation: false,
        blending: THREE.NormalBlending,
      });

      const linePos = new Float32Array(edges.length * 6);
      const lGeo = new THREE.BufferGeometry();
      lGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
      const lMat = new THREE.LineBasicMaterial({
        color: GOLD,
        transparent: true,
        opacity: config.lineOpacity,
        depthWrite: false,
        blending: THREE.NormalBlending,
      });

      const outerRadius = 4.1 * config.ringScale;
      const innerRadius = 2.45 * config.ringScale;
      const outerRing = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(ringPoints(outerRadius, 64)),
        new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: config.ringOpacity, depthWrite: false })
      );
      outerRing.rotation.set(1.15, 0.1, 0);

      const innerRing = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(ringPoints(innerRadius, 48)),
        new THREE.LineBasicMaterial({ color: ringInnerColor, transparent: true, opacity: config.ringOpacity * 1.2, depthWrite: false })
      );
      innerRing.rotation.set(1.4, 0.2, 0);

      group.add(new THREE.Points(pGeo, pMat), new THREE.LineSegments(lGeo, lMat), outerRing, innerRing);

      state.base = base;
      state.pos = pos;
      state.seeds = seeds;
      state.edges = edges;
      state.pGeo = pGeo;
      state.linePos = linePos;
      state.lGeo = lGeo;
      state.outerRing = outerRing;
      state.innerRing = innerRing;
    }

    buildGeometry();

    function resize() {
      const w = host.clientWidth;
      const h = Math.max(1, host.clientHeight);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const next = makeConfig(variant, w / h);
      if (next.nodes !== config.nodes) {
        config = next;
        group.clear();
        buildGeometry();
      }
    }
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    const interactive = variant === 'hero' && finePointer && !reduced;
    const pointer = { tx: 0, ty: 0, x: 0, y: 0, active: interactive };

    function onPointerMove(e: PointerEvent) {
      const r = host.getBoundingClientRect();
      pointer.tx = ((e.clientX - r.left) / Math.max(1, r.width) - 0.5) * 0.55;
      pointer.ty = ((e.clientY - r.top) / Math.max(1, r.height) - 0.5) * 0.35;
    }
    function onPointerLeave() {
      pointer.tx = 0;
      pointer.ty = 0;
    }
    if (pointer.active) {
      host.addEventListener('pointermove', onPointerMove, { passive: true });
      host.addEventListener('pointerleave', onPointerLeave, { passive: true });
    }

    let raf = 0;
    let running = false;
    let lastFrame = performance.now();
    let t = 0;

    function frame() {
      raf = requestAnimationFrame(frame);
      const now = performance.now();
      const elapsed = now - lastFrame;
      if (elapsed < config.frameInterval) return;
      lastFrame = now - (elapsed % config.frameInterval);
      t += Math.min(elapsed / 1000, 0.05) * 0.55;

      const { base, pos, seeds, edges, pGeo, linePos, lGeo, outerRing, innerRing } = state;
      if (!base || !pos || !seeds || !pGeo || !linePos || !lGeo) return;

      for (let i = 0; i < config.nodes; i++) {
        const b = i * 3;
        const s = i * 9;
        const jf = seeds[s + 6];
        const jp = seeds[s + 7];
        const ja = seeds[s + 8];
        pos[b] = base[b] + Math.sin(t * seeds[s] + seeds[s + 1]) * 0.55 + Math.sin(t * jf + jp) * ja;
        pos[b + 1] = base[b + 1] + Math.cos(t * seeds[s + 2] + seeds[s + 3]) * 0.45 + Math.sin(t * jf + jp + 2.1) * ja;
        pos[b + 2] = base[b + 2] + Math.sin(t * seeds[s + 4] + seeds[s + 5]) * 0.3 + Math.sin(t * jf + jp + 4.2) * ja;
      }
      pGeo.attributes.position.needsUpdate = true;

      const lineAttr = lGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < edges.length; i++) {
        const o = i * 6;
        linePos[o] = pos[edges[i].u * 3];
        linePos[o + 1] = pos[edges[i].u * 3 + 1];
        linePos[o + 2] = pos[edges[i].u * 3 + 2];
        linePos[o + 3] = pos[edges[i].v * 3];
        linePos[o + 4] = pos[edges[i].v * 3 + 1];
        linePos[o + 5] = pos[edges[i].v * 3 + 2];
      }
      lineAttr.needsUpdate = true;

      if (outerRing && innerRing) {
        outerRing.rotation.z = t * 0.08;
        outerRing.rotation.x = 1.15 + Math.sin(t * 0.3) * 0.08;
        innerRing.rotation.z = -t * 0.12;
      }

      if (pointer.active) {
        pointer.x += (pointer.tx - pointer.x) * 0.045;
        pointer.y += (pointer.ty - pointer.y) * 0.045;
        group.rotation.x = pointer.y;
        group.rotation.y = pointer.x;
      }

      renderer.render(scene, camera);
    }

    function start() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    let inView = true;
    let io: IntersectionObserver | null = null;
    let onVis: (() => void) | null = null;

    function sync() {
      if (inView && document.visibilityState === 'visible') start();
      else stop();
    }

    if (reduced) {
      renderer.render(scene, camera);
    } else {
      inView = false;
      io = new IntersectionObserver((entries) => {
        inView = entries.some((e) => e.isIntersecting);
        sync();
      });
      io.observe(host);
      onVis = () => sync();
      document.addEventListener('visibilitychange', onVis);
    }

    return () => {
      stop();
      if (io) io.disconnect();
      if (onVis) document.removeEventListener('visibilitychange', onVis);
      resizeObserver.disconnect();
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerleave', onPointerLeave);
      group.children.forEach((child) => {
        const c = child as THREE.Mesh;
        if (c.geometry) c.geometry.dispose();
        if (Array.isArray(c.material)) c.material.forEach((m) => m.dispose());
        else if (c.material) c.material.dispose();
      });
      dotTexture.dispose();
      renderer.dispose();
      if (canvas.parentElement === host) host.removeChild(canvas);
    };
  }, [variant, tone]);

  return <div ref={hostRef} className={className} aria-hidden="true" />;
}