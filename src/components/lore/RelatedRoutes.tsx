"use client";

import Link from "next/link";

const connections = [
  { lore: "First Circus Fire", theory: "Loop Theory", ending: "Eternal Silence", walkthrough: "pierrot-main-route" },
  { lore: "Mirror Hall", theory: "Broken Mirror Theory", ending: "White Room", walkthrough: "harlequin-true-route" },
  { lore: "Null Performer", theory: "Observer Theory", ending: "Infinite Loop", walkthrough: "null-route" },
  { lore: "Doctor's Ward", theory: "Memory Archive Theory", ending: "Grand Finale", walkthrough: "doctor-memory-route" },
  { lore: "Silent Exit", theory: "Escape Theory", ending: "Eternal Silence", walkthrough: "columbina-fractured-route" },
];

export default function RelatedRoutes() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Lore Connections
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline/30">
                <th className="text-left py-3 px-4 font-[JetBrains_Mono] text-xs uppercase text-on-surface-variant">Lore</th>
                <th className="text-left py-3 px-4 font-[JetBrains_Mono] text-xs uppercase text-on-surface-variant">Theory</th>
                <th className="text-left py-3 px-4 font-[JetBrains_Mono] text-xs uppercase text-on-surface-variant">Ending</th>
                <th className="text-left py-3 px-4 font-[JetBrains_Mono] text-xs uppercase text-on-surface-variant">Route</th>
              </tr>
            </thead>
            <tbody>
              {connections.map((conn, i) => (
                <tr key={i} className="border-b border-outline/10">
                  <td className="py-3 px-4 text-foreground">{conn.lore}</td>
                  <td className="py-3 px-4 text-on-surface-variant">{conn.theory}</td>
                  <td className="py-3 px-4 text-on-surface-variant">{conn.ending}</td>
                  <td className="py-3 px-4">
                    <Link href={`/walkthroughs/${conn.walkthrough}`} className="text-primary hover:underline">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
