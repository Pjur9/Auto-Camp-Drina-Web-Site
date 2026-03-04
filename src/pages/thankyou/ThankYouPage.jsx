import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  // Dodajemo i i18n da bismo znali na kom smo jeziku
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-24">
      <CheckCircle size={80} className="text-secondary mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
        {t('thankYou.title', 'Hvala Vam!')}
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-lg">
        {t('thankYou.message', 'Vaš upit je uspješno poslat. Naš tim će Vam odgovoriti u najkraćem mogućem roku.')}
      </p>
      <Link 
        to={`/${i18n.language}`}  
        className="bg-accent px-8 py-3 rounded text-white font-bold hover:opacity-90 transition shadow-lg uppercase tracking-widest text-sm"
      >
        {t('thankYou.backHome', 'Nazad na početnu')}
      </Link>
    </div>
  );
}