import { teachers } from '@/lib/data/teachers';
import TeacherCard from '@/components/shared/TeacherCard';
import SectionHeader from '@/components/shared/SectionHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Expert Yoga Teachers | Nirvana Yoga',
  description: 'Meet our experienced Himalayan masters and certified yoga instructors.',
};

export default function TeachersPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Meet Our Masters" 
          subtitle="Guided by authentic unbroken lineages and decades of teaching experience."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  );
}
