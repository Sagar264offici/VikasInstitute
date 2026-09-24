import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import { courses } from '../data/courses';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

const NeuralField = lazy(() => import('./NeuralField'));

export default function Footer() {
  const { t, lang } = useLanguage();
  return (
    <footer className="relative overflow-hidden bg-[#111] text-white">
      <Suspense fallback={null}>
        <NeuralField variant="footer" tone="dark" className="absolute inset-0 pointer-events-none" />
      </Suspense>
      <div className="wrap relative pt-12 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="text-white/70 text-[14px] leading-relaxed mt-4 max-w-sm">{t.footer.desc}</p>
            <div className="flex gap-2 mt-5">
              <a href={contactInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-11 h-11 grid place-items-center rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href={contactInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-11 h-11 grid place-items-center rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-11 h-11 grid place-items-center rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/50 transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-[12px] font-bold tracking-[0.14em] text-white/50">{t.footer.quickLinks.toUpperCase()}</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li><Link to="/" className="text-white/75 hover:text-white">{t.nav.home}</Link></li>
              <li><Link to="/courses" className="text-white/75 hover:text-white">{t.nav.courses}</Link></li>
              <li><Link to="/about" className="text-white/75 hover:text-white">{t.nav.about}</Link></li>
              <li><a href="/#gallery" className="text-white/75 hover:text-white">{t.nav.gallery}</a></li>
              <li><a href="/#faq" className="text-white/75 hover:text-white">FAQ</a></li>
              <li><Link to="/contact" className="text-white/75 hover:text-white">{t.nav.contact}</Link></li>
            </ul>
          </nav>

          <div>
            <p className="text-[12px] font-bold tracking-[0.14em] text-white/50">{t.footer.coursesT.toUpperCase()}</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {courses.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link to={`/course/${c.slug}`} className="text-white/75 hover:text-white">
                    {lang === 'hi' ? c.titleHi : c.titleEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-bold tracking-[0.14em] text-white/50">{t.footer.contactT.toUpperCase()}</p>
            <p className="flex gap-2 text-[13.5px] text-white/70 mt-4 leading-relaxed">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              {lang === 'hi' ? contactInfo.addressHi : contactInfo.addressEn}
            </p>
            <div className="mt-3 space-y-2">
              {contactInfo.phones.map((p, i) => (
                <a key={p} href={contactInfo.phoneLinks[i]} className="flex items-center gap-2 text-[14px] font-bold text-white/85 hover:text-white">
                  <Phone size={15} /> {p}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[12.5px] text-white/50">
          <p>© {new Date().getFullYear()} Vikas IT Institute. {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <p>{t.footer.madeFor}</p>
            <LanguageSwitcher dark />
          </div>
        </div>
      </div>
    </footer>
  );
}
