import SectionHeader from '@/components/shared/SectionHeader';
import { Metadata } from 'next';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yoga Workshops in Rishikesh | Nirvana Yoga School',
  description: 'Join our immersive weekend yoga workshops in Rishikesh – from pranayama intensives to sound healing and Ayurveda.',
};

const workshops = [
  {
    id: 'w1',
    title: 'Pranayama & Breathwork Intensive',
    date: 'May 10–11, 2026',
    duration: '2 Days',
    capacity: '15 students',
    price: '$149',
    location: 'Rishikesh Ashram',
    description: 'A deep weekend dive into the science and practice of pranayama — from simple breath awareness to advanced kumbhaka techniques.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    tag: 'Breathwork',
  },
  {
    id: 'w2',
    title: 'Sound Healing & Tibetan Bowl Workshop',
    date: 'May 24–25, 2026',
    duration: '2 Days',
    capacity: '12 students',
    price: '$179',
    location: 'Rishikesh Ashram',
    description: 'Immerse in the vibrations of Himalayan singing bowls, gongs, and mantra chanting. Suitable for all levels.',
    image: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?w=800&q=80',
    tag: 'Sound Healing',
  },
  {
    id: 'w3',
    title: 'Ayurvedic Cooking & Wellness',
    date: 'June 7–8, 2026',
    duration: '2 Days',
    capacity: '10 students',
    price: '$129',
    location: 'Rishikesh Ashram',
    description: 'Learn to prepare healing sattvic meals aligned with your dosha, guided by our resident Ayurvedic chef and doctor.',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80',
    tag: 'Ayurveda',
  },
  {
    id: 'w4',
    title: 'Yin Yoga & Restorative Weekend',
    date: 'June 21–22, 2026',
    duration: '2 Days',
    capacity: '18 students',
    price: '$119',
    location: 'Rishikesh Ashram',
    description: 'Slow down, release tension, and restore. Two days of Yin Yoga, guided relaxation, and mindful movement in a nurturing environment.',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80',
    tag: 'Yin Yoga',
  },
  {
    id: 'w5',
    title: 'Yoga Nidra & Deep Rest Retreat',
    date: 'July 5–6, 2026',
    duration: '2 Days',
    capacity: '20 students',
    price: '$99',
    location: 'Rishikesh Ashram',
    description: 'Experience the ancient art of Yoga Nidra — conscious deep sleep. Leave profoundly rested and carrying techniques for life.',
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80',
    tag: 'Meditation',
  },
  {
    id: 'w6',
    title: 'Ashtanga Mysore-Style Intensive',
    date: 'July 19–20, 2026',
    duration: '2 Days',
    capacity: '12 students',
    price: '$159',
    location: 'Rishikesh Ashram',
    description: 'Refine your Ashtanga Primary Series with personalised guidance in the traditional Mysore-style format.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    tag: 'Ashtanga',
  },
];

export default function WorkshopsPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Yoga Workshops"
          subtitle="Short, focused immersions to deepen your practice without a full teacher training commitment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {workshops.map((w) => (
            <div key={w.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-border transition-all duration-300 group flex flex-col">
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-terracotta text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {w.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl text-sage font-semibold mb-2 leading-tight">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{w.description}</p>

                <div className="grid grid-cols-2 gap-2 text-xs text-sage/70 mb-5">
                  <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{w.date}</div>
                  <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{w.duration}</div>
                  <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{w.capacity}</div>
                  <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{w.location}</div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-sage">{w.price}</span>
                  <Link
                    href="/contact"
                    className="bg-terracotta hover:bg-sage text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-colors duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-sage rounded-2xl p-10 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">We run custom workshops for groups, corporates, and private clients. Get in touch and we&apos;ll design something just for you.</p>
          <Link href="/contact" className="inline-block bg-white text-sage font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-gold hover:text-white transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
