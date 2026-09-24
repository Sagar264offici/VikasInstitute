import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, PenLine, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { photos } from '../data/images';
import EduImage from '../components/EduImage';
import Reveal from '../components/Reveal';

export default function AISection() {
  const { t } = useLanguage();
  const icons = [Sparkles, PenLine, ShieldCheck];
  return (
    <section aria-label="AI learning" className="section bg-[#111] text-white">
      <div className="wrap grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <Reveal>
          <div className="rounded-2xl overflow-hidden border border-white/15">
            <EduImage photo={photos.ai} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow !text-white/50">{t.ai.eyebrow}</p>
            <h2 className="h-display text-[34px] sm:text-[46px] mt-3">Create with AI.</h2>
            <p className="text-white/70 text-[15px] sm:text-[16px] leading-relaxed mt-4 max-w-lg">{t.ai.sub}</p>
          </Reveal>
          <Reveal>
            <ul className="mt-6 space-y-4">
              {t.ai.points.map((p, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <li key={p} className="flex items-start gap-3.5">
                    <span className="w-10 h-10 grid place-items-center rounded-lg border border-white/15 text-white/85 shrink-0" aria-hidden>
                      <Icon size={18} />
                    </span>
                    <span className="text-[14.5px] text-white/80 leading-relaxed pt-2">{p}</span>
                  </li>
                );
              })}
            </ul>
            <Link to="/courses" className="btn btn-light mt-7">
              {t.ai.cta} <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
