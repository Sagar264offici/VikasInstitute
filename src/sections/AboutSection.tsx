import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MonitorSmartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" aria-label="About" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} align="left" />
          <Reveal delay={0.1}>
            <p className="text-slate-600 text-[15.5px] sm:text-[17px] leading-relaxed mt-5">{t.about.desc1}</p>
            <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed mt-3">{t.about.desc2}</p>
            <ul className="grid sm:grid-cols-2 gap-2.5 mt-6">
              {t.about.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 bg-white border border-slate-200 rounded-2xl px-4 py-3 text-[13.5px] font-semibold text-[#0a1a5c]">
                  <CheckCircle2 size={17} className="text-green-600 shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-tactile inline-flex items-center gap-2 mt-6 font-bold text-white bg-[#0a1a5c] px-6 py-3.5 rounded-full">
              {t.courses.learnMore} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="rounded-[28px] overflow-hidden bg-gradient-to-br from-[#0a1a5c] via-[#10237a] to-[#2456e6] text-white p-7 sm:p-9 shadow-[0_30px_80px_-30px_rgba(10,26,92,0.6)]">
              <div className="absolute inset-0 bg-blueprint" aria-hidden />
              <div className="relative">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-[12px] font-bold text-[#ffd166]">
                  <MonitorSmartphone size={14} /> {t.about.cardTitle}
                </span>
                <p className="text-white/60 text-[13.5px] mt-2">{t.about.cardSub}</p>
                {/* desks visual */}
                <div className="grid grid-cols-3 gap-2.5 mt-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="rounded-xl bg-white/10 border border-white/15 p-2.5">
                      <div className="h-8 rounded-md bg-gradient-to-b from-[#5b9bff]/60 to-transparent" />
                      <div className="h-1.5 w-3/4 mx-auto mt-1.5 rounded bg-white/30" />
                      <div className="h-1 w-1/2 mx-auto mt-1 rounded bg-[#ffb020]/60" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-6 bg-white rounded-2xl p-4 text-[#0a1a5c]">
                  <span className="w-10 h-10 grid place-items-center rounded-xl bg-green-100 text-green-700 font-extrabold">✓</span>
                  <div>
                    <p className="text-[13.5px] font-extrabold leading-tight">{t.lab.floating1t}</p>
                    <p className="text-[12px] text-slate-500">{t.lab.floating1s}</p>
                  </div>
                  <span className="ml-auto text-[11px] font-bold text-[#ff7a1a] bg-orange-50 px-3 py-1.5 rounded-full">LIVE</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white rounded-2xl shadow-2xl border border-slate-200 px-5 py-4 flex items-center gap-3 animate-floaty">
              <span className="w-10 h-10 grid place-items-center rounded-xl bg-gradient-to-br from-[#ff7a1a] to-[#ffb020] text-white font-extrabold">✦</span>
              <div>
                <p className="text-[13px] font-extrabold text-[#0a1a5c]">{t.lab.floating2t}</p>
                <p className="text-[11.5px] text-slate-500">{t.lab.floating2s}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
