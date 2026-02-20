import React from 'react';
import { useTranslation } from 'react-i18next';

import { RaftingHero } from '../../widgets/hero/RaftingHero'; 
import { FAQTeaser } from '../../widgets/sections/FAQTeaser';
import { PackageCard } from '../../entities/package/ui/PackageCard';

import { SectionTitle } from '../../shared/ui/SectionTitle';
import { MeshBackground } from '../../shared/ui/MeshBackground';
import { Container } from '../../shared/ui/Container';

const RaftingPage = ({ openBooking, openDetails, lang }) => {
  const { t } = useTranslation();
  const raftingPackages = t('packages.rafting', { returnObjects: true });
  const { i18n } = useTranslation();
  const currentLang = lang || i18n.language || 'en';
  return (
    <div className="relative min-h-screen w-full bg-surface overflow-x-hidden">
      
      <MeshBackground />

      <div className="relative z-10">
        <RaftingHero />

        <Container className="py-16 md:py-24">
          
          <SectionTitle 
            title={t('raftingPage.title')} 
            subtitle={t('raftingPage.subtitle')} 
            centered={true} 
          />
          
          <div className="flex flex-col gap-12 mt-12">
            {raftingPackages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className="animate-fade-in-up" 
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  fillMode: 'both' 
                }}
              >
                <PackageCard 
                  item={pkg} 
                  type="rafting" 
                  onBook={openBooking} 
                  layout="horizontal" 
                  onShowDetails={openDetails} 
                  reversed={index % 2 !== 0} 
                />
              </div>
            ))}
          </div>

          <div className="mt-24">
            <FAQTeaser category="rafting" lang = {currentLang} />
          </div>
          
        </Container>
      </div>
    </div>
  );
};

export default RaftingPage;