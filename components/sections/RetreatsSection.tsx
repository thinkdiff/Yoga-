'use client';

import SectionHeader from '../shared/SectionHeader';
import { retreats } from '@/lib/data/retreats';
import Image from 'next/image';
import { Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RetreatsSection() {
  return (
    <section className="py-24 bg-[#F9F5EE] relative overflow-hidden" id="retreats">
      {/* Subtle SVG Watermark could go here if needed */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #2C4A3E 2px, transparent 2px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Transformative Wellness Retreats" 
          subtitle="Step away from your daily routine to rejuvenate in nature."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {retreats.map((retreat) => (
            <div key={retreat.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="relative h-60">
                <Image
                  src={retreat.images[0]}
                  alt={retreat.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-sage text-sm font-medium flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-terracotta" />
                  {retreat.duration}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-display text-2xl text-sage mb-4">{retreat.title}</h3>
                <ul className="mb-8 space-y-3">
                  {retreat.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-terracotta mr-2 shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-muted-foreground tracking-wide">From</span>
                    <span className="font-semibold text-lg text-sage">${retreat.price}</span>
                  </div>
                  <Button className="bg-terracotta hover:bg-terracotta/90" asChild>
                    <Link href={`/retreats/${retreat.slug}`}>Book Retreat</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
