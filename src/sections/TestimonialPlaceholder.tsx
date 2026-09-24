import { Link } from 'react-router-dom';
import { MessageSquareHeart, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function TestimonialPlaceholder() {
  const { t } = useLanguage();
  return (
    <section aria-label="Student experience" className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
      <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} sub={t.testimonials.sub} />
      <Reveal delay={0.1}>
        <div className="max-w-2xl mx-auto mt-8 border-2 border-dashed border-[#2f7bff]/30 bg-[#f4f7ff] rounded-[24px] p-8 sm:p-10 text-center">
          <span className="mx-auto w-14 h-14 grid place-items-center rounded-2xl bg-white shadow border border-slate-200 text-[#1a33a3]">
            <MessageSquareHeart size={26} />
          </span>
          <h3 className="font-display font-extrabold text-[19px] text-[#0a1a5c] mt-4">{t.testimonials.cardTitle}</h3>
          <p className="text-slate-600 text-[14.5px] mt-2 leading-relaxed">{t.testimonials.cardDesc}</p>
          <Link to="/contact" className="btn-tactile inline-flex items-center gap-2 mt-5 font-bold text-white bg-[#0a1a5c] px-6 py-3.5 rounded-full">
            {t.testimonials.cta} <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
