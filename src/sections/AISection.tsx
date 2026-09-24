import { Link } from 'react-router-dom';
import { BrainCircuit, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function AISection() {
  const { t } = useLanguage();
  return (
    <section aria-label="AI learning" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0a1a5c] via-[#3b2a8f] to-[#0a1a5c] text-white px-6 py-12 sm:p-14">
        <div className="absolute inset-0 bg-blueprint" aria-hidden />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-24 -top-24 w-[340px] h-[340px] rounded-full border border-white/15"
          aria-hidden
        >
          <span className="absolute top-4 left-1/2 w-3 h-3 rounded-full bg-[#ffd166]" />
          <span className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-[#5b9bff]" />
        </motion.div>
        <div className="absolute left-1/2 top-0 w-[420px] h-[220px] bg-[#7d5bff]/30 blur-[100px] rounded-full" aria-hidden />

        <div className="relative grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
          <div>
            <SectionHeading dark eyebrow={t.ai.eyebrow} title={t.ai.title} sub={t.ai.sub} align="left" />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3">
                {t.ai.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[14.5px] text-white/85 bg-white/8 border border-white/12 rounded-2xl px-4 py-3.5">
                    <CheckCircle2 size={18} className="text-[#7dffa8] shrink-0 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
              <Link to="/courses" className="btn-tactile inline-flex items-center gap-2 mt-6 font-bold text-[#0a1a5c] bg-white px-6 py-3.5 rounded-full">
                {t.ai.cta} <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mx-auto max-w-[380px] text-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mx-auto w-52 h-52 sm:w-64 sm:h-64"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2f7bff] via-[#7d5bff] to-[#ff8a1e] opacity-90 blur-[2px]" />
                <div className="absolute inset-[10px] rounded-full bg-[#0a1a5c] grid place-items-center border border-white/20">
                  <BrainCircuit size={72} className="text-[#9fc0ff]" />
                </div>
                {['AI', 'ML', 'DATA'].map((w, i) => (
                  <motion.span
                    key={w}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.7 }}
                    className="absolute text-[11px] font-extrabold tracking-widest bg-white text-[#0a1a5c] px-3 py-1.5 rounded-full shadow-xl"
                    style={{
                      top: i === 0 ? '6%' : i === 1 ? '46%' : '84%',
                      left: i === 0 ? '-8%' : i === 1 ? '88%' : '4%',
                    }}
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.div>
              <p className="mt-6 text-white/55 text-[13px] font-medium tracking-wide">Practical • Responsible • Career-relevant</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
