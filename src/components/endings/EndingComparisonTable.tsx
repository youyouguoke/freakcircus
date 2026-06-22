"use client";

const endings = [
  {
    name: "The Grand Finale",
    character: "Harlequin",
    difficulty: "Normal",
    type: "Canon",
    verified: "Yes",
    spoilers: "None",
    unlock: "Complete Harlequin route with standard dialogue choices. No special conditions required.",
    choices: [
      "Scene 4: Accept Harlequin's invitation to the stage",
      "Scene 7: Choose 'I want to see the real you'",
      "Scene 12: Stay for the final performance",
    ],
    rewards: "CG: Harlequin's final bow. Achievement: 'The Show Must Go On'.",
  },
  {
    name: "Smile For Me",
    character: "Pierrot",
    difficulty: "Normal",
    type: "Canon",
    verified: "Yes",
    spoilers: "Low",
    unlock: "Accept Pierrot's offer during the garden scene in Act III.",
    choices: [
      "Scene 3: Approach Pierrot in the garden",
      "Scene 6: Accept his offer to 'stay a while'",
      "Scene 9: Choose 'I trust you'",
    ],
    rewards: "CG: Pierrot's smile. Achievement: 'Smile For Me'.",
  },
  {
    name: "The Doctor's Note",
    character: "The Doctor",
    difficulty: "Hard",
    type: "Secret",
    verified: "Yes",
    spoilers: "Medium",
    unlock: "Find all 5 hidden medical files before the final encounter.",
    choices: [
      "Scene 2: Search the drawer for File 1",
      "Scene 4: Check the cabinet for File 2",
      "Scene 6: Look under the floorboard for File 3",
      "Scene 8: Examine the bookshelf for File 4",
      "Scene 10: Check the desk for File 5",
    ],
    rewards: "CG: The Doctor's handwritten note. Achievement: 'Medical History'.",
  },
  {
    name: "Eternal Silence",
    character: "Pierrot",
    difficulty: "Hard",
    type: "Secret",
    verified: "Yes",
    spoilers: "High",
    unlock: "Refuse every major dialogue interaction during the final act. Screen stays black for 4 minutes.",
    choices: [
      "Scene 10: Refuse Pierrot's first question",
      "Scene 11: Refuse the second question",
      "Scene 12: Refuse the final question",
      "Wait 4 minutes on black screen",
    ],
    rewards: "No CG. Post-credits narration only. Achievement: 'Eternal Silence'.",
  },
  {
    name: "Columbina's Truth",
    character: "Columbina",
    difficulty: "Very Hard",
    type: "Secret",
    verified: "Yes",
    spoilers: "Very High",
    unlock: "Perfect alignment of all dialogue choices across three loops. Any deviation resets to Loop 1.",
    choices: [
      "Loop 1: Choose all 'gentle' responses",
      "Loop 2: Choose all 'truthful' responses",
      "Loop 3: Choose all 'accepting' responses",
      "Scene 12: Enter the fourth door",
    ],
    rewards: "CG: The fourth door opening. Achievement: 'Columbina's Truth'.",
  },
  {
    name: "White Room",
    character: "Unknown",
    difficulty: "Impossible",
    type: "False",
    verified: "No",
    spoilers: "Unknown",
    unlock: "Mentioned in patch notes 1.03. Conditions unknown. The Doctor describes it in Scene 7.",
    choices: ["No known unlock path."],
    rewards: "Unknown.",
  },
  {
    name: "Corrupted Data",
    character: "???",
    difficulty: "Impossible",
    type: "Corrupted",
    verified: "No",
    spoilers: "Extreme",
    unlock: "Found only in modified game files. Screen displays raw hex before crash.",
    choices: ["No legitimate unlock path known."],
    rewards: "None. Game crashes after hex display.",
  },
  {
    name: "Harlequin's Laughter",
    character: "Harlequin",
    difficulty: "Hidden",
    type: "Joke",
    verified: "Yes",
    spoilers: "Low",
    unlock: "Select every comedic option in a single playthrough.",
    choices: [
      "Scene 2: Choose the joke option",
      "Scene 5: Choose the absurd option",
      "Scene 8: Choose the comedic option",
      "Scene 11: Choose the silly option",
    ],
    rewards: "CG: Harlequin laughing. Achievement: 'Harlequin's Laughter'.",
  },
];

export default function EndingComparisonTable() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          All Endings Table
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Complete ending guide with unlock conditions, requirements, and rewards for every ending
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline/20">
                <th className="text-left p-3 text-foreground">Ending</th>
                <th className="text-left p-3 text-foreground">Character</th>
                <th className="text-left p-3 text-foreground">Difficulty</th>
                <th className="text-left p-3 text-foreground">Type</th>
                <th className="text-left p-3 text-foreground">Unlock Conditions</th>
                <th className="text-left p-3 text-foreground">Rewards</th>
              </tr>
            </thead>
            <tbody>
              {endings.map((e) => (
                <tr key={e.name} className="border-b border-outline/10">
                  <td className="p-3 text-foreground font-bold">{e.name}</td>
                  <td className="p-3 text-on-surface-variant">{e.character}</td>
                  <td className="p-3">
                    <span className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                      e.difficulty === "Normal" ? "border-primary text-primary" :
                      e.difficulty === "Hard" ? "border-blood text-blood" :
                      e.difficulty === "Very Hard" ? "border-blood text-blood" :
                      "border-outline/30 text-on-surface-variant"
                    }`}>{e.difficulty}</span>
                  </td>
                  <td className="p-3">
                    <span className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                      e.type === "Canon" ? "border-primary text-primary" :
                      e.type === "Secret" ? "border-blood text-blood" :
                      e.type === "Joke" ? "border-primary text-primary" :
                      "border-outline/30 text-on-surface-variant"
                    }`}>{e.type}</span>
                  </td>
                  <td className="p-3 text-on-surface-variant text-xs max-w-xs">{e.unlock}</td>
                  <td className="p-3 text-on-surface-variant text-xs max-w-xs">{e.rewards}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
