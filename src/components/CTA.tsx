import { Link } from 'react-router-dom';
import { Phone, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import Reveal from './Reveal';

export default function CTA() {
  const { t } = useLanguage();
  return (
    <section aria-label="Admissions" className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#060f38] via-[#0a1a5c] to-[#1a33a3] text-white px-6 py-12 sm:p-14 text-center">
          <div className="absolute inset-0 bg-blueprint opacity-100" aria-hidden />
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#2f7bff]/40 blur-[90px]" aria-hidden />
          <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-[#ff8a1e]/35 blur-[90px]" aria-hidden />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.16em] uppercase bg-white/10 border border-white/20 px-4 py-2 rounded-full text-[#ffd166]">
              <Sparkles size={14} /> {t.common.admissionsOpen}
            </span>
            <h2 className="font-display font-extrabold text-[28px] sm:text-[44px] leading-tight mt-4">
              {t.enquiry.title} — <span className="text-gradient-gold">{t.hero.tagline}</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-3 text-[15px] sm:text-[17px]">{t.hero.mantra}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
              <Link to="/contact#enquiry" className="btn-tactile font-bold bg-gradient-to-r from-[#ff7a1a] to-[#ffb020] px-8 py-4 rounded-full shadow-xl shadow-orange-900/40 text-[16px]">
                {t.nav.applyNow}
              </Link>
              <a href={contactInfo.phoneLinks[0]} className="btn-tactile inline-flex items-center justify-center gap-2 font-bold bg-white/10 border border-white/25 px-8 py-4 rounded-full hover:bg-white/20">
                <Phone size={17} /> {contactInfo.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
