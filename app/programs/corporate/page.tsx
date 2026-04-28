import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, CheckCircle, ArrowRight, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Wellness Yoga Programs | House of Yogis Rishikesh',
  description: 'Bespoke corporate yoga and wellness programs for teams and organisations. On-site or retreat-based.',
};

export default function CorporatePage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden mb-16 h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1200&q=80" alt="Corporate Wellness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-transparent flex items-center px-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Special Program</span>
              <h1 className="font-display text-5xl text-white font-bold mt-2 mb-3">Corporate Wellness</h1>
              <p className="text-white/80 max-w-md text-lg">Bring yoga and mindfulness into your team&apos;s work life.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-3xl text-sage font-bold mb-4">Wellness at Work</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We design bespoke corporate wellness programs for organisations that want to reduce employee stress, improve focus, and build a healthier, happier team culture. Programs range from on-site morning yoga sessions at your office to immersive 3-day corporate retreats at our Rishikesh ashram.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All programs are customised — we work with HR teams and management to understand your team&apos;s needs, schedules, and wellness goals before designing the curriculum.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Program Options</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: 'Weekly Office Yoga', desc: 'Online or on-site weekly yoga classes — 45–60 mins, chair yoga or mat-based, suitable for all fitness levels.', icon: <Clock className="w-5 h-5 text-terracotta" /> },
                  { title: 'Team Wellness Day', desc: 'A full-day immersive experience at our ashram or your premises including yoga, meditation, and team bonding activities.', icon: <Users className="w-5 h-5 text-terracotta" /> },
                  { title: 'Rishikesh Corporate Retreat', desc: 'A 3–5 day transformative retreat at our Himalayan ashram for leadership teams and high-performance groups.', icon: <Briefcase className="w-5 h-5 text-terracotta" /> },
                ].map(p => (
                  <div key={p.title} className="bg-white rounded-xl p-5 border border-sage/10 flex gap-4">
                    <div className="mt-0.5">{p.icon}</div>
                    <div>
                      <p className="font-semibold text-sage mb-1">{p.title}</p>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">Benefits for Your Team</h2>
              <div className="grid grid-cols-1 gap-3">
                {['Reduced workplace stress and anxiety', 'Improved concentration and cognitive performance', 'Lower absenteeism through better physical health', 'Stronger team bonds and improved morale'].map(b => (
                  <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-sage/10">
                    <CheckCircle className="w-5 h-5 text-terracotta mt-0.5 shrink-0" />
                    <span className="text-sage/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-sage/10 shadow-sm">
              <h3 className="font-display text-xl text-sage font-bold mb-3">Get a Custom Quote</h3>
              <p className="text-sm text-muted-foreground mb-5">All corporate programs are priced based on team size, duration, and location. Contact us for a bespoke proposal within 24 hours.</p>
              <Link href="/contact" className="block w-full text-center bg-terracotta hover:bg-sage text-white font-bold py-3 rounded-full transition-colors text-sm">
                Request a Quote
              </Link>
            </div>
            <div className="bg-sage rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Train Your Wellbeing Champions</p>
              <p className="text-white/70 text-sm mb-4">Send your wellness leads for our 200-hour YTT and bring yoga expertise in-house.</p>
              <Link href="/courses" className="flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                View Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
