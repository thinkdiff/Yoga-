import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import AboutPreview from '@/components/sections/AboutPreview';
import CoursesGrid from '@/components/sections/CoursesGrid';
import WhyRishikesh from '@/components/sections/WhyRishikesh';
import RetreatsSection from '@/components/sections/RetreatsSection';
import YogaGurus from '@/components/sections/YogaGurus';
import TeachersPreview from '@/components/sections/TeachersPreview';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import VideoTestimonials from '@/components/sections/VideoTestimonials';
import AnimatedGallery from '@/components/sections/AnimatedGallery';
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
      <YogaGurus />
      <TeachersPreview />
      <TestimonialsCarousel />
      <VideoTestimonials />
      <AnimatedGallery />
      <FAQ />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
