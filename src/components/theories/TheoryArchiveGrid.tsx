"use client";

const theories = [
  {
    id: "THEORY_07",
    title: "Pierrot Remembers Every Loop",
    category: "Timeline Theory",
    status: "Community Accepted",
    confidence: 82,
    evidence: 5,
    contradictions: 2,
    support: 4,
    character: "Pierrot",
    type: "Replay-Based",
    scenes: 12,
    desc: "Evidence suggests Pierrot reacts differently after repeated failed endings, retaining knowledge across timelines. On the 4th playthrough, he references choices from previous routes that the player never selected in the current save. Counter value at offset 0x4A20 affects his dialogue options.",
    tags: ["Obsession", "Replay Awareness", "Narrative Corruption"],
  },
  {
    id: "THEORY_11",
    title: "The Doctor Is The Observer",
    category: "Character Theory",
    status: "Controversial",
    confidence: 67,
    evidence: 4,
    contradictions: 3,
    support: 3,
    character: "The Doctor",
    type: "Save Awareness",
    scenes: 8,
    desc: "The Doctor may be aware of the player directly, breaking the fourth wall through clinical observations. His Scene 7 description of the White Room ending matches unused files found in build 1.04. Some theorists believe he represents the game's developer consciousness within the narrative.",
    tags: ["Meta", "Fourth Wall", "Manipulation"],
  },
  {
    id: "THEORY_09",
    title: "Columbina's Memory Is The Key",
    category: "Memory Theory",
    status: "Community Accepted",
    confidence: 78,
    evidence: 4,
    contradictions: 2,
    support: 4,
    character: "Columbina",
    type: "Dialogue Shift",
    scenes: 15,
    desc: "Columbina's fragmented recollections may hold the true nature of the circus and its looping structure. Her three-loop storyline mirrors the game's overall narrative architecture, suggesting the entire circus is a single loop containing smaller loops within each character route.",
    tags: ["Memory", "Revelation", "Purgatory"],
  },
  {
    id: "THEORY_03",
    title: "Harlequin Controls The Branches",
    category: "Timeline Theory",
    status: "Unverified",
    confidence: 45,
    evidence: 3,
    contradictions: 4,
    support: 2,
    character: "Harlequin",
    type: "Hidden Route",
    scenes: 6,
    desc: "Harlequin's route choices may influence other routes indirectly, suggesting hidden causal connections. The red thread sprite appears in both her and Pierrot's routes, and she describes his garden with details the player never saw.",
    tags: ["Control", "Branching", "Hidden"],
  },
  {
    id: "THEORY_22",
    title: "Masks Hide The Same Face",
    category: "Symbolism",
    status: "Community Accepted",
    confidence: 71,
    evidence: 4,
    contradictions: 2,
    support: 3,
    character: "Unknown",
    type: "Replay-Based",
    scenes: 9,
    desc: "Every character's mask may represent the same fractured identity viewed from different angles. The four characters (Pierrot, Harlequin, Doctor, Columbina) may be aspects of a single consciousness, each representing a different response to trauma.",
    tags: ["Identity", "Symbolism", "Fracture"],
  },
  {
    id: "THEORY_??",
    title: "The Null Protagonist",
    category: "Meta Theory",
    status: "Corrupted",
    confidence: 23,
    evidence: 2,
    contradictions: 5,
    support: 1,
    character: "Unknown",
    type: "Save Awareness",
    scenes: 3,
    desc: "Data-mined evidence suggests a hidden route where the protagonist has no dialogue and characters ignore them. The route contains a single empty room with a chair facing a blank wall. Some theorists believe it is the 'true' White Room ending.",
    tags: ["Data Mining", "Null", "Corruption"],
  },
  {
    id: "THEORY_15",
    title: "Circus Does Not Exist",
    category: "Meta Theory",
    status: "Controversial",
    confidence: 58,
    evidence: 3,
    contradictions: 4,
    support: 3,
    character: "All",
    type: "Meta-Narrative",
    scenes: 20,
    desc: "The circus is not a physical location but a psychological construct — a purgatorial loop created by unresolved grief. The four characters represent stages of mourning: denial (Harlequin), anger (Doctor), bargaining (Pierrot), acceptance (Columbina). The player is the one who keeps it running by continuing to play.",
    tags: ["Meta", "Purgatory", "Grief"],
  },
  {
    id: "THEORY_18",
    title: "Timeline Reset Theory",
    category: "Timeline Theory",
    status: "Community Accepted",
    confidence: 85,
    evidence: 5,
    contradictions: 1,
    support: 5,
    character: "All",
    type: "Replay-Based",
    scenes: 18,
    desc: "The game operates on a nested loop system where each character route is a smaller loop within the overall circus loop. Completing a route does not break the loop — it adds another layer. The hidden counter at 0x4A20 increments on every completion, and at 4+ completions, new dialogue options appear that reference previous loops.",
    tags: ["Timeline", "Loop", "Reset"],
  },
  {
    id: "THEORY_24",
    title: "Memory Corruption Theory",
    category: "Memory Theory",
    status: "Community Accepted",
    confidence: 76,
    evidence: 4,
    contradictions: 2,
    support: 4,
    character: "All",
    type: "Save Awareness",
    scenes: 14,
    desc: "Save file corruption is not a bug but a narrative mechanic. The 'Corrupted Data' ending displays raw hex that reads 'The show is over. The audience has left. Why are you still here?' This suggests the game intentionally corrupts saves to communicate with the player.",
    tags: ["Memory", "Corruption", "Meta"],
  },
  {
    id: "THEORY_31",
    title: "White Room Is The Developer Room",
    category: "Meta Theory",
    status: "Unverified",
    confidence: 52,
    evidence: 3,
    contradictions: 3,
    support: 2,
    character: "The Doctor",
    type: "Meta-Narrative",
    scenes: 7,
    desc: "The White Room ending, referenced but never found, may be a debug space that became part of the narrative. The description matches standard game engine default environments: white void, single chair, mirror for reflection testing. If true, this would break the fourth wall most completely.",
    tags: ["Meta", "Developer", "White Room"],
  },
  {
    id: "THEORY_42",
    title: "Harlequin Is Not Human",
    category: "Character Theory",
    status: "Controversial",
    confidence: 61,
    evidence: 3,
    contradictions: 3,
    support: 3,
    character: "Harlequin",
    type: "Hidden Route",
    scenes: 11,
    desc: "Harlequin's dialogue contradicts itself within the same scene, and her 'You again' line on the 4th playthrough does not appear in script files. This suggests dynamically generated content based on player history, implying she may not be a scripted character but an adaptive AI construct within the narrative.",
    tags: ["AI", "Non-Human", "Adaptive"],
  },
  {
    id: "THEORY_56",
    title: "Broken Clock Theory",
    category: "Timeline Theory",
    status: "Unverified",
    confidence: 48,
    evidence: 3,
    contradictions: 4,
    support: 2,
    character: "All",
    type: "Replay-Based",
    scenes: 10,
    desc: "The clock in the main hall always shows 11:47, regardless of playtime. This timestamp appears in 12 different scenes across all routes. The community has mapped its appearance to specific dialogue triggers, suggesting it is not decorative but a hidden timer for a yet-undiscovered event.",
    tags: ["Clock", "Timer", "Hidden Event"],
  },
  {
    id: "THEORY_63",
    title: "Missing Day Theory",
    category: "Timeline Theory",
    status: "Controversial",
    confidence: 55,
    evidence: 3,
    contradictions: 3,
    support: 3,
    character: "All",
    type: "Hidden Route",
    scenes: 8,
    desc: "The game timeline has a 24-hour gap between Scene 7 and Scene 8 across all routes. No character references this gap, but environmental details change (lighting shifts from day to night instantly). Data miners found a 'Day 8' folder in build 1.04 containing unused assets for a full additional day.",
    tags: ["Missing Day", "Timeline Gap", "Cut Content"],
  },
];

