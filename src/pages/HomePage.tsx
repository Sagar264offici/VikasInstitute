import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import AboutSection from '../sections/AboutSection';
import WhyChooseUs from '../sections/WhyChooseUs';
import PracticalTraining from '../sections/PracticalTraining';
import TechStack from '../sections/TechStack';
import AISection from '../sections/AISection';
import FacultySection from '../sections/FacultySection';
import GallerySection from '../sections/GallerySection';
import TestimonialPlaceholder from '../sections/TestimonialPlaceholder';
import Faq from '../components/Faq';
import ContactSection from '../components/ContactSection';
import CTA from '../components/CTA';
import CourseGrid from '../components/CourseGrid';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      <Hero />
      <TrustBar />
      <section aria-label="Courses preview" className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20">
        <SectionHeading eyebrow={t.courses.eyebrow} title={t.courses.title} sub={t.courses.sub} />
        <div className="mt-8">
          <CourseGrid limit={6} />
        </div>
        <Reveal className="text-center mt-8">
          <Link to="/courses" className="btn-tactile inline-flex items-center gap-2 font-bold text-white bg-[#0a1a5c] px-7 py-3.5 rounded-full">
            {t.courses.viewAll} <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
      <AboutSection />
      <WhyChooseUs />
      <PracticalTraining />
      <TechStack />
      <AISection />
      <FacultySection />
      <GallerySection />
      <TestimonialPlaceholder />
      <section id="faq" aria-label="FAQ" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-20">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} sub={t.faq.sub} />
        <div className="mt-8">
          <Faq />
        </div>
        <Reveal className="text-center mt-7">
          <a href={contactInfo.phoneLinks[0]} className="btn-tactile inline-flex items-center gap-2 font-bold text-[#0a1a5c] border border-slate-300 bg-white px-6 py-3.5 rounded-full hover:border-[#2f7bff]">
            <Phone size={16} /> {t.faq.cta}
          </a>
        </Reveal>
      </section>
      <ContactSection />
      <CTA />
    </>
  );
}
