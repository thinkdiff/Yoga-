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
          title="Meet Our Expert Teachers"
          subtitle="Learn from authentic Himalayan masters and highly qualified international instructors."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {teachers.slice(0, 4).map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="border-sage text-sage hover:bg-sage hover:text-white">
            <Link href="/teachers">View All Teachers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
