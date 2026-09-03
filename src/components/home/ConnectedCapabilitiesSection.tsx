/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import CapabilityWheelPlaceholder from './CapabilityWheelPlaceholder';

export default function ConnectedCapabilitiesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="services"
      className="connected-capabilities-section"
      aria-labelledby="connected-capabilities-heading"
    >
      {/* Replaceable artwork layer */}
      <div className="connected-artwork" aria-hidden="true">
        <CapabilityWheelPlaceholder inView={inView} />
      </div>

      {/* Live foreground layer */}
      <div className="connected-capabilities-foreground">
        <h2
          id="connected-capabilities-heading"
          className="connected-capabilities-heading"
        >
          <span className="connected-word everything-word">EVERYTHING</span>
          <span className="connected-word connects-word">CONNECTS.</span>
        </h2>

        <div className="connected-copy">
          <div className="connected-copy-divider" aria-hidden="true" />
          <p className="connected-copy-text">
            Built together.
            <br />
            Built to perform.
          </p>
        </div>
      </div>
    </section>
  );
}
