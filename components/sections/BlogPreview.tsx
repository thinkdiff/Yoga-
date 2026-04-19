'use client';

import SectionHeader from '../shared/SectionHeader';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPreview() {
  const posts = [
    {
      title: "How to Prepare for Your First Yoga Teacher Training",
      excerpt: "Essential tips to mentally and physically prepare yourself for a 200-hour YTT in India.",
      category: "Preparation",
      date: "Oct 12, 2025",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
    },
    {
      title: "The Benefits of Practicing Yoga Beside the Ganges",
      excerpt: "Discover the energetic and spiritual benefits of practicing near the holy river.",
      category: "Philosophy",
      date: "Oct 05, 2025",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    },
    {
      title: "200 vs 300 Hour YTT: Which Should You Choose?",
      excerpt: "Understanding the difference between foundational and advanced yoga trainings.",
      category: "Guide",
      date: "Sep 28, 2025",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Latest from the Ashram" subtitle="Wisdom, tips, and stories from our teachers." />

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-sage text-ivory text-xs px-2 py-1 rounded tracking-wide uppercase">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <span className="text-muted-foreground text-xs mb-2 block">{post.date}</span>
                <h3 className="font-display text-2xl text-sage font-medium mb-3 group-hover:text-terracotta transition-colors">
                  <Link href="/blog">{post.title}</Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <Link href="/blog" className="text-terracotta text-sm font-medium hover:underline inline-flex items-center">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
