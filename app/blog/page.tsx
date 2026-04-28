import SectionHeader from '@/components/shared/SectionHeader';
import { Metadata } from 'next';
import BlogPreview from '@/components/sections/BlogPreview';

export const metadata: Metadata = {
  title: 'Blog | House of Yogis Rishikesh',
  description: 'Read the latest updates, spiritual teachings, and guides from our yoga masters.',
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <BlogPreview />
    </div>
  );
}
