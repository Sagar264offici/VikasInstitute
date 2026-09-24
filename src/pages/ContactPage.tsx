import ContactSection from '../components/ContactSection';
import LocationSection from '../sections/LocationSection';
import EnquiryForm from '../components/EnquiryForm';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#f7f7f5]">
      <div className="wrap pt-10 sm:pt-14 pb-2 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h1 className="h-display text-[32px] sm:text-[46px] mt-3">{t.pages.contactTitle}</h1>
          <p className="lede text-[15px] sm:text-[16px] mt-3">{t.pages.contactSub}</p>
        </Reveal>
      </div>
      <LocationSection />
      <section id="enquiry" aria-label="Enquiry" className="section !pt-0 scroll-mt-20">
        <div className="wrap max-w-3xl">
          <SectionHeading eyebrow={t.enquiry.eyebrow} title={t.enquiry.title} sub={t.enquiry.sub} align="center" />
          <Reveal className="mt-7">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
