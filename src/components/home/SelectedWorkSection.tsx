/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, useCallback, type PointerEvent } from 'react';
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import GalleryRoomPlaceholder from './GalleryRoomPlaceholder';

const EASE: any = [0.22, 1, 0.36, 1];

type Case = {
  id: string;
  title: string;
  metric: string;
  result: string;
  href: string;
  panelKey: 'commerce' | 'healthcare' | 'industrial';
};

const caseStudies: Case[] = [
  {
    id: 'commerce-growth',
    title: 'Commerce Growth',
    metric: '2.4×',
    result: 'SALES',
    href: '#commerce-growth',
    panelKey: 'commerce',
  },
  {
    id: 'healthcare-platform',
    title: 'Healthcare Platform',
    metric: '61%',
    result: 'FASTER',
    href: '#healthcare-platform',
    panelKey: 'healthcare',
  },
  {
    id: 'industrial-intelligence',
    title: 'Industrial Intelligence',
    metric: 'LIVE IN',
    result: '12 WEEKS',
    href: '#industrial-intelligence',
    panelKey: 'industrial',
  },
];

/* ---------- Placeholder collage for each hanging panel ---------- */
function PanelCollage({ variant }: { variant: Case['panelKey'] }) {
  if (variant === 'commerce') {
    return (
      <div className="panel-collage panel-collage-commerce" aria-hidden="true">
        <div className="pc-backdrop" />
        <div className="pc-light" />
        <div className="pc-plinth pc-plinth-left" />
        <div className="pc-plinth pc-plinth-right" />
        <div className="pc-bottle pc-bottle-tall" />
        <div className="pc-bottle pc-bottle-short" />
        <div className="pc-flower">
          <span className="petal" />
          <span className="petal" />
          <span className="petal" />
          <span className="petal" />
          <span className="petal" />
        </div>
        <div className="pc-cylinder" />
        <div className="pc-paper-tear" />
      </div>
    );
  }
  if (variant === 'healthcare') {
    return (
      <div className="panel-collage panel-collage-healthcare" aria-hidden="true">
        <div className="pc-backdrop" />
        <div className="pc-light" />
        <div className="pc-stone pc-stone-a" />
        <div className="pc-stone pc-stone-b" />
        <div className="pc-phone">
          <div className="pc-phone-screen">
            <div className="pc-ui-block pc-ui-a" />
            <div className="pc-ui-block pc-ui-b" />
            <div className="pc-ui-block pc-ui-c" />
          </div>
        </div>
        <div className="pc-wellness-ring">
          <div className="pc-wellness-inner" />
        </div>
      </div>
    );
  }
  return (
    <div className="panel-collage panel-collage-industrial" aria-hidden="true">
      <div className="pc-backdrop" />
      <div className="pc-light" />
      <div className="pc-tower" />
      <div className="pc-tower-cap" />
      <div className="pc-plant pc-plant-a" />
      <div className="pc-plant pc-plant-b" />
      <div className="pc-plant pc-plant-c" />
      <div className="pc-tablet">
        <svg viewBox="0 0 100 60" preserveAspectRatio="none">
          <path
            d="M 6 46 L 22 34 L 36 40 L 54 22 L 72 30 L 92 14"
            fill="none"
            stroke="#F1CE3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}

/* ---------- Parallax wrapper for hanging panels (desktop only) ---------- */
function ParallaxPanel({
  children,
  intensity = 1,
  reduce,
}: {
  children: React.ReactNode;
  intensity?: number;
  reduce: boolean;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 22, stiffness: 90 });
  const sy = useSpring(my, { damping: 22, stiffness: 90 });
  const rotate = useTransform(sx, [-0.5, 0.5], [-0.25 * intensity, 0.25 * intensity]);
  const tx = useTransform(sx, [-0.5, 0.5], [-3 * intensity, 3 * intensity]);
  const ty = useTransform(sy, [-0.5, 0.5], [-3 * intensity, 3 * intensity]);
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) / Math.max(r.width, 1));
    my.set((e.clientY - (r.top + r.height / 2)) / Math.max(r.height, 1));
  };

  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="panel-parallax"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={reduce ? undefined : { rotate, x: tx, y: ty }}
    >
      {children}
    </motion.div>
  );
}

