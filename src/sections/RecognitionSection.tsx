import { useLanguage } from '../context/LanguageContext';
import { recognitions } from '../data/recognition';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

/** Renders nothing until verified recognition entries exist. */
export default function RecognitionSection() {
  const { lang } = useLanguage();
  if (recognitions.length === 0) return null;

  return (
    <section aria-label="Recognition" className="section bg-white border-y border-[#e5e5e5]">
      <div className="wrap">
        <SectionHeading
          eyebrow={lang === 'hi' ? 'मान्यता' : 'Recognition'}
          title={lang === 'hi' ? 'प्रमाणन एवं मान्यता' : 'Certification & recognition'}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
          {recognitions.map((r) => (
            <Reveal key={r.titleEn} className="bg-white border border-[#e5e5e5] rounded-2xl p-4 sm:p-6">
              {r.image && (
                <div className="rounded-xl mb-4 bg-white">
                  <img src={r.image} alt={lang === 'hi' ? r.titleHi : r.titleEn} loading="lazy" className="aspect-[4/3] w-full object-contain" />
                </div>
              )}
              <h3 className="font-bold text-[14.5px] sm:text-[16px]">{lang === 'hi' ? r.titleHi : r.titleEn}</h3>
              <p className="text-[12.5px] sm:text-[13.5px] text-[#666] mt-1">
                {lang === 'hi' ? r.issuerHi : r.issuerEn}
                {r.year ? ` · ${r.year}` : ''}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
