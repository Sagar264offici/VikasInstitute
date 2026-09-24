import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Eyebrow, RevealText } from '../components/RevealText';
import ParallaxImage from '../components/ParallaxImage';

const floats = ['PRACTICE', 'BUILD', 'TEST', 'IMPROVE'];

export default function PracticalLearning() {
  const { t } = useLanguage();
  return (
    <section aria-label="Practical training" className="relative bg-[#050816] py-24 sm:py-32 overflow-hidden">
      <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>{t.lab.eyebrow}</Eyebrow>
          <h2 className="display-mega text-[20vw] sm:text-[88px] lg:text-[120px] mt-4">
            <RevealText>LEARN</RevealText>
            <RevealText delay={0.06}>
              BY <span className="text-gradient-gold">DOING.</span>
            </RevealText>
          </h2>
          <p className="text-white/60 mt-6 max-w-md text-[15px] sm:text-[17px] leading-relaxed">{t.lab.desc}</p>
          <ul className="mt-7 space-y-3">
            {t.lab.points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 text-[14.5px] font-semibold text-white/80"
              >
                <span className="w-7 h-7 grid place-items-center rounded-full bg-[#00c853]/15 border border-[#00c853]/40 text-[#4ade80] text-[13px] font-extrabold shrink-0">✓</span>
                {p}
              </motion.li>
            ))}
          </ul>
          <Link to="/courses" className="btn-tactile inline-flex items-center gap-2 mt-8 font-extrabold text-[14px] text-white bg-white/8 border border-white/15 px-7 py-3.5 rounded-full hover:bg-white/15 tracking-wide">
            {t.lab.cta.toUpperCase()} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative">
          <motion.div
            initial={{ clipPath: 'inset(12% 8% 12% 8% round 32px)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 32px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[32px] overflow-hidden border border-white/15"
            data-cursor="VIEW"
          >
            <ParallaxImage src="/gallery/poster-2.jpg" alt="Faculty guiding a student" className="aspect-[4/5] sm:aspect-[4/4.4]" speed={0.1} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />
          </motion.div>
          {floats.map((f, i) => (
            <motion.span
              key={f}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
              className={`absolute glass-pill rounded-full px-5 py-2.5 text-[11px] font-extrabold tracking-[0.2em] ${
                i === 0 ? '-left-2 top-8' : i === 1 ? '-right-2 top-1/3' : i === 2 ? '-left-3 bottom-1/4' : '-right-1 bottom-10'
              } ${i === 1 ? 'text-[#ffab2e]' : 'text-white'}`}
            >
              {f}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
