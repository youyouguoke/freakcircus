"use client";

const notes = [
  {
    quote: "I replayed Columbina's route three times and the hallway changed. The third time, there was a door that wasn't there before.",
    author: "u/corridor_walker",
    votes: 412,
  },
  {
    quote: "Pierrot references dialogue choices I never selected. I checked my save file — I had never chosen those options in any playthrough.",
    author: "u/loop_hunter",
    votes: 389,
  },
  {
    quote: "The save file timestamps stop matching after Ending #11. My system clock says 2am but the save says 00:00:00 from a date that hasn't happened yet.",
    author: "u/time_glitch",
    votes: 267,
  },
  {
    quote: "Harlequin looked at the screen during my 5th replay. Not at the protagonist. At the screen.",
    author: "u/void_walker",
    votes: 198,
  },
];

export default function CommunityInvestigations() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Community Notes & Discoveries
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {notes.map((note, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6">
              <blockquote className="text-on-surface-variant italic mb-4">
                "{note.quote}"
              </blockquote>
              <footer className="flex items-center gap-2">
                <span className="font-[JetBrains_Mono] text-xs text-primary">
                  — {note.author}
                </span>
                <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
                  ▲ {note.votes}
                </span>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
