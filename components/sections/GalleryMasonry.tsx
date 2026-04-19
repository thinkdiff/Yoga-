'use client';

import SectionHeader from '../shared/SectionHeader';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GalleryMasonry() {
  const photos = [
    { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', span: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80', span: 'col-span-1 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=800&q=80', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80', span: 'col-span-2 row-span-1' }
  ];

  return (
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-4">
        <SectionHeader title="Glimpses of Nirvana" subtitle="Explore life at our campus in Rishikesh" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 mb-12">
          {photos.map((photo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt="Gallery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-sage/0 group-hover:bg-sage/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
