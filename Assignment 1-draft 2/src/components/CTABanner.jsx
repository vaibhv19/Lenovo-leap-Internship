import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="section-padding">
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius-lg)',
          padding: '60px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle glow decorative filter */}
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            background: 'var(--color-primary-glow)',
            filter: 'blur(80px)',
            top: '-50px',
            left: '-50px',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            background: 'var(--color-secondary-glow)',
            filter: 'blur(80px)',
            bottom: '-50px',
            right: '-50px',
            pointerEvents: 'none'
          }}></div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)', borderRadius: '100px', marginBottom: '20px' }}>
            <Flame size={16} style={{ color: '#06b6d4' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#06b6d4' }}>Boost Your Learning Velocity</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', maxWidth: '700px', margin: '0 auto 16px' }}>
            Ready to Take Control of <span className="text-gradient">Your Tech Career?</span>
          </h2>
          <p style={{ maxWidth: '540px', margin: '0 auto 36px', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Join thousands of developers tracking their growth and land your dream tech role. Start building today.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Sign Up Free</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              <span>See Demo Paths</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