function StarRating({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < value ? "text-primary" : "text-outline/30"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TheoryArchiveGrid() {
  return (
    <section id="archive" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          All Freak Circus Theories
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          12 major community theories with confidence scores, evidence ratings, and community support
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {theories.map((theory) => (
            <div
              key={theory.id}
              className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-[JetBrains_Mono] text-xs text-primary">
                  {theory.id}
                </div>
                <div className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                  theory.status === "Community Accepted" ? "border-primary text-primary" :
                  theory.status === "Controversial" ? "border-blood text-blood" :
                  theory.status === "Unverified" ? "border-outline/30 text-on-surface-variant" :
                  "border-blood text-blood"
                }`}>
                  {theory.status}
                </div>
              </div>

              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-1">
                {theory.title}
              </h3>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-3">
                {theory.category}
              </div>

              {/* Confidence Score */}
              <div className="bg-surface border border-outline/20 p-3 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Confidence Score</span>
                  <span className="font-[Creepster] text-xl text-primary">{theory.confidence}%</span>
                </div>
                <div className="w-full bg-outline/20 h-1 mb-3">
                  <div className="bg-primary h-1" style={{ width: `${theory.confidence}%` }} />
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="text-on-surface-variant mb-1">Evidence</div>
                    <StarRating value={theory.evidence} />
                  </div>
                  <div>
                    <div className="text-on-surface-variant mb-1">Contradictions</div>
                    <StarRating value={6 - theory.contradictions} max={5} />
                  </div>
                  <div>
                    <div className="text-on-surface-variant mb-1">Community</div>
                    <StarRating value={theory.support} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-surface border border-outline/20 p-2">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Character</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">{theory.character}</div>
                </div>
                <div className="bg-surface border border-outline/20 p-2">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Type</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">{theory.type}</div>
                </div>
                <div className="bg-surface border border-outline/20 p-2">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Scenes</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">{theory.scenes}</div>
                </div>
                <div className="bg-surface border border-outline/20 p-2">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Category</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">{theory.category}</div>
                </div>
              </div>

              <p className="text-on-surface-variant text-sm mb-4">
                {theory.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {theory.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
