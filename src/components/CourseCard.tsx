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
      className="card-shine group relative rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur p-6 flex flex-col hover:border-[#2f7bff]/40 hover:bg-white/[0.06] hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <span className="w-12 h-12 rounded-2xl grid place-items-center bg-gradient-to-br from-[#2f7bff] to-[#00a8ff] text-white shadow-lg shadow-blue-900/40 group-hover:scale-110 transition-transform">
          <Icon size={22} />
        </span>
        <span className="text-[10.5px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-white/60">
          {lang === 'hi' ? course.categoryHi : course.category}
        </span>
      </div>

      <h3 className="font-display font-extrabold text-[18px] text-white mt-4 leading-snug">
        {lang === 'hi' ? course.titleHi : course.titleEn}
      </h3>
      <p className="text-[13.5px] text-white/55 leading-relaxed mt-2 flex-1">
        {lang === 'hi' ? course.descHi : course.descEn}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {(lang === 'hi' ? course.tagsHi : course.tagsEn).slice(0, 3).map((tg) => (
          <span key={tg} className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#2f7bff]/12 border border-[#2f7bff]/25 text-[#9fc0ff]">
            {tg}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-5 pt-4 border-t border-white/10">
        <Link
          to={`/course/${course.slug}`}
          className="btn-tactile inline-flex items-center gap-1.5 text-[13px] font-bold text-white bg-white/10 border border-white/15 px-4 py-2.5 rounded-full hover:bg-white/20"
        >
          {t.courses.learnMore} <ArrowRight size={14} />
        </Link>
        <Link
          to="/contact#enquiry"
          className="btn-tactile inline-flex items-center gap-1 text-[13px] font-bold text-[#ffab2e] px-3 py-2.5 rounded-full hover:bg-white/5"
        >
          {t.courses.enquire} <ArrowUpRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}
