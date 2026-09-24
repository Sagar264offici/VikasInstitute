import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState('');
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 35, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 400, damping: 35, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement).closest('[data-cursor], a, button');
      if (el) {
        setHovering(true);
        setLabel((el as HTMLElement).dataset.cursor || '');
      } else {
        setHovering(false);
        setLabel('');
      }
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[95] pointer-events-none"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{
          width: label ? 72 : hovering ? 44 : 14,
          height: label ? 72 : hovering ? 44 : 14,
          backgroundColor: label ? 'rgba(255,122,0,0.92)' : hovering ? 'rgba(47,123,255,0.25)' : 'rgba(0,168,255,0.9)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="grid place-items-center rounded-full border border-white/30 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm"
        style={{ boxShadow: '0 0 24px rgba(0,168,255,0.5)' }}
      >
        {label ? (
          <span className="text-white text-[10px] font-extrabold tracking-widest">{label}</span>
        ) : hovering ? (
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
        ) : null}
      </motion.div>
    </motion.div>
  );
}
