import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Clock, Users, Calendar, ArrowRight, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Restorative Yoga Classes in Rishikesh | Nirvana Yoga School',
  description: 'Deep rest and recovery through our Restorative Yoga classes in Rishikesh. Supported postures, props, and guided relaxation.',
};

export default function RestorativePage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden mb-16 h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1200&q=80" alt="Restorative Yoga" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-transparent flex items-center px-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Yoga Style</span>
              <h1 className="font-display text-5xl text-white font-bold mt-2 mb-3">Restorative Yoga</h1>
              <p className="text-white/80 max-w-md text-lg">Deeply supported postures for complete rest and nervous system recovery.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-3xl text-sage font-bold mb-4">What is Restorative Yoga?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Restorative Yoga is the antidote to a fast-paced world. Using bolsters, blankets, blocks, and straps, each posture is fully supported so the body can release tension passively — without effort or strain. Poses are held for five to twenty minutes, guiding the nervous system into deep parasympathetic rest.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ideal for students recovering from injury, experiencing burnout, or simply needing space to slow down and heal. It is also a powerful complement to more vigorous yoga practices.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Benefits</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Activates the parasympathetic "rest and digest" system',
                  'Reduces cortisol levels and chronic stress',
                  'Supports recovery from injury or illness',
                  'Improves sleep quality significantly',
                  'Accessible to all ages and body types',
                ].map(b => (
                  <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-sage/10">
                    <Heart className="w-5 h-5 text-terracotta mt-0.5 shrink-0" />
                    <span className="text-sage/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Class Schedule</h2>
              <div className="space-y-3">
                {[
                  { type: 'Restorative & Nidra', day: 'Wednesday / Friday', time: '7:00 PM – 8:30 PM' },
                  { type: 'Weekend Restore', day: 'Sunday', time: '10:00 AM – 12:00 PM' },
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
                <div className="flex items-center gap-3"><Users className="w-4 h-4 text-terracotta" /><span>Max 10 students (intimate)</span></div>
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-terracotta" /><span>90–120 minutes per session</span></div>
                <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-terracotta" /><span>3 sessions per week</span></div>
              </div>
              <div className="mt-6 pt-5 border-t border-sage/10">
                <p className="text-2xl font-bold text-sage mb-1">₹700 <span className="text-sm font-normal text-muted-foreground">/ class</span></p>
                <p className="text-xs text-muted-foreground mb-4">Props included — no experience required</p>
                <Link href="/contact" className="block w-full text-center bg-terracotta hover:bg-sage text-white font-bold py-3 rounded-full transition-colors text-sm">
                  Book a Class
                </Link>
              </div>
            </div>
            <div className="bg-sage rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Try our Yin Yoga Workshop</p>
              <p className="text-white/70 text-sm mb-4">A longer immersion into slow, supported yoga practice.</p>
              <Link href="/workshops" className="flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                View Workshops <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
