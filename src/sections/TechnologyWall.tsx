import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { techChips, advancedTracksEn, advancedTracksHi } from '../data/courses';
import { Eyebrow, RevealText } from '../components/RevealText';

const sizes = ['text-[34px]', 'text-[52px]', 'text-[26px]', 'text-[68px]', 'text-[30px]', 'text-[46px]'];

export default function TechnologyWall() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x1 = useTransform(scrollYProgress, [0, 1], ['4%', '-18%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-14%', '6%']);
  const tracks = lang === 'hi' ? advancedTracksHi : advancedTracksEn;

  return (
    <section ref={ref} aria-label="Technologies" className="relative bg-[#050816] py-24 sm:py-32 overflow-hidden noise">
      <div className="orb w-[480px] h-[480px] bg-[#7c3aed]/20 top-10 left-1/3" aria-hidden />
      <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8">
        <Eyebrow>{t.tech.eyebrow}</Eyebrow>
        <h2 className="display-mega text-[13vw] sm:text-[72px] lg:text-[96px] mt-4">
          <RevealText>LEARN</RevealText>
          <RevealText delay={0.06}>
            WHAT <span className="text-gradient-blue">MATTERS.</span>
          </RevealText>
        </h2>
        <p className="text-white/50 max-w-xl mt-4 text-[15px] leading-relaxed">{t.tech.sub}</p>
      </div>

      {/* drifting rows */}
      <div className="relative z-[2] mt-12 space-y-5 select-none" aria-hidden>
        <motion.div style={{ x: x1 }} className="flex gap-4 w-max">
          {[...techChips.slice(0, 7), ...techChips.slice(0, 7)].map((w, i) => (
            <span
              key={i}
              className={`font-display font-extrabold whitespace-nowrap px-2 ${sizes[i % sizes.length]} ${
                i % 3 === 0 ? 'text-white' : i % 3 === 1 ? 'text-stroke' : 'text-white/25'
              }`}
            >
              {w}
            </span>
          ))}
        </motion.div>
        <motion.div style={{ x: x2 }} className="flex gap-4 w-max">
          {[...techChips.slice(7), ...techChips.slice(7)].map((w, i) => (
            <span
              key={i}
              className={`font-display font-extrabold whitespace-nowrap px-2 ${sizes[(i + 2) % sizes.length]} ${
                i % 3 === 0 ? 'text-gradient-gold' : i % 3 === 1 ? 'text-white/80' : 'text-stroke'
              }`}
            >
              {w}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8 mt-12">
        <p className="font-mono text-[11px] tracking-[0.3em] text-white/35 font-bold">{lang === 'hi' ? 'उन्नत अध्ययन मार्ग' : 'ADVANCED LEARNING TRACKS'}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tracks.map((tr) => (
            <span key={tr} className="text-[12.5px] font-bold px-4 py-2 rounded-full bg-white/5 border border-white/12 text-white/70 hover:border-[#00a8ff]/50 hover:text-white transition">
              {tr}
            </span>
          ))}
        </div>
        <p className="text-white/35 text-[13px] mt-4 italic">{t.tech.note}</p>
        <Link to="/contact" className="btn-tactile inline-flex mt-5 font-extrabold text-[13px] tracking-widest text-[#ffab2e] border-b-2 border-[#ff7a00]/50 pb-1">
          {t.tech.cta.toUpperCase()} →
        </Link>
      </div>
    </section>
  );
}
