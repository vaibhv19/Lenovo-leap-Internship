import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>SkillPath</strong> — AI-driven web and product development.
      </div>
      <div className="footer-links">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
      <div className="footer-copy">© 2026 SkillPath. Built for web development capstone.</div>
    </footer>
  );
}

export default Footer;
