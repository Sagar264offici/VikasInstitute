import AboutSection from '../sections/AboutSection';
import WhyChooseUs from '../sections/WhyChooseUs';
import FacultySection from '../sections/FacultySection';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-12">
      <Reveal className="text-center max-w-3xl mx-auto px-4">
        <span className="inline-block text-[12px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border border-[#2f7bff]/20 bg-[#2f7bff]/8 text-[#1a33a3]">
          {t.about.eyebrow}
        </span>
        <h1 className="font-display font-extrabold text-[30px] sm:text-[46px] text-[#0a1a5c] tracking-tight mt-4">{t.pages.aboutTitle}</h1>
        <p className="text-slate-600 mt-3">{t.pages.aboutSub}</p>
      </Reveal>
      <AboutSection />
      <WhyChooseUs />
      <FacultySection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <CTA />
      </div>
    </div>
  );
}
