/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function ConnectedCapabilitiesSection() {
  const ref = useRef<HTMLElement>(null);
  useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="services"
      className="connected-capabilities-section"
      aria-labelledby="connected-capabilities-heading"
    >
      {/* Desktop background */}
      <div
        className="connected-capabilities-background-image absolute inset-0 pointer-events-none select-none"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/section5bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Mobile background */}
      <div
        className="connected-capabilities-background-image-mobile absolute inset-0 pointer-events-none select-none"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/section5bg-mobile.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

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
