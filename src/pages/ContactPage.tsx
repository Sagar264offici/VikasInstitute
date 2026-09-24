import ContactSection from '../components/ContactSection';
import LocationSection from '../sections/LocationSection';
import EnquiryForm from '../components/EnquiryForm';
import CTA from '../components/CTA';
import { Eyebrow } from '../components/RevealText';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t, lang } = useLanguage();
  return (
    <div className="bg-[#050816] pt-32">
      <div className="text-center max-w-3xl mx-auto px-5">
        <Eyebrow>{t.contact.eyebrow}</Eyebrow>
        <h1 className="display-mega text-[12vw] sm:text-[60px] lg:text-[80px] mt-4 leading-[1.08]">
          {lang === 'hi' ? t.pages.contactTitle : (<>CONTACT <span className="text-gradient-gold">US.</span></>)}
        </h1>
        <p className="text-white/55 mt-3">{t.pages.contactSub}</p>
      </div>
      <LocationSection />
      <div id="enquiry" className="max-w-4xl mx-auto px-5 sm:px-8 pb-16 scroll-mt-28">
        <EnquiryForm />
      </div>
      <ContactSection />
      <div className="pt-14">
        <CTA />
      </div>
    </div>
  );
}
