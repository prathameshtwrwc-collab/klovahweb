import { useParams, Link, Navigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { getCaseBySlug, getNextCase } from '../data/cases';

export default function CaseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const cs = getCaseBySlug(slug || '');
  if (!cs) return <Navigate to="/cases" replace />;
  const next = getNextCase(cs.slug);

  return (
    <PageShell title={cs.title} description={cs.summary}>
      {/* HERO */}
      <section className="cd-hero" style={{ background: cs.accent }}>
        <div className="cd-hero-bg" aria-hidden="true" />
        <div className="cd-hero-content">
          <span className="cd-meta">CASE {cs.number} / {cs.category.toUpperCase()}</span>
          <h1 className="cd-title">{cs.title}</h1>
          <p className="cd-outcome">{cs.metric} {cs.metricLabel}</p>
          <span className="cd-year">{cs.year}</span>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="cd-section cd-overview">
        <div className="cd-section-label">OVERVIEW</div>
        <p className="cd-body-text">{cs.summary}</p>
      </section>

      {/* CHALLENGE */}
      <section className="cd-section cd-challenge">
        <div className="cd-section-label">CHALLENGE</div>
        <h2 className="cd-section-heading">{cs.challenge}</h2>
      </section>

      {/* APPROACH */}
      <section className="cd-section cd-approach">
        <div className="cd-section-label">APPROACH</div>
        <p className="cd-body-text">{cs.approach}</p>
      </section>

      {/* METRICS */}
      <section className="cd-metrics-section" style={{ background: cs.accent }}>
        <div className="cd-metric-display">
          <span className="cd-metric-val">{cs.metric}</span>
          <span className="cd-metric-label">{cs.metricLabel}</span>
        </div>
      </section>

      {/* GALLERY PLACEHOLDER */}
      <section className="cd-gallery" aria-hidden="true">
        <div className="cd-gallery-placeholder" style={{ background: cs.accent, opacity: 0.15 }}>
          <span>GALLERY — IMAGES WILL BE ADDED IN VS CODE</span>
        </div>
      </section>

      {/* CAPABILITIES USED */}
      <section className="cd-section cd-capabilities-used">
        <div className="cd-section-label">CAPABILITIES USED</div>
        <div className="cd-caps-list">
          {cs.capabilities.map(cap => (
            <span key={cap} className="cd-cap-tag">{cap}</span>
          ))}
        </div>
      </section>

      {/* NEXT CASE */}
      <section className="cd-next" style={{ background: next.accent }}>
        <span className="cd-next-label">NEXT CASE</span>
        <Link to={`/cases/${next.slug}`} className="cd-next-link">
          <span className="cd-next-title">{next.title}</span>
          <span className="cd-next-arrow" aria-hidden="true">↗</span>
        </Link>
      </section>

      {/* CTA */}
      <section className="cd-cta-section">
        <h2 className="cd-cta-heading">READY TO BUILD YOURS?</h2>
        <Link to="/contact" className="cd-cta-btn">
          START A CONVERSATION <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </PageShell>
  );
}
