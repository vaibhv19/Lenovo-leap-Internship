import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="notfound-page page-section">
      <h1>404 — Page Not Found</h1>
      <p>We couldn't find the page you're looking for. Use the button below to return home.</p>
      <Link to="/" className="button button-secondary">Back to Home</Link>
    </section>
  );
}

export default NotFoundPage;
