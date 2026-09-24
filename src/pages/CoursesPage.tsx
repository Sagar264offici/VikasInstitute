import CourseGrid from '../components/CourseGrid';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export default function CoursesPage() {
  const { t } = useLanguage();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-4">
      <Reveal className="text-center max-w-3xl mx-auto">
        <span className="inline-block text-[12px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border border-[#2f7bff]/20 bg-[#2f7bff]/8 text-[#1a33a3]">
          {t.courses.eyebrow}
        </span>
        <h1 className="font-display font-extrabold text-[30px] sm:text-[46px] text-[#0a1a5c] tracking-tight mt-4">{t.pages.coursesTitle}</h1>
        <p className="text-slate-600 mt-3 text-[15px] sm:text-[17px]">{t.pages.coursesSub}</p>
        <p className="text-slate-400 text-[13px] mt-2 italic">{t.courses.sub}</p>
      </Reveal>
      <div className="mt-8">
        <CourseGrid />
      </div>
      <div className="mt-12">
        <CTA />
      </div>
    </div>
  );
}
