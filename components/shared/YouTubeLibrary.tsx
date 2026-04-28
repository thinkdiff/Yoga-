'use client';

import { VideoEmbed } from '@/lib/types';
import YouTubeEmbed from './YouTubeEmbed';
import SectionHeader from './SectionHeader';
interface YouTubeLibraryProps {
  videos: VideoEmbed[];
  title?: string;
  subtitle?: string;
}

export default function YouTubeLibrary({
  videos,
  title = 'Watch & Learn',
  subtitle = 'Dive into the world of House of Yogis through our lens.',
}: YouTubeLibraryProps) {
  const mainVideos = videos.filter((v) => v.kind !== 'short');
  const shorts = videos.filter((v) => v.kind === 'short');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="space-y-20">
          <div>
            <h3 className="font-display text-3xl text-sage mb-8 border-b border-sage/10 pb-4">Featured Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainVideos.map((vid) => (
                <div key={vid.id} className="group">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-video mb-4">
                    <YouTubeEmbed {...vid} />
                  </div>
                  <h4 className="font-display text-xl text-sage group-hover:text-terracotta transition-colors">
                    {vid.title}
                  </h4>
                  {vid.subtitle && <p className="text-sm text-muted-foreground">{vid.subtitle}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl text-sage mb-8 border-b border-sage/10 pb-4">Shorts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {shorts.map((short) => (
                <div key={short.id} className="group">
                  <div className="rounded-xl overflow-hidden shadow-md aspect-[9/16] mb-3">
                    <YouTubeEmbed {...short} />
                  </div>
                  <h4 className="font-display text-sm text-sage group-hover:text-terracotta transition-colors line-clamp-2">
                    {short.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
