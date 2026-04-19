import SectionHeader from '@/components/shared/SectionHeader';
import YouTubeEmbed from '@/components/shared/YouTubeEmbed';
import { testimonialVideos } from '@/lib/data/videos';

export default function VideoTestimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Stories from our students"
          subtitle="Hear from alumni who trained with us in Rishikesh — their words, in their own voice."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialVideos.map((video) => (
            <div key={video.id} className="flex flex-col gap-3">
              <YouTubeEmbed youtubeId={video.youtubeId} title={video.title} />
              <div>
                <h3 className="font-display text-xl text-sage font-medium">{video.title}</h3>
                {video.subtitle && <p className="text-sm text-muted-foreground">{video.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
