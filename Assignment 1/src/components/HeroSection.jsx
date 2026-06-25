import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">WEB DEVELOPMENT AI - Driven Web and Product Dev</p>
        <h1>Build better digital experiences with SkillPath.</h1>
        <p className="hero-text">
          A modern landing page for your capstone project, built using reusable React components,
          React Router, and responsive design.
        </p>
        <Link to="/contact" className="button button-primary">Get in touch</Link>
      </div>
      <div className="hero-image">
        <div className="hero-card">
          <h2>Capstone Project</h2>
          <p>Learn core React skills: components, props, state, routing, and form handling.</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
