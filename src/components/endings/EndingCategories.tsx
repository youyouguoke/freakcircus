"use client";

const categories = [
  {
    name: "Canon Endings",
    desc: "The standard conclusions for each character route. These endings resolve the main narrative threads and are achievable on the first playthrough without special requirements. The Open Ending A (unnamed) (Harlequin) and Open Ending B (unnamed) (Pierrot) are the two canon endings most players see on their initial playthrough.",
    count: 2,
  },
  {
    name: "Secret Endings",
    desc: "Hidden conclusions that require specific conditions, replay awareness, or sequence dependencies. Open Ending C (unnamed) requires refusing all dialogue for three scenes. The Unnamed Open Ending requires finding five hidden medical files. Unnamed Open Ending requires perfect alignment across three loops. These endings reveal deeper narrative layers.",
    count: 3,
  },
  {
    name: "Corrupted Endings",
    desc: "Endings found in unused game files or mentioned in patch notes but never officially unlocked. Unnamed Open Ending displays raw hex before crashing. Unnamed Open Ending is referenced by The Doctor in Scene 7 but has never been found. These may be cut content, debug remnants, or intentionally hidden.",
    count: 2,
  },
  {
    name: "Joke Endings",
    desc: "Lighthearted or absurd conclusions that subvert the game's horror tone. Unnamed Open Ending requires selecting every comedic option in a single playthrough. These endings provide relief from the main narrative's intensity and often contain fourth-wall-breaking humor.",
    count: 1,
  },
];

export default function EndingCategories() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Ending Types
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          How The Freak Circus categorizes its conclusions — from standard resolutions to corrupted data
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-[Epilogue] text-xl font-bold text-foreground">{cat.name}</h3>
                <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">{cat.count} endings</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
