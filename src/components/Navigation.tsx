'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Archive', href: '/' },
  { label: 'Characters', href: '/characters' },
  { label: 'Walkthroughs', href: '/walkthroughs' },
  { label: 'Endings', href: '/endings' },
  { label: 'Theories', href: '/theories' },
  { label: 'Lore', href: '/lore' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav className="nav-archive fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-12 py-3">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2.5 group"
      >
        <img
          src="/favicon.png"
          alt="Freak Circus Hub"
          className="w-8 h-8 md:w-9 md:h-9 opacity-90 group-hover:opacity-100 transition-opacity"
        />
        <div className="flex flex-col">
          <span className="font-archive text-xs md:text-sm text-paper tracking-[0.2em] leading-none">
            FREAK CIRCUS
          </span>
          <span className="font-label text-circus-red text-[0.55rem] tracking-[0.3em]">
            THE FORBIDDEN ARCHIVE
          </span>
        </div>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${isActive(link.href) ? 'nav-link--active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://freak-circus.com/play-online"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-archive text-[0.65rem] py-2 px-4"
        >
          <span className="inline-block w-1.5 h-1.5 bg-status-confirmed rounded-full animate-pulse-slow" />
          PLAY
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-muted-paper hover:text-paper transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-2xl">
          {mobileOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full right-0 w-64 bg-archive-black border border-dark-border border-t-0 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-sm ${isActive(link.href) ? 'nav-link--active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-dark-border my-2" />
          <a
            href="https://freak-circus.com/play-online"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-archive text-center text-[0.65rem] py-2"
          >
            PLAY ON ITCH.IO ↗
          </a>
        </div>
      )}
    </nav>
  );
}
