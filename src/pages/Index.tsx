import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { GlassCard } from '@/components/ui/GlassCard';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  MapPin, 
  Route, 
  Package, 
  DollarSign, 
  Users,
  ArrowRight,
  CheckCircle,
  Smartphone
} from 'lucide-react';
import featuresBg from '@/assets/features-bg.jpg';

const features = [
  {
    icon: BarChart3,
    title: 'Share of Shelf Intelligence',
    description: 'AI-powered photo analysis that identifies products vs competitors, measures shelf space, and provides actionable merchandising insights.',
    metrics: [
      { label: 'accuracy', value: '95%' },
      { label: 'products recognized', value: '10K+' }
    ]
  },
  {
    icon: MapPin,
    title: 'Geofenced Outlets',
    description: 'Virtual boundaries with GPS tracking, automatic check-in/out, and visit duration monitoring for complete field visibility.',
    metrics: [
      { label: 'uptime', value: '99.8%' },
      { label: 'outlets tracked', value: '50K+' }
    ]
  },
  {
    icon: Route,
    title: 'Smart Route Optimization',
    description: 'Algorithms that optimize daily routes considering traffic, outlet priority, and time constraints for maximum efficiency.',
    metrics: [
      { label: 'time saved', value: '40%' },
      { label: 'route efficiency', value: '85%' }
    ]
  },
  {
    icon: Package,
    title: 'Real-time Stock Tracking',
    description: 'Fast, accurate inventory counts on-site with offline-first capability and automatic sync when back online.',
    metrics: [
      { label: 'sync speed', value: '<5s' },
      { label: 'offline ready', value: '100%' }
    ]
  },
  {
    icon: DollarSign,
    title: 'Stock Value Monitoring',
    description: 'Real-time visibility into stock value across all outlets, with alerts for short-expiry items and returns management.',
    metrics: [
      { label: 'visibility', value: 'Real-time' },
      { label: 'SKU tracking', value: '∞' }
    ]
  },
  {
    icon: Users,
    title: 'Team Performance',
    description: 'Monitor sales team performance with AI-generated summaries, fake visit detection, and productivity insights.',
    metrics: [
      { label: 'accuracy', value: '99%' },
      { label: 'reports', value: 'Instant' }
    ]
  },
];

const benefits = [
  'Reduce field operation costs by up to 40%',
  'Increase shelf compliance visibility',
  'Eliminate fake check-ins with geofencing',
  'AI-powered product recognition',
  'Offline-first mobile experience',
  'Real-time dashboards and alerts'
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Overview */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{ 
          backgroundImage: `url(${featuresBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-secondary/95" />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Everything You Need for{' '}
              <span className="text-gradient">Field Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive tools designed for FMCG distributors, pharma reps, and field teams across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <button className="btn-primary-gradient flex items-center gap-2 mx-auto">
                View All Features
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-gradient">TidalFlow</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Built specifically for African field operations, TidalFlow understands the unique challenges of emerging markets.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/pricing">
                  <button className="btn-cta flex items-center gap-2">
                    See Pricing
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/demo">
                  <button className="btn-outline-light bg-secondary text-secondary-foreground border-border hover:bg-accent">
                    Try Demo
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <GlassCard variant="light" className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Mobile-First Design</h3>
                    <p className="text-muted-foreground">Works offline, syncs online</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-primary to-chart-1 rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Route Efficiency</span>
                    <span className="text-primary font-semibold">85%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-gradient-to-r from-primary to-chart-1 rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Product Recognition</span>
                    <span className="text-primary font-semibold">95%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[99%] bg-gradient-to-r from-primary to-chart-1 rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Geofence Accuracy</span>
                    <span className="text-primary font-semibold">99.8%</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Field Operations?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Join leading FMCG distributors across Africa who trust TidalFlow for their field sales excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-cta flex items-center justify-center gap-2 w-full sm:w-auto">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/demo">
              <button className="btn-outline-light flex items-center justify-center gap-2 w-full sm:w-auto">
                Try Interactive Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
