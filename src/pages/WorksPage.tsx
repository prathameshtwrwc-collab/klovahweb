import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import PageShell from '../components/layout/PageShell';
import { WORKS, WORK_FILTERS } from '../data/works';

const E: any = [0.22, 1, 0.36, 1];

export default function WorksPage() {
  const [filter, setFilter] = useState('All');
  const reduce = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.12 });
  const filtered = filter === 'All' ? WORKS : WORKS.filter(w => w.tags.includes(filter));

  return (
    <PageShell title="Works" description="Selected work by Klovah — brand, software and data systems built to create measurable movement.">
      {/* HERO */}
      <section className="works-hero">
        <div className="works-hero-bg" aria-hidden="true" />
        <div className="works-hero-content">
          <span className="works-meta">SELECTED WORK / 01–{String(WORKS.length).padStart(2, '0')}</span>
          <h1 className="works-title">
            <span className="works-title-anton">WORK THAT</span>
            <span className="works-title-bodoni">MOVES</span>
            <span className="works-title-anton">THE NUMBER.</span>
          </h1>
          <p className="works-supporting">Brand, software and data systems built to create measurable movement.</p>
        </div>
        <div className="works-filter-rail">
          {WORK_FILTERS.map(f => (
            <button
              key={f}
              className={`works-filter-btn ${filter === f ? 'works-filter-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="works-grid-section">
        <div className="works-grid" ref={gridRef}>
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              className={`works-card works-card-${i % 3 === 0 ? 'wide' : i % 3 === 1 ? 'tall' : 'standard'}`}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : 24 }}
              transition={{ duration: 0.55, ease: E, delay: i * 0.06 }}
            >
              <div
                className="works-card-art"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%), url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-hidden="true"
              >
                <span className="works-card-art-tag" style={{ background: project.accent }} />
              </div>
              <div className="works-card-content">
                <span className="works-card-num">{project.number}</span>
                <h2 className="works-card-title">{project.title}</h2>
                <div className="works-card-meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <div className="works-card-metric">
                  <span className="metric-val">{project.metric}</span>
                  <span className="metric-label">{project.metricLabel}</span>
                </div>
                {project.caseSlug && (
                  <Link to={`/cases/${project.caseSlug}`} className="works-card-link">
                    VIEW CASE <span aria-hidden="true">↗</span>
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section className="works-marquee-section" aria-hidden="true">
        <div className="works-marquee-track">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="works-marquee-text">
              STRATEGY / DESIGN / ENGINEERING / DATA / GROWTH&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="works-cta-section">
        <h2 className="works-cta-heading">
          <span className="wch-line">SEEN ENOUGH?</span>
          <span className="wch-line wch-bodoni">LET'S MAKE YOURS.</span>
        </h2>
        <Link to="/contact" className="works-cta-btn">
          START A CONVERSATION <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </PageShell>
  );
}
