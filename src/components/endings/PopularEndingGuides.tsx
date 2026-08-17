import Link from "next/link";
import { ENDINGS_TOTAL } from "@/lib/site-facts";

const guides = [
  { name: "Missing Ending — How to Trigger", href: "/endings" },
  { name: `All ${ENDINGS_TOTAL} Endings Overview`, href: "/endings" },
  { name: "Day 1 Walkthrough", href: "/walkthroughs/pierrot-main-route" },
  { name: "Day 2 Walkthrough", href: "/walkthroughs" },
  { name: "Save Points & Data Guide", href: "/walkthroughs/save-guide" },
];

export default function PopularEndingGuides() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Ending Guides
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide, i) => (
            <Link key={i} href={guide.href} className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">GUIDE</div>
              <div className="text-foreground text-sm font-medium">{guide.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
