'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { promo } from '@/lib/data/promo';

const TIME_TRIGGER_MS = 2_000;
const SCROLL_TRIGGER_PCT = 0.3;

function useCountdown(deadlineIso: string) {
  const [remaining, setRemaining] = useState<number>(() => Math.max(0, new Date(deadlineIso).getTime() - Date.now()));
  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, new Date(deadlineIso).getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [deadlineIso]);

  const days = Math.floor(remaining / (24 * 60 * 60 * 1000));
  const hours = Math.floor((remaining / (60 * 60 * 1000)) % 24);
  const minutes = Math.floor((remaining / (60 * 1000)) % 60);
  return { days, hours, minutes, expired: remaining === 0 };
}

export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  const countdown = useCountdown(promo.deadline);

  const deadlineLabel = useMemo(() => {
    const d = new Date(promo.deadline);
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }, []);

  useEffect(() => {
    if (!promo.enabled || countdown.expired) return;

    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      setOpen(true);
    };

    const timer = window.setTimeout(fire, TIME_TRIGGER_MS);
    const onScroll = () => {
      const scrolled = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled >= SCROLL_TRIGGER_PCT) fire();
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [countdown.expired]);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
  };

  if (!promo.enabled) return null;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="p-0 overflow-hidden max-w-[95vw] md:max-w-3xl border-none bg-ivory">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[220px] md:min-h-[440px]">
            <Image
              src={promo.imageUrl}
              alt="Limited time offer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute top-4 left-4 bg-terracotta text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Limited Time
            </div>
          </div>
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-2">Early Bird</span>
            <h2 className="font-display text-3xl md:text-4xl text-sage font-medium leading-tight mb-3">
              {promo.headline}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6">{promo.subheadline}</p>

            {!countdown.expired && (
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  { label: 'Days', value: countdown.days },
                  { label: 'Hours', value: countdown.hours },
                  { label: 'Minutes', value: countdown.minutes },
                ].map((item) => (
                  <div key={item.label} className="bg-sage/5 border border-sage/10 rounded-lg py-3 text-center">
                    <div className="font-display text-2xl md:text-3xl text-sage font-semibold leading-none">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            )}

            <p className="text-xs text-muted-foreground mb-5">Offer ends {deadlineLabel}.</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-terracotta hover:bg-gold text-white">
                <Link href={promo.ctaPrimary.href} onClick={() => handleOpenChange(false)}>
                  {promo.ctaPrimary.label}
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-sage/30 text-sage hover:bg-sage/5">
                <Link href={promo.ctaSecondary.href} onClick={() => handleOpenChange(false)}>
                  {promo.ctaSecondary.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
