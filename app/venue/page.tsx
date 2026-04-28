import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import YouTubeEmbed from '@/components/shared/YouTubeEmbed';
import CTABanner from '@/components/sections/CTABanner';
import { Button } from '@/components/ui/button';
import { Bed, Flower, Utensils, Book, Sun, Leaf, MapPin, Phone, Mail } from 'lucide-react';
import { facilities, surroundings, venueAddress } from '@/lib/data/venue';
import { schoolTourVideo } from '@/lib/data/videos';
import { contactInfo } from '@/lib/data/contact';

export const metadata: Metadata = {
  title: 'Our Venue in Rishikesh | House of Yogis Rishikesh',
  description:
    'Explore our yoga school in Tapovan, Rishikesh — airy shalas, sattvic dining, peaceful rooms, and easy access to the Ganges and Himalayas.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bed: Bed,
  flower: Flower,
  utensils: Utensils,
  book: Book,
  sun: Sun,
  leaf: Leaf,
};

export default function VenuePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Rishikesh on the Ganges"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="container relative z-10 mx-auto px-4 text-center mt-16">
          <div className="inline-block border border-gold/50 bg-black/30 backdrop-blur-sm text-gold px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-6">
            Tapovan, Rishikesh
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white italic font-medium leading-tight mb-6 max-w-4xl mx-auto">
            Our Sanctuary in the Himalayas
          </h1>
          <p className="text-ivory/90 text-lg md:text-xl max-w-2xl mx-auto">
            A quiet yogic neighbourhood above the Ganges — everything you need for a full month of practice, study, and rest.
          </p>
        </div>
      </section>

      {/* About Rishikesh */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <SectionHeader
            title="Why Rishikesh"
            subtitle="Known as the yoga capital of the world, Rishikesh has been a seat of yogic study for centuries."
          />
          <p className="text-muted-foreground leading-relaxed text-lg">
            Our school sits in Tapovan, a peaceful neighbourhood above Laxman Jhula, framed by the Ganges below and the Himalayan foothills above. Mornings begin with birdsong and the river; evenings close with aarti on the ghats. It is a place built for practice.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Facilities"
            subtitle="Everything on campus is designed around your practice, rest, and study."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {facilities.map((f) => {
              const Icon = iconMap[f.icon] ?? Flower;
              return (
                <div key={f.title} className="bg-ivory rounded-xl p-6 border border-sage/10 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl text-sage font-medium mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Surroundings */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="The surroundings"
            subtitle="A short walk from our school — landmarks that make Rishikesh what it is."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {surroundings.map((s) => (
              <div key={s.title} className="group overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-sage font-medium mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School tour video */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader title="A tour of the school" subtitle={schoolTourVideo.subtitle} />
          <YouTubeEmbed youtubeId={schoolTourVideo.youtubeId} title={schoolTourVideo.title} />
        </div>
      </section>

      {/* Map + contact */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <div className="rounded-xl overflow-hidden shadow-md min-h-[400px]">
              <iframe
                src={venueAddress.mapEmbed}
                className="w-full h-full min-h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our location in Rishikesh"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-4xl text-sage font-medium mb-6">Visit us</h2>
              <ul className="flex flex-col gap-4 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <span>
                    {venueAddress.line1}
                    <br />
                    {venueAddress.line2}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-terracotta shrink-0" />
                  <a href={`tel:${contactInfo.phoneDigits}`} className="hover:text-sage transition-colors">
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-terracotta shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-sage transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-terracotta hover:bg-gold text-white w-max">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
