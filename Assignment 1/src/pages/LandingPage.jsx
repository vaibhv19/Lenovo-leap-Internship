import HeroSection from '../components/HeroSection.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';
import CTABanner from '../components/CTABanner.jsx';

function LandingPage() {
  return (
    <div className="landing-page">
      <HeroSection />
      <section className="features-section">
        <h2>Why SkillPath</h2>
        <div className="feature-grid">
          <FeatureCard
            icon="⚡"
            title="Fast Prototyping"
            description="Build responsive UI with reusable components and clean structure."
          />
          <FeatureCard
            icon="🧠"
            title="AI-driven Guidance"
            description="Use a smart workflow for layout, routing, and form handling."
          />
          <FeatureCard
            icon="📱"
            title="Responsive Design"
            description="Create a layout that looks great on phones, tablets, and desktops."
          />
        </div>
      </section>
      <TestimonialSection />
      <CTABanner />
    </div>
  );
}

export default LandingPage;
