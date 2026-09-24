import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(true);
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced) {
      setVisible(false);
      onDone();
      return;
    }
    const t1 = setInterval(() => {
      setCount((c) => {
        if (c >= 5) {
          clearInterval(t1);
          return c;
        }
        return c + 1;
      });
    }, 220);
    const t2 = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 500);
    }, 1500);
    return () => {
      clearInterval(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[#050816] text-white flex flex-col items-center justify-center overflow-hidden"
          aria-hidden={!visible}
        >
          <div className="absolute inset-0 bg-blueprint opacity-60" aria-hidden />
          <div className="orb w-[420px] h-[420px] bg-[#2f7bff]/25 -top-20 -left-20" aria-hidden />
          <div className="orb w-[320px] h-[320px] bg-[#ff7a00]/15 bottom-0 right-0" aria-hidden />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative flex flex-col items-center"
          >
            <span className="relative grid place-items-center w-16 h-16 rounded-3xl bg-gradient-to-br from-[#1a33a3] to-[#2f7bff] shadow-2xl">
              <svg viewBox="0 0 32 32" className="w-9 h-9" aria-hidden>
                <path d="M5 6 L16 27 L27 6" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 6 L26 6" fill="none" stroke="#ffb020" strokeWidth="3.4" strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 rounded-3xl border border-white/20 animate-pulse-ring" aria-hidden />
            </span>
            <p className="font-display font-extrabold tracking-[0.2em] text-[15px] mt-6">VIKAS IT INSTITUTE</p>
            <p className="text-white/40 text-[11px] tracking-[0.3em] mt-2 font-semibold">INITIALIZING YOUR FUTURE…</p>
            <p className="font-display font-extrabold text-[64px] leading-none mt-4 text-gradient-blue tabular-nums">
              0{count}
            </p>
            <div className="w-48 h-[3px] bg-white/10 rounded-full mt-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2f7bff] to-[#ff7a00]"
                animate={{ width: `${(count / 5) * 100}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
