function AboutPage() {
  return (
    <section className="about-page page-section">
      <div className="about-copy">
        <h1>About SkillPath</h1>
        <p>
          SkillPath is a responsive React application built to demonstrate modern web development concepts.
          It introduces reusable components, React Router, stateful forms, and layout composition.
        </p>
        <h2>Application Purpose</h2>
        <p>
          The goal is to help learners build a polished landing page experience with multiple pages,
          clear navigation, and a contact workflow that validates input without reloading.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>Reusable UI components for Hero, Features, Testimonials, CTA, and Footer.</li>
          <li>Multi-page routing with React Router.</li>
          <li>Controlled form handling and submission feedback.</li>
          <li>Responsive layout for desktop and mobile screens.</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutPage;
