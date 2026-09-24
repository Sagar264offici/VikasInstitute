import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowRight, ArrowDown, Phone, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const spotX = useTransform(sx, [-0.5, 0.5], ['35%', '65%']);
  const spotY = useTransform(sy, [-0.5, 0.5], ['30%', '60%']);
  const imgX = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const imgY = useTransform(sy, [-0.5, 0.5], [-6, 6]);
  const gridX = useTransform(sx, [-0.5, 0.5], [-14, 14]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      aria-label="Introduction"
      className="relative min-h-[100svh] overflow-hidden bg-[#050816] text-white flex flex-col noise scanlines"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      {/* light field */}
      <motion.div className="absolute inset-0" style={{ opacity: fade }} aria-hidden>
        <motion.div className="absolute inset-0 bg-blueprint" style={{ x: gridX }} />
        <motion.div className="orb w-[60vw] h-[60vw] max-w-[720px] max-h-[720px] bg-[#1a33a3]/50 top-[-15%] left-1/2 -translate-x-1/2" style={{ x: spotX }} />
        <div className="orb w-[420px] h-[420px] bg-[#00a8ff]/20 top-[20%] left-[-120px]" />
        <div className="orb w-[380px] h-[380px] bg-[#ff7a00]/16 bottom-[5%] right-[-100px]" />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] bg-[radial-gradient(circle,rgba(0,168,255,0.22),transparent_65%)]"
          style={{ left: spotX, top: spotY, x: '-50%', y: '-50%' }}
        />
        {/* giant ghost type */}
        <span aria-hidden className="absolute bottom-[2%] left-1/2 -translate-x-1/2 font-display font-extrabold text-[18vw] leading-none text-transparent whitespace-nowrap select-none pointer-events-none" style={{ WebkitTextStroke: '1px rgba(140,175,255,0.08)' }}>
          VIKAS IT
        </span>
      </motion.div>

      <motion.div style={{ opacity: fade, y: heroY }} className="relative z-[2] flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 sm:px-8 pt-32 pb-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.6 }}>
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-extrabold tracking-[0.18em] bg-white/6 border border-white/15 rounded-full px-4 py-2 text-[#ffd166] backdrop-blur">
            <Sparkles size={13} /> {t.hero.badge}
          </span>
        </motion.div>

        <div className="mt-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="font-mono text-[12px] tracking-[0.35em] text-[#5b9bff] font-bold"
            >
              {t.hero.institute} — RISHIKESH • UTTARAKHAND
            </motion.p>
            {lang === 'hi' ? (
              <h1 className="display-mega text-[10.5vw] sm:text-[54px] lg:text-[68px] mt-3 leading-[1.18]">
                <span className="block overflow-hidden pb-1">
                  <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 1.75, ease: [0.22, 1, 0.36, 1] }} className="block">
                    {t.hero.headlineA}
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-2">
                  <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 1.9, ease: [0.22, 1, 0.36, 1] }} className="block text-gradient-gold">
                    {t.hero.headlineB}
                  </motion.span>
                </span>
              </h1>
            ) : (
              <h1 className="display-mega text-[15vw] sm:text-[84px] lg:text-[104px] mt-3">
                <span className="block overflow-hidden">
                  <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 1.75, ease: [0.22, 1, 0.36, 1] }} className="block">
                    DON&rsquo;T JUST
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 1.85, ease: [0.22, 1, 0.36, 1] }} className="block text-white/35">
                    FOLLOW THE
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 1.95, ease: [0.22, 1, 0.36, 1] }} className="block">
                    FUTURE<span className="text-[#ff7a00]">.</span>
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 2.05, ease: [0.22, 1, 0.36, 1] }} className="block text-gradient-gold">
                    CREATE IT WITH AI.
                  </motion.span>
                </span>
              </h1>
            )}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.7 }}
              className="text-white/60 text-[15px] sm:text-[18px] leading-relaxed mt-6 max-w-xl"
            >
              {t.hero.sub}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 mt-8"
            >
              <MagneticButton>
                <Link
                  to="/courses"
                  data-cursor="EXPLORE"
                  className="btn-tactile btn-glow-blue inline-flex items-center justify-center gap-2 font-extrabold text-[15px] text-white bg-gradient-to-r from-[#2456e6] to-[#00a8ff] px-8 py-4 rounded-full min-h-[56px] tracking-wide"
                >
                  {t.hero.primaryCta.toUpperCase()} <ArrowRight size={18} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <div className="grid grid-cols-2 sm:flex gap-3">
                  <Link
                    to="/contact"
                    className="btn-tactile inline-flex items-center justify-center font-bold text-[14px] bg-white/6 border border-white/20 px-6 py-4 rounded-full hover:bg-white/12 min-h-[56px] backdrop-blur"
                  >
                    {t.hero.secondaryCta.toUpperCase()}
                  </Link>
                  <a
                    href={contactInfo.phoneLinks[0]}
                    className="btn-tactile inline-flex items-center justify-center gap-2 font-bold text-[14px] bg-gradient-to-r from-[#ff7a00] to-[#ffb000] px-6 py-4 rounded-full min-h-[56px]"
                  >
                    <Phone size={15} /> {t.nav.callNow.toUpperCase()}
                  </a>
                </div>
              </MagneticButton>
            </motion.div>
          </div>

          {/* interactive visual */}
          <motion.div style={{ x: imgX, y: imgY }} className="relative hidden lg:block" aria-hidden>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.1, duration: 1 }}
              className="relative rounded-[28px] overflow-hidden border border-white/15 bg-gradient-to-br from-[#0a1024] to-[#060f38] shadow-[0_40px_120px_-30px_rgba(0,168,255,0.4)]"
            >
              <img src="/gallery/poster-1.jpg" alt="" loading="eager" className="w-full aspect-[4/5] object-cover opacity-80" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/40" />
              {/* neural rings */}
              <div className="absolute top-6 right-6 w-24 h-24">
                <span className="absolute inset-0 rounded-full border border-[#00a8ff]/50 animate-spin-slow" style={{ borderTopColor: 'transparent' }} />
                <span className="absolute inset-3 rounded-full border border-[#ff7a00]/40 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                <span className="absolute inset-0 grid place-items-center font-extrabold text-[13px] bg-[#050816]/60 rounded-full backdrop-blur border border-white/10">AI</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="rounded-2xl bg-[#040b28]/85 border border-white/12 backdrop-blur p-4">
                  <p className="font-mono text-[10px] text-white/40 tracking-widest">{t.hero.codeLabel} — student.py</p>
                  <pre className="font-mono text-[12px] leading-relaxed mt-1.5 overflow-hidden">
                    <code className="text-[#9fc0ff]">def bright_future(skills):</code>{'\n'}
                    <code className="text-white/80">    practice(skills)</code>{'\n'}
                    <code className="text-[#ffd166]">    return &quot;{lang === 'hi' ? 'आज सीखें, कल नेतृत्व करें' : 'Learn Today, Lead Tomorrow'}&quot;</code>
                  </pre>
                </div>
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -left-8 top-10 glass-pill rounded-2xl px-4 py-3">
              <p className="text-[13px] font-extrabold">✓ {t.lab.floating1t}</p>
              <p className="text-[11px] text-white/55">{t.lab.floating1s}</p>
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -right-5 bottom-24 glass-pill rounded-2xl px-4 py-3">
              <p className="text-[13px] font-extrabold">🎓 {t.common.admissionsOpen}</p>
              <p className="text-[11px] text-[#ffab2e] font-bold">{lang === 'hi' ? 'आज ही जुड़ें' : 'Join Today'}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex items-center gap-6 sm:gap-10 mt-10 pt-6 border-t border-white/10"
        >
          {t.hero.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-extrabold text-[22px] sm:text-[28px]">{s.value}</p>
              <p className="text-white/45 text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
          <p className="hidden md:block ml-auto font-mono text-[11px] tracking-[0.3em] text-white/35">{t.hero.mantra.toUpperCase()}</p>
        </motion.div>
      </motion.div>

      <motion.a
        href="#manifesto"
        style={{ opacity: fade }}
        className="relative z-[2] mx-auto mb-6 flex flex-col items-center gap-2 text-white/40 hover:text-white transition"
        aria-label="Scroll to explore"
      >
        <span className="font-mono text-[10px] tracking-[0.35em]">SCROLL TO EXPLORE</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
