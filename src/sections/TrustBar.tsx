import { useLanguage } from '../context/LanguageContext';

export default function TrustBar() {
  const { t } = useLanguage();
  return (
    <div className="bg-white border-b border-slate-200 overflow-hidden" aria-label="Highlights">
      <div className="flex whitespace-nowrap animate-marquee py-3.5 gap-0 w-max">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {[t.trust.line1, t.trust.line2, ...t.trust.items, t.hero.tagline].map((s, i) => (
              <span key={i} className="flex items-center text-[13.5px] font-bold text-[#0a1a5c]">
                <span className="px-5">{s}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff8a1e]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
