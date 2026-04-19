import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Clock, Users, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ashtanga Yoga Classes in Rishikesh | Nirvana Yoga School',
  description: 'Traditional Ashtanga Yoga in Rishikesh. Primary and Intermediate Series in Mysore-style and led class formats.',
};

export default function AshtangaPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden mb-16 h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=1200&q=80" alt="Ashtanga Yoga" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-transparent flex items-center px-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Yoga Style</span>
              <h1 className="font-display text-5xl text-white font-bold mt-2 mb-3">Ashtanga Yoga</h1>
              <p className="text-white/80 max-w-md text-lg">A dynamic, energetic practice of set sequences with deep rhythmic breathing.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-3xl text-sage font-bold mb-4">What is Ashtanga Yoga?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ashtanga Yoga is a highly structured system of yoga codified by Sri K. Pattabhi Jois. It consists of six series of set postures (asanas) linked by breath (vinyasa) and internal locks (bandhas). The result is a deeply moving, almost meditative practice that builds strength, stamina, and focus in equal measure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Nirvana Yoga School, we offer both Mysore-style (self-paced, individual guidance) and Led Primary Series classes, taught by teachers who have trained directly with senior Ashtanga lineage holders.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Benefits</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Builds serious core, arm, and leg strength',
                  'Cultivates unwavering focus and mental discipline',
                  'Detoxifies the body through sweat and breath',
                  'The Mysore style allows completely personalised progression',
                  'Respected globally by serious yoga practitioners',
                ].map(b => (
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
                {[
                  { type: 'Mysore Self-Practice', day: 'Mon – Sat', time: '5:30 AM – 8:00 AM' },
                  { type: 'Led Primary Series', day: 'Tuesday / Friday', time: '6:00 AM – 7:30 AM' },
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
                <div className="flex items-center gap-3"><Users className="w-4 h-4 text-terracotta" /><span>Max 12 students per session</span></div>
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-terracotta" /><span>90 minutes</span></div>
                <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-terracotta" /><span>6 days a week (Moon days off)</span></div>
              </div>
              <div className="mt-6 pt-5 border-t border-sage/10">
                <p className="text-2xl font-bold text-sage mb-1">₹900 <span className="text-sm font-normal text-muted-foreground">/ class</span></p>
                <p className="text-xs text-muted-foreground mb-4">10-class pass: ₹7,500</p>
                <Link href="/contact" className="block w-full text-center bg-terracotta hover:bg-sage text-white font-bold py-3 rounded-full transition-colors text-sm">
                  Book a Class
                </Link>
              </div>
            </div>
            <div className="bg-sage rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Ashtanga Mysore Intensive</p>
              <p className="text-white/70 text-sm mb-4">Join our upcoming Ashtanga-specific weekend workshop.</p>
              <Link href="/workshops" className="flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                See Workshops <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
