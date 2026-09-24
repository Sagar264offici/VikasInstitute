import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

/** Numbered editorial list. No cards, thin borders, subtle hover. */
export default function WhyVikas() {
  const { t } = useLanguage();
  return (
    <section id="why" aria-label="Why choose us" className="section scroll-mt-20">
      <div className="wrap grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
        <div className="lg:sticky lg:top-24 self-start">
          <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} sub={t.why.sub} />
        </div>
        <Reveal>
          <ol className="border-t border-[#111]">
            {t.why.cards.map((c, i) => (
              <li
                key={c.title}
                className="group grid grid-cols-[auto_1fr] gap-4 sm:gap-6 py-5 sm:py-6 border-b border-[#e5e5e5] transition-colors hover:bg-white"
              >
                <span className="font-mono text-[13px] font-bold text-[#6b6b6b] pt-1.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block font-extrabold text-[17px] sm:text-[20px] tracking-tight">
                    {c.title}
                  </span>
                  <span className="block text-[14px] text-[#666] leading-relaxed mt-1 max-w-lg">
                    {c.desc}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
