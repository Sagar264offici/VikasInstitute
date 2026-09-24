import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { courses } from '../data/courses';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import { CourseIcon } from '../components/CourseCard';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display font-extrabold text-[28px] text-[#0a1a5c]">{t.common.notFoundT}</h1>
        <p className="text-slate-600 mt-2">{t.common.notFoundD}</p>
        <Link to="/courses" className="inline-block mt-6 font-bold text-white bg-[#0a1a5c] px-6 py-3.5 rounded-full">
          {t.courses.viewAll}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-4">
      <Link to="/courses" className="inline-flex items-center gap-2 text-[14px] font-bold text-slate-600 hover:text-[#0a1a5c]">
        <ArrowLeft size={16} /> {t.courses.viewAll}
      </Link>
      <Reveal>
        <div className="mt-5 rounded-[28px] overflow-hidden bg-gradient-to-br from-[#060f38] to-[#1a33a3] text-white p-7 sm:p-12 relative">
          <div className="absolute inset-0 bg-blueprint" aria-hidden />
          <div className="relative flex flex-col sm:flex-row gap-6 items-start">
            <span className="w-16 h-16 grid place-items-center rounded-2xl bg-white/12 border border-white/20 shrink-0">
              <CourseIcon name={course.icon} className="w-8 h-8" />
            </span>
            <div>
              <p className="text-[#ffd166] text-[12px] font-bold uppercase tracking-[0.18em]">
                {lang === 'hi' ? course.categoryHi : course.category} • {course.level.join(' / ')}
              </p>
              <h1 className="font-display font-extrabold text-[28px] sm:text-[44px] tracking-tight mt-2">
                {lang === 'hi' ? course.titleHi : course.titleEn}
              </h1>
              <p className="text-white/70 text-[15px] sm:text-[17px] mt-3 max-w-2xl leading-relaxed">
                {lang === 'hi' ? course.descHi : course.descEn}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {(lang === 'hi' ? course.tagsHi : course.tagsEn).map((tg) => (
                  <span key={tg} className="text-[12.5px] font-bold px-3.5 py-1.5 rounded-full bg-white/12 border border-white/20">{tg}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_380px] gap-6 mt-6">
        <div className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-8">
          <h2 className="font-display font-bold text-[19px] text-[#0a1a5c]">What you will practice</h2>
          <ul className="mt-4 space-y-2.5">
            {(lang === 'hi' ? course.tagsHi : course.tagsEn).map((tg) => (
              <li key={tg} className="flex items-center gap-2.5 text-[14.5px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3">
                <CheckCircle2 size={17} className="text-green-600" /> {tg}
              </li>
            ))}
            <li className="flex items-center gap-2.5 text-[14px] text-slate-500 italic px-1 pt-1">
              {t.courses.details}
            </li>
          </ul>
        </div>
        <div className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-7 h-fit lg:sticky lg:top-24">
          <p className="font-display font-extrabold text-[18px] text-[#0a1a5c]">{t.enquiry.title}</p>
          <p className="text-slate-600 text-[13.5px] mt-1">{t.common.contactForDetails}</p>
          <div className="flex flex-col gap-2.5 mt-5">
            <Link to="/contact#enquiry" className="btn-tactile text-center font-bold text-white bg-gradient-to-r from-[#ff7a1a] to-[#ffb020] px-6 py-3.5 rounded-full">
              {t.courses.enquire}
            </Link>
            <a href={contactInfo.phoneLinks[0]} className="btn-tactile text-center font-bold text-white bg-[#0a1a5c] px-6 py-3.5 rounded-full">
              {t.contact.callNow}: {contactInfo.phones[0]}
            </a>
            <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" className="btn-tactile inline-flex items-center justify-center gap-2 text-center font-bold text-[#0a1a5c] border border-slate-200 px-6 py-3.5 rounded-full">
              {t.contact.whatsapp} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <CTA />
      </div>
    </div>
  );
}
