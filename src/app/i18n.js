import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "seo": {
        "home": {
          "title": "Auto Camp Drina | Rafting, Camping & Nature in Foča",
          "description": "Escape to Auto Camp Drina in Foča. Experience thrilling Tara rafting, peaceful riverside camping, and authentic Bosnian hospitality in the heart of untouched nature. Book your wild adventure today!"
        },
        "rafting": {
          "title": "Rafting Tara & Drina | The Adventure of a Lifetime",
          "description": "Conquer the Tara River canyon, the deepest in Europe! Join our professional team for a high-adrenaline rafting adventure through crystal-clear water, wild rapids, and stunning waterfalls. Gear included."
        },
        "hiking": {
          "title": "Hiking Tours | Explore Perućica & Dinaric Alps",
          "description": "Trek through Perućica, Europe’s last primeval forest, and conquer the Dinaric Alps. Discover breathtaking views and hidden glacial lakes with our expert local guides. A must-see for all nature lovers!"
        },
        "camping": {
          "title": "Camping by the River | Peaceful Stays in Foča",
          "description": "Relax at the ultimate riverside campsite near Foča. Enjoy secure spots for tents and camper vans, modern facilities, and the soothing sound of the Drina river. Your perfect base for a Balkan road trip."
        },
        "multiday": {
          "title": "Multi-day Nature Tours | Complete Drina Experience",
          "description": "The ultimate 3 to 6-day nature expedition! Combine wild rafting, epic hiking tours, and traditional dining into one unforgettable Bosnian adventure. We handle the logistics; you enjoy the wilderness."
        },
        "aboutus": {
          "title": "About Us | Family Tradition at Auto Camp Drina",
          "description": "Learn about the family heritage behind Auto Camp Drina. We have dedicated decades to sharing our love for the Tara and Drina rivers with adventurers from all over the world. Join our family tradition."
        },
        "bikerhub": {
          "title": "Biker Hub | Motorcycle Friendly Camp Bosnia",
          "description": "The #1 pitstop for motorcyclists in Bosnia! Secure parking, cold beer, and a welcoming community of riders. Your perfect base for exploring the winding mountain roads and passes of the Balkan peninsula."
        },
        "faq": {
          "title": "FAQ | Everything You Need to Know",
          "description": "Planning your visit to Auto Camp Drina? Find all answers about rafting gear, border crossings, booking, and travel tips for your Bosnian adventure. Everything you need for a stress-free trip in one place."
        }
      },
      navbar: {
        home: "Home",
        activities: "Activities",
        rafting: "Rafting",
        hiking: "Hiking",
        camping: "Camping",
        multiday: "Multi-Day",
        aboutus: "About Us",
        bikerhub: "Biker Hub",
        faq: "FAQ",
        bookBtn: "Book Now", 
        phone: "Call Us"
      }, 
      common: {
        readMore: "Read More",
        details: "Details",
        bookAdventure: "Book Adventure",
        bookAccommodation: "Book Stay",
        viewAll: "View All Options",
        pricePerPerson: "per person",
        planTour: "View Itinerary",
        closePlan: "Close Itinerary",
        duration: "Duration",
        level: "Level",
        onRequest: "On Request",
        detailedPlanTitle: "Detailed Itinerary",
        includedInPriceTitle: "Included in Price:",
        readyForAdventure: "Ready for adventure?",
        planSoon: "Detailed plan coming soon...",
        likePlan: "Like this itinerary?",
        bookThisPackage: "Book This Package",
        scheduleNote: "Schedule may vary depending on weather conditions and group pace.",
        close: "Close"
      },
      booking: {
        title: "Reservation",
        subtitle: "Fill out the form and we will contact you within 2 hours to confirm.",
        labels: {
            name: "Name",
            lastName: "Last name",
            email: "Email",
            phone: "Phone number",
            activity: "Activity You are interested in?",
            accommodation: "Accommodation type",
            guests: "Number of guests",
            date: "Date from/to",
            message: "Any additional questions or informations?",
            send: "Send"
        },
        activities: {
            sleep: "I just want to sleep",
            rafting: "Rafting",
            hiking: "Hiking",
            canyoning: "Canyoning",
            other: "Other"
        },
        accommodations: {
            bungalowNoToilet: "Bungalow (without toilet)",
            bungalowToilet: "Bungalow (with toilet)",
            tent: "Your own tent",
            rv: "Your RV/Van/Jeep/Other"
        }
      },
      contact: {
        title: "Ask a Question",
        subtitle: "Have a doubt? Write to us and we will get back to you as soon as possible.",
        fullName: "Full name",
        messagePlaceholder: "Your question or message...",
        successMessage: "Your message has been successfully sent! We'll get back to you soon.",
        errorMessage: "Error sending message. Please try again or contact us directly."
      },
      footer: {
        description: "First registered private rafting camp in BiH. Founded in 1987. Safety and unforgettable experience have been our priority for 20 years.",
        quickLinks: "Activities",
        explore: "Explore",
        links: {
            rafting: "Rafting on Tara",
            hiking: "Hiking Maglić",
            about: "About Us",
            camping: "Camp Accommodation"
        },
        contact: "Contact",
        location: "Location",
        openMap: "Open Map",
        openInGoogleMaps: "Open in Google Maps",
        rights: "Auto Camp Drina. All rights reserved."
      },
      // --- HOME PAGE ---
      home: {
        raftingTitle: "Most Wanted Rafting Tours",
        raftingSubtitle: "Our most popular rafting tours chosen by guests from all over the world.",
        viewAllOffers: "View All Offers",
        exploreMountains: "Explore Mountains",
        stepAbove: "Step Above",
        clouds: "Clouds",
        hikingDesc: "Sutjeska National Park offers the most beautiful hiking trails in the region. From easy walks through the primeval forest to conquering the highest peak in BiH.",
        expertGuides: "Expert Guides",
        expertGuidesDesc: "Licensed guides for every tour",
        offRoadTransport: "Off-Road Transport",
        offRoadTransportDesc: "Jeeps to starting positions",
        allTours: "All Tours"
      },
      hero: {
        tagline: "First registered private camp in BiH",
        explore: "Explore Offers",
        campBtn: "View Camp",
        stats: [
          { id: 1, label: "Years of Tradition", value: "37+" },
          { id: 2, label: "Happy Guests", value: "15k+" },
          { id: 3, label: "Safety", value: "100%" }
        ],
        slides: [
          {
            id: 1,
            image: "/images/rafting-home-hero.webp",
            title: "Rafting on the Tara",
            text: "Experience the ultimate adrenaline adventure on the wild waves of the Tara. Fun, team spirit, and untouched nature in the deepest canyon in Europe."
          },
          {
            id: 2,
            image: "/images/vodopad-skakavac-perucica.webp",
            title: "Perućica Rainforest and Waterfall Skakavac",
            text: "Step into the heart of one of the last preserved rainforests in Europe, home to the Skakavac waterfall."
          },
          {
             id: 3,
             image: "/images/trnovacko-back.webp",
             title: "Trnovačko Lake and NP Sutjeska",
             text: "Explore the oldest national park in BiH, conquer Maglić, the highest peak in the country and discover the magic of the emerald heart-shaped lake hidden among mountain peaks."
          },
        ]
      },
      trust: {
        badge: "SINCE 1987",
        title: "First Registered Private Rafting Camp in Bosnia & Herzegovina",
        subtitle: "Safety and unforgettable experiences have been our priority for over 35 years.",
        desc: "Auto Camp Drina is not just a spot on the map, it is a family legacy preserving the spirit of the Tara River."
      },
      aboutUs: {
      subtitle: "OUR COMMITMENT TO NATURE",
      title: "From Adventure to Family Tradition",
      text: "Auto Camp Drina is much more than a camp; it is a story of love for the Tara River and the mountains that surround it. Over the decades, we have built a sanctuary that blends the thrill of <0>wild waters</0> with the warmth of home, ensuring that every guest becomes part of our extended mountain family. Our tradition is your guarantee of an unforgettable experience.",
      imageCaption: "The place where your story begins"
      },
      camping: {
        title: "Oasis by the Drina River",
        subtitle: "Discover our camp and accommodation: comfortable bungalows, spacious area for campers and tents, all with the sound of the river.",
        promoTitle: "Peace, Silence and Family Comfort",
        promoText: "Auto Camp 'Drina' is the ideal destination for anyone who wants a real vacation in nature without sacrificing comfort.",
        features: {
          bungalows: { title: "Wooden Bungalows", desc: "Comfortable accommodation with bedding." },
          campers: { title: "Camper Plots", desc: "Flat plots with hookups." },
          facilities: { title: "Clean Facilities", desc: "Modern toilets and showers." },
          river: { title: "Riverside", desc: "Waking up to the sound of Drina." }
        }
      },
      reviews: [
        {
          id: 1,
          title: "\"Friendliness\"",
          text: "\"Everything was great from start to finish but what made it exceptional was the attention to detail and the friendliness of the owners/staff. They were always there to help/answer questions.\"",
          author: "Mick, Ireland",
          countryCode: "ie",
          source: "Booking",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "https://www.google.com/travel/search?q=auto%20kamp%20drina&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73157411%2C73192290%2C73198317%2C73201205&hl=sr-RS&gl=rs&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaZwpHEkUyJTB4NDc1ODg2OTlkOTg2YTI1OToweGRkNzYwMzVhNzU3OGNhYmM6HNCQ0YPRgtC-INC60LDQvNC_INCU0YDQuNC90LASHBIUCgcI6Q8QDBgNEgcI6Q8QDBgOGAEyBAgAEAAqBwoFOgNSU0Q&qs=CAEyKENob0l2SlhqcTZmcmdMdmRBUm9OTDJjdk1URmlOek53TVdwNWN4QUI4AkIJCbzKeHVaA3bdQgkJvMp4dVoDdt1IAA&ictx=111&ap=KigKEglbyI9I27xFQBH9G18Go7gyQBISCTODQTl6ykVAEf0bX0b41zJAMAC6AQdyZXZpZXdz"
        },
        {
          id: 2,
          title: "\"Wonderful\"",
          text: "\"The host Filip was super nice, we also had the rafting tour with him as our guide and we had so much fun! The camping is so nice and relaxing located just beside the Drina river.\"",
          author: "Claudio, Italy",
          countryCode: "it",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "https://www.google.com/travel/search?q=auto%20kamp%20drina&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73157411%2C73192290%2C73198317%2C73201205&hl=sr-RS&gl=rs&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaZwpHEkUyJTB4NDc1ODg2OTlkOTg2YTI1OToweGRkNzYwMzVhNzU3OGNhYmM6HNCQ0YPRgtC-INC60LDQvNC_INCU0YDQuNC90LASHBIUCgcI6Q8QDBgNEgcI6Q8QDBgOGAEyBAgAEAAqBwoFOgNSU0Q&qs=CAEyKENob0l2SlhqcTZmcmdMdmRBUm9OTDJjdk1URmlOek53TVdwNWN4QUI4AkIJCbzKeHVaA3bdQgkJvMp4dVoDdt1IAA&ictx=111&ap=KigKEglbyI9I27xFQBH9G18Go7gyQBISCTODQTl6ykVAEf0bX0b41zJAMAC6AQdyZXZpZXdz"
        },
        {
          id: 3,
          title: "\"Cozy hideaway\"",
          text: "\"Super great location close to the river, cozy cabins, great outdoor restaurant with cool music and very nice hosts. We will definitely come back!\"",
          author: "Martin, Germany",
          countryCode: "de",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "https://www.google.com/travel/search?q=auto%20kamp%20drina&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73157411%2C73192290%2C73198317%2C73201205&hl=sr-RS&gl=rs&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaZwpHEkUyJTB4NDc1ODg2OTlkOTg2YTI1OToweGRkNzYwMzVhNzU3OGNhYmM6HNCQ0YPRgtC-INC60LDQvNC_INCU0YDQuNC90LASHBIUCgcI6Q8QDBgNEgcI6Q8QDBgOGAEyBAgAEAAqBwoFOgNSU0Q&qs=CAEyKENob0l2SlhqcTZmcmdMdmRBUm9OTDJjdk1URmlOek53TVdwNWN4QUI4AkIJCbzKeHVaA3bdQgkJvMp4dVoDdt1IAA&ictx=111&ap=KigKEglbyI9I27xFQBH9G18Go7gyQBISCTODQTl6ykVAEf0bX0b41zJAMAC6AQdyZXZpZXdz"
        },
        {
          id: 4,
          title: "\"Excellent staff\"",
          text: "\"Perfect location near the river. Nice area also for camping or camper vans! Delicious kitchen. Excellent staff (run by a family). Super clean! It's a nice stop for your trip!\"",
          author: "Dimitrios, Greece",
          countryCode: "gr",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "https://www.google.com/travel/search?q=auto%20kamp%20drina&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73157411%2C73192290%2C73198317%2C73201205&hl=sr-RS&gl=rs&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaZwpHEkUyJTB4NDc1ODg2OTlkOTg2YTI1OToweGRkNzYwMzVhNzU3OGNhYmM6HNCQ0YPRgtC-INC60LDQvNC_INCU0YDQuNC90LASHBIUCgcI6Q8QDBgNEgcI6Q8QDBgOGAEyBAgAEAAqBwoFOgNSU0Q&qs=CAEyKENob0l2SlhqcTZmcmdMdmRBUm9OTDJjdk1URmlOek53TVdwNWN4QUI4AkIJCbzKeHVaA3bdQgkJvMp4dVoDdt1IAA&ictx=111&ap=KigKEglbyI9I27xFQBH9G18Go7gyQBISCTODQTl6ykVAEf0bX0b41zJAMAC6AQdyZXZpZXdz"
        },
        {
          id: 5,
          title: "\"Outstanding\"",
          text: "\"The impression is incredible. If there is a family anywhere that radiates optimism and good energy, then it's the people whose family business this camp is. A place that recharges your batteries.\"",
          author: "Zeljko, Serbia",
          countryCode: "rs",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "https://www.google.com/travel/search?q=auto%20kamp%20drina&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73157411%2C73192290%2C73198317%2C73201205&hl=sr-RS&gl=rs&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaZwpHEkUyJTB4NDc1ODg2OTlkOTg2YTI1OToweGRkNzYwMzVhNzU3OGNhYmM6HNCQ0YPRgtC-INC60LDQvNC_INCU0YDQuNC90LASHBIUCgcI6Q8QDBgNEgcI6Q8QDBgOGAEyBAgAEAAqBwoFOgNSU0Q&qs=CAEyKENob0l2SlhqcTZmcmdMdmRBUm9OTDJjdk1URmlOek53TVdwNWN4QUI4AkIJCbzKeHVaA3bdQgkJvMp4dVoDdt1IAA&ictx=111&ap=KigKEglbyI9I27xFQBH9G18Go7gyQBISCTODQTl6ykVAEf0bX0b41zJAMAC6AQdyZXZpZXdz"
        }
      ],
      // --- RAFTING PAGE ---
      raftingPage: {
        title: "Choose Your Adventure",
        subtitle: "From short adrenaline trips to multi-day expeditions - we have a package for everyone."
      },
      raftingHero: {
        tag: "Welcome to Tara Canyon",
        title: "Discover the \"Tear of Europe\"",
        description: "Imagine a place where time stops, and nature speaks the language of eternity. The Tara River Canyon is not just a geographical term – it is a sanctuary of wilderness carved into the heart of the Balkans. With a depth reaching a dizzying 1300 meters, this is the <0>deepest canyon in Europe</0> and the second in the world. Its turquoise water, so pure that you can drink it directly from your palm along its entire course, winds through ancient black pine forests and high cliffs that have kept secrets for centuries.",
        features: {
            tradition: { title: "Tradition since 1987", text: "We proudly hold the title of the first registered private rafting camp in BiH. Decades of experience are our guarantee." },
            safety: { title: "100% Safety", text: "Your safety is our imperative. Licensed IRF skippers and top-quality, certified equipment ensure a safe adventure." },
            family: { title: "Family Atmosphere", text: "You are not a number with us. We pride ourselves on authentic hospitality, homemade cuisine, and evenings by the campfire." }
        }
      },
      // --- HIKING PAGE ---
      hikingPage: {
        title: "Hiking Tours",
        subtitle: "Carefully selected routes for recreational and experienced hikers. Every step is a new story."
      },
      hikingHero: {
        tag: "Sutjeska National Park",
        title: "Step Above the Clouds",
        description: "Conquer Maglić, the highest peak of Bosnia and Herzegovina. Reflect in the emerald <1>Trnovačko Lake</1>. Explore <2>Perućica</2>, one of the last rainforests in Europe. This is not just a walk – this is a pilgrimage to nature.",
        stats: {
            maglic: "Maglić Peak",
            lakes: "Glacial Lakes",
            air: "Clean Air"
        }
      },
      hikingEquipment: {
        ctaTitle: "Ready to Go?",
        ctaText: "Hiking in NP Sutjeska requires adequate preparation. Although our guides take care of safety, your personal equipment is key to comfort and enjoyment. Don't worry, we provide off-road vehicle transport to starting points!",
        ctaButton: "Contact us for advice",
        items: {
            shoes: { title: "Footwear", text: "Sturdy hiking boots are mandatory for harder tours (Maglić)." },
            clothes: { title: "Clothing", text: "Layered clothing. Bring a raincoat and a warmer hoodie even in summer." },
            guides: { title: "Guides", text: "All our tours are led by licensed mountain guides who know every stone." },
            transport: { title: "Transport", text: "We include transfer by our jeeps to starting points." }
        }
      },
      // --- CAMPING PAGE ---
      campingPage: {
        intro: {
            title: "Perfect Place for Family Vacation",
            text1: "Our camp is located on spacious, flat terrain right by the Drina riverbank, making it <0>ideal for families</0>. There are no steep cliffs or busy roads within the camp.",
            text2: "Nights here are a special story. We are far from the city bustle of Foča, so silence is guaranteed.",
            fenced: "Fenced and Safe",
            petFriendly: "Pet Friendly",
            imageOverlay: {
                title: "Create Memories",
                text: "Evenings by the campfire are remembered forever."
            }
        },
        accommodation: {
            title: "Our Accommodation Capacities",
            subtitle: "Choose your style of stay in nature.",
            bookBtn: "Book a Spot",
            bungalows: {
                title: "Wooden Bungalows",
                desc: "Authentic wooden houses smelling of pine. Comfortable beds, bedding, and electricity.",
                badge: "TOP CHOICE",
                features: ["Capacity: 2-4 persons", "Bedding included", "Close to toilets"]
            },
            campers: {
                title: "Caravans & Campers",
                desc: "Spacious, flat plots with easy access for vehicles of all sizes.",
                features: ["Electricity connection", "Water refill", "Chemical toilet"]
            },
            tents: {
                title: "Tent Space",
                desc: "Best spots on grass, in the shade of the orchard or right by the river.",
                features: ["In the shade", "BBQ access", "Shower usage"]
            }
        },
        amenities: {
            title: "Everything You Need",
            subtitle: "Auto Camp Drina offers complete infrastructure for a pleasant stay.",
            items: {
                electricity: { title: "Electricity", desc: "Connections available." },
                toilets: { title: "Toilets", desc: "Clean toilets and showers." },
                wifi: { title: "Wi-Fi", desc: "Free internet." },
                restaurant: { title: "Restaurant", desc: "Homemade food and drinks." }
            }
        }
      },
      campingHero: {
        tag: "Oasis of Peace on the Drina Bank",
        title: "Waking Up to the River Roar",
        text: "Forget city noise. At Auto Camp Drina, your alarm is birdsong, and the view from the window is the emerald water of Drina."
      },
      // --- ABOUT US PAGE (NOVO) ---
      aboutHero: {
        tag: "Founded in 1987.",
        title: "More Than a Camp.",
        highlight: "Family.",
        text: "Auto Camp 'Drina' is not just a place on a map. It is a home where guests return as friends. We are the first registered private rafting camp in BiH, and our mission has been the same for almost 40 years: unforgettable adventure and sincere hospitality."
      },
      aboutUsPage: {
        story1: {
            title: "Pioneers of Camping since 1987.",
            subtitle: "OUR HISTORY",
            text: "Founded in 1987 as the <0>first private camp</0> in former Yugoslavia. Our rule #1 at Auto Camp 'Drina' is to treat guests <0>like family, not customers!</0>",
            text2: "The Kostović and Vujičić families proudly pass on the history and stories of this region by the campfire, making your stay an authentic experience remembered for a lifetime.",
            badge1: "Tradition since 1987",
            badge2: "Kostović & Vujičić Families",
            imageCaption: "\"Hospitality is in our DNA.\""
        },
        story2: {
            title: "Life on the Drina Riverbank",
            subtitle: "LOCATION & ADVENTURE",
            text: "We are situated on the very left bank of the river, offering a unique atmosphere of morning mist and direct water access. We specialize in <strong>rafting tours on Tara and Drina</strong>, and boats and kayaks are available to our guests at any time for independent exploration.",
            button: "Rafting Tours"
        },
        safety: {
            title: "Safety Without Compromise",
            subtitle: "SAFETY & EQUIPMENT",
            text1: "Your safety is the foundation of every adventure. All our skippers are <0>certified professionals</0> with years of experience on wild waters, trained to react in any situation.",
            text2: "We use exclusively top-quality certified equipment. Each guest receives a complete <0>neoprene suit, professional vest, and helmet</0>. Before every departure, we go through detailed <0>safety procedures (briefing).</0>",
            badges: {
                skippers: "Licensed Skippers",
                equipment: "Certified Equipment",
                briefing: "Safety Briefing",
                insurance: "Guest Insurance"
            }
        },
        skippersSection: {
          "subtitle": "Our Experts",
          "title": "Meet Your Skippers and Guides",
          "description": "Experienced, licensed, and full of stories. You are in safe hands with our legendary team.",
          "listenVibe": "Listen to our vibe:"
        },
        skippers: [
          {
            id: 1,
            name: "Filip Vujičić",
            role: "Manager & Lead Guide",
            image: "/images/tara-rafting-guide-fica.webp",
            desc: "Filip has been the heart of Camp Drina since the age of 12, growing up within this cherished family business. As Manager, he oversees every detail of the guest experience, personally hosting visitors to ensure a warm, seamless stay. ​Beyond the campsite walls, Filip is a professional rafting and hiking guide, blending his deep local knowledge with a passion for adventure. Whether he’s managing logistics or leading a tour, Filip is always on hand to provide a professional, hands-on touch to your journey.",
            experience: "10 Years Experience",
            specialty: "Wild Waters"
          },
          {
            id: 2,
            name: "Jovo",
            role: "Lead Climbing & Hiking Guide",
            image: "/images/hiking-mountain-guide.webp",
            desc: "The master of heights and hidden mountain trails. Jovo leads you safely to the most stunning viewpoints of the Dinaric Alps. His expertise in climbing and deep passion for the wilderness turn every hike into a legendary story.",
            experience: "7 Years Experience",
            specialty: "Mountain Peaks"
          },
          {
            id: 3,
            name: "David",
            role: "Head Skipper",
            image: "/images/tara-rafting-guide-baki.webp",
            desc: "Our head skipper and the engine of the team. He is in charge of top-tier fun, and his adventurous spirit will make you experience every wave in a completely new way.",
            experience: "8 Years Experience",
            specialty: "Good Vibes"
          },
          {
            id: 4,
            name: "Nedeljko",
            role: "Skipper",
            image: "/images/tara-rafting-guide-djone.webp",
            desc: "Minister of safety on the rafting. Calm and composed, Nedeljko is your guardian on the river, ideal for a relaxed and safe family descent.",
            experience: "7 Years Experience",
            specialty: "Safety First"
          },
          {
            id: 5,
            name: "Matja",
            role: "Music Editor",
            image: "/images/caja.webp",
            desc: "As our music editor, Matija is responsible for the great soundtrack that flows throughout our restaurant. Whether you're enjoying a meal or simply watching the river go by, his selections provide the perfect ambient music for your stay.",
            experience: "12 years of curation",
            specialty: "Ambient music & riverside vibe",
            "playlists": [
              "https://open.spotify.com/playlist/5yyB3stoa4MI973GYMB0ZN?si=WqzTxnyPRYmu8l5_4DF_pQ",
              "https://open.spotify.com/playlist/3Kly9gSRybUzvOV4w9ryLD?si=mE5tW-RiRTaihKFHn275vA",
              "https://open.spotify.com/playlist/6rZFpCuwxfD6NyPoxWJHGn?si=s20LBN5MSWOqUha6XcJSlA",
              "https://open.spotify.com/playlist/3646BWzyRc4LYclXixF2nv?si=ZH8fWprwTUGoNsPv48Pd5g"
            ]
          }
        ],
        story3: {
            title: "Peaks of Maglić and Zelengora",
            subtitle: "DINARIC ALPS",
            text: "Zelengora, with its 'mountain eyes' lakes, is often called the most beautiful mountain in the region. In contrast stand the steep cliffs of Maglić and Volujak. Our <0>experienced guides</0> lead you safely through this wilderness, sharing history and hidden gems.",
            list: {
                item1: "Maglić, Zelengora, Volujak, Ljubišnja",
                item2: "Cultural and historical monuments"
            },
            button: "Explore Tours"
        },
        values: {
            title: "Why are we different?",
            subtitle: "We are not a commercial tourism factory. We are guardians of tradition and nature.",
            cards: {
                personal: { title: "Personal Approach", text: "We welcome every guest personally. We know your names and stories. Here you are not a room number." },
                safety: { title: "Safety", text: "We use only the highest quality equipment. Our guides are certified professionals." },
                food: { title: "Domestic Cuisine", text: "We serve authentic dishes made from local ingredients – veal under the bell, cheese, and prosciutto." }
            }
        }
      },
      "multiDay": {
        "hero": {
          "tagline": "Extended Experience",
          "title": "More Days, More Memories",
          "subtitle": "Surrender to the rhythm of the wild. From rushing Tara rapids and conquering peaks to the silence of the canyon and starlit campfires. This isn't just a vacation, it's a return to your roots where every trail writes a story for a lifetime."
        },
        "package5day": {
          "title": "THE ULTIMATE",
          "title_highlight": "EXPEDITION",
          "day": "Day",
          "spots": "Limited Spots Available",
          "subtitle": "All-inclusive package for true adventurers",
          "description": "Our best-selling multi-day package combining water, earth, and adrenaline. Six days of complete escape from civilization with top-tier food and accommodation.",
          "cta": "Book 6-Day Tour",
          "days": {
            "1": { 
              "title": "Arrival & Welcome", 
              "desc": "Check-in after 2 PM. Welcome drink and accommodation in bungalows. Meet the guides and enjoy a traditional dinner by the campfire with music." 
            },
            "2": { 
              "title": "Grand Tara Rafting", 
              "desc": "Full-day water adventure (18km). Conquering Tara's most exciting rapids, swimming under waterfalls, and photo breaks. Lunch in nature." 
            },
            "3": { 
              "title": "Conquering Mountain Peaks", 
              "desc": "Hiking tour to Trnovačko Lake (heart-shaped) or ascent to Maglić. Fantastic views of the Perućica primeval forest. Lunch pack included." 
            },
            "4": { 
              "title": "Adrenaline: Canyoning or Jeep", 
              "desc": "The choice is yours: Explore the narrow Nevidio Canyon for the brave, or take the Jeep Safari Ring around Durmitor with a Zip Line option. Dinner under the stars." 
            },
            "5": { 
              "title": "Rest & Recreation Day", 
              "desc": "Free day to recharge your batteries. Swimming in the Drina, fishing, beach volleyball, or a light walk in the surroundings. Enjoy the peace of the camp." 
            },
            "6": { 
              "title": "Relaxation & Departure", 
              "desc": "A relaxed morning with coffee and a rich mountain breakfast. Exchanging photos and videos with the group, packing, and check-out by 12 PM." 
            }
          }
        },
        "builder": {
          "tag": "Tailor Made",
          "titleStart": "Create Your Own",
          "titleEnd": "Adventure",
          "subtitle": "Pre-made package doesn't fit? Choose the activities you love, and we'll organize the rest.",
          "selectTitle": "Select Activities",
          "perPerson": "PER PERSON",
          "total": "Estimated Total",
          "perPersonSuffix": "/ person",
          "cta": "Request Quote",
          "disclaimer": "*Final price may vary based on group size",
          "features": {
            "guides": "Professional Guides",
            "equipment": "Top Equipment",
            "foodIncludedLabel": "Food included:",
            "foodIncludedText": "Traditional breakfast and lunch/lunch pack are included in the price of each activity."
          },
          "activities": {
            "rafting": "Tara Rafting",
            "hiking": "Hiking Tours",
            "canyoning": "Canyoning",
            "jeep": "Jeep Safari",
            "camping": "Camping Spot",
            "meals": "Full Board Meals"
          }
        },
        "modal": {
          "title": "Your Adventure",
          "summary": "Summary of selected activities",
          "name": "Your Name",
          "dateFrom": "Check-in",
          "dateTo": "Check-out",
          "email": "Your Email",
          "whatsappBtn": "Send via WhatsApp",
          "emailBtn": "Send Email Inquiry",
          "total": "Total per person",
          "validationError": "Please fill in all fields before sending.",
          "successTitle": "Thank you for your trust!",
          "successText": "Your inquiry has been successfully sent. Our team will contact you as soon as possible to finalize the details.",
          "footerSlogan": "See you on the Drina!",
          "emailSubject": "Adventure Inquiry",
          "emailBodyLabel": "Selected activities",
          "emailPeriodLabel": "Period",
          "emailPriceLabel": "Price per person",
          "successMsg": "Inquiry sent successfully! We will contact you soon.",
          "footerSlogan": "See you on the Drina!"
        },
        "scouts": {
          "badge": "For Large Groups",
          "title": "Adventure at Auto Camp Drina",
          "intro": "Welcome to Auto Camp Drina, the ultimate basecamp for scouting groups and nature lovers. Located on the banks of the pristine Drina River, we offer the perfect blend of wild adventure and modern comfort.",
          "experienceTitle": "Our Experience",
          "tagline": "The perfect blend of wild adventure and modern comfort.",
          "features": {
            "camping": { "title": "Scout-Ready Camping", "desc": "Large, organized plots designed for group dynamics and outdoor skill-building." },
            "rafting": { "title": "Whitewater Rafting", "desc": "Navigate the famous Drina rapids with our professional guides." },
            "hiking": { "title": "Guided Hiking", "desc": "Discover hidden viewpoints and lush forest trails directly from the camp." },
            "restaurant": { "title": "Riverside Restaurant", "desc": "Skip the camp stove and enjoy authentic local cuisine and hearty meals at our full-service restaurant." }
          },
          "whyTitle": "Why Choose Us?",
          "whyText": "We specialize in hosting large groups, providing the infrastructure needed for a safe, exciting, and seamless scouting trip. From secure parking to equipment rentals, we handle the logistics so you can focus on the trail.",
          "cta": "Group Inquiry"
        },
        "meals": {
          "breakfast": "Breakfast",
          "lunch": "Lunch",
          "dinner": "Dinner",
          "lunch_pack": "Lunch Pack"
        }
      },
      "bikerHub": {
        "hero": {
          "tagline": "TET & Rally Base Camp",
          "titleMain": "Ultimate Balkan",
          "titleAccent": "Base Camp",
          "description": "Forget searching and start riding. Situated in the heart of Bosnia’s most rugged landscapes, we are the premier tactical hub for riders conquering the TET (Trans Euro Trail) and Balkan passes. We provide more than just a bed; we offer everything a biker needs between stages.",
          "button": "Book Your Pit Stop"
        },
        "features": {
          "specs": "Technical Specs",
          "titleMain": "Why Bikers",
          "titleAccent": "Choose Us",
          "hubLabel": "Base Camp Hub",
          "stationLabel": "Verified Station",
          "operationalLabel": "Operational Base",
          "imageTitle1": "Your Base",
          "imageTitle2": "Your Way",
          "campView": "Camp View",
          "items": {
            "stay": {
              "title": "Stay Your Way",
              "desc": "Choose between cozy private accommodations or our scenic riverside camping grounds."
            },
            "fuel": {
              "title": "Fuel Your Ride",
              "desc": "Our on-site restaurant serves hearty, local Bosnian meals—perfect for long days in the saddle. We also stock a selection of local beers and refreshing drinks."
            },
            "garage": {
              "title": "TET Bosnia",
              "desc": "Auto Camp Drina is the perfect base camp for bikers, offering easy access to the region’s best riding. We are perfectly positioned near TET (Trans Euro Trail) routes, making us the ideal hub for off-road adventurers and dual-sport riders. ​We provide everything a biker needs for a comfortable stay, including the peace of mind that comes with having mechanical services nearby for any necessary repairs or maintenance."
            },
            "storage": {
              "title": "Safe Storage",
              "desc": "Planning a longer loop? You can securely park your car and trailer at our campsite while you explore the Balkans on two wheels."
            },
            "routes": {
              "title": "The Best Routes",
              "desc": "Located at the gateway to Sutjeska National Park and the Tara Canyon, some of the best 'twisties' and off-road trails in Europe are right at our doorstep."
            }
          }
        },
        "seeker": {
          "partner": "Strategic Partner",
          "titleBrand": "SEEKER 2000",
          "titleType": "VAGABONDS",
          "description": "Motorcycle Adventure Raid for classic enduros. No race, pure freedom. 1000km Loop through Bosnia & Montenegro.",
          "button": "Explore Seeker Raid"
        },
        "gallery": {
          "specs": "Visual Log",
          "titleMain": "The Hub",
          "titleAccent": "In Action",
          "hubLabel": "Tactical",
          "stationLabel": "Gallery"
        },
        "partners": {
          "title": "Official Support & Partners"
        },
        "locator": {
          "titleMain": "Find us on",
          "titleAccent": "The Map",
          "verified": "Verified Biker Friendly Locations",
          "viewBtn": "VIEW"
        }
      },
      "faq": {
        "badge": "Help Center",
        "title": "Frequently Asked Questions",
        "subtitle": "Everything you need to know about your adventure at Auto Camp Drina.",
        "searchPlaceholder": "Search questions (e.g., gear, kids, food...)",
        "noResults": "No results found for your search.",
        "ctaTitle": "Have more questions?",
        "ctaText": "Our team is at your disposal. Call us or send a message.",
        "contactUs": "Contact Us",
        "teaserTitle": "Have questions?",
        "viewAll": "View all questions",
        "categories": {
          "all": "All",
          "rafting": "Rafting",
          "hiking": "Hiking & Mountaineering",
          "logistics": "Logistics & Gear",
          "camp": "Camp & Accommodation",
          "booking": "Bookings"
        },
        "questions": {
          "swimming_skills": {
            "q": "I'm not a swimmer, can I participate in rafting?",
            "a": "Absolutely. Swimming skills are not a requirement. All participants receive professional safety vests that keep you afloat even if you end up in the water. Our licensed skippers are there to ensure your safety. Falling out of the boat is rare, and the vest is mandatory equipment."
          },
          "children_rafting": {
            "q": "Is rafting safe for children?",
            "a": "Yes! Rafting is a great family activity. For children, we recommend summer months (July, August, September) when the river level is lower and the water is warmer. Our skippers adapt the tour for the youngest ones, making breaks for swimming and playing. We have all equipment in children's sizes."
          },
          "rain_policy": {
            "q": "What if it rains on the day of rafting?",
            "a": "Rafting takes place even in the rain – you're going to get wet anyway! Rain often adds to the adventurous experience. We provide neoprene wetsuits to keep your body warm, as well as anorak jackets (windbreakers) for protection against wind and rain. Showers are not a reason to cancel the tour."
          },
          "alcohol_policy": {
            "q": "Can we consume alcohol on the boat?",
            "a": "For your safety, alcohol consumption before and during the descent is strictly prohibited. The skipper has the right to remove intoxicated persons from the boat. The time for relaxing with local brandy, wine, and music is after returning to the camp, where an unforgettable party awaits."
          },
          "hiking_difficulty": {
            "q": "How physically demanding is hiking?",
            "a": "We have tours for all fitness levels. Tours to 'Donje Bare' lake or viewpoints are easier and suitable for recreational hikers. The ascent to Maglić (2386m) is more demanding and requires good fitness and appropriate footwear (hiking boots). The difficulty is indicated in the description of each package."
          },
          "hiking_gear": {
            "q": "What gear do I need for hiking?",
            "a": "Sturdy hiking boots are mandatory for the Maglić ascent. We recommend layered clothing as mountain weather changes quickly. Even in summer, bring a warm hoodie and a raincoat."
          },
          "hiking_transport": {
            "q": "How do we reach the starting points of the trails?",
            "a": "All our hiking tours include off-road transfer in our jeeps to starting positions like Prijevor. Your car remains safe in the camp's parking lot."
          },
          "hiking_guides": {
            "q": "Are the trails in Sutjeska NP safe without a guide?",
            "a": "Although trails are marked, we strongly recommend our licensed guides. They know every stone, ensure your safety, and share incredible stories about the Perućica primeval forest and local history."
          },
          "documents_border": {
            "q": "Do I need a passport for rafting?",
            "a": "It is important to note that the Tara River forms the natural border between Bosnia and Herzegovina and Montenegro, and since the rafting starting point is located in Montenegro, we are required to register your travel documents with the border authorities of both countries. While a valid national ID card is sufficient for citizens of Serbia and Bosnia and Herzegovina, a valid passport is mandatory for children and citizens of all other countries, so we kindly ask you to verify the validity of your documents before departure."
          },
          "what_to_bring": {
            "q": "What should I bring with me?",
            "a": "We provide complete rafting equipment (wetsuit, boots, vest, helmet). You should bring: swimwear (worn under the wetsuit), a towel, personal hygiene items, and good vibes. For hiking tours, sturdy footwear and layered clothing are mandatory."
          },
          "phones_cameras": {
            "q": "Can I bring a phone or camera on the boat?",
            "a": "You can, but at your own risk. The boats have waterproof bags, but we advise leaving valuables in the camp or in the safe. The best option for recording is a GoPro camera (you can rent one from us or buy footage from our skippers)."
          },
          "equipment_hygiene": {
            "q": "Is the equipment washed and maintained?",
            "a": "Hygiene is our priority. All equipment (wetsuits, boots, helmets) is thoroughly washed, disinfected, and dried after every use. You always get clean and functional gear."
          },
          "accommodation_types": {
            "q": "What accommodation do you have and do bungalows have bathrooms?",
            "a": "We offer various accommodation options. Our lower wooden bungalows use clean shared toilets and showers. The upper bungalows (Comfort, Superior, and Premium) feature a private toilet inside, while showers are located in the shared facilities. We also provide designated spots for campers and tents."
          },
          "parking_wifi": {
            "q": "Do you have parking and internet?",
            "a": "Yes, we have a large, free parking area for all guests, which is under video surveillance. Also, the entire camp complex, including the restaurant and bungalows, is covered by free Wi-Fi signal."
          },
          "food_diet": {
            "q": "Do you have options for vegetarians or special diets?",
            "a": "Of course. Our cuisine is based on local specialties, but we respect all your needs. Whether you are vegetarian, vegan, or gluten-free, just let us know when booking, and our chefs will prepare a special meal for you."
          },
          "pets": {
            "q": "Is the camp Pet Friendly?",
            "a": "Yes! Your pets are welcome in our camp. We only ask that you take care of them and be mindful of other guests to ensure a pleasant stay for everyone."
          },
          "booking_deposit": {
            "q": "How do I book and is a deposit required?",
            "a": "You can make a reservation via the form on the website, email, or phone. To confirm the reservation, a deposit payment of 50€ per person is required (to a bank account in Serbia or BiH). You pay the remaining amount upon arrival at the camp."
          },
          "cancellation": {
            "q": "What if I have to cancel my arrival?",
            "a": "Reservations can be rescheduled or canceled free of charge up to 3 weeks before the planned date. In that case, the deposit is returned or transferred to a new date. Rain is not a valid reason for cancellation as tours take place in the rain."
          },
          "solo_travelers": {
            "q": "Can I come alone or as a couple, without a large group?",
            "a": "Of course! You don't need to have your own group. We organize tours daily and will gladly join you with other cheerful teams in the boat. It's a great opportunity to make new friends."
          }
        }
      },
      // --- PACKAGES (DATA) ---
      packages: {
        rafting: [
            {
                id: 1, 
                title: "RAFTING SPRINT",
                duration: "1 Day",
                price: "70€",
                difficulty: "Medium",
                description: "Ideal choice for those passing through! Experience the thrill of Tara and enjoy a traditional lunch. Fast, intense and unforgettable.",
                image: "/images/scenic-drina-river-rafting.webp",
                features: ["1x Meal (Lunch)", "No overnight stay", "All Equipment & Transport", "Insurance included"],
                fullItinerary: [
                    "Group gathering at agreed time between participants and organizers.",
                    "Equipment assignment: Each participant receives a neoprene suit, boots, and vest.",
                    "Transport by jeeps and vans to Brštenovica where rafting begins.",
                    "Team formation and meeting the skipper. Boats have a capacity of 10-12 people.",
                    "Rafting starts around 13:00h. The tour leads through 14km of the most exciting part of Tara.",
                    "The descent lasts about 3.5 hours with breaks for swimming and refreshment.",
                    "Return to the camp by 17:00h.",
                    "Lunch - traditional cuisine (veal under the bell, rafter soup...).",
                    "End of tour after lunch."
                ]
            },
            {
                id: 2,
                title: "ADRENALINE RUSH",
                duration: "1 Day",
                price: "75€",
                difficulty: "Medium",
                description: "Full day adventure! Start with breakfast, conquer Tara rapids and finish with a rich lunch. Most popular one-day choice.",
                image: "/images/reservation-background.webp",
                features: ["2x Meals (Breakfast, Lunch)", "No overnight stay", "Complete Equipment", "Return by 17h"],
                fullItinerary: [
                    "Breakfast until 10:30h – domestic and local cuisine.",
                    "Equipment assignment: Each participant receives a neoprene suit, boots, and vest.",
                    "Transport by jeeps to Brštenovica (rafting start).",
                    "Team formation, meeting skippers and rules. Boats capacity 10-12 people.",
                    "Rafting starts around 13:00h. Tour through 14km of the most exciting part of Tara.",
                    "Descent lasts about 3.5 hours with breaks for swimming.",
                    "Return to camp by 17:00h.",
                    "Rich traditional lunch/dinner (specialties under the bell...).",
                    "End of tour after meal."
                ]
            },
            {
                id: 3,
                title: "CANYON NIGHT",
                duration: "2 Days / 1 Night",
                price: "from 115€",
                difficulty: "Medium",
                description: "More than rafting! Feel the magic of the evening by the river with a campfire. Includes overnight stay and three top domestic meals.",
                image: "/images/rafting-section.webp",
                features: ["3x Meals", "1x Night", "Rafting 18km", "Evening Party"],
                fullItinerary: [
                    "DAY 1:",
                    "Arrival at camp in the afternoon and accommodation.",
                    "Dinner, hanging out by the campfire, music and rest.",
                    "DAY 2:",
                    "Breakfast until 10:30h – domestic cuisine.",
                    "Equipment assignment (suit, boots, vest).",
                    "Transport to Brštenovica (rafting start).",
                    "Team formation and skipper instructions.",
                    "Rafting starts around 13:00h (14km exciting part of Tara).",
                    "Return to camp by 17:00h.",
                    "Traditional lunch (veal under the bell...).",
                    "End of tour after lunch."
                ]
            },
            {
                id: 4,
                title: "TARA ULTIMATE",
                duration: "3 Days / 2 Nights",
                price: "from 145€",
                difficulty: "Medium",
                description: "Real escape from reality. Two nights in nature, four meals and rafting adventure. Perfect weekend package to recharge.",
                image: "/images/rafting-home-hero.webp",
                features: ["4x Meals", "2x Nights", "Complete Equipment", "Insurance Included"],
                fullItinerary: [
                    "DAY 1:",
                    "Arrival at camp in the afternoon and accommodation.",
                    "Dinner, campfire, music and rest.",
                    "DAY 2:",
                    "Breakfast until 10:30h – domestic cuisine.",
                    "Equipment assignment and transport to start.",
                    "Rafting starts around 13:00h.",
                    "Return to camp by 17:00h.",
                    "Traditional dinner and campfire hanging out.",
                    "DAY 3:",
                    "Breakfast and departure."
                ]
            },
            {
                id: 5,
                title: "NATURE MASTER",
                duration: "3 Days / 2 Nights",
                price: "210€",
                difficulty: "Hard",
                description: "Exclusive combination of Rafting and Hiking! Explore Perućica rainforest and Tara canyon. 5 meals and 2 nights for total hedonism.",
                image: "/images/adventure-center-drina-team.webp",
                features: ["5x Meals", "2x Nights", "Perućica Visit", "Rafting Adventure"],
                fullItinerary: [
                    "DAY 1:",
                    "Arrival at camp in afternoon, accommodation.",
                    "Dinner, campfire, music.",
                    "DAY 2:",
                    "Breakfast until 10:30h.",
                    "Equipment assignment and transport to Brštenovica.",
                    "Rafting start 13:00h.",
                    "Return to camp by 17:00h.",
                    "Traditional dinner and campfire.",
                    "DAY 3:",
                    "Breakfast around 09:00h.",
                    "Visit to Perućica Rainforest.",
                    "Continuation: Rafting new section or Drina descent.",
                    "Return to camp 17:00h, dinner and end of tour."
                ]
            }
        ],
        hiking: [
          { 
              id: 1, 
              title: "Tara River Canyon Rim", 
              duration: "4h", 
              level: "Medium", 
              description: "Scenic hike along the edge of the 1000m deep canyon. Off-road vehicle departure.", 
              image: "/images/tara-river-canyon-hiking.webp", 
              details: ["Start: 08:00h via Off-road vehicle", "Hike duration: 4h", "View of Durmitor and Piva"],
              fullItinerary: [
                  "Departure at 08:00h by off-road vehicle from the camp.",
                  "Walk along the canyon edge with several viewpoints offering unforgettable views of the Tara Canyon, about 1000m deep.",
                  "Possible visit to Durmitor mountain and Sušica and Piva canyons.",
                  "Estimated hiking time is 4 hours."
              ]
          },
          { 
              id: 2, 
              title: "Trnovačko Lake & Prijevor", 
              duration: "4h", 
              level: "Medium", 
              description: "Hiking to the heart-shaped lake (Maglić/Volujak). Swimming possible.", 
              image: "/images/trnovacko-jezero-hiking-tara.webp", 
              details: ["Start: 08:00h to Prijevor (1668m)", "Hike duration: 4h", "Swimming in alpine lake"],
              fullItinerary: [
                  "Departure at 08:00h by off-road vehicle from the camp to Prijevor (1668m asl) at the foot of Maglić mountain.",
                  "On the way, we visit: Perućica rainforest, Skakavac waterfall (75m high).",
                  "Then we go to Trnovačko Lake, located at an altitude of 1517m between Maglić and Volujak mountains. This is a beautiful environment within a crown of peaks. Swimming in the lake is popular and recommended.",
                  "Estimated hiking time is 4 hours."
              ]
          },
          { 
              id: 3, 
              title: "Maglić Ascent", 
              duration: "6h", 
              level: "Hard", 
              description: "Conquer the highest peak of BiH (2386m) with panoramic views of NP Sutjeska.", 
              image: "/images/planinarenje-maglic-sutjeska.webp", 
              details: ["Start: 08:00h to Vučevo base", "Hike duration: 6h", "Highest peak of Bosnia & Herzegovina"],
              fullItinerary: [
                  "Departure at 08:00h from the camp to Lokva-Dernežište at the foot of Vučevo mountain.",
                  "On the way, we visit Perućica rainforest, including the Skakavac waterfall (75m high).",
                  "Then from Vučevo, we hike towards Maglić peak (2386m) – the highest mountain in Bosnia and Herzegovina. There are no words to describe the view from the top.",
                  "Estimated hiking time is 6 hours."
              ]
          },
          { 
              id: 4, 
              title: "Perućica Rainforest & Skakavac", 
              duration: "4h", 
              level: "Easy/Medium", 
              description: "Walk through one of the last rainforests in Europe and view the 75m high Skakavac waterfall.", 
              image: "/images/vodopad-skakavac-perucica.webp",  
              details: ["Start: 09:00h to Dragoš sedlo", "Hike duration: 4h", "Panoramic view of Skakavac waterfall"],
              fullItinerary: [
                  "Departure at 09:00h by off-road vehicle from the camp to Dragoš village.",
                  "Break at viewpoints overlooking the forest and Skakavac waterfall (75m high).",
                  "We continue through the forest towards Tunjemir and go to Suha where transport awaits us.",
                  "Estimated hiking time is 4 hours."
              ]
          },
          { 
              id: 5, 
              title: "Zelengora", 
              duration: "3h+", 
              level: "Easy", 
              description: "Zelengora is famous for its 'mountain eyes' – crystal-clear glacial lakes.", 
              image: "/images/zelengora-planinska-jezera.webp", 
              details: ["Start: 09:00h towards Zelengora lakes", "Hike duration: 3h+", "This tour is fully customizable based on your wishes and fitness level."],
              fullItinerary: [
                  "Departure at 09:00h from the camp towards Zelengora.",
                  "Zelengora hides 8 beautiful lakes (Donje Bare, Gornje Bare, Orlovačko, Kotlaničko, and others).",
                  "There are many combinations of trails and viewpoints we can visit; specific lakes and the intensity of the tour are arranged directly at the camp with your guide.",
                  "Return to the camp is flexible, depending on the number of locations you decide to visit."
              ]
          }
      ]
      }
    }
  },
  sr: {
    translation: {
      "seo": {
        "home": {
          "title": "Auto Camp Drina | Rafting, Kampovanje i Priroda u Foči",
          "description": "Posetite Auto Kamp Drina u Foči. Doživite uzbudljiv rafting Tarom, mirno kampovanje pored reke i autentično gostoprimstvo u srcu netaknute prirode. Rezervišite svoju divlju avanturu već danas!"
        },
        "rafting": {
          "title": "Rafting Tara i Drina | Avantura života na reci",
          "description": "Osvojite kanjon reke Tare, najdublji u Evropi! Pridružite se našem profesionalnom timu u adrenalinskoj rafting avanturi kroz kristalno čistu vodu, divlje bukove i prelepe vodopade. Oprema je uključena."
        },
        "hiking": {
          "title": "Hiking Ture | Istražite Perućicu i Dinarske Alpe",
          "description": "Planinarite kroz Perućicu, poslednju prašumu u Evropi, i osvojite Dinarske Alpe. Otkrijte poglede koji oduzimaju dah i skrivena glečerska jezera sa našim stručnim vodičima. Raj za ljubitelje prirode!"
        },
        "camping": {
          "title": "Kampovanje pored reke | Miran odmor u Foči",
          "description": "Opustite se u vrhunskom kampu pored reke blizu Foče. Uživajte u sigurnim mestima za šatore i kampere, modernim sadržajima i umirujućem zvuku Drine. Savršena baza za vaše proputovanje kroz Balkan."
        },
        "multiday": {
          "title": "Višednevne Nature Ture | Potpuni Drina doživljaj",
          "description": "Vrhunska ekspedicija od 3 do 5 dana! Kombinujte divlji rafting, epske planinarske ture i tradicionalnu kuhinju u jednu nezaboravnu bosansku avanturu. Mi brinemo o logistici, vi uživajte u divljini."
        },
        "aboutus": {
          "title": "O nama | Porodična tradicija Auto Kampa Drina",
          "description": "Saznajte više o porodičnom nasleđu iza Auto Kampa Drina. Decenijama delimo ljubav prema Tari i Drini sa avanturistima iz celog sveta. Postanite i vi deo naše duge i ponosne porodične tradicije."
        },
        "bikerhub": {
          "title": "Biker Hub | Moto kamp u Bosni i Hercegovini",
          "description": "Glavna stanica za motocikliste u Bosni! Siguran parking, hladno pivo i gostoljubiva zajednica vozača. Vaša idealna baza za istraživanje vijugavih planinskih puteva i prevoja Balkanskog poluostrva."
        },
        "faq": {
          "title": "FAQ | Sve što treba da znate o boravku",
          "description": "Planirate posetu Auto Kampu Drina? Ovde pronađite sve odgovore o opremi za rafting, graničnim prelazima, rezervacijama i savetima za putovanje kroz Bosnu. Sve što vam treba za put bez stresa."
        }
      },
      navbar: {
        home: "Početna",
        activities: "Aktivnosti",
        rafting: "Rafting",
        hiking: "Planinarenje",
        camping: "Kampovanje",
        multiday: "Ekspedicije",
        aboutus: "O Nama",
        bikerhub: "Biker Hub",
        faq: "FAQ",
        bookBtn: "Rezerviši Odmah",
        phone: "Pozovite"
      },
      common: {
        readMore: "Pročitaj Više",
        details: "Detaljnije",
        bookAdventure: "Rezerviši Avanturu",
        bookAccommodation: "Rezerviši Smještaj",
        viewAll: "Vidi Sve Opcije",
        pricePerPerson: "po osobi",
        planTour: "Plan Ture",
        closePlan: "Zatvori Plan",
        duration: "Trajanje",
        level: "Težina",
        onRequest: "Na upit",
        detailedPlanTitle: "Detaljan plan ture",
        includedInPriceTitle: "Uključeno u cijenu:",
        readyForAdventure: "Spremni za avanturu?",
        planSoon: "Detaljan plan uskoro...",
        likePlan: "Sviđa vam se ovaj plan?",
        bookThisPackage: "Rezerviši Ovaj Paket",
        scheduleNote: "Raspored može varirati zavisno od vremenskih uslova i tempa grupe.",
        close: "Zatvori"
      },
      booking: {
        title: "Rezervacija",
        subtitle: "Ispunite formu i kontaktiraćemo vas u roku od 2 sata za potvrdu termina.",
        labels: {
            name: "Ime",
            lastName: "Prezime",
            email: "Email",
            phone: "Broj telefona",
            activity: "Aktivnost koja vas zanima?",
            accommodation: "Tip smještaja",
            guests: "Broj gostiju",
            date: "Datum od/do",
            message: "Dodatna pitanja ili informacije?",
            send: "Pošalji Upit"
        },
        activities: {
            sleep: "Samo noćenje",
            rafting: "Rafting",
            hiking: "Planinarenje",
            canyoning: "Kanjoning",
            other: "Ostalo"
        },
        accommodations: {
            bungalowNoToilet: "Bungalov (bez toaleta)",
            bungalowToilet: "Bungalov (sa toaletom)",
            tent: "Vaš šator",
            rv: "Vaš Kamper/Kombi/Džip"
        }
      },
      contact: {
        title: "Postavite Pitanje",
        subtitle: "Imate nedoumicu? Pišite nam i odgovorićemo vam u najkraćem roku.",
        fullName: "Ime i Prezime",
        messagePlaceholder: "Vaše pitanje ili poruka...",
        successMessage: "Vaša poruka je uspešno poslata! Javićemo vam se uskoro.",
        errorMessage: "Greška prilikom slanja. Molimo pokušajte ponovo ili nas kontaktirajte direktno."
      },
      footer: {
        description: "Prvi registrovani privatni rafting kamp u BiH. Osnovani 1987. Sigurnost i nezaboravno iskustvo su naš prioritet već 20 godina.",
        quickLinks: "Aktivnosti",
        explore: "Istražite",
        links: {
            rafting: "Rafting Tarom",
            hiking: "Hiking Maglić",
            about: "O Nama",
            camping: "Kamp Smještaj"
        },
        contact: "Kontakt",
        location: "Lokacija",
        openMap: "Otvori Mapu",
        openInGoogleMaps: "Otvori u Google Mapama",
        rights: "Auto Camp Drina. Sva prava zadržana."
      },
      // --- HOME PAGE ---
      home: {
        raftingTitle: "Najtraženije Rafting Ture",
        raftingSubtitle: "Naše najpopularnije rafting ture koje biraju gosti iz cijelog svijeta.",
        viewAllOffers: "Pogledaj Sve Ponude",
        exploreMountains: "Istraži Planine",
        stepAbove: "Korak Iznad",
        clouds: "Oblaka",
        hikingDesc: "Nacionalni Park Sutjeska nudi najljepše planinarske staze u regionu. Od laganih šetnji prašumom do osvajanja najvišeg vrha BiH.",
        expertGuides: "Stručni Vodiči",
        expertGuidesDesc: "Licencirani vodiči za svaku turu",
        offRoadTransport: "Off-Road Prevoz",
        offRoadTransportDesc: "Džipovima do startnih pozicija",
        allTours: "Sve Ture"
      },
      hero: {
        tagline: "Prvi registrovani privatni kamp u BiH",
        explore: "Istraži Ponude",
        campBtn: "Pogledaj Kamp",
        stats: [
          { id: 1, label: "Godina Tradicije", value: "37+" },
          { id: 2, label: "Zadovoljnih Gostiju", value: "15k+" },
          { id: 3, label: "Sigurnost", value: "100%" }
        ],
        slides: [
          {
            id: 1,
            image: "/images/rafting-home-hero.webp",
            title: "Rafting Tarom",
            text: "Doživite vrhunsku adrenalinsku avanturu na divljim talasima Tare. Zabava, timski duh i netaknuta priroda u najdubljem kanjonu Evrope."
          },
          {
            id: 2,
            image: "/images/vodopad-skakavac-perucica.webp",
            title: "Prašuma Perućica",
            text: "Zakoračite u srce jedne od posljednjih očuvanih prašuma u Evropi, dom vodopada Skakavac."
          },
          {
             id: 3,
             image: "/images/trnovacko-back.webp",
             title: "Trnovačko Jezero i NP Sutjeska",
             text: "Istražite najstariji nacionalni park u BiH, osvojite Maglić, najviši vrh u državi i otkrijte magiju smaragdnog jezera u obliku srca skrivenog među planinskim vrhovima."
          },
        ]
      },
      trust: {
        badge: "TRADICIJA OD 1987",
        title: "Prvi registrovani privatni rafting kamp u Bosni i Hercegovini",
        subtitle: "Bezbednost i nezaboravno iskustvo su naš prioritet već više od 35 godina.",
        desc: "Auto Camp Drina nije samo mesto na mapi, to je porodično nasleđe koje čuva duh reke Tare."
      },
      aboutUs: {
        subtitle: "NAŠA POSVEĆENOST PRIRODI",
        title: "Od Pustolovine do Porodične Tradicije",
        text: "Auto Camp Drina je mnogo više od kampa; to je priča o ljubavi prema reci Tari i planinama koje je okružuju. Kroz decenije, gradili smo utočište koje spaja uzbuđenje <0>divljih voda</0> sa toplinom doma, osiguravajući da svaki gost postane deo naše proširene planinske porodice. Naša tradicija je vaša garancija za nezaboravan provod.",
        imageCaption: "Mesto gde počinje vaša priča"
      },
      camping: {
        title: "Oaza Pored Rijeke Drine",
        subtitle: "Otkrijte naš kamp i smještaj: udobni bungalovi, prostran prostor za kampere i šatore, sve uz huk rijeke.",
        promoTitle: "Mir, Tišina i Porodični Komfor",
        promoText: "Auto Camp 'Drina' je idealna destinacija za sve koji žele pravi odmor u prirodi bez odricanja od komfora.",
        features: {
          bungalows: { title: "Drveni Bungalovi", desc: "Udoban smještaj sa posteljinom." },
          campers: { title: "Kamper Parcele", desc: "Ravne parcele sa priključcima." },
          facilities: { title: "Čisti Sadržaji", desc: "Moderni toaleti i tuševi." },
          river: { title: "Pored Rijeke", desc: "Buđenje uz zvuk Drine." }
        }
      },
      reviews: [
        {
          id: 1,
          title: "\"Ljubaznost\"",
          text: "\"Sve je bilo sjajno od početka do kraja, ali ono što je iskustvo učinilo izuzetnim je pažnja posvećena detaljima i ljubaznost vlasnika i osoblja. Uvek su bili tu da pomognu, odgovore na pitanja i posluže hranu i piće. Hrana je bila odlična i sveže pripremljena.\"",
          author: "Mick, Irska",
          countryCode: "ie",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "https://www.google.com/travel/search?q=auto%20kamp%20drina&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73157411%2C73192290%2C73198317%2C73201205&hl=sr-RS&gl=rs&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaZwpHEkUyJTB4NDc1ODg2OTlkOTg2YTI1OToweGRkNzYwMzVhNzU3OGNhYmM6HNCQ0YPRgtC-INC60LDQvNC_INCU0YDQuNC90LASHBIUCgcI6Q8QDBgNEgcI6Q8QDBgOGAEyBAgAEAAqBwoFOgNSU0Q&qs=CAEyKENob0l2SlhqcTZmcmdMdmRBUm9OTDJjdk1URmlOek53TVdwNWN4QUI4AkIJCbzKeHVaA3bdQgkJvMp4dVoDdt1IAA&ictx=111&ap=KigKEglbyI9I27xFQBH9G18Go7gyQBISCTODQTl6ykVAEf0bX0b41zJAMAC6AQdyZXZpZXdz"
        },
        {
          id: 2,
          title: "\"Predivno\"",
          text: "\"Domaćin Filip je bio super fin, išli smo i na rafting sa njim kao vodičem i sjajno smo se zabavili! Kamp je tako lep i opuštajući, nalazi se odmah pored reke Drine. Hrana i kuhinja su im bile neverovatne! Zaista preporučujem ovo mesto za predivno iskustvo u prirodi.\"",
          author: "Claudio, Italija",
          countryCode: "it",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "https://www.google.com/travel/search?q=auto%20kamp%20drina&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73157411%2C73192290%2C73198317%2C73201205&hl=sr-RS&gl=rs&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaZwpHEkUyJTB4NDc1ODg2OTlkOTg2YTI1OToweGRkNzYwMzVhNzU3OGNhYmM6HNCQ0YPRgtC-INC60LDQvNC_INCU0YDQuNC90LASHBIUCgcI6Q8QDBgNEgcI6Q8QDBgOGAEyBAgAEAAqBwoFOgNSU0Q&qs=CAEyKENob0l2SlhqcTZmcmdMdmRBUm9OTDJjdk1URmlOek53TVdwNWN4QUI4AkIJCbzKeHVaA3bdQgkJvMp4dVoDdt1IAA&ictx=111&ap=KigKEglbyI9I27xFQBH9G18Go7gyQBISCTODQTl6ykVAEf0bX0b41zJAMAC6AQdyZXZpZXdz"
        },
        {
          id: 3,
          title: "\"Ušuškano skrovište na Drini\"",
          text: "\"Sjajna lokacija blizu reke, udobne kolibe, odličan restoran na otvorenom sa kul muzikom i veoma prijatnim domaćinima. Definitivno ćemo se vratiti!\"",
          author: "Martin, Nemačka",
          countryCode: "de",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "https://www.google.com/travel/search?q=auto%20kamp%20drina&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73157411%2C73192290%2C73198317%2C73201205&hl=sr-RS&gl=rs&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaZwpHEkUyJTB4NDc1ODg2OTlkOTg2YTI1OToweGRkNzYwMzVhNzU3OGNhYmM6HNCQ0YPRgtC-INC60LDQvNC_INCU0YDQuNC90LASHBIUCgcI6Q8QDBgNEgcI6Q8QDBgOGAEyBAgAEAAqBwoFOgNSU0Q&qs=CAEyKENob0l2SlhqcTZmcmdMdmRBUm9OTDJjdk1URmlOek53TVdwNWN4QUI4AkIJCbzKeHVaA3bdQgkJvMp4dVoDdt1IAA&ictx=111&ap=KigKEglbyI9I27xFQBH9G18Go7gyQBISCTODQTl6ykVAEf0bX0b41zJAMAC6AQdyZXZpZXdz"
        },
        {
          id: 4,
          title: "\"Odlično osoblje\"",
          text: "\"Savršena lokacija blizu reke. Lep prostor i za šatore ili kampere! Ukusna hrana (probali smo mešano meso za večeru, a i doručak je bio dobar!). Odlično osoblje (porodični posao). Super čisto! Odlična stanica za vaše putovanje!\"",
          author: "Dimitrios, Grčka",
          countryCode: "gr",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "https://www.google.com/travel/search?q=auto%20kamp%20drina&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73157411%2C73192290%2C73198317%2C73201205&hl=sr-RS&gl=rs&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaZwpHEkUyJTB4NDc1ODg2OTlkOTg2YTI1OToweGRkNzYwMzVhNzU3OGNhYmM6HNCQ0YPRgtC-INC60LDQvNC_INCU0YDQuNC90LASHBIUCgcI6Q8QDBgNEgcI6Q8QDBgOGAEyBAgAEAAqBwoFOgNSU0Q&qs=CAEyKENob0l2SlhqcTZmcmdMdmRBUm9OTDJjdk1URmlOek53TVdwNWN4QUI4AkIJCbzKeHVaA3bdQgkJvMp4dVoDdt1IAA&ictx=111&ap=KigKEglbyI9I27xFQBH9G18Go7gyQBISCTODQTl6ykVAEf0bX0b41zJAMAC6AQdyZXZpZXdz"
        },
        {
          id: 5,
          title: "\"Izvanredno\"",
          text: "\"Utisak je neverovatan. Jutro na ovom mestu je stvarno predivno. Ako negde postoji porodica koja zrači optimizmom i dobrom energijom, onda su to ljudi kojima je ovaj kamp porodični posao. Sjajan utisak! Mesto koje puni baterije u svakom smislu. Najtoplija preporuka. Svratite i uverite se. Mi ćemo ponovo...\"",
          author: "Zeljko, Srbija",
          countryCode: "rs",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "https://www.google.com/travel/search?q=auto%20kamp%20drina&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73157411%2C73192290%2C73198317%2C73201205&hl=sr-RS&gl=rs&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaZwpHEkUyJTB4NDc1ODg2OTlkOTg2YTI1OToweGRkNzYwMzVhNzU3OGNhYmM6HNCQ0YPRgtC-INC60LDQvNC_INCU0YDQuNC90LASHBIUCgcI6Q8QDBgNEgcI6Q8QDBgOGAEyBAgAEAAqBwoFOgNSU0Q&qs=CAEyKENob0l2SlhqcTZmcmdMdmRBUm9OTDJjdk1URmlOek53TVdwNWN4QUI4AkIJCbzKeHVaA3bdQgkJvMp4dVoDdt1IAA&ictx=111&ap=KigKEglbyI9I27xFQBH9G18Go7gyQBISCTODQTl6ykVAEf0bX0b41zJAMAC6AQdyZXZpZXdz"
        }
      ],
      // --- RAFTING PAGE ---
      raftingPage: {
        title: "Izaberite Svoju Avanturu",
        subtitle: "Od kratkih adrenalinskih izleta do višednevnih ekspedicija - imamo paket za svakoga."
      },
      raftingHero: {
        tag: "Dobrodošli u Kanjon Tare",
        title: "Otkrijte \"Suzu Evrope\"",
        description: "Zamislite mjesto gdje vrijeme staje, a priroda govori jezikom vječnosti. Kanjon rijeke Tare nije samo geografski pojam – to je svetište divljine uklesano u srce Balkana. Sa dubinom koja doseže vrtoglavih 1300 metara, ovo je <0>najdublji kanjon u Evropi</0> i drugi u svijetu. Njena tirkizna voda, toliko čista da je možete piti direktno iz dlana cijelim njenim tokom, vijuga kroz drevne šume crnog bora i visoke litice koje čuvaju tajne vijekovima.",
        features: {
            tradition: { title: "Tradicija od 1987", text: "Ponosno nosimo titulu prvog registrovanog privatnog rafting kampa u BiH. Decenije iskustva su naša garancija." },
            safety: { title: "Sigurnost 100%", text: "Vaša sigurnost je naš imperativ. Licencirani IRF skiperi i vrhunska, atestirana oprema osiguravaju bezbjednu avanturu." },
            family: { title: "Porodična Atmosfera", text: "Kod nas niste broj. Ponosimo se autentičnim gostoprimstvom, domaćom kuhinjom i večerima uz logorsku vatru." }
        }
      },
      // --- HIKING PAGE ---
      hikingPage: {
        title: "Planinarske Ture",
        subtitle: "Pažljivo odabrane rute za rekreativce i iskusne planinare. Svaki korak je nova priča."
      },
      hikingHero: {
        tag: "Nacionalni Park Sutjeska",
        title: "Korak Iznad Oblaka",
        description: "Osvojite Maglić, najviši vrh Bosne i Hercegovine. Ogledajte se u smaragdnom <1>Trnovačkom jezeru</1>. Istražite <2>Perućicu</2>, jednu od posljednjih prašuma Evrope. Ovo nije samo šetnja – ovo je hodočašće prirodi.",
        stats: {
            maglic: "Vrh Maglića",
            lakes: "Glečerskih Jezera",
            air: "Čist Vazduh"
        }
      },
      hikingEquipment: {
        ctaTitle: "Spremni za Polazak?",
        ctaText: "Planinarenje u NP Sutjeska zahtijeva adekvatnu pripremu. Iako naši vodiči brinu o sigurnosti, vaša lična oprema je ključna za udobnost i uživanje. Ne brinite, mi obezbjeđujemo prevoz terenskim vozilima do početnih tačaka!",
        ctaButton: "Kontaktirajte nas za savjet",
        items: {
            shoes: { title: "Obuća", text: "Čvrste planinarske cipele (gojzerice) su obavezne za teže ture (Maglić)." },
            clothes: { title: "Odjeća", text: "Slojevito oblačenje. Ponesite kabanicu i topliju duksericu čak i ljeti." },
            guides: { title: "Vodiči", text: "Sve naše ture vode licencirani planinarski vodiči koji poznaju svaki kamen." },
            transport: { title: "Prevoz", text: "Uključujemo transfer našim džipovima do polaznih tačaka." }
        }
      },
      // --- CAMPING PAGE ---
      campingPage: {
        intro: {
            title: "Savršeno Mjesto za Porodični Odmor",
            text1: "Naš kamp je smješten na prostranom, ravnom terenu tik uz obalu Drine, što ga čini <0>idealnim za porodice</0>. Unutar kampa nema strmih litica niti prometnih puteva.",
            text2: "Noći su ovdje posebna priča. Udaljeni smo od gradske vreve Foče, pa je tišina zagarantovana.",
            fenced: "Ograđen i siguran",
            petFriendly: "Pet Friendly",
            imageOverlay: {
                title: "Stvorite uspomene",
                text: "Večeri uz logorsku vatru se pamte zauvijek."
            }
        },
        accommodation: {
            title: "Naši Smještajni Kapaciteti",
            subtitle: "Odaberite svoj stil boravka u prirodi.",
            bookBtn: "Rezerviši Mjesto",
            bungalows: {
                title: "Drveni Bungalovi",
                desc: "Autentične drvene kućice koje mirišu na borovinu. Udobni kreveti, posteljina i struja.",
                badge: "TOP IZBOR",
                features: ["Kapacitet: 2-4 osobe", "Posteljina uključena", "Blizina toaleta"]
            },
            campers: {
                title: "Kamp Prikolice & Kamperi",
                desc: "Prostrane, ravne parcele sa lakim pristupom za vozila svih veličina.",
                features: ["Priključak za struju", "Punjenje vode", "Hemijski toalet"]
            },
            tents: {
                title: "Prostor za Šatore",
                desc: "Najbolja mjesta na travi, u hladu voćnjaka ili tik uz rijeku.",
                features: ["U hladovini", "Pristup roštilju", "Korištenje tuševa"]
            }
        },
        amenities: {
            title: "Sve što vam je potrebno",
            subtitle: "Auto Camp Drina nudi kompletnu infrastrukturu za ugodan boravak.",
            items: {
                electricity: { title: "Struja", desc: "Priključci dostupni." },
                toilets: { title: "Toaleti", desc: "Čisti toaleti i tuševi." },
                wifi: { title: "Wi-Fi", desc: "Besplatan internet." },
                restaurant: { title: "Restoran", desc: "Domaća hrana i piće." }
            }
        }
      },
      campingHero: {
        tag: "Oaza Mira na Obali Drine",
        title: "Buđenje uz Huk Rijeke",
        text: "Zaboravite na gradsku buku. U Auto Kampu Drina, vaš alarm je pjev ptica, a pogled s prozora je smaragdna voda Drine."
      },
      // --- ABOUT US PAGE (NOVO) ---
      aboutHero: {
        tag: "Osnovano 1987.",
        title: "Više od Kampa.",
        highlight: "Porodica.",
        text: "Auto Camp 'Drina' nije samo mjesto na mapi. To je dom gdje se gosti vraćaju kao prijatelji. Prvi smo registrovani privatni rafting kamp u BiH, a naša misija je ista već skoro 40 godina: nezaboravna avantura i iskreno gostoprimstvo."
      },
      aboutUsPage: {
        story1: {
            title: "Pioniri Kampovanja od 1987.",
            subtitle: "NAŠA ISTORIJA",
            text: "Osnovan 1987. godine kao <0>prvi privatni kamp</0> u bivšoj Jugoslaviji. Naše pravilo br. 1 u Auto Kampu \"Drina\" je da goste tretiramo <0>kao porodicu, a ne kao mušterije!</0>",
            text2: "Porodice Kostović i Vujičić s ponosom prenose istoriju i priče ovog kraja uz logorsku vatru, čineći vaš boravak autentičnim iskustvom koje se pamti cijeli život.",
            badge1: "Tradicija od 1987.",
            badge2: "Porodice Kostović & Vujičić",
            imageCaption: "\"Gostoprimstvo je u našem DNK.\""
        },
        story2: {
            title: "Život na Obali Drine",
            subtitle: "LOKACIJA I AVANTURA",
            text: "Smješteni smo na samoj lijevoj obali rijeke, nudeći jedinstvenu atmosferu jutarnje izmaglice i direktan pristup vodi. Specijalizovani smo za <strong>rafting ture Tarom i Drinom</strong>, a našim gostima su u svakom trenutku dostupni čamci i kajaci za samostalno istraživanje.",
            button: "Rafting Ture"
        },
        safety: {
            title: "Bezbijednost Bez Kompromisa",
            subtitle: "SIGURNOST I OPREMA",
            text1: "Vaša sigurnost je temelj svake naše avanture. Svi naši skiperi su <0>sertifikovani profesionalci</0> sa dugogodišnjim iskustvom na divljim vodama, obučeni da reaguju u svakoj situaciji.",
            text2: "Koristimo isključivo atestiranu opremu najvišeg kvaliteta. Svaki gost dobija kompletno <0>neoprensko odijelo, profesionalni prsluk i kacigu</0>. Prije svakog polaska, prolazimo detaljne <0>sigurnosne procedure (briefing).</0>",
            badges: {
                skippers: "Licencirani Skiperi",
                equipment: "Atestirana Oprema",
                briefing: "Sigurnosni Briefing",
                insurance: "Osiguranje Gostiju"
            }
        },
        "skippersSection": {
          "subtitle": "Naši stručnjaci",
          "title": "Upoznajte naše skipere i vodiče",
          "description": "Iskusni, licencirani i puni priča. U sigurnim ste rukama našeg legendarnog tima.",
          "listenVibe": "Poslušajte naš ritam:"
        },
        "skippers": [
          {
            "id": 1,
            "name": "Filip Vujičić",
            "role": "Menadžer i glavni vodič",
            "image": "/images/tara-rafting-guide-fica.webp",
            "desc": "Filip je srce Auto Kampa Drina od svoje 12. godine, odrastajući uz ovaj voljeni porodični posao. Kao menadžer, on nadgleda svaki detalj iskustva gostiju, lično dočekujući posetioce kako bi osigurao srdačan i besprekoran boravak. Izvan granica kampa, Filip je profesionalni vodič za rafting i planinarenje, spajajući svoje duboko poznavanje lokalnog kraja sa strašću za avanturom. Bilo da upravlja logistikom ili vodi turu, Filip je uvek tu da pruži profesionalan i lični pečat vašem putovanju.",
            "experience": "10 godina iskustva",
            "specialty": "Divlje vode"
          },
          {
            "id": 2,
            "name": "Jovo",
            "role": "Glavni vodič za penjanje i planinarenje",
            "image": "/images/hiking-mountain-guide.webp",
            "desc": "Majstor visina i skrivenih planinskih staza. Jovo vas bezbedno vodi do najlepših vidikovaca Dinarskih Alpa. Njegova stručnost u penjanju i duboka strast prema divljini svaku šetnju pretvaraju u legendarnu priču.",
            "experience": "7 godina iskustva",
            "specialty": "Planinski vrhovi"
          },
          {
            "id": 3,
            "name": "David",
            "role": "Glavni skiper",
            "image": "/images/tara-rafting-guide-baki.webp",
            "desc": "Naš glavni skiper i motor tima. On je zadužen za vrhunsku zabavu, a njegov avanturistički duh učiniće da svaki talas doživite na potpuno nov način.",
            "experience": "8 godina iskustva",
            "specialty": "Dobra energija"
          },
          {
            "id": 4,
            "name": "Nedeljko",
            "role": "Skiper",
            "image": "/images/tara-rafting-guide-djone.webp",
            "desc": "Ministar bezbednosti na raftingu. Smiren i pribran, Nedeljko je vaš čuvar na reci, idealan za opušten i siguran porodični spust.",
            "experience": "7 godina iskustva",
            "specialty": "Bezbednost na prvom mestu"
          },
          {
            "id": 5,
            "name": "Matja",
            "role": "Muzički urednik",
            "image": "/images/caja.webp",
            "desc": "Kao naš muzički urednik, Matija je zaslužan za vrhunsku zvučnu kulisu koja prati vaš boravak u restoranu. Bilo da uživate u obroku ili posmatrate reku, njegove selekcije stvaraju savršen ambijent za potpuno opuštanje.",
            "experience": "12 godina selekcije zvuka",
            "specialty": "Ambijent i zvuci rijeke",
            "playlists": [
              "https://open.spotify.com/playlist/5yyB3stoa4MI973GYMB0ZN?si=WqzTxnyPRYmu8l5_4DF_pQ",
              "https://open.spotify.com/playlist/3Kly9gSRybUzvOV4w9ryLD?si=mE5tW-RiRTaihKFHn275vA",
              "https://open.spotify.com/playlist/6rZFpCuwxfD6NyPoxWJHGn?si=s20LBN5MSWOqUha6XcJSlA",
              "https://open.spotify.com/playlist/3646BWzyRc4LYclXixF2nv?si=ZH8fWprwTUGoNsPv48Pd5g"
            ]
          }
        ],
        story3: {
            title: "Gorske Oči i Giganti",
            subtitle: "DINARSKI ALPI",
            text: "Zelengora, 'kraljica planina', očarava svojim 'gorskim očima' – bistrim glečerskim jezerima i pastirskim kolibama. Nasuprot njoj stoje giganti Maglić i Volujak sa svojim strmim liticama. Naši <0>iskusni vodiči</0> vas vode kroz ovu divljinu, upoznajući vas sa istorijom i prirodom, uz maksimalnu sigurnost.",
            list: {
                item1: "Maglić, Zelengora, Volujak, Ljubišnja",
                item2: "Kulturni i istorijski spomenici"
            },
            button: "Istražite Ture"
        },
        values: {
            title: "Zašto smo drugačiji?",
            subtitle: "Nismo komercijalna fabrika turizma. Mi smo čuvari tradicije i prirode.",
            cards: {
                personal: { title: "Lični Pristup", text: "Svakog gosta dočekujemo lično. Znamo vaša imena i priče. Ovdje niste broj sobe." },
                safety: { title: "Sigurnost", text: "Koristimo samo najkvalitetniju opremu. Naši vodiči su sertifikovani profesionalci." },
                food: { title: "Domaća Kuhinja", text: "Služimo autentična jela od lokalnih namirnica – teletina ispod sača, sir i pršut." }
            }
        }
      },
      "multiDay": {
        "hero": {
          "tagline": "Produženo Iskustvo",
          "title": "Više dana, više uspomena",
          "subtitle": "Prepustite se ritmu divljine. Od juriša kroz brzake Tare i osvajanja vrhova, do tišine kanjona i vatre pod zvijezdama. Ovo nije samo odmor, već povratak korijenima gdje svaka staza piše priču za čitav život."
        },
        "package5day": {
          "title": "ULTIMATIVNA",
          "title_highlight": "EKSPEDICIJA",
          "day": "Dan",
          "spots": "Ograničen broj mesta na raspolaganju",
          "subtitle": "All-inclusive paket za prave avanturiste",
          "description": "Naš najprodavaniji višednevni paket koji spaja vodu, zemlju i adrenalin. Šest dana potpunog bega od civilizacije uz vrhunsku hranu i smeštaj.",
          "cta": "Rezerviši 6-dnevnu turu",
          "days": {
            "1": { 
              "title": "Dolazak i Dobrodošlica", 
              "desc": "Check-in nakon 14h. Piće dobrodošlice i smeštaj u bungalove. Upoznavanje sa vodičima i tradicionalna večera uz logorsku vatru i muziku." 
            },
            "2": { 
              "title": "Veliki Rafting Tarom", 
              "desc": "Celodnevna avantura na vodi (18km). Savladavanje najuzbudljivijih brzaka Tare, kupanje ispod vodopada i pauze za fotografisanje. Ručak u prirodi." 
            },
            "3": { 
              "title": "Osvajanje Planinskih Vrhova", 
              "desc": "Hiking tura do Trnovačkog jezera (u obliku srca) ili uspon na Maglić. Fantastičan pogled na prašumu Perućicu. Uključen lanč paket." 
            },
            "4": { 
              "title": "Adrenalin: Kanjoning ili Jeep", 
              "desc": "Izbor je vaš: Istraživanje uskog kanjona Nevidio za najhrabrije ili Jeep Safari prsten oko Durmitora sa opcijom Zip Line-a. Večera pod zvezdama." 
            },
            "5": { 
              "title": "Dan za Odmor i Rekreaciju", 
              "desc": "Slobodan dan za punjenje baterija. Kupanje u Drini, pecanje, odbojka na pesku ili lagana šetnja okolinom. Uživajte u miru kampa." 
            },
            "6": { 
              "title": "Opuštanje i Odlazak", 
              "desc": "Opušteno jutro uz kafu i bogat planinski doručak. Razmena fotografija i video snimaka sa grupom, pakovanje i odjava do 12h." 
            }
          }
        },
        "builder": {
          "tag": "Po meri",
          "titleStart": "Kreiraj Svoju",
          "titleEnd": "Avanturu",
          "subtitle": "Ne odgovara vam gotov paket? Izaberite aktivnosti koje volite, a mi ćemo organizovati sve ostalo.",
          "selectTitle": "Izaberi Aktivnosti",
          "perPerson": "PO OSOBI",
          "total": "Procenjeno",
          "perPersonSuffix": "/ osoba",
          "cta": "Zatraži Ponudu",
          "disclaimer": "*Konačna cena može zavisiti od veličine grupe",
          "features": {
            "guides": "Profesionalni Vodiči",
            "equipment": "Vrhunska Oprema",
            "foodIncludedLabel": "Hrana uključena:",
            "foodIncludedText": "Tradicionalni doručak i ručak/lunch paket su uračunati u cenu svake aktivnosti."
          },
          "activities": {
            "rafting": "Rafting Tarom",
            "hiking": "Planinarske Ture",
            "canyoning": "Kanjoning",
            "jeep": "Jeep Safari",
            "camping": "Kamp Mesto",
            "meals": "Puni Pansion"
          },
        },
        "modal": {
            "title": "Vaša Avantura",
            "summary": "Pregled odabranih aktivnosti",
            "name": "Vaše Ime",
            "dateFrom": "Dolazak",
            "dateTo": "Odlazak",
            "email": "Vaš Email",
            "whatsappBtn": "Pošalji na WhatsApp",
            "emailBtn": "Pošalji Email Upit",
            "total": "Ukupno po osobi",
            "validationError": "Molimo popunite sva polja pre slanja.",
            "successTitle": "Hvala na povjerenju!",
            "successText": "Tvoj upit je uspješno poslat. Naš tim će te kontaktirati u najkraćem roku kako bismo finalizovali detalje.",
            "footerSlogan": "Vidimo se na Drini!",
            "emailSubject": "Upit za Avanturu",
            "emailBodyLabel": "Odabrane aktivnosti",
            "emailPeriodLabel": "Period",
            "emailPriceLabel": "Cijena po osobi",
          "successMsg": "Upit uspešno poslat! Javićemo vam se uskoro.",
            "footerSlogan": "Vidimo se na Drini!"
        },
        "scouts": {
          "badge": "Za velike grupe",
          "title": "Avantura u Auto Kampu Drina",
          "intro": "Dobrodošli u Auto Kamp Drina, vrhunsku bazu za izviđačke grupe i ljubitelje prirode. Smešteni na obali kristalno čiste reke Drine, nudimo savršen spoj divlje avanture i moderne udobnosti.",
          "experienceTitle": "Naše iskustvo",
          "tagline": "Savršen spoj divlje avanture i moderne udobnosti.",
          "features": {
            "camping": { 
              "title": "Kampovanje za izviđače", 
              "desc": "Prostrane, organizovane parcele dizajnirane za grupnu dinamiku i razvoj veština boravka u prirodi." 
            },
            "rafting": { 
              "title": "Rafting na divljim vodama", 
              "desc": "Savladajte čuvene drinske bukove uz pomoć naših profesionalnih vodiča." 
            },
            "hiking": { 
              "title": "Planinarenje sa vodičem", 
              "desc": "Otkrijte skrivene vidikovce i bujne šumske staze direktno iz kampa." 
            },
            "restaurant": { 
              "title": "Restoran na obali", 
              "desc": "Zaboravite na logorsko kuvalo i uživajte u autentičnoj domaćoj kuhinji i obilnim obrocima u našem restoranu." 
            }
          },
          "whyTitle": "Zašto odabrati nas?",
          "whyText": "Specijalizovani smo za gostovanje velikih grupa, pružajući infrastrukturu potrebnu za bezbedan, uzbudljiv i besprekoran izviđački izlet. Od obezbeđenog parkinga do iznajmljivanja opreme, mi rešavamo logistiku kako biste se vi mogli fokusirati na stazu.",
          "cta": "Upit za grupe"
        },
        "meals": {
          "breakfast": "Doručak",
          "lunch": "Ručak",
          "dinner": "Večera",
          "lunch_pack": "Lanč paket"
        }
      },
      "bikerHub": {
        "hero": {
          "tagline": "TET & Rally Base Camp",
          "titleMain": "Ultimate Balkan",
          "titleAccent": "Base Camp",
          "description": "Zaboravite na potragu i počnite sa vožnjom. Smešteni u srcu najsurovijih pejzaža Bosne, mi smo premijerno taktičko čvorište za vozače koji osvajaju TET (Trans Euro Trail) i balkanske prevoje. Pružamo više od kreveta; nudimo sve što bajkeru treba između etapa.",
          "button": "Rezerviši svoj Pit Stop"
        },
        "features": {
          "specs": "Tehničke specifikacije",
          "titleMain": "Zašto Bajkeri",
          "titleAccent": "Biraju Nas",
          "hubLabel": "Base Camp Čvorište",
          "stationLabel": "Verifikovana Stanica",
          "operationalLabel": "Operativna Baza",
          "imageTitle1": "Tvoja Baza",
          "imageTitle2": "Tvoj Način",
          "campView": "Pogled na Kamp",
          "items": {
            "stay": {
              "title": "Boravak po tvom",
              "desc": "Birajte između udobnog privatnog smeštaja ili našeg slikovitog kampa pored reke."
            },
            "fuel": {
              "title": "Gorivo za vožnju",
              "desc": "Naš restoran služi obilne domaće bosanske obroke — savršene za duge dane u sedlu. Takođe nudimo izbor domaćih piva i osvežavajućih pića."
            },
            "garage": {
              "title": "TET Ready",
              "desc": "Auto Kamp Drina je savršena polazna tačka za bajkere, pružajući lak pristup najboljim rutama u regionu. Idealno smo pozicionirani u blizini TET (Trans Euro Trail) staza, što nas čini savršenim čvorištem za off-road avanturiste i dual-sport vozače. Nudimo sve što je jednom bajkeru potrebno za udoban boravak, uz dodatnu sigurnost jer su u blizini dostupne mehaničarske usluge za sve neophodne popravke ili održavanje."
            },
            "storage": {
              "title": "Sigurno skladište",
              "desc": "Planirate dužu turu? Možete bezbedno parkirati svoj automobil i prikolicu u našem kampu dok istražujete Balkan na dva točka."
            },
            "routes": {
              "title": "Najbolje rute",
              "desc": "Smešteni na samoj kapiji Nacionalnog parka Sutjeska i kanjona Tare, neke od najboljih krivina i off-road staza u Evropi su nam na pragu."
            }
          }
        },
        "seeker": {
          "partner": "Strateški Partner",
          "titleBrand": "SEEKER 2000",
          "titleType": "VAGABONDS",
          "description": "Avanturistički motociklistički raid za klasične enduro motore. Bez trke, čista sloboda. Krug od 1000km kroz Bosnu i Crnu Goru.",
          "button": "Istraži Seeker Raid"
        },
        "gallery": {
          "specs": "Foto zapis",
          "titleMain": "Naša baza",
          "titleAccent": "U akciji",
          "hubLabel": "Taktička",
          "stationLabel": "Galerija"
        },
        "partners": {
          "title": "Zvanična podrška i partneri"
        },
        "locator": {
          "titleMain": "Pronađi nas na",
          "titleAccent": "Mapi",
          "verified": "Verifikovane lokacije prilagođene bajkerima",
          "viewBtn": "POGLEDAJ"
        }
      },
      faq: {
        badge: "Centar za pomoć",
        title: "Često Postavljana Pitanja",
        subtitle: "Sve što treba da znate o vašoj avanturi u Auto Kampu Drina.",
        searchPlaceholder: "Pretraži pitanja (npr. oprema, djeca, hrana...)",
        noResults: "Nismo pronašli rezultate za vašu pretragu.",
        ctaTitle: "Imate li još pitanja?",
        ctaText: "Naš tim vam stoji na raspolaganju. Pozovite nas ili pišite.",
        contactUs: "Kontaktirajte Nas",
        teaserTitle: "Imate pitanja?",
        viewAll: "Pogledaj sva pitanja",
        categories: {
          all: "Sve",
          rafting: "Rafting",
          hiking: "Hiking & Mountaineering",
          logistics: "Logistika & Oprema",
          camp: "Kamp & Smještaj",
          booking: "Rezervacije"
        },
        questions: {
          // --- RAFTING & AKTIVNOSTI ---
          swimming_skills: {
            q: "Nisam plivač, da li mogu da učestvujem u raftingu?",
            a: "Apsolutno. Plivanje nije uslov za učešće. Svi učesnici dobijaju profesionalne sigurnosne prsluke koji vas drže na površini čak i ako se nađete u vodi. Naši licencirani skiperi su tu da brinu o vašoj bezbjednosti. Ispadanje iz čamca je rijetko, a prsluk je obavezan dio opreme."
          },
          children_rafting: {
            q: "Da li je rafting bezbjedan za djecu?",
            a: "Da! Rafting je sjajna porodična aktivnost. Za djecu preporučujemo ljetne mjesece (jul, avgust, septembar) kada je nivo rijeke niži, a voda toplija. Naši skiperi prilagođavaju turu najmlađima, praveći pauze za kupanje i igru. Posjedujemo svu opremu u dječijim veličinama."
          },
          rain_policy: {
            q: "Šta ako pada kiša na dan raftinga?",
            a: "Rafting se održava i po kiši – ionako ćete biti mokri! Kiša često doprinosi avanturističkom doživljaju. Obezbjeđujemo vam neoprenska odijela koja čuvaju tjelesnu temperaturu, kao i anorak jakne (šuškavce) za zaštitu od vjetra i kiše. Pljuskovi nisu razlog za otkazivanje ture."
          },
          alcohol_policy: {
            q: "Da li smijemo konzumirati alkohol na čamcu?",
            a: "Zbog vaše sigurnosti, konzumiranje alkohola prije i tokom spusta je strogo zabranjeno. Skiper ima pravo da udalji alkoholisane osobe sa čamca. Vrijeme za opuštanje uz domaću rakiju, vino i muziku je nakon povratka u kamp, gdje vas čeka nezaboravna zabava."
          },
          // --- HIKING ---
          hiking_difficulty: {
            q: "Koliko je fizički zahtjevno planinarenje (Hiking)?",
            a: "Imamo ture za sve nivoe spremnosti. Ture do jezera 'Donje Bare' ili vidikovaca su lakše i pogodne za rekreativce. Uspon na Maglić (2386m) je zahtjevniji i traži dobru kondiciju i adekvatnu obuću (gojzerice). U opisu svakog našeg paketa naznačena je težina ture."
          },
          "hiking_gear": {
            "q": "Kakva mi je oprema potrebna za planinarenje?",
            "a": "Za uspon na Maglić obavezne su čvrste planinarske cipele (gojzerice). Preporučujemo slojevito oblačenje jer se vrijeme na planini brzo mijenja. Čak i ljeti, ponesite topliju duksericu i kabanicu."
          },
          "hiking_transport": {
            "q": "Kako dolazimo do početnih tačaka planinarskih staza?",
            "a": "Sve naše hiking ture uključuju transfer našim terenskim džipovima (Off-Road) do polaznih pozicija, poput Prijevora. Vaš automobil ostaje siguran na parkingu kampa."
          },
          "hiking_guides": {
            "q": "Da li su staze u NP Sutjeska bezbjedne bez vodiča?",
            "a": "Iako su staze označene, strogo preporučujemo naše licencirane vodiče. Oni poznaju svaki kamen, brinu o vašoj sigurnosti i ispričaće vam nevjerovatne priče o prašumi Perućici i istoriji ovog kraja."
          },
          // --- LOGISTIKA & OPREMA ---
          documents_border: {
            q: "Da li mi treba pasoš za rafting?",
            a: "Važno je napomenuti da reka Tara predstavlja prirodnu granicu između Bosne i Hercegovine i Crne Gore, pa pošto polazna tačka za rafting leži na crnogorskoj strani, neophodno je da vaše podatke blagovremeno prijavimo graničnim službama obe države. Za državljane Srbije i Bosne i Hercegovine je za ovaj prelazak dovoljna važeća lična karta, dok je za decu i državljane svih ostalih zemalja pasoš obavezan, te vas molimo da pre polaska obavezno proverite rok važenja vaših dokumenata."
          },
          what_to_bring: {
            q: "Šta trebam ponijeti sa sobom?",
            a: "Mi obezbjeđujemo kompletnu opremu za rafting (odijelo, čizme, prsluk, kacigu). Vi ponesite: kupaći kostim (oblači se ispod odijela), peškir, sredstva za ličnu higijenu i dobro raspoloženje. Za hiking ture obavezna je čvrsta obuća i slojevita odjeća."
          },
          phones_cameras: {
            q: "Mogu li ponijeti telefon ili kameru na čamac?",
            a: "Možete, ali na sopstvenu odgovornost. Čamci imaju vodootporne vreće, ali savjetujemo da dragocjenosti ostavite u kampu ili u sefu. Najbolja opcija za snimanje je GoPro kamera (možete je iznajmiti kod nas ili kupiti snimak od naših skipera)."
          },
          equipment_hygiene: {
            q: "Da li se oprema pere i održava?",
            a: "Higijena nam je prioritet. Sva oprema (odijela, čizme, kacige) se nakon svakog korišćenja detaljno pere, dezinfikuje i suši. Uvijek dobijate čistu i ispravnu opremu."
          },

          // --- KAMP & SMJEŠTAJ ---
          accommodation_types: {
            q: "Kakav smještaj imate i da li bungalovi imaju kupatila?",
            a: "Nudimo različite opcije za vaš boravak. Naši donji drveni bungalovi koriste čiste zajedničke toalete i tuševe. Za goste u gornjim bungalovima (Comfort, Superior i Premium), obezbeđen je sopstveni toalet unutra, dok se tuševi nalaze u sklopu zajedničkih prostorija. Takođe, na raspolaganju je prostor za kampere i šatore."
          },
          parking_wifi: {
            q: "Imate li parking i internet?",
            a: "Da, posjedujemo veliki, besplatan parking za sve goste koji je pod video nadzorom. Takođe, cijeli kompleks kampa, uključujući restoran i bungalove, pokriven je besplatnim Wi-Fi signalom."
          },
          food_diet: {
            q: "Imate li opcije za vegetarijance ili posebne režime ishrane?",
            a: "Naravno. Naša kuhinja je bazirana na domaćim specijalitetima, ali poštujemo sve vaše potrebe. Bilo da ste vegetarijanac, vegan ili jedete bez glutena, samo nam naglasite prilikom rezervacije i naši kuvari će pripremiti poseban obrok za vas."
          },
          pets: {
            q: "Da li je kamp Pet Friendly?",
            a: "Jeste! Vaši ljubimci su dobrodošli u našem kampu. Molimo vas samo da vodite računa o njima i o drugim gostima kako bi svima boravak bio prijatan."
          },

          // --- REZERVACIJE ---
          booking_deposit: {
            q: "Kako da rezervišem i da li je potreban avans?",
            a: "Rezervaciju možete izvršiti putem forme na sajtu, email-a ili telefona. Za potvrdu rezervacije potrebna je uplata avansa od 50€ po osobi (na račun u Srbiji ili BiH). Ostatak iznosa plaćate po dolasku u kamp."
          },
          cancellation: {
            q: "Šta ako moram da otkažem dolazak?",
            a: "Rezervaciju je moguće besplatno pomjeriti ili otkazati najkasnije 3 nedjelje prije planiranog termina. U tom slučaju avans se vraća ili prebacuje za novi termin. Kiša nije validan razlog za otkazivanje jer se ture održavaju i po kiši."
          },
          solo_travelers: {
            q: "Mogu li doći sam/a ili u paru, bez velike grupe?",
            a: "Naravno! Ne morate imati svoju grupu. Svakodnevno organizujemo ture i rado ćemo vas pridružiti drugim veselim ekipama u čamcu. To je sjajna prilika za sticanje novih prijatelja."
          }
        }
      },
      // --- PACKAGES (DATA) ---
      packages: {
        rafting: [
            {
                id: 1, 
                title: "RAFTING SPRINT",
                duration: "1 Dan",
                price: "70€",
                difficulty: "Srednje",
                description: "Idealan izbor za one u prolazu! Doživite uzbuđenje Tare i uživajte u tradicionalnom ručku. Brzo, intenzivno i nezaboravno.",
                image: "/images/scenic-drina-river-rafting.webp",
                features: ["1x Obrok (Ručak)", "Bez noćenja", "Sva oprema & Prevoz", "Osiguranje uključeno"],
                fullItinerary: [
                    "Okupljanje grupe u dogovoreno vrijeme između učesnika i organizatora.",
                    "Zaduživanje opreme: Svaki učesnik dobija neoprensko odijelo, čizme i prsluk.",
                    "Prevoz džipovima i kombijima do Brštenovice gdje počinje rafting.",
                    "Formiranje timova i upoznavanje sa skiperom. Čamci su kapaciteta 10-12 osoba.",
                    "Rafting počinje oko 13:00h. Tura vodi kroz 14km najuzbudljivijeg dijela Tare.",
                    "Spust traje oko 3.5 sata sa pauzama za kupanje i osvježenje.",
                    "Povratak u kamp do 17:00h.",
                    "Ručak - tradicionalna kuhinja (teletina ispod sača, rafterska čorba...).",
                    "Završetak ture nakon ručka."
                ]
            },
            {
                id: 2,
                title: "ADRENALINSKI BLJESAK",
                duration: "1 Dan",
                price: "75€",
                difficulty: "Srednje",
                description: "Cjelodnevna avantura! Započnite dan domaćim doručkom, osvojite brzake Tare i završite bogatim ručkom. Najpopularniji jednodnevni izbor.",
                image: "/images/reservation-background.webp",
                features: ["2x Obroka (Doručak, Ručak)", "Bez noćenja", "Kompletna oprema", "Povratak do 17h"],
                fullItinerary: [
                    "Doručak do 10:30h – domaća i lokalna kuhinja.",
                    "Zaduživanje opreme: Svaki učesnik dobija neoprensko odijelo, čizme i prsluk.",
                    "Prevoz džipovima i kombijima do Brštenovice (start raftinga).",
                    "Formiranje timova, upoznavanje sa skiperima i pravilima. Čamci su kapaciteta 10-12 osoba.",
                    "Rafting počinje oko 13:00h. Tura vodi kroz 14km najuzbudljivijeg dijela Tare (mirni dijelovi i brzaci).",
                    "Spust traje oko 3.5 sata sa pauzama za kupanje i osvježenje.",
                    "Povratak u kamp do 17:00h.",
                    "Bogati tradicionalni ručak/večera (specijaliteti ispod sača, rafterska čorba...).",
                    "Završetak ture nakon obroka."
                ]
            },
            {
                id: 3,
                title: "KANJONSKA NOĆ",
                duration: "2 Dana / 1 Noć",
                price: "od 115€",
                difficulty: "Srednje",
                description: "Više od raftinga! Osjetite magiju večeri pored rijeke uz logorsku vatru. Uključuje noćenje i tri vrhunska domaća obroka.",
                image: "/images/rafting-section.webp",
                features: ["3x Obroka", "1x Noćenje", "Rafting 18km", "Večernja zabava"],
                fullItinerary: [
                    "DAN 1:",
                    "Dolazak u kamp u popodnevnim satima i smještaj.",
                    "Večera, druženje uz logorsku vatru, muzika i odmor.",
                    "DAN 2:",
                    "Doručak do 10:30h – domaća i lokalna kuhinja.",
                    "Zaduživanje opreme (neoprensko odijelo, čizme, prsluk).",
                    "Prevoz do Brštenovice (start raftinga).",
                    "Formiranje timova i instrukcije skipera.",
                    "Rafting počinje oko 13:00h (14km najuzbudljivijeg dijela Tare).",
                    "Povratak u kamp do 17:00h.",
                    "Tradicionalni ručak (teletina ispod sača...).",
                    "Kraj ture nakon ručka."
                ]
            },
            {
                id: 4,
                title: "TARA ULTIMATE",
                duration: "3 Dana / 2 Noći",
                price: "od 145€",
                difficulty: "Srednje",
                description: "Pravi bijeg od stvarnosti. Dva noćenja u prirodi, četiri obroka i rafting avantura. Savršen vikend paket za punjenje baterija.",
                image: "/images/rafting-home-hero.webp",
                features: ["4x Obroka", "2x Noćenja", "Kompletna oprema", "Osiguranje uključeno"],
                fullItinerary: [
                    "DAN 1:",
                    "Dolazak u kamp u popodnevnim satima i smještaj.",
                    "Večera, logorska vatra, muzika i odmor.",
                    "DAN 2:",
                    "Doručak do 10:30h – domaća i lokalna kuhinja.",
                    "Zaduživanje opreme (neoprensko odijelo, čizme, prsluk).",
                    "Prevoz do Brštenovice (start raftinga).",
                    "Formiranje timova i instrukcije skipera.",
                    "Rafting počinje oko 13:00h (14km najuzbudljivijeg dijela Tare).",
                    "Povratak u kamp do 17:00h.",
                    "Tradicionalna večera (teletina ispod sača...). Druženje uz logorsku vatru.",
                    "DAN 3:",
                    "Doručak i odlazak."
                ]
            },
            {
                id: 5,
                title: "GOSPODAR PRIRODE",
                duration: "3 Dana / 2 Noći",
                price: "210€",
                difficulty: "Teško",
                description: "Ekskluzivna kombinacija Raftinga i Hikinga! Istražite prašumu Perućicu i kanjon Tare. 5 obroka i 2 noćenja za totalni hedonizam.",
                image: "/images/adventure-center-drina-team.webp",
                features: ["5x Obroka", "2x Noćenja", "Posjeta prašumi Perućica", "Rafting avantura"],
                fullItinerary: [
                    "DAN 1:",
                    "Dolazak u kamp u popodnevnim satima i smještaj.",
                    "Večera, logorska vatra, muzika i odmor.",
                    "DAN 2:",
                    "Doručak do 10:30h – domaća i lokalna kuhinja.",
                    "Zaduživanje opreme (odijelo, čizme, prsluk) i prevoz do Brštenovice.",
                    "Start raftinga oko 13:00h (14km najuzbudljivijeg dijela Tare).",
                    "Povratak u kamp do 17:00h.",
                    "Tradicionalna večera (sač, rafterska čorba) i druženje uz vatru.",
                    "DAN 3:",
                    "Doručak oko 09:00h.",
                    "Posjeta prašumi Perućica.",
                    "Nastavak: Rafting novom dionicom Tare ili spust Drinom do kampa (22km).",
                    "Povratak u kamp oko 17:00h, večera i kraj ture."
                ]
            }
        ],
        hiking: [
          { 
              id: 1, 
              title: "Kanjon rijeke Tare", 
              duration: "4h", 
              level: "Srednje", 
              description: "Scenic hike duž ivice 1000m dubokog kanjona. Polazak off-road vozilom.", 
              image: "/images/tara-river-canyon-hiking.webp", 
              details: ["Polazak: 08:00h Off-road vozilom", "Trajanje hikinga: 4h", "Pogled na Durmitor i Pivu"],
              fullItinerary: [
                  "Polazak u 08:00h terenskim vozilom iz kampa",
                  "Šetnja duž ivice kanjona gde se nalazi nekoliko mesta za razgledanje koja pružaju nezaboravan pogled kanjona Tare dubine oko 1000m",
                  "Moguće posetiti planinu Durmitor i kanjone Sušice i Pive",
                  "Predviđeno vreme pešačenja je 4 sata"
              ]
          },
          { 
              id: 2, 
              title: "Trnovačko jezero & Prijevor", 
              duration: "4h", 
              level: "Srednje", 
              description: "Planinarenje do jezera u obliku srca (Maglić/Volujak). Moguće kupanje.", 
              image: "/images/trnovacko-jezero-hiking-tara.webp", 
              details: ["Polazak: 08:00h do Prijevora (1668m)", "Trajanje hikinga: 4h", "Plivanje u alpskom jezeru"],
              fullItinerary: [
                  "Polazak u 08:00h terenskim vozilom iz kampa do Prijevora (1668mnv) na podnožju planine Maglić",
                  "Usput posećujemo mesta: prašumu Perućica, vodopad Skakavac visine 75m",
                  "Zatim idemo do Trnovačkog jezera koje se nalazi na nadmorskoj visini od 1517m između planina Maglić i Volujak. Ovo je prelepo okruženje unutar krunice vrhova. Popularno je i preporučljivo plivati u tom jezeru",
                  "Predviđeno vreme pešačenja je 4 sata"
              ]
          },
          { 
              id: 3, 
              title: "Uspon na Maglić", 
              duration: "6h", 
              level: "Teško", 
              description: "Osvojite najviši vrh BiH (2386m) uz panoramske poglede na NP Sutjeska.", 
              image: "/images/planinarenje-maglic-sutjeska.webp", 
              details: ["Polazak: 08:00h do Vučevo baze", "Trajanje hikinga: 6h", "Najviši vrh Bosne i Hercegovine"],
              fullItinerary: [
                  "Polazak u 08:00h iz kampa do Lokva-Dernežište u podnožju planine Vučevo",
                  "Usput posećujemo mesta prašumu Perućica, uključujući i vodopad Skakavac visine 75m",
                  "Zatim iz Vučeva pešačimo ka vrhu Maglić (2386m) – najvišoj planini u Bosni i Hercegovini. Ne postoje reči koje mogu da opišu pogled sa vrha te planine",
                  "Predviđeno vreme pešačenja je 6 sati"
              ]
          },
          { 
              id: 4, 
              title: "Prašuma Perućica & Skakavac", 
              duration: "4h", 
              level: "Lako/Srednje", 
              description: "Šetnja kroz jednu od posljednjih prašuma u Evropi i pogled na 75m visoki vodopad Skakavac.", 
              image: "/images/vodopad-skakavac-perucica.webp", 
              details: ["Polazak: 09:00h do Dragoš sela", "Trajanje hikinga: 4h", "Panoramski pogled na vodopad Skakavac"],
              fullItinerary: [
                  "Polazak u 09:00h terenskim vozilom iz kampa u selo Dragoš",
                  "Pauza na mestima gde se vidi šuma i vodopad koji je visok 75m i zove se Skakavac",
                  "Nastavljamo kroz šumu, ka Tunjemiru i idemo do Suhe gde nas čeka prevoz",
                  "Predviđeno vreme pešačenja je 4 sata"
              ]
          },
          { 
              id: 5, 
              title: "Zelengora - Planinske oči", 
              duration: "3h+", 
              level: "Lako", 
              description: "Zelengora je čuvena po svojim 'planinskim očima' – kristalnim glečerskim jezerima.", 
              image: "/images/zelengora-planinska-jezera.webp", 
              details: ["Polazak: 09:00h prema Zelengora jezerima", "Trajanje hikinga: 3h+", "Ova tura je potpuno prilagodljiva vašim željama i kondiciji."],
              fullItinerary: [
                  "Polazak u 09:00h iz kampa prema Zelengori",
                  "Zelengora krije 8 prelepih jezera (Donje Bare, Gornje Bare, Orlovačko, Kotlaničko i druga).",
                  "Postoji mnogo kombinacija staza i vidikovaca koje možemo obići; tačna jezera i intenzitet ture dogovaraju se direktno u kampu sa vodičem.",
                  "Povratak u kamp je fleksibilan, zavisno od broja lokacija koje odlučite da posetite."
              ]
          }
      ]
      }
    }
  },
  de: {
    translation: {
      "seo": {
        "home": {
          "title": "Auto Camp Drina | Rafting, Camping & Natur in Foča",
          "description": "Entfliehen Sie ins Auto Camp Drina in Foča. Erleben Sie aufregendes Tara-Rafting, ruhiges Camping am Fluss und authentische Gastfreundschaft im Herzen unberührter Natur. Buchen Sie noch heute Ihr Abenteuer!"
        },
        "rafting": {
          "title": "Rafting Tara & Drina | Das Abenteuer Ihres Lebens",
          "description": "Bezwingen Sie den Tara-Fluss-Canyon, den tiefsten Europas! Begleiten Sie unser Profi-Team auf ein Adrenalin-Rafting-Abenteuer durch kristallklares Wasser und wilde Stromschnellen. Ausrüstung inklusive."
        },
        "hiking": {
          "title": "Hiking Touren | Entdecken Sie Perućica & Dinariden",
          "description": "Wandern Sie durch Perućica, den letzten Urwald Europas, und bezwingen Sie die Gipfel der Dinariden. Entdecken Sie mit unseren Guides atemberaubende Ausblicke und Gletscherseen. Ein Muss für Naturfans!"
        },
        "camping": {
          "title": "Camping am Fluss | Ruhige Übernachtung in Foča",
          "description": "Entspannen Sie auf dem ultimativen Campingplatz direkt an der Drina bei Foča. Sichere Plätze für Zelte und Wohnmobile, moderne Sanitäranlagen und Natur pur. Die perfekte Basis für Ihren Balkan-Roadtrip."
        },
        "multiday": {
          "title": "Mehrtägige Touren | Das komplette Drina-Erlebnis",
          "description": "Die ultimative 3- bis 5-tägige Expedition! Kombinieren Sie Wildwasser-Rafting, epische Wandertouren und traditionelles Essen zu einem unvergesslichen bosnischen Abenteuer. Wir regeln die gesamte Logistik."
        },
        "aboutus": {
          "title": "Über uns | Familientradition im Auto Camp Drina",
          "description": "Erfahren Sie mehr über das Familienerbe hinter Auto Camp Drina. Seit Jahrzehnten teilen wir unsere Liebe zu Tara und Drina mit Abenteurern aus aller Welt. Werden Sie Teil unserer langen Familientradition."
        },
        "bikerhub": {
          "title": "Biker Hub | Motorradfreundlicher Campingplatz Bosnien",
          "description": "Der Top-Stopp für Motorradfahrer in Bosnien! Sicherer Parkplatz, kühles Bier und eine herzliche Biker-Community. Ihre ideale Basis, um die kurvenreichen Bergstraßen und Pässe des Balkans zu erkunden."
        },
        "faq": {
          "title": "FAQ | Alles, was Sie für Ihre Reise wissen müssen",
          "description": "Planen Sie Ihren Besuch im Auto Camp Drina? Finden Sie Antworten zu Rafting-Ausrüstung, Grenzübergängen, Buchungen und Reisetipps für Bosnien. Alles für eine stressfreie Reise an einem Ort."
        }
      },
      navbar: {
        home: "Startseite",
        activities: "Aktivitäten",
        rafting: "Rafting",
        hiking: "Wandern",
        camping: "Camping",
        multiday: "Mehrtägig",
        aboutus: "Über uns",
        bikerhub: "Biker Hub",
        faq: "FAQ",
        bookBtn: "Jetzt buchen",
        phone: "Rufen Sie uns an"
      },
      common: {
        readMore: "Mehr lesen",
        details: "Details",
        bookAdventure: "Abenteuer buchen",
        bookAccommodation: "Unterkunft buchen",
        viewAll: "Alle Optionen ansehen",
        pricePerPerson: "pro Person",
        planTour: "Reiseplan ansehen",
        closePlan: "Reiseplan schließen",
        duration: "Dauer",
        level: "Schwierigkeitsgrad",
        onRequest: "Auf Anfrage",
        detailedPlanTitle: "Detaillierter Reiseplan",
        includedInPriceTitle: "Im Preis inbegriffen:",
        readyForAdventure: "Bereit für ein Abenteuer?",
        planSoon: "Detaillierter Plan kommt bald...",
        likePlan: "Gefällt Ihnen dieser Plan?",
        bookThisPackage: "Dieses Paket buchen",
        scheduleNote: "Der Zeitplan kann je nach Wetterbedingungen und Gruppentempo variieren.",
        close: "Schließen"
      },
      booking: {
        title: "Reservierung",
        subtitle: "Füllen Sie das Formular aus und wir kontaktieren Sie innerhalb von 2 Stunden zur Bestätigung.",
        labels: {
          name: "Name",
          lastName: "Nachname",
          email: "E-Mail",
          phone: "Telefonnummer",
          activity: "Aktivität?",
          accommodation: "Art der Unterkunft",
          guests: "Anzahl der Gäste",
          date: "Datum von/bis",
          message: "Haben Sie weitere Fragen oder Anmerkungen?",
          send: "Senden"
        },
        activities: {
          sleep: "Ich möchte nur schlafen",
          rafting: "Rafting",
          hiking: "Wandern",
          canyoning: "Canyoning",
          other: "Sonstiges"
        },
        accommodations: {
          bungalowNoToilet: "Bungalow (ohne Toilette)",
          bungalowToilet: "Bungalow (mit Toilette)",
          tent: "Ihr eigenes Zelt",
          rv: "Ihr Wohnmobil/Van/Jeep/Sonstiges"
        }
      },
      "contact": {
        title: "Frage stellen",
        subtitle: "Haben Sie Fragen? Schreiben Sie uns und wir werden Ihnen so schnell wie möglich antworten.",
        fullName: "Vor- und Nachname",
        messagePlaceholder: "Ihre Frage oder Nachricht...",
        successMessage: "Ihre Nachricht wurde erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.",
        errorMessage: "Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt."
      },
      footer: {
        description: "Das erste registrierte private Rafting-Camp in BuH. Gegründet 1987. Sicherheit und unvergessliche Erlebnisse sind seit fast 40 Jahren unsere Priorität.",
        quickLinks: "Aktivitäten",
        explore: "Entdecken",
        links: {
          rafting: "Rafting auf der Tara",
          hiking: "Wandern am Maglić",
          about: "Über uns",
          camping: "Camp-Unterkunft"
        },
        contact: "Kontakt",
        location: "Standort",
        openMap: "Karte öffnen",
        openInGoogleMaps: "In Google Maps öffnen",
        rights: "Auto Camp Drina. Alle Rechte vorbehalten."
      },
      // --- HOME PAGE ---
      home: {
        raftingTitle: "Beliebteste Rafting-Touren",
        raftingSubtitle: "Unsere populärsten Rafting-Touren, ausgewählt von Gästen aus aller Welt.",
        viewAllOffers: "Alle Angebote ansehen",
        exploreMountains: "Berge erkunden",
        stepAbove: "Ein Schritt über",
        clouds: "den Wolken",
        hikingDesc: "Der Nationalpark Sutjeska bietet die schönsten Wanderwege der Region. Von leichten Spaziergängen durch den Urwald bis zur Eroberung des höchsten Gipfels in BuH.",
        expertGuides: "Experten-Guides",
        expertGuidesDesc: "Lizenzierte Führer für jede Tour",
        offRoadTransport: "Off-Road Transport",
        offRoadTransportDesc: "Jeeps zu den Startpositionen",
        allTours: "Alle Touren"
      },
      hero: {
        tagline: "Erstes registriertes privates Camp in BuH",
        explore: "Angebote erkunden",
        campBtn: "Camp ansehen",
        stats: [
          { id: 1, label: "Jahre Tradition", value: "37+" },
          { id: 2, label: "Zufriedene Gäste", value: "15k+" },
          { id: 3, label: "Sicherheit", value: "100%" }
        ],
        slides: [
          {
            id: 1,
            image: "/images/rafting-home-hero.webp",
            title: "Rafting auf der Tara",
            text: "Erleben Sie das ultimative Adrenalin-Abenteuer auf den wilden Wellen der Tara. Spaß, Teamgeist und unberührte Natur im tiefsten Canyon Europas."
          },
          {
            id: 2,
            image: "/images/vodopad-skakavac-perucica.webp",
            title: "Perućica-Urwald",
            text: "Treten Sie ein in das Herz eines der letzten erhaltenen Urwälder Europas, Heimat des Skakavac-Wasserfalls."
          },
          {
             id: 3,
             image: "/images/trnovacko-back.webp",
             title: "Trnovačko-See und NP Sutjeska",
             text: "Erkunden Sie den ältesten Nationalpark in BuH, bezwingen Sie den Maglić, den höchsten Gipfel des Landes und entdecken Sie die Magie des smaragdgrünen, herzförmigen Sees, versteckt zwischen Berggipfeln."
          },
        ]
      },
      trust: {
        badge: "SEIT 1987",
        title: "Das erste registrierte private Rafting-Camp in Bosnien und Herzegowina",
        subtitle: "Sicherheit und unvergessliche Erlebnisse sind seit über 35 Jahren unsere Priorität.",
        desc: "Auto Camp Drina ist nicht nur ein Ort auf der Karte, es ist ein Familienerbe, das den Geist des Flusses Tara bewahrt."
      },
      aboutUs: {
      subtitle: "UNSERE HINGABE ZUR NATUR",
      title: "Vom Abenteuer zur Familientradition",
      text: "Das Auto Camp Drina ist weit mehr als nur ein Camp; es ist eine Liebeserklärung an den Fluss Tara und die ihn umgebenden Berge. Über Jahrzehnte hinweg haben wir einen Zufluchtsort geschaffen, der den Nervenkitzel der <0>wilden Gewässer</0> mit der Geborgenheit eines Zuhauses verbindet und sicherstellt, dass jeder Gast Teil unserer erweiterten Bergfamilie wird. Unsere Tradition ist Ihre Garantie für ein unvergessliches Erlebnis.",
      imageCaption: "Der Ort, an dem Ihre Geschichte beginnt"
      },
      camping: {
        title: "Oase am Fluss Drina",
        subtitle: "Entdecken Sie unser Camp und die Unterkünfte: komfortable Bungalows, geräumige Bereiche für Camper und Zelte, alles mit dem Rauschen des Flusses.",
        promoTitle: "Ruhe, Stille und Familienkomfort",
        promoText: "Auto Camp 'Drina' ist das ideale Ziel für alle, die einen echten Urlaub in der Natur suchen, ohne auf Komfort zu verzichten.",
        features: {
          bungalows: { title: "Holzbungalows", desc: "Komfortable Unterkunft mit Bettwäsche." },
          campers: { title: "Wohnmobilstellplätze", desc: "Ebene Parzellen mit Anschlüssen." },
          facilities: { title: "Saubere Anlagen", desc: "Moderne Toiletten und Duschen." },
          river: { title: "Flussufer", desc: "Aufwachen mit dem Rauschen der Drina." }
        }
      },
      reviews: [
        {
          id: 1,
          title: "\"Freundlichkeit\"",
          text: "\"Alles war großartig von Anfang bis Ende, aber was es außergewöhnlich machte, war die Liebe zum Detail und die Freundlichkeit der Besitzer/Mitarbeiter. Sie waren immer da, um zu helfen/Fragen zu beantworten.\"",
          author: "Mick, Irland",
          countryCode: "ie",
          source: "Booking",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "..."
        },
        {
          id: 2,
          title: "\"Wunderbar\"",
          text: "\"Der Gastgeber Filip war super nett, wir hatten auch die Rafting-Tour mit ihm als Guide und hatten so viel Spaß! Das Camping ist so schön und entspannend direkt neben dem Fluss Drina gelegen.\"",
          author: "Claudio, Italien",
          countryCode: "it",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "..."
        },
        {
          id: 3,
          title: "\"Gemütlicher Rückzugsort\"",
          text: "\"Super tolle Lage in der Nähe des Flusses, gemütliche Hütten, tolles Außenrestaurant mit cooler Musik und sehr netten Gastgebern. Wir kommen definitiv wieder!\"",
          author: "Martin, Deutschland",
          countryCode: "de",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "..."
        },
        {
          id: 4,
          title: "\"Exzellentes Personal\"",
          text: "\"Perfekte Lage in der Nähe des Flusses. Schöne Gegend auch für Camping oder Wohnmobile! Leckere Küche. Exzellentes Personal (familiengeführt). Super sauber! Ein schöner Stopp für Ihre Reise!\"",
          author: "Dimitrios, Griechenland",
          countryCode: "gr",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "..."
        },
        {
          id: 5,
          title: "\"Hervorragend\"",
          text: "\"Der Eindruck ist unglaublich. Wenn es irgendwo eine Familie gibt, die Optimismus und gute Energie ausstrahlt, dann sind es die Menschen, deren Familienunternehmen dieses Camp ist. Ein Ort, der Ihre Batterien wieder auflädt.\"",
          author: "Zeljko, Serbien",
          countryCode: "rs",
          source: "Booking.com",
          link: "https://www.booking.com/hotel/ba/camping-drina.sr.html#tab-reviews",
          googleSource: "Google",
          googleLink: "..."
        }
      ],
      // --- RAFTING PAGE ---
      raftingPage: {
        title: "Wählen Sie Ihr Abenteuer",
        subtitle: "Von kurzen Adrenalin-Trips bis hin zu mehrtägigen Expeditionen – wir haben ein Paket für jeden."
      },
      raftingHero: {
        tag: "Willkommen im Tara-Canyon",
        title: "Entdecken Sie die \"Träne Europas\"",
        description: "Stellen Sie sich einen Ort vor, an dem die Zeit stehen bleibt und die Natur die Sprache der Ewigkeit spricht. Die Schlucht des Flusses Tara ist nicht nur ein geografischer Begriff – sie ist ein Heiligtum der Wildnis, gemeißelt in das Herz des Balkans. Mit einer Tiefe von bis zu 1300 Metern ist dies die <0>tiefste Schlucht Europas</0> und die zweittiefste der Welt. Ihr türkisfarbenes Wasser, so rein, dass man es auf dem gesamten Lauf direkt aus der Hand trinken kann, windet sich durch alte Schwarzkiefernwälder und hohe Klippen, die seit Jahrhunderten Geheimnisse hüten.",
        features: {
          tradition: { title: "Tradition seit 1987", text: "Wir tragen stolz den Titel des ersten registrierten privaten Rafting-Camps in BuH. Jahrzehntelange Erfahrung ist unsere Garantie." },
          safety: { title: "100% Sicherheit", text: "Ihre Sicherheit ist unser Imperativ. Lizenzierte IRF-Skipper und hochwertige, zertifizierte Ausrüstung sorgen für ein sicheres Abenteuer." },
          family: { title: "Familiäre Atmosphäre", text: "Bei uns sind Sie keine Nummer. Wir sind stolz auf authentische Gastfreundschaft, hausgemachte Küche und Abende am Lagerfeuer." }
        }
      },
      // --- HIKING PAGE ---
      hikingPage: {
        title: "Wandertouren",
        subtitle: "Sorgfältig ausgewählte Routen für Freizeit- und erfahrene Wanderer. Jeder Schritt ist eine neue Geschichte."
      },
      hikingHero: {
        tag: "Nationalpark Sutjeska",
        title: "Ein Schritt über den Wolken",
        description: "Erobern Sie den Maglić, den höchsten Gipfel von Bosnien und Herzegowina. Spiegeln Sie sich im smaragdgrünen <1>Trnovačko-See</1>. Erkunden Sie <2>Perućica</2>, einen der letzten Urwälder Europas. Das ist kein Spaziergang – das ist eine Pilgerreise in die Natur.",
        stats: {
          maglic: "Gipfel Maglić",
          lakes: "Gletscherseen",
          air: "Saubere Luft"
        }
      },
      hikingEquipment: {
        ctaTitle: "Bereit loszulegen?",
        ctaText: "Wandern im NP Sutjeska erfordert angemessene Vorbereitung. Obwohl unsere Guides für Sicherheit sorgen, ist Ihre persönliche Ausrüstung der Schlüssel zu Komfort und Genuss. Keine Sorge, wir bieten Transport mit unseren Geländewagen zu den Startpunkten!",
        ctaButton: "Kontaktieren Sie uns für Beratung",
        items: {
          shoes: { title: "Schuhwerk", text: "Feste Wanderschuhe sind für schwerere Touren (Maglić) obligatorisch." },
          clothes: { title: "Kleidung", text: "Kleidung im Zwiebelprinzip. Bringen Sie auch im Sommer eine Regenjacke und einen warmen Hoodie mit." },
          guides: { title: "Guides", text: "Alle unsere Touren werden von lizenzierten Bergführern geleitet, die jeden Stein kennen." },
          transport: { title: "Transport", text: "Wir inkludieren den Transfer mit unseren Jeeps zu den Startpunkten." }
        }
      },
      // --- CAMPING PAGE ---
      campingPage: {
        intro: {
          title: "Der perfekte Ort für Familienurlaub",
          text1: "Unser Camp liegt auf einem weitläufigen, flachen Gelände direkt am Ufer der Drina, was es <0>ideal für Familien macht</0>. Im Camp gibt es keine steilen Klippen oder stark befahrenen Straßen.",
          text2: "Die Nächte hier sind eine besondere Geschichte. Wir sind weit weg vom Stadtlärm von Foča, sodass Ruhe garantiert ist.",
          fenced: "Umzäunt und sicher",
          petFriendly: "Haustierfreundlich",
          imageOverlay: {
            title: "Erinnerungen schaffen",
            text: "Abende am Lagerfeuer bleiben für immer in Erinnerung."
          }
        },
        accommodation: {
          title: "Unsere Unterkunftskapazitäten",
          subtitle: "Wählen Sie Ihren Stil des Aufenthalts in der Natur.",
          bookBtn: "Platz buchen",
          bungalows: {
            title: "Holzbungalows",
            desc: "Authentische Holzhäuser, die nach Kiefern duften. Bequeme Betten, Bettwäsche und Strom.",
            badge: "TOP WAHL",
            features: ["Kapazität: 2-4 Personen", "Bettwäsche inklusive", "In der Nähe der Toiletten"]
          },
          campers: {
            title: "Wohnwagen & Camper",
            desc: "Geräumige, flache Parzellen mit einfachem Zugang für Fahrzeuge aller Größen.",
            features: ["Stromanschluss", "Wasserauffüllung", "Chemische Toilette"]
          },
          tents: {
            title: "Zeltplatz",
            desc: "Die besten Plätze auf dem Rasen, im Schatten des Obstgartens oder direkt am Fluss.",
            features: ["Im Schatten", "Grillzugang", "Duschnutzung"]
          }
        },
        amenities: {
          title: "Alles was Sie brauchen",
          subtitle: "Auto Camp Drina bietet eine komplette Infrastruktur für einen angenehmen Aufenthalt.",
          items: {
            electricity: { title: "Strom", desc: "Anschlüsse verfügbar." },
            toilets: { title: "Sanitär", desc: "Saubere Toiletten und Duschen." },
            wifi: { title: "WLAN", desc: "Kostenloses Internet." },
            restaurant: { title: "Restaurant", desc: "Hausgemachtes Essen und Getränke." }
          }
        }
      },
      campingHero: {
        tag: "Oase der Ruhe am Ufer der Drina",
        title: "Aufwachen mit dem Rauschen des Flusses",
        text: "Vergessen Sie den Stadtlärm. Im Auto Camp Drina ist Ihr Wecker der Vogelgesang und der Blick aus dem Fenster das smaragdgrüne Wasser der Drina."
      },
      // --- ABOUT US PAGE ---
      aboutHero: {
        tag: "Gegründet 1987.",
        title: "Mehr als ein Camp.",
        highlight: "Familie.",
        text: "Auto Camp 'Drina' ist nicht nur ein Ort auf der Karte. Es ist ein Zuhause, in das Gäste als Freunde zurückkehren. Wir sind das erste registrierte private Rafting-Camp in BuH und unsere Mission ist seit fast 40 Jahren dieselbe: unvergessliche Abenteuer und aufrichtige Gastfreundschaft."
      },
      aboutUsPage: {
        story1: {
          title: "Camping-Pioniere seit 1987.",
          subtitle: "UNSERE GESCHICHTE",
          text: "Gegründet 1987 als das <0>erste private Camp</0> im ehemaligen Jugoslawien. Unsere Regel Nr. 1 im Auto Camp 'Drina' ist es, Gäste <0>wie Familie zu behandeln, nicht wie Kunden!</0>",
          text2: "Die Familien Kostović und Vujičić geben stolz die Geschichte und Geschichten dieser Region am Lagerfeuer weiter und machen Ihren Aufenthalt zu einem authentischen Erlebnis, an das man sich ein Leben lang erinnert.",
          badge1: "Tradition seit 1987",
          badge2: "Familien Kostović & Vujičić",
          imageCaption: "\"Gastfreundschaft liegt in unserer DNA.\""
        },
        story2: {
          title: "Leben am Ufer der Drina",
          subtitle: "LAGE & ABENTEUER",
          text: "Wir befinden uns direkt am linken Flussufer und bieten eine einzigartige Atmosphäre mit Morgennebel und direktem Wasserzugang. Wir sind spezialisiert auf <strong>Rafting-Touren auf Tara und Drina</strong>, und Boote sowie Kajaks stehen unseren Gästen jederzeit für unabhängige Erkundungen zur Verfügung.",
          button: "Rafting-Touren"
        },
        safety: {
          title: "Sicherheit ohne Kompromisse",
          subtitle: "SICHERHEIT & AUSRÜSTUNG",
          text1: "Ihre Sicherheit ist das Fundament jedes Abenteuers. Alle unsere Skipper sind <0>zertifizierte Profis</0> mit jahrelanger Erfahrung in Wildgewässern, geschult, um in jeder Situation zu reagieren.",
          text2: "Wir verwenden ausschließlich hochwertige, zertifizierte Ausrüstung. Jeder Gast erhält einen kompletten <0>Neoprenanzug, eine professionelle Weste und einen Helm</0>. Vor jeder Abfahrt gehen wir detaillierte <0>Sicherheitsverfahren (Briefing)</0> durch.",
          badges: {
            skippers: "Lizenzierte Skipper",
            equipment: "Zertifizierte Ausrüstung",
            briefing: "Sicherheits-Briefing",
            insurance: "Gästeversicherung"
          }
        },
        "skippersSection": {
          "subtitle": "Unsere Experten",
          "title": "Lernen Sie Ihre Skipper und Guides kennen",
          "description": "Erfahren, lizenziert und voller Geschichten. Bei unserem legendären Team sind Sie in sicheren Händen.",
          "listenVibe": "Hör dir naš Rhythmus an:"
        },
        "skippers": [
          {
            "id": 1,
            "name": "Filip Vujičić",
            "role": "Manager & Leitender Guide",
            "image": "/images/tara-rafting-guide-fica.webp",
            "desc": "Filip ist seit seinem 12. Lebensjahr das Herz des Camps Drina iund wuchs in diesem geschätzten Familienunternehmen auf. Als Manager überwacht er jedes Detail des Gasterlebnisses und heißt Besucher persönlich willkommen, um einen herzlichen und reibungslosen Aufenthalt zu gewährleisten. Über das Camp-Gelände hinaus ist Filip ein professioneller Rafting- und Wanderguide, der sein tiefes lokales Wissen mit einer Leidenschaft für Abenteuer verbindet. Ob er die Logistik managt oder eine Tour leitet, Filip ist immer zur Stelle, um Ihrer Reise eine professionelle und persönliche Note zu verleihen.",
            "experience": "16 Jahre Erfahrung",
            "specialty": "Wildwasser"
          },
          {
            "id": 2,
            "name": "Jovo",
            "role": "Leitender Kletter- & Wanderführer",
            "image": "/images/hiking-mountain-guide.webp",
            "desc": "Der Meister der Höhen und versteckten Bergpfade. Jovo führt Sie sicher zu den atemberaubendsten Aussichtspunkten der Dinarischen Alpen. Seine Expertise im Klettern und seine tiefe Leidenschaft für die Wildnis machen jede Wanderung zu einer legendären Geschichte.",
            "experience": "7 Jahre Erfahrung",
            "specialty": "Berggipfel"
          },
          {
            "id": 3,
            "name": "David",
            "role": "Chef-Skipper",
            "image": "/images/tara-rafting-guide-baki.webp",
            "desc": "Unser Chef-Skipper und der Motor des Teams. Er sorgt für erstklassigen Spaß, und sein Abenteuergeist lässt Sie jede Welle auf eine völlig neue Weise erleben.",
            "experience": "8 Jahre Erfahrung",
            "specialty": "Gute Stimmung"
          },
          {
            "id": 4,
            "name": "Nedeljko",
            "role": "Skiper",
            "image": "/images/tara-rafting-guide-djone.webp",
            "desc": "Minister für Sicherheit beim Rafting. Ruhig und gefasst ist Nedeljko Ihr Beschützer auf dem Fluss – ideal für eine entspannte und sichere Familienabfahrt.",
            "experience": "7 Jahre Erfahrung",
            "specialty": "Sicherheit geht vor"
          },
          {
            "id": 5,
            "name": "Matja",
            "role": "Musikredakteur",
            "image": "/images/caja.webp",
            "desc": "Als unser Musikredakteur ist Matija für den großartigen Soundtrack verantwortlich, koji kroz naš restoran odzvanja. Egal, ob Sie eine Mahlzeit genießen oder einfach nur den Fluss beobachten, seine Auswahl bietet die perfekte Ambient-Musik für Ihren Aufenthalt.",
            "experience": "12 Jahre Erfahrung",
            "specialty": "Ambient & Fluss-Sound",
            "playlists": [
              "https://open.spotify.com/playlist/5yyB3stoa4MI973GYMB0ZN?si=WqzTxnyPRYmu8l5_4DF_pQ",
              "https://open.spotify.com/playlist/3Kly9gSRybUzvOV4w9ryLD?si=mE5tW-RiRTaihKFHn275vA",
              "https://open.spotify.com/playlist/6rZFpCuwxfD6NyPoxWJHGn?si=s20LBN5MSWOqUha6XcJSlA",
              "https://open.spotify.com/playlist/3646BWzyRc4LYclXixF2nv?si=ZH8fWprwTUGoNsPv48Pd5g"
            ]
          }
        ],
        story3: {
          title: "Gipfel von Maglić und Zelengora",
          subtitle: "DINARISCHE ALPEN",
          text: "Zelengora, mit ihren Seen ('Bergaugen'), wird oft als der schönste Berg der Region bezeichnet. Im Kontrast dazu stehen die steilen Klippen von Maglić und Volujak. Unsere <0>erfahrenen Guides</0> führen Sie sicher durch diese Wildnis und teilen Geschichte und verborgene Schätze.",
          list: {
            item1: "Maglić, Zelengora, Volujak, Ljubišnja",
            item2: "Kulturhistorische Denkmäler"
          },
          button: "Touren erkunden"
        },
        values: {
          title: "Warum sind wir anders?",
          subtitle: "Wir sind keine kommerzielle Tourismusfabrik. Wir sind Hüter von Tradition und Natur.",
          cards: {
            personal: { title: "Persönlicher Ansatz", text: "Wir begrüßen jeden Gast persönlich. Wir kennen Ihre Namen und Geschichten. Hier sind Sie keine Zimmernummer." },
            safety: { title: "Sicherheit", text: "Wir verwenden nur die hochwertigste Ausrüstung. Unsere Guides sind zertifizierte Profis." },
            food: { title: "Hausgemachte Küche", text: "Wir servieren authentische Gerichte aus lokalen Zutaten – Kalbfleisch unter der Glocke (Sač), Käse und Prosciutto." }
          }
        }
      },
      "multiDay": {
        "hero": {
          "tagline": "Erweitertes Erlebnis",
          "title": "Mehr Tage, Mehr Erinnerungen",
          "subtitle": "Überlassen Sie sich dem Rhythmus der Wildnis. Von den Stromschnellen der Tara und Berggipfeln bis hin zur Stille der Schluchten und Lagerfeuern unter den Sternen. Dies ist nicht nur Urlaub – es ist eine Rückkehr zu den Wurzeln."
        },
        "package5day": {
          "title": "ULTIMATIVE",
          "title_highlight": "EXPEDITION",
          "day": "Tag",
          "spots": "Begrenzte Plätze verfügbar",
          "subtitle": "All-inclusive-Paket für wahre Abenteurer",
          "description": "Unser meistverkauftes Mehrtagespaket, das Wasser, Erde und Adrenalin verbindet. Sechs Tage Flucht aus der Zivilisation mit erstklassiger Verpflegung und Unterkunft.",
          "cta": "6-Tage-Tour Buchen",
          "days": {
            "1": { 
              "title": "Ankunft & Willkommen", 
              "desc": "Check-in ab 14 Uhr. Begrüßungsgetränk und Unterbringung in Bungalows. Treffen mit den Guides und traditionelles Abendessen am Lagerfeuer mit Musik." 
            },
            "2": { 
              "title": "Großes Tara-Rafting", 
              "desc": "Ganztägiges Wasserabenteuer (18 km). Bewältigung der aufregendsten Stromschnellen, Schwimmen unter Wasserfällen und Fotopausen. Mittagessen in der Natur." 
            },
            "3": { 
              "title": "Eroberung der Berggipfel", 
              "desc": "Wandertour zum Trnovačko-See (in Herzform) oder Aufstieg zum Maglić. Fantastischer Blick auf den Urwald Perućica. Lunchpaket inklusive." 
            },
            "4": { 
              "title": "Adrenalin: Canyoning oder Jeep", 
              "desc": "Sie haben die Wahl: Erkundung des engen Nevidio-Canyons für Mutige oder Jeep-Safari-Ring um den Durmitor mit Zip-Line-Option. Abendessen unter Sternen." 
            },
            "5": { 
              "title": "Ruhe & Erholung", 
              "desc": "Freier Tag zum Aufladen der Batterien. Schwimmen in der Drina, Angeln, Beachvolleyball oder ein leichter Spaziergang in der Umgebung. Genießen Sie die Ruhe des Camps." 
            },
            "6": { 
              "title": "Entspannung & Abreise", 
              "desc": "Entspannter Morgen mit Kaffee und reichhaltigem Bergfrühstück. Austausch von Fotos und Videos mit der Gruppe, Packen und Check-out bis 12 Uhr." 
            }
          }
        },
        "builder": {
          "tag": "Maßgeschneidert",
          "titleStart": "Kreieren Sie Ihr",
          "titleEnd": "Abenteuer",
          "subtitle": "Das fertige Paket passt nicht? Wählen Sie die Aktivitäten, die Sie lieben, und wir organisieren den Rest.",
          "selectTitle": "Aktivitäten wählen",
          "perPerson": "PRO PERSON",
          "total": "Geschätzt",
          "perPersonSuffix": "/ Person",
          "cta": "Angebot Anfordern",
          "disclaimer": "*Endpreis kann je nach Gruppengröße variieren",
          "features": {
            "guides": "Professionelle Guides",
            "equipment": "Top-Ausrüstung",
            "foodIncludedLabel": "Verpflegung inklusive",
            "foodIncludedText": "Traditionelles Frühstück und Mittagessen/Lunchpaket sind im Preis jeder Aktivität enthalten."
          },
          "activities": {
            "rafting": "Tara Rafting",
            "hiking": "Wandertouren",
            "canyoning": "Canyoning",
            "jeep": "Jeep Safari",
            "camping": "Campingplatz",
            "meals": "Vollpension"
          }
        },
        "modal": {
          "title": "Dein Abenteuer",
          "summary": "Übersicht der gewählten Aktivitäten",
          "name": "Dein Name",
          "dateFrom": "Anreise",
          "dateTo": "Abreise",
          "email": "Deine E-Mail",
          "whatsappBtn": "Per WhatsApp senden",
          "emailBtn": "Per E-Mail anfragen",
          "total": "Gesamt pro Person",
          "validationError": "Bitte füllen Sie alle Felder aus, bevor Sie senden.",
          "successTitle": "Vielen Dank für Ihr Vertrauen!",
          "successText": "Deine Anfrage wurde erfolgreich versendet. Unser Team wird dich so schnell wie möglich kontaktieren, um die Details zu klären.",
          "footerSlogan": "Wir sehen uns an der Drina!",
          "emailSubject": "Anfrage für Abenteuer",
          "emailBodyLabel": "Gewählte ktivitäten",
          "emailPeriodLabel": "Zeitraum",
          "emailPriceLabel": "Preis pro person",
          "successMsg": "Anfrage erfolgreich gesendet! Wir melden uns bald.",
          "footerSlogan": "Wir sehen uns an der Drina!"
        },
        "scouts": {
          "badge": "Für große Gruppen",
          "title": "Abenteuer im Auto Camp Drina",
          "intro": "Willkommen im Auto Camp Drina, dem ultimativen Basislager für Pfadfindergruppen und Naturliebhaber. Direkt am Ufer der unberührten Drina gelegen, bieten wir die perfekte Mischung aus wildem Abenteuer und modernem Komfort.",
          "experienceTitle": "Unser Erlebnisangebot",
          "tagline": "Die perfekte Mischung aus wildem Abenteuer und modernem Komfort.",
          "features": {
            "camping": { 
              "title": "Pfadfinder-Camping", 
              "desc": "Große, organisierte Plätze, ideal für Gruppendynamik und das Erlernen von Outdoor-Fertigkeiten." 
            },
            "rafting": { 
              "title": "Wildwasser-Rafting", 
              "desc": "Meistern Sie die berühmten Drina-Stromschnellen mit unseren professionellen Guides." 
            },
            "hiking": { 
              "title": "Geführtes Wandern", 
              "desc": "Entdecken Sie versteckte Aussichtspunkte und üppige Waldwege direkt vom Camp aus." 
            },
            "restaurant": { 
              "title": "Restaurant am Fluss", 
              "desc": "Verzichten Sie auf den Campingkocher und genießen Sie authentische lokale Küche und herzhafte Mahlzeiten in unserem Restaurant." 
            }
          },
          "whyTitle": "Warum wir?",
          "whyText": "Wir sind auf große Gruppen spezialisiert und bieten die nötige Infrastruktur für einen sicheren und spannenden Pfadfinderausflug. Von gesicherten Parkplätzen bis zum Ausrüstungsverleih übernehmen wir die Logistik, damit Sie sich auf den Weg konzentrieren können.",
          "cta": "Gruppenanfrage"
        },
        "meals": {
          "breakfast": "Frühstück",
          "lunch": "Mittagessen",
          "dinner": "Abendessen",
          "lunch_pack": "Lunchpaket"
        }
      },
      "bikerHub": {
        "hero": {
          "tagline": "TET & Rally Basislager",
          "titleMain": "Ultimatives Balkan",
          "titleAccent": "Basislager",
          "description": "Hör auf zu suchen und fang an zu fahren. Im Herzen der rauesten Landschaften Bosniens gelegen, sind wir der führende taktische Knotenpunkt für Fahrer, die den TET (Trans Euro Trail) und die Balkanpässe bezwingen. Wir bieten mehr als nur ein Bett; wir bieten alles, was ein Biker zwischen den Etappen braucht.",
          "button": "Pit Stop Buchen"
        },
        "features": {
          "specs": "Technische Daten",
          "titleMain": "Warum Biker",
          "titleAccent": "Uns Wählen",
          "hubLabel": "Basislager-Hub",
          "stationLabel": "Verifizierte Station",
          "operationalLabel": "Einsatzbasis",
          "imageTitle1": "Deine Basis",
          "imageTitle2": "Dein Weg",
          "campView": "Blick auf das Camp",
          "items": {
            "stay": {
              "title": "Übernachten nach Wunsch",
              "desc": "Wählen Sie zwischen gemütlichen Privatunterkünften oder unserem malerischen Campingplatz am Fluss."
            },
            "fuel": {
              "title": "Kraftstoff für die Fahrt",
              "desc": "Unser hauseigenes Restaurant serviert herzhafte, lokale bosnische Mahlzeiten – perfekt für lange Tage im Sattel. Wir führen auch eine Auswahl an lokalen Bieren und erfrischenden Getränken."
            },
            "garage": {
              "title": "TET Bosnia",
              "desc": "Das Auto Camp Drina ist das perfekte Basislager für Biker und bietet einen einfachen Zugang zu den besten Strecken der Region. Wir sind ideal in der Nähe der TET-Routen (Trans Euro Trail) gelegen, was uns zum idealen Drehkreuz für Offroad-Abenteurer und Dual-Sport-Fahrer macht. Wir bieten alles, was ein Biker für einen komfortablen Aufenthalt benötigt, einschließlich der Sicherheit, dass mechanische Dienste für notwendige Reparaturen oder Wartungen in der Nähe verfügbar sind."
            },
            "storage": {
              "title": "Sichere Lagerung",
              "desc": "Planen Sie eine längere Tour? Sie können Ihr Auto und Ihren Anhänger sicher auf unserem Campingplatz parken, während Sie den Balkan auf zwei Rädern erkunden."
            },
            "routes": {
              "title": "Die besten Routen",
              "desc": "Direkt am Tor zum Sutjeska-Nationalpark und zur Tara-Schlucht gelegen, liegen einige der besten Kurvenstrecken und Offroad-Pfade Europas direkt vor unserer Haustür."
            }
          }
        },
        "seeker": {
          "partner": "Strategischer Partner",
          "titleBrand": "SEEKER 2000",
          "titleType": "VAGABONDS",
          "description": "Motorrad-Abenteuer-Raid für klassische Enduros. Kein Rennen, pure Freiheit. 1000 km Rundweg durch Bosnien & Montenegro.",
          "button": "Seeker Raid Erkunden"
        },
        "gallery": {
          "specs": "Visuelles Logbuch",
          "titleMain": "Der Hub",
          "titleAccent": "In Aktion",
          "hubLabel": "Taktische",
          "stationLabel": "Galerie"
        },
        "partners": {
          "title": "Offizielle Unterstützung & Partner"
        },
        "locator": {
          "titleMain": "Finde uns auf",
          "titleAccent": "Der Karte",
          "verified": "Verifizierte bikerfreundliche Standorte",
          "viewBtn": "ANSEHEN"
        }
      },
      "faq": {
        "badge": "Hilfecenter",
        "title": "Häufig gestellte Fragen",
        "subtitle": "Alles, was Sie über Ihr Abenteuer im Auto Camp Drina wissen müssen.",
        "searchPlaceholder": "Fragen suchen (z.B. Ausrüstung, Kinder, Essen...)",
        "noResults": "Keine Ergebnisse für Ihre Suche gefunden.",
        "ctaTitle": "Haben Sie noch Fragen?",
        "ctaText": "Unser Team steht Ihnen zur Verfügung. Rufen Sie uns an oder schreiben Sie uns.",
        "contactUs": "Kontaktieren Sie uns",
        "teaserTitle": "Haben Sie Fragen?",
        "viewAll": "Alle Fragen anzeigen",
        "categories": {
          "all": "Alle",
          "rafting": "Rafting",
          "hiking": "Wandern & Bergsteigen",
          "logistics": "Logistik & Ausrüstung",
          "camp": "Camp & Unterkunft",
          "booking": "Buchungen"
        },
        "questions": {
          "swimming_skills": {
            "q": "Ich bin kein Schwimmer, kann ich am Rafting teilnehmen?",
            "a": "Absolut. Schwimmkenntnisse sind keine Voraussetzung. Alle Teilnehmer erhalten professionelle Schwimmwesten, die Sie über Wasser halten, selbst wenn Sie im Wasser landen. Unsere lizenzierten Skipper sorgen für Ihre Sicherheit. Herausfallen aus dem Boot ist selten, und die Weste ist Pflicht."
          },
          "children_rafting": {
            "q": "Ist Rafting sicher für Kinder?",
            "a": "Ja! Rafting ist eine großartige Familienaktivität. Für Kinder empfehlen wir die Sommermonate (Juli, August, September), wenn der Wasserstand niedriger und das Wasser wärmer ist. Unsere Skipper passen die Tour an die Jüngsten an und machen Pausen zum Schwimmen und Spielen. Wir haben Ausrüstung in Kindergrößen."
          },
          "rain_policy": {
            "q": "Was ist, wenn es am Tag des Raftings regnet?",
            "a": "Rafting findet auch bei Regen statt – nass werden Sie sowieso! Regen trägt oft zum Abenteuererlebnis bei. Wir stellen Neoprenanzüge zur Verfügung, die Ihre Körperwärme halten, sowie Anoraks (Windjacken) zum Schutz vor Wind und Regen. Regenschauer sind kein Grund, die Tour abzusagen."
          },
          "alcohol_policy": {
            "q": "Dürfen wir Alkohol auf dem Boot konsumieren?",
            "a": "Zu Ihrer Sicherheit ist Alkoholkonsum vor und während der Fahrt strengstens verboten. Der Skipper hat das Recht, alkoholisierte Personen vom Boot zu entfernen. Zeit zum Entspannen mit hausgemachtem Schnaps, Wein und Musik ist nach der Rückkehr ins Camp, wo eine unvergessliche Party auf Sie wartet."
          },
          "hiking_difficulty": {
            "q": "Wie körperlich anstrengend ist das Wandern?",
            "a": "Wir haben Touren für alle Fitnesslevel. Touren zum See 'Donje Bare' oder zu Aussichtspunkten sind einfacher und für Freizeitsportler geeignet. Der Aufstieg zum Maglić (2386m) ist anspruchsvoller und erfordert gute Kondition und geeignetes Schuhwerk (Wanderschuhe). Der Schwierigkeitsgrad ist in jedem Paket angegeben."
          },
          "hiking_gear": {
            "q": "Welche Ausrüstung benötige ich zum Wandern?",
            "a": "Für den Aufstieg zum Maglić sind feste Wanderschuhe (Bergschuhe) obligatorisch. Wir empfehlen Kleidung im Schichtenprinzip, da sich das Wetter in den Bergen schnell ändern kann. Bringen Sie auch im Sommer einen warmen Hoodie und einen Regenmantel mit."
          },
          "hiking_transport": {
            "q": "Wie erreichen wir die Ausgangspunkte der Wanderwege?",
            "a": "Alle unsere Wandertouren beinhalten einen Offroad-Transfer in unseren Jeeps zu den Ausgangspunkten wie Prijevor. Ihr Auto bleibt sicher auf dem Parkplatz des Camps stehen."
          },
          "hiking_guides": {
            "q": "Sind die Wege im NP Sutjeska ohne Führer sicher?",
            "a": "Obwohl die Wege markiert sind, empfehlen wir dringend unsere lizenzierten Bergführer. Sie kennen jeden Stein, sorgen für Ihre Sicherheit und erzählen unglaubliche Geschichten über den Urwald Perućica und die lokale Geschichte."
          },
          "documents_border": {
            "q": "Brauche ich einen Reisepass für das Rafting?",
            "a": "Es ist wichtig zu beachten, dass der Fluss Tara die natürliche Grenze zwischen Bosnien und Herzegowina und Montenegro bildet, und da der Startpunkt für das Rafting in Montenegro liegt, müssen wir Ihre Reisedokumente bei den Grenzbehörden beider Länder registrieren. Während für Bürger aus Serbien sowie Bosnien und Herzegowina ein gültiger Personalausweis für diesen Übergang ausreicht, ist für Kinder und Bürger aller anderen Länder ein gültiger Reisepass zwingend erforderlich, weshalb wir Sie bitten, die Gültigkeit Ihrer Dokumente vor der Abreise zu überprüfen."
          },
          "what_to_bring": {
            "q": "Was soll ich mitbringen?",
            "a": "Wir stellen die komplette Rafting-Ausrüstung (Anzug, Stiefel, Weste, Helm). Sie bringen mit: Badebekleidung (wird unter dem Anzug getragen), Handtuch, Hygieneartikel und gute Laune. Für Wandertouren sind festes Schuhwerk und Kleidung im Zwiebelprinzip obligatorisch."
          },
          "phones_cameras": {
            "q": "Kann ich ein Handy oder eine Kamera mit aufs Boot nehmen?",
            "a": "Sie können, aber auf eigenes Risiko. Die Boote haben wasserdichte Säcke, aber wir raten dazu, Wertsachen im Camp oder im Safe zu lassen. Die beste Option für Aufnahmen ist eine GoPro-Kamera (Sie können diese bei uns mieten oder Aufnahmen von unseren Skippern kaufen)."
          },
          "equipment_hygiene": {
            "q": "Wird die Ausrüstung gewaschen und gewartet?",
            "a": "Hygiene ist unsere Priorität. Alle Ausrüstungsgegenstände (Anzüge, Stiefel, Helme) werden nach jedem Gebrauch gründlich gewaschen, desinfiziert und getrocknet. Sie erhalten immer saubere und funktionstüchtige Ausrüstung."
          },
          "accommodation_types": {
            "q": "Welche Unterkünfte haben Sie und haben die Bungalows Badezimmer?",
            "a": "Wir bieten verschiedene Unterkunftsmöglichkeiten an. Unsere unteren Holzhütten nutzen saubere Gemeinschaftstoiletten und -duschen. Die oberen Bungalows (Comfort, Superior und Premium) verfügen über eine eigene Toilette im Inneren, während sich die Duschen in den Gemeinschaftsanlagen befinden. Wir bieten auch Plätze für Wohnmobile und Zelte an."
          },
          "parking_wifi": {
            "q": "Haben Sie Parkplätze und Internet?",
            "a": "Ja, wir haben einen großen, kostenlosen Parkplatz für alle Gäste, der videoüberwacht wird. Außerdem ist der gesamte Camp-Komplex, einschließlich Restaurant und Bungalows, mit kostenlosem WLAN abgedeckt."
          },
          "food_diet": {
            "q": "Haben Sie Optionen für Vegetarier oder spezielle Diäten?",
            "a": "Natürlich. Unsere Küche basiert auf lokalen Spezialitäten, aber wir respektieren alle Ihre Bedürfnisse. Ob Sie Vegetarier, Veganer sind oder glutenfrei essen, sagen Sie uns einfach bei der Buchung Bescheid, und unsere Köche bereiten eine spezielle Mahlzeit für Sie zu."
          },
          "pets": {
            "q": "Ist das Camp haustierfreundlich?",
            "a": "Ja! Ihre Haustiere sind in unserem Camp willkommen. Wir bitten Sie nur, auf sie aufzupassen und Rücksicht auf andere Gäste zu nehmen, um allen einen angenehmen Aufenthalt zu gewährleisten."
          },
          "booking_deposit": {
            "q": "Wie buche ich und ist eine Anzahlung erforderlich?",
            "a": "Sie können über das Formular auf der Website, per E-Mail oder Telefon reservieren. Zur Bestätigung der Reservierung ist eine Anzahlung von 50€ pro Person erforderlich (auf ein Konto in Serbien oder BiH). Den Restbetrag zahlen Sie bei Ankunft im Camp."
          },
          "cancellation": {
            "q": "Was ist, wenn ich meine Ankunft stornieren muss?",
            "a": "Reservierungen können bis zu 3 Wochen vor dem geplanten Termin kostenlos verschoben oder storniert werden. In diesem Fall wird die Anzahlung zurückerstattet oder auf einen neuen Termin übertragen. Regen ist kein gültiger Grund für eine Stornierung, da Touren auch bei Regen stattfinden."
          },
          "solo_travelers": {
            "q": "Kann ich alleine oder als Paar kommen, ohne große Gruppe?",
            "a": "Natürlich! Sie müssen keine eigene Gruppe haben. Wir organisieren täglich Touren und schließen Sie gerne anderen fröhlichen Teams im Boot an. Das ist eine großartige Gelegenheit, neue Freunde zu finden."
          }
        }
      },
      // --- PACKAGES (DATA) ---
      packages: {
        rafting: [
          {
            id: 1,
            title: "RAFTING SPRINT",
            duration: "1 Tag",
            price: "70€",
            difficulty: "Mittel",
            description: "Ideale Wahl für Durchreisende! Erleben Sie den Nervenkitzel der Tara und genießen Sie ein traditionelles Mittagessen. Schnell, intensiv und unvergesslich.",
            image: "/images/scenic-drina-river-rafting.webp",
            features: ["1x Mahlzeit (Mittagessen)", "Keine Übernachtung", "Alle Ausrüstung & Transport", "Versicherung inklusive"],
            fullItinerary: [
              "Versammlung der Gruppe zur vereinbarten Zeit zwischen Teilnehmern und Organisatoren.",
              "Ausgabe der Ausrüstung: Jeder Teilnehmer erhält einen Neoprenanzug, Stiefel und eine Weste.",
              "Transport mit Jeeps und Vans nach Brštenovica, wo das Rafting beginnt.",
              "Teambildung und Treffen mit dem Skipper. Boote haben eine Kapazität von 10-12 Personen.",
              "Rafting beginnt gegen 13:00 Uhr. Die Tour führt durch 14 km des aufregendsten Teils der Tara.",
              "Die Abfahrt dauert etwa 3,5 Stunden mit Pausen zum Schwimmen und Erfrischen.",
              "Rückkehr zum Camp bis 17:00 Uhr.",
              "Mittagessen - traditionelle Küche (Kalbfleisch unter der Glocke, Rafter-Suppe...).",
              "Ende der Tour nach dem Mittagessen."
            ]
          },
          {
            id: 2,
            title: "ADRENALINE RUSH",
            duration: "1 Tag",
            price: "75€",
            difficulty: "Mittel",
            description: "Ganztagesabenteuer! Starten Sie mit Frühstück, bezwingen Sie die Tara-Stromschnellen und enden Sie mit einem reichhaltigen Mittagessen. Die beliebteste Tageswahl.",
            image: "/images/reservation-background.webp",
            features: ["2x Mahlzeiten (Frühstück, Mittagessen)", "Keine Übernachtung", "Komplette Ausrüstung", "Rückkehr bis 17 Uhr"],
            fullItinerary: [
              "Frühstück bis 10:30 Uhr – heimische und lokale Küche.",
              "Ausgabe der Ausrüstung: Jeder Teilnehmer erhält einen Neoprenanzug, Stiefel und eine Weste.",
              "Transport mit Jeeps nach Brštenovica (Rafting-Start).",
              "Teambildung, Treffen mit Skippern und Regeln. Bootskapazität 10-12 Personen.",
              "Rafting beginnt gegen 13:00 Uhr. Tour durch 14 km des aufregendsten Teils der Tara.",
              "Die Abfahrt dauert etwa 3,5 Stunden mit Pausen zum Schwimmen.",
              "Rückkehr zum Camp bis 17:00 Uhr.",
              "Reichhaltiges traditionelles Mittagessen/Abendessen (Spezialitäten unter der Glocke...).",
              "Ende der Tour nach dem Essen."
            ]
          },
          {
            id: 3,
            title: "CANYON NIGHT",
            duration: "2 Tage / 1 Nacht",
            price: "ab 115€",
            difficulty: "Mittel",
            description: "Mehr als Rafting! Spüren Sie die Magie des Abends am Fluss mit Lagerfeuer. Inklusive Übernachtung und drei erstklassigen heimischen Mahlzeiten.",
            image: "/images/rafting-section.webp",
            features: ["3x Mahlzeiten", "1x Übernachtung", "Rafting 18km", "Abendparty"],
            fullItinerary: [
              "TAG 1:",
              "Ankunft im Camp am Nachmittag und Unterbringung.",
              "Abendessen, Abhängen am Lagerfeuer, Musik und Ausruhen.",
              "TAG 2:",
              "Frühstück bis 10:30 Uhr – heimische Küche.",
              "Ausgabe der Ausrüstung (Anzug, Stiefel, Weste).",
              "Transport nach Brštenovica (Rafting-Start).",
              "Teambildung und Skipper-Instruktionen.",
              "Rafting beginnt gegen 13:00 Uhr (14 km aufregender Teil der Tara).",
              "Rückkehr zum Camp bis 17:00 Uhr.",
              "Traditionelles Mittagessen (Kalbfleisch unter der Glocke...).",
              "Ende der Tour nach dem Mittagessen."
            ]
          },
          {
            id: 4,
            title: "TARA ULTIMATE",
            duration: "3 Tage / 2 Nächte",
            price: "ab 145€",
            difficulty: "Mittel",
            description: "Echte Flucht aus der Realität. Zwei Nächte in der Natur, vier Mahlzeiten und Rafting-Abenteuer. Perfektes Wochenendpaket zum Auftanken.",
            image: "/images/rafting-home-hero.webp",
            features: ["4x Mahlzeiten", "2x Nächte", "Komplette Ausrüstung", "Versicherung inklusive"],
            fullItinerary: [
              "TAG 1:",
              "Ankunft im Camp am Nachmittag und Unterbringung.",
              "Abendessen, Lagerfeuer, Musik und Ausruhen.",
              "TAG 2:",
              "Frühstück bis 10:30 Uhr – heimische Küche.",
              "Ausgabe der Ausrüstung und Transport zum Start.",
              "Rafting beginnt gegen 13:00 Uhr.",
              "Rückkehr zum Camp bis 17:00 Uhr.",
              "Traditionelles Abendessen und Abhängen am Lagerfeuer.",
              "TAG 3:",
              "Frühstück und Abreise."
            ]
          },
          {
            id: 5,
            title: "NATURE MASTER",
            duration: "3 Tage / 2 Nächte",
            price: "210€",
            difficulty: "Schwer",
            description: "Exklusive Kombination aus Rafting und Wandern! Erkunden Sie den Perućica-Urwald und den Tara-Canyon. 5 Mahlzeiten und 2 Nächte für totalen Hedonismus.",
            image: "/images/adventure-center-drina-team.webp",
            features: ["5x Mahlzeiten", "2x Nächte", "Perućica-Besuch", "Rafting-Abenteuer"],
            fullItinerary: [
              "TAG 1:",
              "Ankunft im Camp am Nachmittag, Unterbringung.",
              "Abendessen, Lagerfeuer, Musik.",
              "TAG 2:",
              "Frühstück bis 10:30 Uhr.",
              "Ausgabe der Ausrüstung und Transport nach Brštenovica.",
              "Rafting-Start 13:00 Uhr.",
              "Rückkehr zum Camp bis 17:00 Uhr.",
              "Traditionelles Abendessen und Lagerfeuer.",
              "TAG 3:",
              "Frühstück gegen 09:00 Uhr.",
              "Besuch des Perućica-Urwalds.",
              "Fortsetzung: Rafting neuer Abschnitt oder Drina-Abfahrt.",
              "Rückkehr zum Camp 17:00 Uhr, Abendessen und Ende der Tour."
            ]
          }
        ],
        hiking: [
          {
            id: 1,
            title: "Tara Canyon Rand",
            duration: "4 Std.",
            level: "Mittel",
            description: "Malerische Wanderung entlang des Randes der 1000m tiefen Schlucht. Abfahrt mit Geländewagen.",
            image: "/images/tara-river-canyon-hiking.webp",
            details: ["Start: 08:00 Uhr via Geländewagen", "Wanderdauer: 4 Std.", "Blick auf Durmitor und Piva"],
            fullItinerary: [
              "Abfahrt um 08:00 Uhr mit dem Geländewagen vom Camp.",
              "Spaziergang entlang des Canyon-Randes mit mehreren Aussichtspunkten, die unvergessliche Ausblicke auf die ca. 1000m tiefe Tara-Schlucht bieten.",
              "Möglicher Besuch des Durmitor-Gebirges sowie der Sušica- und Piva-Canyons.",
              "Geschätzte Wanderzeit beträgt 4 Stunden."
            ]
          },
          {
            id: 2,
            title: "Trnovačko-See & Prijevor",
            duration: "4 Std.",
            level: "Mittel",
            description: "Wanderung zum herzförmigen See (Maglić/Volujak). Schwimmen möglich.",
            image: "/images/trnovacko-jezero-hiking-tara.webp",
            details: ["Start: 08:00 Uhr nach Prijevor (1668m)", "Wanderdauer: 4 Std.", "Schwimmen im Alpensee"],
            fullItinerary: [
              "Abfahrt um 08:00 Uhr mit dem Geländewagen vom Camp nach Prijevor (1668m ü.M.) am Fuße des Maglić-Gebirges.",
              "Unterwegs besuchen wir: Perućica-Urwald, Skakavac-Wasserfall (75m hoch).",
              "Dann gehen wir zum Trnovačko-See, der auf einer Höhe von 1517m zwischen den Bergen Maglić und Volujak liegt. Dies ist eine wunderschöne Umgebung inmitten einer Krone von Gipfeln. Schwimmen im See ist beliebt und empfehlenswert.",
              "Geschätzte Wanderzeit beträgt 4 Stunden."
            ]
          },
          {
            id: 3,
            title: "Maglić Aufstieg",
            duration: "6 Std.",
            level: "Schwer",
            description: "Bezwingen Sie den höchsten Gipfel von BuH (2386m) mit Panoramablick auf den NP Sutjeska.",
            image: "/images/planinarenje-maglic-sutjeska.webp",
            details: ["Start: 08:00 Uhr zur Basis Vučevo", "Wanderdauer: 6 Std.", "Höchster Gipfel von Bosnien & Herzegowina"],
            fullItinerary: [
              "Abfahrt um 08:00 Uhr vom Camp nach Lokva-Dernežište am Fuße des Vučevo-Gebirges.",
              "Unterwegs besuchen wir den Perućica-Urwald, einschließlich des Skakavac-Wasserfalls (75m hoch).",
              "Dann wandern wir von Vučevo in Richtung Maglić-Gipfel (2386m) – dem höchsten Berg in Bosnien und Herzegowina. Es gibt keine Worte, um die Aussicht vom Gipfel zu beschreiben.",
              "Geschätzte Wanderzeit beträgt 6 Stunden."
            ]
          },
          {
            id: 4,
            title: "Perućica-Urwald & Skakavac",
            duration: "4 Std.",
            level: "Leicht/Mittel",
            description: "Spaziergang durch einen der letzten Urwälder Europas und Blick auf den 75m hohen Skakavac-Wasserfall.",
            image: "/images/vodopad-skakavac-perucica.webp",
            details: ["Start: 09:00 Uhr nach Dragoš sedlo", "Wanderdauer: 4 Std.", "Panoramablick auf den Skakavac-Wasserfall"],
            fullItinerary: [
              "Abfahrt um 09:00 Uhr mit dem Geländewagen vom Camp zum Dorf Dragoš.",
              "Pause an Aussichtspunkten mit Blick auf den Wald und den Skakavac-Wasserfall (75m hoch).",
              "Wir fahren weiter durch den Wald Richtung Tunjemir und gehen nach Suha, wo der Transport auf uns wartet.",
              "Geschätzte Wanderzeit beträgt 4 Stunden."
            ]
          },
          {
            id: 5,
            title: "Zelengora - Bergaugen",
            duration: "3 Std.",
            level: "Leicht",
            description: "Zelengora ist berühmt für ihre „Bergaugen“ – kristallklare Gletscherseen.",
            image: "/images/zelengora-planinska-jezera.webp",
            details: ["Abfahrt: 09:00 Uhr zu den Zelengora-Seen", "Wanderdauer: 3h+", "Diese Tour lässt sich voll und ganz an Ihre Wünsche und Kondition anpassen."],
            fullItinerary: [
              "Abfahrt um 09:00 Uhr vom Camp in Richtung Zelengora",
              "Zelengora verbirgt 8 wunderschöne Seen (Donje Bare, Gornje Bare, Orlovačko, Kotlaničko und andere).",
              "Es gibt viele Kombinationen von Wanderwegen und Aussichtspunkten; die genauen Seen und die Intensität der Tour werden direkt im Camp mit dem Guide vereinbart.",
              "Die Rückkehr zum Camp ist flexibel, je nachdem, wie viele Orte Sie besuchen möchten."
            ]
          }
        ]
      }
    }
  }
};

const sessionKey = 'ac_drina_lang_session';
const savedLang = localStorage.getItem('i18nextLng');

if (!sessionStorage.getItem(sessionKey)) {
  localStorage.removeItem('i18nextLng');
  sessionStorage.setItem(sessionKey, 'true');
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ['en', 'sr', 'de'],
    detection: {
      order: ['localStorage', 'htmlTag'], 
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;