'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export default function ScrollReveal({ children, className = '', stagger = false, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkVisibility = () => {
      if (el.classList.contains('is-visible')) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Element is visible if its top is within the viewport (with some margin)
      if (rect.top < windowHeight - 20 && rect.bottom > 0) {
        setTimeout(() => {
          el.classList.add('is-visible');
        }, delay);
      }
    };

    // Check immediately after a small delay for hydration
    const initTimer = setTimeout(checkVisibility, 150);

    // Listen for scroll events
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal ${stagger ? 'scroll-reveal-stagger' : ''} ${className}`}>
      {children}
    </div>
  );
}
