import { PromoConfig } from '../types';

export const promo: PromoConfig = {
  enabled: true,
  headline: 'Save 25% on Early-Bird Enrollment',
  subheadline: 'Book any 200/300/500 hour Yoga Teacher Training before the deadline and receive a 25% discount on tuition.',
  discountPct: 25,
  deadline: '2026-06-30T23:59:59+05:30',
  imageUrl: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=1000&q=80',
  ctaPrimary: { label: 'Enquire Now', href: '/contact?offer=early-bird' },
  ctaSecondary: { label: 'Book Now', href: '/courses' },
};
