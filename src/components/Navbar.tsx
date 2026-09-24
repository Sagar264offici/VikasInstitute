import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import { cn } from '../lib/utils';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open ]);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/courses', label: t.nav.courses },
    { to: '/about', label: t.nav.about },
    { to: '/#why', label: t.nav.whyUs, hash: true },
    { to: '/#gallery', label: t.nav.gallery, hash: true },
    { to: '/contact', label: t.nav.contact },
  ];

  const goHash = (hashPath: string) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(hashPath)?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      document.querySelector(hashPath)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* top strip */}
      <div className="hidden md:block bg-[#060f38] text-white/85 text-[12.5px]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <p className="tracking-wide">{t.hero.tagline} • {t.trust.line1}</p>
          <div className="flex items-center gap-4">
            <a href={contactInfo.phoneLinks[0]} className="hover:text-white font-semibold">{contactInfo.phones[0]}</a>
            <span className="opacity-30">|</span>
            <a href={contactInfo.phoneLinks[1]} className="hover:text-white font-semibold">{contactInfo.phones[1]}</a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 z-[60] transition-all duration-300',
          scrolled ? 'glass shadow-[0_10px_40px_-12px_rgba(10,26,92,0.35)] border-b border-white/40' : 'bg-white/60 backdrop-blur-md border-b border-transparent'
        )}
      >
        <nav aria-label="Primary" className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-3">
          <Link to="/" aria-label="Vikas IT Institute home" className="shrink-0">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center gap-1 text-[14.5px] font-semibold text-slate-700">
            {links.map((l) =>
              l.hash ? (
                <button
                  key={l.label}
                  onClick={() => goHash(l.to.replace('/', ''))}
                  className="px-3.5 py-2 rounded-full hover:bg-slate-100 hover:text-[#0a1a5c] transition"
                >
                  {l.label}
                </button>
              ) : (
                <NavLink
                  key={l.to + l.label}
                  to={l.to}
                  className={({ isActive }) =>
                    cn('px-3.5 py-2 rounded-full transition', isActive ? 'bg-[#0a1a5c] text-white shadow' : 'hover:bg-slate-100 hover:text-[#0a1a5c]')
                  }
                >
                  {l.label}
                </NavLink>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href={contactInfo.phoneLinks[0]}
              className="btn-tactile inline-flex items-center gap-2 text-[14px] font-bold text-[#0a1a5c] border border-slate-200 bg-white px-4 py-2.5 rounded-full shadow-sm hover:border-[#2f7bff]"
            >
              <Phone size={16} /> {t.nav.callNow}
            </a>
            <Link
              to="/contact#enquiry"
              className="btn-tactile inline-flex items-center gap-2 text-[14px] font-bold text-white bg-gradient-to-r from-[#ff7a1a] to-[#ffab2e] px-5 py-2.5 rounded-full shadow-lg shadow-orange-500/30"
            >
              {t.nav.applyNow}
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="w-11 h-11 grid place-items-center rounded-full bg-[#0a1a5c] text-white shadow-lg active:scale-95 transition"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="absolute inset-0 bg-[#060f38]/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-[86%] max-w-[380px] bg-gradient-to-b from-[#0a1a5c] to-[#10237a] text-white p-6 flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-extrabold">VIKAS IT INSTITUTE</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 grid place-items-center rounded-full bg-white/15 active:scale-95"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-white/60 text-[13px] mt-1">{t.hero.tagline}</p>

              <div className="mt-6 flex flex-col gap-1 text-[17px] font-semibold">
                {links.map((l, i) => (
                  <motion.div
                    key={l.label + i}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {l.hash ? (
                      <button
                        onClick={() => goHash(l.to.replace('/', ''))}
                        className="w-full text-left px-4 py-3.5 rounded-2xl hover:bg-white/10 transition"
                      >
                        {l.label}
                      </button>
                    ) : (
                      <Link to={l.to} className="block px-4 py-3.5 rounded-2xl hover:bg-white/10 transition">
                        {l.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-6 flex flex-col gap-3">
                <Link
                  to="/contact#enquiry"
                  className="text-center font-bold bg-gradient-to-r from-[#ff7a1a] to-[#ffb020] rounded-2xl py-4 shadow-lg"
                >
                  {t.nav.applyNow}
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <a href={contactInfo.phoneLinks[0]} className="text-center font-bold bg-white/12 border border-white/20 rounded-2xl py-3.5">
                    {t.nav.callNow}
                  </a>
                  <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" className="text-center font-bold bg-[#25D366]/90 rounded-2xl py-3.5">
                    WhatsApp
                  </a>
                </div>
                <p className="text-center text-white/55 text-[12.5px]">{contactInfo.phones.join(' • ')}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
