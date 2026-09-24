import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrainCircuit, Zap, ShieldCheck, PenTool } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Eyebrow, RevealText } from '../components/RevealText';

const icons = [Zap, PenTool, ShieldCheck];

export default function AISection() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yOrb = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} aria-label="AI learning" className="relative bg-[#070b1a] py-24 sm:py-36 overflow-hidden noise scanlines">
      <div className="absolute inset-0 bg-blueprint opacity-70" aria-hidden />
      <motion.div style={{ y: yOrb }} className="orb w-[620px] h-[620px] bg-[#1a33a3]/45 top-[-100px] left-1/2 -translate-x-1/2" aria-hidden />
      {/* neural rings */}
      <div className="absolute right-[-140px] top-1/2 -translate-y-1/2 w-[480px] h-[480px] hidden md:block" aria-hidden>
        <motion.div style={{ rotate }} className="absolute inset-0">
          <span className="absolute inset-0 rounded-full border border-[#00a8ff]/25" />
          <span className="absolute inset-8 rounded-full border border-dashed border-[#2f7bff]/30" />
          <span className="absolute inset-20 rounded-full border border-[#ff7a00]/25" />
          {['AI', 'ML', 'DATA'].map((w, i) => (
            <span key={w} className="absolute w-14 h-14 grid place-items-center rounded-full glass-pill text-[11px] font-extrabold tracking-widest" style={{ top: `${12 + i * 30}%`, left: `${8 + i * 32}%` }}>
              {w}
            </span>
          ))}
        </motion.div>
        <span className="absolute inset-0 m-auto w-28 h-28 grid place-items-center rounded-full bg-gradient-to-br from-[#2f7bff] to-[#00a8ff] shadow-[0_0_80px_rgba(0,168,255,0.5)]">
          <BrainCircuit size={40} className="text-white" />
        </span>
      </div>

      <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8">
        <Eyebrow>{t.ai.eyebrow}</Eyebrow>
        <h2 className="display-mega text-[13.5vw] sm:text-[76px] lg:text-[110px] mt-4 max-w-5xl">
          <RevealText>DON&rsquo;T JUST FOLLOW</RevealText>
          <RevealText delay={0.06}>THE FUTURE.</RevealText>
          <RevealText delay={0.12}>
            <span className="text-gradient-neon">CREATE IT.</span>
          </RevealText>
        </h2>
        <p className="text-white/60 max-w-xl mt-6 text-[15px] sm:text-[17px] leading-relaxed">{t.ai.sub}</p>

        <div className="grid sm:grid-cols-3 gap-4 mt-10 max-w-4xl">
          {t.ai.points.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="rounded-3xl border border-white/12 bg-white/[0.04] backdrop-blur p-6 hover:border-[#00a8ff]/40 transition group"
              >
                <span className="w-11 h-11 grid place-items-center rounded-2xl bg-gradient-to-br from-[#2f7bff]/30 to-[#00a8ff]/10 border border-[#00a8ff]/30 text-[#7db4ff] group-hover:scale-110 transition">
                  <Icon size={20} />
                </span>
                <p className="font-bold text-[14.5px] mt-4 leading-relaxed text-white/85">{p}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="font-mono text-[11px] tracking-[0.3em] text-white/30 mt-8">{lang === 'hi' ? 'व्यावहारिक • जिम्मेदार • करियर के लिए उपयोगी' : 'PRACTICAL • RESPONSIBLE • CAREER-RELEVANT'}</p>
        <Link to="/courses" className="btn-tactile btn-glow-blue inline-flex mt-4 font-extrabold text-[14px] text-white bg-gradient-to-r from-[#2456e6] to-[#00a8ff] px-8 py-4 rounded-full tracking-wide">
          {t.ai.cta.toUpperCase()} →
        </Link>
      </div>
    </section>
  );
}
