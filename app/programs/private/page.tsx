import { Metadata } from 'next';
import Link from 'next/link';
import { User, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Private Yoga Sessions in Rishikesh | House of Yogis Rishikesh',
  description: 'One-on-one private yoga sessions in Rishikesh with senior teachers. Tailored entirely to your goals, level, and schedule.',
};

export default function PrivateSessionsPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden mb-16 h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80" alt="Private Sessions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-transparent flex items-center px-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Special Program</span>
              <h1 className="font-display text-5xl text-white font-bold mt-2 mb-3">Private Sessions</h1>
              <p className="text-white/80 max-w-md text-lg">100% personalised — your practice, your pace, your goals.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-3xl text-sage font-bold mb-4">Yoga, Your Way</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nothing accelerates a yoga practice like one-to-one attention from an experienced teacher. Private sessions at House of Yogis Rishikesh are fully customised lessons with a senior teacher of your choosing — designed completely around your body, your goals, and your available time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you want to deepen asana, learn pranayama for the first time, recover from an injury, or refine your teaching methodology, we build every session around what you need — not a fixed curriculum.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Popular Private Session Types</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Personalised asana practice and alignment correction',
                  'Therapeutic yoga for back pain, knee issues, or injury recovery',
                  'Pranayama and meditation technique instruction',
                  'Prenatal yoga (all trimesters)',
                  'Teaching methodology coaching for yoga teachers',
                ].map(b => (
                  <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-sage/10">
                    <User className="w-5 h-5 text-terracotta mt-0.5 shrink-0" />
                    <span className="text-sage/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Why Private?</h2>
              <div className="grid grid-cols-1 gap-3">
                {['Faster progress than group classes', 'Safe and expert guidance for injuries or special conditions', 'Fully flexible scheduling around your travel plans', 'Deep focus on exactly what you want to learn'].map(b => (
                  <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-sage/10">
                    <CheckCircle className="w-5 h-5 text-sage mt-0.5 shrink-0" />
                    <span className="text-sage/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-sage/10 shadow-sm">
              <h3 className="font-display text-xl text-sage font-bold mb-4">Private Session Rates</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center border-b border-sage/10 pb-3">
                  <span className="text-sage/70">Single session (60 min)</span>
                  <span className="font-bold text-sage">$60</span>
                </div>
                <div className="flex justify-between items-center border-b border-sage/10 pb-3">
                  <span className="text-sage/70">5-session pack</span>
                  <span className="font-bold text-sage">$275</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sage/70">10-session pack</span>
                  <span className="font-bold text-sage">$500</span>
                </div>
              </div>
              <Link href="/contact" className="block w-full text-center bg-terracotta hover:bg-sage text-white font-bold py-3 rounded-full transition-colors text-sm mt-6">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
