'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import LotusDecoration from '@/components/shared/LotusDecoration';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  decorative?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  alignment = 'center',
  decorative = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={cn(
        'flex flex-col mb-12',
        alignment === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {decorative && <LotusDecoration className="mb-4 text-terracotta" />}
      <h2 className="font-display text-4xl md:text-5xl text-sage font-medium mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
