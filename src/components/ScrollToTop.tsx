import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ScrollToTop() {
  const { lang } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={lang === 'hi' ? 'ऊपर जाएँ' : 'Scroll to top'}
      className="fixed bottom-5 right-5 z-[60] w-12 h-12 grid place-items-center rounded-full bg-[#111] text-white border border-[#111] hover:bg-[#2b2b2b]"
    >
      <ArrowUp size={20} />
    </button>
  );
}
