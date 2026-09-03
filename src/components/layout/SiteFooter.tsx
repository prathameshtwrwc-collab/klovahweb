import { Link } from 'react-router-dom';
import { FOOTER_NAV } from '../../data/navigation';
import { SITE } from '../../data/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer-global">
      <div className="sf-top">
        <Link to="/" className="sf-logo">KLOVAH</Link>
        <span className="sf-tagline">IDEAS, MADE REAL.</span>
      </div>

      <div className="sf-divider" aria-hidden="true" />

      <div className="sf-body">
        <nav className="sf-nav" aria-label="Footer navigation">
          {FOOTER_NAV.map(item => (
            <Link key={item.href} to={item.href} className="sf-nav-link">
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="sf-contact">
          <div className="sf-cta-block">
            <Link to="/contact" className="sf-cta">
              START A CONVERSATION <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="sf-divider" aria-hidden="true" />

      <div className="sf-bottom">
        <span className="sf-location">{SITE.location.toUpperCase()} / {SITE.reach.toUpperCase()}</span>
        <div className="sf-social">
          <a href={SITE.social.instagram} target="_blank" rel="noreferrer">INSTAGRAM</a>
          <a href={SITE.social.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href={`mailto:${SITE.email}`}>EMAIL</a>
        </div>
      </div>

      <div className="sf-legal">
        <Link to="/privacy">PRIVACY</Link>
        <Link to="/terms">TERMS</Link>
        <span>© {new Date().getFullYear()} KLOVAH</span>
      </div>
    </footer>
  );
}
