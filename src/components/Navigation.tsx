"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Characters", href: "/characters" },
  { label: "Ticket Taker", href: "/ticket-taker" },
  { label: "Walkthroughs", href: "/walkthroughs" },
  { label: "Endings", href: "/endings" },
  { label: "Theories", href: "/theories" },
  { label: "Lore Archive", href: "/lore" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b-2 border-primary-container shadow-[0_4px_0_0_rgba(122,30,30,0.5)] flex justify-between items-center px-4 md:px-16 py-4">
      <Link
        href="/"
        className="flex items-center gap-3 font-[Epilogue] text-2xl md:text-4xl font-extrabold text-primary drop-shadow-[2px_2px_0px_#7A1E1E] tracking-tight scale-90 origin-left"
      >
        <img
          src="/favicon.png"
          alt="Freak Circus Hub"
          className="w-10 h-10 md:w-12 md:h-12 rounded-sm"
        />
        FREAK CIRCUS HUB
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors duration-300 font-[Epilogue] text-base uppercase tracking-widest ${
              isActive(link.href)
                ? "text-primary font-bold"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://freak-circus.com/play-online"
          className="relative group bg-blood text-surface px-7 py-2.5 border-2 border-blood shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-[JetBrains_Mono] text-xs uppercase tracking-widest hover:bg-primary hover:border-primary hover:shadow-[5px_5px_0px_#000]"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-surface rounded-full animate-pulse" />
            <span className="font-bold text-sm">PLAY NOW</span>
          </span>
        </Link>
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
              className={`transition-colors font-[Epilogue] text-lg uppercase tracking-widest ${
                isActive(link.href)
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://freak-circus.com/play-online"
            className="relative group bg-blood text-surface px-6 py-3 border-2 border-blood shadow-[4px_4px_0px_#000] transition-all font-[JetBrains_Mono] text-xs uppercase text-center mt-2 hover:bg-primary hover:border-primary hover:shadow-[5px_5px_0px_#000]"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-surface rounded-full animate-pulse" />
              <span className="font-bold text-sm">PLAY NOW</span>
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
