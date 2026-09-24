import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import MagneticButton from './MagneticButton';

export default function CTA() {
  const { t } = useLanguage();
  return (
    <section aria-label="Admissions" className="relative px-4 sm:px-6 pb-20 pt-4 bg-[#050816]">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-[#1a33a3] via-[#0a1024] to-[#050816] px-7 py-12 sm:p-16 text-center noise">
        <div className="orb w-[420px] h-[420px] bg-[#00a8ff]/25 top-[-150px] left-1/2 -translate-x-1/2" aria-hidden />
        <div className="orb w-[300px] h-[300px] bg-[#ff7a00]/20 bottom-[-100px] right-[-60px]" aria-hidden />
        <div className="relative z-[2]">
          <p className="font-mono text-[11px] tracking-[0.35em] text-[#ffab2e] font-bold">{t.common.admissionsOpen.toUpperCase()}</p>
          <h2 className="display-mega text-[11vw] sm:text-[56px] lg:text-[72px] mt-4">{t.enquiry.title.toUpperCase()}</h2>
          <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 mt-3">{t.hero.mantra.toUpperCase()}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <MagneticButton>
              <Link to="/contact#enquiry" className="btn-tactile btn-glow-orange inline-flex items-center justify-center gap-2 font-extrabold text-white bg-gradient-to-r from-[#ff7a00] to-[#ffb000] px-9 py-4 rounded-full text-[15px] tracking-wide">
                {t.nav.applyNow.toUpperCase()} <ArrowRight size={17} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/courses" className="btn-tactile inline-flex items-center justify-center font-bold text-white border border-white/20 bg-white/5 px-9 py-4 rounded-full text-[15px] hover:bg-white/10">
                {t.hero.primaryCta.toUpperCase()}
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
