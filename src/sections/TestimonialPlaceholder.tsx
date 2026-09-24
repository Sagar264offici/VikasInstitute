import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Eyebrow } from '../components/RevealText';

export default function TestimonialPlaceholder() {
  const { t } = useLanguage();
  return (
    <section aria-label="Student experience" className="relative bg-[#050816] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-[2]">
        <div className="flex justify-center"><Eyebrow>{t.testimonials.eyebrow}</Eyebrow></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 rounded-[32px] border border-dashed border-white/20 bg-white/[0.02] p-10 sm:p-14"
        >
          <p className="font-display font-extrabold text-[28px] sm:text-[44px] leading-tight text-white/85">
            &ldquo;{t.testimonials.title}&rdquo;
          </p>
          <p className="text-white/45 text-[14.5px] mt-4 max-w-xl mx-auto leading-relaxed">{t.testimonials.sub}</p>
          <p className="font-mono text-[11px] tracking-[0.3em] text-[#ffab2e] mt-6 font-bold">{t.testimonials.cardTitle.toUpperCase()}</p>
          <p className="text-white/40 text-[13px] mt-2">{t.testimonials.cardDesc}</p>
          <Link to="/contact" className="btn-tactile inline-flex mt-6 font-extrabold text-[13px] tracking-widest text-white border border-white/20 bg-white/5 px-7 py-3.5 rounded-full hover:bg-white/10">
            {t.testimonials.cta.toUpperCase()} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
