import React from 'react';
import { Mountain, Compass, Car, User, Heart, ArrowRight } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import { HomeHero } from '../../widgets/hero/HomeHero';
import { CampingPromo } from '../../widgets/sections/CampingPromo';
import { ReviewsSection } from '../../widgets/sections/ReviewsSection'; 
import { TrustIntro } from '../../widgets/sections/TrustIntro';
import { FAQTeaser } from '../../widgets/sections/FAQTeaser';

import { HikingSlider } from '../../features/hiking-slider/HikingSlider';
import { MobileRaftingSlider } from '../../features/mobile-slider/MobileRaftingSlider'; 
import { PackageCard } from '../../entities/package/ui/PackageCard';

import { Button } from '../../shared/ui/Button';
import { CountUp } from '../../shared/ui/CountUp'; 

const HomePage = ({ openBooking, openDetails }) => {
  const { t } = useTranslation(); 
  const { lang } = useParams();

  const raftingPackages = t('packages.rafting', { returnObjects: true });
  const hikingTours = t('packages.hiking', { returnObjects: true });
  const stats = t('hero.stats', { returnObjects: true });
  
  const topOffers = raftingPackages.filter(pkg => [1, 3, 4].includes(pkg.id));

  return (
    <>
      <HomeHero openBooking={openBooking} />

      <section className="bg-primary py-16 border-b border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map(stat => (
            <div key={stat.id} className="group hover:-translate-y-1 transition-transform duration-300">
              <p className="text-5xl md:text-6xl font-bold text-white mb-3 font-['Montserrat'] drop-shadow-lg">
                <CountUp value={stat.value} />
              </p>
              <p className="text-secondary text-sm font-bold uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustIntro />

      <section 
        className="relative py-24 bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url("/images/rafting-background-home.webp")' }}
      >
        <div className="absolute inset-0 bg-primary/85 md:bg-primary/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-['Montserrat'] tracking-tight">
              {t('home.raftingTitle')}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full mt-8"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {t('home.raftingSubtitle')}
            </p>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {topOffers.map(pkg => (
              <PackageCard 
                key={pkg.id} 
                item={pkg} 
                type="rafting" 
                onBook={openBooking} 
                onShowDetails={openDetails} 
              />
            ))}
          </div>

          <div className="block md:hidden">
            <MobileRaftingSlider 
              packages={topOffers}
              onBook={openBooking}
              onShowDetails={openDetails}
            />
          </div>

          <div className="text-center mt-12">
            <Link to={`/${lang}/rafting`}>
              <Button variant="primary">
                {t('home.viewAllOffers')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-muted relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                <img 
                  src="/images/family-rafting-tara-safe-trip.webp"
                  alt="Camp Atmosphere" 
                  className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
                  loading="lazy"
                  width="600"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="font-['Montserrat'] font-bold text-white text-xl drop-shadow-md">
                    {t('aboutUs.imageCaption')}
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-secondary/30 rounded-[2rem] -z-10"></div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-6 text-secondary">
                <span className="w-12 h-0.5 bg-secondary"></span>
                <span className="text-sm font-bold uppercase tracking-[0.2em]">
                  {t('aboutUs.subtitle')}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-['Montserrat'] leading-tight">
                {t('aboutUs.title')}
              </h2>
              
              <div className="prose prose-lg text-gray-600 mb-8">
                <div className="text-lg leading-relaxed text-gray-700">
                  <Trans i18nKey="aboutUs.text">
                    <strong className="text-primary"></strong>
                  </Trans>
                </div>
              </div>

              <div className="block lg:hidden w-full h-[300px] mb-10 relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/family-rafting-tara-safe-trip.webp"
                  alt="Camp Atmosphere" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="font-['Montserrat'] font-bold text-white text-lg drop-shadow-md">
                    {t('aboutUs.imageCaption')}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-10 border-t border-gray-200 pt-8">
                <div className="flex items-center gap-2 text-gray-700 font-semibold bg-white border border-gray-100 px-4 py-2 rounded-lg shadow-sm">
                  <Heart size={18} className="text-accent" /> 
                  {t('aboutUsPage.story1.badge1')}
                </div>
                <div className="flex items-center gap-2 text-gray-700 font-semibold bg-white border border-gray-100 px-4 py-2 rounded-lg shadow-sm">
                  <User size={18} className="text-accent" /> 
                  {t('aboutUsPage.story1.badge2')}
                </div>
              </div>

              <Link 
                to={`/${lang}/aboutus`}
                aria-label={t('aboutUs.ariaLabel', 'Read more about Auto Camp Drina tradition and host family')}
              >
                <Button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl flex items-center gap-2 transition-all w-full md:w-auto justify-center">
                  {t('common.readMore')} <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="relative py-24 bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url("/images/hero-hiking-sutjeska-national-park.webp")' }}
      >
        <div className="absolute inset-0 bg-primary/90 md:bg-primary/92"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="lg:w-1/3 text-left">
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs mb-4">
                <Mountain size={16} />
                <span>{t('home.exploreMountains')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Montserrat'] leading-tight">
                {t('home.stepAbove')} <br/> <span className="text-secondary">{t('home.clouds')}</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light opacity-80">
                {t('home.hikingDesc')}
              </p>
              
              <div className="flex flex-col gap-4 mb-10">
                <FeatureRow icon={Compass} title={t('home.expertGuides')} subtitle={t('home.expertGuidesDesc')} />
                <FeatureRow icon={Car} title={t('home.offRoadTransport')} subtitle={t('home.offRoadTransportDesc')} />
              </div>

              <Link to={`/${lang}/hiking`}>
                <Button variant="ghost" className="px-6 text-secondary hover:text-white hover:bg-white/10">
                  {t('home.allTours')}
                </Button>
              </Link>
            </div>

            <div className="lg:w-2/3 w-full h-[450px]">
              <HikingSlider slides={hikingTours} />
            </div>
          </div>
        </div>
      </section>

      <CampingPromo openBooking={openBooking} />
      <ReviewsSection />
      <FAQTeaser category="all" />
    </>
  );
};

const FeatureRow = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center gap-4 text-gray-300">
    <div className="bg-white/5 p-2 rounded-lg backdrop-blur-sm border border-white/10">
      <Icon size={20} className="text-accent"/>
    </div>
    <div>
      <span className="block font-bold text-white">{title}</span>
      <span className="text-xs opacity-70">{subtitle}</span>
    </div>
  </div>
);

export default HomePage;