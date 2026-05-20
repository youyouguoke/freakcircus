"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 flex flex-col md:flex-row overflow-hidden">
      <div className="w-full md:w-1/2 px-4 md:px-16 py-20 z-20 flex flex-col justify-center">
        <h1 className="font-[Creepster] text-7xl md:text-[120px] leading-none text-primary drop-shadow-lg mb-6 -rotate-2">
          YOU STILL DON&apos;T <br /> UNDERSTAND <br /> THE ENDING
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-md mb-8 border-l-4 border-primary-container pl-6 italic">
          Beyond the final credits lies a labyrinth of hidden dialogue and secret
          choices. The Pierrot isn&apos;t just a character; he&apos;s the architect
          of your failure.
        </p>
        <div className="flex flex-wrap gap-6">
          <Link
            href="/endings"
            className="px-8 py-4 bg-blood-bright text-white font-[Epilogue] font-semibold uppercase tracking-tighter shadow-[0_0_20px_rgba(192,57,43,0.5)] hover:shadow-[0_0_40px_rgba(192,57,43,0.8)] transition-all transform -skew-x-6 border-2 border-white/20"
          >
            Explore Every Ending
          </Link>
          <Link
            href="/theories"
            className="px-8 py-4 border-2 border-on-surface-variant text-on-surface-variant font-[Epilogue] font-semibold uppercase tracking-tighter hover:bg-on-surface-variant/10 transition-all"
          >
            Read the Pierrot Theory
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative min-h-[500px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-60 scale-110 grayscale brightness-50"
            alt="A distorted Victorian circus tent silhouette emerging from dark fog, with glowing jester mask motifs connected by red strings"
            src="/Hero.png"
          />
          <div className="vhs-scanlines absolute inset-0" />
        </div>

        {/* Floating Polaroid */}
        <div className="absolute top-1/4 right-10 w-64 h-80 bg-surface-container-highest border-2 border-primary-container shadow-xl rotate-3 p-2 group hover:rotate-0 transition-transform cursor-pointer hidden md:block">
          <div className="relative h-full overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale"
              alt="A cracked ceramic theatrical mask with smeared red paint"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr9h0D4qx9QZVZvGrutq0ClEjeknp_IHOoA_4YY4o0_JtPzGo8clq1qd4CaUz0VKD5W5Om8xyl2X4Dzt0ogVP8RzmHJPeYEAVZH_I1O2zmuzHwYJRJIXYTkJyEE9XG317FNNUmu34AuTbOZ37iC5gDU6E20bda_gA3y-dC7beignvgXjBsILTN3WqI5Umr9TyJRKQGR3IxvbYY2sAKXiLCXcsrwLZHf35FX8LbN2zlLyur9XNi9dx6x5n2mcBhnGTCPp6BUGuVuc"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
              <span className="material-symbols-outlined text-6xl text-white drop-shadow-lg">
                play_circle
              </span>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-primary text-black font-[JetBrains_Mono] px-2 py-1 rotate-12 text-xs">
            PLAY DEMO
          </div>
        </div>
      </div>

      {/* Torn Paper Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-cream torn-edge z-30" />
    </section>
  );
}
