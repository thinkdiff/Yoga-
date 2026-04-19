import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Clock, Users, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hatha Yoga Classes in Rishikesh | Nirvana Yoga School',
  description: 'Traditional Hatha Yoga classes in Rishikesh. Asana, pranayama and relaxation taught in the classical tradition.',
};

const benefits = [
  'Builds a strong foundation for all yoga styles',
  'Improves posture, balance and joint flexibility',
  'Reduces stress and calms the nervous system',
  'Suitable for absolute beginners and intermediate students',
  'Includes pranayama and guided relaxation every session',
];

const schedule = [
  { day: 'Daily', time: '6:00 AM – 7:30 AM', type: 'Early Morning Hatha' },
  { day: 'Monday / Wednesday / Friday', time: '9:00 AM – 10:30 AM', type: 'Morning Hatha' },
  { day: 'Tuesday / Thursday / Saturday', time: '5:00 PM – 6:30 PM', type: 'Evening Hatha' },
];

export default function HathaPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden mb-16 h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80" alt="Hatha Yoga" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-transparent flex items-center px-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Yoga Style</span>
              <h1 className="font-display text-5xl text-white font-bold mt-2 mb-3">Hatha Yoga</h1>
              <p className="text-white/80 max-w-md text-lg">The classical mother of all yoga — stillness, strength, and breath.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-3xl text-sage font-bold mb-4">What is Hatha Yoga?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hatha Yoga is the classical, foundational style of yoga from which all modern forms descend. The word &ldquo;Hatha&rdquo; combines &ldquo;Ha&rdquo; (sun) and &ldquo;Tha&rdquo; (moon), representing the balance of opposing forces within the body and mind.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In our Rishikesh ashram, Hatha is taught exactly as it has been for generations — static postures held long enough to align the body, release tension, and cultivate inner awareness. Each class ends with pranayama and guided Yoga Nidra relaxation.
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
                <div className="flex items-center gap-3"><Users className="w-4 h-4 text-terracotta" /><span>Max 20 students per class</span></div>
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-terracotta" /><span>90 minutes per session</span></div>
                <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-terracotta" /><span>Daily morning & evening</span></div>
              </div>
              <div className="mt-6 pt-5 border-t border-sage/10">
                <p className="text-2xl font-bold text-sage mb-1">₹600 <span className="text-sm font-normal text-muted-foreground">/ class</span></p>
                <p className="text-xs text-muted-foreground mb-4">Monthly pass: ₹5,000 (unlimited)</p>
                <Link href="/contact" className="block w-full text-center bg-terracotta hover:bg-sage text-white font-bold py-3 rounded-full transition-colors text-sm">
                  Book a Trial Class
                </Link>
              </div>
            </div>
            <div className="bg-sage rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Train to teach Hatha?</p>
              <p className="text-white/70 text-sm mb-4">Our 200-hour YTT in Rishikesh covers classical Hatha methodology in depth.</p>
              <Link href="/courses/200hr-hatha-ashtanga-vinyasa" className="flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                Explore the YTT <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
