import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ShieldCheck, Users, CheckCircle, Zap, Activity, Globe, Star } from 'lucide-react';

import { CampingHero } from '../../widgets/hero/CampingHero';
import { Container } from '../../shared/ui/Container';
import { Button } from '../../shared/ui/Button';

const CampingPage = ({ openBooking }) => {
  const { t } = useTranslation();

  const accommodation = t('campingPage.accommodation', { returnObjects: true });
  const amenities = t('campingPage.amenities.items', { returnObjects: true });

  return (
    <div className="pt-2 pb-2 md:pt-16 md:pb-16 bg-surface min-h-screen relative overflow-x-hidden w-full">
      
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#0f2937 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <CampingHero />

      <Container className="relative z-10">
        
        <div className="mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-6 font-['Montserrat']">
              {t('campingPage.intro.title')}
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              <Trans i18nKey="campingPage.intro.text1">
                <strong className="text-primary font-semibold" />
              </Trans>
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {t('campingPage.intro.text2')}
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 border border-secondary/20">
                <ShieldCheck size={16} /> {t('campingPage.intro.fenced')}
              </span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 border border-secondary/20">
                <Users size={16} /> {t('campingPage.intro.petFriendly')}
              </span>
            </div>
          </div>
          
          <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="/images/about-auto-camp-drina-foca.webp" 
              alt="Camping Atmosphere" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold text-xl drop-shadow-md">{t('campingPage.intro.imageOverlay.title')}</p>
              <p className="text-sm opacity-90">{t('campingPage.intro.imageOverlay.text')}</p>
            </div>
          </div>
        </div>

        <div className="mb-16 text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4 font-['Montserrat'] tracking-tight break-words">
            {t('campingPage.accommodation.title')}
          </h2>
          <p className="text-accent text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            {t('campingPage.accommodation.subtitle')}
          </p>
          <div className="h-1.5 w-24 bg-secondary mt-4 mx-auto rounded-full opacity-80" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <AccommodationCard 
            title={accommodation.bungalows.title}
            desc={accommodation.bungalows.desc}
            image="/images/wooden-bungalow-accommodation-foca.webp"
            features={accommodation.bungalows.features}
            badge={accommodation.bungalows.badge}
            onBook={() => openBooking("Bungalov")}
            bookBtnText={t('campingPage.accommodation.bookBtn')}
          />
          <AccommodationCard 
            title={accommodation.campers.title} 
            desc={accommodation.campers.desc}
            image="/images/rv-park-camper-van-spots-foca.webp"
            features={accommodation.campers.features}
            onBook={() => openBooking("Mjesto za Kamper")}
            bookBtnText={t('campingPage.accommodation.bookBtn')}
          />
          <AccommodationCard 
            title={accommodation.tents.title}
            desc={accommodation.tents.desc}
            image="/images/tents.webp"
            features={accommodation.tents.features}
            onBook={() => openBooking("Mjesto za Šator")}
            bookBtnText={t('campingPage.accommodation.bookBtn')}
          />
        </div>

        <div className="relative rounded-3xl p-10 md:p-16 mb-20 overflow-hidden shadow-2xl border border-primary/20">
          <img 
            src="/images/motorcycle-touring-balkans-stop.webp" 
            alt="Amenities Background" 
            className="absolute inset-0 w-full h-full object-cover z-0"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/75 to-primary/80 z-10" />

          <div className="relative z-20 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 font-['Montserrat'] text-white">
                {t('campingPage.amenities.title')}
              </h3>
              <p className="text-gray-200 max-w-2xl mx-auto font-medium">
                {t('campingPage.amenities.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Amenity icon={Zap} title={amenities.electricity.title} desc={amenities.electricity.desc} />
              <Amenity icon={Activity} title={amenities.toilets.title} desc={amenities.toilets.desc} />
              <Amenity icon={Globe} title={amenities.wifi.title} desc={amenities.wifi.desc} />
              <Amenity icon={Star} title={amenities.restaurant.title} desc={amenities.restaurant.desc} />
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

const AccommodationCard = ({ title, desc, image, features, badge, onBook, bookBtnText }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col">
    <div className="h-56 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover object-[center_85%] transform group-hover:scale-110 transition duration-700" loading="lazy"/>
      {badge && (
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
          {badge}
        </div>
      )}
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>
      <ul className="space-y-2 mb-6 mt-auto">
        {features.map((f, i) => (
          <li key={i} className="flex items-center text-xs text-gray-500">
            <CheckCircle size={14} className="text-secondary mr-2" /> {f}
          </li>
        ))}
      </ul>
      <Button aria-label={"BookButton"} variant="primary" className="w-full justify-center" onClick={onBook}>
        {bookBtnText}
      </Button>
    </div>
  </div>
);

const Amenity = ({ icon: Icon, title, desc }) => (
  <div className="group flex flex-col items-center text-center p-4 hover:bg-white/5 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:border-white/10">
    <div className="bg-accent p-4 rounded-full mb-4 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-orange-900/40">
      <Icon size={28} />
    </div>
    <h4 className="font-bold mb-2 text-white group-hover:text-accent transition-colors drop-shadow-sm">{title}</h4>
    <p className="text-xs text-gray-300 leading-relaxed font-medium drop-shadow-sm group-hover:text-white">{desc}</p>
  </div>
);

export default CampingPage;