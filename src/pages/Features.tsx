import { Layout } from '@/components/layout/Layout';
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
  Camera,
  Wifi,
  WifiOff,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import featuresBg from '@/assets/features-bg.jpg';

const coreFeatures = [
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

const additionalFeatures = [
  {
    icon: Camera,
    title: 'Shelf Photo Capture',
    description: 'Quick and easy photo capture with automatic product tagging and compliance verification.'
  },
  {
    icon: WifiOff,
    title: 'Offline-First',
    description: 'Full functionality without internet. Data syncs automatically when connection is restored.'
  },
  {
    icon: Clock,
    title: 'Short-Expiry Tracker',
    description: 'Proactive alerts for products nearing expiry dates to minimize losses and returns.'
  },
  {
    icon: Shield,
    title: 'Fake Visit Detection',
    description: 'AI-powered verification to ensure genuine field visits and accurate reporting.'
  },
  {
    icon: Zap,
    title: 'WhatsApp Alerts',
    description: 'Instant notifications to managers for critical events and daily summaries.'
  },
  {
    icon: Wifi,
    title: 'Returns Management',
    description: 'Streamlined process for handling product returns and expired goods.'
  },
];

const industries = [
  { name: 'FMCG Distributors', description: 'For companies with 50-200+ field agents' },
  { name: 'Pharmaceutical Reps', description: 'Medical sales and pharmacy visits' },
  { name: 'Telecom Field Teams', description: 'SIM distribution and outlet compliance' },
  { name: 'NGOs & Enumerators', description: 'Field data collection and surveys' },
  { name: 'Retail Chains', description: 'Multi-location inventory management' },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{ 
          backgroundImage: `url(${featuresBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-95" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Powerful Features for{' '}
              <span className="text-gradient">Field Excellence</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Comprehensive tools designed to transform your field sales operations with AI-powered insights, real-time tracking, and smart automation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Core Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Six powerful modules that work together to optimize your field operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Extended capabilities that complement your core field operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <GlassCard key={index} variant="light" className="p-6" hover>
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-chart-1/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
                Built for African Markets
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                TidalFlow is designed to handle the unique challenges of emerging markets, including intermittent connectivity, diverse retail environments, and rapidly growing field teams.
              </p>
              
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-chart-1 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-secondary-foreground">{industry.name}</span>
                      <p className="text-muted-foreground text-sm">{industry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-6">Target Markets</h3>
              <div className="space-y-4">
                {['Kenya', 'Nigeria', 'South Africa', 'Ghana', 'Tanzania'].map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-secondary-foreground">{country}</span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 bg-secondary-foreground/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-chart-1 rounded-full"
                          style={{ width: `${100 - index * 15}%` }}
                        />
                      </div>
                      <span className="text-chart-1 text-sm font-medium">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            See These Features in Action
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Try our interactive demo to experience how TidalFlow can transform your field operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <button className="btn-cta flex items-center justify-center gap-2 w-full sm:w-auto">
                Try Interactive Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/pricing">
              <button className="btn-outline-light flex items-center justify-center gap-2 w-full sm:w-auto">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
