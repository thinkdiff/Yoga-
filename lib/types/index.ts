export type CourseStyle =
  | 'Hatha'
  | 'Ashtanga'
  | 'Vinyasa'
  | 'Ayurveda'
  | 'Meditation'
  | 'Yoga Nidra'
  | 'Kundalini'
  | 'Yoga Therapy'
  | 'Yin Yoga'
  | 'Sound Healing';

export type CourseFormat = 'in-person' | 'online';

export interface CourseSession {
  start: string;
  end: string;
  status: 'open' | 'few-seats' | 'sold-out';
  earlyBirdPrice?: number;
}

export interface DailyScheduleItem {
  time: string;
  activity: string;
}

export interface CurriculumModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: '200 Hour' | '300 Hour' | '500 Hour' | 'Online' | 'Specialty';
  format: CourseFormat;
  duration: string;
  style: CourseStyle[];
  price: {
    usd: number;
    inr: number;
    earlyBirdUsd?: number;
  };
  startDates: string[];
  description: string;
  longDescription?: string[];
  curriculum: string[];
  curriculumModules?: CurriculumModule[];
  highlights?: { icon: string; text: string }[];
  roadmap?: { title: string; topics: string[] }[];
  registrationSteps?: string[];
  inclusions: string[];
  teachers: string[];
  images: string[];
  gallery?: string[];
  certificateImage?: string;
  seoTitle: string;
  seoDescription: string;
  highlightVideoId?: string;
  studentVideoIds?: string[];
  sessions?: CourseSession[];
  dailySchedule?: DailyScheduleItem[];
  eligibility?: string[];
  certification?: string;
  accommodation?: string[];
  food?: string[];
  excursions?: string[];
  whyChoose?: string[];
  paymentLink?: string;
  depositUsd?: number;
  faqs?: { question: string; answer: string }[];
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  specializations: CourseStyle[];
  certifications: string[];
  yearsExp: string;
  introduction?: string;
  education?: string[];
  experience?: string[];
  expertise?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  course: string;
  rating: number;
  text: string;
  date: string;
  image?: string;
  videoUrl?: string;
}

export interface Retreat {
  id: string;
  slug: string;
  title: string;
  duration: string;
  price: number;
  highlights: string[];
  schedule: string[];
  images: string[];
}

export interface VideoEmbed {
  id: string;
  youtubeId: string;
  title: string;
  subtitle?: string;
  kind?: 'video' | 'short';
}

export interface VenueFacility {
  title: string;
  description: string;
  icon: string;
}

export interface VenueSurrounding {
  title: string;
  description: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface PromoConfig {
  enabled: boolean;
  headline: string;
  subheadline: string;
  discountPct: number;
  deadline: string;
  imageUrl: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface PaymentMethod {
  name: string;
  iconKey: 'visa' | 'mastercard' | 'amex' | 'paypal' | 'upi' | 'bank';
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'agent-id'?: string };
    }
  }
}

