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
      <div className="max-w-2xl mx-auto px-5 py-36 text-center bg-[#050816]">
        <h1 className="font-display font-extrabold text-[28px] text-white">{t.common.notFoundT}</h1>
        <p className="text-white/55 mt-2">{t.common.notFoundD}</p>
        <Link to="/courses" className="inline-block mt-6 font-bold text-white bg-gradient-to-r from-[#2456e6] to-[#00a8ff] px-6 py-3.5 rounded-full">
          {t.courses.viewAll}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#050816] pt-28 pb-4">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Link to="/courses" className="inline-flex items-center gap-2 text-[14px] font-bold text-white/60 hover:text-white">
          <ArrowLeft size={16} /> {t.courses.viewAll.toUpperCase()}
        </Link>
        <Reveal>
          <div className="mt-5 rounded-[28px] overflow-hidden bg-gradient-to-br from-[#0a1024] to-[#1a33a3] text-white p-7 sm:p-12 relative border border-white/12">
            <div className="absolute inset-0 bg-blueprint" aria-hidden />
            <div className="orb w-[380px] h-[380px] bg-[#00a8ff]/20 top-[-100px] right-[-80px]" aria-hidden />
            <div className="relative flex flex-col sm:flex-row gap-6 items-start">
              <span className="w-16 h-16 grid place-items-center rounded-2xl bg-white/10 border border-white/20 shrink-0">
                <CourseIcon name={course.icon} className="w-8 h-8 text-[#8db4ff]" />
              </span>
              <div>
                <p className="text-[#ffd166] text-[12px] font-bold uppercase tracking-[0.18em]">
                  {lang === 'hi' ? course.categoryHi : course.category} • {course.level.join(' / ')}
                </p>
                <h1 className="font-display font-extrabold text-[30px] sm:text-[48px] tracking-tight mt-2">
                  {lang === 'hi' ? course.titleHi : course.titleEn}
                </h1>
                <p className="text-white/65 text-[15px] sm:text-[17px] mt-3 max-w-2xl leading-relaxed">
                  {lang === 'hi' ? course.descHi : course.descEn}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {(lang === 'hi' ? course.tagsHi : course.tagsEn).map((tg) => (
                    <span key={tg} className="text-[12.5px] font-bold px-3.5 py-1.5 rounded-full bg-white/8 border border-white/15">{tg}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_380px] gap-5 mt-5">
          <div className="bg-white/[0.04] border border-white/10 rounded-[24px] p-6 sm:p-8">
            <h2 className="font-display font-bold text-[19px] text-white">{lang === 'hi' ? 'आप क्या अभ्यास करेंगे' : 'What you will practice'}</h2>
            <ul className="mt-4 space-y-2.5">
              {(lang === 'hi' ? course.tagsHi : course.tagsEn).map((tg) => (
                <li key={tg} className="flex items-center gap-2.5 text-[14.5px] font-semibold text-white/80 bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3">
                  <CheckCircle2 size={17} className="text-[#4ade80]" /> {tg}
                </li>
              ))}
              <li className="text-[14px] text-white/40 italic px-1 pt-1">
                {t.courses.details}
              </li>
            </ul>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-[24px] p-6 sm:p-7 h-fit lg:sticky lg:top-28">
            <p className="font-display font-extrabold text-[18px] text-white">{t.enquiry.title}</p>
            <p className="text-white/50 text-[13.5px] mt-1">{t.common.contactForDetails}</p>
            <div className="flex flex-col gap-2.5 mt-5">
              <Link to="/contact#enquiry" className="btn-tactile text-center font-bold text-white bg-gradient-to-r from-[#ff7a00] to-[#ffb000] px-6 py-3.5 rounded-full">
                {t.courses.enquire}
              </Link>
              <a href={contactInfo.phoneLinks[0]} className="btn-tactile text-center font-bold text-white bg-gradient-to-r from-[#2456e6] to-[#00a8ff] px-6 py-3.5 rounded-full">
                {t.contact.callNow}: {contactInfo.phones[0]}
              </a>
              <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" className="btn-tactile inline-flex items-center justify-center gap-2 text-center font-bold text-white border border-white/15 px-6 py-3.5 rounded-full">
                {t.contact.whatsapp} <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <CTA />
        </div>
      </div>
    </div>
  );
}
