import { courses } from '@/lib/data/courses';
import { teachers } from '@/lib/data/teachers';
import { testimonials } from '@/lib/data/testimonials';
import {
  defaultAccommodation,
  defaultDailySchedule,
  defaultEligibility,
  defaultExcursions,
  defaultFood,
  defaultWhyChoose,
  travelGuide,
} from '@/lib/data/courseDefaults';
import { faqs } from '@/lib/data/faqs';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  Clock,
  CheckCircle,
  Calendar,
  GraduationCap,
  Utensils,
  Home,
  Mountain,
  Star,
  Sparkles,
  Music,
  Flame,
  BookOpen,
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import CourseSectionNav from '@/components/shared/CourseSectionNav';
import YouTubeEmbed from '@/components/shared/YouTubeEmbed';
import { contactInfo } from '@/lib/data/contact';


export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return { title: 'Not Found' };
  return { title: course.seoTitle, description: course.seoDescription };
}

const INCLUSION_ICONS: { match: RegExp; icon: React.ReactNode }[] = [
  { match: /yoga mat|blocks|shatkarma/i, icon: <Sparkles className="w-5 h-5" /> },
  { match: /manual|book|materials|textbook|scripts/i, icon: <BookOpen className="w-5 h-5" /> },
  { match: /accommodation|nights/i, icon: <Home className="w-5 h-5" /> },
  { match: /meal|food|sattvic/i, icon: <Utensils className="w-5 h-5" /> },
  { match: /excursion|trek|himalay|trip/i, icon: <Mountain className="w-5 h-5" /> },
  { match: /kirtan|mantra/i, icon: <Music className="w-5 h-5" /> },
  { match: /sound healing|bowl/i, icon: <Music className="w-5 h-5" /> },
  { match: /full moon|fire ritual|ceremony/i, icon: <Flame className="w-5 h-5" /> },
  { match: /certification|certificate|yoga alliance/i, icon: <GraduationCap className="w-5 h-5" /> },
  { match: /class/i, icon: <Sparkles className="w-5 h-5" /> },
];

