import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  Monitor, Palette, Calculator, Keyboard, PenTool, Award,
  Megaphone, ShieldCheck, Database, FileCode, Code2, Table2, type LucideIcon,
} from 'lucide-react';
import { courses, type Course } from '../data/courses';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const icons: Record<string, LucideIcon> = {
  Monitor, Palette, Calculator, Keyboard, PenTool, Award,
  Megaphone, ShieldCheck, Database, FileCode, Code2, Sheet: Table2,
};

export function CourseIcon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const I = icons[name] ?? Monitor;
  return <I className={className} aria-hidden />;
}

export type CourseGroup = 'Computer' | 'Programming' | 'Web' | 'Business' | 'Creative' | 'Advanced';

export function groupOf(course: Course): CourseGroup {
  const id = course.id;
  if (['basic-computer', 'adca-dca-ccc', 'data-entry'].includes(id)) return 'Computer';
  if (['python', 'sql'].includes(id)) return 'Programming';
  if (['web-dev', 'web-designing'].includes(id)) return 'Web';
  if (['tally-gst', 'advanced-excel', 'digital-marketing'].includes(id)) return 'Business';
  if (['graphic-design'].includes(id)) return 'Creative';
  return 'Advanced';
}

const groupKeys: CourseGroup[] = ['Computer', 'Programming', 'Web', 'Business', 'Creative', 'Advanced'];

export function CourseDirectory({ limit, showFilter = true }: { limit?: number; showFilter?: boolean }) {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState<'All' | CourseGroup>('All');

  const filtered = useMemo(() => {
    const list = active === 'All' ? courses : courses.filter((c) => groupOf(c) === active);
    return limit ? list.slice(0, limit) : list;
  }, [active, limit]);

  return (
    <div>
      {showFilter && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 max-[399px]:-mx-3 max-[399px]:px-3 sm:mx-0 sm:px-0 sm:flex-wrap" role="tablist" aria-label="Course filters">
          {(['All', ...groupKeys] as const).map((key) => {
            const label = key === 'All' ? t.courses.filterAll : t.courses.groups[groupKeys.indexOf(key as CourseGroup)];
            const isActive = active === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(key)}
                className={cn(
                  'whitespace-nowrap min-h-[40px] px-5 rounded-full text-[13.5px] font-bold border transition-colors',
                  isActive ? 'bg-[#111] text-white border-[#111]' : 'bg-transparent text-[#333] border-[#dadada] hover:border-[#111]'
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-2 lg:grid lg:grid-cols-2 lg:gap-x-12">
        {filtered.map((c) => (
          <article key={c.id} className="border-t border-[#e5e5e5] py-5 first:border-t-0 lg:[&:nth-child(2)]:border-t-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5 min-w-0">
                <span className="w-10 h-10 grid place-items-center rounded-lg bg-[#f0f0ed] text-[#17324d] shrink-0" aria-hidden>
                  <CourseIcon name={c.icon} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-[16.5px] leading-snug">
                    <Link to={`/course/${c.slug}`} className="hover:text-[#17324d]">
                      {lang === 'hi' ? c.titleHi : c.titleEn}
                    </Link>
                  </h3>
                  <p className="text-[13.5px] text-[#666] leading-relaxed mt-1 line-clamp-2">
                    {lang === 'hi' ? c.descHi : c.descEn}
                  </p>
                  <p className="text-[12px] font-semibold text-[#6b6b6b] mt-1.5">
                    {lang === 'hi' ? c.categoryHi : c.category} · {groupOf(c)}
                  </p>
                </div>
              </div>
              <Link
                to={`/course/${c.slug}`}
                aria-label={`${t.courses.learnMore}: ${lang === 'hi' ? c.titleHi : c.titleEn}`}
                className="group shrink-0 w-10 h-10 grid place-items-center rounded-full border border-[#dadada] hover:bg-[#111] hover:border-[#111] hover:text-white transition-colors"
              >
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-[#666] text-[14.5px] py-8 text-center">{t.courses.details}</p>
      )}
    </div>
  );
}

export default function CoursesSection({ limit = 6 }: { limit?: number }) {
  const { t } = useLanguage();
  return (
    <section aria-label="Courses" className="section bg-white border-y border-[#e5e5e5]">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={t.courses.eyebrow} title={t.courses.title} sub={t.courses.sub} />
          <Reveal className="shrink-0">
            <Link to="/courses" className="btn btn-outline !min-h-[44px] !px-5 !text-[14px]">
              {t.courses.viewAll} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <Reveal className="mt-7">
          <CourseDirectory limit={limit} />
        </Reveal>
      </div>
    </section>
  );
}
