'use client';

import { VideoEmbed } from '@/lib/types';
import YouTubeEmbed from './YouTubeEmbed';
import SectionHeader from './SectionHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface YouTubeLibraryProps {
  videos: VideoEmbed[];
  title?: string;
  subtitle?: string;
}

export default function YouTubeLibrary({
  videos,
  title = 'Watch & Learn',
  subtitle = 'Dive into the world of Nirvana through our lens.',
}: YouTubeLibraryProps) {
  const mainVideos = videos.filter((v) => v.kind !== 'short');
  const shorts = videos.filter((v) => v.kind === 'short');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={title} subtitle={subtitle} />

        <Tabs defaultValue="videos" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-ivory border border-sage/10">
              <TabsTrigger value="videos" className="data-[state=active]:bg-sage data-[state=active]:text-white px-8">
                Videos
              </TabsTrigger>
              <TabsTrigger value="shorts" className="data-[state=active]:bg-sage data-[state=active]:text-white px-8">
                Shorts
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainVideos.map((vid) => (
                <div key={vid.id} className="group">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-video mb-4">
                    <YouTubeEmbed youtubeId={vid.youtubeId} title={vid.title} />
                  </div>
                  <h4 className="font-display text-xl text-sage group-hover:text-terracotta transition-colors">
                    {vid.title}
                  </h4>
                  {vid.subtitle && <p className="text-sm text-muted-foreground">{vid.subtitle}</p>}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shorts">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {shorts.map((short) => (
                <div key={short.id} className="group">
                  <div className="rounded-xl overflow-hidden shadow-md aspect-[9/16] mb-3">
                    <YouTubeEmbed youtubeId={short.youtubeId} title={short.title} />
                  </div>
                  <h4 className="font-display text-sm text-sage group-hover:text-terracotta transition-colors line-clamp-2">
                    {short.title}
                  </h4>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
