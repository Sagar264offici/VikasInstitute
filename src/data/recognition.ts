/**
 * Recognition / certifications awarded to the institute.
 *
 * NOTE: The shared Canva link requires sign-in, so its contents could
 * not be read automatically. Please share the certificate titles
 * (and images, if any) and they will be listed here.
 *
 * To add an entry:
 *   { titleEn, titleHi, issuerEn, issuerHi, year }
 * Place certificate images in `public/gallery/` and set `image`.
 * The Recognition section stays hidden while this list is empty —
 * nothing unverified is ever published.
 */

export interface Recognition {
  titleEn: string;
  titleHi: string;
  issuerEn: string;
  issuerHi: string;
  year?: string;
  image?: string;
}

export const recognitions: Recognition[] = [];
