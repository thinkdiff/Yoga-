import Image from 'next/image';
import { Teacher } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

export default function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-ivory/50 hover:bg-white border border-transparent hover:border-gold/20 transition-all duration-300">
      <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:shadow-lg transition-shadow">
        <Image
          src={teacher.photo}
          alt={teacher.name}
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>
      
      <h3 className="font-display text-2xl text-sage font-medium mb-1">{teacher.name}</h3>
      <p className="text-terracotta text-sm uppercase tracking-wider mb-4 font-medium">{teacher.title}</p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {teacher.specializations.slice(0, 2).map((spec) => (
          <Badge key={spec} variant="outline" className="text-xs text-muted-foreground border-border">
            {spec}
          </Badge>
        ))}
      </div>
      
      {/* Bio text that expands/shows more on hover (simulated by line clamp initially) */}
      <p className="text-sm text-muted-foreground line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
        {teacher.bio}
      </p>
      
      <div className="mt-4 pt-4 border-t border-border/50 w-full text-xs text-muted-foreground">
        <span className="font-medium text-sage">{teacher.yearsExp}</span> Teaching Experience
      </div>
    </div>
  );
}
