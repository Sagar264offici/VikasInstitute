import { useState } from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import Lightbox, { type GalleryImage } from '../components/Lightbox';

function svgScene(title: string, c1: string, c2: string, emoji: string): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/><g fill='rgba(255,255,255,0.16)'><rect x='80' y='120' width='640' height='36' rx='10'/><rect x='80' y='170' width='480' height='20' rx='8'/><rect x='80' y='380' width='200' height='120' rx='16'/><rect x='300' y='380' width='200' height='120' rx='16'/><rect x='520' y='380' width='200' height='120' rx='16'/></g><text x='400' y='300' font-size='110' text-anchor='middle'>${emoji}</text><text x='400' y='560' font-size='34' font-family='sans-serif' font-weight='bold' fill='white' text-anchor='middle'>${title}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const PLACEHOLDERS = [
  { title: 'Computer Lab', c1: '#0a1a5c', c2: '#2f7bff', emoji: '💻' },
  { title: 'Guidance', c1: '#1a33a3', c2: '#5b9bff', emoji: '👩‍🏫' },
  { title: 'Admissions Open', c1: '#0a1a5c', c2: '#1a33a3', emoji: '🎓' },
  { title: 'Vikas IT', c1: '#0a1a5c', c2: '#ff8a1e', emoji: '🎓' },
];

function GalleryThumb({ src, alt, onFail }: { src: string; alt: string; onFail: () => void }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      onError={onFail}
    />
  );
}

export default function GallerySection() {
  const { t, lang } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  // Official institute posters (drop files into public/gallery/ — see README).
  // Each entry tries the real photo first, falls back to a branded placeholder.
  const images: GalleryImage[] = [
    { src: '/gallery/poster-1.jpg', alt: 'Vikas IT Institute computer lab and course list poster', caption: lang === 'hi' ? 'कंप्यूटर लैब व पाठ्यक्रम' : 'Computer lab & course offerings' },
    { src: '/gallery/poster-2.jpg', alt: 'Faculty guiding a student', caption: lang === 'hi' ? 'प्रशिक्षक मार्गदर्शन' : 'Trainer guidance & mentoring' },
    { src: '/gallery/poster-3.jpg', alt: 'Admissions open education-wise courses poster', caption: lang === 'hi' ? 'प्रवेश खुले हैं' : 'Admissions open — education-wise courses' },
    { src: '/gallery/poster-4.jpg', alt: 'Build skills build your future poster', caption: 'Vikas IT Institute — ' + (lang === 'hi' ? 'उज्ज्वल भविष्य की ओर' : 'A Step Towards Bright Future') },
    { src: svgScene('Coding', '#060f38', '#1a33a3', '⌨️'), alt: 'Programming practice', caption: lang === 'hi' ? 'कोडिंग अभ्यास' : 'Programming & code practice' },
    { src: svgScene('Web Design', '#ff7a1a', '#ffb020', '🎨'), alt: 'Design learning', caption: lang === 'hi' ? 'डिज़ाइन लर्निंग' : 'Design & web creativity' },
  ];
  const resolved: GalleryImage[] = images.map((img, i) =>
    img.src.startsWith('/gallery/') && failed[i]
      ? { ...img, src: svgScene(PLACEHOLDERS[i].title, PLACEHOLDERS[i].c1, PLACEHOLDERS[i].c2, PLACEHOLDERS[i].emoji) }
      : img
  );

  return (
    <section id="gallery" aria-label="Gallery" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} sub={t.gallery.sub} />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 mt-10">
        {resolved.map((img, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
            onClick={() => setLightbox(i)}
            aria-label={`${t.gallery.view}: ${img.alt}`}
            className="group relative rounded-[20px] overflow-hidden bg-slate-100 aspect-[4/3] text-left focus-visible:outline-none"
          >
            <GalleryThumb
              src={img.src}
              alt={img.alt}
              onFail={() => setFailed((p) => (p[i] ? p : { ...p, [i]: true }))}
            />
            <span className="absolute inset-0 bg-gradient-to-t from-[#060f38]/75 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 flex items-end justify-between gap-2">
              <span className="text-white text-[12.5px] sm:text-[13.5px] font-bold leading-snug">{img.caption}</span>
              <span className="shrink-0 w-8 h-8 grid place-items-center rounded-full bg-white/20 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition">
                <Expand size={15} />
              </span>
            </span>
          </motion.button>
        ))}
      </div>
      <Lightbox
        images={resolved}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={(i) => setLightbox(i)}
        labels={{ close: t.gallery.close, prev: t.gallery.prev, next: t.gallery.next }}
      />
    </section>
  );
}
