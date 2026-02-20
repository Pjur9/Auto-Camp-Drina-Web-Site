import React from 'react';
import { Tent, Car, ShieldCheck, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import { SectionTitle } from '../../shared/ui/SectionTitle';
import { Button } from '../../shared/ui/Button';

export const CampingPromo = ({ openBooking, lang }) => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title={t('camping.title')}
          subtitle={t('camping.subtitle')}
          centered={true}
        /> 

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          
          <div className="lg:w-1/2 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-primary mb-6 font-['Montserrat']">
              {t('camping.promoTitle')}
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg"> 
              {t('camping.promoText')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-8 mb-10">
              <FeatureItem 
                icon={Tent} 
                title={t('camping.features.bungalows.title')} 
                desc={t('camping.features.bungalows.desc')} 
              />
              <FeatureItem 
                icon={Car} 
                title={t('camping.features.campers.title')} 
                desc={t('camping.features.campers.desc')} 
              />
              <FeatureItem 
                icon={ShieldCheck} 
                title={t('camping.features.facilities.title')} 
                desc={t('camping.features.facilities.desc')} 
              />
              <FeatureItem 
                icon={MapPin} 
                title={t('camping.features.river.title')} 
                desc={t('camping.features.river.desc')} 
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={`/${lang}/camping`} className="w-full sm:w-auto">
                <Button
                  aria-label={t('common.viewAll')} 
                  className="w-full sm:w-auto px-8 bg-accent hover:bg-accent-hover text-white"
                >
                  {t('common.viewAll')}
                </Button>
              </Link>
              
              <Button
                aria-label={t('common.bookAccommodation')} 
                variant="secondary" 
                onClick={() => openBooking('Smještaj / Kamp')} 
                className="w-full sm:w-auto px-8 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {t('common.bookAccommodation')}
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl group animate-fade-in-up">
            <img 
              src="/images/rv-park-camper-van-spots-foca.webp" 
              alt="Camping Auto Camp Drina" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center text-secondary shrink-0">
      <Icon size={20}/>
    </div>
    <div className="min-w-0">
      <p className="font-bold text-sm md:text-base text-primary break-words hyphens-auto leading-tight mb-1">
        {title}
      </p>
      <p className="text-sm text-gray-500 leading-snug">
        {desc}
      </p>
    </div>
  </div>
);