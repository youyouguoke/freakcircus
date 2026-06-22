"use client";

const evidence = [
  { id: "01", item: "Broken Clock (11:47)", supports: "Timeline Reset Theory", detail: "The clock is stuck at 11:47 in multiple routes. The Doctor's notes mention 11:47 as 'the time when the first patient forgot their name.' The clock is visible but never interactive — suggesting the time is frozen at the moment of fracture." },
  { id: "02", item: "White Room Description", supports: "Doctor Awareness Theory", detail: "The Doctor describes the White Room in Scene 7 with impossible precision. The description matches a Unity testing environment. If the Doctor is aware of the game's engine, he may be aware of the player." },
  { id: "03", item: "Mirror Reflection (Previous Route Sprite)", supports: "Cross-Route Memory Theory", detail: "The mirror in Scene 9 uses a variable called 'PREVIOUS_ROUTE_SPRITE' that persists across save files. This is not a bug — it is intentional. The mirror shows what the player has already experienced, not what is happening now." },
  { id: "04", item: "Red Thread Movement", supports: "Pierrot Loop Theory", detail: "Players report the red thread 'moving' in static scenes. The thread is a separate animated layer from the background. Its movement is tied to the hidden counter at 0x4A20, not the current route." },
  { id: "05", item: "Harlequin's 'You Again'", supports: "Harlequin Loop Theory", detail: "On the 4th playthrough, Harlequin says 'You again' regardless of current route. This dialogue is not in her route files — it is in a shared file that all routes reference. She remembers the player across all routes." },
  { id: "06", item: "Columbina's 4th Door", supports: "Columbina Watches Player Theory", detail: "After 3 perfect loops, Columbina's hallway gains a 4th door. The door was always in the background files but invisible. The unlock condition requires cross-route completion, suggesting Columbina monitors the player's entire history." },
  { id: "07", item: "Medical File 4 (Blank)", supports: "Doctor Created Circus", detail: "File 4 is found in a bookshelf and is completely blank. The file name is 'SUBJECT_IS_AWARE_OF_OBSERVATION.txt'. The blankness is the content — the subject knows they are being watched." },
  { id: "08", item: "Post-Credits Scene (All Endings)", supports: "Timeline Reset Theory", detail: "After completing all 8 endings, a hidden post-credits scene plays. It shows all four characters in the White Room, looking at the player. The scene is not in any route file — it is a separate video that triggers based on the hidden counter." },
];

export default function LoreEvidenceBoard() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Lore Evidence Board
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Key evidence pieces and the theories they support — the foundation of the Freak Circus investigation
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {evidence.map((e) => (
            <div key={e.id} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">
                  #{e.id}
                </span>
                <span className="font-[JetBrains_Mono] text-xs text-blood">
                  {e.supports}
                </span>
              </div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {e.item}
              </h3>
              <p className="text-on-surface-variant text-sm">
                {e.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
