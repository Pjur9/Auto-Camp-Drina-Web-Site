import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { HikingHero } from '../../widgets/hero/HikingHero'; 
import { HikingEquipment } from '../../widgets/sections/HikingEquipment';
import { FAQTeaser } from '../../widgets/sections/FAQTeaser';

import { PackageCard } from '../../entities/package/ui/PackageCard';

import { SectionTitle } from '../../shared/ui/SectionTitle';
import { Container } from '../../shared/ui/Container';

const HikingPage = ({ openBooking, openQuestion, lang }) => {
  const { t } = useTranslation();
  const hikingTours = t('packages.hiking', { returnObjects: true }); 
  
  const [openCardId, setOpenCardId] = useState(null);
  const { i18n } = useTranslation();
  const currentLang = lang || i18n.language || 'en';
  const handleCardToggle = (id) => {
    setOpenCardId(prevId => prevId === id ? null : id);
  };

  return (
    <div className="pt-2 pb-2 md:pt-16 md:pb-16 bg-surface min-h-screen relative overflow-x-hidden w-full">
      <HikingHero />

      <Container>
        <SectionTitle 
          title={t('hikingPage.title')} 
          subtitle={t('hikingPage.subtitle')} 
          centered={true} 
        />

        <div className="flex flex-wrap justify-center gap-8 mb-24">
          {hikingTours.map((tour, index) => (
            <div 
              key={tour.id} 
              className="animate-fade-in-up w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-[440px]" 
              style={{ 
                animationDelay: `${index * 0.1}s`,
                fillMode: 'both'
              }}
            >
              <PackageCard 
                item={{ ...tour, price: tour.price || t('common.onRequest') }} 
                type="hiking" 
                onBook={openBooking} 
                layout="vertical"
                isItineraryOpen={openCardId === tour.id}
                onToggle={() => handleCardToggle(tour.id)} 
                onShowDetails={() => {}} 
              />
            </div>
          ))}
        </div>

        <HikingEquipment openBooking={openBooking} openQuestion={openQuestion} />
        <FAQTeaser category="hiking" lang={currentLang} />
        
      </Container>
    </div>
  );
};

export default HikingPage;