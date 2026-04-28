import { courses } from '@/lib/data/courses';
import CourseCard from '@/components/shared/CourseCard';
import SectionHeader from '@/components/shared/SectionHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Yoga Teacher Training | House of Yogis Rishikesh',
  description:
    'Train with our Rishikesh faculty online. Live classes, recorded modules, mentorship, and Yoga Alliance certification.',
};

export default function OnlineCoursesPage() {
  const online = courses.filter((c) => c.format === 'online');
  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Online Yoga Courses"
          subtitle="Join our Rishikesh faculty from anywhere in the world. Live sessions, recordings, and personal mentorship."
        />

        {online.length === 0 ? (
          <p className="text-center text-muted-foreground">
            New online programs are opening soon. Please check back or contact us to be notified.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {online.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
