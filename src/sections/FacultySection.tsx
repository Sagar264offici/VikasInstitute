import { motion } from 'framer-motion';
import { Presentation, FlaskConical, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Eyebrow, RevealText } from '../components/RevealText';

export default function FacultySection() {
  const { t } = useLanguage();
  const icons = [Presentation, FlaskConical, HeartHandshake];
  return (
    <section aria-label="Faculty" className="relative bg-[#050816] py-24 sm:py-32 overflow-hidden noise">
      <div className="orb w-[420px] h-[420px] bg-[#00a8ff]/12 top-0 right-0" aria-hidden />
      <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
        <div>
          <Eyebrow>{t.faculty.eyebrow}</Eyebrow>
          <h2 className="display-mega text-[16vw] sm:text-[72px] lg:text-[88px] mt-4">
            <RevealText>GUIDANCE</RevealText>
            <RevealText delay={0.06}>
              <span className="text-gradient-gold">MATTERS.</span>
            </RevealText>
          </h2>
          <p className="text-white/60 mt-5 max-w-md text-[15px] sm:text-[17px] leading-relaxed">{t.faculty.sub}</p>
          <p className="text-white/30 text-[13px] mt-3 italic">{t.faculty.note}</p>
        </div>
        <div className="space-y-3">
          {t.faculty.cards.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="flex gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 sm:p-7 hover:border-white/25 transition"
              >
                <span className="w-12 h-12 grid place-items-center rounded-2xl bg-[#2f7bff]/15 border border-[#2f7bff]/30 text-[#8db4ff] shrink-0">
                  <Icon size={22} />
                </span>
                <span>
                  <span className="block font-display font-extrabold text-[18px]">{c.title}</span>
                  <span className="block text-white/55 text-[14px] mt-1.5 leading-relaxed">{c.desc}</span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
