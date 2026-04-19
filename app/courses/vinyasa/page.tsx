import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Clock, Users, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vinyasa Flow Classes in Rishikesh | Nirvana Yoga School',
  description: 'Experience the dynamic flow of Vinyasa yoga in Rishikesh. Breath-synchronised movement, sun salutations, and fluid sequences for all levels.',
};

const benefits = [
  'Build strength and flexibility simultaneously',
  'Improve cardiovascular health through continuous movement',
  'Develop breath-body coordination and mindfulness',
  'Burn calories while remaining meditative and calm',
  'Suitable for beginner to intermediate practitioners',
];

const schedule = [
  { day: 'Monday / Wednesday / Friday', time: '7:00 AM – 8:30 AM', type: 'Morning Flow' },
  { day: 'Tuesday / Thursday', time: '6:00 PM – 7:30 PM', type: 'Evening Vinyasa' },
  { day: 'Saturday', time: '8:00 AM – 10:00 AM', type: 'Weekend Deep Flow' },
];

export default function VinyasaPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-16 h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80" alt="Vinyasa Flow" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-transparent flex items-center px-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Yoga Style</span>
              <h1 className="font-display text-5xl text-white font-bold mt-2 mb-3">Vinyasa Flow</h1>
              <p className="text-white/80 max-w-md text-lg">Breath-synchronised dynamic movement in the heart of the Himalayas.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-3xl text-sage font-bold mb-4">What is Vinyasa Flow?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vinyasa — meaning &ldquo;to place in a special way&rdquo; — is a style of yoga characterised by linking breath with movement. Each inhale and exhale acts as an anchor, moving you gracefully from one posture to the next in a continuous, meditative flow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Nirvana Yoga School in Rishikesh, our Vinyasa classes draw from classical Hatha roots while incorporating athletic strength-building sequences. We teach in small groups, ensuring every student receives personalised guidance regardless of their level.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Benefits</h2>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map(b => (
                  <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-sage/10">
                    <CheckCircle className="w-5 h-5 text-terracotta mt-0.5 shrink-0" />
                    <span className="text-sage/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Class Schedule</h2>
              <div className="space-y-3">
                {schedule.map(s => (
                  <div key={s.day} className="bg-white rounded-xl p-5 border border-sage/10 flex flex-col md:flex-row md:items-center justify-between gap-2">
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

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-sage/10 shadow-sm">
              <h3 className="font-display text-xl text-sage font-bold mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3"><Users className="w-4 h-4 text-terracotta" /><span>Max 15 students per class</span></div>
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-terracotta" /><span>90 minutes per session</span></div>
                <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-terracotta" /><span>6 sessions per week</span></div>
              </div>
              <div className="mt-6 pt-5 border-t border-sage/10">
                <p className="text-2xl font-bold text-sage mb-1">₹800 <span className="text-sm font-normal text-muted-foreground">/ class</span></p>
                <p className="text-xs text-muted-foreground mb-4">Monthly pass: ₹6,000 (unlimited)</p>
                <Link href="/contact" className="block w-full text-center bg-terracotta hover:bg-sage text-white font-bold py-3 rounded-full transition-colors text-sm">
                  Book a Trial Class
                </Link>
              </div>
            </div>

            <div className="bg-sage rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Want to teach Vinyasa?</p>
              <p className="text-white/70 text-sm mb-4">Our 200-Hour YTT includes Vinyasa flow methodology and sequencing.</p>
              <Link href="/courses/200hr-hatha-ashtanga-vinyasa" className="flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                See the Course <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
