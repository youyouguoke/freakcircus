"use client";

import Link from "next/link";

const archives = [
  { slug: "pierrot-main-route", title: "Pierrot Main Route", desc: "The standard route. 31 decision points, 3 endings.", status: "Complete" },
  { slug: "pierrot-silent-route", title: "Pierrot Silent Route", desc: "Hidden route requiring specific silence conditions. 42 steps, 2 endings.", status: "Complete" },
  { slug: "harlequin-true-route", title: "Harlequin True Route", desc: "Harlequin's complete story. 24 steps, 4 endings.", status: "Complete" },
  { slug: "doctor-memory-route", title: "Doctor Memory Route", desc: "Unlocks medical archive records. 18 steps, 2 endings.", status: "Complete" },
  { slug: "columbina-fractured-route", title: "Columbina Fractured Route", desc: "Timeline-fragmented narrative. 27 steps, 3 endings.", status: "Complete" },
  { slug: "null-route", title: "Null Route", desc: "The hidden final route. 56 steps, 1 ending.", status: "Complete" },
];

export default function WalkthroughArchiveGrid() {
  return (
    <section id="archive" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Full Route Archive
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {archives.map((archive) => (
            <Link
              key={archive.slug}
              href={`/walkthroughs/${archive.slug}`}
              className="block bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors"
            >
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{archive.title}</h3>
              <p className="text-on-surface-variant text-sm mb-4">{archive.desc}</p>
              <span className="font-[JetBrains_Mono] text-xs uppercase px-2 py-1 border border-primary text-primary">
                {archive.status}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
