import { courses } from '@/lib/data/courses';
import CourseCard from '@/components/shared/CourseCard';
import SectionHeader from '@/components/shared/SectionHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yoga Teacher Training Courses in Rishikesh, India — 100, 200, 300 & 500 Hour | Nirvana Yoga School',
  description:
    'Yoga Alliance certified 100, 200, 300 and 500 hour Hatha, Ashtanga Vinyasa and Kundalini teacher training courses in Rishikesh, India. Plus Yin, Pre-natal, Aerial, Sound Healing & Meditation specialty courses.',
};

const CATEGORIES = [
  { label: 'All Courses', match: () => true },
  { label: '100 Hour', match: (slug: string) => slug.startsWith('100hr-') },
  { label: '200 Hour', match: (slug: string) => slug.startsWith('200hr-') },
  { label: '300 Hour', match: (slug: string) => slug.startsWith('300hr-') },
  { label: '500 Hour', match: (slug: string) => slug.startsWith('500hr-') },
  { label: 'Short & Specialty', match: (slug: string) => !/^(100|200|300|500)hr-/.test(slug) },
];

export default function CoursesPage() {
  const inPerson = courses.filter((c) => c.format === 'in-person');

  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Yoga Teacher Training in Rishikesh"
          subtitle="A path for every seeker — from a 12-day foundation to the complete 500-hour journey, plus specialty courses in Yin, Sound Healing, Aerial and more."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12 mt-12">
          {CATEGORIES.map((tab) => (
            <button
              key={tab.label}
              className="px-4 py-2 rounded-full border border-sage/20 text-sm font-medium bg-white text-sage hover:border-terracotta hover:text-terracotta transition-colors"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inPerson.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
