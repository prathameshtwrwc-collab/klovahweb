/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import CollaborationArtworkPlaceholder from './CollaborationArtworkPlaceholder';

const EASE: any = [0.22, 1, 0.36, 1];

export default function CollaborationSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion() ?? false;

  const fadeUp = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    transition: { duration: reduce ? 0.3 : 0.85, ease: EASE, delay: reduce ? 0 : delay },
  });

  return (
    <section
      ref={ref}
      id="process"
      className="collaboration-section"
      aria-labelledby="collaboration-heading"
    >
      {/* 1. Temporary replaceable artwork layer (z-index: 1, pointer-events: none) */}
      <div className="collaboration-background" aria-hidden="true">
        <CollaborationArtworkPlaceholder inView={inView} />
      </div>

      {/* 2. Live foreground content (z-index: 5+) */}
      <div className="collaboration-content">
        {/* Top Metadata Row */}
        <motion.div
          className="collaboration-meta-row"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <span className="collaboration-meta-label">
            6 OF 8 — PROCESS / COLLABORATION
          </span>
          <div className="collaboration-meta-line" aria-hidden="true">
            <span className="meta-line-bar" />
            <svg
              className="meta-arrowhead"
              viewBox="0 0 8 12"
              fill="none"
              stroke="#0B0A09"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="2 2 6 6 2 10" />
            </svg>
          </div>
        </motion.div>

        {/* Mobile-only separator rule underneath the meta label */}
        <div className="collaboration-mobile-meta-divider" aria-hidden="true" />

        {/* Main headline + divider + supporting copy group in lower-left */}
        <div className="collaboration-headline-group">
          <h2 id="collaboration-heading" className="collaboration-heading">
            <span className="collab-heading-mask">
              <motion.span
                className="collaboration-heading-line"
                {...fadeUp(0.25)}
              >
                CLOSE
              </motion.span>
            </span>
            <span className="collab-heading-mask">
              <motion.span
                className="collaboration-heading-line"
                {...fadeUp(0.35)}
              >
                COLLABORATION.
              </motion.span>
            </span>
            <span className="collab-heading-mask">
              <motion.span
                className="collaboration-heading-line"
                {...fadeUp(0.45)}
              >
                NO BLACK BOX.
              </motion.span>
            </span>
          </h2>

          <motion.div
            className="collaboration-divider"
            initial={reduce ? { opacity: 0 } : { scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: reduce ? 0.3 : 0.8, ease: EASE, delay: reduce ? 0 : 0.6 }}
            style={{ transformOrigin: 'left center' }}
            aria-hidden="true"
          />

          <motion.p
            className="collaboration-description"
            {...fadeUp(0.7)}
          >
            You see the work. You shape the work.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
