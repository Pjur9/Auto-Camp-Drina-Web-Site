import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { 
  Phone, Mail, BookOpen, X, ChevronDown, BadgeCheck 
} from 'lucide-react';
import { FaGoogle, FaTripadvisor } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { SITE_DATA } from '../../entities/general/model/site-data';

// Mapa svih naših lokalizovanih URL-ova
const ROUTE_MAP = {
  home:     { en: '/en', sr: '/sr', de: '/de' },
  rafting:  { en: '/en/rafting', sr: '/sr/rafting', de: '/de/rafting' },
  hiking:   { en: '/en/hiking', sr: '/sr/planinarenje', de: '/de/wandern' },
  camping:  { en: '/en/camping', sr: '/sr/kampovanje', de: '/de/camping' },
  multiday: { en: '/en/multiday', sr: '/sr/visednevni', de: '/de/mehrtagestouren' },
  aboutus:  { en: '/en/aboutus', sr: '/sr/o-nama', de: '/de/ueber-uns' },
  bikerhub: { en: '/en/bikerhub', sr: '/sr/motociklisti', de: '/de/motorrad' },
  faq:      { en: '/en/faq', sr: '/sr/faq', de: '/de/faq' }
};

// Pomoćna funkcija koja prepoznaje "ključ" stranice na osnovu URL-a
const getCurrentPageKey = (pathname) => {
  if (pathname === '/en' || pathname === '/sr' || pathname === '/de' || pathname === '/') return 'home';
  for (const [key, paths] of Object.entries(ROUTE_MAP)) {
    if (Object.values(paths).includes(pathname)) return key;
  }
  return 'home';
};

const EXTERNAL_LINKS = {
  tripAdvisor: "https://www.tripadvisor.com/Hotel_Review-g1900043-d3382359-Reviews-Auto_Camp_Drina-Foca_Republika_Srpska.html",
  booking: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-main",
  google: "https://maps.app.goo.gl/ge6rfzNqGmDEAAaH8"
};

const LANGUAGES = [
  { code: 'en', country_code: 'gb', label: 'English' },
  { code: 'sr', country_code: 'rs', label: 'Srpski' },
  { code: 'de', country_code: 'de', label: 'Deutsch' }
];

const DESKTOP_LINKS = [
  { id: 'home', type: 'link' },
  { id: 'activities', type: 'dropdown', subLinks: ['rafting', 'hiking', 'multiday'] },
  { id: 'camping', type: 'link' },
  { id: 'aboutus', type: 'link' },
  { id: 'bikerhub', type: 'link' },
  { id: 'faq', type: 'link' }
];

const MOBILE_LINKS = [
  { id: 'home' },
  { id: 'rafting' },
  { id: 'hiking' },
  { id: 'camping' },
  { id: 'multiday' },
  { id: 'aboutus' },
  { id: 'bikerhub' },
  { id: 'faq' }
];

const BookingIcon = ({ className }) => <TbBrandBooking className={className} />;
const TripAdvisorIcon = ({ className }) => <FaTripadvisor className={className} />;
const GoogleIcon = ({ className }) => <FaGoogle className={className} />;

