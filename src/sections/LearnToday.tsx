import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { photos } from '../data/images';
import EduImage from '../components/EduImage';
import Reveal from '../components/Reveal';

/**
 * ONE complete feature card: image + heading + supporting text + CTA
 * belong to the same visual component. Nothing detached on mobile.
 */
export default function LearnToday() {
  const { t } = useLanguage();
  return (
    <section aria-label="Learn today, lead tomorrow" className="section pt-0">
      <div className="wrap">
        <Reveal>
          <figure className="relative rounded-2xl overflow-hidden border border-[#e5e5e5] bg-[#111]">
            <EduImage
              photo={photos.learnToday}
              className="absolute inset-0 w-full h-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" aria-hidden />
            <figcaption className="relative p-6 sm:p-10 lg:p-14 pt-40 sm:pt-56 lg:pt-72 max-w-2xl">
              <p className="text-[12px] font-bold tracking-[0.14em] text-white/70">
                VIKAS IT INSTITUTE
              </p>
              <p className="font-serif-accent text-white text-[28px] sm:text-[40px] lg:text-[48px] leading-tight mt-2">
                &ldquo;{t.trust.line1}.&rdquo;
              </p>
              <p className="text-white/80 text-[14.5px] sm:text-[16px] leading-relaxed mt-3">
                {t.trust.line2}. {t.about.desc1}
              </p>
              <Link to="/contact#enquiry" className="btn btn-light mt-6">
                {t.nav.enrollNow} <ArrowRight size={17} />
              </Link>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
