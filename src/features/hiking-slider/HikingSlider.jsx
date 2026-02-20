import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom'; 
import { ArrowRight, Zap, Clock } from 'lucide-react';

export const HikingSlider = ({ slides, lang }) => {
  const { t } = useTranslation();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const MIN_SWIPE_DISTANCE = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]); 

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > MIN_SWIPE_DISTANCE) nextSlide();
    else if (distance < -MIN_SWIPE_DISTANCE) prevSlide();
    setTouchEnd(null);
    setTouchStart(null);
  };

  const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

  const getSlideClass = (index) => {
    const base = "absolute top-0 w-full md:w-[320px] lg:w-[350px] h-full transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-xl border border-white/10 ";
    
    if (index === currentIndex) return base + "left-1/2 -translate-x-1/2 z-20 scale-100 opacity-100";
    if (index === prevIndex) return base + "left-1/2 -translate-x-[130%] md:-translate-x-[110%] z-10 scale-90 opacity-40 cursor-pointer";
    if (index === nextIndex) return base + "left-1/2 translate-x-[30%] md:translate-x-[10%] z-10 scale-90 opacity-40 cursor-pointer";
    
    return base + "left-1/2 -translate-x-1/2 scale-50 opacity-0 z-0 pointer-events-none"; 
  };

  if (!slides?.length) return null;

  return (
    <div className="relative h-[450px] w-full flex justify-center items-center perspective-1000 mx-auto max-w-[300px]">
      <div 
        className="relative w-full h-full flex justify-center items-center" 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id || index} 
            className={getSlideClass(index)}
            onClick={() => {
              if (index === prevIndex) prevSlide();
              if (index === nextIndex) nextSlide();
            }}
          >
            <div className="bg-white h-full flex flex-col">
              <div className="h-56 overflow-hidden relative shrink-0">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute top-4 left-4 bg-accent px-3 py-1 rounded-lg text-sm font-bold text-white uppercase tracking-wide flex items-center gap-1 shadow-lg border border-white/20">
                  <Zap size={14} /> {slide.level}
                </div>
              </div>

              <div className="p-6 relative flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-black mb-2 line-clamp-1">{slide.title}</h3>
                <p className="text-gray-700 text-xs mb-4 line-clamp-2 leading-relaxed font-medium flex-grow">{slide.description}</p>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex items-center gap-3 text-xs text-accent font-bold">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {slide.duration}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/${lang}/hiking`}
                    onClick={(e) => e.stopPropagation()} 
                    className="text-accent font-bold text-sm flex items-center gap-1 hover:text-accent-hover transition-colors"
                  >
                    {t('common.details')} <ArrowRight size={16}/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};