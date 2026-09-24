import { useLanguage } from '../context/LanguageContext';
import { posterFallback } from '../data/images';
import type { Photo } from '../data/images';

/**
 * Build a srcset for CDN photos by scaling the `w=` URL parameter.
 * Local files (SVGs, data URIs) have no `w=` param and are skipped.
 * Only widths at or below the requested size are offered, so the
 * browser never downloads a larger file than before.
 */
function buildSrcSet(src: string): string | undefined {
  if (!/[?&]w=\d+/.test(src)) return undefined;
  const base = Number(src.match(/[?&]w=(\d+)/)![1]);
  const widths = [480, 768, 1024, base].filter((w, i, a) => w <= base && a.indexOf(w) === i);
  return widths.map((w) => `${src.replace(/([?&])w=\d+/, `$1w=${w}`)} ${w}w`).join(', ');
}

/**
 * Image with language-aware alt text and a local branded fallback.
 * Layout (aspect ratio) is controlled by the parent via className.
 * Responsive: passes `srcset`/`sizes` so phones fetch small files.
 */
export default function EduImage({
  photo,
  className = '',
  eager = false,
  sizes = '100vw',
  fallback,
}: {
  photo: Photo;
  className?: string;
  eager?: boolean;
  sizes?: string;
  fallback?: { c1: string; c2: string; emoji: string };
}) {
  const { lang } = useLanguage();
  const fb = fallback ?? { c1: '#17324d', c2: '#2b2b2b', emoji: '🎓' };
  const srcSet = buildSrcSet(photo.src);
  return (
    <img
      src={photo.src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={lang === 'hi' ? photo.altHi : photo.alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      className={className}
      onError={(e) => {
        const im = e.currentTarget;
        if (im.dataset.fb) return;
        im.dataset.fb = '1';
        // Drop responsive candidates too, or the browser would retry them.
        im.removeAttribute('srcset');
        im.removeAttribute('sizes');
        im.src = posterFallback(lang === 'hi' ? photo.altHi : photo.alt, fb.c1, fb.c2, fb.emoji);
      }}
    />
  );
}
