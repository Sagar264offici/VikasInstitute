import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div
      role="group"
      aria-label="Language / भाषा"
      className="inline-flex items-center p-1 rounded-full border border-white/15 bg-white/5 text-[12px] font-bold backdrop-blur"
    >
      {(['en', 'hi'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            'px-3.5 py-1.5 rounded-full transition-all duration-300 min-w-[52px]',
            lang === l
              ? 'bg-gradient-to-r from-[#2f7bff] to-[#00a8ff] text-white shadow-lg shadow-blue-600/40'
              : 'text-white/55 hover:text-white'
          )}
        >
          {l === 'en' ? 'EN' : 'हिंदी'}
        </button>
      ))}
    </div>
  );
}
