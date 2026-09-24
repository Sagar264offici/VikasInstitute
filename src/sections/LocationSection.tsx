import { MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function LocationSection() {
  const { t, lang } = useLanguage();
  return (
    <section aria-label="Location" className="section">
      <div className="wrap">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.addressTitle} sub={t.contact.sub} />
        <div className="grid lg:grid-cols-2 gap-6 mt-8 items-stretch">
          <Reveal className="bg-white border border-[#e5e5e5] rounded-2xl p-7 sm:p-9 flex flex-col justify-center">
            <p className="eyebrow">{t.contact.addressTitle}</p>
            <p className="font-bold text-[20px] sm:text-[24px] leading-snug mt-3">
              {lang === 'hi' ? contactInfo.addressHi : contactInfo.addressEn}
            </p>
            <div className="border-t border-[#e5e5e5] mt-6 pt-6">
              <p className="eyebrow">{t.contact.phoneTitle}</p>
              <div className="flex flex-col gap-1.5 mt-2">
                {contactInfo.phones.map((p, i) => (
                  <a key={p} href={contactInfo.phoneLinks[i]} className="font-extrabold text-[19px] hover:text-[#17324d]">
                    {p}
                  </a>
                ))}
              </div>
              <p className="text-[13.5px] text-[#6b6b6b] mt-3 italic">{t.contact.hours}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <a href={contactInfo.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">
                <Navigation size={17} /> {t.contact.openMaps}
              </a>
              <a href={contactInfo.phoneLinks[0]} className="btn btn-outline">
                <MapPin size={17} /> {t.contact.callNow}
              </a>
            </div>
          </Reveal>

          <Reveal className="img-frame rounded-2xl min-h-[320px] lg:min-h-0">
            <iframe
              title={lang === 'hi' ? 'Vikas IT Institute का स्थान मानचित्र' : 'Vikas IT Institute location map'}
              src={contactInfo.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[320px] grayscale"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
