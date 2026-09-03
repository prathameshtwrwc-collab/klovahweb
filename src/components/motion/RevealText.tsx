import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as any;

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'span' | 'div' | 'p';
}

export default function RevealText({ children, delay = 0, className = '', as = 'div' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const Tag = motion[as] as any;

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <Tag
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: '100%' }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: reduce ? 0.2 : 0.55, ease: EASE, delay: reduce ? 0 : Math.min(delay, 0.07) }}
      >
        {children}
      </Tag>
    </div>
  );
}
