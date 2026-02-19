import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'; 
import { useTranslation } from 'react-i18next';

export const ReviewsSection = () => {
  const { t } = useTranslation();
  const reviews = t('reviews', { returnObjects: true });

  const [currentReview, setCurrentReview] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const minSwipeDistance = 50; 

  useEffect(() => {
    if (reviews?.length > 0) {
      const reviewInterval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, 8000); 
      return () => clearInterval(reviewInterval);
    }
  }, [currentReview, reviews?.length]);

  const nextSlide = () => setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const handleManualChange = (index) => setCurrentReview(index);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
    
    setTouchEnd(null);
    setTouchStart(null);
  };
  
  if (!reviews?.length || !reviews[currentReview]) {
    return <div className="py-20 text-center text-gray-500 italic">No reviews loaded.</div>;
  }

  const current = reviews[currentReview];

  return (
    <section 
      className="relative py-20 flex items-center bg-fixed bg-cover bg-center overflow-hidden" 
      style={{ backgroundImage: 'url("/images/hiking-bosnia-mountain-camp.webp")' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 bg-primary/90"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-between">
          
          <button 
            onClick={prevSlide}
            className="hidden md:flex p-3 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-accent transition-all duration-300 transform hover:scale-110 flex-none"
            aria-label="Previous review"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="flex-1 max-w-4xl mx-auto px-4 overflow-hidden flex flex-col">
            
            <div className="mb-8 animate-pulse flex-none">
              <div className="flex items-center justify-center gap-4 md:gap-8 mb-12 flex-none opacity-90">
                <div className="h-[1px] w-8 md:w-24 bg-gradient-to-r from-transparent to-accent"></div>
                  <span className="text-accent text-2xl md:text-4xl font-black font-['Montserrat'] tracking-[0.5em] uppercase leading-none pl-[0.5em]">
                    Reviews
                  </span>
                <div className="h-[1px] w-8 md:w-24 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
            </div>
            
            <div key={currentReview} className="animate-fade-in-up flex flex-col">
              
              <div className="min-h-[270px] md:min-h-[280px] flex flex-col justify-center">
                <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 font-['Montserrat'] tracking-tight drop-shadow-lg">
                  {current.title}
                </h2>
                
                <p className="text-lg md:text-2xl font-light italic opacity-90 leading-relaxed font-['Montserrat'] line-clamp-7 md:line-clamp-none">
                  "{current.text}"
                </p>
              </div>

              <div className="mt-8 flex-none">
                <div className="flex justify-center gap-3 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" className="text-accent" />
                  ))}
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="font-bold uppercase tracking-[0.2em] text-sm text-accent flex items-center justify-center gap-3">
                    {current.author} 
                    {current.countryCode && (
                      <img 
                        src={`https://flagcdn.com/${current.countryCode}.svg`} 
                        alt={current.countryCode}
                        width="32"
                        height="24"
                        loading="lazy"
                        className="rounded shadow-md border border-white/50"
                      />
                    )}
                  </div>

                  <div className="flex justify-center gap-4 mt-1">
                    {current.link && (
                      <ReviewSource href={current.link} label={current.source} />
                    )}
                    {current.googleLink && (
                      <ReviewSource href={current.googleLink} label={current.googleSource} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="hidden md:flex p-3 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-accent transition-all duration-300 transform hover:scale-110 flex-none"
            aria-label="Next review"
          >
            <ChevronRight size={40} />
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          {reviews.map((_, index) => (
            <button 
              key={index} 
              onClick={() => handleManualChange(index)}
              className="p-3 group focus:outline-none"  
              aria-label={`Go to review ${index + 1}`}
            >
              <div className={`h-3 w-3 rounded-full transition-all duration-500 ${
                index === currentReview ? 'bg-accent w-8' : 'bg-white/20 w-2 group-hover:bg-white/50'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewSource = ({ href, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-sm text-gray-400 hover:text-white transition flex items-center gap-1 opacity-70 hover:opacity-100"
  >
    <ExternalLink size={16} /> {label}
  </a>
);