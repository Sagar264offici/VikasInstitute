import { Presentation, Code2, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const icons = [Presentation, Code2, Users];

export default function FacultySection() {
  const { t } = useLanguage();
  return (
    <section aria-label="Faculty" className="bg-[#f1f4ff] border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeading eyebrow={t.faculty.eyebrow} title={t.faculty.title} sub={t.faculty.sub} />
        <div className="grid sm:grid-cols-3 gap-5 mt-10">
          {t.faculty.cards.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full bg-white rounded-[22px] border border-slate-200 p-7 text-center hover:shadow-[0_24px_60px_-20px_rgba(26,51,163,0.3)] hover:-translate-y-1 transition-all">
                  <span className="mx-auto w-14 h-14 grid place-items-center rounded-2xl bg-gradient-to-br from-[#0a1a5c] to-[#2f7bff] text-white shadow-lg">
                    <Icon size={24} />
                  </span>
                  <h3 className="font-display font-bold text-[17px] text-[#0a1a5c] mt-4">{c.title}</h3>
                  <p className="text-slate-600 text-[14px] mt-2 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="text-center text-[12.5px] text-slate-400 mt-6 italic">{t.faculty.note}</p>
      </div>
    </section>
  );
}
