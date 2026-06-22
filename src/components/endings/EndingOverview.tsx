"use client";

export default function EndingOverview() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          The Complete Ending Guide
        </h2>

        <div className="space-y-6 text-on-surface-variant text-sm">
          <div>
            <h3 className="font-bold text-foreground mb-2">How many endings exist?</h3>
            <p>The community has confirmed 8 endings across all character routes, with 6 additional endings under investigation or unverified. The exact total remains unknown — data miners continue to find references to unused endings in game files, and the community suspects there may be endings that require specific combinations of previous completions to unlock.</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">Which ending is considered the true ending?</h3>
            <p>No single ending is universally accepted as the "true ending." The community theory suggests that the true ending requires completing all four character routes in a specific order, with Columbina's three-loop storyline being the final piece. However, this remains unverified. Some players argue that the Corrupted Data ending — found only in unused files — represents the intended conclusion that was cut during development.</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">Which ending is hardest to unlock?</h3>
            <p>Columbina's Truth requires perfect alignment of all dialogue choices across three consecutive loops. Any deviation — even a single incorrect choice — causes a complete reset. The Corrupted Data ending may be impossible to unlock legitimately; no player has verified conditions, and it may be a debug remnant or intentionally unreachable content.</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">Which endings require replaying the game?</h3>
            <p>Four endings require replay awareness: Eternal Silence (requires completing one other route first), Columbina's Truth (requires three loops), The Doctor's Note (requires finding files across multiple playthroughs), and Harlequin's Laughter (requires specific comedic choices that only become available after seeing her standard ending). The game tracks your history across saves using a hidden counter at offset 0x4A20.</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">Which endings remain unverified?</h3>
            <p>Three endings remain unverified by the community: Corrupted Data (found in files but never unlocked), White Room (mentioned in patch notes but never found), and Null Route (a branch with no characters that soft-locks after 5 minutes). These may be cut content, debug remnants, or intentionally hidden endings that require conditions the community has not yet discovered.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
