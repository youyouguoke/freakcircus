export default function RelationshipMap() {
  return (
    <section className="bg-surface-container-lowest py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#7A1E1E"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="px-4 md:px-16 text-center mb-16 md:mb-20 relative z-10">
        <h2 className="font-[Epilogue] text-3xl md:text-5xl font-bold text-primary tracking-tighter uppercase mb-4">
          The Conspiracy Board
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Explore the hidden red threads of betrayal and obsession connecting
          every character.
        </p>
      </div>

      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
        {/* Central Node */}
        <div className="relative z-20 group">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary-container p-1 animate-pulse">
            <img
              className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="A single eye reflected in cracked glass"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQjB9vgc3BOmMPSwnA7bTMTbP8gJXSrz9q8RUbzTB49cwUTvNIuANr3121MC4dWunJ7fwA6vvRP54jfdTI4uP9_5WCxl5P_uKNFI4WTMT2lVDDRk_Mw9jAoj32fDiC4RTjd_qdWg7pGsQOdk6Vfnc7j780BlTVUOhgLic7NsaIhvk4z9KmBAqXm8lL-6kNnUR0ffe-83lVi4iQMipqJeRn4Msfs7fP8eGWu_vxgGZgCWAJLTwaWBwDP5K4hOSYq1Bke6cMcAtamTg"
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary text-black font-[JetBrains_Mono] px-3 py-1 font-bold text-xs">
            THE PLAYER
          </div>
        </div>

        {/* Surrounding Nodes */}
        <div className="absolute top-16 md:top-20 left-1/4 md:left-1/3 z-20 hover:scale-110 transition-transform cursor-pointer">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-surface border-2 border-primary rotate-12 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale"
              alt="Distorted clown portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOZkQzJvfNlRSE96t35D9bdp8-rJVIibJxscBbT6v98NQd9qGwZDTYEbjkK-uf0Ccu9C6yXuwB5k_yvb3JLPgXqRTZ9Wpfux2JGjCOyKo-4wcbuV6ekhDRRszXSwo5lCxkFdD1aPhfR-oYpMC2MmE4Bnl7BsB7JfSZ_FX3OW_UTloNhc8nxEqAUP__anL6er9G1TTSq0HHqeWGp3A9oTo-sHVHuct_gVffucYeHV839Z4Re_gDBVkOeYPvEUIyroqxWlawT5mSOzs"
            />
          </div>
          <div className="bg-blood text-white text-[10px] p-1 font-[JetBrains_Mono] text-center -mt-2">
            PIERROT
          </div>
        </div>

        <div className="absolute bottom-16 md:bottom-20 right-1/4 z-20 hover:scale-110 transition-transform cursor-pointer">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-surface border-2 border-primary -rotate-6 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale"
              alt="Silhouette in fog"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW90Yhw-LrsaM8jpVoWDZQPhMucUjBmaVhVXzBkrI5se3o7P3aZhc_lDYyTd9hdbL8ow19p01RsyRgpCmpZ_wRPmLGT4VLJS0jp6k9KJ3vBonkCNziGXBHjvYdvzzOT4Z1C1TidGdYXMCKP4HTioFECT16pBqKVjcgeYI5OKeYLCIjCr5fWyWbkdbkB-WBVGsc2NkrjeUizgiv1k9A5INxGzx73CnW2sRF8jtcxL8UqTl0FDB1LzVw2ubDvlZeIMxYhkOcuKY_ynk"
            />
          </div>
          <div className="bg-blood text-white text-[10px] p-1 font-[JetBrains_Mono] text-center -mt-2">
            RINGMASTER
          </div>
        </div>

        {/* Simulated Red Threads */}
        <div className="red-thread w-48 md:w-64 top-[48%] left-[30%] md:left-[34%] rotate-[160deg]" />
        <div className="red-thread w-36 md:w-48 top-[55%] right-[24%] md:right-[28%] rotate-[20deg]" />
        <div className="red-thread w-60 md:w-80 top-[40%] right-[30%] md:right-[35%] rotate-[10deg] opacity-40" />
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
