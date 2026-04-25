'use client';

import SectionHeader from '../shared/SectionHeader';
import TeacherCard from '../shared/TeacherCard';
import { teachers } from '@/lib/data/teachers';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TeachersPreview() {
  return (
    <section className="py-24 bg-white" id="teachers">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Meet Our Gurus"
          subtitle="Authentic Himalayan teachers carrying living lineages of Hatha, Kundalini, Pranayama and Yoga Therapy."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-12">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} variant="compact" />
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="border-sage text-sage hover:bg-sage hover:text-white">
            <Link href="/teachers">Read Full Profiles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
