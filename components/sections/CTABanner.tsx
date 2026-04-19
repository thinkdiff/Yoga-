'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta to-gold z-0" />
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="text-white/80 font-medium tracking-widest uppercase text-sm mb-4">
            Limited Seats Available
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white font-medium mb-6">
            Begin Your Transformation in Rishikesh
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Join our upcoming Teacher Training batch and immerse yourself in the true essence of Yoga.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-terracotta hover:bg-ivory text-lg h-14 px-8 w-full sm:w-auto">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg h-14 px-8 w-full sm:w-auto bg-transparent">
              <Link href="/brochure">Download Brochure</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
