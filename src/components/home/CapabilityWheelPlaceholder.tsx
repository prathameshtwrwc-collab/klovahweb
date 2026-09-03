/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';

const E: any = [0.22, 1, 0.36, 1];

const SEGMENTS = [
  { label: 'Web', color: '#EF2E22' },
  { label: 'Software', color: '#F4EBDD' },
  { label: 'AI', color: '#EF2E22' },
  { label: 'Data', color: '#F4EBDD' },
  { label: 'Apps', color: '#EF2E22' },
  { label: 'Growth', color: '#F4EBDD' },
];

export default function CapabilityWheelPlaceholder({ inView }: { inView: boolean }) {
  return (
    <div className="capability-wheel-placeholder" aria-hidden="true">
      <div className="cw-wall" />
      <div className="cw-wash" />
      <div className="cw-wheel">
        <div className="cw-wheel-inner" />
        {SEGMENTS.map((s, i) => (
          <motion.div
            key={s.label}
            className="cw-ring-segment"
            style={{
              background: s.color,
              transformOrigin: '50% 50%',
              rotate: (i * 60) + 'deg',
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.75, ease: E, delay: 0.2 + i * 0.1 }}
          >
            <span className="cw-ring-label" aria-hidden="true">{s.label}</span>
          </motion.div>
        ))}
        <div className="cw-inner-circle" />
        <div className="cw-pointer" />
      </div>
    </div>
  );
}
