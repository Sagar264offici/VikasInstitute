import type { ReactNode } from 'react';
import Reveal from './Reveal';
import { cn } from '../lib/utils';

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'left',
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: 'left' | 'center';
}) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-section text-[28px] sm:text-[36px] mt-3">{title}</h2>
      {sub && <p className="lede text-[15px] sm:text-[16px] mt-3">{sub}</p>}
    </Reveal>
  );
}
