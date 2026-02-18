import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const TrustIntro = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none flex justify-center items-center">
        <Award size={400} className="text-primary" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        
        <div 
          className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-primary/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.1s', fillMode: 'both' }}
        >
          <Award size={18} className="text-secondary" />
          <span className="text-secondary text-xs font-bold tracking-widest uppercase">
            {t('trust.badge')}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-['Montserrat'] leading-tight">
          {t('trust.title')}
        </h2>

        <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full" />

        <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-4">
          {t('trust.subtitle')}
        </p>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          {t('trust.desc')}
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-80">
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck size={32} className="text-secondary" strokeWidth={1.5} />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
              100% Safe
            </span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <Award size={32} className="text-secondary" strokeWidth={1.5} />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
              Certified
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};