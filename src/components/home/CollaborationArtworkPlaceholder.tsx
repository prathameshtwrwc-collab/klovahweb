/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, type PointerEvent } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

const EASE: any = [0.22, 1, 0.36, 1];

interface PlaceholderProps {
  inView: boolean;
}

export default function CollaborationArtworkPlaceholder({ inView }: PlaceholderProps) {
  const reduce = useReducedMotion() ?? false;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 90 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 90 });

  const driftX1 = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const driftY1 = useTransform(springY, [-0.5, 0.5], [-3, 3]);

  const driftX2 = useTransform(springX, [-0.5, 0.5], [4, -4]);
  const driftY2 = useTransform(springY, [-0.5, 0.5], [3, -3]);

  const driftX3 = useTransform(springX, [-0.5, 0.5], [-3, 3]);
  const driftY3 = useTransform(springY, [-0.5, 0.5], [4, -4]);

  const driftX4 = useTransform(springX, [-0.5, 0.5], [5, -5]);
  const driftY4 = useTransform(springY, [-0.5, 0.5], [-4, 4]);

  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - (rect.left + rect.width / 2)) / Math.max(rect.width, 1));
    mouseY.set((e.clientY - (rect.top + rect.height / 2)) / Math.max(rect.height, 1));
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      className="collab-artwork-container"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-hidden="true"
    >
      {/* Subtle atmospheric gradient washes */}
      <div className="collab-bg-wash-top" />
      <div className="collab-bg-wash-center" />

      {/* DESKTOP ARTWORK */}
      <div className="collab-desktop-art">
        {/* Red connecting cord passing between cards */}
        <div className="collab-cord-svg-wrap">
          <svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            role="presentation"
            focusable="false"
          >
            <motion.path
              d="M 170 230 C 270 140 330 310 420 200 C 500 110 580 320 660 190 C 730 80 810 260 880 390"
              fill="none"
              stroke="#EF2E22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ vectorEffect: 'non-scaling-stroke' }}
              initial={reduce ? { opacity: 0 } : { pathLength: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
            />
          </svg>
        </div>

        {/* 4 Paper Cards across upper half */}
        {/* Card 1 */}
        <motion.div
          className="collab-card collab-card-1"
          style={reduce ? undefined : { x: driftX1, y: driftY1 }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -20, rotate: -3 }}
          animate={inView ? { opacity: 1, y: 0, rotate: -3 } : { opacity: 0, y: -20, rotate: -3 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        >
          <div className="collab-card-inner">
            <div className="card-mock-header">
              <span className="dot dot-red" />
              <span className="dot dot-cream" />
              <span className="dot dot-cream" />
            </div>
            <div className="card-mock-block block-lavender" />
            <div className="card-mock-line line-wide" />
            <div className="card-mock-line line-mid" />
            <div className="card-mock-accent" />
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="collab-card collab-card-2"
          style={reduce ? undefined : { x: driftX2, y: driftY2 }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -24, rotate: 2.5 }}
          animate={inView ? { opacity: 1, y: 0, rotate: 2.5 } : { opacity: 0, y: -24, rotate: 2.5 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.3 }}
        >
          <div className="collab-card-inner">
            <div className="card-mock-header">
              <span className="card-tag">SPRINT 03</span>
            </div>
            <div className="card-wireframe-grid">
              <div className="wf-col wf-col-main" />
              <div className="wf-col wf-col-side" />
            </div>
            <div className="card-mock-line line-short" />
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="collab-card collab-card-3"
          style={reduce ? undefined : { x: driftX3, y: driftY3 }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -20, rotate: -1.5 }}
          animate={inView ? { opacity: 1, y: 0, rotate: -1.5 } : { opacity: 0, y: -20, rotate: -1.5 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
        >
          <div className="collab-card-inner">
            <div className="card-chart-mock">
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
              <span className="bar bar-4" />
            </div>
            <div className="card-mock-line line-wide" />
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="collab-card collab-card-4"
          style={reduce ? undefined : { x: driftX4, y: driftY4 }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -26, rotate: 3.5 }}
          animate={inView ? { opacity: 1, y: 0, rotate: 3.5 } : { opacity: 0, y: -26, rotate: 3.5 }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.5 }}
        >
          <div className="collab-card-inner">
            <div className="card-mock-header">
              <span className="card-pill" />
            </div>
            <div className="card-flow-diagram">
              <div className="flow-node node-a" />
              <div className="flow-connector" />
              <div className="flow-node node-b" />
            </div>
            <div className="card-mock-line line-mid" />
          </div>
        </motion.div>

        {/* Laptop in the lower-right */}
        <motion.div
          className="collab-laptop-wrap"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.6 }}
        >
          <div className="collab-laptop">
            <div className="laptop-screen-frame">
              <div className="laptop-camera" />
              <div className="laptop-display">
                <div className="display-topbar">
                  <div className="display-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="display-title-mock" />
                </div>
                <div className="display-body">
                  <div className="display-sidebar">
                    <span className="sb-line" />
                    <span className="sb-line" />
                    <span className="sb-line" />
                  </div>
                  <div className="display-canvas">
                    <div className="canvas-header-block" />
                    <div className="canvas-grid-blocks">
                      <div className="canvas-b1" />
                      <div className="canvas-b2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base-chassis">
              <div className="laptop-notch" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* MOBILE ARTWORK — 3 overlapping paper cards in shallow fan */}
      <div className="collab-mobile-art">
        <div className="collab-mobile-fan">
          <div className="collab-mcard mcard-1">
            <div className="mcard-inner">
              <div className="card-mock-header">
                <span className="dot dot-red" />
              </div>
              <div className="card-mock-block block-lavender" />
              <div className="card-mock-line line-wide" />
            </div>
          </div>
          <div className="collab-mcard mcard-2">
            <div className="mcard-inner">
              <div className="card-wireframe-grid">
                <div className="wf-col wf-col-main" />
                <div className="wf-col wf-col-side" />
              </div>
              <div className="card-mock-line line-mid" />
            </div>
          </div>
          <div className="collab-mcard mcard-3">
            <div className="mcard-inner">
              <div className="card-chart-mock">
                <span className="bar bar-1" />
                <span className="bar bar-2" />
                <span className="bar bar-3" />
              </div>
              <div className="card-mock-line line-short" />
            </div>
          </div>
        </div>

        {/* Subtle red cord connecting mobile cards */}
        <div className="collab-mobile-cord">
          <svg viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M 30 70 Q 110 20 160 65 T 290 50"
              fill="none"
              stroke="#EF2E22"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
