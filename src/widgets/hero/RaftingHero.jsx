import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { CheckCircle, ShieldCheck, Tent } from 'lucide-react';

export const RaftingHero = () => { 
  const { t } = useTranslation();

  return (
    <section 
      className="relative py-32 flex items-center bg-fixed bg-cover bg-center mb-8 md:mb-16 shadow-2xl"
      style={{ backgroundImage: 'url("/images/ai-tara.webp")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-light/85 to-primary/90" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white animate-fade-in-up">
        
        <div className="inline-block border border-secondary/40 px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-6 bg-primary-dark/40 backdrop-blur-md max-w-[90vw]">
          <span className="text-secondary font-bold uppercase tracking-widest text-[10px] md:text-xs block truncate">
            {t('raftingHero.tag')}
          </span>
        </div>
        
        <h1 className="font-bold mb-6 font-['Montserrat'] drop-shadow-2xl tracking-tight leading-tight break-words mx-auto max-w-full"
            style={{ fontSize: 'clamp(1.75rem, 8vw, 4.5rem)' }}>
          {t('raftingHero.title')}
        </h1>
        
        <p className="text-base md:text-xl font-light opacity-90 leading-relaxed max-w-3xl mx-auto text-gray-200 italic">
          <Trans i18nKey="raftingHero.description">
            <span className="text-secondary font-semibold not-italic border-b-2 border-secondary/30">
              najdublji kanjon u Evropi
            </span>
          </Trans>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/10 pt-16 mt-8">
          <Feature 
            icon={CheckCircle} 
            title={t('raftingHero.features.tradition.title')}
            text={t('raftingHero.features.tradition.text')}
          />
          
          <Feature 
            icon={ShieldCheck} 
            title={t('raftingHero.features.safety.title')} 
            text={t('raftingHero.features.safety.text')}
          />
          
          <Feature 
            icon={Tent} 
            title={t('raftingHero.features.family.title')}
            text={t('raftingHero.features.family.text')}
          />
        </div>

      </div>
    </section>
  );
};

const Feature = ({ icon: Icon, title, text }) => (
  <div className="flex flex-col items-center text-center group cursor-default">
    <div className="bg-white/5 p-5 rounded-2xl text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 shadow-xl backdrop-blur-sm border border-white/10 group-hover:border-accent">
      <Icon size={38} strokeWidth={1.5} />
    </div>
    
    <h4 className="font-bold text-xl tracking-tight uppercase text-white mb-3 group-hover:text-accent transition-colors duration-300">
      {title}
    </h4>
    
    <p className="text-sm text-gray-300 leading-relaxed font-light px-6 opacity-80 group-hover:opacity-100 transition-opacity">
      {text}
    </p>
  </div>
);