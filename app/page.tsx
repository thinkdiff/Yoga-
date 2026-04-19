import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import AboutPreview from '@/components/sections/AboutPreview';
import CoursesGrid from '@/components/sections/CoursesGrid';
import WhyRishikesh from '@/components/sections/WhyRishikesh';
import RetreatsSection from '@/components/sections/RetreatsSection';
import TeachersPreview from '@/components/sections/TeachersPreview';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import VideoTestimonials from '@/components/sections/VideoTestimonials';
import GalleryMasonry from '@/components/sections/GalleryMasonry';
import FAQ from '@/components/sections/FAQ';
import BlogPreview from '@/components/sections/BlogPreview';
import CTABanner from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <CoursesGrid />
      <WhyRishikesh />
      <RetreatsSection />
      <TeachersPreview />
      <TestimonialsCarousel />
      <VideoTestimonials />
      <GalleryMasonry />
      <FAQ />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
