/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';

const EASE: any = [0.22, 1, 0.36, 1];

/**
 * Purely decorative CSS-only gallery room used as a temporary placeholder.
 * Will later be replaced by a single background image:
 *   /images/section-03-gallery-background.webp
 */
export default function GalleryRoomPlaceholder({ inView }: { inView: boolean }) {
  return (
    <div className="gallery-room-placeholder" aria-hidden="true">
      {/* wall lighting */}
      <div className="room-light-upper-left" />
      <div className="room-light-warm-wash" />
      <div className="room-plaster-noise" />

      {/* floor */}
      <div className="room-floor" />
      <div className="room-floor-line" />

      {/* architectural accents */}
      <div className="room-accent-yellow" />
      <div className="room-accent-red" />

      {/* diagonal ceiling rail */}
      <div className="rail-wrapper">
        <motion.div
          className="rail-line"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.35 }}
          style={{ transformOrigin: 'left center' }}
        >
          <span className="rail-underside" />
        </motion.div>
      </div>
    </div>
  );
}
