import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import PageShell from '../components/layout/PageShell';
import { CAPABILITY_GROUPS, TECH_STACK, ENGAGEMENT_MODELS } from '../data/capabilities';

const E: any = [0.22, 1, 0.36, 1];

export default function CapabilitiesPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <PageShell title="Capabilities" description="From the first business question to the product people finally use.">
      <section className="cap-hero">
        <div className="cap-hero-bg" aria-hidden="true" />
        <div className="cap-hero-content">
          <span className="cap-meta">CAPABILITIES / ONE CONNECTED TEAM</span>
          <h1 className="cap-title">
            <span className="cap-title-anton">EVERYTHING</span>
            <span className="cap-title-anton">CONNECTS.</span>
          </h1>
          <p className="cap-supporting">From the first business question to the product people finally use.</p>
        </div>
      </section>

      <section className="cap-groups">
        {CAPABILITY_GROUPS.map((g, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={g.number} className={`cap-group ${isOpen ? 'cap-group-open' : ''}`}>
              <button
                className="cap-group-header"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{ borderLeftColor: g.accent }}
              >
                <span className="cap-group-num">{g.number}</span>
                <span className="cap-group-title">{g.title.toUpperCase()}</span>
                <span className="cap-group-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              <motion.div
                className="cap-group-body"
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: reduce ? 0.15 : 0.45, ease: E }}
                style={{ overflow: 'hidden' }}
              >
                <ul className="cap-service-list">
                  {g.services.map((s, si) => (
                    <motion.li
                      key={s}
                      initial={reduce ? {} : { opacity: 0, x: -12 }}
                      animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                      transition={{ duration: 0.35, ease: E, delay: reduce ? 0 : si * 0.05 }}
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </section>

      <section className="cap-tech-rail" aria-label="Technology stack">
        <div className="cap-tech-track">
          {TECH_STACK.map((t, i) => (
            <span key={t}>{t.toUpperCase()}{i < TECH_STACK.length - 1 ? ' / ' : ''}</span>
          ))}
        </div>
      </section>

      <section className="cap-models">
        <h2 className="cap-models-heading">ENGAGEMENT MODELS</h2>
        <div className="cap-models-grid">
          {ENGAGEMENT_MODELS.map(m => (
            <div key={m.title} className="cap-model-card">
              <h3 className="cap-model-title">{m.title.toUpperCase()}</h3>
              <p className="cap-model-desc">{m.description}</p>
            </div>
          ))}
        </div>
        <Link to="/contact" className="cap-cta">
          BRING US THE HARD PART <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </PageShell>
  );
}
