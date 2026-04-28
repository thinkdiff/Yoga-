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
          'relative w-11 h-11 rounded-full flex items-center justify-center overflow-hidden ring-1 transition-all duration-300 group-hover:scale-105',
          variant === 'dark'
            ? 'bg-gradient-to-br from-gold-light to-ivory ring-terracotta/20 text-sage'
            : 'bg-white/95 ring-white/40 text-sage'
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-house-of-yogis.svg"
          alt="House of Yogis logo"
          width={36}
          height={36}
          className="w-9 h-9 object-contain"
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
