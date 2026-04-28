import { cn } from '@/lib/utils';

export default function Logo({
  className,
  variant = 'dark',
}: {
  className?: string;
  variant?: 'dark' | 'light';
}) {
  return (
    <div className={cn('flex items-center gap-3 shrink-0 group', className)}>
      <div
        className={cn(
          'relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden border shadow-sm transition-all duration-300 group-hover:scale-105',
          variant === 'dark'
            ? 'bg-gradient-to-br from-white to-ivory border-terracotta/15 text-sage'
            : 'bg-white/95 border-white/40 text-sage'
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-house-of-yogis.svg"
          alt="House of Yogis logo"
          width={52}
          height={52}
          className="w-[88%] h-[88%] object-contain"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            'font-brand italic text-[1.45rem] md:text-[1.55rem] font-semibold tracking-tight',
            variant === 'dark' ? 'text-sage' : 'text-white'
          )}
        >
          House of Yogis
        </span>
        <span
          className={cn(
            'text-[10px] uppercase tracking-[0.32em] font-semibold mt-0.5',
            variant === 'dark' ? 'text-terracotta/80' : 'text-gold'
          )}
        >
          Rishikesh
        </span>
      </div>
    </div>
  );
}
