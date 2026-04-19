import { retreats } from '@/lib/data/retreats';
import SectionHeader from '@/components/shared/SectionHeader';
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Clock, Check } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yoga Retreats in Rishikesh | Nirvana',
  description: 'Relax and rejuvenate with our carefully curated yoga and wellness retreats.',
};

export default function RetreatsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#F9F5EE] min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Wellness & Spiritual Retreats" 
          subtitle="Escape the noise and reconnect with your true self in the serenity of the Himalayas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {retreats.map((retreat) => (
            <div key={retreat.id} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={retreat.images[0]}
                  alt={retreat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-terracotta text-white text-xs px-2 py-1 rounded inline-flex items-center mb-2">
                    <Clock className="w-3 h-3 mr-1" /> {retreat.duration}
                  </div>
                  <h3 className="font-display text-2xl text-white font-medium shadow-sm">{retreat.title}</h3>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-sage font-medium uppercase tracking-wider text-sm mb-4">Highlights</h4>
                <ul className="mb-8 space-y-3">
                  {retreat.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-gold mr-3 shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-muted-foreground text-sm">Price per person</span>
                    <span className="font-semibold text-2xl text-sage">${retreat.price}</span>
                  </div>
                  <Button className="w-full bg-sage hover:bg-sage/90 text-white h-12" asChild>
                    <Link href={`/contact?inquiry=${retreat.slug}`}>Inquire Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
