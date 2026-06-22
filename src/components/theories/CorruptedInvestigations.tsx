"use client";

const investigations = [
  {
    id: "THEORY_NULL",
    category: "Data-mined",
    title: "The Null Protagonist",
    desc: "A hidden route where no characters acknowledge the protagonist. Dialogue trees exist but every response is met with silence.",
  },
  {
    id: "THEORY_MEM",
    category: "Unverified",
    title: "Memory Overwrite",
    desc: "Save files may influence future dialogue trees. Players report conversations changing after importing old saves into new installations.",
  },
  {
    id: "THEORY_OBS",
    category: "Referenced",
    title: "The Observer Theory",
    desc: "The Doctor may be aware of the player directly, not just the protagonist. Some lines appear to reference the player's actual behavior.",
  },
  {
    id: "THEORY_DEV",
    category: "Files Found",
    title: "Developer Ghost Ending",
    desc: "Unused assets suggest a cut ending where the game deletes its own save file and leaves a message in the installation directory.",
  },
];

export default function CorruptedInvestigations() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Corrupted Investigations
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Impossible theories, deleted content, data-mined findings, ARG-like rumors, and hidden game references. These investigations have not been independently verified.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {investigations.map((inv) => (
            <div key={inv.id} className="bg-surface-container border border-blood/30 p-6">
              <div className="flex justify-between items-start mb-2">
                <div className="font-[JetBrains_Mono] text-xs text-primary">
                  {inv.id}
                </div>
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
                  {inv.category}
                </div>
              </div>

              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {inv.title}
              </h3>
              <p className="text-on-surface-variant text-sm">
                {inv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
