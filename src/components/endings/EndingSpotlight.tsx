import Link from "next/link";

const endings = [
  {
    id: "ENDING #01",
    title: "Missing",
    difficulty: "Unknown",
    character: "MC",
    desc: "The only confirmed ending. The player character goes missing and is never found. Triggers when trust thresholds are not met by end of Day 2.",
    href: "/endings",
    status: "confirmed",
  },
];

export default function EndingSpotlight() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Confirmed Ending
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The only ending verified by independent sources
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {endings.map((ending) => (
            <Link key={ending.id} href={ending.href} className="group">
              <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors h-full">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">{ending.id}</div>
                <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{ending.title}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="font-[JetBrains_Mono] text-[10px] px-2 py-0.5 border border-status-confirmed/30 text-status-confirmed bg-status-confirmed/5">VERIFIED</span>
                  <span className="font-[JetBrains_Mono] text-[10px] px-2 py-0.5 border border-outline/30 text-on-surface-variant">Bad Ending</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4">{ending.desc}</p>
                <span className="font-[JetBrains_Mono] text-xs text-primary group-hover:underline">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
