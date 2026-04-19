import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
  // Mock data for blog post wrapper
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-sage text-sm font-medium tracking-wide uppercase mb-4">Philosophy</div>
        <h1 className="font-display text-4xl md:text-5xl text-sage mb-6 leading-tight">
          Understanding the Path of Yoga
        </h1>
        <div className="flex items-center text-muted-foreground text-sm mb-10 gap-4 border-b border-border pb-6">
          <span>By Yogi Suresh Kumar</span>
          <span>•</span>
          <span>October 12, 2025</span>
        </div>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12">
          <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80" alt="Blog Post" fill className="object-cover" />
        </div>

        <div className="prose prose-sage max-w-none text-muted-foreground leading-relaxed">
          <p className="text-lg">Yoga brings together the mind, body, and spirit into a harmonious whole. In Rishikesh, this truth becomes intimately real as we practice along the sacred rivers.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <h2>The Eight Limbs of Ashtanga</h2>
          <p>According to Patanjali, the journey consists of eight distinct limbs: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, and finally, Samadhi.</p>
        </div>
      </div>
    </main>
  );
}
