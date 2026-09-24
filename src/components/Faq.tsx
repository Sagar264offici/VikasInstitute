import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { faqs } from '../data/contact';
import { Eyebrow } from './RevealText';

export default function Faq() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <Eyebrow>{t.faq.eyebrow}</Eyebrow>
      <h2 className="display-mega text-[11vw] sm:text-[56px] lg:text-[72px] mt-4 leading-[1.05]">
        {lang === 'hi' ? (
          <span className="text-[9vw] sm:text-[48px] lg:text-[60px]">{t.faq.title}</span>
        ) : (
          <>
            CAN A<br />
            <span className="text-stroke">BEGINNER START?</span>
          </>
        )}
      </h2>
      <div className="mt-8 border-t border-white/10">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-white/10">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-4 sm:gap-6 py-5 sm:py-7 text-left group"
              >
                <span className="font-mono text-[12px] text-[#ffab2e] font-bold shrink-0">0{i + 1}</span>
                <span className={`flex-1 font-display font-extrabold tracking-tight leading-tight text-[19px] sm:text-[30px] transition ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                  {(lang === 'hi' ? f.qHi : f.qEn).toUpperCase()}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 grid place-items-center rounded-full border shrink-0 transition ${isOpen ? 'bg-[#ff7a00] border-[#ff7a00] text-white' : 'border-white/20 text-white/60'}`}
                >
                  <Plus size={20} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 pl-9 sm:pl-14 pr-4 text-white/60 text-[14.5px] sm:text-[16px] leading-relaxed max-w-3xl">
                      {lang === 'hi' ? f.aHi : f.aEn}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
