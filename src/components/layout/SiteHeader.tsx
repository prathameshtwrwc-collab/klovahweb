import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MAIN_NAV } from '../../data/navigation';
import MobileMenu from './MobileMenu';

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 24;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setScrolled(next);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isDark = ['/', '/about'].includes(pathname) || pathname.startsWith('/cases/');

  return (
    <>
      <motion.header
        className={`site-header-global ${scrolled ? 'site-header-scrolled' : ''} ${isDark ? 'header-on-dark' : ''}`}
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="header-inner">
          <Link to="/" className="header-logo" aria-label="Klovah Home">KLOVAH</Link>

          <nav className="header-nav-desktop" aria-label="Main navigation">
            {MAIN_NAV.map(item => (
              <Link
                key={item.href}
                to={item.href}
                className={`header-nav-link ${pathname === item.href ? 'header-nav-active' : ''}`}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="header-cta-desktop">
            START A PROJECT <span aria-hidden="true">↗</span>
          </Link>

          <button
            className="header-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className="menu-lines">
              <span /><span />
            </span>
            <span className="menu-label">MENU</span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={closeMenu} />}
      </AnimatePresence>
    </>
  );
}
