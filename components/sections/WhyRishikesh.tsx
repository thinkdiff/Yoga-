'use client';

import { motion } from 'framer-motion';
import { Sparkles, Mountain, Waves } from 'lucide-react';
import Image from 'next/image';

export default function WhyRishikesh() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      title: "Sacred Energy",
      desc: "Immerse yourself in the spiritual epicenter where ancient masters sought enlightenment.",
    },
    {
      icon: <Mountain className="w-8 h-8 text-gold" />,
      title: "Himalayan Wisdom",
      desc: "Learn surrounded by the tranquil and grounded frequency of the majestic Himalayas.",
    },
    {
      icon: <Waves className="w-8 h-8 text-gold" />,
      title: "Ganges Immersion",
      desc: "Experience the purifying flow of the holy river Mother Ganga at your doorstep.",
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80"
        alt="The Holy Ganga and Himalayan foothills at Rishikesh"
        fill
        className="object-cover absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-sage/80 z-10 mix-blend-multiply" />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-ivory font-medium mb-6">
            Why Learn Yoga in Rishikesh?
          </h2>
          <p className="text-ivory/80 text-lg">
            Known as the Yoga Capital of the World, Rishikesh is home to ancient temples, 
            powerful ley lines, and unbroken lineages of yoga masters. 
            There is no place more conducive to deep inner transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center flex flex-col items-center hover:bg-white/15 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display text-white mb-3">{feature.title}</h3>
              <p className="text-ivory/70">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
