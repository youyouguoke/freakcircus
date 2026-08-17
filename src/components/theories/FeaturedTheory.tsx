'use client';

export default function FeaturedTheory() {
  return (
    <section id="featured" className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-circus-red" />
          FEATURED INVESTIGATION
        </div>

        <div className="archive-card border-circus-red/20 p-6 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-label text-[0.55rem] px-2 py-0.5 text-status-likely border border-status-likely/30 bg-status-likely/8">
              COMMUNITY CONFIDENCE: 58%
            </span>
            <span className="font-label text-[0.55rem] text-faint-paper">THEORY_15</span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-bold text-paper mb-4">
            The Circus Does Not Exist
          </h2>

          <p className="text-faint-paper mb-8 max-w-2xl leading-relaxed">
            Some players believe the circus is not a physical location, but a fragmented psychological space shared across collapsing timelines.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="archive-card">
              <div className="font-label text-[0.55rem] text-circus-red mb-3">SUPPORTING EVIDENCE</div>
              <ul className="space-y-2 text-faint-paper text-sm">
                <li className="flex items-start gap-2"><span className="text-circus-red mt-1">▸</span> No two players describe the circus layout identically</li>
                <li className="flex items-start gap-2"><span className="text-circus-red mt-1">▸</span> Map geometry changes between routes</li>
                <li className="flex items-start gap-2"><span className="text-circus-red mt-1">▸</span> The Mirror Hall exists in all routes but with different physics</li>
                <li className="flex items-start gap-2"><span className="text-circus-red mt-1">▸</span> Columbina&apos;s &ldquo;real world&rdquo; memories contain circus imagery</li>
              </ul>
            </div>
            <div className="archive-card">
              <div className="font-label text-[0.55rem] text-faint-paper mb-3">CONTRADICTIONS</div>
              <ul className="space-y-2 text-faint-paper text-sm">
                <li className="flex items-start gap-2"><span className="text-dim-paper mt-1">△</span> Physical objects persist across loops</li>
                <li className="flex items-start gap-2"><span className="text-dim-paper mt-1">△</span> The Doctor references real-world medical files</li>
                <li className="flex items-start gap-2"><span className="text-dim-paper mt-1">△</span> Ticket Taker exists outside the circus space</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-label text-[0.5rem] text-faint-paper">META THEORY</span>
            <span className="font-label text-[0.5rem] text-faint-paper">4 EVIDENCE</span>
            <span className="font-label text-[0.5rem] text-faint-paper">3 CONTRADICTIONS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
