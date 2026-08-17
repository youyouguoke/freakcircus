export default function EndingsHero() {
  return (
    <section className="bg-surface min-h-[70vh] flex flex-col justify-center pt-8 pb-16 px-4 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/hero-endings.webp" alt="" className="w-full h-full object-cover opacity-35" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/40 to-surface" />
      </div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex items-center gap-8 mb-8">
          <div>
            <div className="font-[Creepster] text-3xl text-primary">1</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Confirmed Ending</div>
          </div>
          <div>
            <div className="font-[Creepster] text-3xl text-primary">3</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Open Endings (unnamed)</div>
          </div>
          <div>
            <div className="font-[Creepster] text-3xl text-primary">4</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Total Endings</div>
          </div>
        </div>
        <h1 className="font-[Epilogue] text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-3 leading-tight">
          Freak Circus Endings Guide
        </h1>
        <h2 className="font-[Creepster] text-3xl md:text-5xl text-primary mb-6 leading-none">
          What We Know So Far
        </h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
          The Freak Circus by Neko Bueno has 4 endings total. Only 1 has been confirmed by name:
          &quot;Missing&quot; (Bad Ending). 3 additional open endings exist but remain unnamed. All other ending names
          you may see online are unverified community speculation.
        </p>
      </div>
    </section>
  );
}
