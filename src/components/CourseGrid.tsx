import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { courseFilters, courses, type CourseFilter } from '../data/courses';
import { cn } from '../lib/utils';
import CourseCard from './CourseCard';

const filterKey: Record<CourseFilter, number> = {
  All: -1, Beginner: 0, Professional: 1, Programming: 2, Web: 3, 'Business Tools': 4, Advanced: 5,
};

export default function CourseGrid({ limit }: { limit?: number }) {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState<CourseFilter>('All');

  const labels = useMemo(() => {
    const en: CourseFilter[] = courseFilters;
    const hiMap: Record<string, string> = {};
    t.courses.filters.forEach((h, i) => {
      hiMap[en[i + 1]] = h;
    });
    return { en, hiMap };
  }, [t]);

  const filtered = useMemo(() => {
    const list = active === 'All' ? courses : courses.filter((c) => c.level.includes(active));
    return limit ? list.slice(0, limit) : list;
  }, [active, limit]);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:flex-wrap sm:justify-center sm:mx-0 sm:px-0" role="tablist" aria-label="Course filters">
        {[t.courses.filterAll, ...t.courses.filters].map((label, i) => {
          const key = (i === 0 ? 'All' : courseFilters[i]) as CourseFilter;
          void filterKey;
          const isActive = active === key;
          return (
            <button
              key={label + i}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(key)}
              className={cn(
                'btn-tactile whitespace-nowrap px-5 py-2.5 rounded-full text-[13.5px] font-bold border transition-all',
                isActive
                  ? 'bg-[#0a1a5c] text-white border-[#0a1a5c] shadow-lg'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#2f7bff] hover:text-[#0a1a5c]'
              )}
            >
              {label}
            </button>
          );
        })}
        <span className="hidden">{labels.en.length}{lang}{labels.hiMap['Beginner']}</span>
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((c, i) => (
            <motion.div key={c.id} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.35 }}>
              <CourseCard course={c} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
