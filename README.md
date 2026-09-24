# Vikas IT Institute — Official Website

**VIKAS IT INSTITUTE — A Step Towards Bright Future**

Premium, bilingual (English / Hindi) official website for Vikas IT Institute,
Mannat Complex, Khadri Road, Shyampur, Rishikesh — 249204.

- Computer courses, programming, web development & digital skills
- Practical, hands-on training focus
- No fabricated stats, fees, placements or testimonials

## Tech

React 19 + TypeScript (strict) + Vite + React Router + Tailwind CSS 4 +
Framer Motion + Lenis smooth scroll + Lucide icons.

## Run

```bash
npm install
npm run dev      # local dev
npm run build    # typecheck + production build (dist/)
npm run preview  # preview dist/
npm run lint     # oxlint
```

## Structure

```
src/
  components/  Navbar, Footer, CourseCard/Grid, Faq, CTA,
               ContactSection, EnquiryForm, Lightbox, Reveal, …
  sections/    Hero, TrustBar, AboutSection, WhyChooseUs,
               PracticalTraining, TechStack, AISection,
               FacultySection, GallerySection, TestimonialPlaceholder
  pages/       Home, Courses, About, Contact, CourseDetail, NotFound
  data/        courses.ts, translations.ts, contact.ts (FAQ included)
  context/     LanguageContext.tsx (EN | हिंदी)
  hooks/       useLenis.ts
  lib/         utils.ts
public/
  gallery/     official posters → poster-1..4.jpg (see README inside)
  robots.txt, sitemap.xml, favicon.svg, og-cover.svg
```

## Gallery images

Drop the 4 official posters into `public/gallery/` as
`poster-1.jpg` … `poster-4.jpg`. The gallery auto-uses them when present
and shows branded placeholders otherwise — no code change needed.

## Contact

- +91 8679398235
- Mannat Complex, Khadri Road, Shyampur, Rishikesh, Dehradun – 249204
- WhatsApp CTA + Get Directions wired in Contact section

## Notes

- Enquiry form is frontend-only (loading / success / error states);
  connect `/api/enquire` later — payload shape is in `EnquiryForm.tsx`.
- Canonical / sitemap URLs use `https://vikasitinstitute.example.com/` —
  replace with the real domain at deploy time.
- Testimonials section is an honest placeholder until real reviews arrive.
