import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { User, Mail, MessageSquare, Send, HelpCircle, CheckCircle, PartyPopper } from 'lucide-react';
import { Modal, ModalHeader } from '../../shared/ui/Modal';
import { Button } from '../../shared/ui/Button';

export const QuestionModal = ({ isOpen, onClose }) => {
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
    const TEMPLATE_ID = 'template_xuj3pn4'; 
    const PUBLIC_KEY = 'HTPSgrGgphem-u5Ag';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSuccess(true);
        e.target.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert(t('contact.errorMessage', 'Greška prilikom slanja. Pokušajte ponovo.'));
      })
      .finally(() => setIsSending(false));
  };

  const fieldClasses = "w-full pl-10 pr-4 py-3 border border-green-100 rounded-lg bg-surface-muted text-black placeholder-gray-500 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition shadow-sm hover:border-green-200";

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="max-w-md">
      {!isSuccess && <ModalHeader title={t('contact.title')} onClose={handleClose} icon={HelpCircle} />}
      
      <div className="p-6 md:p-8 bg-white overflow-y-auto custom-scrollbar">
        {!isSuccess ? (
          <>
            <p className="text-sm text-gray-600 mb-6 text-center italic">
              {t('contact.subtitle')}
            </p>
            
            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative group">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">
                  {t('contact.fullName')}
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" />
                  <input 
                    name="user_name" 
                    type="text" 
                    required 
                    placeholder={t('contact.fullName')}
                    className={fieldClasses}
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">
                  {t('booking.labels.email')}
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" />
                  <input 
                    name="user_email" 
                    type="email" 
                    required 
                    placeholder="email@example.com"
                    className={fieldClasses}
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">
                  {t('booking.labels.message')}
                </label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-3 top-4 text-gray-400 group-focus-within:text-secondary transition-colors" />
                  <textarea 
                    name="message" 
                    required
                    className={`${fieldClasses} min-h-[150px] resize-none pt-4 pb-4`} 
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>
              </div>

              <button
                aria-label={t('booking.labels.send')} 
                type="submit" 
                disabled={isSending}
                className={`w-full text-white font-bold py-4 rounded-lg transition shadow-lg mt-4 flex items-center justify-center gap-2 uppercase tracking-widest text-sm
                  ${isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-accent hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.99]'}`}
              >
                {isSending ? 'Slanje...' : t('booking.labels.send')} 
                {!isSending && <Send size={18} />}
              </button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <CheckCircle size={44} strokeWidth={3} />
            </div>
            
            <h3 className="text-2xl font-black text-primary mb-4 font-['Montserrat'] uppercase tracking-tight">
                {t('multiDay.modal.successTitle')}
            </h3>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-8 italic">
                {t('multiDay.modal.successText')}
            </p>

            <Button aria-label={t('common.close')} onClick={handleClose} className="w-full py-4 rounded-2xl font-black shadow-lg">
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