import { Award, Compass, Zap, Target } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '150K+', label: 'Active Learners' },
    { number: '45+', label: 'Skill Roadmaps' },
    { number: '96%', label: 'Placement Rate' },
    { number: '1.2M+', label: 'Lessons Completed' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize access to high-quality software engineering instruction by replacing unstructured videos with structured visual roadmaps.'
    },
    {
      icon: Compass,
      title: 'Guided Discovery',
      description: 'We believe learning is a journey, not a destination. We guide you step-by-step through core theory down to deep execution details.'
    },
    {
      icon: Zap,
      title: 'Actionable Validation',
      description: 'Theoretical lectures are not enough. We force you to compile, run tests, and write working production code at every checkpoint.'
    },
    {
      icon: Award,
      title: 'Industry Credibility',
      description: 'Build portfolio roadmaps and verified skill sets that hiring teams immediately recognize and respect.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Hero section */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)' }}>Our Story</span>
          <h1 style={{ marginTop: '12px', marginBottom: '24px' }}>
            We're building the future of <br />
            <span className="text-gradient">Technical Education</span>
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            SkillPath was founded by a team of engineers and educators who realized standard education models were failing. We replaced long, passive lectures with interactive, visual, and highly structured learning paths.
          </p>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={{ padding: '40px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.005)' }}>
        <div className="container">
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {stats.map((s, index) => (
              <div key={index} className="card-glass" style={{ padding: '24px' }}>
                <h3 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '4px' }}>{s.number}</h3>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-secondary)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2>What Drives <span className="text-gradient">SkillPath?</span></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Our design, curriculum, and technology are built around four core educational values.
            </p>
          </div>

          <div className="grid-2">
            {values.map((v, index) => (
              <div key={index} className="card-glass" style={{ display: 'flex', gap: '20px', textAlign: 'left' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  background: 'rgba(139, 92, 246, 0.08)', 
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  color: 'var(--color-primary)',
                  flexShrink: 0
                }}>
                  <v.icon size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
