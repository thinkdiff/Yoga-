import { cn } from '@/lib/utils';

export default function Logo({
  className,
  variant = 'dark',
}: {
  className?: string;
  variant?: 'dark' | 'light';
}) {
  return (
    <div className={cn('flex items-center gap-2.5 shrink-0 group', className)}>
      <div
        className={cn(
          'p-1.5 rounded-lg transition-all duration-300 group-hover:scale-105',
          variant === 'dark' ? 'bg-terracotta/10 text-terracotta' : 'bg-white/20 text-white'
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          {/* House outline */}
          <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          {/* Yogi/Lotus symbol inside */}
          <circle cx="12" cy="11" r="2" />
          <path d="M9 16c0-2 1.5-3 3-3s3 1 3 3" />
          <path d="M12 16v3" />
          <path d="M10 19h4" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-lg font-bold tracking-tight',
            variant === 'dark' ? 'text-sage' : 'text-white'
          )}
        >
          House of Yogis
        </span>
        <span
          className={cn(
            'text-[9px] uppercase tracking-[0.18em] font-semibold',
            variant === 'dark' ? 'text-sage/60' : 'text-white/70'
          )}
        >
          Rishikesh
        </span>
      </div>
    </div>
  );
}
