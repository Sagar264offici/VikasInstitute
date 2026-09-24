import { Phone, MessageCircle, Navigation, ClipboardList } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import Reveal from './Reveal';

export default function ContactSection() {
  const { t } = useLanguage();
  const actions = [
    { icon: Phone, label: t.contact.callNow, href: contactInfo.phoneLinks[0], style: 'btn-dark' },
    { icon: MessageCircle, label: t.contact.whatsapp, href: contactInfo.whatsapp, style: 'btn-outline' },
    { icon: Navigation, label: t.contact.directions, href: contactInfo.mapsUrl, style: 'btn-outline' },
    { icon: ClipboardList, label: t.enquiry.eyebrow, href: '/contact#enquiry', style: 'btn-outline' },
  ];
  return (
    <section aria-label="Contact" className="section bg-white border-y border-[#e5e5e5]">
      <div className="wrap text-center">
        <Reveal className="max-w-2xl mx-auto">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="h-section text-[30px] sm:text-[40px] mt-3">
            {t.contact.title}
          </h2>
          <p className="lede text-[15px] sm:text-[16px] mt-3">{t.contact.sub}</p>
        </Reveal>
        <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8 max-w-3xl mx-auto">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target={a.href.startsWith('http') ? '_blank' : undefined}
              rel={a.href.startsWith('http') ? 'noreferrer' : undefined}
              className={`btn ${a.style} w-full`}
            >
              <a.icon size={18} />
              {a.label}
            </a>
          ))}
        </Reveal>
        <p className="text-[13px] text-[#6b6b6b] mt-6 font-medium">{contactInfo.phones.join('  ·  ')}</p>
      </div>
    </section>
  );
}
