import { useState } from 'react';
import { Mail, MapPin, Send, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error message when user types
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    // Success Simulation
    setSuccess(true);
    setError('');
    
    // Clear inputs after successful submit
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Automatically remove success notification toast after 6 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 6000);
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)' }}>Get in Touch</span>
          <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>Contact <span className="text-gradient">Our Support Team</span></h1>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Have questions about our roadmap curricula, subscription structures, or corporate licensing plans? Message us directly.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '48px', alignItems: 'stretch' }}>
          {/* Left Column: Support Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}>
            <div className="card-glass" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.15)',
                color: 'var(--color-secondary)'
              }}>
                <Mail size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Email Support</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>support@skillpath.dev</p>
              </div>
            </div>

            <div className="card-glass" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(139, 92, 246, 0.08)',
                border: '1px solid rgba(139, 92, 246, 0.15)',
                color: 'var(--color-primary)'
              }}>
                <MapPin size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Corporate Headquarters</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>100 Innovation Way, Suite 404, San Francisco, CA</p>
              </div>
            </div>

            <div className="card-glass" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.15)',
                color: 'var(--color-success)'
              }}>
                <HelpCircle size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Knowledge Base</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Browse guides at docs.skillpath.dev</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="card-glass" style={{ textAlign: 'left' }}>
            <h3 style={{ marginBottom: '24px' }}>Send a Message</h3>

            {error && (
              <div className="alert-error">
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="alert-success">
                <CheckCircle2 size={20} />
                <span>Message sent successfully! We will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Account Setup Issues"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your inquiry..."
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
