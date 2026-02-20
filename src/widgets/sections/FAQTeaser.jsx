import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { faqItems } from '../../entities/faq/faqData';

export const FAQTeaser = ({ category = 'all', lang }) => {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState(null);
  const currentLang = lang

  const displayItems = useMemo(() => {
    const mapFaqContent = (item) => ({
      ...item,
      question: t(`faq.questions.${item.key}.q`),
      answer: t(`faq.questions.${item.key}.a`)
    });

    if (category !== 'all') {
      return faqItems
        .filter(item => item.category === category)
        .slice(0, 4)
        .map(mapFaqContent);
    }

    const homeCategories = ['rafting', 'hiking', 'camp', 'logistics'];
    return homeCategories
      .map(cat => {
        const item = faqItems.find(i => i.category === cat);
        return item ? mapFaqContent(item) : null;
      })
      .filter(Boolean);
  }, [category, t]);

  const toggleItem = (id) => setOpenItem(openItem === id ? null : id);

  return (
    <section className="py-20 bg-surface border-t border-primary/5">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-['Montserrat']">
            {t('faq.teaserTitle')}
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="space-y-3 mb-10">
          {displayItems.map((item) => {
            const isOpen = openItem === item.id;
            
            return (
              <div 
                key={item.id} 
                className={`bg-white rounded-xl border transition-all duration-300 ${
                  isOpen ? 'border-secondary shadow-md' : 'border-gray-200 hover:border-secondary/30'
                }`}
              >
                <button 
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between items-start p-5 text-left focus:outline-none group"
                >
                  <span className={`font-semibold pr-4 transition-colors break-words ${
                    isOpen ? 'text-primary' : 'text-gray-700 group-hover:text-primary'
                  }`}>
                    {item.question}
                  </span>
                  
                  <div className="shrink-0 pt-1">
                    {isOpen ? (
                      <ChevronUp className="text-accent" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400 group-hover:text-accent" size={20} />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`px-5 text-gray-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px] pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-gray-50 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link 
            to={`/${currentLang}/faq`}
            onClick={() => window.scrollTo(0, 0)}
            className="text-primary font-bold hover:text-accent transition inline-flex items-center justify-center gap-2 mx-auto group border-b-2 border-transparent hover:border-accent pb-1"
          >
            {t('faq.viewAll')}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};