import { useState } from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { galleryImages, posterFallback } from '../data/gallery';
import { Eyebrow, RevealText } from '../components/RevealText';
import Lightbox, { type GalleryImage } from '../components/Lightbox';

export default function GallerySection() {
  const { t, lang } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images: GalleryImage[] = galleryImages.map((g) => ({
    src: g.src,
    alt: lang === 'hi' ? g.altHi : g.alt,
    caption: lang === 'hi' ? g.captionHi : g.captionEn,
  }));
  const onImgError = (e: React.SyntheticEvent<HTMLImageElement>, i: number) => {
    const im = e.currentTarget;
    if (im.dataset.fb) return;
    im.dataset.fb = '1';
    const g = galleryImages[i];
    im.src = posterFallback(
      lang === 'hi' ? g.captionHi : g.captionEn,
      g.fallback.c1,
      g.fallback.c2,
      g.fallback.emoji
    );
  };

  return (
    <section id="gallery" aria-label="Gallery" className="relative bg-[#070b1a] py-24 sm:py-32 overflow-hidden scroll-mt-20">
      <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8">
        <Eyebrow>{t.gallery.eyebrow}</Eyebrow>
        <h2 className="display-mega text-[13vw] sm:text-[72px] lg:text-[96px] mt-4">
          <RevealText>INSIDE THE</RevealText>
          <RevealText delay={0.06}>
            <span className="text-stroke">CAMPUS.</span>
          </RevealText>
        </h2>
        <p className="text-white/50 mt-4 max-w-lg text-[15px]">{t.gallery.sub}</p>

        <div className="grid grid-cols-2 lg:grid-cols-12 grid-flow-dense gap-3 sm:gap-4 mt-10 auto-rows-[148px] sm:auto-rows-[220px]">
          {images.map((img, i) => {
            const span =
              i === 0
                ? 'col-span-1 lg:col-span-5 row-span-2'
                : i === 1
                  ? 'col-span-1 lg:col-span-4 row-span-1'
                  : i === 2
                    ? 'col-span-2 lg:col-span-7 row-span-1'
                    : 'col-span-1 lg:col-span-3 row-span-1';
            const rot = i % 2 === 0 ? 'lg:rotate-[-1deg]' : 'lg:rotate-[1deg]';
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 30, clipPath: 'inset(12% round 24px)' }}
                whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% round 24px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
                onClick={() => setLightbox(i)}
                data-cursor="VIEW"
                aria-label={`${t.gallery.view}: ${img.alt}`}
                className={`group relative overflow-hidden text-left border border-white/10 hover:border-white/30 transition ${span} ${rot} rounded-[24px]`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => onImgError(e, i)}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-transparent to-transparent" />
                <span className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-end justify-between gap-2">
                  <span className="text-white text-[12px] sm:text-[14px] font-bold leading-snug min-w-0 line-clamp-3">{img.caption}</span>
                  <span className="hidden sm:grid shrink-0 w-8 h-8 place-items-center rounded-full bg-white/15 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition">
                    <Expand size={15} />
                  </span>
                </span>
              </motion.button>
            );
          })}
          {/* typographic filler tile */}
          <div className="col-span-1 lg:col-span-4 row-span-1 rounded-[24px] bg-gradient-to-br from-[#ff7a00] to-[#ffb000] p-5 flex flex-col justify-between lg:rotate-[-1deg] overflow-hidden relative">
            <span className="font-mono text-[11px] font-bold tracking-widest text-black/60">RISHIKESH • 249204</span>
            <span className="font-display font-extrabold text-[24px] sm:text-[32px] leading-tight text-[#050816]">
              {lang === 'hi' ? (
                <>
                  आज सीखें,
                  <br />
                  कल नेतृत्व करें।
                </>
              ) : (
                <>
                  LEARN TODAY,
                  <br />
                  LEAD TOMORROW.
                </>
              )}
            </span>
          </div>
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
