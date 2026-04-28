import { cn } from '@/lib/utils';

export default function Logo({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn('shrink-0', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/yogalogo.png"
        alt="House of Yogis logo"
        width={220}
        height={120}
        className="h-16 md:h-[72px] w-auto object-contain"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
