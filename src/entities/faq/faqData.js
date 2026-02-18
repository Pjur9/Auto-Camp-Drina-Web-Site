import { HelpCircle, MapPin, Tent, Anchor, Calendar, Info, ShieldCheck, Mountain } from 'lucide-react';

export const faqCategories = [
  { id: 'all', icon: Info },
  { id: 'rafting', icon: Anchor },
  { id: 'hiking', icon: Mountain },
  { id: 'logistics', icon: MapPin },
  { id: 'camp', icon: Tent },
  { id: 'booking', icon: Calendar },
];

export const faqItems = [
  // Rafting
  { id: 1, category: 'rafting', key: 'swimming_skills' },
  { id: 2, category: 'rafting', key: 'children_rafting' },
  { id: 3, category: 'rafting', key: 'rain_policy' },
  { id: 4, category: 'rafting', key: 'alcohol_policy' },
  // Hiking
  { id: 5, category: 'hiking', key: 'hiking_difficulty' },
  { id: 6, category: 'hiking', key: 'hiking_gear' },
  { id: 7, category: 'hiking', key: 'hiking_transport' },
  { id: 8, category: 'hiking', key: 'hiking_guides' },
  // Logistics
  { id: 9, category: 'logistics', key: 'documents_border' },
  { id: 10, category: 'logistics', key: 'what_to_bring' },
  { id: 11, category: 'logistics', key: 'phones_cameras' },
  { id: 12, category: 'logistics', key: 'equipment_hygiene' },
  // Accommodation
  { id: 13, category: 'camp', key: 'accommodation_types' },
  { id: 14, category: 'camp', key: 'parking_wifi' },
  { id: 15, category: 'camp', key: 'food_diet' },
  { id: 16, category: 'camp', key: 'pets' },
  // Bookings
  { id: 17, category: 'booking', key: 'booking_deposit' },
  { id: 18, category: 'booking', key: 'cancellation' },
  { id: 19, category: 'booking', key: 'solo_travelers' }
];