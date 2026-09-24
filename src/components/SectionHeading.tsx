import type { ReactNode } from 'react';
import Reveal from './Reveal';
import { cn } from '../lib/utils';

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
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
      <span
        className={cn(
          'inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border',
          dark ? 'border-white/20 bg-white/10 text-[#ffd166]' : 'border-[#2f7bff]/20 bg-[#2f7bff]/8 text-[#1a33a3]'
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        {eyebrow}
      </span>
      <h2 className={cn('font-display font-extrabold tracking-tight text-[30px] leading-[1.1] sm:text-[42px] mt-4', dark ? 'text-white' : 'text-[#0a1a5c]')}>
        {title}
      </h2>
      {sub && <p className={cn('mt-4 text-[15.5px] sm:text-[17px] leading-relaxed', dark ? 'text-white/70' : 'text-slate-600')}>{sub}</p>}
      {children}
    </Reveal>
  );
}
