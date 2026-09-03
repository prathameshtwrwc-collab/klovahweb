import { motion } from 'framer-motion';

const EASE: any = [0.22, 1, 0.36, 1];

/**
 * Temporary CSS-only placeholder for the Section 4 background.
 * Will later be replaced with a full-banner image at:
 *   /images/section-04-intelligence-background.webp
 */
export default function IntelligenceArtworkPlaceholder({ inView }: { inView: boolean }) {
  return (
    <div className="intelligence-placeholder" aria-hidden="true">
      {/* warm wash of light from the upper-left */}
      <div className="ip-light-upper" />
      <div className="ip-light-warm" />

      {/* large red & lavender abstract wall-art shape */}
      <div className="ip-wall-art" />

      {/* muted pottery / shelf shapes */}
      <div className="ip-pot ip-pot-1" />
      <div className="ip-pot ip-pot-2" />
      <div className="ip-pot ip-pot-3" />

      {/* simplified person in a red shirt (centre-left) */}
      <div className="ip-person">
        <div className="ip-person-head" />
        <div className="ip-person-shirt" />
        <div className="ip-person-arm ip-person-arm-left" />
        <div className="ip-person-arm ip-person-arm-right" />
        <div className="ip-person-legs" />
      </div>

      {/* wooden table along the bottom */}
      <div className="ip-table" />

      {/* laptop on the lower-right */}
      <div className="ip-laptop">
        <div className="ip-laptop-screen" />
        <div className="ip-laptop-base" />
      </div>

      {/* three coloured information ribbons */}
      <motion.div
        className="ip-ribbon ip-ribbon-yellow"
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
      >
        ORDERS 412
      </motion.div>
      <motion.div
        className="ip-ribbon ip-ribbon-lavender"
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
      >
        CUSTOMERS 1,287
      </motion.div>
      <motion.div
        className="ip-ribbon ip-ribbon-blue"
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
      >
        INVENTORY 869
      </motion.div>

      {/* red "SMARTER DECISIONS" note */}
      <motion.div
        className="ip-note"
        initial={{ opacity: 0, rotate: -8, scale: 0.92 }}
        animate={inView ? { opacity: 1, rotate: -3, scale: 1 } : { opacity: 0, rotate: -8, scale: 0.92 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
      >
        <span className="ip-note-text">SMARTER</span>
        <span className="ip-note-text">DECISIONS</span>
        <svg
          className="ip-note-check"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F7F1E6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="4 12 10 18 20 6" />
        </svg>
      </motion.div>
    </div>
  );
}
