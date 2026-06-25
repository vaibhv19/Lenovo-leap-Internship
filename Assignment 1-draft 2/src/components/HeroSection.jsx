import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        {/* Left Side: Copy */}
        <div style={{ textAlign: 'left' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '100px', marginBottom: '24px' }}>
            <Sparkles size={16} className="text-gradient" />
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#c084fc' }}>Next Generation Learning Paths</span>
          </div>
          <h1>
            Discover Your <br />
            <span className="text-gradient">Ultimate Skill Path</span>
          </h1>
          <p style={{ marginTop: '20px', marginBottom: '36px', maxWidth: '520px' }}>
            Empower your engineering career with industry-proven learning paths, curated exercises, and automated feedback loops. Don't wander in circles—build your roadmap today.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Start Learning Now</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              <span>Explore Roadmap</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Dashboard roadmap preview visual (Pure CSS) */}
        <div className="preview-dashboard glow-interactive">
          <div className="dashboard-header">
            <div className="dashboard-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="dashboard-tabs">
              <span className="tab"></span>
              <span className="tab"></span>
              <span className="tab"></span>
            </div>
          </div>
          <div className="dashboard-grid">
            <div className="dashboard-sidebar">
              <div className="sidebar-item active"></div>
              <div className="sidebar-item"></div>
              <div className="sidebar-item"></div>
              <div className="sidebar-item"></div>
            </div>
            <div className="dashboard-content">
              <div className="content-row">
                <div className="content-card">
                  <div className="card-title-placeholder"></div>
                  <div className="card-value-placeholder"></div>
                </div>
                <div className="content-card">
                  <div className="card-title-placeholder"></div>
                  <div className="card-value-placeholder" style={{ width: '70%', background: 'linear-gradient(90deg, #10b981, #06b6d4)' }}></div>
                </div>
                <div className="content-card">
                  <div className="card-title-placeholder"></div>
                  <div className="card-value-placeholder" style={{ width: '50%', background: 'linear-gradient(90deg, #f43f5e, #a855f7)' }}></div>
                </div>
              </div>
              <div className="content-chart">
                <div className="card-title-placeholder" style={{ width: '30%' }}></div>
                <div className="chart-bars">
                  <div className="chart-bar" style={{ height: '40px', background: 'var(--color-primary)' }}></div>
                  <div className="chart-bar" style={{ height: '70px', background: 'var(--color-secondary)' }}></div>
                  <div className="chart-bar" style={{ height: '30px', background: 'var(--color-primary)' }}></div>
                  <div className="chart-bar" style={{ height: '80px', background: 'var(--color-secondary)' }}></div>
                  <div className="chart-bar" style={{ height: '55px', background: 'var(--color-primary)' }}></div>
                  <div className="chart-bar" style={{ height: '90px', background: 'var(--color-secondary)' }}></div>
                  <div className="chart-bar" style={{ height: '45px', background: 'var(--color-primary)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
