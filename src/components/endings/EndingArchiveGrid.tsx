"use client";

const endings = [
  {
    id: "Ending #01",
    title: "The Grand Finale",
    route: "Harlequin Route",
    difficulty: "Normal",
    type: "Canon",
    spoilers: "None",
    condition: "First Playthrough",
    desc: "Complete the Harlequin route with standard dialogue choices.",
    tags: ["Closure", "Tragedy"],
  },
  {
    id: "Ending #02",
    title: "Smile For Me",
    route: "Pierrot Route",
    difficulty: "Normal",
    type: "Canon",
    spoilers: "Low",
    condition: "First Playthrough",
    desc: "Accept Pierrot's offer during the garden scene.",
    tags: ["Deception", "Trust"],
  },
  {
    id: "Ending #03",
    title: "The Doctor's Note",
    route: "The Doctor Route",
    difficulty: "Hard",
    type: "Secret",
    spoilers: "Medium",
    condition: "Replay Required",
    desc: "Find all five hidden medical files before the final encounter.",
    tags: ["Obsession", "Documentation"],
  },
  {
    id: "Ending #04",
    title: "Eternal Silence",
    route: "Pierrot Route",
    difficulty: "Hard",
    type: "Secret",
    spoilers: "High",
    condition: "Memory-Aware",
    desc: "Refuse every major dialogue interaction during the final act.",
    tags: ["Isolation", "Obsession", "Route Rejection"],
  },
  {
    id: "Ending #05",
    title: "Columbina's Truth",
    route: "Columbina Route",
    difficulty: "Very Hard",
    type: "Secret",
    spoilers: "Very High",
    condition: "Route Corruption",
    desc: "Perfect alignment of all dialogue choices across three loops.",
    tags: ["Revelation", "Purgatory"],
  },
  {
    id: "Ending #06",
    title: "White Room",
    route: "Unknown Route",
    difficulty: "Impossible",
    type: "False Ending",
    spoilers: "Unknown",
    condition: "Route Corruption",
    desc: "Mentioned in patch notes. Conditions unknown.",
    tags: ["Absence", "Void"],
  },
  {
    id: "Ending #07",
    title: "Corrupted Data",
    route: "??? Route",
    difficulty: "Impossible",
    type: "Corrupted",
    spoilers: "Extreme",
    condition: "Route Corruption",
    desc: "Found only in modified game files. Screen displays raw hex before crash.",
    tags: ["Instability", "Data Loss"],
  },
  {
    id: "Ending #08",
    title: "Harlequin's Laughter",
    route: "Harlequin Route",
    difficulty: "Hidden",
    type: "Joke",
    spoilers: "Low",
    condition: "First Playthrough",
    desc: "Select every comedic option in a single playthrough.",
    tags: ["Absurdity", "Denial"],
  },
];

export default function EndingArchiveGrid() {
  return (
    <section id="archive" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-8">
          // Ending Archive Grid — 8 Records Found
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {endings.map((ending) => (
            <div key={ending.id} className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">{ending.id}</div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{ending.title}</h3>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-3">{ending.route}</div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-surface border border-outline/20 p-2">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Difficulty</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">{ending.difficulty}</div>
                </div>
                <div className="bg-surface border border-outline/20 p-2">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Type</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">{ending.type}</div>
                </div>
                <div className="bg-surface border border-outline/20 p-2">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Spoilers</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">{ending.spoilers}</div>
                </div>
                <div className="bg-surface border border-outline/20 p-2">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Condition</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">{ending.condition}</div>
                </div>
              </div>

              <p className="text-on-surface-variant text-sm mb-4">{ending.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {ending.tags.map((tag) => (
                  <span key={tag} className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">#{tag}</span>
                ))}
              </div>

              <div className="border-t border-outline/10 pt-4">
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Classified Data</div>
                <div className="text-sm text-foreground mb-1">Community analysis available.</div>
                <div className="text-sm text-primary">Route anomalies detected.</div>
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-2">BRANCH_ID: {ending.id.replace("Ending #", "E0")}-CORRUPTED</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
