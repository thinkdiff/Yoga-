import Image from 'next/image';
import { Teacher } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Sparkles } from 'lucide-react';

export default function TeacherCard({
  teacher,
  variant = 'full',
}: {
  teacher: Teacher;
  variant?: 'full' | 'compact';
}) {
  if (variant === 'compact') {
    return (
      <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-ivory/50 hover:bg-white border border-transparent hover:border-gold/20 transition-all duration-300">
        <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:shadow-lg transition-shadow">
          <Image
            src={teacher.photo}
            alt={teacher.name}
            fill
            className="object-cover"
            style={{ objectPosition: teacher.photoPosition || 'center top' }}
            sizes="160px"
          />
        </div>
        <h3 className="font-display text-2xl text-sage font-medium mb-1">{teacher.name}</h3>
        <p className="text-terracotta text-xs uppercase tracking-wider mb-3 font-semibold">{teacher.title}</p>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {teacher.introduction || teacher.bio}
        </p>
        <div className="mt-4 pt-4 border-t border-border/50 w-full text-xs text-muted-foreground">
          <span className="font-semibold text-sage">{teacher.yearsExp}</span> Teaching Experience
        </div>
      </div>
    );
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-sage/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative h-72 bg-ivory">
        <Image
          src={teacher.photo}
          alt={teacher.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: teacher.photoPosition || 'center top' }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3
            className="font-display text-2xl font-bold leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
          >
            {teacher.name}
          </h3>
          <p className="text-gold text-xs uppercase tracking-[0.18em] font-semibold mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
            {teacher.title}
          </p>
        </div>
      </div>

      <div className="p-7 space-y-6 flex-1 flex flex-col">
        {/* Introduction */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {teacher.introduction || teacher.bio}
        </p>

        {/* Education */}
        {teacher.education && teacher.education.length > 0 && (
          <div>
            <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-terracotta mb-2">
              <GraduationCap className="w-3.5 h-3.5" /> Education
            </h4>
            <ul className="space-y-1.5">
              {teacher.education.map((item, i) => (
                <li key={i} className="text-sm text-sage/90 flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Experience */}
        {teacher.experience && teacher.experience.length > 0 && (
          <div>
            <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-terracotta mb-2">
              <Award className="w-3.5 h-3.5" /> Experience
            </h4>
            <ul className="space-y-1.5">
              {teacher.experience.map((item, i) => (
                <li key={i} className="text-sm text-sage/90 flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Expertise */}
        {teacher.expertise && teacher.expertise.length > 0 && (
          <div className="mt-auto">
            <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-terracotta mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Expertise
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {teacher.expertise.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="text-[11px] border-sage/20 text-sage bg-ivory/40"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Fallback for compact teacher data */}
        {!teacher.expertise && teacher.specializations.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {teacher.specializations.map((s) => (
              <Badge key={s} variant="outline" className="text-[11px] border-sage/20 text-sage bg-ivory/40">
                {s}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
