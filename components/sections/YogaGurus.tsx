'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const gurus = [
  {
    name: 'T. Krishnamacharya',
    title: 'The Father of Modern Yoga',
    image: '/gurus/krishnamacharya.png',
  },
  {
    name: 'B.K.S. Iyengar',
    title: 'Founder of Iyengar Yoga',
    image: '/gurus/iyengar.png',
  },
  {
    name: 'K. Pattabhi Jois',
    title: 'Founder of Ashtanga Yoga',
    image: '/gurus/pattabhi_jois.png',
  },
];

const MandalaBorder = () => (
  <div className="absolute inset-[-20px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500">
    <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
      <defs>
        <path id="mandala-path" d="M100,20 Q120,20 130,40 T150,60 T170,100 T150,140 T130,180 T100,180 T70,180 T50,140 T30,100 T50,60 T70,40 T100,20" />
      </defs>
      {[...Array(12)].map((_, i) => (
        <g key={i} transform={`rotate(${i * 30} 100 100)`}>
          <path
            d="M100,10 Q110,30 100,50 Q90,30 100,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-amber-600/60"
          />
          <circle cx="100" cy="5" r="1.5" className="fill-amber-500" />
          <path
            d="M100,20 L105,35 L100,45 L95,35 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-amber-700/40"
          />
        </g>
      ))}
      <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-amber-800/30" />
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-800/20" />
    </svg>
  </div>
);

const YogaGurus = () => {
  return (
    <section className="py-24 bg-[#fdfaf6] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-stone-900 mb-4"
          >
            Our Spiritual Yoga Gurus
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-amber-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {gurus.map((guru, index) => (
            <motion.div
              key={guru.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-64 h-64 mb-8">
                <MandalaBorder />
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={guru.image}
                    alt={guru.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-serif text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
                {guru.name}
              </h3>
              <p className="text-stone-500 font-light italic text-sm md:text-base">
                {guru.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default YogaGurus;
