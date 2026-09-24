import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { faqs } from '../data/contact';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export default function Faq() {
  const { lang } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-3">
      {faqs.map((f, i) => {
        const open = openIdx === i;
        return (
          <div
            key={i}
            className={cn(
              'rounded-2xl border transition-all duration-300 overflow-hidden',
              open ? 'bg-white border-[#2f7bff]/40 shadow-[0_16px_40px_-16px_rgba(26,51,163,0.3)]' : 'bg-white border-slate-200 hover:border-slate-300'
            )}
          >
            <button
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
              className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5"
            >
              <span className="font-display font-bold text-[15px] sm:text-[16.5px] text-[#0a1a5c]">
                {lang === 'hi' ? f.qHi : f.qEn}
              </span>
              <span className={cn('shrink-0 w-8 h-8 grid place-items-center rounded-full transition', open ? 'bg-[#0a1a5c] text-white' : 'bg-slate-100 text-slate-600')}>
                {open ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-5 sm:px-6 pb-5 text-[14.5px] leading-relaxed text-slate-600">
                    {lang === 'hi' ? f.aHi : f.aEn}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
