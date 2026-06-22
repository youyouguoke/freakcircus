"use client";

import Link from "next/link";

const connections = [
  {
    lore: "The First Circus Fire",
    loreHref: "/lore/first-circus-fire",
    ending: "Columbina's Truth",
    endingHref: "/endings/columbinas-truth",
    theory: "The Fire Wasn't Real",
    theoryHref: "/theories/fire-wasnt-real",
    route: "Columbina Fractured Route",
    routeHref: "/walkthroughs/columbina-fractured-route",
  },
  {
    lore: "Mirror Hall",
    loreHref: "/lore/mirror-hall",
    ending: "Eternal Silence",
    endingHref: "/endings/eternal-silence",
    theory: "Mirror Identity",
    theoryHref: "/theories/mirror-identity",
    route: "Pierrot Silent Route",
    routeHref: "/walkthroughs/pierrot-silent-route",
  },
  {
    lore: "Null Performer",
    loreHref: "/lore/null-performer",
    ending: "Corrupted Data",
    endingHref: "/endings/corrupted-data",
    theory: "Observer Theory",
    theoryHref: "/theories/observer-theory",
    route: "Null Route",
    routeHref: "/walkthroughs/null-route",
  },
  {
    lore: "Doctor's Ward",
    loreHref: "/lore/doctors-ward",
    ending: "Doctor's Note",
    endingHref: "/endings/doctors-note",
    theory: "Doctor Created Circus",
    theoryHref: "/theories/doctor-created-circus",
    route: "Doctor Memory Route",
    routeHref: "/walkthroughs/doctor-memory-route",
  },
];

export default function CrossReference() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Lore Connections
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          How lore, theories, endings, and routes connect — forming the complete narrative web
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {connections.map((conn, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Creepster] text-xl text-primary mb-4">
                {conn.lore}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant w-16">Lore</span>
                  <Link href={conn.loreHref} className="text-primary hover:underline">
                    {conn.lore} →
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant w-16">Theory</span>
                  <Link href={conn.theoryHref} className="text-primary hover:underline">
                    {conn.theory} →
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant w-16">Ending</span>
                  <Link href={conn.endingHref} className="text-primary hover:underline">
                    {conn.ending} →
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant w-16">Route</span>
                  <Link href={conn.routeHref} className="text-primary hover:underline">
                    {conn.route} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
