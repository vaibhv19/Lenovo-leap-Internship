import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha Rahman',
    role: 'Frontend Engineer @ Vercel',
    rating: 5,
    text: 'SkillPath completely streamlined my transition from boot camp grad to React engineer. The interactive visual roadmaps keep you motivated and focused on what actually matters.',
    initials: 'AR',
    color: '#8b5cf6'
  },
  {
    name: 'Julian Alvarez',
    role: 'Full Stack Dev @ Stripe',
    rating: 5,
    text: 'I love how modern the interface is. No boring videos; just interactive paths, solid projects, and clear directions. The contact support team is also incredibly helpful!',
    initials: 'JA',
    color: '#06b6d4'
  },
  {
    name: 'Emily Chen',
    role: 'Software Engineer @ Microsoft',
    rating: 5,
    text: 'The best roadmap application I have ever used. The project tracking is clean and simple. I have recommended it to my entire local engineering community.',
    initials: 'EC',
    color: '#10b981'
  }
];

export default function TestimonialSection() {
  return (
    <section className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '16px' }}>Loved by <span className="text-gradient">Engineers Worldwide</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Hear from developers who fast-tracked their engineering careers using our structured skill pathways.
          </p>
        </div>

        <div className="grid-3">
          {testimonials.map((t, index) => (
            <div key={index} className="card-glass" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', height: '100%' }}>
              {/* Rating */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', color: '#fbbf24' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p style={{ fontSize: '0.98rem', flexGrow: 1, marginBottom: '24px', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                "{t.text}"
              </p>

              {/* User Bio */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '50%', 
                  background: t.color, 
                  color: '#ffffff', 
                  fontWeight: '700', 
                  fontSize: '0.9rem' 
                }}>
                  {t.initials}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
