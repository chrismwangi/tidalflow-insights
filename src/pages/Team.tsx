import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import featuresBg from '@/assets/features-bg.jpg';

const team = [
  {
    name: 'David Ochieng',
    role: 'CEO & Co-Founder',
    bio: 'Former Salesforce architect with 15 years experience in enterprise field solutions across Africa.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Sarah Wanjiku',
    role: 'CTO & Co-Founder',
    bio: 'AI/ML specialist who led mobile-first product teams at leading African tech startups.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'James Kimani',
    role: 'Head of Product',
    bio: 'Product leader with deep expertise in FMCG distribution and retail technology.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Grace Atieno',
    role: 'Head of Customer Success',
    bio: 'Operations expert who has scaled field teams from 50 to 500+ agents across East Africa.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Michael Njoroge',
    role: 'Lead Engineer',
    bio: 'Full-stack engineer specializing in offline-first mobile applications and GPS systems.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Fatuma Hassan',
    role: 'Head of AI/ML',
    bio: 'Computer vision specialist focused on product recognition and shelf analytics.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#'
  }
];

const advisors = [
  {
    name: 'Dr. Peter Kagwe',
    role: 'Advisor',
    bio: 'Former VP at Unilever Africa, expert in FMCG distribution',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Angela Mutua',
    role: 'Advisor',
    bio: 'Serial entrepreneur, founder of 3 successful African startups',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop&crop=face'
  }
];

const Team = () => {
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
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              A passionate team of field operations experts, engineers, and AI specialists building the future of African retail.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced leaders from Salesforce, leading African startups, and global FMCG companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <GlassCard key={index} className="p-6 text-center" hover>
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-secondary-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a 
                    href={member.linkedin}
                    className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.twitter}
                    className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Advisors
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Industry veterans guiding our strategic direction.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <GlassCard key={index} variant="light" className="p-6 text-center w-full md:w-80" hover>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/10">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {advisor.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">{advisor.role}</p>
                <p className="text-muted-foreground text-sm">{advisor.bio}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            We're always looking for talented individuals passionate about transforming field operations in Africa.
          </p>
          <a 
            href="mailto:careers@tidalflow.co.ke"
            className="btn-cta inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            careers@tidalflow.co.ke
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
