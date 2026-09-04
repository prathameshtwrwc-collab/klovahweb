/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FinalContactSection() {
  return (
    <section
      id="contact"
      className="final-contact-section"
      aria-labelledby="final-contact-heading"
    >
      {/* Desktop background */}
      <div
        className="final-contact-background-image absolute inset-0 pointer-events-none select-none"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/section8bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Mobile background */}
      <div
        className="final-contact-background-image-mobile absolute inset-0 pointer-events-none select-none"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/section8bg-mobile.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Central content (mobile uses normal flow inside this wrapper) */}
      <div className="final-contact-content">
        <h2 id="final-contact-heading" className="final-contact-heading">
          <span className="final-contact-what">WHAT</span>
          <span className="final-contact-question-line">SHOULD WE</span>
          <span className="final-contact-question-line">MAKE NEXT?</span>
        </h2>

        <p className="final-contact-description">
          Tell us the idea. We’ll help make it real.
        </p>

        <a className="final-contact-cta" href="mailto:hello@klovah.com">
          <span>START A CONVERSATION</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* Footer — both rows inside one element with solid cream background */}
      <footer className="final-contact-footer">
        <div className="final-contact-footer-location">
          KLOVAH / INDIA / WORKING WORLDWIDE
        </div>

        <nav
          className="final-contact-footer-links"
          aria-label="Social and contact links"
        >
          <a href="#">INSTAGRAM</a>
          <a href="#">LINKEDIN</a>
          <a href="mailto:hello@klovah.com">EMAIL</a>
        </nav>
      </footer>
    </section>
  );
}
