import React from 'react';
import { useTranslation } from 'react-i18next';
import { X, Activity, CheckCircle } from 'lucide-react';
import { Modal } from '../../shared/ui/Modal';
import { Button } from '../../shared/ui/Button';

export const PackageDetailsModal = ({ isOpen, onClose, pkg }) => {
  const { t } = useTranslation();

  if (!pkg) return null;

  const handleBookClick = () => {
    onClose();
    if (window.openBooking) {
      window.openBooking(pkg.title);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl overflow-hidden p-0">
      <div className="relative h-56 bg-gray-200 shrink-0">
        <img 
          src={pkg.image} 
          className="w-full h-full object-cover" 
          alt={pkg.title} 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Zatvori"
        >
          <X size={24} />
        </button>

        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-3xl font-bold font-['Montserrat'] drop-shadow-md">
            {pkg.title}
          </h3>
          <p className="font-semibold text-secondary flex items-center gap-2">
            {pkg.duration} <span className="opacity-50">•</span> {pkg.price}
          </p>
        </div>
      </div>
      
      <div className="p-8 overflow-y-auto custom-scrollbar">
        
        <section className="mb-8">
          <h4 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
            <Activity className="text-secondary" size={20} /> 
            {t('common.detailedPlanTitle')}
          </h4>
          
          {pkg.fullItinerary?.length > 0 ? (
            <div className="relative pl-4 border-l-2 border-primary/20 space-y-6">
              {pkg.fullItinerary.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-secondary ring-4 ring-white" />
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic px-2">
              {t('common.planSoon')}
            </p>
          )}
        </section>

        <section className="pt-6 border-t border-gray-100">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
            {t('common.includedInPriceTitle')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {(pkg.features || []).map((feature, i) => (
              <span 
                key={i} 
                className="bg-secondary/5 text-secondary px-3 py-1.5 rounded-lg text-sm font-semibold border border-secondary/10 flex items-center gap-2"
              >
                <CheckCircle size={14} /> {feature}
              </span>
            ))}
          </div>
        </section>
      </div>

      <footer className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
        <p className="text-sm text-gray-500 hidden sm:block font-medium">
          {t('common.likePlan')}
        </p>
        <Button 
          onClick={handleBookClick} 
          className="w-full sm:w-auto shadow-lg"
        >
          {t('common.bookThisPackage')}
        </Button>
      </footer>

    </Modal>
  );
};