import { motion } from 'framer-motion';
import { Phone, MessageCircle, Navigation, MailOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import { Eyebrow, RevealText } from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

export default function ContactSection() {
  const { t } = useLanguage();
  const actions = [
    { icon: Phone, label: t.contact.callNow, href: contactInfo.phoneLinks[0], primary: true },
    { icon: MessageCircle, label: t.contact.whatsapp, href: contactInfo.whatsapp, primary: false },
    { icon: Navigation, label: t.contact.directions, href: contactInfo.mapsUrl, primary: false },
    { icon: MailOpen, label: t.enquiry.eyebrow, href: '/contact#enquiry', primary: false },
  ];
  return (
    <section aria-label="Contact" className="relative bg-[#070b1a] py-24 sm:py-36 overflow-hidden noise scanlines">
      <div className="absolute inset-0 bg-blueprint opacity-60" aria-hidden />
      <motion.div className="orb w-[600px] h-[600px] bg-[#ff7a00]/12 bottom-[-150px] left-1/2 -translate-x-1/2" aria-hidden />
      <div className="relative z-[2] max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <div className="flex justify-center">
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
        </div>
        <h2 className="display-mega text-[13vw] sm:text-[72px] lg:text-[104px] mt-4">
          <RevealText>LET&rsquo;S BUILD</RevealText>
          <RevealText delay={0.06}>
            YOUR <span className="text-gradient-gold">NEXT STEP.</span>
          </RevealText>
        </h2>
        <p className="text-white/55 mt-5 max-w-xl mx-auto text-[15px] sm:text-[17px]">{t.contact.sub}</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10 max-w-4xl mx-auto">
          {actions.map((a, i) => (
            <MagneticButton key={a.label + i}>
              <motion.a
                href={a.href}
                target={a.href.startsWith('http') ? '_blank' : undefined}
                rel={a.href.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-cursor="OPEN"
                className={`btn-tactile flex flex-col items-center gap-2.5 rounded-3xl px-5 py-7 border font-extrabold text-[13px] tracking-widest ${
                  a.primary
                    ? 'bg-gradient-to-br from-[#ff7a00] to-[#ffb000] border-transparent text-white btn-glow-orange'
                    : 'bg-white/[0.05] border-white/12 text-white hover:border-[#00a8ff]/50 hover:bg-white/[0.09]'
                }`}
              >
                <a.icon size={24} />
                {a.label.toUpperCase()}
              </motion.a>
            </MagneticButton>
          ))}
        </div>
        <p className="font-mono text-[12px] text-white/40 mt-8 tracking-widest">{contactInfo.phones.join('  •  ')}</p>
      </div>
    </section>
  );
}
