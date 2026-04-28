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
          'relative w-[68px] h-[68px] rounded-[22px] flex items-center justify-center overflow-hidden border bg-white shadow-[0_8px_24px_rgba(139,79,95,0.08)] transition-all duration-300 group-hover:scale-[1.02]',
          variant === 'dark'
            ? 'border-terracotta/12 text-sage'
            : 'border-white/50 text-sage'
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-house-of-yogis.svg"
          alt="House of Yogis logo"
          width={62}
          height={62}
          className="w-[90%] h-[90%] object-contain"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="flex flex-col leading-none pt-0.5">
        <span
          className={cn(
            'font-brand italic text-[1.9rem] md:text-[2.1rem] font-semibold tracking-[-0.03em]',
            variant === 'dark' ? 'text-sage' : 'text-white'
          )}
        >
          House of Yogis
        </span>
        <span
          className={cn(
            'text-[9px] md:text-[10px] uppercase tracking-[0.34em] font-semibold mt-1.5 pl-1',
            variant === 'dark' ? 'text-terracotta/80' : 'text-gold'
          )}
        >
          Rishikesh
        </span>
      </div>
    </div>
  );
}
