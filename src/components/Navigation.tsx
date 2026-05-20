"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Characters", href: "/characters" },
  { label: "Endings", href: "/endings" },
  { label: "Theories", href: "/theories" },
  { label: "Walkthroughs", href: "/walkthroughs" },
  { label: "Lore Archive", href: "/lore" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b-2 border-primary-container shadow-[0_4px_0_0_rgba(122,30,30,0.5)] flex justify-between items-center px-4 md:px-16 py-4">
      <Link
        href="/"
        className="font-[Epilogue] text-2xl md:text-4xl font-extrabold text-primary drop-shadow-[2px_2px_0px_#7A1E1E] tracking-tight scale-90 origin-left"
      >
        FREAK CIRCUS HUB
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-[Epilogue] text-base uppercase tracking-widest"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://www.buymeacoffee.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-container text-primary px-6 py-2 border-2 border-primary shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-[JetBrains_Mono] text-xs uppercase"
        >
          Support the Archive
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-primary"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-3xl">
          {mobileOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b-2 border-primary-container p-6 md:hidden flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors font-[Epilogue] text-lg uppercase tracking-widest"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.buymeacoffee.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-container text-primary px-6 py-3 border-2 border-primary shadow-[4px_4px_0px_#000] transition-all font-[JetBrains_Mono] text-xs uppercase text-center mt-2"
          >
            Support the Archive
          </a>
        </div>
      )}
    </nav>
  );
}
