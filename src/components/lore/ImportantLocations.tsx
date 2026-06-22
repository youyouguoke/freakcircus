"use client";

const locations = [
  {
    name: "Main Tent",
    status: "Public",
    desc: "The central performance space of The Freak Circus. The Main Tent hosts all public performances and serves as the primary meeting point for characters. Despite its ordinary appearance, the tent contains several hidden features: the stage floor has trapdoors that only appear in certain routes, the lighting rig contains unused spotlight positions that suggest a fifth performer, and the audience seating area is always empty — even during 'sold out' performances. The tent's architecture matches 1920s hospital layouts, supporting the theory that the circus was converted from a medical facility.",
    significance: "Primary setting for Pierrot and Harlequin routes",
    secrets: "Trapdoors, unused spotlight positions, empty audience",
  },
  {
    name: "Mirror Hall",
    status: "Hidden",
    desc: "The Mirror Hall is the most lore-rich location in The Freak Circus. It contains seven mirrors, each showing events from different routes. The central mirror breaks the fourth wall by showing the player's desktop. The Hall only appears after failing at least one route, suggesting it serves as a 'punishment' or 'reward' for exploring alternate paths. The Hall's geometry does not match the circus's floor plan — it exists in a space that should be outside the building's boundaries.",
    significance: "Primary setting for Columbina's route and Eternal Silence ending",
    secrets: "7 mirrors showing different routes, central mirror breaks fourth wall, appears only after failure",
  },
  {
    name: "Doctor's Ward",
    status: "Restricted",
    desc: "The Doctor's Ward is a medical examination room that serves as the primary setting for The Doctor's route. It contains medical equipment from the 1920s, including a surgical table, medicine cabinets, and a locked filing cabinet. The Ward's layout matches historical hospital records from 1923, supporting the founding myth theory. Hidden files in the Ward reference 'Project Continuity' and describe memory extraction procedures. The Ward's window shows a different exterior view depending on which route the player is on.",
    significance: "Primary setting for The Doctor's route and Doctor's Note ending",
    secrets: "1920s medical equipment, Project Continuity files, window shows different exteriors",
  },
  {
    name: "Basement Stage",
    status: "Corrupted",
    desc: "The Basement Stage is a corrupted location that appears only in the Null Route and certain glitch states. It is described as a performance space beneath the main tent, but its architecture suggests it was built before the tent above it. The stage contains props from performances that never occurred in the game's timeline, including posters for shows with dates that do not exist. The Basement's lighting system flickers in patterns that match Morse code, spelling out phrases like 'NO ONE IS HERE' and 'YOU ARE ALONE'.",
    significance: "Appears in Null Route and corrupted save states",
    secrets: "Props from non-existent performances, Morse code lighting, predates main tent",
  },
  {
    name: "Silent Exit",
    status: "Hidden",
    desc: "The Silent Exit is a door that appears only in the Eternal Silence ending. It is described as leading 'outside the circus' but shows only darkness when opened. Some players report hearing their own voice when approaching the Exit, and the door handle matches the player's mouse cursor. The Exit's frame contains carvings that match symbols from the Mirror Hall, suggesting a connection between these two hidden locations. Opening the Exit causes the game to crash on some systems, and data miners found an unused scene showing what is behind it.",
    significance: "Appears in Eternal Silence ending",
    secrets: "Shows darkness, player's voice, crashes game, connected to Mirror Hall",
  },
];

export default function ImportantLocations() {
  return (
    <section id="locations" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Important Locations
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Five key locations in The Freak Circus — their narrative significance, hidden secrets, and connections to routes and endings
        </p>

        <div className="space-y-6">
          {locations.map((loc) => (
            <div key={loc.name} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-[Creepster] text-2xl text-primary">
                  {loc.name}
                </h3>
                <span className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                  loc.status === "Public" ? "border-primary text-primary" :
                  loc.status === "Hidden" ? "border-blood text-blood" :
                  loc.status === "Restricted" ? "border-blood text-blood" :
                  "border-blood text-blood"
                }`}>
                  {loc.status}
                </span>
              </div>

              <p className="text-on-surface-variant text-sm mb-4">
                {loc.desc}
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Narrative Significance</div>
                  <div className="text-on-surface-variant">{loc.significance}</div>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Hidden Secrets</div>
                  <div className="text-on-surface-variant">{loc.secrets}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
