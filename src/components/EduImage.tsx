import { useLanguage } from '../context/LanguageContext';
import { posterFallback } from '../data/images';
import type { Photo } from '../data/images';

/**
 * Image with language-aware alt text and a local branded fallback.
 * Layout (aspect ratio) is controlled by the parent via className.
 */
export default function EduImage({
  photo,
  className = '',
  eager = false,
  fallback,
}: {
  photo: Photo;
  className?: string;
  eager?: boolean;
  fallback?: { c1: string; c2: string; emoji: string };
}) {
  const { lang } = useLanguage();
  const fb = fallback ?? { c1: '#17324d', c2: '#2b2b2b', emoji: '🎓' };
  return (
    <img
      src={photo.src}
      alt={lang === 'hi' ? photo.altHi : photo.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      onError={(e) => {
        const im = e.currentTarget;
        if (im.dataset.fb) return;
        im.dataset.fb = '1';
        im.src = posterFallback(lang === 'hi' ? photo.altHi : photo.alt, fb.c1, fb.c2, fb.emoji);
      }}
    />
  );
}
