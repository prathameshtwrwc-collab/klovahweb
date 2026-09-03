/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EASE: any = [0.22, 1, 0.36, 1];

export default function IntelligenceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion() ?? false;

  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    transition: { duration: reduce ? 0.3 : 0.85, ease: EASE, delay: reduce ? 0 : delay },
  });

  return (
    <section
      ref={ref}
      id="intelligence"
      className="intelligence-section"
      aria-labelledby="intelligence-heading"
    >
      {/* Desktop background */}
      <div
        className="intelligence-background-image absolute inset-0 pointer-events-none select-none"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/section4bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Mobile background */}
      <div
        className="intelligence-background-image-mobile absolute inset-0 pointer-events-none select-none"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/section4bg-mobile.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* LIVE FOREGROUND: cream content card */}
      <motion.div
        className="intelligence-content-card"
        initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
        transition={{ duration: reduce ? 0.3 : 0.95, ease: EASE, delay: reduce ? 0 : 0.1 }}
      >
        <h2 id="intelligence-heading" className="intelligence-heading">
          <motion.span
            className="less-guessing"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: reduce ? 0.3 : 0.85, ease: EASE, delay: reduce ? 0 : 0.3 }}
          >
            LESS GUESSING.
          </motion.span>
          <motion.span
            className="more-knowing"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: reduce ? 0.3 : 0.85, ease: EASE, delay: reduce ? 0 : 0.4 }}
          >
            MORE KNOWING.
          </motion.span>
        </h2>

        <div className="intelligence-card-divider" aria-hidden="true" />

        <motion.p
          className="intelligence-description"
          {...fade(0.7)}
        >
          Data, automation and AI shaped
          <br />
          around the way you work.
        </motion.p>
      </motion.div>

      {/* LIVE FOREGROUND: bottom process navigation */}
      <div
        className="intelligence-process"
        aria-label="Klovah intelligence process"
      >
        <motion.span
          className="process-line"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: reduce ? 0.3 : 0.9, ease: EASE, delay: reduce ? 0 : 0.85 }}
          style={{ transformOrigin: 'left center' }}
        />
        <div className="process-labels">
          {['UNDERSTAND', 'PREDICT', 'AUTOMATE', 'GROW'].map((label, i) => (
            <motion.span
              key={label}
              {...fade(1.0 + i * 0.1)}
            >
              {label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
