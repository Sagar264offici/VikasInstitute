import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import AboutSection from '../sections/AboutSection';
import CoursesSection from '../sections/CourseDirectory';
import PracticalLearning from '../sections/PracticalLearning';
import LearnToday from '../sections/LearnToday';
import AISection from '../sections/AISection';
import TechSection from '../sections/TechSection';
import WhyVikas from '../sections/WhyVikas';
import RecognitionSection from '../sections/RecognitionSection';
import GallerySection from '../sections/GallerySection';
import Faq from '../components/Faq';
import EnquiryForm from '../components/EnquiryForm';
import ContactSection from '../components/ContactSection';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import { Phone } from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSection />
      <CoursesSection limit={6} />
      <PracticalLearning />
      <LearnToday />
      <AISection />
      <TechSection />
      <WhyVikas />
      <RecognitionSection />
      <GallerySection />

      <section id="faq" aria-label="FAQ" className="section bg-white border-t border-[#e5e5e5] scroll-mt-20">
        <div className="wrap max-w-3xl">
          <Faq />
          <Reveal className="text-center mt-7">
            <a href={contactInfo.phoneLinks[0]} className="btn btn-outline">
              <Phone size={16} /> {t.faq.cta}
            </a>
          </Reveal>
        </div>
      </section>

      <section id="enquiry" aria-label="Enquiry" className="section scroll-mt-20">
        <div className="wrap max-w-3xl">
          <SectionHeading eyebrow={t.enquiry.eyebrow} title={t.enquiry.title} sub={t.enquiry.sub} align="center" />
          <Reveal className="mt-7">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
