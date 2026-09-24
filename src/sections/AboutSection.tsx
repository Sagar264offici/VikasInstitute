import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { photos } from '../data/images';
import EduImage from '../components/EduImage';
import Reveal from '../components/Reveal';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section aria-label="About" className="section">
      <div className="wrap grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <Reveal className="lg:col-span-7">
          <div className="img-frame rounded-2xl">
            <EduImage photo={photos.about} sizes="(min-width: 1024px) 58vw, 100vw" className="aspect-[4/3]" />
          </div>
        </Reveal>
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="h-section text-[30px] sm:text-[38px] mt-3">
              Build skills.
              <br />
              Build confidence.
            </h2>
            <p className="lede text-[15px] sm:text-[16px] mt-4">{t.about.desc1}</p>
            <p className="lede text-[15px] sm:text-[16px] mt-3">{t.about.desc2}</p>
          </Reveal>
          <Reveal>
            <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-3">
              {t.about.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14px] font-semibold text-[#333]">
                  <span className="mt-0.5 w-5 h-5 grid place-items-center rounded-full bg-[#eef4ec] text-[#2e7d32] shrink-0" aria-hidden>
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-dark mt-7">
              {t.about.cta} <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
