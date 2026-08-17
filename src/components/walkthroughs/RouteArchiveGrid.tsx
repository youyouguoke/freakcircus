import Link from "next/link";

const routes = [
  {
    title: "Day 1 Walkthrough",
    character: "All",
    difficulty: "Normal",
    ending: "Sets up path for Day 2",
    unlock: "Available from start",
    summary: "Street setup, first moral forks, Pierrot vulnerability, early Harlequin friction. Your choices here affect which endings are available in Day 2.",
    playtime: "1-2 hours",
    href: "/walkthroughs/pierrot-main-route",
  },
  {
    title: "Day 2 Walkthrough",
    character: "All",
    difficulty: "Normal",
    ending: "Missing (Bad Ending confirmed)",
    unlock: "Complete Day 1",
    summary: "Tent routes, Columbina legend, Jester storytelling, Doctor & Ticket Taker horror set-pieces. The \"Missing\" bad ending triggers here if trust thresholds are not met.",
    playtime: "2-3 hours",
    href: "/walkthroughs",
  },
];

export default function RouteArchiveGrid() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Walkthrough Routes
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Day-by-day guides for The Freak Circus. Only verified information included.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {routes.map((route, i) => (
            <Link key={i} href={route.href} className="group">
              <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">{route.difficulty}</span>
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">{route.playtime}</span>
                </div>
                <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-2">{route.title}</h3>
                <p className="text-on-surface-variant text-sm mb-4">{route.summary}</p>
                <div className="flex items-center gap-2">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Ending:</span>
                  <span className="font-[JetBrains_Mono] text-xs text-primary">{route.ending}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
