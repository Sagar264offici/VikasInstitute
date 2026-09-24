import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor, Code2, FolderKanban, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { RevealText } from '../components/RevealText';

export default function LabSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const overlay = useTransform(scrollYProgress, [0, 0.6], [0.85, 0.55]);

  const items = [
    { icon: Monitor, en: 'Modern Computer Lab', hi: 'आधुनिक कंप्यूटर लैब' },
    { icon: Code2, en: 'Hands-on Practice', hi: 'हैंड्स-ऑन प्रैक्टिस' },
    { icon: FolderKanban, en: 'Project-Based Learning', hi: 'प्रोजेक्ट-आधारित लर्निंग' },
    { icon: Users, en: 'Technical Guidance', hi: 'तकनीकी मार्गदर्शन' },
  ];

  return (
    <section ref={ref} aria-label="Computer lab" className="relative min-h-[90vh] flex items-end overflow-hidden">
      <motion.img
        src="/gallery/poster-1.jpg"
        alt="Vikas IT Institute computer lab"
        loading="lazy"
        style={{ y: yBg, scale: 1.18 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-[#050816]/30" aria-hidden />
      <div className="absolute inset-0 bg-[#1a33a3]/15 mix-blend-overlay" aria-hidden />

      <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-24 pt-40 w-full">
        <p className="font-mono text-[11px] tracking-[0.35em] text-[#ffab2e] font-bold">06 — THE LAB</p>
        <h2 className="display-mega text-[16vw] sm:text-[84px] lg:text-[120px] mt-4 text-white">
          <RevealText>YOUR</RevealText>
          <RevealText delay={0.06}>WORKSPACE</RevealText>
          <RevealText delay={0.12}>
            <span className="text-stroke" style={{ WebkitTextStrokeColor: 'rgba(255,255,255,0.5)' }}>MATTERS.</span>
          </RevealText>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          {items.map((it, i) => (
            <motion.div
              key={it.en}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-pill rounded-3xl p-5 sm:p-6"
            >
              <it.icon size={22} className="text-[#7db4ff]" />
              <p className="font-extrabold text-[14px] sm:text-[16px] mt-3">{it.en}</p>
              <p className="text-white/50 text-[12px] mt-1">{it.hi}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-white/60 text-[14px] mt-6">{t.about.cardSub}</p>
        <Link to="/contact" className="btn-tactile btn-glow-orange inline-flex mt-4 font-extrabold text-[14px] text-white bg-gradient-to-r from-[#ff7a00] to-[#ffb000] px-8 py-4 rounded-full tracking-wide">
          {t.about.cta.toUpperCase()} →
        </Link>
      </div>
    </section>
  );
}
