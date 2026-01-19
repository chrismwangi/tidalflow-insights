import { GlassCard } from './GlassCard';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
}

export function MetricCard({ icon: Icon, value, label, description }: MetricCardProps) {
  return (
    <GlassCard className="p-6 text-center" hover>
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-chart-1/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-chart-1" />
      </div>
      <div className="metric-value mb-2">{value}</div>
      <div className="text-secondary-foreground font-semibold mb-1">{label}</div>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </GlassCard>
  );
}
