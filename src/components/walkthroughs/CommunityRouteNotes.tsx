"use client";

const notes = [
  {
    quote: "I only unlocked the Silent Route after replaying Harlequin twice. Something about failing his route first makes Pierrot's dialogue change.",
    author: "u/route_archivist",
    votes: 445,
  },
  {
    quote: "The route changed when I stopped responding. By Scene 10, Pierrot was finishing my sentences with dialogue I had never selected.",
    author: "u/silent_runner",
    votes: 398,
  },
  {
    quote: "This dialogue never appeared on my first playthrough. The 'White Room' reference only showed up after I had seen 3 different endings.",
    author: "u/memory_hunter",
    votes: 312,
  },
  {
    quote: "Columbina's hallway changes. First playthrough: 3 doors. Third playthrough: 4 doors. Fifth playthrough: the 4th door was open.",
    author: "u/corridor_walker",
    votes: 267,
  },
];

export default function CommunityRouteNotes() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Player Route Discoveries
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
