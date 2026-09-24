import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Lang } from '../data/translations';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (typeof translations)[Lang];
}

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem('vii-lang');
      return s === 'hi' ? 'hi' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('vii-lang', l);
    } catch { /* noop */ }
    document.documentElement.lang = l === 'hi' ? 'hi' : 'en';
  }, []);

  const toggle = useCallback(() => {
    setLangState((p) => {
      const n = p === 'en' ? 'hi' : 'en';
      try {
        localStorage.setItem('vii-lang', n);
      } catch { /* noop */ }
      document.documentElement.lang = n;
      return n;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  }, [lang]);

  const value = useMemo<LangCtx>(
    () => ({ lang, setLang, toggle, t: translations[lang] }),
    [lang, setLang, toggle]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LangCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
