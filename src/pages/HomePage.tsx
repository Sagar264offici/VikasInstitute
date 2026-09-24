import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import Manifesto from '../sections/Manifesto';
import CourseExplorer from '../sections/CourseExplorer';
import TechnologyWall from '../sections/TechnologyWall';
import AISection from '../sections/AISection';
import PracticalLearning from '../sections/PracticalLearning';
import LabSection from '../sections/LabSection';
import WhyVikas from '../sections/WhyVikas';
import FacultySection from '../sections/FacultySection';
import GallerySection from '../sections/GallerySection';
import LocationSection from '../sections/LocationSection';
import TestimonialPlaceholder from '../sections/TestimonialPlaceholder';
import Faq from '../components/Faq';
import ContactSection from '../components/ContactSection';
import CTA from '../components/CTA';
import EnquiryForm from '../components/EnquiryForm';
import { Eyebrow, RevealText } from '../components/RevealText';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import { Phone } from 'lucide-react';

export default function HomePage() {
  const { t, lang } = useLanguage();
  return (
    <>
      <Hero />
      <TrustBar />
      <Manifesto />
      <CourseExplorer />
      <TechnologyWall />
      <AISection />
      <PracticalLearning />
      <LabSection />
      <WhyVikas />
      <FacultySection />
      <GallerySection />
      <LocationSection />
      <TestimonialPlaceholder />
      <section id="faq" aria-label="FAQ" className="relative bg-[#050816] py-20 sm:py-28 scroll-mt-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Faq />
          <div className="text-center mt-8">
            <a href={contactInfo.phoneLinks[0]} className="btn-tactile inline-flex items-center gap-2 font-bold text-white border border-white/20 bg-white/5 px-7 py-4 rounded-full hover:bg-white/10">
              <Phone size={16} /> {t.faq.cta}
            </a>
          </div>
        </div>
      </section>
      <section id="enquiry" aria-label="Enquiry" className="relative bg-[#070b1a] py-20 sm:py-28 overflow-hidden scroll-mt-20">
        <div className="orb w-[480px] h-[480px] bg-[#2f7bff]/15 top-0 left-0" aria-hidden />
        <div className="relative z-[2] max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-8">
            <Eyebrow>{t.enquiry.eyebrow}</Eyebrow>
            <h2 className="display-mega text-[12vw] sm:text-[60px] mt-4 leading-[1.05]">
              <RevealText>{lang === 'hi' ? 'पूछताछ भेजें।' : 'SEND ENQUIRY.'}</RevealText>
            </h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto text-[15px]">{t.enquiry.sub}</p>
          </div>
          <EnquiryForm />
        </div>
      </section>
      <ContactSection />
      <div className="bg-[#050816] pt-14">
        <CTA />
      </div>
    </>
  );
}
