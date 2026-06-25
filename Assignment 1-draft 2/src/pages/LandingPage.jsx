import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialSection from '../components/TestimonialSection';
import CTABanner from '../components/CTABanner';
import { Route, Terminal, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Route,
      title: 'Personalized Roadmaps',
      description: 'Get structured path recommendations tailored to your goals, current skillset, and ideal timeline. Never get lost in tutorials again.',
      badge: 'Popular'
    },
    {
      icon: Terminal,
      title: 'Interactive Sandbox',
      description: 'Write code directly inside the browser using our embedded sandbox with built-in test suites. Validate lessons immediately.',
      badge: 'New'
    },
    {
      icon: CheckCircle2,
      title: 'Automated Proof of Skill',
      description: 'Earn cryptographic certificates and shareable profile roadmaps to showcase your skills directly to hiring managers.',
      badge: null
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Hero Header */}
      <HeroSection />

      {/* Features Grid */}
      <section className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.005)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ marginBottom: '16px' }}>Master Skills in <span className="text-gradient">Structured Tracks</span></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Unlike traditional courses, SkillPath organizes engineering material into cohesive tracks so you always know what to study next.
            </p>
          </div>

          <div className="grid-3">
            {features.map((feat, index) => (
              <FeatureCard 
                key={index}
                icon={feat.icon}
                title={feat.title}
                description={feat.description}
                badge={feat.badge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTABanner */}
      <CTABanner />
    </div>
  );
}
