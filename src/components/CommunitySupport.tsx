export default function CommunitySupport() {
  return (
    <section className="bg-cream-dark py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto border-4 border-dashed border-blood/40 p-8 md:p-12 bg-cream shadow-inner relative">
        {/* Coffee Stain */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blood/5 rounded-full blur-2xl" />
        <div className="absolute -top-5 -left-5 w-24 h-24 border-8 border-blood/5 rounded-full pointer-events-none" />

        <div className="text-center mb-12">
          <h2 className="font-[Creepster] text-3xl md:text-4xl text-blood mb-2 uppercase tracking-widest">
            Help Keep the Circus Archive Updated
          </h2>
          <p className="text-paper-text italic">Servers aren&apos;t free, even cursed ones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/50 p-4 border border-black/10 rotate-1">
              <span className="material-symbols-outlined text-4xl text-blood">coffee</span>
              <div>
                <div className="font-bold text-paper-heading">Buy us a &quot;Nerve Tonic&quot;</div>
                <div className="text-sm text-paper-text">A small donation keeps the lights from flickering.</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/50 p-4 border border-black/10 -rotate-1">
              <span className="material-symbols-outlined text-4xl text-blood">theaters</span>
              <div>
                <div className="font-bold text-paper-heading">Archive Patron</div>
                <div className="text-sm text-paper-text">Early access to data-mined assets and raw sprites.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <a
              href="https://www.buymeacoffee.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-32 border-2 border-paper-heading bg-paper-heading flex flex-col items-center justify-center p-4 group cursor-pointer hover:bg-blood transition-colors relative"
            >
              <span className="text-primary group-hover:text-white font-[Epilogue] text-xl md:text-2xl font-semibold uppercase tracking-tighter">
                DONATE NOW
              </span>
              <div className="absolute -bottom-4 right-4 bg-yellow-200 text-black px-2 py-1 text-[10px] font-bold rotate-6">
                THANK YOU!
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
