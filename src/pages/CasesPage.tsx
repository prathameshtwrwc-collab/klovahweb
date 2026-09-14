import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import PageShell from '../components/layout/PageShell';
import { CASES } from '../data/cases';

const E: any = [0.22, 1, 0.36, 1];

export default function CasesPage() {
  const reduce = useReducedMotion();
  return (
    <PageShell title="Cases" description="Outcome-driven case studies — proof in practice from Klovah.">
      <section className="cases-hero">
        <div className="cases-hero-bg" aria-hidden="true" />
        <div className="cases-hero-content">
          <span className="cases-meta">CASE STUDIES / PROOF IN PRACTICE</span>
          <h1 className="cases-title">
            <span className="cases-title-anton">PROOF,</span>
            <span className="cases-title-bodoni">NOT PROMISES.</span>
          </h1>
          <p className="cases-supporting">A closer look at the decisions, systems and outcomes behind the work.</p>
        </div>
      </section>

      <section className="cases-list">
        {CASES.map((c, i) => (
          <motion.div
            key={c.slug}
            className="case-row"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: E, delay: i * 0.06 }}
          >
            <Link to={`/cases/${c.slug}`} className="case-row-link">
              <div
                className="case-row-art"
                style={{ backgroundImage: `url(${c.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                aria-hidden="true"
              />
              <div className="case-row-content">
                <span className="case-row-num">{c.number}</span>
                <div className="case-row-info">
                  <h2 className="case-row-title">{c.title}</h2>
                  <span className="case-row-cat">{c.category} — {c.year}</span>
                  <p className="case-row-summary">{c.summary}</p>
                </div>
                <div className="case-row-metric">
                  <span className="case-metric-val">{c.metric}</span>
                  <span className="case-metric-label">{c.metricLabel}</span>
                </div>
                <span className="case-row-arrow" aria-hidden="true">↗</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </PageShell>
  );
}
