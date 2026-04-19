'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/data/testimonials';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-sage relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Student Experiences" 
          subtitle="Hear from our global community of graduates."
          className="text-white"
          decorative={false}
        />

        <div className="max-w-4xl mx-auto relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <Quote className="w-12 h-12 text-gold/30 mb-6" />
              
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="font-accent italic text-2xl md:text-3xl text-ivory mb-8 leading-snug">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              
              <div className="flex flex-col items-center">
                <span className="font-display text-xl text-gold font-medium">
                  {testimonials[currentIndex].name}
                </span>
                <span className="text-white/60 text-sm uppercase tracking-wide mt-1">
                  {testimonials[currentIndex].course} • {testimonials[currentIndex].country}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-3 mt-12 relative z-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'bg-gold w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
