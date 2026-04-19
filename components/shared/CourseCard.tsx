import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Star } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  variant?: 'compact' | 'featured';
}

export default function CourseCard({ course, variant = 'compact' }: CourseCardProps) {
  return (
    <div className="group flex flex-col bg-card rounded-lg overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gold/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={course.images[0]}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Badge className="absolute top-4 left-4 bg-terracotta hover:bg-terracotta/90 text-white border-0 z-10">
          <Clock className="w-3 h-3 mr-1" />
          {course.duration}
        </Badge>
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap z-10">
          {course.style.slice(0, 2).map((s) => (
            <Badge key={s} variant="secondary" className="bg-ivory/90 text-sage hover:bg-ivory">
              {s}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center text-terracotta">
            <Star className="w-4 h-4 fill-current mr-1" />
            4.9 (120+ reviews)
          </span>
        </div>
        
        <h3 className="font-display text-2xl text-sage font-medium mb-3 line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
          {course.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Starts From</span>
            <span className="font-semibold text-lg text-sage">${course.price.usd}</span>
          </div>
          
          <div className="flex gap-2">
            {variant === 'featured' && (
              <Button variant="outline" asChild>
                <Link href={`/courses/${course.slug}`}>Details</Link>
              </Button>
            )}
            <Button asChild className="bg-terracotta hover:bg-terracotta/90 text-white">
              <Link href={`/courses/${course.slug}`}>
                Apply <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
