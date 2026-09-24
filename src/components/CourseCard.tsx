import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Monitor, Palette, Calculator, Keyboard, PenTool, Award,
  Megaphone, ShieldCheck, Database, FileCode, Code2, Table2, type LucideIcon,
} from 'lucide-react';
import type { Course } from '../data/courses';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  Monitor, Palette, Calculator, Keyboard, PenTool, Award,
  Megaphone, ShieldCheck, Database, FileCode, Code2, Sheet: Table2,
};

export function CourseIcon({ name, className = 'w-6 h-6' }: { name: string; className?: string }) {
  const I = icons[name] ?? Monitor;
  return <I className={className} aria-hidden />;
}

export default function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  const { lang, t } = useLanguage();
  const Icon = icons[course.icon] ?? Monitor;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="card-shine group relative bg-white rounded-[22px] border border-slate-200/80 p-6 flex flex-col shadow-[0_2px_20px_-8px_rgba(10,26,92,0.15)] hover:shadow-[0_24px_60px_-16px_rgba(26,51,163,0.35)] hover:-translate-y-1.5 hover:border-[#2f7bff]/40 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <span className="w-12 h-12 rounded-2xl grid place-items-center bg-gradient-to-br from-[#0a1a5c] to-[#2f7bff] text-white shadow-lg shadow-blue-900/25 group-hover:scale-110 transition-transform">
          <Icon size={22} />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
          {lang === 'hi' ? course.categoryHi : course.category}
        </span>
      </div>

      <h3 className="font-display font-bold text-[18px] text-[#0a1a5c] mt-4 leading-snug">
        {lang === 'hi' ? course.titleHi : course.titleEn}
      </h3>
      <p className="text-[14px] text-slate-600 leading-relaxed mt-2 flex-1">
        {lang === 'hi' ? course.descHi : course.descEn}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {(lang === 'hi' ? course.tagsHi : course.tagsEn).slice(0, 3).map((tg) => (
          <span key={tg} className="text-[11.5px] font-semibold px-2.5 py-1 rounded-full bg-[#eef3ff] text-[#1a33a3]">
            {tg}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-5 pt-4 border-t border-slate-100">
        <Link
          to={`/course/${course.slug}`}
          className="btn-tactile inline-flex items-center gap-1.5 text-[13.5px] font-bold text-white bg-[#0a1a5c] px-4 py-2.5 rounded-full hover:bg-[#1a33a3]"
        >
          {t.courses.learnMore} <ArrowRight size={14} />
        </Link>
        <Link
          to="/contact#enquiry"
          className="btn-tactile inline-flex items-center gap-1 text-[13.5px] font-bold text-[#ff7a1a] px-3 py-2.5 rounded-full hover:bg-orange-50"
        >
          {t.courses.enquire} <ArrowUpRight size={14} />
        </Link>
      </div>
      <p className="text-[11.5px] text-slate-400 mt-3">{t.courses.details}</p>
    </motion.article>
  );
}
