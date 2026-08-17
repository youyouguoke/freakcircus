'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const stats = [
  { value: '6', label: 'SUBJECTS' },
  { value: '11', label: 'ENDINGS' },
  { value: '14', label: 'TOTAL ENDINGS' },
  { value: '40+', label: 'HOURS CONTENT' },
];

export default function HomeHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — character image with cinematic treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero.png"
          alt=""
          className="w-full h-full object-cover object-top opacity-40 img-cinematic animate-breathe"
          aria-hidden="true"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/70 to-void-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/30" />
        {/* Scanline effect */}
        <div className="absolute inset-0 vhs-scanlines opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 md:px-12 py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Archive stamp */}
          <div
            className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="font-label text-circus-red mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-circus-red" />
              CLASSIFIED DOCUMENT
            </div>
          </div>

          {/* Main title */}
          <div
            className={`transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <h1 className="font-archive text-5xl md:text-7xl lg:text-8xl text-paper leading-[0.9] mb-2">
              FREAK
              <br />
              CIRCUS
              <br />
              <span className="text-circus-red">HUB</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <p className="font-label text-muted-paper mt-6 mb-2 tracking-[0.2em]">
              THE UNOFFICIAL ARCHIVE
            </p>
            <p className="text-faint-paper text-sm md:text-base max-w-lg leading-relaxed mb-8">
              Every route mapped. Every ending documented. Every theory catalogued.
              <br />
              <span className="text-muted-paper">Every route hides another story.</span>
            </p>
          </div>

          {/* Corrupted entry */}
          <div
            className={`transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="bg-archive-black/80 border border-circus-red/20 p-4 mb-10 max-w-md backdrop-blur-sm">
              <div className="font-label text-circus-red text-[0.6rem] mb-1">CORRUPTED_ENTRY</div>
              <p className="text-muted-paper text-sm italic">
                &ldquo;The Doctor appears before his route unlocks.&rdquo;
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div
            className={`transition-all duration-1000 delay-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="flex flex-wrap gap-4">
              <Link href="/characters" className="btn-archive btn-archive--filled">
                ENTER THE ARCHIVE
              </Link>
              <Link href="/walkthroughs" className="btn-archive btn-archive--ghost">
                ROUTE GUIDE
              </Link>
            </div>
          </div>
        </div>

        {/* Stats — bottom */}
        <div
          className={`mt-16 transition-all duration-1000 delay-[1100ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border max-w-xl">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-void-black p-4 md:p-5">
                <div className="font-horror text-2xl md:text-3xl text-paper mb-1">
                  {stat.value}
                </div>
                <div className="font-label text-faint-paper text-[0.6rem]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-slow" style={{ animationDelay: '1.5s' }}>
        <span className="font-label text-dim-paper text-[0.55rem] tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-dim-paper to-transparent" />
      </div>
    </section>
  );
}
