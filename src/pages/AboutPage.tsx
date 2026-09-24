import AboutSection from '../sections/AboutSection';
import PracticalLearning from '../sections/PracticalLearning';
import WhyVikas from '../sections/WhyVikas';
import RecognitionSection from '../sections/RecognitionSection';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#f7f7f5]">
      <div className="wrap pt-10 sm:pt-14 pb-2 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h1 className="h-display text-[32px] sm:text-[46px] mt-3">{t.pages.aboutTitle}</h1>
          <p className="lede text-[15px] sm:text-[16px] mt-3">{t.pages.aboutSub}</p>
        </Reveal>
      </div>
      <AboutSection />
      <PracticalLearning />
      <WhyVikas />
      <RecognitionSection />
      <CTA />
    </div>
  );
}
