/**
 * Recognition / certifications of the institute.
 *
 * Displayed in the Recognition section on the home and about pages.
 * Badge artwork lives in `public/recognition/` — replace any file
 * with the official artwork (same filename) to upgrade fidelity.
 */

export interface Recognition {
  titleEn: string;
  titleHi: string;
  issuerEn: string;
  issuerHi: string;
  year?: string;
  image?: string;
}

export const recognitions: Recognition[] = [
  {
    titleEn: 'ISO Certified Company',
    titleHi: 'ISO प्रमाणित कंपनी',
    issuerEn: 'International quality certification',
    issuerHi: 'अंतरराष्ट्रीय गुणवत्ता प्रमाणन',
    image: '/recognition/iso-certified.svg',
  },
  {
    titleEn: 'Startup India',
    titleHi: 'स्टार्टअप इंडिया',
    issuerEn: 'Government of India initiative',
    issuerHi: 'भारत सरकार की पहल',
    image: '/recognition/startup-india.svg',
  },
  {
    titleEn: 'NITI Aayog',
    titleHi: 'नीति आयोग',
    issuerEn: 'Government of India',
    issuerHi: 'भारत सरकार',
    image: '/recognition/niti-aayog.svg',
  },
  {
    titleEn: 'CSC — Digital India',
    titleHi: 'CSC — डिजिटल इंडिया',
    issuerEn: 'Common Services Centers · Power to Empower',
    issuerHi: 'कॉमन सर्विस सेंटर · Power to Empower',
    image: '/recognition/csc-digital-india.svg',
  },
];
