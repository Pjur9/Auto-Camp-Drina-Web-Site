import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { 
  MapPin, Clock, Mountain, CheckCircle, 
  BookOpen, ChevronRight, X, Flag, Calendar, ChevronUp, ChevronDown 
} from 'lucide-react';
import { Button } from '../../../shared/ui/Button';

export const PackageCard = memo(({ 
  item, 
  type = 'rafting', 
  onBook, 
  layout = 'vertical', 
  onShowDetails, 
  reversed = false,
  isItineraryOpen = false, 
  onToggle = () => {} 
}) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  if (layout === 'vertical') {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100 transform hover:-translate-y-1 relative max-w-[440px] mx-auto">
        
        <div className="relative h-72 overflow-hidden shrink-0">
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-md uppercase tracking-wider">
            {type === 'rafting' ? item.price : item.level}
          </div>
          <img 
            src={item.image} 
            alt={`${item.title} - Auto Camp Drina`} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="flex items-center gap-1 text-xs font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
              <MapPin size={12} aria-hidden="true" /> NP Sutjeska / Tara
            </p>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col relative">
          <h3 className="text-xl font-bold text-primary leading-tight mb-2">{item.title}</h3>
          
          {type === 'hiking' && item.details ? (
            <div className="mb-4 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-secondary" aria-hidden="true" /> {item.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Mountain size={14} className="text-secondary" aria-hidden="true" /> {item.level}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm mb-4 font-semibold uppercase tracking-wider">{item.duration}</p>
          )}
          
          <p className="text-gray-600 text-sm mb-6 line-clamp-3">{item.description}</p>
          
          <div className="mt-auto pt-4 border-t border-gray-50 flex flex-col gap-2">
            {type === 'hiking' ? (
              <Button 
                variant="outline" 
                className="w-full !text-secondary !border-secondary hover:!bg-primary hover:!text-white flex justify-center items-center gap-2" 
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                aria-label={isItineraryOpen ? `Close itinerary` : `View full itinerary`}
              >
                <BookOpen size={16} aria-hidden="true" /> {isItineraryOpen ? t('common.closePlan') : t('common.planTour')}
                {isItineraryOpen ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
              </Button>
            ) : (
              <Button 
                variant="outline" 
                aria-label={t('common.planTour')}
                className="w-full !text-secondary !border-secondary hover:!bg-gray-50 hover:!text-primary" 
                onClick={() => onShowDetails(item)}
              >
                {t('common.planTour')}
              </Button>
            )}

            <Button
              aria-label={t('common.bookAdventure')} 
              variant="primary" 
              className="w-full justify-center bg-accent hover:bg-accent-hover text-white border-none shadow-md active:scale-95 transition-transform" 
              onClick={() => onBook(item.title)}
            >
              {t('common.bookAdventure')}
            </Button>
          </div>
        </div>

        <div 
          className={`absolute inset-0 bg-white z-50 flex flex-col transition-transform duration-300 ease-in-out ${isItineraryOpen ? 'translate-y-0' : 'translate-y-full'}`}
          role="dialog" 
          aria-modal="true"
        >
          <div className="h-16 px-4 bg-primary text-white flex justify-between items-center shadow-md shrink-0">
            <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wide">
              <Flag size={16} className="text-secondary" aria-hidden="true" />
              {t('common.planTour')}
            </div>
            
            <button 
              aria-label={t('common.closePlan')}
              onClick={(e) => { e.stopPropagation(); onToggle(); }} 
              className="p-2 bg-accent hover:bg-accent-hover rounded-full transition-colors text-white"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 bg-gray-50 custom-scrollbar">
            {item.fullItinerary?.length > 0 ? (
              <div className="relative border-l-2 border-secondary/30 ml-2 space-y-6 pb-6">
                {item.fullItinerary.map((step, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-white" />
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{step}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 text-center opacity-60">
                <MapPin size={48} className="mb-4" aria-hidden="true" />
                <p>Itinerary details coming soon...</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-white shrink-0">
            <Button 
              variant="outline" 
              className="w-full justify-center border-secondary text-secondary hover:bg-secondary hover:text-white"
              aria-label={t('common.closePlanAria', 'Close tour itinerary overlay')}
              onClick={onToggle}
            >
              {t('common.closePlan')} 
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} border border-gray-100 h-full`}>
      <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden group">
        <img 
          src={item.image} 
          alt={`${item.title} - Auto Camp Drina`} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
          {item.duration}
        </div>
      </div>
      
      <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">{item.title}</h3>
            <div className="hidden md:flex flex-col items-end">
              <span className="text-3xl font-bold text-secondary">{item.price}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base border-l-4 border-secondary pl-4">
            {item.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {(item.features || item.details || []).map((feat, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
                <CheckCircle size={16} className="text-secondary mr-2 flex-shrink-0" aria-hidden="true" />
                {feat}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 mt-auto">
          <button
            aria-label={t('common.planTour')}
            onClick={() => onShowDetails(item)} 
            className="px-6 py-3 rounded-md font-semibold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            <BookOpen size={18} aria-hidden="true" /> {t('common.planTour')}
          </button>
          
          <Button
            aria-label={t('common.bookAdventure')}
            className="flex-1 justify-center text-center bg-accent hover:bg-accent-hover text-white border-none shadow-md active:scale-95 transition-transform" 
            onClick={() => onBook(item.title)} 
            icon={ChevronRight}
          >
            {t('common.bookAdventure')}
          </Button> 
        </div>
      </div>
    </div>
  );
});