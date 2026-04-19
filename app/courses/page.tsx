import { courses } from '@/lib/data/courses';
import CourseCard from '@/components/shared/CourseCard';
import SectionHeader from '@/components/shared/SectionHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yoga Teacher Training Courses in Rishikesh | Nirvana',
  description: 'Explore our 200, 300, and 500-hour Yoga Alliance certified teaching programs.',
};

export default function CoursesPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Yoga Teacher Training in Rishikesh" 
          subtitle="Discover your path with our traditional, immersive Yoga Alliance certified programs."
        />
        
        {/* Simple Filter UI Mock */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All Programs', '200 Hour', '300 Hour', '500 Hour'].map(tab => (
            <button key={tab} className={`px-4 py-2 rounded-full border border-border text-sm font-medium ${tab === 'All Programs' ? 'bg-sage text-white border-sage' : 'bg-transparent text-sage hover:border-sage'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.filter((c) => c.format === 'in-person').map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
