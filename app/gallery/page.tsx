'use client';

import AnimatedGallery from '@/components/sections/AnimatedGallery';
import YouTubeLibrary from '@/components/shared/YouTubeLibrary';
import { youtubeLibrary } from '@/lib/data/videos';

export default function GalleryPage() {
  return (
    <div className="pt-24 bg-ivory min-h-screen">
      <AnimatedGallery />

      <div className="container mx-auto px-4 mt-12 pb-24 border-t border-sage/10">
        <YouTubeLibrary videos={youtubeLibrary} />
      </div>
    </div>
  );
}
