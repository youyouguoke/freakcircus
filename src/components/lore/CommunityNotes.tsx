"use client";

const notes = [
  {
    quote: "The mirrors reflected Columbina before she entered the room. I checked my recording — she was not in the scene yet.",
    author: "u/mirror_watcher",
    votes: 523,
  },
  {
    quote: "I found dialogue referencing a fire that never happened. The characters talk about it like it was yesterday, but there's no fire in any scene.",
    author: "u/history_diver",
    votes: 467,
  },
  {
    quote: "The map layout changed after replaying Pierrot's route. The door to the Mirror Hall moved to the other side of the corridor.",
    author: "u/map_archivist",
    votes: 389,
  },
  {
    quote: "I found a newspaper clipping in the game files dated 1923. The circus wasn't supposed to exist then.",
    author: "u/file_diver",
    votes: 298,
  },
];

export default function CommunityNotes() {
  return (
    <section id="community-notes" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Recovered Community Notes
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
