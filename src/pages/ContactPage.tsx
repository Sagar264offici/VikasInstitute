import ContactSection from '../components/ContactSection';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-12">
      <Reveal className="text-center max-w-3xl mx-auto px-4">
        <span className="inline-block text-[12px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border border-[#2f7bff]/20 bg-[#2f7bff]/8 text-[#1a33a3]">
          {t.contact.eyebrow}
        </span>
        <h1 className="font-display font-extrabold text-[30px] sm:text-[46px] text-[#0a1a5c] tracking-tight mt-4">{t.pages.contactTitle}</h1>
        <p className="text-slate-600 mt-3">{t.pages.contactSub}</p>
      </Reveal>
      <ContactSection />
    </div>
  );
}
