'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from '../shared/SectionHeader';
import { homepageGalleryRows } from '@/lib/data/media';

const row1 = [...homepageGalleryRows.rowOne, ...homepageGalleryRows.rowOne];
const row2 = [...homepageGalleryRows.rowTwo, ...homepageGalleryRows.rowTwo];

export default function AnimatedGallery() {
  return (
    <section className="py-24 bg-ivory overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <SectionHeader title="Our Sanctuary" subtitle="Glimpses of life at House of Yogis" />
      </div>

      <div className="relative flex flex-col gap-4 w-full">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {row1.map((src, i) => (
              <div key={i} className="relative w-64 md:w-80 h-48 md:h-64 rounded-xl overflow-hidden shrink-0 group">
                <Image src={src} alt="Gallery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 256px, 320px" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 min-w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {row2.map((src, i) => (
              <div key={i} className="relative w-64 md:w-80 h-48 md:h-64 rounded-xl overflow-hidden shrink-0 group">
                <Image src={src} alt="Gallery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 256px, 320px" />
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-ivory to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-ivory to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
