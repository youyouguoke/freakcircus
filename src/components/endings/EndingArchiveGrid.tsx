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
    analysis: "Most players\' first ending. Harlequin\'s final bow represents acceptance of performance as identity.",
  },
  {
    id: "Ending #02",
    title: "Smile For Me",
    route: "Pierrot Route",
    difficulty: "Normal",
    type: "Canon",
    spoilers: "Low",
    condition: "First Playthrough",
    desc: "Accept Pierrot\'s offer during the garden scene. A single red thread remains on the ground after the credits.",
    tags: ["Deception", "Trust"],
    analysis: "The red thread left on the ground connects to Harlequin\'s route — the strongest cross-character foreshadowing in the game.",
  },
  {
    id: "Ending #03",
    title: "The Doctor\'s Note",
    route: "The Doctor Route",
    difficulty: "Hard",
    type: "Secret",
    spoilers: "Medium",
    condition: "Replay Required",
    desc: "Find all five hidden medical files before the final encounter.",
    tags: ["Obsession", "Documentation"],
    analysis: "File 4 (The Doctor himself) is blank except for \'Subject is aware of observation.\' — the most chilling line in the game.",
  },
  {
    id: "Ending #04",
    title: "Eternal Silence",
    route: "Pierrot Route",
    difficulty: "Hard",
    type: "Secret",
    spoilers: "High",
    condition: "Memory-Aware",
    desc: "Refuse every major dialogue interaction during the final act. Screen stays black for 4 minutes.",
    tags: ["Isolation", "Obsession", "Route Rejection"],
    analysis: "The 4-minute black screen matches the average time players spend in the garden scene on their first playthrough.",
  },
  {
    id: "Ending #05",
    title: "Columbina\'s Truth",
    route: "Columbina Route",
    difficulty: "Very Hard",
    type: "Secret",
    spoilers: "Very High",
    condition: "3 Perfect Loops",
    desc: "Perfect alignment of all dialogue choices across three loops. Any deviation resets to Loop 1.",
    tags: ["Revelation", "Purgatory"],
    analysis: "The fourth door reveals the same garden from Pierrot\'s Smile For Me ending — linking both routes to a single moment of grief.",
  },
  {
    id: "Ending #06",
    title: "White Room",
    route: "Unknown Route",
    difficulty: "Impossible",
    type: "Unverified",
    spoilers: "Unknown",
    condition: "Never Found",
    desc: "Referenced by The Doctor in Scene 7. May require completing all other endings first.",
    tags: ["Absence", "Void"],
    analysis: "The Doctor\'s description matches standard game engine default environments — suggesting the White Room is the developer\'s debug space.",
  },
  {
    id: "Ending #07",
    title: "Corrupted Data",
    route: "??? Route",
    difficulty: "Impossible",
    type: "Unverified",
    spoilers: "Extreme",
    condition: "Files Only",
    desc: "Found only in modified game files. Screen displays raw hex before crash.",
    tags: ["Instability", "Data Loss"],
    analysis: "The hex converts to ASCII: \'The show is over. The audience has left. Why are you still here?\' — a message directed at the player.",
  },
  {
    id: "Ending #08",
    title: "Harlequin\'s Laughter",
    route: "Harlequin Route",
    difficulty: "Hidden",
    type: "Joke",
    spoilers: "Low",
    condition: "All Comedic Options",
    desc: "Select every comedic option in a single playthrough.",
    tags: ["Absurdity", "Denial"],
    analysis: "The 30-second laughter matches the silence duration in Eternal Silence. The confetti sprites are recycled from Pierrot\'s wilted flowers.",
  },
  {
    id: "Ending #09",
    title: "Fractured Ending",
    route: "Harlequin Route",
    difficulty: "Hard",
    type: "Alternate",
    spoilers: "Medium",
    condition: "Fail Route First",
    desc: "Fail Harlequin\'s main route, then choose aggressive in Scene 4 and comedic in Scene 9.",
    tags: ["Fracture", "Duality"],
    analysis: "Unlocks 7 hidden scenes not accessible through the standard route. Reveals Harlequin\'s personality split.",
  },
  {
    id: "Ending #10",
    title: "Medical Failure",
    route: "The Doctor Route",
    difficulty: "Normal",
    type: "Standard",
    spoilers: "Low",
    condition: "Incomplete Files",
    desc: "Complete The Doctor\'s route without finding all 5 hidden medical files.",
    tags: ["Neglect", "Abandonment"],
    analysis: "The standard Doctor ending — he abandons the patient. Contrast with Doctor\'s Note which requires all files.",
  },
  {
    id: "Ending #11",
    title: "Eternal Dance",
    route: "Columbina Route",
    difficulty: "Normal",
    type: "Standard",
    spoilers: "Low",
    condition: "Single Loop",
    desc: "Complete a single Columbina loop without perfect alignment across all three.",
    tags: ["Repetition", "Unawareness"],
    analysis: "The standard Columbina ending — the dance continues without revelation. The fourth door never appears.",
  },
];

export default function EndingArchiveGrid() {
  return (
    <section id="archive" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-8">
          // Ending Archive Grid — 11 Records Found
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
                  <div className={`font-[Epilogue] text-sm font-bold ${
                    ending.type === 'Unverified' ? 'text-yellow-500' :
                    ending.type === 'Corrupted' ? 'text-red-500' :
                    ending.type === 'False' ? 'text-red-400' :
                    'text-foreground'
                  }`}>
                    {ending.type}
                    {ending.type === 'Unverified' && ' ⚠️'}
                    {ending.type === 'Corrupted' && ' ❌'}
                  </div>
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
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Community Analysis</div>
                <div className="text-sm text-on-surface-variant leading-relaxed">{ending.analysis}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
