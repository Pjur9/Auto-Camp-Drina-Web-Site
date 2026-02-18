import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
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
const SEOHandler = () => {
  const { lang } = useParams();
  const { pathname } = useLocation();
  const { i18n: i18nInstance } = useTranslation();
  
  const pathSegments = pathname.split('/').filter(Boolean);
  const activePage = pathSegments[1] || 'home'; 
  
  const currentLang = lang || i18nInstance.language || 'en';
  
  const fixedT = i18nInstance.getFixedT(currentLang);
  const title = fixedT(`seo.${activePage}.title`);
  const description = fixedT(`seo.${activePage}.description`);
  const canonicalUrl = `https://autocampdrina.com/${currentLang}/${activePage === 'home' ? '' : activePage}`;

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
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

const PageLayout = ({ children, openBooking }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
      <SEOHandler />
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
          <Route path="/" element={<Navigate to="/en" replace />} />

          <Route path="/:lang" element={
            <PageLayout openBooking={openBooking}>
              <HomePage openBooking={openBooking} openDetails={openDetails} />
            </PageLayout>
          } />

          <Route path="/:lang/rafting" element={
            <PageLayout openBooking={openBooking}>
              <RaftingPage openBooking={openBooking} openDetails={openDetails} />
            </PageLayout>
          } />

          <Route path="/:lang/hiking" element={
            <PageLayout openBooking={openBooking}>
              <HikingPage openBooking={openBooking} openQuestion={openQuestion} />
            </PageLayout>
          } />

          <Route path="/:lang/camping" element={
            <PageLayout openBooking={openBooking}>
              <CampingPage openBooking={openBooking} />
            </PageLayout>
          } />

          <Route path="/:lang/multiday" element={
            <PageLayout openBooking={openBooking}>
              <MultiDayPage openBooking={openBooking} openQuestion={openQuestion} />
            </PageLayout>
          } />

          <Route path="/:lang/aboutus" element={
            <PageLayout openBooking={openBooking}>
              <AboutUsPage openBooking={openBooking} />
            </PageLayout>
          } />

          <Route path="/:lang/bikerhub" element={
            <PageLayout openBooking={openBooking}>
              <BikerHubPage openBooking={openBooking} />
            </PageLayout>
          } />

          <Route path="/:lang/faq" element={
            <PageLayout openBooking={openBooking}>
              <FAQPage openBooking={openBooking} openQuestion={() => setQuestionModalOpen(true)} />
            </PageLayout>
          } />

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