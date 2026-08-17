"use client";

export default function FeaturedTheory() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-xs text-primary mb-4">FEATURED THEORY</div>
        <h2 className="font-display text-2xl md:text-3xl text-on-surface mb-4">
          Columbina&apos;s Death Is the Key
        </h2>
        <div className="font-mono text-xs text-yellow-500 mb-6">PARTIALLY VERIFIED</div>
        <p className="text-on-surface/60 text-sm mb-6">
          The only theory with some verified support: the Columbina legend in Day 2 is confirmed to explain
          the rivalry between Pierrot and Harlequin. Columbina was killed by Harlequin, and this event
          drives the central conflict of the game.
        </p>
        <div className="glass-card p-6">
          <h3 className="font-display text-lg text-on-surface mb-3">What We Know</h3>
          <ul className="space-y-2 text-on-surface/60 text-sm">
            <li>• Columbina is a deceased character — confirmed by thefreakcircus.org</li>
            <li>• The Columbina legend appears in Day 2 — confirmed by YouTube playthroughs</li>
            <li>• It explains why Pierrot and Harlequin are rivals — confirmed by multiple sources</li>
            <li>• Specific details of her death and its broader significance remain unverified</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
