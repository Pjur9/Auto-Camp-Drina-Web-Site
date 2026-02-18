import React, { useState, useEffect, useCallback } from 'react';
import { PackageCard } from '../../entities/package/ui/PackageCard';

export const MobileRaftingSlider = ({ packages, onBook, onShowDetails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const minSwipeDistance = 50;
  const length = packages?.length || 0;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  }, [length]);

  useEffect(() => {
    if (isPaused || length === 0) return;

    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, length, nextSlide]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }

    const distance = touchStart - touchEnd;
    
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();

    setTimeout(() => setIsPaused(false), 2000);
  };

  if (!length) return null;

  return (
    <div className="relative w-full overflow-hidden pb-12">
 
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {packages.map((pkg) => (
          <div key={pkg.id} className="w-full flex-shrink-0 px-2">
            <div className="mx-auto max-w-[340px]"> 
              <PackageCard 
                item={pkg} 
                type="rafting" 
                onBook={onBook} 
                onShowDetails={onShowDetails} 
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 py-4">
        {packages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index 
                ? 'bg-secondary w-8 h-2' 
                : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};