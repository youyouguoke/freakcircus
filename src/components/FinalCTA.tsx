import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-black flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40 brightness-50"
          alt="Theatrical stage with red curtains and fog"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcClPGFGmSGE_bP0IbVG4Tb8Moo_M73V2gB8fuDgSfJp_EbE93cOGLbEhVqStb0WKNg7FsIyEdBwNZfSVyz2lu1Xqlli5iHoOKUTJw5cV7djkPdUAvJmGoMkPcTWAvee9dwcma-9IMpf-V5MdGZkOR1eU4h-jB78LrkZ9D19DajbzGkzywDblOas5nBVlCK1XdoBMbF9KVmo9QzkIvy8GTtBUqBSbbJaOODkJq8j1pqwGCo791mygCm84n3ImeBZ47BJeCDQI4bBk"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 px-4 md:px-16">
        <h2 className="font-[Creepster] text-5xl md:text-[96px] text-primary mb-8 tracking-widest animate-pulse">
          STILL MISSING A SECRET ENDING?
        </h2>
        <Link
          href="/endings"
          className="inline-block px-10 md:px-12 py-5 md:py-6 bg-primary text-black font-[Epilogue] text-xl md:text-2xl font-extrabold uppercase tracking-tighter hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,179,174,0.4)]"
        >
          Return to the Circus
        </Link>
        <p className="mt-8 text-on-surface-variant font-[JetBrains_Mono] uppercase text-xs md:text-sm tracking-widest opacity-60">
          The curtain never truly closes.
        </p>
      </div>
    </section>
  );
}
