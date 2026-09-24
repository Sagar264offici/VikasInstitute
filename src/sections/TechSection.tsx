import { useLanguage } from '../context/LanguageContext';
import { techChips, advancedTracksEn, advancedTracksHi } from '../data/courses';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

/** Static editorial technology list. No animation, typography-led. */
export default function TechSection() {
  const { t, lang } = useLanguage();
  const tracks = lang === 'hi' ? advancedTracksHi : advancedTracksEn;
  return (
    <section aria-label="Technologies" className="section bg-white border-y border-[#e5e5e5]">
      <div className="wrap">
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} sub={t.tech.sub} />
        <Reveal>
          <p className="mt-8 font-extrabold tracking-tight leading-[1.5] text-[22px] sm:text-[30px] text-[#111] max-w-4xl">
            {techChips.join('  ·  ')}
          </p>
        </Reveal>
        <Reveal>
          <p className="eyebrow mt-10">
            {lang === 'hi' ? 'उन्नत अध्ययन मार्ग' : 'Advanced learning tracks'}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tracks.map((tr) => (
              <li
                key={tr}
                className="text-[13px] font-semibold px-4 py-2 rounded-full border border-[#dadada] text-[#333]"
              >
                {tr}
              </li>
            ))}
          </ul>
          <p className="text-[13px] text-[#6b6b6b] italic mt-4">{t.tech.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
