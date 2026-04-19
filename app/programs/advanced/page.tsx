import { Metadata } from 'next';
import Link from 'next/link';
import { Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Advanced Yoga Practice Program | Nirvana Yoga School Rishikesh',
  description: 'Deepen your practice with our Advanced Yoga immersion in Rishikesh. For experienced practitioners and teachers.',
};

export default function AdvancedPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden mb-16 h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80" alt="Advanced Yoga" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-transparent flex items-center px-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Special Program</span>
              <h1 className="font-display text-5xl text-white font-bold mt-2 mb-3">Advanced Practice</h1>
              <p className="text-white/80 max-w-md text-lg">Intensive guidance for experienced practitioners ready to go deeper.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-3xl text-sage font-bold mb-4">For Dedicated Practitioners</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Advanced Practice Program is a one-month deep dive for committed yogis with at least two years of consistent practice. You will work closely with senior teachers to break through physical and mental plateaus, explore advanced asanas, and integrate subtle practices — pranayama, bandhas, mudras, and meditation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Eligibility: minimum 2 years personal practice, completed at least a 100-hour yoga course or equivalent experience.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">What&apos;s Covered</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Ashtanga Intermediate & Third Series exploration',
                  'Advanced pranayama — kumbhaka, advanced nadi shodhana',
                  'Bandhas and mudras in daily practice',
                  'Yoga philosophy & direct self-inquiry',
                  'Personalised feedback and asana refinement sessions',
                ].map(b => (
                  <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-sage/10">
                    <Award className="w-5 h-5 text-terracotta mt-0.5 shrink-0" />
                    <span className="text-sage/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-sage/10 shadow-sm">
              <h3 className="font-display text-xl text-sage font-bold mb-4">Program Details</h3>
              <div className="space-y-3 text-sm text-sage/80">
                <p><span className="font-semibold">Duration:</span> 4 weeks</p>
                <p><span className="font-semibold">Level:</span> Intermediate–Advanced</p>
                <p><span className="font-semibold">Min. Experience:</span> 2 years</p>
                <p><span className="font-semibold">Intake:</span> Every 2 months</p>
              </div>
              <div className="mt-6 pt-5 border-t border-sage/10">
                <p className="text-2xl font-bold text-sage mb-1">$799 <span className="text-sm font-normal text-muted-foreground">/ program</span></p>
                <Link href="/contact" className="block w-full text-center bg-terracotta hover:bg-sage text-white font-bold py-3 rounded-full transition-colors text-sm mt-4">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="bg-sage rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Want a Certification?</p>
              <p className="text-white/70 text-sm mb-4">Our 300-hour YTT earns you the RYT 500 with Yoga Alliance.</p>
              <Link href="/courses/300hr-advanced-ytt" className="flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                View 300-Hr YTT <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
