import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

// Route-level code splitting for secondary pages. HomePage stays in the
// entry graph on purpose: it is the landing page, and keeping it eager
// avoids an extra request waterfall before first paint on phones.
import HomePage from './pages/HomePage';
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Retry briefly: with code-split routes the anchor may not be in the
    // DOM yet on a cold load. Also guard against invalid selectors.
    let tries = 0;
    let timer: number | undefined;
    const attempt = () => {
      let el: Element | null = null;
      try {
        el = document.querySelector(hash);
      } catch {
        el = null;
      }
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (++tries < 40) timer = window.setTimeout(attempt, 50);
    };
    timer = window.setTimeout(attempt, 80);
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [pathname, hash]);
  return null;
}

function Shell() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f5] text-[#111]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:m-2 focus:border focus:border-[#111]"
      >
        {lang === 'hi' ? 'सामग्री पर जाएँ' : 'Skip to content'}
      </a>
      <ScrollProgress />
      <ScrollManager />
      <Navbar />
      <div id="main" className="flex-1">
        <Suspense
          fallback={
            <div className="min-h-[60vh] grid place-items-center" role="status">
              <span className="text-[13px] font-semibold text-[#6b6b6b]">
                {lang === 'hi' ? 'लोड हो रहा है…' : 'Loading…'}
              </span>
            </div>
          }
        >
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/course/:slug" element={<CourseDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Shell />
      </LanguageProvider>
    </BrowserRouter>
  );
}
