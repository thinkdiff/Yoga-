'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  label: string;
}

export default function CourseSectionNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: [0, 0.25, 0.5] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-16 z-30 bg-ivory/95 backdrop-blur border-y border-border">
      <div className="container mx-auto px-4">
        <ul className="flex gap-1 overflow-x-auto no-scrollbar py-3">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={handleClick(s.id)}
                className={cn(
                  'inline-flex items-center whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  active === s.id
                    ? 'bg-sage text-white'
                    : 'text-sage hover:bg-sage/10'
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
