import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, Code2, BrainCircuit, Monitor, Wifi } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';

function useMouseTilt() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [6, -6]);
  const ry = useTransform(mx, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(mx, [-0.5, 0.5], ['30%', '70%']);
  return { mx, my, rx, ry, glowX };
}

export default function Hero() {
  const { t } = useLanguage();
  const { mx, my, rx, ry, glowX } = useMouseTilt();

  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden bg-[#060f38] text-white"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-blueprint" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1a5c]/30 to-[#060f38]" aria-hidden />
      <motion.div className="absolute top-[-120px] w-[520px] h-[520px] rounded-full bg-[#2f7bff]/30 blur-[130px]" style={{ left: glowX }} aria-hidden />
      <div className="absolute bottom-[-140px] right-[-80px] w-[420px] h-[420px] rounded-full bg-[#ff8a1e]/25 blur-[120px]" aria-hidden />

      {/* floating icons - desktop */}
      <div className="hidden lg:block" aria-hidden>
        {[
          { Icon: Code2, x: '8%', y: '22%', d: 0 },
          { Icon: BrainCircuit, x: '88%', y: '20%', d: 1.2 },
          { Icon: Monitor, x: '90%', y: '66%', d: 2 },
          { Icon: Wifi, x: '6%', y: '68%', d: 0.6 },
        ].map(({ Icon, x, y, d }, i) => (
          <motion.span
            key={i}
            className="absolute w-12 h-12 grid place-items-center rounded-2xl bg-white/8 border border-white/15 text-[#8db4ff] animate-floaty"
            style={{ left: x, top: y, animationDelay: `${d}s` }}
          >
            <Icon size={20} />
          </motion.span>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-14 sm:pt-20 sm:pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        {/* copy */}
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-bold bg-white/10 border border-white/20 rounded-full px-4 py-2 text-[#ffd166]">
              <Sparkles size={14} /> {t.hero.badge}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-extrabold tracking-[0.14em] text-[#8db4ff] text-[13px] sm:text-[15px] mt-5"
          >
            {t.hero.institute}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
            className="text-white/60 italic text-[14px] sm:text-[16px] mt-1"
          >
            “{t.hero.tagline}”
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold tracking-tight text-[34px] leading-[1.05] sm:text-[56px] lg:text-[60px] mt-4"
          >
            {t.hero.headlineA}
            <br />
            <span className="text-gradient-gold">{t.hero.headlineB}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 text-[15px] sm:text-[18px] leading-relaxed mt-5 max-w-xl"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 mt-7"
          >
            <Link
              to="/courses"
              className="btn-tactile inline-flex items-center justify-center gap-2 font-bold text-[16px] text-white bg-gradient-to-r from-[#2456e6] to-[#2f7bff] px-8 py-4 rounded-full shadow-2xl shadow-blue-600/40 min-h-[56px]"
            >
              {t.hero.primaryCta} <ArrowRight size={18} />
            </Link>
            <div className="grid grid-cols-2 sm:flex gap-3">
              <Link
                to="/contact"
                className="btn-tactile inline-flex items-center justify-center font-bold text-[15px] bg-white/10 border border-white/25 px-6 py-4 rounded-full hover:bg-white/20 min-h-[56px]"
              >
                {t.hero.secondaryCta}
              </Link>
              <a
                href={contactInfo.phoneLinks[0]}
                className="btn-tactile inline-flex items-center justify-center gap-2 font-bold text-[15px] bg-gradient-to-r from-[#ff7a1a] to-[#ffb020] px-6 py-4 rounded-full shadow-xl shadow-orange-900/40 min-h-[56px]"
              >
                <Phone size={16} /> {t.nav.callNow}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            className="flex items-center gap-5 sm:gap-8 mt-8 pt-6 border-t border-white/12"
          >
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display font-extrabold text-[20px] sm:text-[26px] text-white">{s.value}</p>
                <p className="text-white/55 text-[12px] sm:text-[13px] font-medium">{s.label}</p>
              </div>
            ))}
            <p className="hidden sm:block ml-auto text-[12px] font-bold tracking-[0.2em] text-white/40 uppercase">{t.hero.mantra}</p>
          </motion.div>
        </div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          {/* lab card */}
          <div className="relative rounded-[26px] overflow-hidden border border-white/20 bg-gradient-to-br from-[#10237a] to-[#060f38] shadow-[0_40px_100px_-30px_rgba(47,123,255,0.5)]">
            {/* fake lab scene built with CSS */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] p-5 sm:p-6">
              <div className="absolute inset-0 opacity-40" aria-hidden>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {['AI', 'JAVA', 'PYTHON', 'C'].map((w) => (
                    <span key={w} className="text-[10px] font-extrabold tracking-widest px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-[#9fc0ff]">{w}</span>
                  ))}
                </div>
              </div>
              {/* monitors row */}
              <div className="relative mt-10 grid grid-cols-4 gap-2 sm:gap-3">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    className="rounded-lg bg-[#0b1c5e] border border-[#2f7bff]/30 overflow-hidden"
                  >
                    <div className="h-10 sm:h-14 bg-gradient-to-b from-[#1a3aa8] to-[#0b1c5e] p-1.5">
                      <div className="h-1 w-2/3 rounded bg-[#5b9bff]/70 mb-1" />
                      <div className="h-1 w-1/2 rounded bg-white/25 mb-1" />
                      <div className="h-1 w-3/4 rounded bg-[#ffb020]/60" />
                    </div>
                    <div className="h-1.5 bg-[#060f38] mx-auto w-1/2 rounded-b" />
                  </motion.div>
                ))}
              </div>
              {/* AI orb */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#060f38]/70 border border-[#2f7bff]/40 rounded-full pl-2 pr-3 py-1.5 backdrop-blur">
                <span className="w-7 h-7 grid place-items-center rounded-full bg-gradient-to-br from-[#2f7bff] to-[#7db4ff] text-white text-[11px] font-extrabold">AI</span>
                <span className="text-[11px] font-bold text-[#9fc0ff] tracking-widest">LEARN • PRACTICE • GROW</span>
              </div>
              {/* code window */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 rounded-2xl bg-[#040b28]/90 border border-white/15 backdrop-blur p-3.5 sm:p-4 shadow-2xl"
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 text-[10.5px] font-mono text-white/40">{t.hero.codeLabel} — student.py</span>
                </div>
                <pre className="font-mono text-[11px] sm:text-[12.5px] leading-relaxed overflow-hidden">
                  <code className="text-[#9fc0ff]">{'def bright_future(skills):'}</code>{'\n'}
                  <code className="text-white/80">{'    practice(skills)'}</code>{'\n'}
                  <code className="text-[#ffd166]">{'    return "Learn Today, Lead Tomorrow"'}</code>
                </pre>
              </motion.div>
            </div>
          </div>

          {/* floating chips */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity }} className="absolute -left-3 sm:-left-8 top-1/3 bg-white text-[#0a1a5c] rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-2.5">
            <span className="w-9 h-9 grid place-items-center rounded-xl bg-green-100 text-green-700 font-extrabold text-[13px]">✓</span>
            <span><span className="block text-[13px] font-extrabold leading-none">Practical</span><span className="block text-[11px] text-slate-500 mt-1">Daily lab sessions</span></span>
          </motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -right-2 sm:-right-6 bottom-16 bg-white text-[#0a1a5c] rounded-2xl shadow-2xl px-4 py-3">
            <span className="block text-[13px] font-extrabold leading-none">🎓 {t.common.admissionsOpen}</span>
            <span className="block text-[11px] text-[#ff7a1a] font-bold mt-1">Join Today</span>
          </motion.div>
        </motion.div>
      </div>

      {/* mantra strip mobile */}
      <p className="sm:hidden relative text-center text-[11px] font-bold tracking-[0.22em] text-white/40 uppercase pb-8">{t.hero.mantra}</p>
    </section>
  );
}