function iconForInclusion(text: string) {
  const found = INCLUSION_ICONS.find((i) => i.match.test(text));
  return found ? found.icon : <CheckCircle className="w-5 h-5" />;
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  const courseTeachers = teachers.filter((t) => course.teachers.includes(t.id));
  const schedule = course.dailySchedule ?? defaultDailySchedule;
  const eligibility = course.eligibility ?? defaultEligibility;
  const accommodation = course.accommodation ?? defaultAccommodation;
  const food = course.food ?? defaultFood;
  const excursions = course.excursions ?? defaultExcursions;
  const whyChoose = course.whyChoose ?? defaultWhyChoose;
  const studentVideos = course.studentVideoIds ?? [];

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'included', label: 'Inclusions' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'stay', label: 'Stay & Food' },
    { id: 'dates', label: 'Dates & Fees' },
    { id: 'gurus', label: 'Our Gurus' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'certification', label: 'Certification' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const courseReviews = (() => {
    const matches = testimonials.filter((t) => {
      const courseLower = course.title.toLowerCase();
      const tCourseLower = t.course.toLowerCase();
      return (
        courseLower.includes(tCourseLower) ||
        tCourseLower.split(' ').filter((w) => w.length > 3).some((w) => courseLower.includes(w))
      );
    });
    return matches.length >= 2 ? matches.slice(0, 4) : testimonials.slice(0, 4);
  })();

  const whatsappHref = `https://wa.me/${contactInfo.phoneDigits}?text=` + encodeURIComponent('Hi House of Yogis, I would like to know more about ' + course.title);

  return (
    <main className="bg-white pb-24">
      {/* Hero Gallery */}
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[600px] mb-8">
            <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group">
              <Image src={course.gallery?.[0] || course.images[0]} alt={course.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="bg-terracotta text-white border-0 mb-3">{course.category}</Badge>
                <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium">{course.title}</h1>
              </div>
            </div>
            {course.gallery?.slice(1, 5).map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden hidden md:block group">
                <Image src={img} alt={`${course.title} gallery ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            )) || (
              <div className="md:col-span-2 md:row-span-2 bg-ivory rounded-2xl flex items-center justify-center border border-sage/10">
                <span className="text-muted-foreground">More images coming soon</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <CourseSectionNav sections={sections} />

      <div className="container mx-auto px-4 mt-14 grid lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-20">
          <section id="overview" className="scroll-mt-28">
            <h2 className="font-display text-4xl text-sage mb-8">Quick Overview</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border border-sage/10 rounded-2xl overflow-hidden mb-12">
              {[
                { label: 'Duration', value: course.duration, icon: <Clock className="w-4 h-4" /> },
                { label: 'Style', value: course.style.join(', '), icon: <Sparkles className="w-4 h-4" /> },
                { label: 'Level', value: 'All Levels welcomed', icon: <GraduationCap className="w-4 h-4" /> },
                { label: 'Language', value: 'English (Primary)', icon: <BookOpen className="w-4 h-4" /> },
                { label: 'Batch Size', value: 'Max 20 Students', icon: <MessageCircle className="w-4 h-4" /> },
                { label: 'Certification', value: 'Yoga Alliance RYT', icon: <GraduationCap className="w-4 h-4" /> },
              ].map((stat, i) => (
                <div key={i} className="bg-ivory/30 p-6 flex flex-col items-center text-center border-b border-r border-sage/10 last:border-r-0">
                  <div className="text-terracotta mb-2">{stat.icon}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{stat.label}</div>
                  <div className="font-display text-lg text-sage font-medium">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
              {(course.longDescription ?? [course.description]).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {course.highlights && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-4 bg-sage/5 p-4 rounded-xl border border-sage/10">
                    <div className="text-gold"><Sparkles className="w-6 h-6" /></div>
                    <span className="font-display text-lg text-sage">{h.text}</span>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section id="included" className="scroll-mt-28">
            <h2 className="font-display text-3xl md:text-4xl text-sage mb-8">What is included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.inclusions.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-ivory/50 rounded-2xl border border-sage/10 p-5 group hover:border-terracotta/30 transition-colors">
                  <div className="text-terracotta shrink-0 group-hover:scale-110 transition-transform">{iconForInclusion(item)}</div>
                  <span className="text-sage text-base leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {course.roadmap && (
            <section id="roadmap" className="scroll-mt-28">
              <h2 className="font-display text-3xl md:text-4xl text-sage mb-8">Learning Roadmap</h2>
              <div className="space-y-6">
                {course.roadmap.map((step, i) => (
                  <div key={i} className="relative pl-10 border-l-2 border-sage/10 pb-8 last:pb-0">
                    <div className="absolute -left-[18px] top-0 w-8 h-8 rounded-full bg-ivory border-2 border-sage text-sage font-display flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <h3 className="font-display text-2xl text-sage mb-3">{step.title}</h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.topics.map((t, j) => (
                        <li key={j} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section id="schedule" className="scroll-mt-28">
            <h2 className="font-display text-3xl md:text-4xl text-sage mb-8">Daily Flow</h2>
            <div className="rounded-2xl border border-sage/10 overflow-hidden bg-ivory/20 shadow-sm">
              <table className="w-full text-base">
                <tbody>
                  {schedule.map((row, i) => (
                    <tr key={i} className={`border-b border-sage/5 last:border-0 ${i % 2 === 0 ? 'bg-white/40' : 'bg-transparent'}`}>
                      <td className="px-6 py-4 font-semibold text-sage w-40 whitespace-nowrap bg-sage/5">{row.time}</td>
                      <td className="px-6 py-4 text-muted-foreground italic">{row.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="stay" className="scroll-mt-28 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="font-display text-3xl text-sage flex items-center gap-3">
                  <Home className="w-8 h-8 text-terracotta" /> Stay at Ashram
                </h2>
                <p className="text-muted-foreground">Our campus in Tapovan provides a serene, safe, and comfortable environment for focused study.</p>
                <ul className="grid grid-cols-1 gap-3">
                  {accommodation.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground bg-ivory/40 p-3 rounded-lg border border-sage/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span className="text-sm">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="font-display text-3xl text-sage flex items-center gap-3">
                  <Utensils className="w-8 h-8 text-terracotta" /> Sattvic Nutrition
                </h2>
                <p className="text-muted-foreground">Nourish your body with three freshly prepared Ayurvedic-inspired vegetarian meals daily.</p>
                <ul className="grid grid-cols-1 gap-3">
                  {food.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground bg-ivory/40 p-3 rounded-lg border border-sage/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="dates" className="scroll-mt-28">
            <h2 className="font-display text-3xl md:text-4xl text-sage mb-8">Enrollment & Fees</h2>
            <div className="overflow-x-auto rounded-2xl border border-sage/10 bg-ivory/10">
              <table className="w-full">
                <thead className="bg-sage text-white text-sm uppercase tracking-widest">
                  <tr>
                    <th className="text-left px-6 py-4">Start date</th>
                    <th className="text-left px-6 py-4">Early-bird</th>
                    <th className="text-left px-6 py-4">Standard</th>
                    <th className="text-right px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sage/5">
                  {course.startDates.map((d, i) => (
                    <tr key={d} className="hover:bg-ivory/30 transition-colors">
                      <td className="px-6 py-6 font-display text-xl text-sage">
                        <Calendar className="inline w-5 h-5 text-terracotta mr-3" />
                        {d}
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-terracotta font-bold text-xl">${course.price.earlyBirdUsd || '—'}</div>
                        <div className="text-xs text-muted-foreground">USD per person</div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-sage font-medium text-xl">${course.price.usd}</div>
                        <div className="text-xs text-muted-foreground">USD per person</div>
                      </td>
                      <td className="px-6 py-6 text-right">
                        <Button asChild className="bg-terracotta hover:bg-gold text-white font-medium px-8 h-12 shadow-md">
                          <Link href={`/apply?course=${course.slug}&date=${encodeURIComponent(d)}`}>Secure Seat</Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="gurus" className="scroll-mt-28">
            <h2 className="font-display text-3xl md:text-4xl text-sage mb-3">Our Gurus</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Authentic Himalayan teachers, each carrying a living lineage of practice. You will spend your days under their guidance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(courseTeachers.length ? courseTeachers : teachers).map((t) => (
                <Link
                  key={t.id}
                  href="/teachers"
                  className="group bg-ivory/40 hover:bg-white border border-sage/10 hover:border-terracotta/30 rounded-2xl p-5 flex gap-5 transition-all"
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-sage/10">
                    <Image src={t.photo} alt={t.name} fill className="object-cover object-top" sizes="96px" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl text-sage font-semibold leading-tight">{t.name}</h3>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-terracotta font-bold mt-1 mb-2">{t.title}</p>
                    <p className="text-sm text-muted-foreground line-clamp-3">{t.introduction || t.bio}</p>
                    {t.expertise && t.expertise.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {t.expertise.slice(0, 4).map((x) => (
                          <Badge key={x} variant="outline" className="text-[10px] border-sage/20 text-sage bg-white">
                            {x}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section id="reviews" className="scroll-mt-28">
            <h2 className="font-display text-3xl md:text-4xl text-sage mb-3">Student Reviews</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              From seekers who have walked this path before you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courseReviews.map((r) => (
                <div key={r.id} className="bg-ivory/40 border border-sage/10 rounded-2xl p-6">
                  <div className="flex items-center gap-1 mb-3 text-gold">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold" />
                    ))}
                  </div>
                  <p className="text-sage/90 leading-relaxed italic mb-5">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center justify-between pt-4 border-t border-sage/10 text-sm">
                    <div>
                      <div className="font-semibold text-sage">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.country} · {r.course}</div>
                    </div>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {course.registrationSteps && (
            <section id="registration" className="scroll-mt-28">
              <h2 className="font-display text-3xl md:text-4xl text-sage mb-8">How to Register</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {course.registrationSteps.map((step, i) => (
                  <div key={i} className="bg-ivory/30 p-6 rounded-2xl border border-sage/10 text-center relative">
                    <div className="w-10 h-10 bg-sage text-white rounded-full flex items-center justify-center font-display text-xl mx-auto mb-4 border-4 border-ivory shadow-sm">
                      {i + 1}
                    </div>
                    <p className="text-sage text-sm font-medium leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section id="certification" className="scroll-mt-28">
            <h2 className="font-display text-3xl md:text-4xl text-sage mb-8">Certification Pathway</h2>
            <div className="bg-ivory/50 rounded-2xl p-8 md:p-12 border border-sage/10 text-center">
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="relative aspect-[4/3] max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl border-8 border-white">
                  <Image 
                    src={course.certificateImage || "https://images.unsplash.com/photo-1606326666430-da3861f2f62b?w=800&q=80"} 
                    alt="Sample Certificate" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-display text-3xl text-sage mb-4">Yoga Alliance USA RYT 200</h3>
                  <p className="text-muted-foreground">Graduates receive a globally recognized certificate registered with Yoga Alliance USA, qualifying them to teach anywhere in the world.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white px-6 py-3 rounded-full border border-sage/10 text-sage text-sm font-medium shadow-sm">Written Exam</div>
                  <div className="bg-white px-6 py-3 rounded-full border border-sage/10 text-sage text-sm font-medium shadow-sm">Practical Assessment</div>
                  <div className="bg-white px-6 py-3 rounded-full border border-sage/10 text-sage text-sm font-medium shadow-sm">Student Practicum</div>
                </div>
              </div>
            </div>
          </section>

          <section id="faqs" className="scroll-mt-28">
            <h2 className="font-display text-3xl md:text-4xl text-sage mb-8">Common Questions</h2>
            <Accordion className="w-full space-y-4">
              {(course.faqs || faqs.slice(0, 5)).map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-sage/10 rounded-xl px-6 bg-ivory/20">
                  <AccordionTrigger className="text-left text-lg font-display text-sage hover:no-underline">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-6">
            <div className="bg-ivory rounded-2xl p-8 border border-sage/20 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              
              <h3 className="font-display text-3xl text-sage mb-6 relative">Reserve Seat</h3>

              <div className="space-y-6 mb-8 relative">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-bold text-terracotta">${course.price.earlyBirdUsd || course.price.usd}</span>
                  <span className="text-muted-foreground line-through text-lg">${course.price.earlyBirdUsd ? course.price.usd : ''}</span>
                </div>
                
                <div className="p-4 bg-white/60 rounded-xl border border-sage/10 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tuition Fee</span>
                    <span className="font-medium text-sage">${course.price.usd}</span>
                  </div>
                  <div className="flex justify-between text-sm text-terracotta font-semibold">
                    <span>Early-bird Savings</span>
                    <span>-${course.price.usd - (course.price.earlyBirdUsd || course.price.usd)}</span>
                  </div>
                  <div className="pt-3 border-t border-sage/10 flex justify-between font-display text-lg">
                    <span className="text-sage">Total Due</span>
                    <span className="text-terracotta font-bold">${course.price.earlyBirdUsd || course.price.usd}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest block font-semibold">Immediate Next Batches</span>
                  <ul className="space-y-2">
                    {course.startDates.slice(0, 2).map((date) => (
                      <li key={date} className="flex justify-between items-center bg-white p-3 rounded-lg border border-sage/10 text-sm">
                        <span className="font-medium text-sage">{date}</span>
                        <Badge variant="outline" className="text-[10px] text-terracotta border-terracotta/20 bg-terracotta/5">Filling Fast</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full bg-terracotta hover:bg-gold text-white h-14 text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                  <Link href={`/payment?course=${course.slug}`}>Book With Deposit (${course.depositUsd || 250})</Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-12 border-sage/30 text-sage hover:bg-sage/5 font-medium">
                  <Link href={`/contact?course=${course.slug}`}>Request Brochure</Link>
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-sage/10 space-y-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Secure Payment Options</span>
                  <div className="flex gap-2 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {['visa', 'mastercard', 'amex', 'paypal', 'apple-pay', 'google-pay'].map(method => (
                      <div key={method} className="bg-white px-2 py-1 rounded border border-sage/10 text-[10px] font-bold text-sage lowercase">
                        {method}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-gold" /> 
                  <span>Free Airport Pickup Included</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-sage/10 overflow-hidden relative">
                        <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs">Joined by 14 seekers this month</span>
                </div>
              </div>
            </div>

            <div className="bg-sage p-8 rounded-2xl text-white space-y-6">
              <h4 className="font-display text-2xl">Need Assistance?</h4>
              <p className="text-sm text-white/80 leading-relaxed">Our enrollment advisors are available to help you choose the right path for your journey.</p>
              <div className="space-y-3">
                <Button asChild className="w-full h-12 bg-white text-sage hover:bg-ivory border-0 font-semibold">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> Live Chat Support
                  </a>
                </Button>
                <div className="text-center text-xs text-white/60">Response time: &lt; 15 mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
