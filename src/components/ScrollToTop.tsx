import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

import { useLanguage } from '../context/LanguageContext';

export default function ScrollToTop() {
  const { lang } = useLanguage();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={lang === 'hi' ? 'ऊपर जाएँ' : 'Scroll to top'}
          className="fixed bottom-5 right-5 z-[60] w-12 h-12 grid place-items-center rounded-full bg-white/10 border border-white/20 backdrop-blur text-white shadow-2xl hover:bg-white/20 active:scale-95 transition"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
