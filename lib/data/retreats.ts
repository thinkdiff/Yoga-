import { Retreat } from '../types';

export const retreats: Retreat[] = [
  {
    id: 'r1',
    slug: '3-day-wellness',
    title: '3-Day Yoga & Wellness Retreat',
    duration: '3 Days, 2 Nights',
    price: 350,
    highlights: ['Daily Hatha Yoga', 'Introduction to Meditation', 'Sattvic Meals', 'Ganges Walk'],
    schedule: [
      '07:00 AM - Morning Yoga',
      '09:00 AM - Breakfast',
      '11:00 AM - Wellness Intro',
      '01:00 PM - Lunch',
      '04:00 PM - Nature Walk',
      '06:00 PM - Evening Meditation',
      '07:30 PM - Dinner'
    ],
    images: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80']
  },
  {
    id: 'r2',
    slug: '5-day-ayurveda',
    title: '5-Day Yoga & Ayurveda Retreat',
    duration: '5 Days, 4 Nights',
    price: 550,
    highlights: ['Daily Ashtanga & Hatha', 'Ayurvedic Massage', 'Sound Healing Session', 'Ayurvedic Cooking Class'],
    schedule: [
      '07:00 AM - Morning Yoga',
      '09:00 AM - Breakfast',
      '11:00 AM - Ayurvedic Lecture',
      '01:00 PM - Lunch',
      '03:00 PM - Spa / Massage',
      '06:00 PM - Sound Healing',
      '07:30 PM - Dinner'
    ],
    images: ['https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80']
  },
  {
    id: 'r3',
    slug: '7-day-spiritual',
    title: '7-Day Spiritual Immersion Retreat',
    duration: '7 Days, 6 Nights',
    price: 750,
    highlights: ['Intensive Yoga Philosophy', 'Himalayan Trek', 'Ganges Aarti Experience', 'Chakra Balancing'],
    schedule: [
      '06:30 AM - Pranayama & Yoga',
      '09:00 AM - Breakfast',
      '11:00 AM - Philosophy Walk',
      '01:00 PM - Lunch',
      '03:00 PM - Excursion',
      '06:30 PM - Kirtan / Aarti',
      '08:00 PM - Dinner'
    ],
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80']
  }
];
