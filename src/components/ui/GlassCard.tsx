import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
  hover?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  variant = 'dark',
  hover = false 
}: GlassCardProps) {
  return (
    <div 
      className={cn(
        variant === 'dark' ? 'glass-card' : 'glass-card-light',
        hover && 'transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
}
