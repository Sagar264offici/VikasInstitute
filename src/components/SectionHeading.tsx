import type { ReactNode } from 'react';
import Reveal from './Reveal';
import { cn } from '../lib/utils';

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'center',
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
  align?: 'center' | 'left';
  children?: ReactNode;
}) {
  return (
    <Reveal className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      <span className="inline-flex items-center gap-2.5 text-[11px] font-extrabold tracking-[0.3em] uppercase text-[#5b9bff]">
        <span className="w-8 h-[2px] bg-gradient-to-r from-[#2f7bff] to-[#ff7a00] rounded-full" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="font-display font-extrabold tracking-tight text-[30px] leading-[1.05] sm:text-[44px] mt-4 text-white">
        {title}
      </h2>
      {sub && <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-white/55">{sub}</p>}
      {children}
    </Reveal>
  );
}
