import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      role="group"
      aria-label="Language / भाषा"
      className={cn(
        'inline-flex items-center rounded-full border p-0.5 text-[13px] font-bold',
        dark ? 'border-white/25' : 'border-[#dadada]'
      )}
    >
      {(['en', 'hi'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            'min-h-[36px] px-3 max-[400px]:min-h-[34px] max-[400px]:px-2 rounded-full transition-colors',
            lang === l
              ? 'bg-[#111] text-white'
              : dark
                ? 'text-white/60 hover:text-white'
                : 'text-[#666] hover:text-[#111]'
          )}
        >
          {l === 'en' ? 'EN' : 'हिंदी'}
        </button>
      ))}
    </div>
  );
}
