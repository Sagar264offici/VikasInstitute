import { CourseDirectory } from '../sections/CourseDirectory';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export default function CoursesPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#f7f7f5]">
      <div className="wrap pt-10 sm:pt-14 pb-2 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <p className="eyebrow">{t.courses.eyebrow}</p>
          <h1 className="h-display text-[32px] sm:text-[46px] mt-3">{t.pages.coursesTitle}</h1>
          <p className="lede text-[15px] sm:text-[16px] mt-3">{t.pages.coursesSub}</p>
        </Reveal>
      </div>
      <section aria-label="All courses" className="section !pt-6">
        <div className="wrap">
          <CourseDirectory />
        </div>
      </section>
      <CTA />
    </div>
  );
}
