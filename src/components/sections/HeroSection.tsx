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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-95" />
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-2/15 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-10 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary-foreground">Now with AI-Powered Shelf Analysis</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-8 tracking-tight">
            Smart Field Operations &{' '}
            <span className="text-gradient">Route Optimization</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Transform field sales with share of shelf intelligence, geofencing, 
            smart routing, and real-time merchandising insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
            <Link to="/features">
              <button className="btn-cta flex items-center justify-center gap-3 w-full sm:w-auto text-lg">
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/demo">
              <button className="btn-outline-light flex items-center justify-center gap-3 w-full sm:w-auto text-lg">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </Link>
          </div>

          {/* Metrics Cards */}
          <GlassCard className="p-10 max-w-4xl mx-auto animate-float">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                    {metric.value}
                  </div>
                  <div className="text-primary-foreground/70 text-sm font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
}
