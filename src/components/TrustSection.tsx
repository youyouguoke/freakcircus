export default function TrustSection() {
  return (
    <section className="bg-archive-black py-16 md:py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            ARCHIVE CREDIBILITY
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-paper">Community-Verified</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="archive-card text-center">
            <div className="font-horror text-3xl text-paper mb-2">50+</div>
            <div className="font-label text-[0.6rem] text-faint-paper">COMMUNITY TESTERS</div>
            <p className="text-dim-paper text-xs mt-2">Cross-platform verification by dedicated players</p>
          </div>
          <div className="archive-card text-center">
            <div className="font-horror text-3xl text-paper mb-2">200+</div>
            <div className="font-label text-[0.6rem] text-faint-paper">DOCUMENTED ROUTES</div>
            <p className="text-dim-paper text-xs mt-2">Every choice tree mapped and verified</p>
          </div>
          <div className="archive-card text-center">
            <div className="font-horror text-3xl text-paper mb-2">2yr</div>
            <div className="font-label text-[0.6rem] text-faint-paper">ONGOING INVESTIGATION</div>
            <p className="text-dim-paper text-xs mt-2">New discoveries still being made</p>
          </div>
        </div>
      </div>
    </section>
  );
}
