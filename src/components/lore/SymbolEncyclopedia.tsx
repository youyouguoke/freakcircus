"use client";

import Link from "next/link";

const symbols = [
  {
    name: "Red Thread",
    meaning: "A single red thread appears in the post-credits of Pierrot's Smile For Me ending. It represents the connection between the player and the circus — a thread that cannot be cut, only tangled.",
    appearances: "Post-credits (Smile For Me), Pierrot's garden (Scene 2), Harlequin's ribbon (Scene 5), Columbina's bracelet (Scene 8)",
    evidence: "The thread is visible in 4 different routes but only mentioned in dialogue once. Players report seeing it 'move' in the background of static scenes.",
    related: "Pierrot Loop Theory, Timeline Reset Theory",
    href: "/lore/red-thread-meaning",
  },
  {
    name: "Broken Mirror",
    meaning: "The mirror in Scene 9 reflects the player's previous route character, not their current one. Breaking it reveals a hidden file. The mirror represents fractured memory — the player sees what they have already experienced, not what is happening now.",
    appearances: "Scene 9 (all routes), Doctor's laboratory (Scene 10), White Room description",
    evidence: "Datamined files show the mirror uses a variable called 'PREVIOUS_ROUTE_SPRITE' that persists across save files. This is not a bug — it is intentional cross-route memory.",
    related: "Doctor Awareness Theory, Timeline Reset Theory",
    href: "/lore/broken-mirror-explained",
  },
  {
    name: "White Room",
    meaning: "A space with no walls, no ceiling, no floor. Only light. And a chair facing a mirror that shows nothing. The White Room is described by The Doctor in Scene 7 but never found by players. It may be a debug space that became part of the narrative, or a metaphor for the space between routes.",
    appearances: "Doctor's dialogue (Scene 7), datamined files (1.03 patch notes), unused texture files",
    evidence: "The Doctor's description matches the layout of a standard Unity testing room. The 'mirror that shows nothing' may be a reference to a disabled camera render. However, the emotional weight of the scene suggests intentional design.",
    related: "Doctor Awareness Theory, White Room Is The Developer Room",
    href: "/lore/white-room-symbolism",
  },
  {
    name: "Mask",
    meaning: "Every performer wears a mask, but the masks are never mentioned in dialogue. They appear in sprites, backgrounds, and cutscenes. The masks may represent the 'roles' the characters are forced to play — or the masks the player wears when making choices.",
    appearances: "All character sprites, Mirror Hall background, Title screen, Post-credits scene",
    evidence: "The mask sprites are separate layers from the character faces. In datamined files, they are labeled 'MASK_PERMANENT' — suggesting they were never meant to be removed.",
    related: "Columbina Watches Player Theory, Pierrot Loop Theory",
    href: "/lore/mask-symbolism",
  },
  {
    name: "Clock",
    meaning: "A broken clock appears in the background of Scene 3. The hands are stuck at 11:47. This time appears in multiple routes and may represent the moment the timeline fractured. The clock is visible but never interactive.",
    appearances: "Scene 3 background, Pierrot's garden (static), Harlequin's stage (flickering)",
    evidence: "11:47 appears in 3 different route files as a timestamp. In the Doctor's notes, '11:47' is mentioned as 'the time when the first patient forgot their name.'",
    related: "Timeline Reset Theory, Doctor Created Circus",
    href: "/lore/clock-meaning",
  },
  {
    name: "Red Thread",
    meaning: "A single red thread appears in the post-credits of Pierrot's Smile For Me ending. It represents the connection between the player and the circus — a thread that cannot be cut, only tangled.",
    appearances: "Post-credits (Smile For Me), Pierrot's garden (Scene 2), Harlequin's ribbon (Scene 5), Columbina's bracelet (Scene 8)",
    evidence: "The thread is visible in 4 different routes but only mentioned in dialogue once. Players report seeing it 'move' in the background of static scenes.",
    related: "Pierrot Loop Theory, Timeline Reset Theory",
    href: "/lore/red-thread-meaning",
  },
];

export default function SymbolEncyclopedia() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Symbol Encyclopedia
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Recurring symbols in The Freak Circus — their meanings, appearances, and connections to lore theories
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {symbols.map((s) => (
            <div key={s.name} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-3">
                {s.name}
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Meaning</div>
                  <p className="text-on-surface-variant">{s.meaning}</p>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Appearances</div>
                  <p className="text-on-surface-variant">{s.appearances}</p>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Evidence</div>
                  <p className="text-on-surface-variant">{s.evidence}</p>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Related Theories</div>
                  <p className="text-on-surface-variant">{s.related}</p>
                </div>
              </div>

              <Link
                href={s.href}
                className="inline-block mt-4 text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline"
              >
                Read Full Symbol Analysis →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
