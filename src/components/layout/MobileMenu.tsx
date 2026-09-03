import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { MOBILE_NAV } from '../../data/navigation';
import { SITE } from '../../data/site';

const EASE = [0.22, 1, 0.36, 1] as any;

interface Props { onClose: () => void; }

export default function MobileMenu({ onClose }: Props) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => closeRef.current?.focus(), 80);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [onClose]);

  return (
    <motion.div
      className="mobile-menu-global"
      initial={reduce ? { opacity: 0 } : { y: '-100%' }}
      animate={reduce ? { opacity: 1 } : { y: '0%' }}
      exit={reduce ? { opacity: 0 } : { y: '-100%' }}
      transition={{ duration: reduce ? 0.15 : 0.4, ease: EASE }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="mm-header">
        <span className="mm-logo">KLOVAH</span>
        <button
          ref={closeRef}
          className="mm-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <span /><span />
        </button>
      </div>

      <nav className="mm-nav" aria-label="Mobile navigation">
        {MOBILE_NAV.map((item, i) => (
          <motion.div
            key={item.href}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: reduce ? 0 : 0.2 + i * 0.06 }}
          >
            <Link to={item.href} className="mm-link" onClick={onClose}>
              <span className="mm-number">{item.number}</span>
              <span className="mm-label">{item.label.toUpperCase()}</span>
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="mm-footer">
        <a href={`mailto:${SITE.email}`} className="mm-email">{SITE.email}</a>
        <div className="mm-social">
          <a href={SITE.social.instagram} target="_blank" rel="noreferrer">INSTAGRAM</a>
          <a href={SITE.social.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
        </div>
      </div>
    </motion.div>
  );
}
