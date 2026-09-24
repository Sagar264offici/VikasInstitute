import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { RevealText } from '../components/RevealText';

export default function Manifesto() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bg = useTransform(scrollYProgress, [0, 0.5, 1], ['#050816', '#0a1024', '#050816']);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.92, 1]);

  return (
    <motion.section
      id="manifesto"
      ref={ref}
      aria-label="Manifesto"
      style={{ backgroundColor: bg }}
      className="relative overflow-hidden py-24 sm:py-36 noise"
    >
      <div className="orb w-[500px] h-[500px] bg-[#1a33a3]/30 top-0 left-[-150px]" aria-hidden />
      <motion.div style={{ scale }} className="relative z-[2] max-w-6xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.35em] text-[#5b9bff] font-bold">01 — MANIFESTO</p>
        <h2 className="display-mega text-[13vw] sm:text-[72px] lg:text-[96px] mt-6 text-white">
          <RevealText>THE WORLD</RevealText>
          <RevealText delay={0.08}>
            <span className="text-stroke">IS CHANGING.</span>
          </RevealText>
        </h2>
        <h2 className="display-mega text-[13vw] sm:text-[72px] lg:text-[96px] mt-4 text-white/90">
          <RevealText>THE WAY WE LEARN</RevealText>
          <RevealText delay={0.08}>
            SHOULDN&rsquo;T STAY <span className="text-gradient-gold">THE SAME.</span>
          </RevealText>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="mt-14 rounded-[28px] border border-white/12 bg-gradient-to-br from-[#0a1024] to-[#060f38] p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blueprint-fine opacity-60" aria-hidden />
          <div className="relative">
            <p className="font-mono text-[11px] tracking-[0.35em] text-[#ffab2e] font-bold">VIKAS IT INSTITUTE</p>
            <p className="font-display font-extrabold text-[28px] sm:text-[44px] mt-3 leading-tight">
              &ldquo;{t.trust.line1}.&rdquo;
            </p>
            <p className="text-white/60 text-[15px] sm:text-[18px] mt-4 max-w-2xl leading-relaxed">
              {t.about.desc1} {t.about.desc2}
            </p>
            <div className="flex flex-wrap gap-2.5 mt-6">
              {t.trust.items.map((item) => (
                <span key={item} className="text-[12px] font-bold px-4 py-2 rounded-full bg-white/6 border border-white/12 text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
