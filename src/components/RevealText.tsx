import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function RevealText({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'h1' | 'h2' | 'p' | 'span';
}) {
  const Comp = (motion as unknown as Record<string, typeof motion.div>)[as] ?? motion.div;
  return (
    <span className={`block overflow-hidden ${className}`}>
      <Comp
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </Comp>
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-extrabold tracking-[0.22em] sm:tracking-[0.3em] uppercase text-[#5b9bff] leading-relaxed">
      <span className="w-8 h-[2px] bg-gradient-to-r from-[#2f7bff] to-[#ff7a00] rounded-full" aria-hidden />
      {children}
    </span>
  );
}
