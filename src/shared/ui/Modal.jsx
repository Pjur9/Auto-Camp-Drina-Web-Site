import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, children, className = '' }) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="presentation"
    >
      <div 
        className={`bg-white rounded-xl w-full relative shadow-2xl transform transition-all scale-100 animate-fade-in-up max-h-[90vh] flex flex-col ${className}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
};

export const ModalHeader = ({ title, onClose, icon: Icon }) => (
  <div className="bg-primary p-4 flex justify-between items-center text-white rounded-t-xl shrink-0">
    <h3 className="font-bold text-lg flex items-center gap-2">
      {Icon && <Icon size={18} aria-hidden="true" />} 
      {title}
    </h3>
    
    <button 
      onClick={onClose} 
      className="hover:bg-white/20 p-1 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white/50" 
      aria-label="Zatvori prozor"
    >
      <X size={20} />
    </button>
  </div>
);