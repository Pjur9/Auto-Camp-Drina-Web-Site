import React from 'react';
import { Footprints, Activity, Compass, Car } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../shared/ui/Button';

export const HikingEquipment = ({ openBooking, openQuestion }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="p-10 md:p-16 bg-primary text-white flex flex-col justify-center items-center md:items-start text-center md:text-left relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl" />
          
          <h3 className="text-3xl font-bold mb-6 font-['Montserrat'] relative z-10">
            {t('hikingEquipment.ctaTitle')}
          </h3>
          
          <p className="text-gray-300 mb-8 leading-relaxed relative z-10 text-lg">
            {t('hikingEquipment.ctaText')}
          </p>

          <Button 
            variant="primary" 
            className="self-center md:self-start bg-accent hover:bg-accent-hover text-white border-none shadow-lg shadow-orange-900/20" 
            onClick={openQuestion}
          >
            {t('hikingEquipment.ctaButton')}
          </Button>
        </div>

        <div className="p-10 md:p-16 bg-surface grid grid-cols-1 sm:grid-cols-2 gap-10 text-center sm:text-left">
          <EquipmentItem 
            icon={Footprints} 
            theme="secondary" 
            title={t('hikingEquipment.items.shoes.title')} 
            text={t('hikingEquipment.items.shoes.text')} 
          />
          <EquipmentItem 
            icon={Activity} 
            theme="primary" 
            title={t('hikingEquipment.items.clothes.title')} 
            text={t('hikingEquipment.items.clothes.text')} 
          />
          <EquipmentItem 
            icon={Compass} 
            theme="accent" 
            title={t('hikingEquipment.items.guides.title')} 
            text={t('hikingEquipment.items.guides.text')} 
          />
          <EquipmentItem 
            icon={Car} 
            theme="dark" 
            title={t('hikingEquipment.items.transport.title')} 
            text={t('hikingEquipment.items.transport.text')} 
          />
        </div>

      </div>
    </div>
  );
};

const EquipmentItem = ({ icon: Icon, theme, title, text }) => {
  const themes = {
    secondary: "bg-secondary/10 text-secondary",
    primary: "bg-primary-light/10 text-primary-light",
    accent: "bg-accent/10 text-accent",
    dark: "bg-primary/5 text-primary",
  };

  return (
    <div className="flex flex-col gap-4 items-center sm:items-start group">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-1 transition-all duration-300 group-hover:scale-110 ${themes[theme]}`}>
        <Icon size={28} strokeWidth={1.5}/>
      </div>
      <div>
        <h4 className="font-bold text-primary text-lg mb-2">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};