export default function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const reduce = useReducedMotion() ?? false;

  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = useCallback(() => {
    const el = galleryRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    let closest = 0;
    let closestDist = Infinity;
    const centre = el.scrollLeft + el.clientWidth / 2;
    children.forEach((child, i) => {
      const c = child.offsetLeft + child.offsetWidth / 2;
      const d = Math.abs(c - centre);
      if (d < closestDist) {
        closestDist = d;
        closest = i;
      }
    });
    setActiveIndex(closest);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="selected-work-section"
      aria-labelledby="selected-work-heading"
    >
      {/* Desktop background image */}
      <div
        className="selected-work-background-image absolute inset-0 pointer-events-none select-none"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/section3bg.png')",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* ------- Replaceable artwork (room + rail) ------- */}
      <div className="selected-work-artwork" aria-hidden="true">
        <GalleryRoomPlaceholder inView={inView} />
      </div>

      {/* ------- Foreground (above replaceable artwork) ------- */}
      <div className="selected-work-foreground">
        {/* Editorial heading — three independently positioned spans (static, no animation) */}
        <h2 id="selected-work-heading" className="selected-work-heading">
          <span className="work-heading-line-one">WORK THAT</span>
          <span className="work-heading-serif">MOVES</span>
          <span className="work-heading-line-three">THE NUMBER.</span>
        </h2>

        {/* Selected outcomes row (label + thin rule) */}
        <motion.div
          className="selected-outcomes-row"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
        >
          <span className="selected-outcomes-label">SELECTED OUTCOMES</span>
          <span className="selected-outcomes-rule" aria-hidden="true" />
        </motion.div>

        {/* See the cases link — underline only under the text */}
        <motion.a
          href="#case-studies"
          className="see-cases-link"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.95 }}
        >
          <span className="see-cases-text">SEE THE CASES</span>
          <span className="see-cases-arrow" aria-hidden="true">→</span>
        </motion.a>
      </div>

      {/* ------- Mobile compact meta row ------- */}
      <div className="mobile-meta-row">
        <span className="mobile-outcomes-label">SELECTED OUTCOMES</span>
        <a href="#case-studies" className="mobile-cases-link">
          <span className="mcl-text">SEE THE CASES</span>
          <span className="mcl-arrow" aria-hidden="true">→</span>
        </a>
      </div>

      {/* ------- Desktop hanging panels ------- */}
      <div className="desktop-panels" aria-hidden="false">
        {caseStudies.map((c, i) => (
          <motion.div
            key={c.id}
            className={`hanging-panel hanging-panel-${c.panelKey}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
            transition={{
              duration: reduce ? 0.4 : 0.95,
              ease: EASE,
              delay: reduce ? 0 : 0.55 + i * 0.15,
            }}
          >
            <ParallaxPanel intensity={1 - i * 0.15} reduce={reduce}>
              <a
                href={c.href}
                className="panel-link"
                aria-label={`View ${c.title} case study`}
              >
                <PanelCollage variant={c.panelKey} />
                <span className="panel-edge" aria-hidden="true" />
                <span className="panel-floor-shadow" aria-hidden="true" />
                <span className="panel-clamps" aria-hidden="true">
                  <span />
                  <span />
                </span>
              </a>
            </ParallaxPanel>

            {/* Outcome numbers */}
            <div className={`panel-outcome panel-outcome-${c.panelKey}`}>
              <motion.span
                className="outcome-metric"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{
                  duration: reduce ? 0.4 : 0.85,
                  ease: EASE,
                  delay: reduce ? 0 : 1.1 + i * 0.15,
                }}
              >
                {c.metric}
              </motion.span>
              <motion.span
                className="outcome-result"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{
                  duration: reduce ? 0.4 : 0.85,
                  ease: EASE,
                  delay: reduce ? 0 : 1.2 + i * 0.15,
                }}
              >
                {c.result}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ------- Mobile horizontal gallery ------- */}
      <div className="mobile-case-gallery-wrapper">
        <div
          className="mobile-case-gallery"
          ref={galleryRef}
          onScroll={onScroll}
          role="list"
        >
          {caseStudies.map((c) => (
            <a
              key={c.id}
              href={c.href}
              className={`mobile-case-card mobile-case-card-${c.panelKey}`}
              role="listitem"
              aria-label={`View ${c.title} case study`}
            >
              <img
                src={
                  c.panelKey === 'commerce'
                    ? '/images/hanging-card1.png'
                    : c.panelKey === 'healthcare'
                      ? '/images/hanging-card2.png'
                      : '/images/hanging-card3.png'
                }
                alt=""
                className="mobile-case-card-image"
                aria-hidden="true"
              />
              <div className={`mobile-outcome mobile-outcome-${c.panelKey}`}>
                <span className="outcome-metric">{c.metric}</span>
                <span className="outcome-result">{c.result}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mobile-gallery-index" aria-hidden="true">
          <span>{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="idx-dash">—</span>
          <span>{String(caseStudies.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}
