import CourseGrid from '../components/CourseGrid';
import CTA from '../components/CTA';
import TechnologyWall from '../sections/TechnologyWall';
import { useLanguage } from '../context/LanguageContext';

export default function CoursesPage() {
  const { t, lang } = useLanguage();
  return (
    <div className="bg-[#050816] pt-32 pb-4">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <p className="font-mono text-[11px] tracking-[0.35em] text-[#5b9bff] font-bold">{t.courses.eyebrow.toUpperCase()}</p>
        <h1 className="display-mega text-[13vw] sm:text-[64px] lg:text-[88px] mt-4 leading-[1.05]">
          {lang === 'hi' ? t.pages.coursesTitle : (<>ALL COURSES <span className="text-gradient-neon">& TRACKS.</span></>)}
        </h1>
        <p className="text-white/55 mt-4 text-[15px] sm:text-[17px] max-w-2xl mx-auto">{t.pages.coursesSub}</p>
        <p className="text-white/30 text-[13px] mt-2 italic">{t.courses.sub}</p>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-10">
        <CourseGrid />
      </div>
      <TechnologyWall />
      <CTA />
    </div>
  );
}
