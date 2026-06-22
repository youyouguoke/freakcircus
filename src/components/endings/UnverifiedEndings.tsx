"use client";

const endings = [
  {
    status: "Data-mined",
    title: "Null Route",
    desc: "A branch where no character appears at all. The player walks through empty corridors until the game soft-locks.",
  },
  {
    status: "Referenced",
    title: "White Room Ending",
    desc: "Mentioned in patch notes but never officially found. The Doctor describes it in Scene 7 with disturbing accuracy.",
  },
  {
    status: "Files Found",
    title: "Developer Debug Ending",
    desc: "Contains unused voice lines and placeholder art. Suggests a true ending was cut late in development.",
  },
  {
    status: "Unverified",
    title: "Harlequin's Memory",
    desc: "A route where Harlequin remembers every previous playthrough and confronts the player directly.",
  },
];

export default function UnverifiedEndings() {
  return (
    <section id="unverified" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Unverified Endings
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Rumored endings, data-mined content, impossible routes, and deleted material. These entries have not been independently verified by the archive maintainers.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {endings.map((ending, i) => (
            <div key={i} className="bg-surface-container border border-blood/30 p-6">
              <div className="font-[JetBrains_Mono] text-xs text-blood mb-2">{ending.status}</div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{ending.title}</h3>
              <p className="text-on-surface-variant text-sm">{ending.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
