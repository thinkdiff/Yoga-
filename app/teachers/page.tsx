import { teachers } from '@/lib/data/teachers';
import TeacherCard from '@/components/shared/TeacherCard';
import SectionHeader from '@/components/shared/SectionHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Teachers — Acharya Mandeep, Praveen Rajput & Dr. Mahesh Prasad | House of Yogis Rishikesh',
  description:
    'Meet our gurus — Acharya Mandeep Bhatt, Praveen Rajput and Dr. Mahesh Prasad. Authentic Himalayan teachers of Hatha, Kundalini, Pranayama, Meditation and Yoga Therapy in Rishikesh, India.',
};

export default function TeachersPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory/30 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Meet Our Gurus"
          subtitle="Authentic Himalayan teachers carrying living lineages of Hatha, Kundalini, Pranayama and Yoga Therapy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  );
}
