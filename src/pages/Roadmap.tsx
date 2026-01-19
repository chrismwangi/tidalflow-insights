import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Clock, 
  ArrowRight,
  Rocket,
  Target,
  Zap,
  Globe
} from 'lucide-react';
import featuresBg from '@/assets/features-bg.jpg';

const mvpFeatures = [
  {
    status: 'complete',
    title: 'Login + Tenant Creation',
    description: 'Multi-tenant authentication with email/password',
    acceptance: 'Users can register, login, and access tenant-specific data'
  },
  {
    status: 'complete',
    title: 'User Roles (Admin / Agent)',
    description: 'Role-based access control for team management',
    acceptance: 'Admins can manage agents; agents see only assigned data'
  },
  {
    status: 'complete',
    title: 'Route Assignment',
    description: 'Assign daily routes to field agents',
    acceptance: 'Routes with outlets can be created and assigned to agents'
  },
  {
    status: 'complete',
    title: 'Geo Check-in',
    description: 'GPS-based check-in with geofence validation',
    acceptance: 'Agents can only check-in when within outlet radius'
  },
  {
    status: 'in-progress',
    title: 'Shelf Photo Capture',
    description: 'Capture and upload shelf photos from outlets',
    acceptance: 'Photos are captured, tagged with metadata, and synced'
  },
  {
    status: 'in-progress',
    title: 'Offline Sync',
    description: 'Work offline with automatic background sync',
    acceptance: 'Data persists offline and syncs when online'
  },
  {
    status: 'pending',
    title: 'Basic Reports',
    description: 'Dashboard with visit and coverage reports',
    acceptance: 'Admins see daily/weekly visit reports and coverage maps'
  },
  {
    status: 'pending',
    title: 'Seat-based Billing',
    description: 'Per-user subscription billing integration',
    acceptance: 'Tenants are billed based on active user count'
  },
  {
    status: 'pending',
    title: 'Shelf Photo Auto-tagging',
    description: 'AI-powered product recognition from photos',
    acceptance: 'Products are identified with 90%+ accuracy'
  },
  {
    status: 'pending',
    title: 'Fake Visit Detection',
    description: 'AI analysis to detect fraudulent check-ins',
    acceptance: 'Suspicious visits are flagged for review'
  },
  {
    status: 'pending',
    title: 'AI-generated Summaries',
    description: 'Automatic daily performance summaries',
    acceptance: 'Managers receive AI-written daily reports'
  }
];

const futureEpics = [
  {
    phase: 'Phase 2',
    timeline: 'Q2 2026',
    icon: Target,
    title: 'Advanced Analytics',
    features: [
      'Share of shelf trend analysis',
      'Competitor tracking dashboard',
      'Predictive route optimization',
      'Custom report builder'
    ]
  },
  {
    phase: 'Phase 3',
    timeline: 'Q3 2026',
    icon: Zap,
    title: 'AI Enhancements',
    features: [
      'Voice-based data entry',
      'Planogram compliance checking',
      'Demand forecasting',
      'Smart alerts and recommendations'
    ]
  },
  {
    phase: 'Phase 4',
    timeline: 'Q4 2026',
    icon: Globe,
    title: 'Market Expansion',
    features: [
      'Multi-language support',
      'Regional payment integrations',
      'Partner API marketplace',
      'White-label solution'
    ]
  }
];

const Roadmap = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="w-5 h-5 text-chart-1" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-primary" />;
      default:
        return <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'complete':
        return 'Complete';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Planned';
    }
  };

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
              Product <span className="text-gradient">Roadmap</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Our 90-day MVP goal: Prove companies will pay per user. See what we're building and what's coming next.
            </p>
          </div>
        </div>
      </section>

      {/* MVP Features */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground">
                MVP Features (90 Days)
              </h2>
              <p className="text-muted-foreground">Core functionality to validate product-market fit</p>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            {mvpFeatures.map((feature, index) => (
              <GlassCard key={index} className="p-4 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(feature.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-secondary-foreground">
                        {feature.title}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        feature.status === 'complete' 
                          ? 'bg-chart-1/20 text-chart-1'
                          : feature.status === 'in-progress'
                          ? 'bg-primary/20 text-primary'
                          : 'bg-muted-foreground/20 text-muted-foreground'
                      }`}>
                        {getStatusLabel(feature.status)}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{feature.description}</p>
                    <p className="text-secondary-foreground/70 text-sm">
                      <span className="font-medium">Acceptance:</span> {feature.acceptance}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Future Epics */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Future Roadmap
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What's coming after the MVP launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {futureEpics.map((epic, index) => (
              <GlassCard key={index} variant="light" className="p-6" hover>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-chart-1/10 flex items-center justify-center">
                    <epic.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary text-sm font-medium">{epic.phase}</p>
                    <p className="text-muted-foreground text-xs">{epic.timeline}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{epic.title}</h3>
                <ul className="space-y-2">
                  {epic.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Want to Shape Our Roadmap?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Join our early adopter program and get direct input on upcoming features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-cta flex items-center justify-center gap-2 w-full sm:w-auto">
                Join Early Access
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/demo">
              <button className="btn-outline-light flex items-center justify-center gap-2 w-full sm:w-auto">
                Try Current Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Roadmap;
