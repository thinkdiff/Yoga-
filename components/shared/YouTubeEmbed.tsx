'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { VideoEmbed } from '@/lib/types';

interface YouTubeEmbedProps extends Pick<VideoEmbed, 'youtubeId' | 'src' | 'poster' | 'title' | 'source'> {
  className?: string;
}

export default function YouTubeEmbed({
  youtubeId,
  src,
  poster,
  title,
  source = 'youtube',
  className,
}: YouTubeEmbedProps) {
  const [active, setActive] = useState(false);
  const isLocalVideo = source === 'local' && !!src;

  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden rounded-xl bg-sage/10 shadow-md',
        className
      )}
    >
      {active ? (
        isLocalVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            controls
            autoPlay
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full"
        >
          {isLocalVideo && poster ? (
            <Image
              src={poster}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <Image
              src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
            />
          )}
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-terracotta shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 ml-1" fill="currentColor" />
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
