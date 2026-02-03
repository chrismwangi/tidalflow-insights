import { GlassCard } from './GlassCard';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metrics?: { label: string; value: string }[];
}

export function FeatureCard({ icon: Icon, title, description, metrics }: FeatureCardProps) {
  return (
    <GlassCard className="p-6 h-full" hover>
      <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-chart-1/30 to-chart-2/30 flex items-center justify-center">
        <Icon className="w-7 h-7 text-chart-1" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed mb-4">{description}</p>
      {metrics && metrics.length > 0 && (
        <div className="flex flex-wrap gap-3 pt-4 border-t border-white/20">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-chart-1 font-bold text-lg">{metric.value}</span>
              <span className="text-white/70 text-xs">{metric.label}</span>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
