import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      role="group"
      aria-label="Language / भाषा"
      className={cn(
        'inline-flex items-center p-1 rounded-full border text-[13px] font-semibold',
        dark ? 'border-white/20 bg-white/10 text-white' : 'border-slate-200 bg-white text-slate-700 shadow-sm'
      )}
    >
      {(['en', 'hi'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            'px-3 py-1.5 rounded-full transition-all duration-300 min-w-[52px]',
            lang === l
              ? 'bg-gradient-to-r from-[#1a33a3] to-[#2f7bff] text-white shadow'
              : dark
                ? 'text-white/70 hover:text-white'
                : 'text-slate-500 hover:text-[#0a1a5c]'
          )}
        >
          {l === 'en' ? 'EN' : 'हिंदी'}
        </button>
      ))}
    </div>
  );
}
