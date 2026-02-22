import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router-dom'; 
import { 
  Waves, Instagram, Facebook, Phone, Mail, MapPin, 
  ExternalLink, X, BadgeCheck 
} from 'lucide-react';
import { SITE_DATA } from '../../entities/general/model/site-data';
import { Modal } from '../../shared/ui/Modal';

// Mapa svih naših lokalizovanih URL-ova
import { ROUTE_MAP } from '../../shared/config/routes';

// Pomoćna funkcija koja prepoznaje "ključ" stranice na osnovu URL-a
const getCurrentPageKey = (pathname) => {
  if (pathname === '/en' || pathname === '/sr' || pathname === '/de' || pathname === '/') return 'home';
  for (const [key, paths] of Object.entries(ROUTE_MAP)) {
    if (Object.values(paths).includes(pathname)) return key;
  }
  return 'home';
};

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172935.53986968038!2d18.78243169632078!3d43.52932904551514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f10.1!3m3!1m2!1s0x47588699d986a259%3A0xdd76035a7578cabc!2z0JDRg9GC0L4g0LrQsNC80L8g0JTRgNC40L3QsA!5e1!3m2!1ssr!2srs!4v1764768923132!5m2!1ssr!2srs";
const MAP_EXTERNAL_URL = "https://maps.app.goo.gl/ge6rfzNqGmDEAAaH8";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const { lang } = useParams();

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  // Određujemo tačan jezik i ključ trenutne stranice
  const currentLang = lang || i18n.language || 'en';
  const currentPageKey = getCurrentPageKey(pathname);
  const isBikerPage = currentPageKey === 'bikerhub';

  const themeBg = isBikerPage ? 'bg-[#1c1917]' : 'bg-primary-dark';
  const themeAccentText = isBikerPage ? 'text-accent' : 'text-secondary';
  const themeBorder = isBikerPage ? 'border-stone-800' : 'border-gray-800';
  const themeHighlight = isBikerPage ? 'hover:border-accent' : 'hover:border-secondary';

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <footer className={`relative ${themeBg} text-white pt-16 pb-8 border-t z-20 ${themeBorder} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12 mb-12 text-center lg:text-left">
        
        <div className="col-span-1 flex flex-col items-center lg:items-start">
          <Link 
            to={ROUTE_MAP['home'][currentLang]}
            onClick={() => { if (currentPageKey === 'home') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-2xl font-bold font-['Montserrat'] mb-4 flex items-center gap-2 cursor-pointer" 
          >
            <Waves className={themeAccentText} /> AC DRINA
          </Link>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {t('footer.description')}
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <SocialIcon href="https://www.instagram.com/drinacamp/" icon={Instagram} label="Instagram" isBiker={isBikerPage} />
            <SocialIcon href="https://www.facebook.com/autocampdrina/" icon={Facebook} label="Facebook" isBiker={isBikerPage} />
          </div>
        </div>

        <div>
          <h3 className={`font-bold text-lg mb-6 uppercase tracking-wider ${themeAccentText}`}>
            {t('footer.quickLinks')}
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <FooterLink to={ROUTE_MAP['home'][currentLang]} currentPath={pathname} label={t('navbar.home')} />
            <FooterLink to={ROUTE_MAP['rafting'][currentLang]} currentPath={pathname} label={t('navbar.rafting')} />
            <FooterLink to={ROUTE_MAP['hiking'][currentLang]} currentPath={pathname} label={t('navbar.hiking')} />
            <FooterLink to={ROUTE_MAP['multiday'][currentLang]} currentPath={pathname} label={t('navbar.multiday')} />
          </ul>
        </div>

        <div>
          <h3 className={`font-bold text-lg mb-6 uppercase tracking-wider ${themeAccentText}`}>
            {t('footer.explore')}
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <FooterLink to={ROUTE_MAP['camping'][currentLang]} currentPath={pathname} label={t('navbar.camping')} />
            <FooterLink to={ROUTE_MAP['aboutus'][currentLang]} currentPath={pathname} label={t('navbar.aboutus')} />
            <FooterLink to={ROUTE_MAP['bikerhub'][currentLang]} currentPath={pathname} label={t('navbar.bikerhub')} />
            <FooterLink to={ROUTE_MAP['faq'][currentLang]} currentPath={pathname} label={t('navbar.faq')} />
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className={`font-bold text-lg mb-6 uppercase tracking-wider ${themeAccentText}`}>
            {t('footer.contact')}
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <ContactItem 
              icon={copiedType === 'phone' ? BadgeCheck : Phone} 
              label={copiedType === 'phone' ? t('navbar.copied', 'Kopirano!') : SITE_DATA.general.phone} 
              accentClass={copiedType === 'phone' ? 'text-green-400' : themeAccentText}
              onClick={() => handleCopy(SITE_DATA.general.phone, 'phone')}
              isCopied={copiedType === 'phone'}
            />
            <ContactItem 
              icon={copiedType === 'secondaryPhone' ? BadgeCheck : Phone} 
              label={copiedType === 'secondaryPhone' ? t('navbar.copied', 'Kopirano!') : SITE_DATA.general.secondaryPhone} 
              accentClass={copiedType === 'secondaryPhone' ? 'text-green-400' : themeAccentText}
              onClick={() => handleCopy(SITE_DATA.general.secondaryPhone, 'secondaryPhone')}
              isCopied={copiedType === 'secondaryPhone'}
            />
            <ContactItem 
              icon={copiedType === 'email' ? BadgeCheck : Mail} 
              label={copiedType === 'email' ? t('navbar.copied', 'Kopirano!') : SITE_DATA.general.email} 
              accentClass={copiedType === 'email' ? 'text-green-400' : themeAccentText}
              onClick={() => handleCopy(SITE_DATA.general.email, 'email')}
              isCopied={copiedType === 'email'}
            />
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={16} className={themeAccentText} /> {SITE_DATA.general.address}
            </li>
          </ul>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className={`font-bold text-lg mb-6 uppercase tracking-wider ${themeAccentText}`}>
            {t('footer.location')}
          </h3>
          <button 
            type="button"
            onClick={() => setIsMapOpen(true)}
            className={`block w-full h-36 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 ${themeHighlight} transition-all mx-auto md:mx-0 shadow-lg focus:outline-none`}
            aria-label={t('footer.openMap', 'Otvori interaktivnu mapu')}
          >
            <img 
              src="/images/google-map.webp"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-500" 
              alt="Map Preview" 
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className={`text-xs bg-white text-primary px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-xl transform group-hover:scale-110 transition-all`}>
                <ExternalLink size={14} /> {t('footer.openMap')}
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className={`text-center text-gray-300 text-xs border-t ${themeBorder} pt-8`}>
        © {new Date().getFullYear()} {t('footer.rights')}
      </div>

      {isMapOpen && (
        <Modal 
          isOpen={isMapOpen} 
          onClose={() => setIsMapOpen(false)} 
          className="max-w-5xl w-full h-[85vh] p-0 overflow-hidden bg-white flex flex-col relative border-4 border-[#0b1f0c] rounded-xl shadow-2xl"
        >
          <div className="w-full h-full relative">
            <button 
              onClick={() => setIsMapOpen(false)}
              className="absolute top-4 right-4 z-20 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-110"
              aria-label="Close Map"
            >
              <X size={24} />
            </button>

            <iframe 
              src={MAP_EMBED_URL} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Auto Camp Drina Location"
              className="w-full h-full"
            />

            <div className={`absolute bottom-0 left-0 w-full p-4 flex justify-center ${isBikerPage ? 'bg-[#1c1917]/90' : 'bg-primary/90'} backdrop-blur-md border-t border-white/10 z-10`}>
              <a 
                href={MAP_EXTERNAL_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition shadow-lg transform hover:-translate-y-1"
              >
                <ExternalLink size={18} /> {t('footer.openInGoogleMaps')}
              </a>
            </div>
          </div>
        </Modal>
      )}
    </footer>
  );
};

const SocialIcon = ({ href, icon: Icon, label, isBiker }) => (
  <a 
    href={href} 
    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition ${isBiker ? 'hover:bg-accent' : 'hover:bg-accent'}`} 
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={18} />
  </a>
);

const FooterLink = ({ to, label, currentPath }) => (
  <li>
    <Link 
      to={to} 
      onClick={() => { if (currentPath === to) window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      className="hover:text-white transition text-center md:text-left block"
    >
      {label}
    </Link>
  </li>
);

const ContactItem = ({ icon: Icon, label, accentClass, onClick, isCopied }) => (
  <li className="flex items-center gap-2 justify-center md:justify-start">
    <Icon size={16} className={accentClass} /> 
    <button
      aria-label='Contact' 
      onClick={onClick} 
      className={`hover:text-white transition focus:outline-none ${isCopied ? 'text-green-400 font-bold' : ''}`}
    >
      {label}
    </button>
  </li>
);