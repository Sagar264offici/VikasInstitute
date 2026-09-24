export interface GalleryEntry {
  src: string;
  alt: string;
  altHi: string;
  captionEn: string;
  captionHi: string;
  span?: string;
}

export const galleryImages: GalleryEntry[] = [
  {
    src: '/gallery/poster-1.jpg',
    alt: 'Vikas IT Institute computer lab and course list poster',
    altHi: 'Vikas IT Institute की कंप्यूटर प्रयोगशाला एवं पाठ्यक्रम सूची का पोस्टर',
    captionEn: 'Computer lab & course offerings',
    captionHi: 'कंप्यूटर प्रयोगशाला एवं उपलब्ध पाठ्यक्रम',
    span: 'tall',
  },
  {
    src: '/gallery/poster-2.jpg',
    alt: 'Faculty guiding a student',
    altHi: 'विद्यार्थी को मार्गदर्शन देते शिक्षक',
    captionEn: 'Trainer guidance & mentoring',
    captionHi: 'प्रशिक्षक का मार्गदर्शन एवं प्रशिक्षण',
    span: 'std',
  },
  {
    src: '/gallery/poster-3.jpg',
    alt: 'Admissions open education-wise courses poster',
    altHi: 'प्रवेश प्रारंभ — शैक्षणिक पाठ्यक्रमों का पोस्टर',
    captionEn: 'Admissions open — education-wise courses',
    captionHi: 'प्रवेश प्रारंभ — विभिन्न शैक्षणिक पाठ्यक्रम',
    span: 'wide',
  },
  {
    src: '/gallery/poster-4.jpg',
    alt: 'Build skills build your future poster',
    altHi: 'कौशल विकसित करें, अपना भविष्य सँवारें — पोस्टर',
    captionEn: 'Vikas IT Institute — A Step Towards Bright Future',
    captionHi: 'Vikas IT Institute — उज्ज्वल भविष्य की ओर एक कदम',
    span: 'std',
  },
];
