import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { CountUp } from '../../shared/ui/CountUp';

export const HikingHero = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="relative py-32 flex items-center bg-fixed bg-cover bg-center mb-8 md:mb-16 shadow-2xl" 
      style={{ backgroundImage: 'url("/images/planinarenje-maglic-sutjeska.webp")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary-light/60" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white animate-fade-in-up">
        
        <div className="inline-block border border-secondary/40 px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-6 bg-primary-dark/40 backdrop-blur-md max-w-[90vw]">
          <span className="text-secondary font-bold uppercase tracking-widest text-[10px] md:text-xs block truncate">
            {t('hikingHero.tag')}
          </span>
        </div>
        
        <h1 className="font-bold mb-6 font-['Montserrat'] drop-shadow-2xl tracking-tight leading-tight break-words mx-auto max-w-full"
            style={{ fontSize: 'clamp(1.75rem, 8vw, 4.5rem)' }}>
          {t('hikingHero.title')}
        </h1>
        
        <p className="text-base md:text-xl font-light opacity-90 leading-relaxed max-w-3xl mx-auto text-gray-200">
          <Trans i18nKey="hikingHero.description">
            <strong className="text-secondary"></strong>
          </Trans>
        </p> 
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/20 pt-8 mt-8">
          <StatItem value="2386m" label={t('hikingHero.stats.maglic')} />
          <StatItem value="8" label={t('hikingHero.stats.lakes')} />
          <StatItem value="100%" label={t('hikingHero.stats.air')} />
        </div>

      </div>
    </section>
  );
};

const StatItem = ({ value, label }) => (
  <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
    <p className="text-4xl md:text-5xl font-bold text-accent font-['Montserrat'] drop-shadow-md">
      <CountUp value={value} />
    </p>
    <p className="text-xs uppercase tracking-wider text-gray-300 font-semibold mt-2">
      {label}
    </p>
  </div>
);