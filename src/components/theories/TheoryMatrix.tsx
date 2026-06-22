"use client";

const connections = [
  { from: "Pierrot Loop Theory", to: "Timeline Reset Theory", label: "confirms" },
  { from: "Timeline Reset Theory", to: "Memory Corruption Theory", label: "supports" },
  { from: "Memory Corruption Theory", to: "Circus Does Not Exist", label: "implies" },
  { from: "Circus Does Not Exist", to: "White Room Is Developer Room", label: "connects to" },
  { from: "The Doctor Is The Observer", to: "White Room Is Developer Room", label: "references" },
  { from: "Columbina's Memory Is The Key", to: "Timeline Reset Theory", label: "validates" },
  { from: "Harlequin Controls The Branches", to: "Harlequin Is Not Human", label: "suggests" },
  { from: "Harlequin Is Not Human", to: "Masks Hide The Same Face", label: "contradicts" },
  { from: "Broken Clock Theory", to: "Missing Day Theory", label: "relates to" },
  { from: "Missing Day Theory", to: "Timeline Reset Theory", label: "expands" },
];

export default function TheoryMatrix() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Theory Relationship Map
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          How Freak Circus theories connect, support, and contradict each other — an interactive theory graph
        </p>

        <div className="bg-surface-container border border-outline/20 p-8">
          {/* Theory nodes */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              "Pierrot Loop Theory",
              "Timeline Reset",
              "Memory Corruption",
              "Circus Does Not Exist",
              "White Room",
              "Doctor Observer",
              "Columbina Memory",
              "Harlequin Branches",
              "Harlequin Not Human",
              "Masks Same Face",
            ].map((name) => (
              <div key={name} className="bg-surface border border-primary/30 p-3 text-center">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Theory</div>
                <div className="font-[Epilogue] text-sm font-bold text-foreground">{name}</div>
              </div>
            ))}
          </div>

          {/* Connections */}
          <div className="space-y-3">
            {connections.map((c, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="text-foreground font-medium">{c.from}</span>
                <span className="font-[JetBrains_Mono] text-xs text-primary px-2 py-1 border border-primary/30">
                  {c.label}
                </span>
                <span className="text-foreground font-medium">{c.to}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary"></div>
              <span className="text-xs text-on-surface-variant">Confirms / Validates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blood"></div>
              <span className="text-xs text-on-surface-variant">Contradicts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border border-primary"></div>
              <span className="text-xs text-on-surface-variant">Suggests / Connects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
