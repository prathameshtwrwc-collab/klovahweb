import MainHeader from '../navigation/MainHeader';
import HeroArtworkPlaceholder from './HeroArtworkPlaceholder';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section bg-[#F3E6D3]">
      {/* Desktop background — shown only at min-width: 768px */}
      <div
        className="hero-background-image absolute inset-0 pointer-events-none select-none"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/hero-section-01-desktop.png')",
        }}
        aria-hidden="true"
      />

      {/* Mobile background — shown only below 768px */}
      <div
        className="hero-background-image-mobile absolute inset-0 pointer-events-none select-none"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/hero-bg-mobile.png')",
        }}
        aria-hidden="true"
      />

      {/* Background layer — replaceable, behind everything (z 5) */}
      <div
        className="hero-artwork-layer absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 5 }}
        aria-hidden="true"
      >
        <HeroArtworkPlaceholder />
      </div>

      {/* Texture (z 10) */}
      <div
        className="absolute inset-0 pointer-events-none paper-texture"
        style={{ zIndex: 10 }}
        aria-hidden="true"
      />

      {/* Header (z 50) */}
      <MainHeader />

      {/* Headline — one h1, two independently positioned spans, no flex */}
      <h1 className="hero-title">
        <span className="hero-title-ideas">IDEAS,</span>
        <span className="hero-title-real">
          <span>MADE</span> <span>REAL.</span>
        </span>
      </h1>

      {/* Supporting content (z 40) */}
      <div className="hero-supporting-content pointer-events-none">
        <div className="hero-description-backing">
          <p
            className="hero-description font-inter text-[#12100F]"
            style={{
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: 1.35,
              letterSpacing: 'normal',
              width: '285px',
              maxWidth: '100%',
              margin: 0,
            }}
          >
            <span className="block">Digital products for</span>
            <span className="block">ambitious businesses.</span>
          </p>
        </div>

        <a
          href="#contact"
          className="primary-cta pointer-events-auto flex items-center justify-center bg-[#EB351F] text-white font-inter font-bold uppercase hover:bg-[#12100F] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12100F]"
          style={{
            width: 'clamp(260px, 15.7vw, 300px)',
            maxWidth: '300px',
            height: '64px',
            marginTop: '42px',
            padding: 0,
            borderRadius: 0,
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '0.055em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.28)',
          }}
        >
          MAKE SOMETHING
        </a>

        <a
          href="#work"
          className="view-work-link group pointer-events-auto relative inline-flex items-center gap-1.5 font-inter uppercase text-[#12100F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB351F]"
          style={{
            marginTop: '40px',
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            lineHeight: 1,
            zIndex: 40,
          }}
        >
          <span className="relative">
            VIEW WORK
            <span
              className="absolute left-0 -bottom-1 h-px w-full bg-[#12100F] origin-right scale-x-100 transition-transform duration-300 group-hover:scale-x-0"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 -bottom-1 h-px w-full bg-[#12100F] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              aria-hidden="true"
            />
          </span>
          <span
            className="inline-block transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
