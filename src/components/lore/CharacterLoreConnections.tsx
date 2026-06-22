"use client";

const connections = [
  {
    character: "Pierrot",
    role: "The Memory Keeper",
    contradictions: [
      "Remembers routes the player has not completed (4th playthrough dialogue)",
      "References events from other routes in his own route",
      "Post-credits scene changes based on total completion count",
    ],
    connections: "Pierrot Loop Theory, Timeline Reset Theory, Red Thread Symbolism",
  },
  {
    character: "The Doctor",
    role: "The Observer",
    contradictions: [
      "Describes endings before they occur (precognitive dialogue in Scene 7)",
      "Medical files reference events from routes he is not in",
      "White Room description matches a Unity testing environment",
    ],
    connections: "Doctor Awareness Theory, Doctor Created Circus, White Room Symbolism",
  },
  {
    character: "Harlequin",
    role: "The Fractured Performer",
    contradictions: [
      "Personality changes between aggressive and comedic based on player history",
      "7 hidden scenes only appear on replay",
      "Says 'You again' on 4th playthrough regardless of current route",
    ],
    connections: "Harlequin Loop Theory, Personality Fracture Theory, Mask Symbolism",
  },
  {
    character: "Columbina",
    role: "The Loop Architect",
    contradictions: [
      "Hallway gains a 4th door after 3 perfect loops — a door that was always there but invisible",
      "References player choices from previous loops in current loop dialogue",
      "Only character whose route requires cross-route completion",
    ],
    connections: "Columbina Watches Player Theory, Timeline Reset Theory, Mirror Symbolism",
  },
];

export default function CharacterLoreConnections() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Character Lore Connections
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Each character's role in the timeline, known contradictions, and connections to major lore theories
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {connections.map((c) => (
            <div key={c.character} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-[Epilogue] text-lg font-bold text-foreground">{c.character}</h3>
                <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">{c.role}</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">Known Contradictions</div>
                  <ul className="space-y-1">
                    {c.contradictions.map((item, i) => (
                      <li key={i} className="text-on-surface-variant text-sm flex items-start gap-2">
                        <span className="text-blood mt-1">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Connected Theories</div>
                  <p className="text-on-surface-variant text-sm">{c.connections}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
