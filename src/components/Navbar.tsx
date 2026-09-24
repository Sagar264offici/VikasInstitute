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
  const { t, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
  }, [open]);

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
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] px-3 sm:px-6 pt-3 sm:pt-4"
      >
        <nav
          aria-label="Primary"
          className={cn(
            'max-w-6xl mx-auto flex items-center justify-between gap-3 rounded-full pl-4 pr-2 py-2 transition-all duration-500',
            scrolled ? 'glass-pill' : 'bg-transparent border border-transparent'
          )}
        >
          <Link to="/" aria-label="Vikas IT Institute home" className="shrink-0">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center gap-1 text-[13.5px] font-bold text-white/70">
            {links.map((l) =>
              l.hash ? (
                <button
                  key={l.label}
                  onClick={() => goHash(l.to.replace('/', ''))}
                  className="px-4 py-2 rounded-full hover:bg-white/10 hover:text-white transition tracking-wide"
                >
                  {l.label.toUpperCase()}
                </button>
              ) : (
                <NavLink
                  key={l.to + l.label}
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-2 rounded-full transition tracking-wide',
                      isActive ? 'bg-white/12 text-white shadow-inner' : 'hover:bg-white/10 hover:text-white'
                    )
                  }
                >
                  {l.label.toUpperCase()}
                </NavLink>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <LanguageSwitcher />
            <a
              href={contactInfo.phoneLinks[0]}
              className="btn-tactile inline-flex items-center gap-2 text-[13px] font-bold text-white border border-white/15 bg-white/5 px-4 py-2.5 rounded-full hover:border-[#2f7bff]"
            >
              <Phone size={14} /> {t.nav.callNow}
            </a>
            <Link
              to="/contact#enquiry"
              className="btn-tactile btn-glow-orange inline-flex items-center gap-2 text-[13px] font-extrabold text-white bg-gradient-to-r from-[#ff7a00] to-[#ffb000] px-5 py-2.5 rounded-full"
            >
              {t.nav.enrollNow.toUpperCase()}
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setOpen(true)}
              aria-label={lang === 'hi' ? 'मेनू खोलें' : 'Open menu'}
              className="w-11 h-11 grid place-items-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur active:scale-95 transition"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] lg:hidden bg-[#050816]"
            role="dialog"
            aria-modal="true"
            aria-label={lang === 'hi' ? 'मोबाइल मेनू' : 'Mobile menu'}
          >
            <div className="absolute inset-0 bg-blueprint" aria-hidden />
            <div className="orb w-[380px] h-[380px] bg-[#2f7bff]/25 top-0 right-0" aria-hidden />
            <div className="relative h-full flex flex-col p-6 pt-5 overflow-y-auto">
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label={lang === 'hi' ? 'मेनू बंद करें' : 'Close menu'}
                  className="w-11 h-11 grid place-items-center rounded-full bg-white/10 border border-white/20 active:scale-95"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-white/40 text-[12px] mt-2 tracking-[0.25em] font-bold">{t.hero.tagline.toUpperCase()}</p>

              <div className="mt-8 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.label + i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {l.hash ? (
                      <button
                        onClick={() => goHash(l.to.replace('/', ''))}
                        className="group w-full flex items-baseline gap-4 text-left py-2"
                      >
                        <span className="font-mono text-[13px] text-[#ffab2e] font-bold">0{i + 1}</span>
                        <span className="display-mega text-[30px] sm:text-[42px] leading-[1.1] break-words text-white group-active:text-[#ffab2e]">{l.label.toUpperCase()}</span>
                      </button>
                    ) : (
                      <Link to={l.to} className="group flex items-baseline gap-4 py-2">
                        <span className="font-mono text-[13px] text-[#ffab2e] font-bold">0{i + 1}</span>
                        <span className="display-mega text-[30px] sm:text-[42px] leading-[1.1] break-words text-white">{l.label.toUpperCase()}</span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <Link
                  to="/contact#enquiry"
                  className="text-center font-extrabold bg-gradient-to-r from-[#ff7a00] to-[#ffb000] rounded-2xl py-4 shadow-xl tracking-wide"
                >
                  {t.nav.enrollNow.toUpperCase()}
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <a href={contactInfo.phoneLinks[0]} className="text-center font-bold bg-white/8 border border-white/15 rounded-2xl py-3.5">
                    {t.nav.callNow}
                  </a>
                  <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" className="text-center font-bold bg-[#25D366]/90 rounded-2xl py-3.5">
                    WhatsApp
                  </a>
                </div>
                <p className="text-center text-white/45 text-[12.5px] font-mono">{contactInfo.phones.join(' • ')}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
