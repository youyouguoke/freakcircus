"use client";

const checklist = [
  { item: "Pierrot Main Route — Smile For Me ending", category: "Route", required: true },
  { item: "Pierrot Silent Route — Eternal Silence ending", category: "Route", required: true },
  { item: "Harlequin Main Route — Grand Finale ending", category: "Route", required: true },
  { item: "Harlequin True Route — Fractured Ending", category: "Route", required: true },
  { item: "Doctor Main Route — Medical Failure ending", category: "Route", required: true },
  { item: "Doctor Memory Route — Doctor's Note ending", category: "Route", required: true },
  { item: "Columbina Main Route — Eternal Dance ending", category: "Route", required: true },
  { item: "Columbina Fractured Route — Columbina's Truth ending", category: "Route", required: true },
  { item: "Harlequin Joke Route — Harlequin's Laughter ending", category: "Route", required: false },
  { item: "Corrupted Data ending (if achievable)", category: "Ending", required: false },
  { item: "White Room ending (if found)", category: "Ending", required: false },
  { item: "All 5 hidden medical files (Doctor route)", category: "Collectible", required: true },
  { item: "All 47 Pierrot dialogue variations", category: "Collectible", required: false },
  { item: "All 7 Harlequin hidden scenes", category: "Collectible", required: false },
  { item: "Mirror interaction in Scene 9", category: "Trigger", required: true },
  { item: "Silent refusal ×3 (Pierrot Act III)", category: "Trigger", required: true },
  { item: "Perfect 3-loop alignment (Columbina)", category: "Trigger", required: true },
  { item: "All comedic options (Harlequin)", category: "Trigger", required: false },
  { item: "CG #1 — Pierrot's Garden", category: "CG", required: true },
  { item: "CG #2 — Harlequin's Final Bow", category: "CG", required: true },
  { item: "CG #3 — Doctor's Note", category: "CG", required: true },
  { item: "CG #4 — Columbina's Truth", category: "CG", required: true },
  { item: "CG #5 — Eternal Silence (black screen)", category: "CG", required: true },
  { item: "CG #6 — Harlequin's Laughter", category: "CG", required: false },
  { item: "Achievement: Smile For Me", category: "Achievement", required: true },
  { item: "Achievement: The Show Must Go On", category: "Achievement", required: true },
  { item: "Achievement: Medical History", category: "Achievement", required: true },
  { item: "Achievement: Eternal Silence", category: "Achievement", required: true },
  { item: "Achievement: Columbina's Truth", category: "Achievement", required: true },
  { item: "Achievement: Harlequin's Laughter", category: "Achievement", required: false },
  { item: "Hidden post-credits scene (all endings)", category: "Secret", required: false },
  { item: "4th playthrough dialogue changes", category: "Secret", required: false },
  { item: "Counter 0x4A20 documentation", category: "Secret", required: false },
];

export default function CompletionChecklist() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          100% Completion Checklist
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Complete checklist for 100% Freak Circus completion — all routes, endings, CGs, achievements, and secret content
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Required */}
          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-4 uppercase tracking-wider">
              Required for 100%
            </div>
            <div className="space-y-2">
              {checklist.filter(c => c.required).map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">☐</span>
                  <div>
                    <div className="text-foreground text-sm">{c.item}</div>
                    <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">{c.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional */}
          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-blood mb-4 uppercase tracking-wider">
              Optional / Secret
            </div>
            <div className="space-y-2">
              {checklist.filter(c => !c.required).map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-blood mt-0.5">☐</span>
                  <div>
                    <div className="text-foreground text-sm">{c.item}</div>
                    <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">{c.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
