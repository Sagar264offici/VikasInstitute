import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { galleryPhotos } from '../data/images';
import SectionHeading from '../components/SectionHeading';
import EduImage from '../components/EduImage';
import Reveal from '../components/Reveal';
import Lightbox, { type GalleryImage } from '../components/Lightbox';
import { cn } from '../lib/utils';

/**
 * Editorial masonry on desktop, touch-first snap carousel on mobile.
 * Cards ~84% viewport width on phones, fixed 4/3 ratio, dots included.
 */
export default function GallerySection() {
  const { t, lang } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const images: GalleryImage[] = galleryPhotos.map((g) => ({
    src: g.src,
    alt: lang === 'hi' ? g.altHi : g.alt,
    caption: lang === 'hi' ? g.captionHi : g.captionEn,
  }));

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / (el.clientWidth * 0.84));
      setPage(Math.max(0, Math.min(images.length - 1, i)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [images.length]);

  const scrollTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(images.length - 1, i));
    el.scrollTo({ left: clamped * el.clientWidth * 0.84, behavior: 'smooth' });
  };

  return (
    <section id="gallery" aria-label="Gallery" className="section scroll-mt-20 overflow-hidden">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} sub={t.gallery.sub} />
          <div className="hidden md:flex gap-2">
            <button onClick={() => scrollTo(page - 1)} aria-label={t.gallery.prev} className="w-11 h-11 grid place-items-center rounded-full border border-[#dadada] hover:border-[#111] hover:bg-[#111] hover:text-white transition-colors">
              <ChevronLeft size={19} />
            </button>
            <button onClick={() => scrollTo(page + 1)} aria-label={t.gallery.next} className="w-11 h-11 grid place-items-center rounded-full border border-[#dadada] hover:border-[#111] hover:bg-[#111] hover:text-white transition-colors">
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
      </div>

      {/* mobile: snap carousel */}
      <Reveal className="md:hidden mt-7">
        <div ref={trackRef} className="snap-row flex gap-3 overflow-x-auto no-scrollbar px-4 pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              aria-label={`${t.gallery.view}: ${img.alt}`}
              className="relative shrink-0 w-[84%] rounded-2xl overflow-hidden border border-[#e5e5e5] bg-[#e9e9e6] text-left"
            >
              <EduImage photo={galleryPhotos[i]} className="aspect-[4/3] w-full" fallback={galleryPhotos[i].fallback} />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent pt-10 pb-3.5 px-4 flex items-end justify-between gap-2">
                <span className="text-white text-[13px] font-bold leading-snug">{img.caption}</span>
                <Expand size={15} className="text-white/80 shrink-0" aria-hidden />
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1 mt-4" role="tablist" aria-label="Gallery pages">
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={page === i}
              aria-label={`${i + 1}`}
              onClick={() => scrollTo(i)}
              className="w-8 h-8 grid place-items-center"
            >
              <span className={cn('h-1.5 rounded-full transition-all', page === i ? 'w-6 bg-[#111]' : 'w-1.5 bg-[#dadada]')} />
            </button>
          ))}
        </div>
      </Reveal>

      {/* desktop: editorial masonry */}
      <div className="wrap hidden md:block mt-8">
        <div className="columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {images.map((img, i) => (
            <Reveal key={i} className="break-inside-avoid">
              <button
                onClick={() => setLightbox(i)}
                aria-label={`${t.gallery.view}: ${img.alt}`}
                className="zoom-hover group relative block w-full rounded-2xl overflow-hidden border border-[#e5e5e5] bg-[#e9e9e6] text-left"
              >
                <EduImage
                  photo={galleryPhotos[i]}
                  className={cn('w-full', i % 3 === 0 ? 'aspect-[4/3]' : i % 3 === 1 ? 'aspect-[3/3.4]' : 'aspect-[16/10]')}
                  fallback={galleryPhotos[i].fallback}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent pt-12 pb-4 px-5">
                  <span className="text-white text-[14px] font-bold">{img.caption}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={(i) => setLightbox(i)}
        labels={{ close: t.gallery.close, prev: t.gallery.prev, next: t.gallery.next }}
      />
    </section>
  );
}
