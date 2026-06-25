import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="section-padding" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <div className="container" style={{ maxWidth: '580px' }}>
        <div className="card-glass" style={{ textAlign: 'center', padding: '60px 40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(244, 63, 94, 0.1)',
            border: '1px solid rgba(244, 63, 94, 0.2)',
            color: 'var(--color-accent)',
            marginBottom: '32px'
          }}>
            <Compass size={40} style={{ animation: 'spin 12s linear infinite' }} />
          </div>

          <h1 style={{ fontSize: '5rem', fontWeight: '800', lineHeight: 1, margin: '0 0 16px', color: 'var(--color-accent)' }}>404</h1>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Path Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '36px', fontSize: '1.05rem' }}>
            It looks like you've strayed from the guided roadmaps. The coordinates you specified do not map to any existing learning pathways.
          </p>

          <Link to="/" className="btn btn-primary" style={{ margin: '0 auto' }}>
            <Home size={18} />
            <span>Navigate to Homepage</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
