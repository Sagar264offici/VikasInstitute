import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from './Reveal';

export default function CTA() {
  const { t } = useLanguage();
  return (
    <section aria-label="Admissions" className="section">
      <div className="wrap">
        <Reveal className="bg-[#17324d] text-white rounded-2xl px-7 py-10 sm:p-12 text-center">
          <p className="text-[12px] font-bold tracking-[0.14em] text-white/60">{t.common.admissionsOpen.toUpperCase()}</p>
          <h2 className="h-section text-[26px] sm:text-[36px] mt-3">{t.enquiry.title}</h2>
          <p className="text-white/70 text-[14px] mt-2 tracking-wide">{t.hero.mantra}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
            <Link to="/contact#enquiry" className="btn btn-light">
              {t.nav.applyNow} <ArrowRight size={17} />
            </Link>
            <Link to="/courses" className="btn btn-outline-light">
              {t.hero.primaryCta}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
