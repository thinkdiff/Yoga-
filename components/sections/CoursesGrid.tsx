import SectionHeader from '../shared/SectionHeader';
import CourseCard from '../shared/CourseCard';
import { courses } from '@/lib/data/courses';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CoursesGrid() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <section className="py-24 bg-white" id="courses">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Yoga Teacher Training Courses" 
          subtitle="Yoga Alliance Accredited Programs in Rishikesh" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} variant="compact" />
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="text-terracotta border-terracotta hover:bg-terracotta hover:text-white">
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
