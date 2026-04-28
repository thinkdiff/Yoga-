import { cn } from '@/lib/utils';

export default function Logo({
  className,
  variant = 'dark',
}: {
  className?: string;
  variant?: 'dark' | 'light';
}) {
  return (
    <div className={cn('flex items-center gap-3 shrink-0', className)}>
      <div className="relative flex h-14 w-auto items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-house-of-yogis.svg"
          alt="House of Yogis logo"
          width={56}
          height={56}
          className="h-14 w-auto object-contain"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="flex flex-col justify-center leading-none">
        <span
          className={cn(
            'font-brand italic text-[1.75rem] md:text-[2rem] font-medium tracking-[0.01em]',
            variant === 'dark' ? 'text-sage' : 'text-white'
          )}
        >
          House of Yogis
        </span>
        <span
          className={cn(
            'text-[11px] uppercase tracking-[0.28em] font-medium mt-2',
            variant === 'dark' ? 'text-terracotta/80' : 'text-gold'
          )}
        >
          Rishikesh
        </span>
      </div>
    </div>
  );
}
