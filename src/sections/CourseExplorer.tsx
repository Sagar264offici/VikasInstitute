import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { courses } from '../data/courses';
import { Eyebrow, RevealText } from '../components/RevealText';
import { CourseIcon } from '../components/CourseCard';

const groups: { key: string; label: string }[] = [
  { key: 'All', label: 'All' },
  { key: 'COMPUTER', label: 'COMPUTER' },
  { key: 'PROGRAMMING', label: 'PROGRAMMING' },
  { key: 'WEB', label: 'WEB' },
  { key: 'BUSINESS', label: 'BUSINESS' },
  { key: 'CREATIVE', label: 'CREATIVE' },
  { key: 'ADVANCED', label: 'ADVANCED' },
];

function groupOf(id: string): string {
  if (['basic-computer', 'adca-dca-ccc', 'data-entry'].includes(id)) return 'COMPUTER';
  if (['python', 'sql', 'cyber-security'].includes(id)) return 'PROGRAMMING';
  if (['web-dev', 'web-designing'].includes(id)) return 'WEB';
  if (['tally-gst', 'advanced-excel', 'digital-marketing'].includes(id)) return 'BUSINESS';
  if (['graphic-design'].includes(id)) return 'CREATIVE';
  return 'ADVANCED';
}

export default function CourseExplorer() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState<string | null>(null);
  const list = courses.filter((c) => filter === 'All' || groupOf(c.id) === filter || c.level.includes(filter as never));

  return (
    <section aria-label="Courses" className="relative bg-[#070b1a] py-24 sm:py-32 overflow-hidden noise">
      <div className="orb w-[560px] h-[560px] bg-[#2f7bff]/18 top-[-100px] right-[-160px]" aria-hidden />
      <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8">
        <Eyebrow>{t.courses.eyebrow}</Eyebrow>
        <h2 className="display-mega text-[14vw] sm:text-[76px] lg:text-[110px] mt-4 leading-[0.9]">
          <RevealText>CHOOSE</RevealText>
          <RevealText delay={0.06}>
            YOUR <span className="text-gradient-neon">PATH.</span>
          </RevealText>
        </h2>
        <p className="text-white/55 max-w-2xl mt-5 text-[15px] sm:text-[17px] leading-relaxed">{t.courses.sub}</p>

        <div className="flex gap-2 mt-8 overflow-x-auto no-scrollbar pb-1" role="tablist" aria-label="Course filters">
          {groups.map((g) => (
            <button
              key={g.key}
              role="tab"
              aria-selected={filter === g.key}
              onClick={() => setFilter(g.key)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-[12px] font-extrabold tracking-widest border transition ${
                filter === g.key
                  ? 'bg-white text-[#050816] border-white'
                  : 'bg-white/5 text-white/60 border-white/12 hover:border-white/30 hover:text-white'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="mt-6 border-t border-white/10">
          <AnimatePresence initial={false}>
            {list.map((c, i) => {
              const isActive = active === c.id;
              const dim = active && !isActive;
              return (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: dim ? 0.35 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  onMouseEnter={() => setActive(c.id)}
                  onMouseLeave={() => setActive(null)}
                  className="group relative border-b border-white/10"
                >
                  <Link
                    to={`/course/${c.slug}`}
                    data-cursor="OPEN"
                    className="flex items-center gap-4 sm:gap-7 py-5 sm:py-7 px-1 sm:px-4"
                    aria-label={`${lang === 'hi' ? c.titleHi : c.titleEn}`}
                  >
                    <span className="font-mono text-[12px] text-white/30 font-bold w-8 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="hidden sm:grid w-12 h-12 place-items-center rounded-2xl bg-white/6 border border-white/12 shrink-0 group-hover:bg-[#2f7bff]/20 group-hover:border-[#2f7bff]/40 transition">
                      <CourseIcon name={c.icon} className="w-5 h-5 text-[#8db4ff]" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span
                        className={`block font-display font-extrabold tracking-tight leading-none transition-all duration-300 ${
                          isActive ? 'text-[24px] sm:text-[44px] text-white' : 'text-[20px] sm:text-[34px] text-white/85'
                        }`}
                      >
                        {(lang === 'hi' ? c.titleHi : c.titleEn).toUpperCase()}
                      </span>
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="block overflow-hidden"
                          >
                            <span className="block text-white/55 text-[13.5px] sm:text-[15px] mt-2 max-w-2xl leading-relaxed">
                              {lang === 'hi' ? c.descHi : c.descEn}
                            </span>
                            <span className="flex flex-wrap gap-1.5 mt-3">
                              {(lang === 'hi' ? c.tagsHi : c.tagsEn).map((tag) => (
                                <span key={tag} className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#2f7bff]/15 border border-[#2f7bff]/30 text-[#9fc0ff]">
                                  {tag}
                                </span>
                              ))}
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                      {/* mobile always show desc */}
                      <span className="sm:hidden block text-white/50 text-[13px] mt-1.5 clamp-2">
                        {lang === 'hi' ? c.descHi : c.descEn}
                      </span>
                    </span>
                    <span className="hidden md:block font-mono text-[11px] tracking-widest text-white/30 shrink-0">
                      {groupOf(c.id)}
                    </span>
                    <motion.span
                      animate={{ x: isActive ? 6 : 0, scale: isActive ? 1.15 : 1 }}
                      className={`w-11 h-11 grid place-items-center rounded-full shrink-0 border transition ${
                        isActive ? 'bg-[#ff7a00] border-[#ff7a00] text-white' : 'bg-white/5 border-white/15 text-white/60'
                      }`}
                    >
                      <ArrowUpRight size={18} />
                    </motion.span>
                  </Link>
                  {isActive && (
                    <motion.span
                      layoutId="course-glow"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00a8ff] to-[#ff7a00]"
                      aria-hidden
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="text-center mt-10">
          <Link to="/courses" className="btn-tactile inline-flex items-center gap-2 font-extrabold text-white bg-white/8 border border-white/15 px-8 py-4 rounded-full hover:bg-white/15 tracking-wide text-[14px]">
            {t.courses.viewAll.toUpperCase()} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
