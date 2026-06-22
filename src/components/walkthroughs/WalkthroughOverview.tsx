"use client";

export default function WalkthroughOverview() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          The Complete Route Guide
        </h2>

        <div className="space-y-6 text-on-surface-variant text-sm">
          <div>
            <h3 className="font-bold text-foreground mb-2">How many routes exist?</h3>
            <p>The community has verified 6 main routes across the four characters: Pierrot Main Route, Pierrot Silent Route, Harlequin True Route, The Doctor Memory Route, Columbina Fractured Route, and the Null Route. Each route contains multiple hidden branches that only appear under specific conditions, bringing the total documented branches to 24.</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">Which route should new players start with?</h3>
            <p>Most players begin with the Pierrot Main Route, which introduces the game's core mechanics without requiring replay awareness. However, the community recommends completing routes in a specific order: Pierrot Main → Harlequin True → Doctor Memory → Columbina Fractured → Pierrot Silent. This order unlocks cross-route awareness flags that make subsequent routes easier to navigate.</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">Which routes require replaying?</h3>
            <p>Three routes require replay awareness: Pierrot Silent Route (requires completing Pierrot Main and failing Harlequin True), The Doctor Memory Route (requires finding files across multiple playthroughs), and Columbina Fractured Route (requires perfect alignment across three loops). The game tracks your history using a hidden counter at offset 0x4A20 in the save file.</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">Which routes contain hidden triggers?</h3>
            <p>Every route contains hidden triggers, but the most significant are: Pierrot Silent Route (silence in 3+ consecutive scenes), Harlequin True Route (select all aggressive options), Doctor Memory Route (find 5 hidden medical files), and Columbina Fractured Route (perfect choices across three loops). These triggers are not marked in the game — they must be discovered through community testing.</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">Which routes unlock secret endings?</h3>
            <p>Four routes unlock secret endings: Pierrot Silent Route leads to Eternal Silence, Harlequin True Route leads to Grand Finale, Doctor Memory Route leads to Doctor's Note, and Columbina Fractured Route leads to Columbina's Truth. The Null Route may lead to Corrupted Data, but this remains unverified.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
