import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { 
  User, Phone, Calendar, Mail, HelpCircle, 
  Bed, Users, MessageSquare, Send, CheckCircle, PartyPopper 
} from 'lucide-react';
import { Modal, ModalHeader } from '../../shared/ui/Modal';
import { Button } from '../../shared/ui/Button';

export const BookingModal = ({ isOpen, onClose, preselectedPackage }) => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = 'service_872rqu8'; 
    const TEMPLATE_ID = 'template_r03n51c';
    const PUBLIC_KEY = 'HTPSgrGgphem-u5Ag';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSuccess(true);
        e.target.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert(t('booking.errorMessage', 'Greška prilikom slanja. Pokušajte ponovo.'));
      })
      .finally(() => setIsSending(false));
  };

  const fieldClasses = "w-full pl-10 pr-4 py-3 border border-green-100 rounded-lg bg-surface-muted text-black placeholder-gray-500 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition shadow-sm hover:border-green-200";

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="max-w-2xl">
      {!isSuccess && <ModalHeader title={t('booking.title')} onClose={handleClose} icon={Calendar} />}
      
      <div className="p-6 md:p-8 bg-white max-h-[85vh] overflow-y-auto custom-scrollbar">
        {!isSuccess ? (
          <>
            <p className="text-sm text-gray-600 mb-6 text-center italic">
              {t('booking.subtitle')}
            </p>
            
            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField 
                  name="user_name" 
                  label={t('booking.labels.name')} 
                  placeholder={t('booking.labels.name')} 
                  icon={User} 
                  required 
                  className={fieldClasses}
                />
                <InputField 
                  name="user_lastname" 
                  label={t('booking.labels.lastName')} 
                  placeholder={t('booking.labels.lastName')} 
                  icon={User} 
                  required 
                  className={fieldClasses}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField 
                  name="user_email" 
                  label={t('booking.labels.email')} 
                  placeholder="email@example.com" 
                  icon={Mail} 
                  type="email"
                  required 
                  className={fieldClasses}
                />
                <InputField 
                  name="phone" 
                  label={t('booking.labels.phone')} 
                  placeholder="+387..." 
                  icon={Phone} 
                  type="tel"
                  required 
                  className={fieldClasses}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectField 
                  name="activity"
                  label={t('booking.labels.activity')}
                  icon={HelpCircle}
                  defaultValue={preselectedPackage || "rafting"}
                  className={fieldClasses}
                  options={[
                    { value: "sleep", label: t('booking.activities.sleep') },
                    { value: "rafting", label: t('booking.activities.rafting') },
                    { value: "hiking", label: t('booking.activities.hiking') },
                    { value: "canyoning", label: t('booking.activities.canyoning') },
                    { value: "other", label: t('booking.activities.other') }
                  ]}
                />

                <SelectField 
                  name="accommodation"
                  label={t('booking.labels.accommodation')}
                  icon={Bed}
                  className={fieldClasses}
                  options={[
                    { value: "bungalowNoToilet", label: t('booking.accommodations.bungalowNoToilet') },
                    { value: "bungalowToilet", label: t('booking.accommodations.bungalowToilet') },
                    { value: "tent", label: t('booking.accommodations.tent') },
                    { value: "rv", label: t('booking.accommodations.rv') }
                  ]}
                />
              </div>

              <div className="space-y-5">
                <InputField 
                    name="guests" 
                    label={t('booking.labels.guests')} 
                    placeholder="4" 
                    icon={Users} 
                    type="number"
                    min="1"
                    className={fieldClasses}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">
                      {t('multiDay.modal.dateFrom')}
                    </label>
                    <div className="relative group">
                      <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" />
                      <input 
                        type="date" 
                        name="date_arrival" 
                        required
                        className={`${fieldClasses} pl-10`} 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">
                      {t('multiDay.modal.dateTo')}
                    </label>
                    <div className="relative group">
                      <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" />
                      <input 
                        type="date" 
                        name="date_departure" 
                        required
                        className={`${fieldClasses} pl-10`} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <MessageSquare size={18} className="absolute left-3 top-4 text-gray-400 group-focus-within:text-secondary transition-colors" />
                <textarea 
                  name="message" 
                  className={`${fieldClasses} min-h-[100px] resize-none pt-4 pb-4`} 
                  placeholder={t('booking.labels.message')}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSending}
                className={`w-full text-white font-bold py-4 rounded-lg transition shadow-lg mt-4 flex items-center justify-center gap-2 uppercase tracking-widest text-sm
                  ${isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-accent hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.99]'}`}
              >
                {isSending ? 'Sending...' : t('booking.labels.send')} 
                {!isSending && <Send size={18} />}
              </button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <CheckCircle size={44} strokeWidth={3} />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 font-['Montserrat'] uppercase tracking-tight">
                {t('multiDay.modal.successTitle')}
            </h3>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-sm italic">
                {t('multiDay.modal.successText')}
            </p>

            <Button 
                onClick={handleClose} 
                className="w-full bg-dark text-white hover:bg-primary py-4 rounded-2xl font-black shadow-lg transition-all uppercase tracking-widest"
            >
                {t('common.close')}
            </Button>
            
            <div className="mt-8 flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest animate-bounce">
                <PartyPopper size={18} /> {t('multiDay.modal.footerSlogan')}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};


const InputField = ({ label, icon: Icon, type = "text", placeholder, required, min, className, name }) => (
  <div>
    <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">{label}</label>
    <div className="relative group">
      <Icon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" />
      <input 
        name={name}
        type={type} 
        required={required} 
        min={min}
        className={className}
        placeholder={placeholder} 
      />
    </div>
  </div>
);

const SelectField = ({ label, icon: Icon, name, className, options, defaultValue }) => (
  <div>
    <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">{label}</label>
    <div className="relative group">
      <Icon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors pointer-events-none" />
      <select 
        name={name} 
        defaultValue={defaultValue}
        className={`${className} appearance-none cursor-pointer pl-10`}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</span>
    </div>
  </div>
);