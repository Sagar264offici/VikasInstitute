import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { faqs } from '../data/contact';
import { cn } from '../lib/utils';

export default function Faq() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <p className="eyebrow">{t.faq.eyebrow}</p>
      <h2 className="h-section text-[26px] sm:text-[34px] mt-3 max-w-xl">{t.faq.title}</h2>
      <p className="lede text-[15px] mt-2">{t.faq.sub}</p>

      <div className="mt-7 border-t border-[#e5e5e5]">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-[#e5e5e5]">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="w-full min-h-[64px] flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className={cn('font-bold text-[16px] sm:text-[19px] leading-snug', isOpen ? 'text-[#111]' : 'text-[#333]')}>
                  {lang === 'hi' ? f.qHi : f.qEn}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    'shrink-0 w-9 h-9 grid place-items-center rounded-full border transition-colors',
                    isOpen ? 'bg-[#111] border-[#111] text-white' : 'border-[#dadada] text-[#111]'
                  )}
                >
                  <Plus size={18} className={cn('transition-transform duration-300', isOpen && 'rotate-45')} />
                </span>
              </button>
              <div id={`faq-panel-${i}`} className={cn('acc-panel', isOpen && 'open')}>
                <div className="acc-inner">
                  <p className="lede text-[14.5px] sm:text-[15.5px] pb-6 pr-2 max-w-3xl">
                    {lang === 'hi' ? f.aHi : f.aEn}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
