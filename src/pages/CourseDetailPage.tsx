import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { courses } from '../data/courses';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import { CourseIcon } from '../sections/CourseDirectory';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="wrap py-20 text-center">
        <h1 className="h-display text-[28px]">{t.common.notFoundT}</h1>
        <p className="lede mt-2">{t.common.notFoundD}</p>
        <Link to="/courses" className="btn btn-dark mt-6">
          {t.courses.viewAll}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f7f5]">
      <div className="wrap py-10 sm:py-14">
        <Link to="/courses" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#333] hover:text-[#111]">
          <ArrowLeft size={16} /> {t.courses.viewAll}
        </Link>

        <Reveal>
          <div className="mt-5 bg-[#17324d] text-white rounded-2xl p-7 sm:p-10">
            <p className="text-[12px] font-bold tracking-[0.14em] text-white/60">
              {(lang === 'hi' ? course.categoryHi : course.category).toUpperCase()} · {course.level.join(' / ').toUpperCase()}
            </p>
            <div className="flex items-start gap-4 mt-3">
              <span className="hidden sm:grid w-14 h-14 place-items-center rounded-xl bg-white/10 border border-white/15 shrink-0" aria-hidden>
                <CourseIcon name={course.icon} className="w-7 h-7" />
              </span>
              <h1 className="h-display text-[30px] sm:text-[44px]">
                {lang === 'hi' ? course.titleHi : course.titleEn}
              </h1>
            </div>
            <p className="text-white/75 text-[15px] sm:text-[16px] leading-relaxed mt-3 max-w-2xl">
              {lang === 'hi' ? course.descHi : course.descEn}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {(lang === 'hi' ? course.tagsHi : course.tagsEn).map((tg) => (
                <span key={tg} className="text-[12.5px] font-semibold px-3.5 py-1.5 rounded-full border border-white/25 text-white/85">{tg}</span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_360px] gap-5 mt-5 items-start">
          <Reveal className="bg-white border border-[#e5e5e5] rounded-2xl p-6 sm:p-8">
            <h2 className="font-extrabold text-[18px]">
              {lang === 'hi' ? 'आप क्या अभ्यास करेंगे' : 'What you will practice'}
            </h2>
            <ul className="mt-4 divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
              {(lang === 'hi' ? course.tagsHi : course.tagsEn).map((tg) => (
                <li key={tg} className="flex items-center gap-3 py-3 text-[14.5px] font-semibold text-[#333]">
                  <span className="w-5 h-5 grid place-items-center rounded-full bg-[#eef4ec] text-[#2e7d32] shrink-0" aria-hidden>
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {tg}
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-[#6b6b6b] italic mt-4">{t.courses.details}</p>
          </Reveal>

          <Reveal className="bg-white border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 lg:sticky lg:top-24">
            <p className="font-extrabold text-[18px]">{t.enquiry.title}</p>
            <p className="text-[#666] text-[13.5px] mt-1">{t.common.contactForDetails}</p>
            <div className="flex flex-col gap-2.5 mt-5">
              <Link to="/contact#enquiry" className="btn btn-dark w-full">
                {t.courses.enquire}
              </Link>
              <a href={contactInfo.phoneLinks[0]} className="btn btn-outline w-full">
                {t.contact.callNow}: {contactInfo.phones[0]}
              </a>
              <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" className="btn btn-outline w-full">
                {t.contact.whatsapp} <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <CTA />
    </div>
  );
}
