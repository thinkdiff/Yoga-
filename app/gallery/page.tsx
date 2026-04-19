'use client';

import SectionHeader from '@/components/shared/SectionHeader';
import Image from 'next/image';
import { useState } from 'react';
import YouTubeLibrary from '@/components/shared/YouTubeLibrary';
import { youtubeLibrary } from '@/lib/data/videos';

const categories = ['All', 'Yoga Classes', 'Campus', 'Beach Yoga', 'Ceremonies'];

const photos = [
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', cat: 'Yoga Classes' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', cat: 'Campus' },
  { src: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80', cat: 'Yoga Classes' },
  { src: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=800&q=80', cat: 'Campus' },
  { src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80', cat: 'Beach Yoga' },
  { src: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80', cat: 'Beach Yoga' },
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', cat: 'Ceremonies' },
  { src: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80', cat: 'Ceremonies' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', cat: 'Campus' },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredPhotos = activeTab === 'All' ? photos : photos.filter(p => p.cat === activeTab);

  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader title="Our Gallery" subtitle="A visual journey through the ashram." />

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeTab === tab 
                ? 'bg-sage text-white border-sage' 
                : 'bg-white text-muted-foreground border-border hover:border-gold hover:text-sage'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo, i) => (
            <div key={i} className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-zoom-in">
              <Image 
                src={photo.src} 
                alt={photo.cat} 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-display text-xl">{photo.cat}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-sage/10">
          <YouTubeLibrary videos={youtubeLibrary} />
        </div>
      </div>
    </div>
  );
}
