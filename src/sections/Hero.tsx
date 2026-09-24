import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { photos } from '../data/images';
import EduImage from '../components/EduImage';
import Reveal from '../components/Reveal';

export default function Hero() {
  const { t } = useLanguage();
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const apply = (rx: number, ry: number) => {
      el.style.transform = `perspective(1400px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => apply(-ny * 10, nx * 14));
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = '';
    };
    el.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, []);
  return (
    <section aria-label="Introduction" className="bg-[#f7f7f5] border-b border-[#e5e5e5]">
      <div className="wrap grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center py-10 sm:py-14 lg:py-20">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] border border-[#dadada] bg-white rounded-full px-4 py-2 text-[#333]">
            <span className="w-2 h-2 rounded-full bg-[#2e7d32]" aria-hidden />
            {t.hero.badge}
          </p>
          <h1 className="h-display text-[40px] sm:text-[56px] lg:text-[68px] mt-6">
            {t.hero.institute}
          </h1>
          <p className="font-serif-accent text-[20px] sm:text-[24px] text-[#333] mt-3">
            &ldquo;{t.hero.tagline}&rdquo;
          </p>
          <p className="lede text-[15px] sm:text-[17px] mt-4 max-w-xl">{t.hero.sub}</p>

          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <Link to="/courses" className="btn btn-dark">
              {t.hero.primaryCta} <ArrowRight size={17} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              {t.hero.secondaryCta}
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-7 pt-6 border-t border-[#e5e5e5]">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-extrabold text-[19px]">{s.value}</span>
                <span className="text-[12.5px] font-semibold text-[#6b6b6b]">{s.label}</span>
              </div>
            ))}
            <p className="w-full sm:w-auto sm:ml-auto text-[11.5px] font-mono tracking-[0.18em] text-[#6b6b6b]">
              RISHIKESH • UTTARAKHAND
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:justify-self-end w-full">
          <figure>
            <div ref={tiltRef} className="img-frame rounded-2xl tilt-3d">
              <EduImage
                photo={photos.hero}
                eager
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="aspect-[4/3] lg:aspect-[4/3.4]"
              />
            </div>
            <figcaption className="text-[12.5px] text-[#6b6b6b] mt-3 flex items-center justify-between gap-3">
              <span>{t.about.cardTitle} — {t.about.cardSub}</span>
              <span className="font-mono text-[11px] tracking-[0.14em] shrink-0">{t.hero.mantra}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
