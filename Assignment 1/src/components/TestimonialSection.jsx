function TestimonialSection() {
  const testimonials = [
    {
      quote: 'SkillPath helped us turn product ideas into working prototypes quickly.',
      name: 'Aditi Sharma',
      title: 'Product Designer'
    },
    {
      quote: 'The reusable component structure made the application easy to maintain.',
      name: 'Rohit Kumar',
      title: 'Frontend Developer'
    },
    {
      quote: 'From landing page to contact form, every part felt polished and responsive.',
      name: 'Neha Singh',
      title: 'Project Lead'
    }
  ];

  return (
    <section className="testimonial-section">
      <h2>What learners say</h2>
      <div className="testimonial-grid">
        {testimonials.map(({ quote, name, title }) => (
          <div key={name} className="testimonial-card">
            <p>“{quote}”</p>
            <div className="testimonial-meta">
              <strong>{name}</strong>
              <span>{title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
