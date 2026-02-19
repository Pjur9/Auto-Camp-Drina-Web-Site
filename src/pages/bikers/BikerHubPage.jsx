import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    Wrench, ShieldCheck, Map, Utensils, Tent, 
    Fuel, ArrowRight, ChevronLeft, ChevronRight 
} from 'lucide-react';

import { Container } from "../../shared/ui/Container";
import { Button } from "../../shared/ui/Button";

const BikerGallerySlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [touchStart, setTouchStart] = React.useState(null);
    const [touchEnd, setTouchEnd] = React.useState(null);

    const minSwipeDistance = 50;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };

    return (
        <div className="relative group">
            <div 
                className="relative aspect-[4/4] sm:aspect-[16/9] md:aspect-[21/12] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl bg-stone-900"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                    >
                        <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover object-bottom" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                ))}

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {images.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1.5 transition-all duration-300 rounded-full ${
                                i === currentIndex ? 'bg-[#2dd4bf] w-8' : 'bg-white/40 w-2'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <button 
                onClick={prevSlide}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 text-[#1c1917] shadow-xl hidden md:flex opacity-0 group-hover:opacity-100 transition-all hover:bg-[#2dd4bf] hover:text-white"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={nextSlide}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 text-[#1c1917] shadow-xl hidden md:flex opacity-0 group-hover:opacity-100 transition-all hover:bg-[#2dd4bf] hover:text-white"
            >
                <ChevronRight size={24} />
            </button>

            <div className="absolute -top-4 -right-4 bg-[#1c1917] text-[#2dd4bf] p-4 rounded-2xl border border-white/10 hidden md:block shadow-xl">
                <div className="font-mono text-[10px] uppercase tracking-tighter leading-none">
                    44°17'50.2"N <br/> 18°51'54.8"E
                </div>
            </div>
        </div>
    );
};

const BikerHubPage = ({ openBooking }) => {
    const { t } = useTranslation();
    const brandTeal = "text-[#2dd4bf]"; 

    return (
        <div className="bg-[#1d0c00] text-stone-900 font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
            
            <div 
                className="fixed inset-0 z-0 pointer-events-none opacity-10 grayscale contrast-125"
                style={{ 
                    backgroundImage: 'url("/images/biker-friendly-accommodation-bosnia.webp")',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            />

            <div className="relative z-10">
                
                <section className="relative min-h-[80vh] flex items-center justify-center py-24 md:py-32 pt-40 px-4">
                    <div className="text-center px-4 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-orange-500 text-orange-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 bg-black/40 backdrop-blur-sm">
                            <Fuel size={14} />
                            <span>{t('bikerHub.hero.tagline')}</span>
                        </div>
                        
                        <h1 className="text-4xl my-6 md:text-6xl font-black text-white font-['Montserrat'] tracking-tight leading-tight uppercase">
                            {t('bikerHub.hero.titleMain')} <br />
                            <span className="text-orange-500">{t('bikerHub.hero.titleAccent')}</span>
                        </h1>
                        
                        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
                            {t('bikerHub.hero.description')}
                        </p>

                        <Button 
                            onClick={openBooking}
                            className="bg-orange-600 hover:bg-[#2dd4bf] text-white px-8 py-3 rounded-none font-bold text-sm uppercase tracking-widest transition-all border-b-4 border-black/20"
                        >
                            {t('bikerHub.hero.button')}
                        </Button>
                    </div>
                </section>

                <section className="py-24 bg-slate-50/60 backdrop-blur-sm relative z-20 border-y border-stone-200 overflow-hidden">
                    <Container className="relative z-10">
                        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <div className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-2">{t('bikerHub.features.specs')}</div>
                                <h2 className={`text-4xl md:text-7xl font-black text-[#1c1917] uppercase font-['Montserrat'] tracking-tighter leading-none`}>
                                    {t('bikerHub.features.titleMain')} <br/>
                                    <span className="text-orange-600">{t('bikerHub.features.titleAccent')}</span>
                                </h2>
                            </div>
                            <div className="hidden md:block h-px flex-grow mx-12 bg-stone-300/50"></div>
                            <div className="text-stone-500 font-mono text-xs hidden md:block uppercase tracking-widest text-right">
                                {t('bikerHub.features.hubLabel')} <br/> {t('bikerHub.features.stationLabel')}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                            <div className="lg:col-span-5 order-1 relative min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
                                <img src="/images/motorcycle-friendly-camp-bosnia.webp" alt="Biker Base" className="absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/90 via-transparent to-transparent flex items-end p-8">
                                     <div>
                                        <div className="text-[#2dd4bf] font-bold uppercase text-xs tracking-widest mb-2 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse"></div>
                                            {t('bikerHub.features.operationalLabel')}
                                        </div>
                                        <h3 className="text-white font-black text-3xl uppercase font-['Montserrat'] leading-none">
                                            {t('bikerHub.features.imageTitle1')} <br/> {t('bikerHub.features.imageTitle2')}
                                        </h3>
                                     </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7 order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <BikerFeatureCard title={t('bikerHub.features.items.stay.title')} desc={t('bikerHub.features.items.stay.desc')} icon={Tent} />
                                <BikerFeatureCard title={t('bikerHub.features.items.fuel.title')} desc={t('bikerHub.features.items.fuel.desc')} icon={Utensils} />
                                <BikerFeatureCard title={t('bikerHub.features.items.garage.title')} desc={t('bikerHub.features.items.garage.desc')} icon={Wrench} />
                                <BikerFeatureCard title={t('bikerHub.features.items.storage.title')} desc={t('bikerHub.features.items.storage.desc')} icon={ShieldCheck} />
                            </div>

                            <div className="lg:col-span-5 order-3 lg:order-4 relative min-h-[300px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
                                <img src="/images/bikers-hospitality-auto-camp-drina.webp" alt="Trail" className="absolute inset-0 w-full h-full object-cover object-bottom grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-[#2dd4bf]/10 mix-blend-multiply"></div>
                                <div className="absolute bottom-6 right-6 bg-white shadow-lg px-4 py-2 rounded-full text-[#1c1917] text-[10px] font-bold uppercase tracking-widest">
                                    {t('bikerHub.features.campView')}
                                </div>
                            </div>

                            <div className="lg:col-span-7 order-4 lg:order-3">
                                <BikerFeatureCard 
                                    title={t('bikerHub.features.items.routes.title')} 
                                    desc={t('bikerHub.features.items.routes.desc')} 
                                    icon={Map} 
                                    isHighlight 
                                />
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="py-12 md:py-24 relative z-10 overflow-hidden">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto">
                            <div className="hidden lg:flex flex-1 max-w-[300px] items-center justify-center relative">
                                <img 
                                    src="/images/seeker-logo.png" 
                                    alt="Seeker Logo" 
                                    className="w-full h-auto max-h-[350px] object-contain opacity-95 drop-shadow-[0_0_30px_rgba(45,212,191,0.2)] transition-all hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-[#2dd4bf]/5 blur-[100px] rounded-full -z-10"></div>
                            </div>

                            <div className="flex-[1.5] bg-black/90 backdrop-blur-xl p-8 md:p-14 rounded-[2.5rem] border-l-[10px] border-[#2dd4bf] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-[#2dd4bf]/10 blur-[90px] rounded-full"></div>
                                <div className="relative z-10">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                                        <div>
                                            <div className="text-[#2dd4bf] font-bold uppercase tracking-[0.3em] text-[10px] mb-3">
                                                {t('bikerHub.seeker.partner')}
                                            </div>
                                            <h2 className="text-3xl md:text-5xl font-black text-white font-['Montserrat'] leading-[1.1] uppercase">
                                                {t('bikerHub.seeker.titleBrand')} <br />
                                                <span className="text-white/90">{t('bikerHub.seeker.titleType')}</span>
                                            </h2>
                                        </div>
                                        <div className="lg:hidden shrink-0 self-center sm:self-auto">
                                            <img src="/images/seeker-logo.png" alt="Seeker Logo" className="w-24 h-auto" />
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm md:text-lg mb-10 leading-relaxed font-medium max-w-xl">
                                        {t('bikerHub.seeker.description')}
                                    </p>
                                    <a href="https://seeker-raid.com/en/motorcycle-adv-raid/" 
                                       target="_blank" rel="noopener noreferrer"
                                       className="inline-flex items-center gap-3 text-orange-500 font-black uppercase tracking-widest text-base hover:text-[#2dd4bf] transition-all group">
                                        {t('bikerHub.seeker.button')} 
                                        <ArrowRight className="group-hover:translate-x-2 transition-transform w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="py-24 bg-slate-50/60 backdrop-blur-sm relative z-20 border-t border-stone-200 overflow-hidden">
                    <Container className="relative z-10">
                        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <div className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-2">
                                    {t('bikerHub.gallery.specs')}
                                </div>
                                <h2 className="text-4xl md:text-7xl font-black text-[#1c1917] uppercase font-['Montserrat'] tracking-tighter leading-none">
                                    {t('bikerHub.gallery.titleMain')} <br/>
                                    <span className="text-orange-600">{t('bikerHub.gallery.titleAccent')}</span>
                                </h2>
                            </div>
                            <div className="hidden md:block h-px flex-grow mx-12 bg-stone-300/50"></div>
                            <div className="text-stone-500 font-mono text-xs hidden md:block uppercase tracking-widest text-right">
                                {t('bikerHub.gallery.hubLabel')} <br/> {t('bikerHub.gallery.stationLabel')}
                            </div>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <BikerGallerySlider 
                                images={[
                                    '/images/motorcycle-friendly-camp-drina-bosnia.webp', '/images/bikers-gathering-foca-auto-camp.webp', '/images/moto-adventure-rest-stop-drina.webp',
                                    '/images/biker-community-fun-drina-river.webp', '/images/secure-motorcycle-parking-camp-bosnia.webp', '/images/bikers-breakfast-riverside-foca.webp',
                                    '/images/motorcycle-touring-balkans-stop.webp', '/images/auto-camp-drina-biker-hub-gathering.webp', '/images/adventure-riders-camp-bosnia-nature.webp',
                                    '/images/bikers-night-camp-fire-drina.webp', '/images/motorcycle-road-trip-bosnia-stay.webp', '/images/friendly-moto-camp-tara-river.webp',
                                    '/images/bikers-hospitality-auto-camp-drina.webp'
                                ]} 
                            />
                        </div>
                    </Container>
                </section>
                <section className="py-16 md:py-24 relative z-10">
    <Container>
        <div className="flex flex-col items-center justify-center mb-20 md:mb-28 px-6 text-center">
            <div className="
                text-[#2dd4bf] font-mono font-black uppercase opacity-90 
                text-[clamp(1rem,3.5vw,1.5rem)]
                tracking-[0.3em] md:tracking-[0.6em]
                max-w-[26ch] sm:max-w-none
                leading-relaxed
            ">
                {t('bikerHub.partners.title')}
            </div>

            <div className="h-px w-24 md:w-48 bg-gradient-to-r from-transparent via-[#2dd4bf]/60 to-transparent mt-6"></div>
        </div>
                        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-32 px-4">
                        <PartnerSticker src="/images/seeker-logo.png" alt="Sticker 1" />
                        <PartnerSticker src="/images/tet-logo.png" alt="Sticker 2" />
                        <PartnerSticker src="/images/fema-logo.png" alt="Sticker 3" />
                        <PartnerSticker src="/images/proud-logo.png" alt="Sticker 4" />
                        <PartnerSticker src="/images/seuk-logo.png" alt="Sticker 5" />
                    </div>
                </Container>
            </section>
        </div>
    </div>
    );
};

const PartnerSticker = ({ src, alt }) => (
    <div className="group relative cursor-pointer">
        <div className="absolute inset-0 bg-[#2dd4bf]/25 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        
        <img 
            src={src} 
            alt={alt} 
            className="h-16 md:h-28 w-auto object-contain grayscale brightness-150 opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out" 
        />
        
        <div className="w-0 h-[2px] bg-[#2dd4bf] mt-6 mx-auto group-hover:w-full transition-all duration-500 opacity-70"></div>
    </div>
);

const BikerFeatureCard = ({ title, desc, icon: Icon, isHighlight }) => (
    <div className={`
        p-7 rounded-[2rem] transition-all duration-500 group h-full flex flex-col
        ${isHighlight 
            ? 'bg-[#2dd4bf] text-stone-900 shadow-xl shadow-[#2dd4bf]/20' 
            : 'bg-white hover:bg-slate-50 shadow-sm hover:shadow-xl border border-stone-100'}
    `}>
        <div className={`
            w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500
            ${isHighlight ? 'bg-black/10 text-stone-900' : 'bg-stone-100 text-stone-900 group-hover:bg-[#2dd4bf] group-hover:text-white group-hover:rotate-6'}
        `}>
            <Icon size={24} strokeWidth={2} />
        </div>
        <h3 className={`text-lg font-black mb-3 uppercase tracking-tight font-['Montserrat'] ${isHighlight ? 'text-stone-950' : 'text-stone-900'}`}>
            {title}
        </h3>
        <p className={`text-sm leading-relaxed flex-grow font-medium ${isHighlight ? 'text-stone-800' : 'text-stone-500'}`}>
            {desc}
        </p>
    </div>
);

export default BikerHubPage;