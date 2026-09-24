import { Link } from 'react-router-dom';
import { CheckCircle2, TerminalSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function PracticalTraining() {
  const { t } = useLanguage();
  return (
    <section aria-label="Practical training" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* code editor visual */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative rounded-[26px] bg-[#040b28] text-white overflow-hidden border border-[#1a33a3] shadow-[0_30px_80px_-30px_rgba(10,26,92,0.7)]">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 flex items-center gap-2 text-[12.5px] font-mono text-white/50">
                <TerminalSquare size={14} /> practice — vikas-lab
              </span>
              <span className="ml-auto text-[10.5px] font-bold bg-green-500/20 text-green-300 px-2.5 py-1 rounded-full border border-green-400/30">● LIVE</span>
            </div>
            <pre className="p-5 sm:p-6 font-mono text-[12.5px] sm:text-[13.5px] leading-[1.8] overflow-x-auto">
              <code><span className="text-[#8db4ff]">const</span> <span className="text-white">student</span> <span className="text-white/50">=</span> <span className="text-[#ffd166]">{'{ name: "You", goal: "IT Skills" }'}</span></code>{'\n'}
              <code><span className="text-[#8db4ff]">function</span> <span className="text-[#7dffa8]">learnByDoing</span><span className="text-white/70">()</span> <span className="text-white/50">{'{'}</span></code>{'\n'}
              <code>{'  '} <span className="text-[#7dffa8]">practice</span><span className="text-white/70">(</span><span className="text-[#ffd166]">"code • design • tally • web"</span><span className="text-white/70">)</span></code>{'\n'}
              <code>{'  '} <span className="text-[#8db4ff]">return</span> <span className="text-[#ffd166]">"skills++"</span></code>{'\n'}
              <code><span className="text-white/50">{'}'}</span></code>
            </pre>
            <div className="px-5 pb-5">
              <div className="rounded-2xl bg-white/6 border border-white/12 p-4 flex items-center gap-3">
                <span className="relative flex w-3 h-3"><span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-60 animate-ping" /><span className="relative inline-flex w-3 h-3 rounded-full bg-green-400" /></span>
                <p className="text-[13px] text-white/70">Cursor in lab… <span className="text-white font-semibold">you type, trainer guides.</span></p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow={t.lab.eyebrow} title={t.lab.title} sub={t.lab.desc} align="left" />
          <Reveal delay={0.1}>
            <ul className="mt-6 space-y-3">
              {t.lab.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[14.5px] font-semibold text-[#0a1a5c] bg-white border border-slate-200 rounded-2xl px-4 py-3.5">
                  <CheckCircle2 size={18} className="text-[#1a33a3] shrink-0" /> {p}
                </li>
              ))}
            </ul>
            <Link to="/courses" className="btn-tactile inline-flex items-center gap-2 mt-6 font-bold text-white bg-gradient-to-r from-[#1a33a3] to-[#2f7bff] px-6 py-3.5 rounded-full shadow-lg">
              {t.lab.cta} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
