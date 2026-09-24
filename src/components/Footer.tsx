import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
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
    <footer className="mt-16 bg-[#060f38] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div>
            <div className="bg-white rounded-2xl inline-block px-4 py-3">
              <Logo />
            </div>
            <p className="text-[#ffd166] font-display font-bold mt-4">{t.footer.tagline}</p>
            <p className="text-white/65 text-[14px] leading-relaxed mt-2 max-w-sm">{t.footer.desc}</p>
            <div className="mt-4">
              <p className="text-[12px] font-bold uppercase tracking-widest text-white/50">{t.footer.follow}</p>
              <div className="flex gap-2.5 mt-2.5">
                <a href={contactInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <InstagramIcon size={18} />
                </a>
                <a href={contactInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <FacebookIcon size={18} />
                </a>
                <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="font-display font-bold text-[15px]">{t.footer.quickLinks}</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-white/70">
              <li><Link to="/" className="hover:text-white">{t.nav.home}</Link></li>
              <li><Link to="/courses" className="hover:text-white">{t.nav.courses}</Link></li>
              <li><Link to="/about" className="hover:text-white">{t.nav.about}</Link></li>
              <li><a href="/#gallery" className="hover:text-white">{t.nav.gallery}</a></li>
              <li><a href="/#faq" className="hover:text-white">FAQ</a></li>
              <li><Link to="/contact" className="hover:text-white">{t.nav.contact}</Link></li>
            </ul>
          </nav>

          <div>
            <p className="font-display font-bold text-[15px]">{t.footer.coursesT}</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-white/70">
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
            <p className="font-display font-bold text-[15px]">{t.footer.contactT}</p>
            <p className="flex gap-2 text-[13.5px] text-white/70 mt-4 leading-relaxed">
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
              <LanguageSwitcher dark />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-white/50">
          <p>© {new Date().getFullYear()} Vikas IT Institute. {t.footer.rights}</p>
          <p>{t.footer.madeFor}</p>
        </div>
      </div>
    </footer>
  );
}
