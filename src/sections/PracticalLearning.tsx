import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { photos } from '../data/images';
import EduImage from '../components/EduImage';
import Reveal from '../components/Reveal';

export default function PracticalLearning() {
  const { t } = useLanguage();
  return (
    <section aria-label="Practical training" className="section">
      <div className="wrap grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <Reveal className="order-1">
          <p className="eyebrow">{t.lab.eyebrow}</p>
          <h2 className="h-display text-[38px] sm:text-[54px] lg:text-[64px] mt-3">
            Learn
            <br />
            by doing.
          </h2>
          <p className="lede text-[15px] sm:text-[16px] mt-4 max-w-md">{t.lab.desc}</p>
          <Link to="/courses" className="btn btn-dark mt-6">
            {t.lab.cta} <ArrowRight size={17} />
          </Link>
        </Reveal>
        <div className="order-2">
          <Reveal>
            <div className="img-frame rounded-2xl">
              <EduImage photo={photos.practical} className="aspect-[4/3]" />
            </div>
          </Reveal>
          <Reveal>
            <ul className="mt-5 divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
              {t.lab.points.map((p) => (
                <li key={p} className="flex items-center gap-3 py-3 text-[14.5px] font-semibold text-[#333]">
                  <span className="w-5 h-5 grid place-items-center rounded-full bg-[#eef4ec] text-[#2e7d32] shrink-0" aria-hidden>
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
