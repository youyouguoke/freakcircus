"use client";

export default function SubmitInvestigation() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Submit a New Investigation
        </h2>

        <div className="bg-surface-container border border-outline/20 p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-[JetBrains_Mono] text-xs text-on-surface-variant block mb-2">Theory Title</label>
              <input type="text" className="w-full bg-surface border border-outline/20 p-3 text-foreground focus:border-primary focus:outline-none" placeholder="Enter theory title..." />
            </div>
            <div>
              <label className="font-[JetBrains_Mono] text-xs text-on-surface-variant block mb-2">Character Focus</label>
              <input type="text" className="w-full bg-surface border border-outline/20 p-3 text-foreground focus:border-primary focus:outline-none" placeholder="Which character?" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-[JetBrains_Mono] text-xs text-on-surface-variant block mb-2">Confidence Level</label>
              <select className="w-full bg-surface border border-outline/20 p-3 text-foreground focus:border-primary focus:outline-none">
                <option>Community Accepted</option>
                <option>Controversial</option>
                <option>Unverified</option>
                <option>Corrupted</option>
              </select>
            </div>
            <div>
              <label className="font-[JetBrains_Mono] text-xs text-on-surface-variant block mb-2">Replay Conditions (if applicable)</label>
              <input type="text" className="w-full bg-surface border border-outline/20 p-3 text-foreground focus:border-primary focus:outline-none" placeholder="Loop count, route requirements..." />
            </div>
          </div>

          <div className="mb-6">
            <label className="font-[JetBrains_Mono] text-xs text-on-surface-variant block mb-2">Evidence Summary</label>
            <textarea className="w-full bg-surface border border-outline/20 p-3 text-foreground focus:border-primary focus:outline-none h-32 resize-none" placeholder="Describe your evidence and observations..."></textarea>
          </div>

          <button className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Submit Investigation
          </button>
        </div>
      </div>
    </section>
  );
}
