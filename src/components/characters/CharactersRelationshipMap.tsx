"use client";

export default function CharactersRelationshipMap() {
  return (
    <section className="bg-surface-container-lowest py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#7A1E1E" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="px-4 md:px-16 text-center mb-12 relative z-10">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary tracking-tighter uppercase mb-4">
          The Conspiracy Board
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-sm">
          Click and drag character nodes to reveal the hidden red threads of betrayal and obsession.
        </p>
      </div>

      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="relative z-20">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-primary-container p-1">
            <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
              <span className="font-[JetBrains_Mono] text-xs text-primary">THE PLAYER</span>
            </div>
          </div>
        </div>

        <div className="absolute top-16 md:top-20 left-1/4 md:left-1/3 z-20">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-surface border-2 border-primary rotate-12 flex items-center justify-center">
            <span className="font-[JetBrains_Mono] text-[10px] text-primary">PIERROT</span>
          </div>
        </div>

        <div className="absolute bottom-16 md:bottom-20 right-1/4 z-20">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-surface border-2 border-primary -rotate-6 flex items-center justify-center">
            <span className="font-[JetBrains_Mono] text-[10px] text-primary">RINGMASTER</span>
          </div>
        </div>

        <div className="absolute top-[35%] left-[42%] md:left-[45%] bg-primary/20 text-primary font-[JetBrains_Mono] text-[10px] px-2 py-1 italic border border-primary/30 rotate-12 z-30">
          OBSESSION
        </div>
        <div className="absolute bottom-[40%] right-[34%] md:right-[38%] bg-primary/20 text-primary font-[JetBrains_Mono] text-[10px] px-2 py-1 italic border border-primary/30 -rotate-12 z-30">
          BETRAYAL
        </div>
      </div>
    </section>
  );
}
