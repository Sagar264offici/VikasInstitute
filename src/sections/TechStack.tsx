import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { techChips, advancedTracksEn, advancedTracksHi } from '../data/courses';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function TechStack() {
  const { t, lang } = useLanguage();
  const tracks = lang === 'hi' ? advancedTracksHi : advancedTracksEn;
  return (
    <section aria-label="Technologies" className="relative bg-[#060f38] text-white overflow-hidden">
      <div className="absolute inset-0 bg-blueprint" aria-hidden />
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[#2f7bff]/25 blur-[110px] rounded-full" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading dark eyebrow={t.tech.eyebrow} title={t.tech.title} sub={t.tech.sub} />
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-9 max-w-4xl mx-auto">
            {techChips.map((chip, i) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 10) * 0.04 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="cursor-default text-[13px] sm:text-[14px] font-bold px-4 sm:px-5 py-2.5 rounded-full bg-white/8 border border-white/15 text-[#c9d8ff] hover:bg-white hover:text-[#0a1a5c] hover:border-white transition-all"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 bg-white/6 border border-white/12 rounded-[24px] p-6 sm:p-8 backdrop-blur">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#ffd166] text-center">Advanced learning tracks</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 mt-5">
              {tracks.map((tr) => (
                <div key={tr} className="text-[13px] font-semibold text-white/75 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-center hover:bg-white/12 hover:text-white transition">
                  {tr}
                </div>
              ))}
            </div>
            <p className="text-center text-white/45 text-[12.5px] mt-5">{t.tech.note}</p>
            <div className="text-center mt-4">
              <Link to="/contact#enquiry" className="btn-tactile inline-flex items-center gap-2 font-bold bg-white text-[#0a1a5c] px-6 py-3.5 rounded-full">
                {t.tech.cta} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
