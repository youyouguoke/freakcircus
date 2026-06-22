"use client";

const dependencies = [
  {
    route: "Pierrot Silent Route",
    prerequisites: [
      "Complete Pierrot Main Route once",
      "Fail Harlequin True Route (select aggressive options)",
      "Remain silent in 3+ consecutive scenes in Act II",
    ],
    note: "Dialogue options mutate after the 3rd loop attempt. The game tracks silence choices using a hidden flag at offset 0x4A20.",
  },
  {
    route: "Doctor Memory Route",
    prerequisites: [
      "Complete Doctor Main Route",
      "Collect 5 hidden medical files across scenes",
      "Scene 9 mirror must be visible (requires failing Doctor route once)",
    ],
    note: "The mirror only appears after one failed Doctor route. Files 3 and 5 require cross-route awareness flags from other characters.",
  },
  {
    route: "Columbina Fractured Route",
    prerequisites: [
      "Complete Pierrot Main Route",
      "Complete Doctor Memory Route",
      "Perfect alignment of all dialogue choices across 3 loops",
    ],
    note: "This route will not appear until all three conditions are met. Any deviation in Loop 2 or 3 causes a complete reset to Loop 1.",
  },
];

export default function DependencyAnalysis() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Route Requirements & Dependencies
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          What you must complete before hidden routes become available — and how the game tracks your progress
        </p>

        <div className="space-y-6">
          {dependencies.map((dep) => (
            <div key={dep.route} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-4">
                {dep.route}
              </h3>

              <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">
                Prerequisites
              </div>
              <ul className="space-y-1 mb-4">
                {dep.prerequisites.map((pre, i) => (
                  <li key={i} className="text-sm text-on-surface-variant flex items-start gap-2">
                    <span className="text-primary">■</span>
                    <span>{pre}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-surface border border-outline/20 p-4">
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">
                  Archive Note
                </div>
                <div className="text-sm text-foreground">
                  {dep.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
