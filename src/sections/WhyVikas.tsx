import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { features } from '../data/features';
import { Eyebrow } from '../components/RevealText';

export default function WhyVikas() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, features.length]);

  return (
    <section id="why" aria-label="Why choose us" className="relative bg-[#070b1a] py-24 sm:py-32 overflow-hidden noise scroll-mt-20">
      <div className="orb w-[500px] h-[500px] bg-[#2f7bff]/15 bottom-0 left-[-150px]" aria-hidden />
      <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8">
        <Eyebrow>{t.why.eyebrow}</Eyebrow>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 mt-4">
          <div className="lg:sticky lg:top-32 self-start">
            <h2 className="display-mega text-[13vw] sm:text-[64px] lg:text-[80px]">
              WHY
              <br />
              <span className="text-gradient-blue">VIKAS.</span>
            </h2>
            <p className="text-white/55 mt-5 max-w-sm text-[15px] leading-relaxed">{t.why.sub}</p>
            <div className="hidden lg:block w-1 h-48 bg-white/10 rounded-full mt-8 relative overflow-hidden">
              <motion.div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#00a8ff] to-[#ff7a00] rounded-full" style={{ height: useTransform(progress, [0, 4], ['0%', '100%']) }} />
            </div>
          </div>

          <div ref={ref} className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.05 * i }}
                className="group relative rounded-[28px] border border-white/10 bg-white/[0.03] p-7 sm:p-10 overflow-hidden hover:border-[#2f7bff]/40 hover:bg-white/[0.05] transition"
              >
                <span aria-hidden className="absolute -right-2 -top-6 font-display font-extrabold text-[110px] sm:text-[150px] leading-none text-white/[0.05] group-hover:text-[#2f7bff]/10 transition select-none">
                  {f.index}
                </span>
                <p className="font-mono text-[12px] text-[#ffab2e] font-bold tracking-[0.3em]">{f.index}</p>
                <h3 className="font-display font-extrabold text-[26px] sm:text-[38px] mt-2 tracking-tight">
                  {(lang === 'hi' ? f.titleHi : f.titleEn).toUpperCase()}
                </h3>
                <p className="text-white/55 mt-3 max-w-md text-[14.5px] leading-relaxed">{lang === 'hi' ? f.descHi : f.descEn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
