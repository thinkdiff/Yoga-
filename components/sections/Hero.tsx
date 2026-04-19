'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, Volume2, VolumeX, Music } from 'lucide-react';

const YOUTUBE_VIDEO_ID = '0NLTRw_DjdQ';
const START_SECONDS = 0;
const END_SECONDS = 135; // 2 minutes 15 seconds
const FALLBACK_POSTER = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80';

// Royalty-free ambient yoga music — replace with your own MP3 if desired
const AMBIENT_AUDIO_URL = '/audio/ambient-yoga.mp3';

declare global {
  interface Window {
    YT: {
      Player: new (
        el: string | HTMLElement,
        opts: Record<string, unknown>
      ) => YTPlayerInstance;
      PlayerState: { ENDED: number; PLAYING: number };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YTPlayerInstance {
  playVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  destroy: () => void;
  setVolume: (vol: number) => void;
}

export default function Hero() {
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  // Initialize ambient audio
  useEffect(() => {
    const audio = new Audio(AMBIENT_AUDIO_URL);
    audio.loop = true;
    audio.volume = 0.35; // Gentle background volume
    audio.preload = 'auto';
    audio.addEventListener('canplaythrough', () => setAudioLoaded(true));
    audio.addEventListener('error', () => {
      // If local audio fails, that's ok — widget still shows for YouTube audio
      console.log('Ambient audio file not found. Add an MP3 to /public/audio/ambient-yoga.mp3');
    });
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const initPlayer = useCallback(() => {
    if (!window.YT?.Player) return;
    try {
      playerRef.current = new window.YT.Player('yt-hero-player', {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          start: START_SECONDS,
          end: END_SECONDS,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          playsinline: 1,
          vq: 'hd1080', // Suggest highest quality
          origin: typeof window !== 'undefined' ? window.location.origin : '',
        },
        events: {
          onReady: () => {
            setPlayerReady(true);
          },
          onStateChange: (event: { data: number }) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              playerRef.current?.seekTo(START_SECONDS, true);
              playerRef.current?.playVideo();
            }
          },
          onError: () => {
            setShowFallback(true);
          },
        },
      } as Record<string, unknown>);
    } catch {
      setShowFallback(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
      window.onYouTubeIframeAPIReady = initPlayer;
    } else if (window.YT) {
      initPlayer();
    }

    return () => {
      playerRef.current?.destroy();
    };
  }, [initPlayer]);

  // Hide the pulse hint after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  function toggleSound() {
    if (isMuted) {
      // Turn sound ON — try ambient audio first, fallback to YouTube audio
      if (audioRef.current && audioLoaded) {
        audioRef.current.play().catch(() => {});
      }
      // Also unmute the YouTube video for original sound
      if (playerRef.current) {
        playerRef.current.unMute();
        playerRef.current.setVolume(30); // Lower YouTube volume so ambient dominates
      }
      setIsMuted(false);
      setShowPulse(false);
    } else {
      // Turn sound OFF
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (playerRef.current) {
        playerRef.current.mute();
      }
      setIsMuted(true);
    }
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        {!showFallback ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '200vw',
                height: '200vh',
                minWidth: '200vw',
                minHeight: '200vh',
              }}
            >
              <div id="yt-hero-player" className="w-full h-full" />
            </div>
          </div>
        ) : (
          <Image
            src={FALLBACK_POSTER}
            alt="Yoga in the Himalayas"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-[1]" />
      </div>

      {/* ── Sound Toggle Widget — LEFT SIDE ── */}
      {playerReady && !showFallback && (
        <div className="fixed bottom-8 left-6 z-[60] flex flex-col items-center gap-2">
          <AnimatePresence>
            {showPulse && isMuted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-white/90 backdrop-blur-sm text-sage text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
              >
                🎵 Tap for ambient music
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            onClick={toggleSound}
            className={`relative rounded-full p-3.5 transition-all duration-300 shadow-xl group ${
              isMuted
                ? 'bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-white/30'
                : 'bg-gold/90 backdrop-blur-md border border-gold/50 text-white hover:bg-gold'
            }`}
            title={isMuted ? 'Turn sound on' : 'Turn sound off'}
          >
            {/* Pulse ring when muted */}
            {isMuted && showPulse && (
              <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping" />
            )}

            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </motion.button>

          {/* Playing indicator */}
          <AnimatePresence>
            {!isMuted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full"
              >
                <Music className="w-3 h-3 text-gold" />
                <div className="flex items-end gap-[2px] h-3">
                  {[1, 2, 3, 4].map(i => (
                    <motion.div
                      key={i}
                      className="w-[3px] bg-gold rounded-full"
                      animate={{ height: ['4px', `${6 + i * 3}px`, '4px'] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-white/70 font-medium ml-0.5">Playing</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-block border border-gold/50 bg-black/30 backdrop-blur-sm text-gold px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-6">
            Yoga Alliance USA Certified
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white italic font-medium leading-tight mb-6 max-w-4xl mx-auto">
            Transform Your Practice. <br /> Transform Your Life.
          </h1>

          <p className="text-ivory/90 text-lg md:text-xl font-body max-w-2xl mx-auto">
            Authentic Yoga Teacher Training in the sacred foothills of the Himalayas, Rishikesh, India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
        >
          <Button asChild size="lg" className="bg-terracotta hover:bg-gold text-white text-lg h-14 px-8 border-none transition-all duration-300">
            <Link href="/courses">Explore Courses</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-sage text-lg h-14 px-8 transition-all duration-300">
            <Link href="/retreats">View Retreats</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
