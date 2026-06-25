import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = Object.values(formData);
    if (values.some((value) => value.trim() === '')) {
      setError('Please complete all fields before sending your message.');
      setSubmitted(false);
      return;
    }

    setError('');
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-page page-section">
      <div className="contact-copy">
        <h1>Contact Us</h1>
        <p>Have questions about SkillPath or your next web development capstone? Send us a message.</p>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email
            <input name="email" type="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Subject
            <input name="subject" value={formData.subject} onChange={handleChange} />
          </label>
          <label>
            Message
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" />
          </label>
          {error && <p className="form-error">{error}</p>}
          {submitted && <p className="form-success">Your message was sent successfully!</p>}
          <button type="submit" className="button button-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
