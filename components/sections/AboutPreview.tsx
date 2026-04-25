'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Flower2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="py-24 bg-ivory overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-terracotta mb-4 font-medium tracking-wide uppercase text-sm">
              <Flower2 className="w-5 h-5" />
              <span>Our Heritage</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-sage font-medium leading-tight mb-6">
              Welcome to Nirvana — A Sanctuary for the Soul
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed mb-8">
              <p>
                Nestled in the lush foothills of the Himalayas, alongside the sacred Ganges river, 
                Nirvana Yoga School provides an authentic and transformative space for seekers from across the globe.
              </p>
              <p>
                We honor the ancient roots of yogic science while bringing a modern, accessible approach 
                to our Teacher Training programs. As a fully registered Yoga Alliance USA school, our curriculum 
                meets the highest international standards of excellence.
              </p>
            </div>

            <ul className="space-y-3 mb-10">
              {[
                'Authentic Traditional Yoga Lineage',
                'Expert Indian & International Teachers',
                'Sacred Rishikesh Location',
                'Residential & Online Programs'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-sage font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="bg-sage hover:bg-sage/90 text-white">
              <Link href="/about">Our Story</Link>
            </Button>
          </motion.div>

          {/* Image Overlap Column */}
          <motion.div 
            className="relative h-[600px] w-full hidden md:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-[80%] h-[75%] rounded-2xl overflow-hidden shadow-xl z-20">
              <Image
                src="https://images.unsplash.com/photo-1567593810070-7a3d471af022?w=1200&q=80"
                alt="Ganga aarti at Parmarth Niketan, Rishikesh"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-2xl z-30 border-8 border-ivory">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
                alt="Sunrise yoga on the banks of the Ganga"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute top-1/2 left-[10%] w-24 h-24 bg-gold rounded-full z-10 -translate-y-1/2 opacity-20 blur-2xl" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
