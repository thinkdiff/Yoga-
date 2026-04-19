import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Yoga Poses Library | Nirvana Yoga School',
  description: 'Browse our library of classical yoga poses with Sanskrit names, alignment cues, benefits, and modifications.',
};

const poses = [
  { name: 'Tadasana', english: 'Mountain Pose', level: 'Beginner', benefits: 'Improves posture, grounding, builds body awareness', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80' },
  { name: 'Adho Mukha Svanasana', english: 'Downward Dog', level: 'Beginner', benefits: 'Lengthens the spine, strengthens arms and legs', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80' },
  { name: 'Virabhadrasana I', english: 'Warrior I', level: 'Beginner', benefits: 'Strengthens legs, opens hips and chest', img: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&q=80' },
  { name: 'Virabhadrasana II', english: 'Warrior II', level: 'Beginner', benefits: 'Builds stamina and inner strength', img: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&q=80' },
  { name: 'Utthita Trikonasana', english: 'Extended Triangle', level: 'Beginner', benefits: 'Stretches legs, hips, spine and chest', img: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=400&q=80' },
  { name: 'Bakasana', english: 'Crow / Crane Pose', level: 'Intermediate', benefits: 'Builds arm, wrist and core strength', img: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=400&q=80' },
  { name: 'Sirsasana', english: 'Headstand', level: 'Advanced', benefits: 'Builds focus, circulation, and upper body strength', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80' },
  { name: 'Paschimottanasana', english: 'Seated Forward Fold', level: 'Beginner', benefits: 'Deep stretch for hamstrings, spine and back', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80' },
  { name: 'Setu Bandhasana', english: 'Bridge Pose', level: 'Beginner', benefits: 'Strengthens back, opens chest, calms nervous system', img: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&q=80' },
];

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function PosesLibraryPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-terracotta font-semibold">Resources</span>
          <h1 className="font-display text-5xl text-sage font-bold mt-2 mb-3">Yoga Poses Library</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Classical poses with Sanskrit names, alignment guidance, and key benefits. Your reference guide for a deepening practice.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {levels.map(l => (
            <span key={l} className="px-4 py-1.5 rounded-full border border-sage/20 text-sm font-medium text-sage cursor-pointer hover:bg-sage hover:text-white transition-colors">
              {l}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {poses.map(pose => (
            <div key={pose.name} className="bg-white rounded-2xl overflow-hidden border border-sage/10 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-44 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pose.img} alt={pose.english} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                  pose.level === 'Beginner' ? 'bg-sage text-white' :
                  pose.level === 'Intermediate' ? 'bg-gold text-white' :
                  'bg-terracotta text-white'
                }`}>{pose.level}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-sage font-bold">{pose.name}</h3>
                <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> {pose.english}
                </p>
                <p className="text-xs text-sage/70 leading-relaxed">{pose.benefits}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-sage rounded-2xl p-10 text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-3">Learn these poses in person</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">Join our classes in Rishikesh and get hands-on guidance from experienced teachers.</p>
          <Link href="/courses" className="inline-flex items-center gap-2 bg-white text-sage font-bold px-7 py-3 rounded-full hover:bg-gold hover:text-white transition-colors">
            View All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
