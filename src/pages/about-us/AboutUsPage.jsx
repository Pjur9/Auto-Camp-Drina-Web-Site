import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { 
  User, ArrowRight, ShieldCheck, Star, Heart, Map, Sun, 
  LifeBuoy, Award, Anchor, Clock, BadgeCheck, ChevronLeft, ChevronRight 
} from 'lucide-react';

import { AboutHero } from '../../widgets/hero/AboutHero';
import { Container } from '../../shared/ui/Container';
import { Button } from '../../shared/ui/Button';
import { CountUp } from '../../shared/ui/CountUp';
import { StandardSlider } from '../../features/slider/Slider';

const EXTERNAL_LINKS = [
    { name: "Park4Night", url: "https://park4night.com/en/place/26159"},
    { name: "CamperContact", url: "https://www.campercontact.com/en/bosnia-and-herzegovina/republika-srpska/foca-municipality-rs/18755/autocamp-drina"},
    { name: "EuroCampings", url: "https://www.eurocampings.co.uk/bosnia-and-herzegovina/patkovina/auto-camp-drina-121339/"},
    { name: "TripAdvisor", url: "https://www.tripadvisor.com/Hotel_Review-g1900043-d3382359-Reviews-Auto_Camp_Drina-Foca_Republika_Srpska.html"},
];

