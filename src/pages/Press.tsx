import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Link } from 'react-router-dom';
import { ExternalLink, Quote, ArrowRight, Download } from 'lucide-react';
import featuresBg from '@/assets/features-bg.jpg';

const pressLogos = [
  { name: 'TechCrunch Africa', logo: 'TC' },
  { name: 'Disrupt Africa', logo: 'DA' },
  { name: 'Business Daily', logo: 'BD' },
  { name: 'The Standard', logo: 'TS' },
  { name: 'CIO Africa', logo: 'CIO' },
  { name: 'iAfrikan', logo: 'iA' },
];

const pressQuotes = [
  {
    quote: "TidalFlow is revolutionizing how FMCG companies manage their field operations in Africa. Their AI-powered shelf analytics is a game-changer.",
    source: 'TechCrunch Africa',
    author: 'Sarah Muturi, Tech Editor',
    date: 'January 2026'
  },
  {
    quote: "With 40% time savings on route optimization alone, TidalFlow is proving that African startups can build world-class enterprise solutions.",
    source: 'Disrupt Africa',
    author: 'Tom Jackson, Co-Founder',
    date: 'December 2025'
  },
  {
    quote: "The offline-first approach shows deep understanding of African infrastructure challenges. This is exactly what the market needs.",
    source: 'CIO Africa',
    author: 'James Wanjohi, Editor-in-Chief',
    date: 'November 2025'
  }
];

const pressReleases = [
  {
    title: 'TidalFlow Tech Raises Seed Round to Expand Field Sales Platform',
    date: 'January 15, 2026',
    summary: 'TidalFlow announces seed funding to accelerate growth across East Africa and expand into Nigeria and South Africa.'
  },
  {
    title: 'New AI Shelf Analysis Feature Achieves 95% Product Recognition Accuracy',
    date: 'December 10, 2025',
    summary: 'TidalFlow\'s AI team delivers breakthrough in product recognition, enabling real-time share of shelf analytics.'
  },
  {
    title: 'TidalFlow Partners with Leading Kenyan FMCG Distributor',
    date: 'November 5, 2025',
    summary: 'Strategic partnership to deploy TidalFlow across 200+ field agents, transforming route efficiency.'
  }
];

const Press = () => {
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
              Press & <span className="text-gradient">Media</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Read what industry leaders and media are saying about TidalFlow Tech.
            </p>
          </div>
        </div>
      </section>

      {/* Press Logos */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {pressLogos.map((press, index) => (
              <div 
                key={index}
                className="w-20 h-20 rounded-xl glass-card flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-gradient">{press.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quotes */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What They're Saying
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Industry recognition and media coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pressQuotes.map((item, index) => (
              <GlassCard key={index} variant="light" className="p-6" hover>
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{item.source}</p>
                  <p className="text-muted-foreground text-sm">{item.author}</p>
                  <p className="text-muted-foreground text-sm">{item.date}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Press Releases
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Latest news and announcements
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <GlassCard key={index} className="p-6" hover>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-primary text-sm font-medium mb-2">{release.date}</p>
                    <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
                      {release.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{release.summary}</p>
                  </div>
                  <a 
                    href="#"
                    className="flex items-center gap-2 text-chart-1 hover:underline text-sm font-medium whitespace-nowrap"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Media Kit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Download our brand assets, logos, and company information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-cta inline-flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Media Kit
            </a>
            <Link to="/contact">
              <button className="btn-outline-light bg-secondary text-secondary-foreground border-border inline-flex items-center gap-2">
                Media Inquiries
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Writing About TidalFlow?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            We'd love to hear from you. Contact our press team for interviews, quotes, or additional information.
          </p>
          <a 
            href="mailto:press@tidalflow.co.ke"
            className="btn-cta inline-flex items-center gap-2"
          >
            press@tidalflow.co.ke
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Press;
