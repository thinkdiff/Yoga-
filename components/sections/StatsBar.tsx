'use client';

import AnimatedCounter from '../shared/AnimatedCounter';

export default function StatsBar() {
  const stats = [
    { target: 10, suffix: '+', label: 'Courses' },
    { target: 20, suffix: '+', label: 'Teachers' },
    { target: 15, suffix: '+', label: 'Years' },
    { target: 5, suffix: '★', label: 'Rating' },
  ];

  return (
    <section className="bg-sage py-16 border-y border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gold/30">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex justify-center">
              <AnimatedCounter 
                target={stat.target} 
                suffix={stat.suffix} 
                label={stat.label} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
