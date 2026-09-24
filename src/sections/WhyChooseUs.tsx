import { GraduationCap, FlaskConical, Briefcase, HeartHandshake, MousePointerClick, Monitor } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const icons = [GraduationCap, FlaskConical, Briefcase, HeartHandshake, MousePointerClick, Monitor];

export default function WhyChooseUs() {
  const { t } = useLanguage();
  return (
    <section id="why" aria-label="Why choose us" className="bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} sub={t.why.sub} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {t.why.cards.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="card-shine group h-full bg-[#f7f9ff] hover:bg-white border border-slate-200 hover:border-[#2f7bff]/40 rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(26,51,163,0.35)]">
                  <span className="w-12 h-12 grid place-items-center rounded-2xl bg-white border border-slate-200 text-[#1a33a3] shadow-sm group-hover:bg-gradient-to-br group-hover:from-[#0a1a5c] group-hover:to-[#2f7bff] group-hover:text-white group-hover:border-transparent transition-all">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display font-bold text-[17px] text-[#0a1a5c] mt-4">{c.title}</h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed mt-2">{c.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
