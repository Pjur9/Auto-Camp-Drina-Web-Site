import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
    Waves, Mountain, Utensils, Tent, 
    ArrowRight, CheckCircle, Calculator, Users, 
    Compass, Sun, Map, Coffee, Zap
} from 'lucide-react';

import { Container } from "../../shared/ui/Container";
import { Button } from "../../shared/ui/Button";
import { CreateModal } from "../../features/booking/CreateModal";
import { MultiDayHero } from "../../widgets/hero/MultiDayHero"; 

const ACTIVITY_PRICES = {
    rafting: 75,
    hiking: 85,
    canyoning: 90,
    jeep: 70,
    camping: 15,
};

const MultiDayPage = ({ openBooking, openQuestion }) => {
    const { t } = useTranslation();
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [activeDay, setActiveDay] = useState(1);

    useEffect(() => {
        const total = selectedActivities.reduce((sum, id) => {
            return sum + (ACTIVITY_PRICES[id] || 0);
        }, 0);
        setTotalPrice(total);
    }, [selectedActivities]);

    const toggleActivity = (id) => {
        if (selectedActivities.includes(id)) {
            setSelectedActivities(selectedActivities.filter(a => a !== id));
        } else {
            setSelectedActivities([...selectedActivities, id]);
        }
    };

    const expeditionDays = [
        { 
            day: 1, 
            icon: Sun, 
            image: "/images/autoriverside-camping-drina-bosnia.webp",
            meals: ['dinner'],
            activeBorder: "border-slate-800", 
            badgeStyle: "bg-slate-100 text-slate-700 border-slate-200",
            overlay: "from-slate-900/90 via-slate-800/30 to-transparent",
            iconColor: "text-slate-400"
        },
        { 
            day: 2, 
            icon: Waves, 
            image: "/images/rafting-home-hero.webp",
            meals: ['breakfast', 'lunch'],
            activeBorder: "border-sky-600", 
            badgeStyle: "bg-sky-100 text-sky-700 border-sky-200",
            overlay: "from-sky-900/90 via-sky-600/30 to-transparent",
            iconColor: "text-sky-400"
        },
        { 
            day: 3, 
            icon: Mountain, 
            image: "/images/trnovacko-jezero-hiking-tara.webp",
            meals: ['breakfast', 'lunch_pack', 'dinner'],
            activeBorder: "border-emerald-600", 
            badgeStyle: "bg-emerald-100 text-emerald-700 border-emerald-200",
            overlay: "from-emerald-900/60 via-emerald-600/20 to-transparent",
            iconColor: "text-emerald-400"
        },
        { 
            day: 4, 
            icon: Zap, 
            image: "/images/canyoning-hrcavka-adventure-bosnia.webp",
            meals: ['breakfast', 'dinner'],
            activeBorder: "border-orange-500", 
            badgeStyle: "bg-orange-100 text-orange-700 border-orange-200",
            overlay: "from-orange-900/60 via-orange-500/20 to-transparent",
            iconColor: "text-orange-400"
        },
        { 
            day: 5, 
            icon: Coffee, 
            image: "/images/swiming.webp",
            meals: ['breakfast', 'dinner'],
            activeBorder: "border-teal-500", 
            badgeStyle: "bg-teal-100 text-teal-700 border-teal-200",
            overlay: "from-teal-900/80 via-teal-500/20 to-transparent",
            iconColor: "text-teal-300"
        },
        { 
            day: 6, 
            icon: ArrowRight, 
            image: "/images/riverside-camping-drina-bosnia.webp",
            meals: ['breakfast'],
            activeBorder: "border-indigo-500", 
            badgeStyle: "bg-indigo-100 text-indigo-700 border-indigo-200",
            overlay: "from-indigo-900/60 via-indigo-600/10 to-transparent",
            iconColor: "text-indigo-300"
        }
    ];

    const customOptions = [
        { id: 'rafting', icon: Waves, price: ACTIVITY_PRICES.rafting },
        { id: 'hiking', icon: Mountain, price: ACTIVITY_PRICES.hiking, sub: "Zelengora, Perućica, Maglić, Trnovačko" },
        { id: 'jeep', icon: Map, price: ACTIVITY_PRICES.jeep },
        { id: 'canyoning', icon: Compass, price: ACTIVITY_PRICES.canyoning },
        { id: 'camping', icon: Tent, price: ACTIVITY_PRICES.camping },
    ];

    const [isCreateOpen, setIsCreateOpen] = useState(false);

    return (
        <div className="pt-2 pb-2 md:pt-16 md:pb-16 bg-surface min-h-screen relative overflow-x-hidden w-full">
            <MultiDayHero />

            <section className="py-20 -mt-24 relative z-20 px-2 md:px-4">
                <Container className="max-w-[1400px]">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4 bg-white px-4 py-2 rounded-full shadow-sm border border-primary/10">
                            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">
                                {t('multiDay.package5day.subtitle')}
                            </span>
                        </div>
                        
                        <h2 className="text-4xl md:text-7xl font-black text-primary-light font-['Montserrat'] tracking-tight leading-none mb-6">
                            {t('multiDay.package5day.title')} <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-accent to-primary-light">
                               {t('multiDay.package5day.title_highlight')}
                            </span>
                        </h2>
                        
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                            {t('multiDay.package5day.description')}
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[600px] w-full transition-all duration-500 ease-in-out mt-16">
                        {expeditionDays.map((item) => {
                        const dayData = t(`multiDay.package5day.days.${item.day}`, { returnObjects: true });
                        const isActive = activeDay === item.day;

                        return (
                            <div 
                                key={item.day}
                                onClick={() => setActiveDay(item.day)}
                                onMouseEnter={() => {
                                    if (window.innerWidth > 1024) setActiveDay(item.day);
                                }} 
                                className={`
                                    group relative overflow-hidden rounded-[2rem] cursor-pointer
                                    transition-[flex,height,border-color] duration-500 ease-in-out transform-gpu will-change-[flex,height]
                                    shadow-2xl 
                                    ${isActive 
                                        ? `lg:flex-[5] h-[400px] lg:h-auto border-4 ${item.activeBorder}` 
                                        : `lg:flex-[0.8] h-[90px] lg:h-auto border-2 border-white/10 opacity-100`}
                                `}
                            >
                                <img 
                                    src={item.image} 
                                    alt={dayData.title} 
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0 
                                        ${isActive ? 'scale-100' : 'scale-110 lg:grayscale-[30%]'}`}
                                />
                                
                                <div className={`absolute inset-0 bg-gradient-to-t ${isActive ? item.overlay : 'from-dark/60 via-dark/20 to-transparent'} z-10 transition-opacity duration-500`}></div>
                                
                                {!isActive && (
                                    <div className="absolute inset-0 bg-primary/20 z-[5] transition-opacity duration-500 opacity-40 lg:opacity-100"></div>
                                )}

                                <div className={`absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-20 transition-opacity duration-300 transform-gpu ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                                            <item.icon size={28} className={item.iconColor} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl md:text-4xl font-bold text-white mb-2 font-['Montserrat'] leading-tight">
                                        {dayData.title}
                                    </h3>
                                    <p className="text-gray-200 text-xs md:text-lg mb-4 max-w-xl leading-relaxed line-clamp-3 md:line-clamp-none">
                                        {dayData.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.meals.map((meal, i) => (
                                            <span 
                                                key={i} 
                                                className={`text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border backdrop-blur-sm ${item.badgeStyle}`}
                                            >
                                                {t(`multiDay.meals.${meal}`, meal)}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 z-20 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                    <span className={`text-3xl lg:text-4xl font-black z-20 text-white mb-2 drop-shadow-md transition-colors duration-300 group-hover:${item.iconColor}`}>
                                        0{item.day}
                                    </span>
                                    <span className={`z-20 font-bold uppercase tracking-[0.2em] text-[10px] lg:text-sm [writing-mode:vertical-rl] rotate-180 hidden lg:block ${item.iconColor}`}>
                                        {t('multiDay.package5day.day')}
                                    </span>
                                    <span className="lg:hidden z-20 text-white/80 font-bold text-xs mt-1">
                                        {dayData.title}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                    </div>

                    <div className="mt-12 text-center relative z-10">
                        <Button 
                            onClick={openBooking} 
                            className="relative bg-accent hover:bg-orange-500 text-white rounded-full shadow-xl shadow-accent/20 transition-all hover:scale-105 px-8 py-4 text-lg font-bold md:px-16 md:py-6 md:text-xl md:font-black"
                        >
                            {t('multiDay.package5day.cta')}
                        </Button>
                        <p className="text-gray-400 text-xs mt-4 uppercase tracking-widest font-medium">
                            {t('multiDay.package5day.spots')}
                        </p>
                    </div>
                </Container>
            </section>

            <section 
                className="py-16 md:py-24 relative bg-fixed bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/planinarenje-maglic-sutjeska.webp")' }}
            >
                <div className="absolute inset-0 bg-primary/85 md:bg-primary/90"></div>
                
                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        
                        <div className="lg:col-span-7 text-white">
                            <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-[10px] mb-4 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                                <Calculator size={14} />
                                <span>{t('multiDay.builder.tag')}</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 font-['Montserrat'] leading-[1.1] uppercase">
                                {t('multiDay.builder.titleStart')} <br/>
                                <span className="text-accent">{t('multiDay.builder.titleEnd')}</span>
                            </h2>
                            
                            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl opacity-90">
                                {t('multiDay.builder.subtitle')}
                            </p>

                            <div className="bg-accent/10 border border-accent/20 p-5 rounded-2xl mb-8 flex items-center gap-4 max-w-lg">
                                <Utensils className="text-accent shrink-0" size={20} />
                                <p className="text-gray-200 text-sm leading-snug">
                                    <span className="font-bold text-white">{t('multiDay.builder.features.foodIncludedLabel')}</span> {t('multiDay.builder.features.foodIncludedText')}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-accent" /> <span>{t('multiDay.builder.features.guides')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-accent" /> <span>{t('multiDay.builder.features.equipment')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-white rounded-[2rem] p-5 md:p-6 shadow-2xl border-t-[10px] border-primary relative">
                                
                                <div className="flex justify-between items-center mb-5">
                                    <h3 className="text-lg font-bold text-dark font-['Montserrat'] uppercase tracking-tight">
                                        {t('multiDay.builder.selectTitle')}
                                    </h3>
                                    <span className="text-[9px] font-black text-gray-400 bg-gray-100 px-2 py-1 rounded-md uppercase tracking-tighter">
                                        {t('multiDay.builder.perPerson')}
                                    </span>
                                </div>

                                <div className="space-y-2 mb-6">
                                    {customOptions.map((option) => (
                                        <div 
                                            key={option.id}
                                            onClick={() => toggleActivity(option.id)}
                                            className={`
                                                cursor-pointer p-3 rounded-xl border-2 transition-all flex items-center justify-between group select-none
                                                ${selectedActivities.includes(option.id) 
                                                    ? 'border-primary bg-primary/5 shadow-sm' 
                                                    : 'border-gray-50 hover:border-primary/20 hover:bg-gray-50'
                                                }
                                            `}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-lg transition-colors ${selectedActivities.includes(option.id) ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                                                    <option.icon size={18} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className={`text-[12px] font-black uppercase leading-none ${selectedActivities.includes(option.id) ? 'text-dark' : 'text-gray-500'}`}>
                                                        {t(`multiDay.builder.activities.${option.id}`)}
                                                    </span>
                                                    {option.sub && <span className="text-[9px] text-gray-400 mt-1">{option.sub}</span>}
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center gap-3">
                                                <span className="font-bold text-dark text-base">€{option.price}</span>
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedActivities.includes(option.id) ? 'bg-primary border-primary text-white' : 'border-gray-200'}`}>
                                                    {selectedActivities.includes(option.id) && <CheckCircle size={12} strokeWidth={4} />}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-100 pt-5">
                                    <div className="flex justify-between items-center mb-5 px-1">
                                        <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{t('multiDay.builder.total')}</span>
                                        <div className="text-right leading-none">
                                            <span className="text-3xl font-black text-accent">€{totalPrice}</span>
                                            <span className="block text-gray-400 text-[9px] font-bold mt-1 uppercase tracking-tighter">
                                                {t('multiDay.builder.perPersonSuffix')}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <Button 
                                        onClick={() => setIsCreateOpen(true)} 
                                        className="w-full justify-center bg-dark text-white hover:bg-accent py-4 rounded-xl font-black shadow-lg text-sm transition-all transform hover:-translate-y-0.5 active:scale-95"
                                    >
                                        {t('multiDay.builder.cta')}
                                    </Button>
                                    <p className="text-center text-[9px] text-gray-400 mt-3 uppercase font-medium tracking-tight">
                                        {t('multiDay.builder.disclaimer', '* Sve cene uključuju vodiča, opremu i ishranu.')}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>

            <section className="py-24 bg-surface relative overflow-hidden px-4">
                <Container>
                    <div className="max-w-4xl mb-20">
                        <div className="inline-flex items-center gap-3 mb-6 bg-white px-5 py-2 rounded-full shadow-sm border border-primary/10">
                            <Users size={18} className="text-primary" />
                            <span className="text-secondary font-bold tracking-widest uppercase text-xs">
                                {t('multiDay.scouts.badge')}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-['Montserrat'] text-primary leading-tight">
                            {t('multiDay.scouts.title')}
                        </h2>
                        <p className="text-gray-600 text-xl leading-relaxed max-w-3xl">
                            {t('multiDay.scouts.intro')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        
                        <div className="lg:col-span-6 relative group min-h-[500px]">
                            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img 
                                    src="/images/scouts.webp" 
                                    alt="Scouting at Drina" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/80 to-transparent p-10">
                                    <p className="text-white text-lg font-medium italic opacity-90 max-w-md">
                                        "{t('multiDay.scouts.tagline')}"
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { key: 'camping', icon: Tent, color: 'bg-orange-50 text-accent' },
                                { key: 'rafting', icon: Waves, color: 'bg-blue-50 text-primary' },
                                { key: 'hiking', icon: Mountain, color: 'bg-green-50 text-secondary' },
                                { key: 'restaurant', icon: Utensils, color: 'bg-gray-50 text-dark' }
                            ].map((item) => (
                                <div key={item.key} className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-lg mb-2">
                                            {t(`multiDay.scouts.features.${item.key}.title`)}
                                        </h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {t(`multiDay.scouts.features.${item.key}.desc`)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-12 mt-8">
                            <div className="bg-dark rounded-[3rem] p-8 md:p-12 text-primary relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
                                <div className="relative z-10 lg:max-w-2xl">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <span className="w-10 h-1 bg-primary rounded-full"></span>
                                        {t('multiDay.scouts.whyTitle')}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        {t('multiDay.scouts.whyText')}
                                    </p>
                                </div>
                                <div className="relative z-10 shrink-0">
                                    <Button 
                                        onClick={openQuestion} 
                                        className="bg-primary hover:bg-primary-light hover:text-dark text-white px-12 py-6 rounded-2xl font-black text-sm shadow-2xl transition-all flex items-center gap-3 group"
                                    >
                                        <Users size={24} className="group-hover:scale-110 transition-transform" />
                                        {t('multiDay.scouts.cta')}
                                    </Button>
                                </div>
                                <Compass size={200} className="absolute -right-10 -bottom-10 text-white/5 rotate-12 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <CreateModal 
                isOpen={isCreateOpen}
                onClose={() => setIsCreateOpen(false)}
                selectedIds={selectedActivities}
                totalPrice={totalPrice}
                activities={customOptions}
                t={t}
            />
        </div>
    );
};

export default MultiDayPage;