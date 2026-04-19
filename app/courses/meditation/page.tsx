import { Metadata } from 'next';
import Link from 'next/link';
import { Wind, Clock, Users, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meditation & Pranayama Classes in Rishikesh | Nirvana Yoga School',
  description: 'Daily meditation and pranayama classes in Rishikesh. Breath techniques, mantra, and guided meditation for all levels.',
};

export default function MeditationPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden mb-16 h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=1200&q=80" alt="Meditation and Pranayama" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-transparent flex items-center px-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Yoga Style</span>
              <h1 className="font-display text-5xl text-white font-bold mt-2 mb-3">Meditation & Pranayama</h1>
              <p className="text-white/80 max-w-md text-lg">The deepest yoga — mastery of mind and breath in the Himalayan tradition.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-3xl text-sage font-bold mb-4">The Yoga of the Mind</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Patanjali&apos;s Yoga Sutras define yoga as the &ldquo;cessation of the fluctuations of the mind.&rdquo; Our Meditation & Pranayama classes take this definition seriously. You will learn classical breath techniques directly from the Indian tradition — nadi shodhana, kapalabhati, bhramari, bhastrika — alongside seated meditation methods from Vipassana, Vedantic self-inquiry, and mantra.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Classes are meditative in nature and suitable for complete beginners. No prior yoga asana experience is required.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">What You Will Learn</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Classical pranayama — nadi shodhana, kapalabhati, bhramari, bhastrika',
                  'Mantra japa — chanting with mala beads',
                  'Breath-awareness and body-scanning meditation',
                  'Yoga Nidra (guided deep relaxation)',
                  'Building a consistent personal daily practice (sadhana)',
                ].map(b => (
                  <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-sage/10">
                    <Wind className="w-5 h-5 text-terracotta mt-0.5 shrink-0" />
                    <span className="text-sage/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Schedule</h2>
              <div className="space-y-3">
                {[
                  { type: 'Morning Pranayama', day: 'Daily', time: '5:30 AM – 6:30 AM' },
                  { type: 'Evening Meditation', day: 'Daily', time: '7:30 PM – 8:30 PM' },
                  { type: 'Yoga Nidra Deep Rest', day: 'Friday', time: '8:30 PM – 9:30 PM' },
                ].map(s => (
                  <div key={s.type} className="bg-white rounded-xl p-5 border border-sage/10 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <p className="font-semibold text-sage text-sm">{s.type}</p>
                      <p className="text-xs text-muted-foreground">{s.day}</p>
                    </div>
                    <div className="flex items-center gap-2 text-terracotta font-bold text-sm">
                      <Clock className="w-4 h-4" /> {s.time}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-sage/10 shadow-sm">
              <h3 className="font-display text-xl text-sage font-bold mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3"><Users className="w-4 h-4 text-terracotta" /><span>All levels welcome</span></div>
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-terracotta" /><span>60 minutes per session</span></div>
                <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-terracotta" /><span>Twice daily, 7 days a week</span></div>
              </div>
              <div className="mt-6 pt-5 border-t border-sage/10">
                <p className="text-2xl font-bold text-sage mb-1">₹500 <span className="text-sm font-normal text-muted-foreground">/ class</span></p>
                <p className="text-xs text-muted-foreground mb-4">Monthly unlimited pass: ₹4,000</p>
                <Link href="/contact" className="block w-full text-center bg-terracotta hover:bg-sage text-white font-bold py-3 rounded-full transition-colors text-sm">
                  Book a Class
                </Link>
              </div>
            </div>
            <div className="bg-sage rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Meditation & Yoga Nidra YTT</p>
              <p className="text-white/70 text-sm mb-4">Train to teach meditation and Yoga Nidra in our specialised 200-hour course.</p>
              <Link href="/courses/200hr-meditation-yoga-nidra" className="flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                View Course <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
