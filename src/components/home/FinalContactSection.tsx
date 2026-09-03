/* eslint-disable @typescript-eslint/no-explicit-any */
function EnvelopePlaceholder() {
  return (
    <div className="final-contact-background" aria-hidden="true">
      {/* Large red envelope (simplified) */}
      <div className="envelope-envelope">
        <div className="envelope-flap" />
        <div className="envelope-body" />
      </div>

      {/* Work-sample placeholders */}
      <div className="envelope-work-samples">
        <div className="sample sample-1" />
        <div className="sample sample-2" />
        <div className="sample sample-3" />
        <div className="sample sample-4" />
      </div>

      {/* Cream paper card that emerges from envelope */}
      <div className="envelope-cream-card" />
    </div>
  );
}

export default function FinalContactSection() {
  return (
    <section
      id="contact"
      className="final-contact-section"
      aria-labelledby="final-contact-heading"
    >
      <EnvelopePlaceholder />

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
