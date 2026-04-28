import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: "Beginner's Yoga Journey | House of Yogis Rishikesh",
  description: "Start your yoga journey in Rishikesh with expert guidance. Perfect intro program for absolute beginners.",
};

export default function BeginnersPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden mb-16 h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" alt="Beginner Yoga" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sage/80 to-transparent flex items-center px-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Special Program</span>
              <h1 className="font-display text-5xl text-white font-bold mt-2 mb-3">Beginner&apos;s Journey</h1>
              <p className="text-white/80 max-w-md text-lg">Your first step onto the mat — guided, supportive, and transformative.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-3xl text-sage font-bold mb-4">Welcome to Yoga</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Beginner&apos;s Journey is a structured 2-week introduction to yoga in Rishikesh — the birthplace of yoga. Designed for people who have never practised yoga before (or have very limited experience), this program removes all intimidation and replaces it with clarity, confidence, and community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You will be taught by patient, encouraging teachers in an environment where questions are celebrated and no pose is expected to look &ldquo;perfect.&rdquo;
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-sage font-bold mb-5">What&apos;s Included</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  '2 weeks of daily morning Hatha Yoga classes',
                  'Daily evening meditation (30 minutes)',
                  'Introductory workshop — yogic philosophy and lifestyle',
                  'Personal one-to-one teacher check-in each week',
                  'Course workbook and recommended reading list',
                ].map(b => (
                  <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-sage/10">
                    <Compass className="w-5 h-5 text-terracotta mt-0.5 shrink-0" />
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
                <p><span className="font-semibold">Duration:</span> 2 weeks</p>
                <p><span className="font-semibold">Level:</span> Absolute beginners</p>
                <p><span className="font-semibold">Intake:</span> Rolling monthly</p>
                <p><span className="font-semibold">Location:</span> Rishikesh Ashram</p>
              </div>
              <div className="mt-6 pt-5 border-t border-sage/10">
                <p className="text-2xl font-bold text-sage mb-1">$299 <span className="text-sm font-normal text-muted-foreground">/ program</span></p>
                <p className="text-xs text-muted-foreground mb-4">Accommodation available separately</p>
                <Link href="/contact" className="block w-full text-center bg-terracotta hover:bg-sage text-white font-bold py-3 rounded-full transition-colors text-sm">
                  Enrol Now
                </Link>
              </div>
            </div>
            <div className="bg-sage rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-2">Ready for More?</p>
              <p className="text-white/70 text-sm mb-4">After your journey, step into our 200-hour Teacher Training.</p>
              <Link href="/courses" className="flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all">
                View All Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
