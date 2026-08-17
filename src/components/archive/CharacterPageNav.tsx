'use client';

import { useEffect, useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface CharacterPageNavProps {
  items: NavItem[];
  accentColor?: string;
}

export default function CharacterPageNav({ items, accentColor = 'var(--circus-red)' }: CharacterPageNavProps) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    items.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky-char-nav md:hidden">
      <div className="flex">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={active === item.href ? 'active' : ''}
            style={active === item.href ? { borderBottomColor: accentColor } : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
