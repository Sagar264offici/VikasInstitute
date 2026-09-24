import { Award } from 'lucide-react';
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {recognitions.map((r) => (
            <Reveal key={r.titleEn} className="bg-[#f7f7f5] border border-[#e5e5e5] rounded-2xl p-6">
              {r.image && (
                <div className="img-frame rounded-xl mb-4">
                  <img src={r.image} alt={lang === 'hi' ? r.titleHi : r.titleEn} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </div>
              )}
              <span className="w-10 h-10 grid place-items-center rounded-lg bg-white border border-[#e5e5e5] text-[#17324d]" aria-hidden>
                <Award size={19} />
              </span>
              <h3 className="font-bold text-[16px] mt-3">{lang === 'hi' ? r.titleHi : r.titleEn}</h3>
              <p className="text-[13.5px] text-[#666] mt-1">
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
