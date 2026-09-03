/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EASE: any = [0.22, 1, 0.36, 1];

function SocialProofBackground({ inView }: { inView: boolean }) {
  const reduce = useReducedMotion() ?? false;

  const panelMotion = (delay: number, x = 0, y = 0, rotate = 0) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, x, y, rotate },
    animate: inView ? { opacity: 1, x: 0, y: 0, rotate } : { opacity: 0, x, y, rotate },
    transition: { duration: reduce ? 0.2 : 0.85, ease: EASE, delay: reduce ? 0 : delay },
  });

  return (
    <div className="sp-collage-root" aria-hidden="true">
      <div className="sp-red-wash" />

      <div className="sp-desktop-collage">
        <div className="sp-arrow-silhouette" />
        <motion.div className="sp-panel sp-panel-cream sp-panel-a" {...panelMotion(0.2, 20, -10, -5)} />
        <motion.div className="sp-panel sp-panel-lavender sp-panel-b" {...panelMotion(0.3, -16, 12, 6)} />
        <motion.div className="sp-panel sp-panel-orange sp-panel-c" {...panelMotion(0.4, 18, 16, -7)} />
        <motion.div className="sp-panel sp-panel-dark-red sp-panel-d" {...panelMotion(0.5, -12, -16, 4)} />
        <motion.div className="sp-portrait sp-portrait-one" {...panelMotion(0.45, 0, 12, 0)} />
        <motion.div className="sp-portrait sp-portrait-two" {...panelMotion(0.55, 0, -10, 0)} />
        <motion.div className="sp-portrait sp-portrait-three" {...panelMotion(0.65, 0, 10, 0)} />
      </div>

      <div className="sp-mobile-collage">
        <div className="sp-mobile-panel sp-mobile-panel-a" />
        <div className="sp-mobile-panel sp-mobile-panel-b" />
        <div className="sp-mobile-panel sp-mobile-panel-c" />
        <div className="sp-mobile-circle sp-mobile-circle-a" />
        <div className="sp-mobile-circle sp-mobile-circle-b" />
      </div>
    </div>
  );
}

export default function SocialProofSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion() ?? false;

  const quoteLine = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: reduce ? 0.2 : 0.78, ease: EASE, delay: reduce ? 0 : delay },
  });

  return (
    <section
      ref={ref}
      className="social-proof-section"
      aria-labelledby="social-proof-heading"
    >
      <div className="social-proof-background" aria-hidden="true">
        <SocialProofBackground inView={inView} />
      </div>

      <div className="social-proof-content">
        <div className="sp-top-row">
          <motion.div
            className="sp-counter"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.65, ease: EASE, delay: reduce ? 0 : 0.1 }}
          >
            7 / 8
          </motion.div>

          <motion.div
            className="sp-top-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.65, ease: EASE, delay: reduce ? 0 : 0.12 }}
          >
            SOCIAL PROOF /
            <br />
            UNIVERSAL REACH
          </motion.div>
        </div>

        <figure className="sp-testimonial-block">
          <blockquote id="social-proof-heading" className="sp-testimonial-quote">
            <span className="sp-quote-mask">
              <motion.span className="sp-quote-line" {...quoteLine(0.2)}>“THEY</motion.span>
            </span>
            <span className="sp-quote-mask">
              <motion.span className="sp-quote-line" {...quoteLine(0.3)}>UNDERSTOOD</motion.span>
            </span>
            <span className="sp-quote-mask sp-desktop-quote-line">
              <motion.span className="sp-quote-line" {...quoteLine(0.4)}>OUR BUSINESS,</motion.span>
            </span>
            <span className="sp-quote-mask sp-mobile-quote-line">
              <motion.span className="sp-quote-line" {...quoteLine(0.4)}>OUR</motion.span>
            </span>
            <span className="sp-quote-mask sp-mobile-quote-line">
              <motion.span className="sp-quote-line" {...quoteLine(0.46)}>BUSINESS,</motion.span>
            </span>
            <span className="sp-quote-mask">
              <motion.span className="sp-quote-line" {...quoteLine(0.5)}>NOT JUST</motion.span>
            </span>
            <span className="sp-quote-mask">
              <motion.span className="sp-quote-line" {...quoteLine(0.6)}>THE BRIEF.”</motion.span>
            </span>
          </blockquote>

          <motion.figcaption
            className="sp-attribution"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: reduce ? 0.2 : 0.7, ease: EASE, delay: reduce ? 0 : 0.75 }}
          >
            CLIENT PARTNER / RETAIL
          </motion.figcaption>
        </figure>

        <div className="sp-mobile-collage-space" aria-hidden="true" />

        <motion.div
          className="sp-right-support"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: reduce ? 0.2 : 0.72, ease: EASE, delay: reduce ? 0 : 0.85 }}
        >
          <p
            className="mobile-people-copy"
            aria-label="Built with people, for people."
          >
            <span>BUILT</span>
            <span>WITH</span>
            <span>PEOPLE,</span>
            <span>FOR</span>
            <span>PEOPLE.</span>
          </p>
          <span aria-hidden="true" />
        </motion.div>
      </div>

      <motion.div
        className="social-proof-stats"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        transition={{ duration: reduce ? 0.2 : 0.8, ease: EASE, delay: reduce ? 0 : 0.95 }}
      >
        <div className="sp-stat sp-stat-launches">
          <span className="sp-stat-number">20+</span>
          <span className="sp-stat-label">LAUNCHES</span>
        </div>
        <div className="sp-stat sp-stat-sector">
          <span>MULTI-SECTOR</span>
        </div>
        <div className="sp-stat sp-stat-global">
          <span>GLOBAL DELIVERY</span>
        </div>
      </motion.div>
    </section>
  );
}