const AboutUsPage = ({ openBooking }) => {
  const { t } = useTranslation();
  const { lang } = useParams(); 
  
  const stats = t('hero.stats', { returnObjects: true });
  const skippers = t('aboutUsPage.skippers', { returnObjects: true });
  const displaySkippers = Array.isArray(skippers) ? skippers : []; 

  return (
    <div className="pt-2 md:pt-16 bg-surface min-h-screen relative overflow-x-hidden w-full"> 
      
      <AboutHero />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 mt-16 border-b border-primary/10 pb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-['Montserrat'] group-hover:-translate-y-1 transition-transform duration-300">
                <CountUp value={stat.value} />
              </div>
              <div className="text-xs font-bold text-accent uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6 text-secondary">
              <span className="w-12 h-0.5 bg-secondary" />
              <span className="text-sm font-bold uppercase tracking-[0.2em]">
                {t('aboutUsPage.story1.subtitle')}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-['Montserrat'] leading-tight">
              {t('aboutUsPage.story1.title')}
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8">
              <div className="text-lg leading-relaxed">
                <Trans i18nKey="aboutUsPage.story1.text">
                  <strong className="text-primary font-semibold" />
                </Trans>
              </div>
              <p className="text-lg leading-relaxed mt-4">
                {t('aboutUsPage.story1.text2')}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-2 text-gray-700 font-semibold bg-secondary/5 border border-secondary/20 px-4 py-2 rounded-lg">
                <Heart size={18} className="text-secondary" /> {t('aboutUsPage.story1.badge1')}
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-semibold bg-secondary/5 border border-secondary/20 px-4 py-2 rounded-lg">
                <User size={18} className="text-secondary" /> {t('aboutUsPage.story1.badge2')}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/rv-park-camper-van-spots-foca.webp" 
                alt="Family Tradition" 
                className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm p-6 rounded-tr-[2rem]">
                <p className="font-['Montserrat'] font-bold text-primary text-lg">
                  {t('aboutUsPage.story1.imageCaption')}
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-secondary/20 rounded-[2rem] -z-10" />
          </div>
        </div>
      </Container>

      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/rafting-background-home.webp" alt="Rafting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl bg-white/95 backdrop-blur-md p-10 md:p-14 rounded-3xl shadow-2xl border-l-8 border-accent">
            <div className="flex items-center gap-3 mb-4 text-accent">
              <span className="w-8 h-1 bg-accent" />
              <span className="text-sm font-bold uppercase tracking-widest">{t('aboutUsPage.story2.subtitle')}</span>
            </div>
            <h3 className="text-3xl font-bold text-primary mb-6 font-['Montserrat']">
              {t('aboutUsPage.story2.title')}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              <Trans i18nKey="aboutUsPage.story2.text">
                <strong className="text-primary" />
              </Trans>
            </p>
            <Link to={`/${lang}/rafting`}>
              <Button>
                {t('aboutUsPage.story2.button')} <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </div>

      <div className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6 text-secondary">
                <span className="w-12 h-0.5 bg-secondary" />
                <span className="text-sm font-bold uppercase tracking-[0.2em]">{t('aboutUsPage.safety.subtitle')}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-['Montserrat']">
                {t('aboutUsPage.safety.title')}
              </h3>
              <div className="space-y-6 mb-8 text-gray-600 text-lg leading-relaxed">
                <div className="text-lg leading-relaxed">
                  <Trans i18nKey="aboutUsPage.safety.text1">
                    <strong className="text-primary" />
                  </Trans>
                </div>
                <div className="text-lg leading-relaxed">
                  <Trans i18nKey="aboutUsPage.safety.text2">
                    <strong className="text-primary" />
                  </Trans>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                <SafetyBadge icon={Award} text={t('aboutUsPage.safety.badges.skippers')} />
                <SafetyBadge icon={ShieldCheck} text={t('aboutUsPage.safety.badges.equipment')} />
                <SafetyBadge icon={LifeBuoy} text={t('aboutUsPage.safety.badges.briefing')} />
                <SafetyBadge icon={Anchor} text={t('aboutUsPage.safety.badges.insurance')} />
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-secondary/10">
                <img 
                  src="/images/safety.webp" 
                  alt="Safety Equipment" 
                  className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
            </div>
          </div>
        </Container>
      </div>

      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/dinaric-alps-mountain-range-bosnia.webp" alt="Hiking" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-dark/50" /> 
        </div>

        <Container className="relative z-10 flex justify-start">
          <div className="max-w-2xl bg-white/95 backdrop-blur-md p-10 md:p-14 rounded-3xl shadow-2xl border-l-8 border-accent">
            <div className="flex items-center gap-3 mb-4 text-accent">
              <span className="w-8 h-1 bg-accent" />
              <span className="text-sm font-bold uppercase tracking-widest">{t('aboutUsPage.story3.subtitle')}</span>
            </div>
            
            <h3 className="text-3xl font-bold text-primary mb-6 font-['Montserrat']">
              {t('aboutUsPage.story3.title')}
            </h3>
            
            <div className="text-gray-700 text-lg leading-relaxed mb-6">
              <Trans i18nKey="aboutUsPage.story3.text">
                <strong className="text-primary" />
              </Trans>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Sun size={18} className="text-accent" /> {t('aboutUsPage.story3.list.item1')}
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Map size={18} className="text-accent" /> {t('aboutUsPage.story3.list.item2')}
              </li>
            </ul>

            <Link 
              to={`/${lang}/hiking`}
              className="text-accent font-bold text-lg hover:text-orange-700 transition inline-flex items-center gap-2 group border-b-2 border-accent pb-1"
            >
              {t('aboutUsPage.story3.button')} 
              <ArrowRight size={22} className="transform group-hover:translate-x-2 transition" />
            </Link>
          </div>
        </Container>
      </div>

      <div className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-['Montserrat']">
              {t('aboutUsPage.values.title')}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              {t('aboutUsPage.values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ModernValueCard 
              icon={User} 
              theme="green" 
              title={t('aboutUsPage.values.cards.personal.title')} 
              text={t('aboutUsPage.values.cards.personal.text')} 
            />
            <ModernValueCard 
              icon={ShieldCheck} 
              theme="blue" 
              title={t('aboutUsPage.values.cards.safety.title')} 
              text={t('aboutUsPage.values.cards.safety.text')} 
            />
            <ModernValueCard 
              icon={Star} 
              theme="orange" 
              title={t('aboutUsPage.values.cards.food.title')} 
              text={t('aboutUsPage.values.cards.food.text')} 
            />
          </div>
        </Container>
      </div>

      <div className="relative py-24 overflow-hidden">
        <img src="/images/rafting-home-hero.webp" alt="Skippers Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/80 via-primary/90 to-primary-dark/95" />

        <Container className="relative z-20">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-4 text-accent">
              <Anchor size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">
                {t('aboutUsPage.skippersSection.subtitle')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Montserrat']">
              {t('aboutUsPage.skippersSection.title')}
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              {t('aboutUsPage.skippersSection.description')}
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <StandardSlider 
              items={displaySkippers}
              autoplayDelay={5000}
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
              renderItem={(skipper) => (
                <SkipperCard skipper={skipper} />
              )}
            />
          </div>
        </Container>
      </div>
      
      <section className="py-24 bg-slate-50/60 backdrop-blur-sm relative z-20 border-y border-stone-200 overflow-hidden">
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
              <div>
                  <h3 className="text-3xl md:text-5xl font-black text-primary-light uppercase font-['Montserrat'] tracking-tighter leading-none mb-4">
                      {t('bikerHub.locator.titleMain')} <br/>
                      <span className="text-orange-600">{t('bikerHub.locator.titleAccent')}</span>
                  </h3>
                  <p className="text-stone-500 font-medium uppercase tracking-widest text-xs">
                      {t('bikerHub.locator.verified')}
                  </p>
              </div>
              <div className="hidden md:block h-px flex-grow mx-12 bg-stone-300"></div>
              <div className="text-stone-400 font-mono text-[10px] hidden md:block uppercase tracking-widest text-right">
                  Biker Friendly <br/> Deployment Zone
              </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {EXTERNAL_LINKS.map((link) => (
                  <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative flex flex-col items-center justify-center p-8 bg-white border border-stone-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-[#2dd4bf] hover:-translate-y-1 rounded-[2rem] overflow-hidden"
                  >
                      <span className="absolute -bottom-2 -right-2 text-4xl font-black text-[#1c1917]/[0.03] italic pointer-events-none group-hover:text-[#2dd4bf]/10 transition-colors">
                          {link.name.substring(0, 3)}
                      </span>
                      <div className="w-full h-1 absolute top-0 left-0 bg-[#2dd4bf] opacity-30 group-hover:opacity-100 transition-opacity"></div>
                      <span className="font-black text-xs md:text-sm text-primary-light uppercase tracking-[0.2em] group-hover:text-[#2dd4bf] transition-colors relative z-10 text-center">
                          {link.name}
                      </span>
                      
                      <div className="mt-4 text-[10px] font-bold text-[#2dd4bf] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                          {t('bikerHub.locator.viewBtn')}
                      </div>
                  </a>
              ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

const SafetyBadge = ({ icon: Icon, text }) => (
  <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-700 font-medium">
    <div className="w-10 h-10 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center">
      <Icon size={18} className="text-secondary" />
    </div>
    <span className="break-words hyphens-auto">{text}</span>
  </div>
);

const ModernValueCard = ({ icon: Icon, title, text, theme }) => {
  const themes = {
    green: "text-secondary bg-secondary/5 border-secondary/20",
    blue: "text-primary bg-primary/5 border-primary/20",
    orange: "text-accent bg-accent/5 border-accent/20",
  };

  return (
    <div className={`bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition duration-300 border border-transparent hover:${themes[theme].split(' ')[2]} group`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 ${themes[theme].split(' ').slice(0, 2).join(' ')}`}>
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="font-bold text-xl text-primary mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{text}</p>
    </div>
  );
};

const SpotifyIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.302c-.223.367-.704.484-1.071.261-2.974-1.819-6.717-2.231-11.125-1.223-.42.096-.84-.168-.936-.588-.096-.42.168-.84.588-.936 4.838-1.106 8.971-.634 12.283 1.391.368.223.484.704.261 1.095zm1.47-3.255c-.281.456-.879.604-1.335.323-3.404-2.092-8.592-2.703-12.618-1.481-.514.156-1.053-.135-1.209-.649-.156-.514.135-1.053.649-1.209 4.593-1.394 10.312-.705 14.21 1.689.456.281.604.879.303 1.327zm.126-3.41c-4.085-2.425-10.816-2.65-14.735-1.46-.627.19-1.29-.166-1.48-.793-.19-.627.166-1.29.793-1.48 4.502-1.367 11.954-1.103 16.657 1.685.564.335.75 1.066.415 1.631-.336.564-1.067.75-1.65.417z"/>
  </svg>
);

const SkipperCard = ({ skipper }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-accent/30 group flex flex-col items-center text-center h-full min-h-[500px]">
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full p-1 border-2 border-gray-100 group-hover:border-accent overflow-hidden mx-auto transition-colors duration-500">
          <img src={skipper.image} alt={skipper.name} className="w-full h-full rounded-full object-cover group-hover:scale-110 transition duration-500" />
        </div>
        <div className="absolute bottom-0 right-0 bg-accent text-white p-2 rounded-full border-4 border-white shadow-md transform group-hover:rotate-12 transition-transform">
          <Anchor size={16} />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-primary mb-1">{skipper.name}</h3>
      <p className="text-sm font-bold text-secondary uppercase tracking-wide mb-4">{skipper.role}</p>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed italic flex-grow">"{skipper.desc}"</p>

      {skipper.playlists && skipper.playlists.length > 0 && (
        <div className="flex flex-col items-center gap-3 mb-6 animate-fade-in">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {t('aboutUsPage.skippersSection.listenVibe')}
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            {skipper.playlists.map((url, i) => (
              <a 
                key={i} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 group/spotify transition-all duration-300 hover:scale-110"
                title={`Open Playlist ${i + 1}`}
              >
                <SpotifyIcon size={20} />
                <span className="text-[11px] font-black text-primary group-hover/spotify:text-[#1DB954] transition-colors">
                  PL{i + 1}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="w-full pt-6 border-t border-gray-100 space-y-3 mt-auto">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
          <Clock size={16} className="text-accent" />
          <span className="font-medium">{skipper.experience}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
          <BadgeCheck size={16} className="text-primary" />
          <span className="font-medium">{skipper.license || skipper.specialty}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;