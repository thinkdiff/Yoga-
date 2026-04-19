'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function: easeOutQuart
        const easeOut = 1 - Math.pow(1 - percentage, 4);
        setCount(Math.floor(target * easeOut));

        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="font-display text-4xl md:text-5xl text-gold mb-2 font-semibold">
        {count}
        {suffix}
      </div>
      <div className="text-ivory/80 font-body uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
}
