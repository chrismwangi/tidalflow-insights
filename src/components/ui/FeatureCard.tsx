import { LucideIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface Metric {
  label: string;
  value: string;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metrics?: Metric[];
}

export function FeatureCard({ icon: Icon, title, description, metrics }: FeatureCardProps) {
  return (
    <GlassCard className="p-8 h-full group" hover>
      {/* Icon */}
      <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-primary/25 to-chart-2/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-primary-foreground mb-3">
        {title}
      </h3>
      <p className="text-primary-foreground/75 text-sm leading-relaxed mb-6">
        {description}
      </p>
      
      {/* Metrics */}
      {metrics && metrics.length > 0 && (
        <div className="flex gap-6 pt-6 border-t border-primary-foreground/10">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-primary-foreground/60 uppercase tracking-wide font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
