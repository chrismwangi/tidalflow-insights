import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight, Zap } from 'lucide-react';
import featuresBg from '@/assets/features-bg.jpg';

const plans = [
  {
    name: 'Starter',
    price: 'Ksh 1,250',
    period: 'per user / month',
    description: 'Perfect for small distributors getting started',
    features: [
      { name: 'Up to 20 users', included: true },
      { name: 'Basic route optimization', included: true },
      { name: 'Geo check-in/out', included: true },
      { name: 'Offline sync', included: true },
      { name: 'Basic reports', included: true },
      { name: 'Email support', included: true },
      { name: 'AI shelf analysis', included: false },
      { name: 'Advanced analytics', included: false },
      { name: 'API access', included: false },
      { name: 'WhatsApp alerts', included: false },
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Growth',
    price: 'Ksh 950',
    period: 'per user / month',
    description: 'For growing FMCG distributors with larger teams',
    features: [
      { name: 'Up to 200 users', included: true },
      { name: 'Smart route optimization', included: true },
      { name: 'Geo check-in/out', included: true },
      { name: 'Offline sync', included: true },
      { name: 'Advanced reports', included: true },
      { name: 'Priority support', included: true },
      { name: 'AI shelf analysis', included: true },
      { name: 'Performance dashboards', included: true },
      { name: 'API access', included: false },
      { name: 'WhatsApp alerts', included: false },
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact for pricing',
    description: 'For brands and chains needing full customization',
    features: [
      { name: 'Unlimited users', included: true },
      { name: 'Premium route optimization', included: true },
      { name: 'Geo check-in/out', included: true },
      { name: 'Offline sync', included: true },
      { name: 'Custom reports', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'AI shelf analysis', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Full API access', included: true },
      { name: 'WhatsApp alerts', included: true },
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const addons = [
  {
    name: 'AI Shelf Analysis',
    price: 'Ksh 250',
    period: 'per user / month',
    description: 'Add AI-powered product recognition and shelf share analytics'
  },
  {
    name: 'Advanced Reports',
    price: 'Ksh 150',
    period: 'per user / month',
    description: 'Custom dashboards, export options, and scheduled reports'
  },
  {
    name: 'Extra Storage',
    price: 'Ksh 500',
    period: 'per 50GB / month',
    description: 'Additional storage for photos and documents'
  },
  {
    name: 'API Access',
    price: 'Ksh 5,000',
    period: 'per month',
    description: 'Full REST API access for custom integrations'
  },
  {
    name: 'WhatsApp Alerts',
    price: 'Ksh 100',
    period: 'per user / month',
    description: 'Real-time alerts and daily summaries via WhatsApp'
  }
];

const Pricing = () => {
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
              Simple, Transparent{' '}
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Choose the plan that fits your team size. All plans include core features with flexible add-ons.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1.5 bg-gradient-to-r from-primary to-chart-1 rounded-full text-primary-foreground text-sm font-semibold flex items-center gap-1.5 shadow-lg">
                      <Zap className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                <GlassCard 
                  variant="light"
                  className={`p-8 h-full flex flex-col ${plan.popular ? 'ring-2 ring-primary shadow-xl shadow-primary/20' : 'border-border/50'}`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">{plan.period}</p>
                    <p className="text-muted-foreground text-sm mt-4">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-chart-1/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-chart-1" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                            <X className="w-3.5 h-3.5 text-muted-foreground" />
                          </div>
                        )}
                        <span className={feature.included ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="block mt-auto">
                    <button 
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-chart-1 text-primary-foreground hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]' 
                          : 'bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </Link>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Flexible Add-ons
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enhance your plan with additional capabilities as your needs grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addons.map((addon, index) => (
              <GlassCard key={index} className="p-6" hover>
                <h4 className="text-lg font-semibold text-secondary-foreground mb-2">{addon.name}</h4>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-primary">{addon.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">{addon.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{addon.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Have Questions About Pricing?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Our team is ready to help you find the perfect plan for your field operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-cta flex items-center justify-center gap-2 w-full sm:w-auto">
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/demo">
              <button className="btn-outline-light flex items-center justify-center gap-2 w-full sm:w-auto">
                Try Free Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;