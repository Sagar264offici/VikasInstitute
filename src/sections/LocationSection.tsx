import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/contact';
import { Eyebrow, RevealText } from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

export default function LocationSection() {
  const { t, lang } = useLanguage();
  return (
    <section aria-label="Location" className="relative bg-[#050816] py-24 sm:py-32 overflow-hidden noise">
      <div className="orb w-[480px] h-[480px] bg-[#2f7bff]/15 top-0 right-0" aria-hidden />
      <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8">
        <Eyebrow>{t.contact.eyebrow}</Eyebrow>
        <h2 className="display-mega text-[16vw] sm:text-[80px] lg:text-[110px] mt-4">
          <RevealText>FIND</RevealText>
          <RevealText delay={0.06}>
            <span className="text-gradient-blue">US.</span>
          </RevealText>
        </h2>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5 mt-10">
          {/* stylized dark map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[28px] overflow-hidden border border-white/12 min-h-[380px] bg-[#070b1a]"
          >
            <iframe
              title="Vikas IT Institute location map"
              src={contactInfo.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale invert-[0.92] contrast-[0.9] opacity-90"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <span className="absolute inset-0 -m-6 rounded-full bg-[#ff7a00]/30 animate-pulse-ring" aria-hidden />
              <span className="relative w-14 h-14 grid place-items-center rounded-full bg-gradient-to-br from-[#ff7a00] to-[#ffb000] shadow-2xl border-2 border-white">
                <MapPin size={24} className="text-white" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-2.5">
              <MagneticButton className="flex-1">
                <a
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-tactile btn-glow-orange flex items-center justify-center gap-2 font-extrabold text-[13px] text-white bg-gradient-to-r from-[#ff7a00] to-[#ffb000] px-6 py-4 rounded-2xl tracking-wide"
                >
                  <Navigation size={16} /> {t.contact.openMaps.toUpperCase()}
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* address card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[28px] border border-white/12 bg-gradient-to-br from-[#0a1024] to-[#060f38] p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blueprint-fine opacity-50" aria-hidden />
            <div className="relative">
              <p className="font-mono text-[11px] tracking-[0.3em] text-[#ffab2e] font-bold">{t.contact.addressTitle.toUpperCase()}</p>
              <p className="font-display font-extrabold text-[22px] sm:text-[28px] leading-snug mt-4">
                {lang === 'hi' ? contactInfo.addressHi : contactInfo.addressEn}
              </p>
              <div className="border-t border-white/10 mt-6 pt-6">
                <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 font-bold">{t.contact.phoneTitle.toUpperCase()}</p>
                <div className="flex flex-col gap-2 mt-3">
                  {contactInfo.phones.map((p, i) => (
                    <a key={p} href={contactInfo.phoneLinks[i]} className="font-display font-extrabold text-[20px] sm:text-[24px] hover:text-[#ffab2e] transition">
                      {p}
                    </a>
                  ))}
                </div>
                <p className="text-white/40 text-[13px] mt-4 italic">{t.contact.hours}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
