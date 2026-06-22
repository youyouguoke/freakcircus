"use client";

const timeline = [
  {
    year: "1987",
    title: "First Performance",
    desc: "The original Freak Circus performance. Records suggest this was a real circus that existed before the game narrative. The date appears in medical files (Doctor's route) and is referenced by Harlequin in her 4th-playthrough dialogue.",
  },
  {
    year: "1994",
    title: "Mirror Hall Incident",
    desc: "A documented event where the circus's mirror hall collapsed during a performance. This incident is referenced in Columbina's hallway — the mirrors in her route show reflections that should not exist. The community theory connects this to the 'Masks Hide The Same Face' theory.",
  },
  {
    year: "2003",
    title: "Doctor Arrival",
    desc: "The Doctor character appears in the circus's records. His medical files contain dates from 2003-2007, suggesting he was a real physician who became part of the circus. The 'Doctor Is The Observer' theory suggests he represents the developer consciousness.",
  },
  {
    year: "2015",
    title: "Loop Begins",
    desc: "The first documented loop iteration. The 'Timeline Reset Theory' suggests this is when the circus became a purgatorial loop. Environmental details across all routes reference 2015 as a baseline — flowers in Pierrot's garden, clock in the main hall, and Columbina's hallway architecture.",
  },
  {
    year: "2024",
    title: "White Room Event",
    desc: "Referenced in patch notes 1.03 but never found in-game. The Doctor describes it in Scene 7 with disturbing accuracy. The 'White Room Is The Developer Room' theory suggests this is a debug space that became part of the narrative. The date 2024 matches the game's release year, suggesting meta-commentary.",
  },
  {
    year: "2026",
    title: "Final Collapse",
    desc: "The current timeline. The 'Circus Does Not Exist' theory suggests the player is the one keeping the circus running by continuing to play. The Corrupted Data ending's hex message — 'The show is over. The audience has left. Why are you still here?' — directly addresses the player in the present tense.",
  },
];

export default function CompleteTimeline() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Complete Freak Circus Timeline
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Chronological history of the circus — from the first performance to the final collapse
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline/20" />

          <div className="space-y-8">
            {timeline.map((event, i) => (
              <div key={event.year} className={`flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Year marker */}
                <div className="flex-shrink-0 w-8 flex justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 relative z-10" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-surface-container border border-outline/20 p-6">
                  <div className="font-[Creepster] text-2xl text-primary mb-2">
                    {event.year}
                  </div>
                  <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
