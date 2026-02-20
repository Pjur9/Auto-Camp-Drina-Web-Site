import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SITE_DATA } from '../entities/general/model/site-data';

import { Navbar } from '../widgets/layout/Navbar';
import { Footer } from '../widgets/layout/Footer';
import { BookingModal } from '../features/booking/BookingModal';
import { PackageDetailsModal } from '../features/package-details/PackageDetailsModal';
import { QuestionModal } from '../features/question/QuestionModal';

const HomePage = lazy(() => import('../pages/home/HomePage'));
const RaftingPage = lazy(() => import('../pages/rafting/RaftingPage'));
const HikingPage = lazy(() => import('../pages/hiking/HikingPage'));
const CampingPage = lazy(() => import('../pages/camping/CampingPage'));
const MultiDayPage = lazy(() => import('../pages/multiple-day/MultiDayPage'));
const AboutUsPage = lazy(() => import('../pages/about-us/AboutUsPage'));
const BikerHubPage = lazy(() => import('../pages/bikers/BikerHubPage'));
const FAQPage = lazy(() => import('../pages/faq/FAQPage'));


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LoadingSpinner = () => (
  <div className="h-screen flex items-center justify-center bg-[#f9fafb]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-secondary"></div>
  </div>
);

// --- SEO Handler ---
// Sada prima lang i pageKey eksplicitno, kako bi tačno znao šta da izvuče iz i18n JSON-a
const SEOHandler = ({ lang, pageKey }) => {
  const { pathname } = useLocation();
  // Koristimo t direktno iz hook-a umjesto getFixedT za bolju reaktivnost
  const { t, i18n } = useTranslation();
  
  const currentLang = lang || i18n.language || 'en';
  
  // Izvlačimo prevod direktno naglašavajući jezik
  const title = t(`seo.${pageKey}.title`, { lng: currentLang });
  const description = t(`seo.${pageKey}.description`, { lng: currentLang });

  const baseUrl = 'https://autocampdrina.com';
  const purePath = pathname.replace(/^\/(en|de|sr)/, '') || '';
  
  // Canonical URL tačno mapira na trenutni path
  const canonicalUrl = `https://autocampdrina.com${pathname === '/' ? `/${currentLang}` : pathname}`;

  useEffect(() => {
    if (currentLang) {
      document.documentElement.setAttribute('lang', currentLang);
    }
  }, [currentLang]);

  // OVO JE TRIK: Brutalno tjeramo browser da promijeni naslov 
  // čim se promijeni 'title' varijabla (rješava lokalni bug)
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hreflang="sr" href={`${baseUrl}/sr${purePath}`} />
      <link rel="alternate" hreflang="en" href={`${baseUrl}/en${purePath}`} />
      <link rel="alternate" hreflang="de" href={`${baseUrl}/de${purePath}`} />
      <link rel="alternate" hreflang="x-default" href={`${baseUrl}/en${purePath}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Campground",
          "name": "Auto Camp Drina",
          "description": description,
          "address": { "@type": "PostalAddress", "addressLocality": "Foča", "addressCountry": "BA" },
          "telephone": SITE_DATA.general.phone,
          "url": "https://autocampdrina.com"
        })}
      </script>
    </Helmet>
  );
};

// --- Page Layout ---
const PageLayout = ({ children, openBooking, lang, pageKey }) => {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Sinkronizacija i18next jezika sa onim što je u URL-u
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-secondary selection:text-white relative bg-[#f9fafb]">
      <SEOHandler lang={lang} pageKey={pageKey} />
      <Navbar isScrolled={isScrolled} openBooking={openBooking} />
      <main className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [detailsPackage, setDetailsPackage] = useState(null);
  const [questionModalOpen, setQuestionModalOpen] = useState(false);

  const openBooking = (pkgName = null) => {
    setSelectedPackage(pkgName);
    setBookingModalOpen(true);
  };

  const openDetails = (pkg) => {
    setDetailsPackage(pkg);
    setDetailsModalOpen(true);
  };

  const openQuestion = () => setQuestionModalOpen(true);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Default redirekcija sa root domena na engleski jezik */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* ======================= */}
          {/* --- ENGLESKI JEZIK  --- */}
          {/* ======================= */}
          <Route path="/en">
            <Route index element={<PageLayout lang="en" pageKey="home" openBooking={openBooking}><HomePage lang="en" openBooking={openBooking} openDetails={openDetails} /></PageLayout>} />
            <Route path="rafting" element={<PageLayout lang="en" pageKey="rafting" openBooking={openBooking}><RaftingPage lang="en" openBooking={openBooking} openDetails={openDetails} /></PageLayout>} />
            <Route path="hiking" element={<PageLayout lang="en" pageKey="hiking" openBooking={openBooking}><HikingPage  lang="en" openBooking={openBooking} openQuestion={openQuestion} /></PageLayout>} />
            <Route path="camping" element={<PageLayout lang="en" pageKey="camping" openBooking={openBooking}><CampingPage  openBooking={openBooking} /></PageLayout>} />
            <Route path="multiday" element={<PageLayout lang="en" pageKey="multiday" openBooking={openBooking}><MultiDayPage openBooking={openBooking} openQuestion={openQuestion} /></PageLayout>} />
            <Route path="aboutus" element={<PageLayout lang="en" pageKey="aboutus" openBooking={openBooking}><AboutUsPage lang="en" openBooking={openBooking} /></PageLayout>} />
            <Route path="bikerhub" element={<PageLayout lang="en" pageKey="bikerhub" openBooking={openBooking}><BikerHubPage openBooking={openBooking} /></PageLayout>} />
            <Route path="faq" element={<PageLayout lang="en" pageKey="faq" openBooking={openBooking}><FAQPage openBooking={openBooking} openQuestion={openQuestion} /></PageLayout>} />
          </Route>

          {/* ======================= */}
          {/* --- SRPSKI JEZIK    --- */}
          {/* ======================= */}
          <Route path="/sr">
            <Route index element={<PageLayout lang="sr" pageKey="home" openBooking={openBooking}><HomePage lang="sr" openBooking={openBooking} openDetails={openDetails} /></PageLayout>} />
            <Route path="rafting" element={<PageLayout lang="sr" pageKey="rafting" openBooking={openBooking}><RaftingPage lang="sr" openBooking={openBooking} openDetails={openDetails} /></PageLayout>} />
            <Route path="planinarenje" element={<PageLayout lang="sr" pageKey="hiking" openBooking={openBooking}><HikingPage lang="sr" openBooking={openBooking} openQuestion={openQuestion} /></PageLayout>} />
            <Route path="kampovanje" element={<PageLayout lang="sr" pageKey="camping" openBooking={openBooking}><CampingPage  openBooking={openBooking} /></PageLayout>} />
            <Route path="visednevni" element={<PageLayout lang="sr" pageKey="multiday" openBooking={openBooking}><MultiDayPage openBooking={openBooking} openQuestion={openQuestion} /></PageLayout>} />
            <Route path="o-nama" element={<PageLayout lang="sr" pageKey="aboutus" openBooking={openBooking}><AboutUsPage lang="sr" openBooking={openBooking} /></PageLayout>} />
            <Route path="motociklisti" element={<PageLayout lang="sr" pageKey="bikerhub" openBooking={openBooking}><BikerHubPage openBooking={openBooking} /></PageLayout>} />
            <Route path="faq" element={<PageLayout lang="sr" pageKey="faq" openBooking={openBooking}><FAQPage openBooking={openBooking} openQuestion={openQuestion} /></PageLayout>} />
          </Route>

          {/* ======================= */}
          {/* --- NJEMAČKI JEZIK  --- */}
          {/* ======================= */}
          <Route path="/de">
            <Route index element={<PageLayout lang="de" pageKey="home" openBooking={openBooking}><HomePage lang="de" openBooking={openBooking} openDetails={openDetails} /></PageLayout>} />
            <Route path="rafting" element={<PageLayout lang="de" pageKey="rafting" openBooking={openBooking}><RaftingPage lang="de" openBooking={openBooking} openDetails={openDetails} /></PageLayout>} />
            <Route path="wandern" element={<PageLayout lang="de" pageKey="hiking" openBooking={openBooking}><HikingPage lang="de" openBooking={openBooking} openQuestion={openQuestion} /></PageLayout>} />
            <Route path="camping" element={<PageLayout lang="de" pageKey="camping" openBooking={openBooking}><CampingPage  openBooking={openBooking} /></PageLayout>} />
            <Route path="mehrtagestouren" element={<PageLayout lang="de" pageKey="multiday" openBooking={openBooking}><MultiDayPage openBooking={openBooking} openQuestion={openQuestion} /></PageLayout>} />
            <Route path="ueber-uns" element={<PageLayout lang="de" pageKey="aboutus" openBooking={openBooking}><AboutUsPage lang="de" openBooking={openBooking} /></PageLayout>} />
            <Route path="motorrad" element={<PageLayout lang="de" pageKey="bikerhub" openBooking={openBooking}><BikerHubPage openBooking={openBooking} /></PageLayout>} />
            <Route path="faq" element={<PageLayout lang="de" pageKey="faq" openBooking={openBooking}><FAQPage openBooking={openBooking} openQuestion={openQuestion} /></PageLayout>} />
          </Route>

          {/* Fallback ako se ukuca nepostojeća ruta */}
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>

        <BookingModal 
          isOpen={bookingModalOpen} 
          onClose={() => setBookingModalOpen(false)} 
          preselectedPackage={selectedPackage} 
        />
        <PackageDetailsModal 
          isOpen={detailsModalOpen} 
          onClose={() => setDetailsModalOpen(false)} 
          pkg={detailsPackage} 
        />
        <QuestionModal 
          isOpen={questionModalOpen} 
          onClose={() => setQuestionModalOpen(false)} 
        />
      </Router>
    </HelmetProvider>
  );
}

export default App;