import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = "G-VK15CHMRKT"; 

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // 1. Provjeravamo da li se kod izvršava u pravom browseru
    const isBrowser = typeof window !== 'undefined';
    
    // 2. Detektujemo Puppeteer bota tokom Netlify builda
    const isBot = navigator.userAgent 
      ? /HeadlessChrome|Puppeteer/i.test(navigator.userAgent) 
      : false;

    // Ako smo u browseru i nije bot, šaljemo podatke Google-u
    if (isBrowser && !isBot) {
      // Inicijalizujemo GA samo jednom
      if (!window.GA_INITIALIZED) {
        ReactGA.initialize(MEASUREMENT_ID);
        window.GA_INITIALIZED = true;
      }
      
      // Šaljemo pageview svaki put kada se promijeni ruta (location)
      ReactGA.send({ 
        hitType: "pageview", 
        page: location.pathname + location.search 
      });
    }
  }, [location]);

  // Komponenta ne crta ništa na ekranu
  return null; 
}