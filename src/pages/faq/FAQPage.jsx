import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';

import { faqCategories, faqItems } from '../../entities/faq/faqData'; 
import { Container } from '../../shared/ui/Container';
import { Button } from '../../shared/ui/Button'; 

const FAQPage = ({ openBooking, openQuestion }) => {
  const { t } = useTranslation();
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItem, setOpenItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    const translated = faqItems.map(item => ({
      ...item,
      question: t(`faq.questions.${item.key}.q`),
      answer: t(`faq.questions.${item.key}.a`)
    }));

    return translated.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, t]);

  const toggleItem = (id) => setOpenItem(openItem === id ? null : id);

  return (
    <div className="pt-32 md:pt-44 pb-24 min-h-screen bg-surface relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#022c22 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <Container className="relative z-10">
        
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6 uppercase animate-pulse">
            <Sparkles size={16} />
            {t('faq.badge')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-primary mb-8 font-['Montserrat'] tracking-tighter leading-tight">
            {t('faq.title', 'Često Postavljana Pitanja')}
          </h1>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('faq.subtitle', 'Sve informacije o raftingu, planinarenju i dolasku na jednom mjestu.')}
          </p>
          
          <div className="mt-12 relative max-w-2xl mx-auto group">
            <input 
              type="text" 
              placeholder={t('faq.searchPlaceholder', 'Pretraži pitanja...')}
              className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-gray-100 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all bg-white shadow-xl text-primary text-lg"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-secondary transition-colors" size={24}/>
          </div>
        </header>

        <nav className="flex flex-wrap justify-center gap-4 mb-16">
          {faqCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-300 border-2
                  ${isActive 
                    ? 'bg-primary text-white border-primary shadow-[0_10px_25px_rgba(2,44,34,0.2)] scale-105' 
                    : 'bg-white/50 backdrop-blur-sm text-primary/60 border-transparent hover:border-secondary/30 hover:text-primary'}`}
              >
                <cat.icon size={18} className={isActive ? 'text-secondary' : 'text-primary/40'} />
                {t(`faq.categories.${cat.id}`)}
              </button>
            );
          })}
        </nav>

        <div className="max-w-4xl mx-auto space-y-5">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const isOpen = openItem === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-3xl border-2 transition-all duration-500 ${
                    isOpen ? 'border-secondary/20 shadow-2xl translate-x-2' : 'border-gray-50 hover:border-secondary/20 shadow-sm'
                  }`}
                >
                  <button 
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex justify-between items-center p-7 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-xl pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-gray-700'}`}>
                      {item.question}
                    </span>
                    <div className={`p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-secondary text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  
                  <div className={`px-7 text-gray-600 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-6 border-t border-gray-50 text-lg italic">
                      <span className="text-secondary font-bold mr-2">—</span>
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 text-lg">
                {t('faq.noResults', 'Nismo pronašli rezultate za vašu pretragu.')}
              </p>
            </div>
          )}
        </div>

        <div className="mt-20 md:mt-32 bg-primary-dark rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl mx-4">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/20 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 rotate-3">
                <MessageCircle size={32} className="text-accent" />
              </div>
              
              <h3 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6 font-['Montserrat'] tracking-tight leading-tight">
                {t('faq.ctaTitle', 'Niste pronašli odgovor?')}
              </h3>
              
              <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-12 max-w-xl mx-auto">
                {t('faq.ctaText', 'Naš tim je tu za vas 24/7.')}
              </p>
              
              <Button 
                variant="primary" 
                onClick={openQuestion} 
                className="bg-accent hover:bg-accent-hover text-white border-none 
                          px-8 py-4 text-base      /* Mobilni: manji padding i font */
                          md:px-12 md:py-5 md:text-xl /* Desktop: tvoj originalni stil */
                          font-black rounded-xl md:rounded-2xl 
                          shadow-[0_10px_20px_rgba(249,115,22,0.2)] md:shadow-[0_20px_40px_rgba(249,115,22,0.3)] 
                          transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                {t('faq.contactUs')}
              </Button>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default FAQPage;