import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../shared/ui/Button';

export const HomeHero = ({ openBooking, lang }) => {
  const { t } = useTranslation();
  const slides = t('hero.slides', { returnObjects: true });
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);

  const minSwipeDistance = 50;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const onTouchStart = (e) => {
    setDragEnd(null);
    setDragStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setDragEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!dragStart || !dragEnd) return;
    const distance = dragStart - dragEnd;
    
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
    
    setDragStart(null);
    setDragEnd(null);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  return (
    <header 
      className="relative h-[100dvh] min-h-[580px] flex flex-col overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out" 
          style={{ 
            width: `${slides.length * 100}%`, 
            transform: `translateX(-${currentSlide * (100 / slides.length)}%)` 
          }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="h-full relative flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
              <img 
                src={slide.image} 
                alt={slide.title} 
                className={`w-full h-full object-cover ${
                  index === 1 ? 'object-[75%_center]' : 'object-center'
                } md:object-center ${index === currentSlide ? 'animate-ken-burns' : ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/20 to-primary/90"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 h-full flex flex-col justify-between items-center py-6 md:py-20 pointer-events-none">
        
        <div className="animate-fade-in-up pointer-events-auto z-20 mt-20 md:mt-16 flex-none"> 
          <div className="inline-block border border-secondary/40 px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-6 bg-primary-dark/40 backdrop-blur-md max-w-[90vw]">
            <span className="text-secondary font-bold uppercase tracking-widest text-[10px] md:text-xs block truncate">
              {t('hero.tagline')}
            </span>
          </div>
        </div>

        <div 
          key={currentSlide} 
          className="flex-1 flex flex-col justify-center items-center w-full max-w-4xl mx-auto animate-fade-in-up py-4"
        >
            <h1 className="font-bold text-white mb-4 font-['Montserrat'] leading-tight drop-shadow-2xl text-center" style={{ fontSize: 'clamp(1.75rem, 8vw, 4.5rem)' }}>
                {slides[currentSlide].title}
            </h1>
            <h2 className="text-gray-100 text-sm sm:text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md text-center line-clamp-6 md:line-clamp-none">
                {slides[currentSlide].text}
            </h2>
        </div>

        <div className="pointer-events-auto z-20 flex flex-col gap-4 w-full items-center flex-none mb-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center w-full">
                <Link 
                  to={`/${lang}/rafting`} 
                  className="w-full sm:w-auto"
                  aria-label={t('hero.raftingLinkAria', 'Explore our rafting packages and adventures')}
                >
                    <Button 
                        variant="primary" 
                        className="shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-1 w-full justify-center"
                    >
                        {t('hero.explore')} <ChevronRight size={20}/>
                    </Button>
                </Link>

                <Link 
                  to={`/${lang}/camping`} 
                  className="w-full sm:w-auto"
                  aria-label={t('hero.campingLinkAria', 'View camping accommodation and facilities')}
                >
                    <Button 
                        variant="outline" 
                        className="border-white text-white hover:bg-white hover:text-primary-dark shadow-lg backdrop-blur-sm w-full justify-center" 
                    >
                        {t('hero.campBtn')}
                    </Button>
                </Link>
            </div>

            <div className="flex justify-center gap-3 mt-2">
                {slides.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }} 
                        className={`transition-all duration-300 rounded-full shadow-sm ${index === currentSlide ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-white/50 hover:bg-white'}`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
      </div>

      <button 
        onClick={prevSlide} 
        aria-label={t('hero.prevSlide', 'Previous Slide')}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-accent text-white p-3 rounded-full backdrop-blur-sm transition z-30 hidden md:block border border-white/10"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide} 
        aria-label={t('hero.nextSlide', 'Next Slide')}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-accent text-white p-3 rounded-full backdrop-blur-sm transition z-30 hidden md:block border border-white/10"
      >
        <ChevronRight size={32} />
      </button>
    </header>
  );
};