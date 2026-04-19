import SectionHeader from '@/components/shared/SectionHeader';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Nirvana Yoga School | Our Story & Philosophy',
  description: 'Learn about the heritage, philosophy, and mission of Nirvana Yoga School in Rishikesh.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionHeader title="Our Story & Philosophy" subtitle="A legacy of authentic Himalayan inner engineering." />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" alt="Ashram Life" fill className="object-cover" />
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h3 className="font-display text-4xl text-sage">Rooted in Tradition. Designed for the Future.</h3>
            <p>Nirvana Yoga School was founded with a singular vision: to preserve the authentic, unbroken lineages of Indian Yoga while providing a safe, comfortable, and highly educational sanctuary for international seekers.</p>
            <p>Our ashram is situated precisely where the spiritual energies of the Himalayas merge with the flowing grace of the Ganges. Here, we believe yoga is not merely a physical exercise, but a profound system of inner technology.</p>
            <div className="pt-6 border-t border-border flex gap-8">
              <div>
                <strong className="block text-2xl font-display text-gold mb-1">15+</strong>
                <span className="text-sm uppercase tracking-wide">Years Active</span>
              </div>
              <div>
                <strong className="block text-2xl font-display text-gold mb-1">20k+</strong>
                <span className="text-sm uppercase tracking-wide">Global Alumni</span>
              </div>
              <div>
                <strong className="block text-2xl font-display text-gold mb-1">100%</strong>
                <span className="text-sm uppercase tracking-wide">Authentic</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sage rounded-3xl p-12 text-center text-white mb-24">
          <h3 className="font-display text-3xl mb-8">Our Core Values</h3>
          <div className="grid sm:grid-cols-4 gap-8">
            {['Authenticity', 'Community', 'Transformation', 'Wisdom'].map(value => (
              <div key={value} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <span className="font-display text-2xl text-gold">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-ivory p-8 rounded-2xl border border-sage/10">
            <h4 className="font-display text-2xl text-sage mb-4">Our Mission</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">To serve as a bridge between ancient Himalayan wisdom and the modern seeker, providing authentic tools for self-realization.</p>
          </div>
          <div className="bg-ivory p-8 rounded-2xl border border-sage/10">
            <h4 className="font-display text-2xl text-sage mb-4">Our Vision</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">Becoming a global sanctuary where tradition meets transformation, fostering a community of conscious, compassionate leaders.</p>
          </div>
          <div className="bg-ivory p-8 rounded-2xl border border-sage/10">
            <h4 className="font-display text-2xl text-sage mb-4">Our Lineage</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">Rooted in the unbroken lineages of Hatha and Ashtanga Yoga, taught by masters who lived the practice in Himalayan ashrams.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-24">
          <h3 className="font-display text-4xl text-sage mb-8">Guided by Masters</h3>
          <p className="text-muted-foreground mb-12">Our faculty consists of dedicated practitioners with decades of experience in traditional yoga and modern sciences.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Yogi Prashant', role: 'Head of Philosophy' },
              { name: 'Dr. Jitendra', role: 'Anatomy Expert' },
              { name: 'Swami Dhyanam', role: 'Meditation Master' },
              { name: 'Guru Vishnu', role: 'Asana Lead' }
            ].map(teacher => (
              <div key={teacher.name} className="p-4">
                <div className="w-24 h-24 bg-sage/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-sage font-display text-xl">{teacher.name[0]}</span>
                </div>
                <h5 className="font-display text-lg text-sage">{teacher.name}</h5>
                <p className="text-xs text-terracotta uppercase tracking-widest">{teacher.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
