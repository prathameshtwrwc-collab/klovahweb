import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import PageShell from '../components/layout/PageShell';

const E: any = [0.22, 1, 0.36, 1];
const PRINCIPLES = [
  'CLARITY BEFORE COMPLEXITY.',
  'MAKE THE SYSTEM COHERENT.',
  'SHOW THE WORK EARLY.',
  'BUILD FOR WHAT COMES NEXT.',
];
const ROLES = ['STRATEGY', 'DESIGN', 'ENGINEERING', 'DATA', 'GROWTH'];
const PROOF = [
  { val: '20+', label: 'LAUNCHES' },
  { val: 'MULTI-', label: 'SECTOR' },
  { val: 'GLOBAL', label: 'DELIVERY' },
];

export default function AboutPage() {
  const reduce = useReducedMotion();
  return (
    <PageShell title="About" description="Klovah is a full-stack team building brands, websites, software and data systems for businesses ready to move with clarity.">
      <section className="about-hero">
        <div className="about-hero-bg" aria-hidden="true" />
        <div className="about-hero-content">
          <span className="about-meta">ABOUT / KLOVAH</span>
          <h1 className="about-title">
            <span className="about-title-anton">YOUNG TEAM.</span>
            <span className="about-title-bodoni">SERIOUS CRAFT.</span>
          </h1>
          <p className="about-supporting">
            Klovah is a full-stack team building brands, websites, software and data systems for businesses ready to move with clarity.
          </p>
        </div>
      </section>

      <section className="about-who">
        <div className="about-who-content">
          <h2 className="about-section-label">WHO WE ARE</h2>
          <p className="about-body-text">
            We bring strategy, design, engineering, data and growth into one working team. That means fewer handoffs, faster decisions and products that feel coherent from the first interaction to the system underneath.
          </p>
        </div>
        <div className="about-team-art" aria-hidden="true">
          <div className="about-roles-grid">
            {ROLES.map(r => (
              <div key={r} className="about-role-card">
                <div className="role-portrait" />
                <span className="role-label">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-principles">
        <h2 className="about-section-label">PRINCIPLES</h2>
        <div className="about-principles-list">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p}
              className="about-principle"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: E, delay: i * 0.06 }}
            >
              {p}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-proof">
        <div className="about-proof-grid">
          {PROOF.map(p => (
            <div key={p.label} className="about-proof-stat">
              <span className="about-proof-val">{p.val}</span>
              <span className="about-proof-label">{p.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-worldwide">
        <div className="about-map" aria-hidden="true">
          <div className="map-line map-line-1" />
          <div className="map-line map-line-2" />
          <div className="map-dot map-dot-india" />
        </div>
        <div className="about-worldwide-content">
          <h2 className="about-worldwide-heading">
            <span>GOOD PEOPLE</span>
            <span>MAKE BETTER WORK.</span>
          </h2>
          <Link to="/contact" className="about-cta">
            WORK WITH KLOVAH <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
