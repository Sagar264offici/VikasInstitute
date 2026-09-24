/**
 * Central image registry.
 *
 * HOW TO USE LICENSED / LOCAL IMAGES:
 * 1. Drop the institute's own photos into `public/gallery/`
 *    (e.g. `public/gallery/classroom-1.jpg`).
 * 2. Replace the `src` value below with the local path
 *    (e.g. `/gallery/classroom-1.jpg`). Nothing else changes —
 *    alt text, aspect ratios and fallbacks keep working.
 *
 * Until then, `src` points at stable Unsplash CDN photos of real
 * classrooms, labs and technology (verified HTTP 200). If a remote
 * photo ever fails, `EduImage` swaps in a local branded SVG fallback,
 * so the layout never breaks.
 */

export interface Photo {
  src: string;
  alt: string;
  altHi: string;
}

const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const photos = {
  hero: {
    src: u('photo-1531482615713-2afd69097998', 1400),
    alt: 'Students attending a practical computer training session on laptops',
    altHi: 'लैपटॉप पर व्यावहारिक कंप्यूटर प्रशिक्षण में भाग लेते विद्यार्थी',
  } as Photo,
  about: {
    src: u('photo-1522202176988-66273c2fd55f', 1200),
    alt: 'Students learning together with an instructor in a computer classroom',
    altHi: 'कंप्यूटर कक्षा में प्रशिक्षक के साथ मिलकर सीखते विद्यार्थी',
  } as Photo,
  practical: {
    src: u('photo-1551434678-e076c223a692', 1200),
    alt: 'Learners practising on computers in a modern lab',
    altHi: 'आधुनिक प्रयोगशाला में कंप्यूटर पर अभ्यास करते विद्यार्थी',
  } as Photo,
  learnToday: {
    src: u('photo-1509062522246-3755977927d7', 1600),
    alt: 'Instructor teaching students inside a bright classroom',
    altHi: 'उज्ज्वल कक्षा में विद्यार्थियों को पढ़ाते शिक्षक',
  } as Photo,
  ai: {
    src: u('photo-1620712943543-bcc4688e7485', 1200),
    alt: 'A robotic hand representing modern artificial intelligence technology',
    altHi: 'आधुनिक कृत्रिम बुद्धिमत्ता प्रौद्योगिकी का प्रतीक रोबोटिक हाथ',
  } as Photo,
};

export interface GalleryPhoto extends Photo {
  captionEn: string;
  captionHi: string;
  fallback: { c1: string; c2: string; emoji: string };
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: u('photo-1517245386807-bb43f82c33c4', 900),
    alt: 'Vikas IT Institute computer lab and training room',
    altHi: 'Vikas IT Institute की कंप्यूटर प्रयोगशाला एवं प्रशिक्षण कक्ष',
    captionEn: 'Computer lab & course offerings',
    captionHi: 'कंप्यूटर प्रयोगशाला एवं उपलब्ध पाठ्यक्रम',
    fallback: { c1: '#17324d', c2: '#2b2b2b', emoji: '💻' },
  },
  {
    src: u('photo-1580582932707-520aed937b7b', 900),
    alt: 'Faculty guiding a student in the classroom',
    altHi: 'विद्यार्थी को मार्गदर्शन देते शिक्षक',
    captionEn: 'Trainer guidance & mentoring',
    captionHi: 'प्रशिक्षक का मार्गदर्शन एवं प्रशिक्षण',
    fallback: { c1: '#17324d', c2: '#0f2438', emoji: '👩‍🏫' },
  },
  {
    src: u('photo-1516321318423-f06f85e504b3', 900),
    alt: 'Student practising on a laptop with a notebook',
    altHi: 'नोटबुक के साथ लैपटॉप पर अभ्यास करता विद्यार्थी',
    captionEn: 'Hands-on practice sessions',
    captionHi: 'व्यावहारिक अभ्यास सत्र',
    fallback: { c1: '#2b2b2b', c2: '#111111', emoji: '🎓' },
  },
  {
    src: u('photo-1573164713988-8665fc963095', 900),
    alt: 'Learner working at a computer screen',
    altHi: 'कंप्यूटर स्क्रीन पर कार्य करता विद्यार्थी',
    captionEn: 'Digital skills in progress',
    captionHi: 'डिजिटल कौशल का अभ्यास',
    fallback: { c1: '#17324d', c2: '#2b2b2b', emoji: '🖥️' },
  },
  {
    src: u('photo-1555066931-4365d14bab8c', 900),
    alt: 'Programming code on a computer screen',
    altHi: 'कंप्यूटर स्क्रीन पर प्रोग्रामिंग कोड',
    captionEn: 'Programming & code practice',
    captionHi: 'प्रोग्रामिंग एवं कोड अभ्यास',
    fallback: { c1: '#111111', c2: '#2b2b2b', emoji: '⌨️' },
  },
  {
    src: u('photo-1593642632823-8f785ba67e45', 900),
    alt: 'Modern computer workspace for design learning',
    altHi: 'डिज़ाइन अध्ययन हेतु आधुनिक कंप्यूटर कार्यस्थल',
    captionEn: 'Design & web creativity',
    captionHi: 'डिज़ाइन एवं वेब रचनात्मकता',
    fallback: { c1: '#17324d', c2: '#111111', emoji: '🎨' },
  },
];

/** Offline-safe branded poster used when any photo fails to load. */
export function posterFallback(title: string, c1: string, c2: string, emoji: string): string {
  const safe = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').slice(0, 48);
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>` +
    `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>` +
    `<stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/>` +
    `</linearGradient></defs><rect width='800' height='600' fill='url(#g)'/>` +
    `<g fill='rgba(255,255,255,0.12)'><rect x='80' y='110' width='640' height='34' rx='10'/>` +
    `<rect x='80' y='158' width='460' height='20' rx='8'/></g>` +
    `<text x='400' y='310' font-size='110' text-anchor='middle'>${emoji}</text>` +
    `<text x='400' y='540' font-size='30' font-family='sans-serif' font-weight='bold' fill='white' text-anchor='middle'>${safe}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
