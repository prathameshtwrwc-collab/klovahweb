import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EASE: any = [0.22, 1, 0.36, 1];

const FRAGMENTS = [
  { cls: 'statement-we-turn', text: 'WE TURN' },
  { cls: 'statement-ambition', text: 'AMBITION' },
  { cls: 'statement-into', text: 'INTO' },
  { cls: 'statement-something', text: 'SOMETHING' },
  { cls: 'statement-people', text: 'PEOPLE' },
  { cls: 'statement-can-use', text: 'CAN USE.' },
];

export default function ValueStatementSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      ref={ref}
      id="capabilities"
      className="value-statement-section"
      aria-labelledby="value-statement-heading"
    >
      {/* Desktop background */}
      <div
        className="value-background-image absolute inset-0 pointer-events-none select-none"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/section2bg.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Mobile background */}
      <div
        className="value-background-image-mobile absolute inset-0 pointer-events-none select-none"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/section2bg-mobile.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center clamp(50px, 8svh, 78px)",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Cable mask — hides the thin vertical black cable above the sphere */}
      <div className="value-cable-mask" aria-hidden="true" />

      {/* Blue routing lines — single responsive SVG overlay */}
      <div className="section-two-lines" aria-hidden="true">
        <svg
          viewBox="0 0 1825 862"
          preserveAspectRatio="none"
          role="presentation"
          focusable="false"
        >
          <g className="desktop-routes">
            <motion.path
              className="route-first"
              d="M 0 293 H 610 Q 635 293 635 318 V 437 Q 635 462 660 462 H 950"
              initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 1 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 1 }}
              transition={{ duration: reduce ? 0.2 : 1.2, ease: EASE, delay: 0.1 }}
            />
            <motion.path
              className="route-second"
              d="M 980 610 H 1450"
              initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 1 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 1 }}
              transition={{ duration: reduce ? 0.2 : 1.1, ease: EASE, delay: 0.55 }}
            />
          </g>
          <g className="mobile-routes">
            <motion.path
              className="route-first"
              d="M 0 420 H 850 Q 875 420 875 445 V 500 Q 875 525 900 525 H 1050"
              initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 1 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 1 }}
              transition={{ duration: reduce ? 0.2 : 1.2, ease: EASE, delay: 0.1 }}
            />
            <motion.path
              className="route-second"
              d="M 1100 720 H 1500"
              initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 1 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 1 }}
              transition={{ duration: reduce ? 0.2 : 1.1, ease: EASE, delay: 0.55 }}
            />
          </g>
        </svg>
      </div>

      {/* ---------- temporary artwork placeholders ---------- */}
      <div className="value-artwork-layer" aria-hidden="true">
        <div className="chrome-sphere-placeholder" />
        <div className="red-chair-placeholder" />
      </div>

      {/* ---------- top meta ---------- */}
      <motion.div
        className="meta-category value-meta-label"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
      >
        STRATEGY <span className="meta-slash">/</span> DESIGN{' '}
        <span className="meta-slash">/</span> TECHNOLOGY
      </motion.div>

      <motion.div
        className="meta-counter value-counter"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
      >
        <span className="counter-blue">2</span> / 8
      </motion.div>

      {/* ---------- main statement ---------- */}
      <h2 id="value-statement-heading" className="value-statement-heading">
        {FRAGMENTS.map((f, i) => (
          <div key={f.cls} className={`statement-reveal-wrapper ${f.cls}`}>
            <motion.span
              className="statement-reveal-inner"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: reduce ? 0.25 : 0.85, ease: EASE, delay: reduce ? 0 : 0.12 + i * 0.1 }}
            >
              <span className="statement-line">{f.text}</span>
            </motion.span>
          </div>
        ))}
      </h2>

      {/* ---------- progress indicator ---------- */}
      <motion.div
        className="value-progress"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
        aria-hidden="true"
      >
        <span className="progress-label">84%</span>
        <div className="progress-rail">
          <motion.div
            className="progress-fill"
            initial={{ width: reduce ? '72%' : '0%' }}
            animate={inView ? { width: '72%' } : { width: '0%' }}
            transition={{ duration: reduce ? 0 : 1.1, ease: EASE, delay: 0.75 }}
          />
        </div>
      </motion.div>

      {/* ---------- supporting line ---------- */}
      <motion.p
        className="value-supporting-line"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
      >
        One partner from first sketch to scale.
      </motion.p>
    </section>
  );
}
