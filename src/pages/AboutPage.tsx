import Manifesto from '../sections/Manifesto';
import WhyVikas from '../sections/WhyVikas';
import FacultySection from '../sections/FacultySection';
import LabSection from '../sections/LabSection';
import CTA from '../components/CTA';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { t, lang } = useLanguage();
  return (
    <div className="bg-[#050816] pt-32">
      <div className="text-center max-w-3xl mx-auto px-5">
        <p className="font-mono text-[11px] tracking-[0.35em] text-[#5b9bff] font-bold">{t.about.eyebrow.toUpperCase()}</p>
        <h1 className="display-mega text-[12vw] sm:text-[60px] lg:text-[80px] mt-4 leading-[1.08]">{lang === 'hi' ? t.pages.aboutTitle : t.pages.aboutTitle.toUpperCase()}</h1>
        <p className="text-white/55 mt-3">{t.pages.aboutSub}</p>
      </div>
      <Manifesto />
      <LabSection />
      <WhyVikas />
      <FacultySection />
      <CTA />
    </div>
  );
}
