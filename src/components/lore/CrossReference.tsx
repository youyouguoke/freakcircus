"use client";

import Link from "next/link";

const connections = [
  {
    lore: "The Columbina Legend",
    loreHref: "/lore",
    ending: "Missing (Bad Ending)",
    endingHref: "/endings",
    theory: "Pierrot-Harlequin Rivalry",
    theoryHref: "/theories",
    route: "Harlequin Route",
    routeHref: "/walkthroughs/harlequin-true-route",
  },
  {
    lore: "Mirror Hall",
    loreHref: "/lore/mirror-hall",
    ending: "Open Ending (unnamed)",
    endingHref: "/endings",
    theory: "Mirror Identity",
    theoryHref: "/theories",
    route: "Pierrot Route",
    routeHref: "/walkthroughs/pierrot-main-route",
  },
  {
    lore: "The Circus",
    loreHref: "/lore",
    ending: "4 Endings Total",
    endingHref: "/endings",
    theory: "Community Theories",
    theoryHref: "/theories",
    route: "All Routes",
    routeHref: "/walkthroughs",
  },
];

export default function CrossReference() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
          Lore Connections
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          How lore, theories, endings, and routes connect in The Freak Circus
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {connections.map((c, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-4 space-y-3">
              <div>
                <div className="font-mono text-[9px] text-on-surface/40 uppercase">Lore</div>
                <Link href={c.loreHref} className="text-primary text-sm hover:underline">{c.lore}</Link>
              </div>
              <div>
                <div className="font-mono text-[9px] text-on-surface/40 uppercase">Ending</div>
                <Link href={c.endingHref} className="text-on-surface text-sm hover:underline">{c.ending}</Link>
              </div>
              <div>
                <div className="font-mono text-[9px] text-on-surface/40 uppercase">Route</div>
                <Link href={c.routeHref} className="text-secondary text-sm hover:underline">{c.route}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
