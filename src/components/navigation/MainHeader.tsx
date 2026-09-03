import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const EASE: any = [0.22, 1, 0.36, 1];

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'About', href: '#about' },
];

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reduce = useReducedMotion();

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  /* Lock body scroll while open, Escape to close, focus trap */
  useEffect(() => {
    if (!isOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const focusables = () =>
      Array.from(
        overlayRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        ) ?? []
      );

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== 'Tab') return;

      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && (active === first || !overlayRef.current?.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const t = window.setTimeout(() => closeButtonRef.current?.focus(), 60);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      window.clearTimeout(t);
    };
  }, [isOpen, closeMenu]);

  /* Return focus to the MENU button after closing */
  const handleExitComplete = () => openButtonRef.current?.focus();

  return (
    <header
      className="site-header main-header absolute top-0 left-0 w-full z-50 bg-transparent border-none"
      style={{ boxSizing: 'border-box' }}
    >
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: reduce ? 0 : 0.15 }}
        className="max-w-[1920px] mx-auto flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="/"
          className="logo font-inter uppercase text-[#12100F] z-[110]"
          style={{
            fontSize: '30px',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '0.035em',
          }}
        >
          KLOVAH
        </a>

        {/* Desktop Navigation */}
        <nav className="navigation hidden md:flex items-center gap-0 z-[110]">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <a
                href={link.href}
                className="group relative font-inter text-[#12100F] px-4 py-2 transition-opacity duration-300 hover:opacity-60"
                style={{ fontSize: '18px', fontWeight: 500 }}
              >
                {link.name}
                <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-[#12100F] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
              {index < navLinks.length - 1 && (
                <div className="w-[1px] h-4 bg-[#12100F]/20" />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Mobile MENU control (closed state — approved, unchanged) */}
        <button
          ref={openButtonRef}
          type="button"
          onClick={() => setIsOpen(true)}
          className="mobile-menu md:hidden z-[110] flex items-center gap-2 font-inter font-bold text-[#12100F] uppercase tracking-widest text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB351F]"
          aria-expanded={isOpen}
          aria-controls="mobile-menu-overlay"
          aria-label="Open navigation menu"
        >
          <span className="relative w-6 h-4 flex flex-col justify-between">
            <span className="w-full h-[2px] bg-[#12100F]" />
            <span className="w-full h-[2px] bg-[#12100F]" />
          </span>
          <span>MENU</span>
        </button>
      </motion.div>

      {/* ---------- FULL-SCREEN MOBILE MENU OVERLAY ---------- */}
      <AnimatePresence onExitComplete={handleExitComplete}>
        {isOpen && (
          <motion.div
            id="mobile-menu-overlay"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="mobile-menu-overlay md:hidden"
            initial={reduce ? { opacity: 0 } : { y: '-100%' }}
            animate={reduce ? { opacity: 1 } : { y: '0%' }}
            exit={reduce ? { opacity: 0 } : { y: '-100%' }}
            transition={{ duration: reduce ? 0.2 : 0.55, ease: EASE }}
          >
            {/* Menu header */}
            <div className="mobile-menu-header">
              <span className="mobile-menu-logo">KLOVAH</span>
            </div>

            {/* Close button — independently positioned upper right */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="mobile-menu-close"
              aria-label="Close navigation menu"
            >
              <span />
              <span />
            </button>

            {/* Navigation links */}
            <nav className="mobile-menu-nav" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{
                    duration: reduce ? 0.2 : 0.5,
                    ease: EASE,
                    delay: reduce ? 0 : 0.25 + i * 0.07,
                  }}
                >
                  <span>{link.name.toUpperCase()}</span>
                  <span aria-hidden="true" className="mobile-menu-arrow">↗</span>
                </motion.a>
              ))}
            </nav>

            {/* Restrained campaign-red decoration */}
            <div className="mobile-menu-deco" aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MainHeader;
