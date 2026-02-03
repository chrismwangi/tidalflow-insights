import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, MapPin, TrendingUp, Package } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import heroBg from '@/assets/hero-bg.jpg';

const metrics = [
  { icon: Users, value: '50K+', label: 'Field Agents' },
  { icon: MapPin, value: '99.8%', label: 'Geofence Uptime' },
  { icon: TrendingUp, value: '40%', label: 'Time Saved' },
  { icon: Package, value: '10K+', label: 'Products Tracked' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-1 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-1"></span>
            </span>
            <span className="text-sm font-medium">Now with AI-Powered Shelf Analysis</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Smart Field Operations &{' '}
            <span className="text-gradient">Route Optimization</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Transform field sales with share of shelf intelligence, geofencing, 
            smart routing, and real-time merchandising insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/features">
              <button className="btn-cta flex items-center justify-center gap-2 w-full sm:w-auto">
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/demo">
              <button className="btn-outline-light flex items-center justify-center gap-2 w-full sm:w-auto">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </Link>
          </div>

          {/* Metrics Cards */}
          <GlassCard className="p-8 max-w-3xl mx-auto animate-float">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <metric.icon className="w-8 h-8 text-chart-1 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-white/70 text-sm">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
