import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export default function Lightbox({
  images, index, onClose, onNavigate, labels,
}: {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
  labels: { close: string; prev: string; next: string };
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, images.length, onClose, onNavigate]);

  if (index === null || !images[index]) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/85 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={images[index].alt}
      onClick={onClose}
    >
      <button onClick={onClose} aria-label={labels.close} className="absolute top-4 right-4 w-11 h-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
        <X size={20} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + images.length) % images.length); }}
        aria-label={labels.prev}
        className="absolute left-3 sm:left-6 w-11 h-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <ChevronLeft size={22} />
      </button>
      <figure className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="aspect-[16/10] overflow-hidden bg-[#ececea]">
          <img src={images[index].src} alt={images[index].alt} className="w-full h-full object-cover" />
        </div>
        <figcaption className="px-6 py-4 text-[14.5px] font-semibold text-[#111]">{images[index].caption}</figcaption>
      </figure>
      <button
        onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % images.length); }}
        aria-label={labels.next}
        className="absolute right-3 sm:right-6 w-11 h-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
