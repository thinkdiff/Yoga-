import { cn } from '@/lib/utils';
import { Flower2 } from 'lucide-react';

interface LotusDecorationProps {
  className?: string;
  size?: number;
}

export default function LotusDecoration({ className, size = 32 }: LotusDecorationProps) {
  return (
    <div className={cn('flex justify-center items-center', className)}>
      <Flower2 size={size} strokeWidth={1.5} className="text-current" />
    </div>
  );
}
