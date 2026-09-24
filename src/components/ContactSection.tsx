import { MapPin, Phone, MessageCircle, Navigation, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import EnquiryForm from '../components/EnquiryForm';

export default function ContactSection({ showForm = true }: { showForm?: boolean }) {
  const { t, lang } = useLanguage();
  return (
    <section id="contact" aria-label="Contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} sub={t.contact.sub} />
      <div className={`grid gap-6 mt-10 ${showForm ? 'lg:grid-cols-2' : ''}`}>
        <Reveal>
          <div className="flex flex-col gap-4 h-full">
            <div className="bg-[#0a1a5c] text-white rounded-[24px] p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-blueprint" aria-hidden />
              <div className="relative">
                <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#ffd166]">
                  <MapPin size={14} /> {t.contact.addressTitle}
                </p>
                <p className="font-display font-bold text-[16px] sm:text-[18px] leading-relaxed mt-2">
                  {lang === 'hi' ? contactInfo.addressHi : contactInfo.addressEn}
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 mt-5">
                  <a href={contactInfo.mapsUrl} target="_blank" rel="noreferrer" className="btn-tactile inline-flex items-center justify-center gap-2 font-bold bg-white text-[#0a1a5c] px-5 py-3 rounded-full text-[14px]">
                    <Navigation size={15} /> {t.contact.directions}
                  </a>
                  <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" className="btn-tactile inline-flex items-center justify-center gap-2 font-bold bg-[#25D366] px-5 py-3 rounded-full text-[14px]">
                    <MessageCircle size={15} /> {t.contact.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#1a33a3]">
                <Phone size={14} /> {t.contact.phoneTitle}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                {contactInfo.phones.map((p, i) => (
                  <a key={p} href={contactInfo.phoneLinks[i]} className="btn-tactile rounded-2xl border border-slate-200 bg-slate-50 hover:border-[#2f7bff] hover:bg-white px-4 py-3.5 transition">
                    <span className="block text-[11.5px] font-bold text-slate-500 uppercase tracking-wider">{i === 0 ? 'Line 1' : 'Line 2'}</span>
                    <span className="block font-display font-extrabold text-[16px] text-[#0a1a5c] mt-0.5">{p}</span>
                  </a>
                ))}
              </div>
              <p className="flex items-center gap-2 text-[13px] text-slate-500 mt-4">
                <Clock size={14} /> {t.contact.hours}
              </p>
            </div>

            {/* map placeholder */}
            <div className="rounded-[24px] overflow-hidden border border-slate-200 bg-[#e9eefb] min-h-[220px] relative">
              <div className="absolute inset-0 bg-blueprint-dark" aria-hidden />
              <div className="relative h-full min-h-[220px] grid place-items-center p-8 text-center">
                <div>
                  <span className="mx-auto w-12 h-12 grid place-items-center rounded-2xl bg-[#0a1a5c] text-white shadow-lg">
                    <MapPin size={22} />
                  </span>
                  <p className="font-bold text-[#0a1a5c] text-[14.5px] mt-3">{t.contact.mapNote}</p>
                  <a href={contactInfo.mapsUrl} target="_blank" rel="noreferrer" className="inline-block mt-2 text-[13.5px] font-bold text-[#1a33a3] underline underline-offset-4">
                    {t.contact.openMaps} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {showForm && (
          <Reveal delay={0.1} className="h-full">
            <div id="enquiry" className="scroll-mt-24">
              <EnquiryForm />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
