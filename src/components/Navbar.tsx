import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/courses', label: t.nav.courses },
    { to: '/about', label: t.nav.about },
    { to: '/#why', label: t.nav.whyUs },
    { to: '/#gallery', label: t.nav.gallery },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        // Solid background on purpose: backdrop-blur repaints every scroll
        // frame and is a common source of mobile jank. Visual difference at 95% opacity was negligible.
        'sticky top-0 z-[60] bg-[#f7f7f5] border-b border-[#e5e5e5] transition-shadow',
        scrolled && 'shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
      )}
    >
      <nav aria-label="Primary" className="wrap flex items-center justify-between gap-3 h-16">
        <Link to="/" aria-label="Vikas IT Institute home" className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center gap-1 text-[14px] font-semibold text-[#333]">
          {links.map((l) =>
            l.to.startsWith('/#') ? (
              <a key={l.label} href={l.to} className="px-3.5 py-2 rounded-md hover:bg-[#ececea] hover:text-[#111] transition-colors">
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.to + l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn('px-3.5 py-2 rounded-md transition-colors', isActive ? 'bg-[#111] text-white' : 'hover:bg-[#ececea] hover:text-[#111]')
                }
              >
                {l.label}
              </NavLink>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Link to="/contact#enquiry" className="btn btn-dark !min-h-[44px] !px-6 !text-[14px]">
            {t.nav.enrollNow}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? (lang === 'hi' ? 'मेनू बंद करें' : 'Close menu') : lang === 'hi' ? 'मेनू खोलें' : 'Open menu'}
            className="w-11 h-11 grid place-items-center rounded-md border border-[#dadada] text-[#111]"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* mobile menu: overlays the page instead of pushing it (no layout shift) */}
      <div
        className={cn(
          'lg:hidden absolute left-0 right-0 top-full overflow-hidden bg-[#f7f7f5] transition-[max-height,opacity] duration-300',
          open
            ? 'max-h-[560px] opacity-100 border-b border-[#e5e5e5] shadow-[0_14px_28px_rgba(0,0,0,0.07)]'
            : 'max-h-0 opacity-0'
        )}
      >
        <nav aria-label="Mobile" className="wrap py-3 flex flex-col">
          {links.map((l, i) =>
            l.to.startsWith('/#') ? (
              <a
                key={l.label}
                href={l.to}
                className="flex items-baseline gap-3 py-3 border-b border-[#e5e5e5] last:border-0 font-bold text-[17px] text-[#111]"
              >
                <span className="text-[12px] font-mono text-[#6b6b6b]">0{i + 1}</span>
                {l.label}
              </a>
            ) : (
              <Link
                key={l.to + l.label}
                to={l.to}
                className="flex items-baseline gap-3 py-3 border-b border-[#e5e5e5] last:border-0 font-bold text-[17px] text-[#111]"
              >
                <span className="text-[12px] font-mono text-[#6b6b6b]">0{i + 1}</span>
                {l.label}
              </Link>
            )
          )}
          <Link to="/contact#enquiry" className="btn btn-dark mt-3 mb-2">
            {t.nav.enrollNow}
          </Link>
        </nav>
      </div>
    </header>
  );
}