export const Navbar = ({ openBooking, isScrolled }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { lang } = useParams();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const activitiesRef = useRef(null);

  // Određujemo na kojoj smo trenutno stranici i jeziku
  const currentPageKey = getCurrentPageKey(pathname);
  const currentLangObj = LANGUAGES.find(l => l.code === (lang || i18n.language)) || LANGUAGES[0];
  const currentLang = currentLangObj.code;

  // Nova, pametna funkcija za promjenu jezika
  const changeLanguage = (newLangCode) => {
    i18n.changeLanguage(newLangCode);
    const newUrl = ROUTE_MAP[currentPageKey][newLangCode];
    navigate(newUrl);
    setIsLangMenuOpen(false);
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(SITE_DATA.general.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activitiesRef.current && !activitiesRef.current.contains(event.target)) {
        setIsActivitiesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getFlagUrl = (code) => `https://flagcdn.com/w40/${code}.png`;

  const isBikerPage = currentPageKey === 'bikerhub';
  const themeBg = isBikerPage ? 'bg-[#1c1917]' : 'bg-primary';
  const themeAccentText = isBikerPage ? 'text-accent' : 'text-secondary';
  const themeHoverText = isBikerPage ? 'hover:text-accent' : 'hover:text-secondary';
  const themeIndicator = isBikerPage ? 'bg-accent shadow-[0_0_8px_#ea580c]' : 'bg-secondary shadow-[0_0_8px_#2dd4bf]';

  const navThemeClass = isScrolled || currentPageKey !== 'home' || isMobileMenuOpen 
    ? `${themeBg} shadow-lg` 
    : 'bg-transparent';

  return (
    <nav className={`fixed w-full top-0 left-0 z-[100] transition-all duration-300 ${navThemeClass}`}>
      
      <div className={`hidden lg:block transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'} border-b border-white/5`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-end items-center gap-6 text-white text-xs font-medium">
          <div className="relative">
            <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className={`flex items-center gap-2 transition focus:outline-none ${themeHoverText}`}>
              <img src={getFlagUrl(currentLangObj.country_code)} alt={currentLangObj.label} className="w-5 h-auto rounded-sm" />
              <ChevronDown size={14} />
            </button>
            {isLangMenuOpen && (
              <div className={`absolute top-full right-0 mt-2 ${isBikerPage ? 'bg-[#1c1917]' : 'bg-primary-dark'} border border-white/10 rounded-lg shadow-xl py-1 w-32 z-50`}>
                {LANGUAGES.map((l) => (
                  <button key={l.code} onClick={() => changeLanguage(l.code)} className={`flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-white/10 transition ${currentLang === l.code ? themeAccentText : 'text-white'}`}>
                    <img src={getFlagUrl(l.country_code)} alt={l.label} className="w-5 h-auto rounded-sm" />
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <span className="text-white/20">|</span>
          <a href={`tel:${SITE_DATA.general.phone}`} className={`flex items-center gap-2 transition ${themeHoverText}`}>
            <Phone size={14} className={themeAccentText} /> <span>{SITE_DATA.general.phone}</span>
          </a>

          <button onClick={handleCopyEmail} className={`flex items-center gap-2 transition focus:outline-none ${themeHoverText} ${emailCopied ? 'text-green-400' : ''}`}>
            {emailCopied ? <BadgeCheck size={14} className="text-green-400" /> : <Mail size={14} className={themeAccentText} />} 
            <span>{emailCopied ? t('navbar.copied') : SITE_DATA.general.email}</span>
          </button>

          <span className="text-white/20">|</span>
          <SocialLink href={EXTERNAL_LINKS.booking} icon={BookingIcon} label="Booking" hoverClass={themeHoverText} />
          <SocialLink href={EXTERNAL_LINKS.google} icon={GoogleIcon} label="Google" hoverClass={themeHoverText} />
          <SocialLink href={EXTERNAL_LINKS.tripAdvisor} icon={TripAdvisorIcon} label="TripAdvisor" hoverClass={themeHoverText} />
        </div>
      </div>

      <div className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link 
            to={ROUTE_MAP['home'][currentLang]} 
            onClick={() => { if (currentPageKey === 'home') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-white font-bold text-xl md:text-2xl tracking-tighter cursor-pointer flex items-center gap-3 font-['Montserrat'] shrink-0"
          >
            <img src="/images/android-chrome-192x192.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 p-0.5" />
            <div className="leading-none">AUTO CAMP <br/> <span className={themeAccentText}>DRINA</span></div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-white text-sm font-bold tracking-widest">
            {DESKTOP_LINKS.map((link) => {
              if (link.type === 'dropdown') {
                const isAnySubActive = link.subLinks.includes(currentPageKey);
                return (
                  <div key={link.id} className="relative group" ref={activitiesRef}>
                    <button 
                      onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
                      className={`flex items-center gap-1 hover:text-secondary transition py-2 ${isAnySubActive || isActivitiesOpen ? themeAccentText : ''}`}
                    >
                      {t(`navbar.${link.id}`)} 
                      <ChevronDown size={14} className={`transition-transform ${isActivitiesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${themeIndicator} ${isAnySubActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />

                    {isActivitiesOpen && (
                      <div className={`absolute top-full left-0 mt-2 min-w-[200px] ${isBikerPage ? 'bg-[#1c1917]' : 'bg-primary-dark'} border border-white/10 rounded-xl shadow-2xl py-2 overflow-hidden animate-fade-in`}>
                        {link.subLinks.map(subId => (
                          <Link 
                            key={subId} 
                            to={ROUTE_MAP[subId][currentLang]}
                            onClick={() => {
                              setIsActivitiesOpen(false);
                              if (currentPageKey === subId) window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`flex items-center gap-3 w-full px-6 py-4 text-[11px] hover:bg-white/10 transition border-b border-white/5 last:border-none ${currentPageKey === subId ? themeAccentText : 'text-white'}`}
                          >
                            {t(`navbar.${subId}`)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link 
                  key={link.id} 
                  to={ROUTE_MAP[link.id][currentLang]}
                  onClick={() => { if (currentPageKey === link.id) window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`transition relative group py-2 ${themeHoverText} ${currentPageKey === link.id ? themeAccentText : ''}`}
                >
                  {t(`navbar.${link.id}`)}
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${themeIndicator} ${currentPageKey === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => openBooking()} className="hidden lg:block bg-accent px-6 py-2.5 rounded font-bold text-white hover:opacity-90 transition transform hover:scale-105 shadow-lg shadow-orange-900/20 uppercase text-[10px] tracking-widest">
              {t('navbar.bookBtn')}
            </button>
            <button className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <BookOpen size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`lg:hidden ${themeBg} px-4 pb-20 animate-fade-in fixed top-[64px] left-0 right-0 bottom-0 z-[100] overflow-y-auto shadow-2xl border-t border-white/5 transition-colors duration-500`}>
          <div className="flex flex-col gap-1 pt-6">
            {MOBILE_LINKS.map((link) => (
              <Link 
                key={link.id} 
                to={ROUTE_MAP[link.id][currentLang]}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (currentPageKey === link.id) window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`block w-full text-left text-lg py-5 px-6 rounded-2xl font-bold transition-all ${currentPageKey === link.id ? (isBikerPage ? 'bg-accent text-white' : 'bg-secondary text-white') : 'text-gray-200 hover:bg-white/5'}`}
              >
                {t(`navbar.${link.id}`)}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-10">
            <div className="flex justify-center gap-6">
              {LANGUAGES.map((l) => (
                <button key={l.code} onClick={() => changeLanguage(l.code)} className={`p-4 rounded-2xl transition-all ${currentLang === l.code ? 'bg-white/20 scale-110 shadow-lg' : 'bg-white/5 opacity-60'}`}>
                  <img src={getFlagUrl(l.country_code)} alt={l.label} className="w-8 h-auto rounded-sm" />
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              <MobileActionLink href={`tel:${SITE_DATA.general.phone}`} icon={Phone} label="Poziv" isBiker={isBikerPage} />
              <div onClick={handleCopyEmail} className="cursor-pointer">
                <MobileActionLink icon={emailCopied ? BadgeCheck : Mail} label={emailCopied ? "Kopirano" : "Email"} isBiker={isBikerPage} />
              </div>
              <MobileActionLink href={EXTERNAL_LINKS.booking} icon={BookingIcon} label="Book" isBiker={isBikerPage} />
              <MobileActionLink href={EXTERNAL_LINKS.google} icon={GoogleIcon} label="Google" isBiker={isBikerPage} />
              <MobileActionLink href={EXTERNAL_LINKS.tripAdvisor} icon={TripAdvisorIcon} label="Trip" isBiker={isBikerPage} />
            </div>
            <button onClick={() => { openBooking(); setIsMobileMenuOpen(false); }} className="w-full bg-accent py-6 rounded-2xl font-black text-white uppercase text-base shadow-2xl shadow-orange-900/40 tracking-widest active:scale-95 transition-transform">
              {t('navbar.bookBtn')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const SocialLink = ({ href, icon: Icon, label, hoverClass }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 transition group ${hoverClass}`} title={label}>
    <Icon className="w-4 h-4 text-white group-hover:inherit transition" />
    <span className="group-hover:inherit">{label}</span>
  </a>
);

const MobileActionLink = ({ icon: Icon, label, isBiker, href }) => {
  const content = (
    <>
      <Icon size={24} />
      <span className="text-[11px] uppercase text-gray-400 font-bold tracking-tight">{label}</span>
    </>
  );
  const baseClass = `flex flex-col items-center justify-center p-5 bg-white/5 rounded-3xl text-accent hover:bg-white/10 transition-all gap-2 active:scale-95 w-full h-full`;
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>{content}</a> : <div className={baseClass}>{content}</div>;
};