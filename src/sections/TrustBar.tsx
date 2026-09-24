import { GraduationCap, FlaskConical, MonitorSmartphone, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustBar() {
  const { t } = useLanguage();
  const icons = [GraduationCap, FlaskConical, MonitorSmartphone, Compass];
  return (
    <div aria-label="Highlights" className="bg-white border-b border-[#e5e5e5]">
      <div className="wrap flex items-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar py-4">
        {t.trust.items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <span key={item} className="flex items-center gap-2.5 text-[13.5px] font-bold text-[#333] whitespace-nowrap shrink-0">
              <Icon size={17} className="text-[#17324d]" aria-hidden />
              {item}
            </span>
          );
        })}
        <span className="hidden md:inline ml-auto font-serif-accent text-[15px] text-[#666] whitespace-nowrap shrink-0">
          &ldquo;{t.trust.line1}&rdquo;
        </span>
      </div>
    </div>
  );
}
