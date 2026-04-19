'use client';

import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal, FaUniversity } from 'react-icons/fa';
import { SiGooglepay } from 'react-icons/si';
import { paymentMethods } from '@/lib/data/payments';
import { cn } from '@/lib/utils';

const iconMap: Record<string, { Icon: React.ComponentType<{ className?: string }>; color: string }> = {
  visa: { Icon: FaCcVisa, color: 'text-[#1A1F71]' },
  mastercard: { Icon: FaCcMastercard, color: 'text-[#EB001B]' },
  amex: { Icon: FaCcAmex, color: 'text-[#2E77BB]' },
  paypal: { Icon: FaPaypal, color: 'text-[#003087]' },
  upi: { Icon: SiGooglepay, color: 'text-[#5F6368]' },
  bank: { Icon: FaUniversity, color: 'text-sage' },
};

interface PaymentMethodsProps {
  variant?: 'footer' | 'inline';
  className?: string;
}

export default function PaymentMethods({ variant = 'inline', className }: PaymentMethodsProps) {
  const isFooter = variant === 'footer';
  return (
    <div className={cn('w-full', className)}>
      {!isFooter && (
        <h4 className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Trusted payment methods
        </h4>
      )}
      <div
        className={cn(
          'flex flex-wrap items-center justify-center gap-4 md:gap-6',
          isFooter && 'gap-3'
        )}
      >
        {paymentMethods.map(({ name, iconKey }) => {
          const entry = iconMap[iconKey];
          if (!entry) return null;
          const { Icon, color } = entry;
          return (
            <div
              key={name}
              title={name}
              aria-label={name}
              className={cn(
                'flex items-center justify-center rounded-md bg-white/95 px-3 py-2 shadow-sm',
                isFooter ? 'h-10' : 'h-12'
              )}
            >
              <Icon className={cn('text-3xl', color)} />
              <span className="sr-only">{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
