import React, { useState } from 'react';
import { X, Phone, Mail, CheckCircle, PartyPopper, Calendar } from 'lucide-react';
import { Modal } from '../../shared/ui/Modal';
import { Button } from '../../shared/ui/Button';
import emailjs from '@emailjs/browser';

export const CreateModal = ({ isOpen, onClose, selectedIds, totalPrice, activities, t }) => {
    const [formData, setFormData] = useState({ 
        name: '', 
        startDate: '', 
        endDate: '', 
        email: '' 
    });
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleClose = () => {
        setIsSuccess(false);
        setFormData({ name: '', startDate: '', endDate: '', email: '' });
        onClose();
    };

    const handleEmail = async () => {
        if (!formData.name || !formData.email || !formData.startDate || !formData.endDate) {
            alert(t('multiDay.modal.validationError', 'Molimo popunite sva polja.'));
            return;
        }

        setIsSending(true);

        const activityNames = activities
            .filter(a => selectedIds.includes(a.id))
            .map(a => t(`multiDay.builder.activities.${a.id}`))
            .join(', ');

        const fullAdventureDetails = `
            AVANTURA: Kreiraj svoju avanturu
            ODABRANE AKTIVNOSTI: ${activityNames}
            PERIOD: ${formData.startDate} do ${formData.endDate}
            CENA: €${totalPrice} po osobi
        `;

        const templateParams = {
            title: "Upit za Avanturu",
            user_name: formData.name,
            user_email: formData.email,
            message: fullAdventureDetails
        };

        try {
            await emailjs.send(
                'service_872rqu8', 
                'template_xuj3pn4', 
                templateParams, 
                'HTPSgrGgphem-u5Ag'
            );
            setIsSuccess(true);
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert(t('multiDay.modal.errorMsg', "Greška pri slanju. Pokušajte ponovo."));
        } finally {
            setIsSending(false);
        }
    };

    const handleWhatsApp = () => {
        const selectedNames = activities
            .filter(a => selectedIds.includes(a.id))
            .map(a => t(`multiDay.builder.activities.${a.id}`))
            .join(', ');

        const message = `${t('multiDay.modal.title')} - AC Drina\n\n` +
            `${t('multiDay.modal.summary')}: ${selectedNames}\n` +
            `${t('multiDay.modal.total')}: €${totalPrice}\n` +
            `${t('multiDay.modal.name')}: ${formData.name}\n` +
            `${t('multiDay.modal.date')}: ${formData.startDate} - ${formData.endDate}`;

        window.open(`https://wa.me/38766230990?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <Modal 
            isOpen={isOpen} 
            onClose={handleClose} 
            className="max-w-xl p-0 overflow-y-auto max-h-[92vh] md:max-h-none rounded-[2rem] md:rounded-[2.5rem] scrollbar-hide"
        >
            {!isSuccess ? (
                <>
                    <div className="bg-dark p-6 md:p-8 text-white relative">
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight font-['Montserrat'] mb-1 md:mb-2">
                            {t('multiDay.modal.title')}
                        </h3>
                        <p className="text-accent text-lg md:text-xl font-bold leading-tight">
                            {t('multiDay.modal.summary')}
                        </p>
                        <button aira-label="Close" onClick={handleClose} className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors">
                            <X size={22} />
                        </button>
                    </div>

                    <div className="p-5 md:p-8 bg-white">
                        <div className="flex flex-wrap gap-1.5 mb-6 md:mb-8">
                            {activities.filter(a => selectedIds.includes(a.id)).map(activity => (
                                <div key={activity.id} className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl">
                                    <activity.icon size={14} className="text-primary" />
                                    <span className="text-[10px] md:text-xs font-bold text-dark uppercase tracking-tighter md:tracking-normal">
                                        {t(`multiDay.builder.activities.${activity.id}`)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                            <input 
                                type="text" 
                                placeholder={t('multiDay.modal.name')}
                                className="w-full p-3.5 md:p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-primary outline-none text-sm transition-all"
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                <div className="relative">
                                    <label className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase ml-2 mb-1 block">
                                        {t('multiDay.modal.dateFrom', 'Dolazak')}
                                    </label>
                                    <input 
                                        type="date" 
                                        className="w-full p-3.5 md:p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-primary outline-none text-gray-500 text-sm"
                                        onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                                    />
                                </div>
                                <div className="relative">
                                    <label className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase ml-2 mb-1 block">
                                        {t('multiDay.modal.dateTo', 'Odlazak')}
                                    </label>
                                    <input 
                                        type="date" 
                                        className="w-full p-3.5 md:p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-primary outline-none text-gray-500 text-sm"
                                        onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                                    />
                                </div>
                            </div>

                            <input 
                                type="email" 
                                placeholder={t('multiDay.modal.email')}
                                className="w-full p-3.5 md:p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-primary outline-none text-sm"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div className="border-t pt-5 md:pt-6 flex flex-col gap-2.5 md:gap-3">
                            <div className="flex justify-between items-center mb-3 md:mb-4 px-1">
                                <span className="text-gray-400 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">{t('multiDay.modal.total')}</span>
                                <span className="text-2xl md:text-3xl font-black text-accent">€{totalPrice}</span>
                            </div>

                            <button 
                                aria-label="WhatsApp"
                                onClick={handleWhatsApp}
                                className="w-full bg-[#25D366] text-white py-3.5 md:py-4 rounded-2xl font-black flex items-center justify-center gap-2.5 md:gap-3 hover:scale-[1.01] transition-all shadow-lg active:scale-95 text-sm md:text-base"
                            >
                                <Phone size={18} /> {t('multiDay.modal.whatsappBtn')}
                            </button>
                            
                            <button 
                                aria-label="Email"
                                onClick={handleEmail}
                                disabled={isSending}
                                className="w-full bg-primary text-white py-3.5 md:py-4 rounded-2xl font-black flex items-center justify-center gap-2.5 md:gap-3 hover:scale-[1.01] transition-all shadow-lg active:scale-95 text-sm md:text-base"
                            >
                                {isSending ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <><Mail size={16} /> {t('multiDay.modal.emailBtn')}</>
                                )}
                            </button>
                        </div>
                    </div>
                </>
            ) : (

                <div className="p-10 md:p-12 bg-white text-center flex flex-col items-center animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-5 md:mb-6 shadow-inner">
                        <CheckCircle size={36} md:size={44} strokeWidth={3} />
                    </div>
                    
                    <h3 className="text-xl md:text-3xl font-black text-primary mb-3 md:mb-4 font-['Montserrat'] uppercase tracking-tight">
                        {t('multiDay.modal.successTitle', 'Hvala, avanturisto!')}
                    </h3>
                    
                    <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xs md:max-w-sm">
                        {t('multiDay.modal.successText', 'Tvoj upit je uspešno poslat. Naš tim će te kontaktirati u najkraćem roku.')}
                    </p>

                    <Button
                        aria-label={t('common.close', 'Zatvori')}
                       onClick={handleClose} className="w-full py-3.5 md:py-4 rounded-2xl font-black text-sm md:text-base shadow-xl">
                        {t('common.close', 'Zatvori')}
                    </Button>
                    
                    <div className="mt-6 md:mt-8 flex items-center gap-2 text-accent font-bold text-[10px] md:text-sm uppercase tracking-widest animate-bounce">
                        <PartyPopper size={16} /> Vidimo se na Drini!
                    </div>
                </div>
            )}
        </Modal>
    );
};