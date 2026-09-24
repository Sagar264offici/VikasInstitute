import { useLanguage } from '../context/LanguageContext';

export default function TrustBar() {
  const { t } = useLanguage();
  const items = [...t.trust.items, ...t.trust.items];
  return (
    <div aria-label="Highlights" className="relative bg-[#04061a] border-y border-white/10 py-5 overflow-hidden">
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee w-max">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-[13px] font-extrabold tracking-[0.25em] text-white/60">
            {item.toUpperCase()}
            <span className="w-2 h-2 rounded-full bg-[#ff7a00]" aria-hidden />
          </span>
        ))}
      </div>
      <p className="sr-only">{t.trust.line1} — {t.trust.line2}</p>
    </div>
  );
}
