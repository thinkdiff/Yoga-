import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Clock, Users, Calendar, ArrowRight, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prenatal Yoga Classes in Rishikesh | Nirvana Yoga School',
  description: 'Safe, nurturing Prenatal Yoga classes in Rishikesh for all trimesters. Taught by certified prenatal yoga specialists.',
};

export default function PrenatalPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden mb-16 h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1200&q=80" alt="Prenatal Yoga" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-transparent flex items-center px-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Yoga Style</span>
              <h1 className="font-display text-5xl text-white font-bold mt-2 mb-3">Prenatal Yoga</h1>
              <p className="text-white/80 max-w-md text-lg">A nurturing practice to support mother and baby through every trimester.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">Always consult your doctor or midwife before beginning any new yoga practice during pregnancy. Our teachers are certified in prenatal yoga and will tailor your practice to your trimester and needs.</p>
            </div>

            <section>
              <h2 className="font-display text-3xl text-sage font-bold mb-4">Yoga Through Pregnancy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prenatal Yoga is specifically designed to support the physical and emotional changes that occur during pregnancy. Our classes focus on gentle stretching, targeted strengthening, breathing techniques for labour, and relaxation to reduce anxiety.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Classes are kept deliberately small and intimate, and our teachers modify every posture for each student&apos;s trimester. Partners are welcome in the antenatal breathing and bonding sessions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Benefits</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Reduces back pain, pelvic discomfort, and swelling',
                  'Strengthens muscles needed for labour and delivery',
                  'Breathing techniques ease labour contractions',
                  'Reduces stress and improves sleep quality',
                  'Connects you with your body and baby',
                ].map(b => (
                  <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-sage/10">
                    <Heart className="w-5 h-5 text-terracotta mt-0.5 shrink-0" />
                    <span className="text-sage/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Schedule</h2>
              <div className="space-y-3">
                {[
                  { type: 'Prenatal Gentle Flow', day: 'Monday / Thursday', time: '10:00 AM – 11:00 AM' },
                  { type: 'Breathing & Bonding', day: 'Saturday', time: '11:00 AM – 12:00 PM' },
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
                <div className="flex items-center gap-3"><Users className="w-4 h-4 text-terracotta" /><span>Max 8 students (intimate)</span></div>
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-terracotta" /><span>60 minutes per session</span></div>
                <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-terracotta" /><span>Trimester 1, 2 & 3 welcome</span></div>
              </div>
              <div className="mt-6 pt-5 border-t border-sage/10">
                <p className="text-2xl font-bold text-sage mb-1">₹700 <span className="text-sm font-normal text-muted-foreground">/ class</span></p>
                <p className="text-xs text-muted-foreground mb-4">Monthly 8-class pass: ₹5,000</p>
                <Link href="/contact" className="block w-full text-center bg-terracotta hover:bg-sage text-white font-bold py-3 rounded-full transition-colors text-sm">
                  Book a Class
                </Link>
              </div>
            </div>
            <div className="bg-sage rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Private Sessions Available</p>
              <p className="text-white/70 text-sm mb-4">One-on-one prenatal yoga sessions tailored entirely around you.</p>
              <Link href="/programs/private" className="flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
