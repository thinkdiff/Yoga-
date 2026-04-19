import { VenueFacility, VenueSurrounding } from '../types';

export const venueAddress = {
  line1: 'Tapovan, Badrinath Road',
  line2: 'Rishikesh, Uttarakhand, India — 249192',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5!2d78.2667!3d30.1333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTapovan%2C%20Rishikesh!5e0!3m2!1sen!2sin!4v1700000000000',
};

export const facilities: VenueFacility[] = [
  { title: 'Private & Shared Rooms', description: 'Comfortable ensuite rooms with Himalayan views, housekeeping, and Wi-Fi.', icon: 'bed' },
  { title: 'Dedicated Yoga Shalas', description: 'Two airy shalas with natural light, props, and space for group and personal practice.', icon: 'flower' },
  { title: 'Sattvic Dining Hall', description: 'Three fresh vegetarian meals daily — Ayurvedically balanced to support your practice.', icon: 'utensils' },
  { title: 'Library & Study Room', description: 'A curated collection of yogic texts, quiet seating, and study resources.', icon: 'book' },
  { title: 'Rooftop Meditation Deck', description: 'Sunrise and sunset sits above the Ganges with 360° Himalayan views.', icon: 'sun' },
  { title: 'Ayurvedic Treatment Room', description: 'In-house consultation and massage therapies with trained practitioners.', icon: 'leaf' },
];

export const surroundings: VenueSurrounding[] = [
  {
    title: 'The Sacred Ganges',
    description: 'Our school sits a short walk from the Ganges. Morning practice is framed by the river and Himalayan foothills.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80',
  },
  {
    title: 'Tapovan Village',
    description: 'A quiet yogic neighbourhood above Laxman Jhula, known for its ashrams, cafes, and bookshops.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&q=80',
  },
  {
    title: 'Laxman Jhula & Beatles Ashram',
    description: 'Iconic footbridges, historic ashrams, and the Beatles ashram are all within walking distance.',
    image: 'https://images.unsplash.com/photo-1602000394748-76a6a6b1a2ba?w=1000&q=80',
  },
];
