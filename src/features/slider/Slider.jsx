import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const StandardSlider = ({ 
  items, 
  renderItem, 
  autoplayDelay = 5000,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
  dotLabel = "Go to slide"
}) => {
  const length = items?.length || 0;
  const minSwipeDistance = 50;
  const timerRef = useRef(null);

  const getVisibleCount = useCallback(() => {
    if (typeof window === 'undefined') return itemsPerView.desktop;
    if (window.innerWidth < 768) return itemsPerView.mobile;
    if (window.innerWidth < 1024) return itemsPerView.tablet;
    return itemsPerView.desktop;
  }, [itemsPerView]);

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const newVisible = getVisibleCount();
      setVisibleCount(newVisible);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, length - newVisible)));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisibleCount, length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const isAtEnd = prev >= length - visibleCount;
      return isAtEnd ? 0 : prev + 1;
    });
  }, [length, visibleCount]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const isAtStart = prev === 0;
      return isAtStart ? Math.max(0, length - visibleCount) : prev - 1;
    });
  };

  const resetAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (length > visibleCount) {
      timerRef.current = setInterval(nextSlide, autoplayDelay);
    }
  }, [nextSlide, autoplayDelay, length, visibleCount]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (window.interactionTimeout) clearTimeout(window.interactionTimeout);
    };
  }, [resetAutoplay, currentIndex]);

  const handleInteraction = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (window.interactionTimeout) clearTimeout(window.interactionTimeout);
    window.interactionTimeout = setTimeout(() => {
      resetAutoplay();
    }, 1000); 
  };

  const onTouchStart = (e) => { 
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientX); 
    handleInteraction(); 
  };
  
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!length) return null;

  return (
    <div className="relative w-full group">
      {length > visibleCount && (
        <>
          <button 
            onClick={() => { prevSlide(); handleInteraction(); }}
            aria-label={prevLabel}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white shadow-xl text-primary hidden md:flex hover:bg-accent hover:text-white transition-all border border-gray-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => { nextSlide(); handleInteraction(); }}
            aria-label={nextLabel}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white shadow-xl text-primary hidden md:flex hover:bg-accent hover:text-white transition-all border border-gray-100"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` 
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="px-2 md:px-3 h-full">
                {renderItem(item)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {length > visibleCount && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: length - visibleCount + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); handleInteraction(); }}
              aria-label={`${dotLabel} ${i + 1}`}
              aria-current={currentIndex === i ? "true" : "false"}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'bg-accent w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};