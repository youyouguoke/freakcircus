'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  CHARACTERS_COUNT,
  ENDINGS_CONFIRMED,
  ENDINGS_PLANNED,
  PLAYTIME_VALUE,
  currentBuildSummary,
} from '@/lib/site-facts';

const stats = [
  { value: String(CHARACTERS_COUNT), label: 'CONFIRMED CHARACTERS' },
  { value: String(ENDINGS_CONFIRMED), label: 'CONFIRMED ENDING' },
  { value: String(ENDINGS_PLANNED), label: 'PLANNED ENDINGS' },
  { value: PLAYTIME_VALUE, label: 'EST. PLAYTIME (Day 1+2)' },
];

export default function HomeHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero.png"
          alt=""
          className="w-full h-full object-cover object-top opacity-40 img-cinematic animate-breathe"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/70 to-void-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/30" />
        <div className="absolute inset-0 vhs-scanlines opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 md:px-12 py-32 md:py-40">
        <div className="max-w-2xl">
          <div
            className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="font-label text-circus-red mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-circus-red" />
              CLASSIFIED DOCUMENT
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <h1 className="font-archive text-5xl md:text-7xl lg:text-8xl text-paper leading-[0.9] mb-2">
              THE FREAK CIRCUS
              <br />
              <span className="text-circus-red">GUIDE &amp; EVIDENCE ARCHIVE</span>
            </h1>
            <p className="font-label text-muted-paper mt-4 tracking-[0.25em]">FREAK CIRCUS HUB</p>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <p className="font-label text-muted-paper mt-6 mb-2 tracking-[0.2em]">
              THE UNOFFICIAL ARCHIVE
            </p>
            <p className="text-faint-paper text-sm md:text-base max-w-lg leading-relaxed mb-8">
              A fact-checked guide and evidence archive for characters, walkthroughs, endings, lore,
              and community theories — with confirmed and unverified information clearly separated.
              <br />
              <span className="text-muted-paper">{currentBuildSummary()}</span>
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
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

        <div
          className={`mt-16 transition-all duration-1000 delay-[900ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-slow" style={{ animationDelay: '1.5s' }}>
        <span className="font-label text-dim-paper text-[0.55rem] tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-dim-paper to-transparent" />
      </div>
    </section>
  );
}
