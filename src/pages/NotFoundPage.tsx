import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';

export default function NotFoundPage() {
  return (
    <PageShell title="404 — Page Not Found" noFooter>
      <section className="not-found-page">
        <div className="nf-art" aria-hidden="true">
          <div className="nf-piece nf-piece-1" />
          <div className="nf-piece nf-piece-2" />
          <div className="nf-piece nf-piece-3" />
        </div>
        <div className="nf-content">
          <span className="nf-code">404</span>
          <h1 className="nf-heading">
            <span>THIS IDEA</span>
            <span>WENT SOMEWHERE ELSE.</span>
          </h1>
          <p className="nf-supporting">Let's get you back to something useful.</p>
          <div className="nf-actions">
            <Link to="/" className="nf-btn nf-btn-primary">BACK HOME</Link>
            <Link to="/works" className="nf-btn nf-btn-secondary">VIEW WORK</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
