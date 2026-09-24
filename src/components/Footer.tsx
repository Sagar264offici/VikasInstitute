import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import { courses } from '../data/courses';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const { t, lang } = useLanguage();
  return (
    <footer className="relative bg-[#04061a] text-white overflow-hidden border-t border-white/10">
      {/* giant watermark */}
      <span aria-hidden className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-display font-extrabold text-[16vw] leading-none whitespace-nowrap text-transparent select-none pointer-events-none" style={{ WebkitTextStroke: '1px rgba(140,175,255,0.09)' }}>
        VIKAS IT
      </span>
      <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr]">
          <div>
            <Logo />
            <p className="text-[#ffd166] font-display font-bold mt-4 text-[15px]">{t.footer.tagline}</p>
            <p className="text-white/50 text-[14px] leading-relaxed mt-2 max-w-sm">{t.footer.desc}</p>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/40 mt-5">{t.footer.follow}</p>
            <div className="flex gap-2.5 mt-3">
              <a href={contactInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 grid place-items-center rounded-full bg-white/6 border border-white/12 hover:bg-white/15 transition">
                <InstagramIcon size={18} />
              </a>
              <a href={contactInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 grid place-items-center rounded-full bg-white/6 border border-white/12 hover:bg-white/15 transition">
                <FacebookIcon size={18} />
              </a>
              <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 grid place-items-center rounded-full bg-white/6 border border-white/12 hover:bg-white/15 transition">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="font-display font-bold text-[14px] tracking-widest text-white/80">{t.footer.quickLinks.toUpperCase()}</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-white/55">
              <li><Link to="/" className="hover:text-white inline-flex items-center gap-1">{t.nav.home} <ArrowUpRight size={13} className="opacity-40" /></Link></li>
              <li><Link to="/courses" className="hover:text-white">{t.nav.courses}</Link></li>
              <li><Link to="/about" className="hover:text-white">{t.nav.about}</Link></li>
              <li><a href="/#gallery" className="hover:text-white">{t.nav.gallery}</a></li>
              <li><a href="/#faq" className="hover:text-white">FAQ</a></li>
              <li><Link to="/contact" className="hover:text-white">{t.nav.contact}</Link></li>
            </ul>
          </nav>

          <div>
            <p className="font-display font-bold text-[14px] tracking-widest text-white/80">{t.footer.coursesT.toUpperCase()}</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-white/55">
              {courses.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link to={`/course/${c.slug}`} className="hover:text-white">
                    {lang === 'hi' ? c.titleHi : c.titleEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-bold text-[14px] tracking-widest text-white/80">{t.footer.contactT.toUpperCase()}</p>
            <p className="flex gap-2 text-[13.5px] text-white/55 mt-4 leading-relaxed">
              <MapPin size={16} className="shrink-0 mt-0.5 text-[#ffb020]" />
              {lang === 'hi' ? contactInfo.addressHi : contactInfo.addressEn}
            </p>
            <div className="mt-3 space-y-2">
              {contactInfo.phones.map((p, i) => (
                <a key={p} href={contactInfo.phoneLinks[i]} className="flex items-center gap-2 text-[14px] font-bold hover:text-[#ffd166]">
                  <Phone size={15} className="text-[#ffb020]" /> {p}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/40">
          <p>© {new Date().getFullYear()} Vikas IT Institute. {t.footer.rights}</p>
          <p className="font-mono tracking-widest">{t.footer.madeFor.toUpperCase()}</p>
        </div>
      </div>
    </footer>
  );
}
