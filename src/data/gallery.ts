export interface GalleryEntry {
  src: string;
  alt: string;
  altHi: string;
  captionEn: string;
  captionHi: string;
  span?: string;
  /** fallback art palette used when the photo file is missing */
  fallback: { c1: string; c2: string; emoji: string };
}

export const galleryImages: GalleryEntry[] = [
  {
    src: '/gallery/poster-1.jpg',
    alt: 'Vikas IT Institute computer lab and course list poster',
    altHi: 'Vikas IT Institute की कंप्यूटर प्रयोगशाला एवं पाठ्यक्रम सूची का पोस्टर',
    captionEn: 'Computer lab & course offerings',
    captionHi: 'कंप्यूटर प्रयोगशाला एवं उपलब्ध पाठ्यक्रम',
    span: 'tall',
    fallback: { c1: '#0a1a5c', c2: '#2f7bff', emoji: '💻' },
  },
  {
    src: '/gallery/poster-2.jpg',
    alt: 'Faculty guiding a student',
    altHi: 'विद्यार्थी को मार्गदर्शन देते शिक्षक',
    captionEn: 'Trainer guidance & mentoring',
    captionHi: 'प्रशिक्षक का मार्गदर्शन एवं प्रशिक्षण',
    span: 'std',
    fallback: { c1: '#1a33a3', c2: '#00a8ff', emoji: '👩‍🏫' },
  },
  {
    src: '/gallery/poster-3.jpg',
    alt: 'Admissions open education-wise courses poster',
    altHi: 'प्रवेश प्रारंभ — शैक्षणिक पाठ्यक्रमों का पोस्टर',
    captionEn: 'Admissions open — education-wise courses',
    captionHi: 'प्रवेश प्रारंभ — विभिन्न शैक्षणिक पाठ्यक्रम',
    span: 'wide',
    fallback: { c1: '#0a1a5c', c2: '#1a33a3', emoji: '🎓' },
  },
  {
    src: '/gallery/poster-4.jpg',
    alt: 'Build skills build your future poster',
    altHi: 'कौशल विकसित करें, अपना भविष्य सँवारें — पोस्टर',
    captionEn: 'Vikas IT Institute — A Step Towards Bright Future',
    captionHi: 'Vikas IT Institute — उज्ज्वल भविष्य की ओर एक कदम',
    span: 'std',
    fallback: { c1: '#0a1a5c', c2: '#ff7a00', emoji: '🚀' },
  },
];

/** Offline-safe branded poster used when a gallery photo file is missing. */
export function posterFallback(title: string, c1: string, c2: string, emoji: string): string {
  const safe = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').slice(0, 48);
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>` +
    `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>` +
    `<stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/>` +
    `</linearGradient></defs><rect width='800' height='600' fill='url(#g)'/>` +
    `<g fill='rgba(255,255,255,0.14)'><rect x='80' y='110' width='640' height='34' rx='10'/>` +
    `<rect x='80' y='158' width='460' height='20' rx='8'/>` +
    `<rect x='80' y='400' width='190' height='110' rx='16'/>` +
    `<rect x='305' y='400' width='190' height='110' rx='16'/>` +
    `<rect x='530' y='400' width='190' height='110' rx='16'/></g>` +
    `<text x='400' y='300' font-size='110' text-anchor='middle'>${emoji}</text>` +
    `<text x='400' y='560' font-size='30' font-family='sans-serif' font-weight='bold' fill='white' text-anchor='middle'>${safe}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
