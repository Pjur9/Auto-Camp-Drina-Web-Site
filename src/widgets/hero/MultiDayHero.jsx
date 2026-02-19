import React from 'react';
import { useTranslation } from 'react-i18next';

export const MultiDayHero = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="relative py-32 flex items-center bg-fixed bg-cover bg-center mb-8 md:mb-16 shadow-2xl "  
      style={{
        backgroundImage: 'url("/images/multi-day-adventure-tara.webp")',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary-dark/60 to-primary/90" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white animate-fade-in-up">

        <div className="inline-block border border-secondary/40 px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-6 bg-primary-dark/40 backdrop-blur-md max-w-[90vw]">
          <span className="text-secondary font-bold uppercase tracking-widest text-[10px] md:text-xs block truncate">
            {t('multiDay.hero.tagline')}
          </span>
        </div>

        <h1 className="font-bold mb-6 font-['Montserrat'] drop-shadow-2xl tracking-tight leading-tight break-words mx-auto max-w-full"
            style={{ fontSize: 'clamp(1.75rem, 8vw, 4.5rem)' }}>
          {t('multiDay.hero.title')}
        </h1>

        <h2 className="text-base md:text-xl font-light opacity-90 leading-relaxed max-w-3xl mx-auto text-gray-200">
          {t('multiDay.hero.subtitle')}
        </h2>

      </div>
    </section>
  );
};