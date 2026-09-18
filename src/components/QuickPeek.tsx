import Link from "next/link";

interface QuickPeekItem {
  label: string;
  href: string;
  hint: string;
}

interface QuickPeekProps {
  /** "surface" matches play-online style, "archive" matches download style */
  theme?: "surface" | "archive";
  title?: string;
  subtitle?: string;
  items?: QuickPeekItem[];
}

const defaultItems: QuickPeekItem[] = [
  {
    label: "Pierrot Character Deep-Dive",
    href: "/characters/pierrot",
    hint: "The yandere clown — personality, route triggers, hidden dialogues",
  },
  {
    label: "Day 1 Complete Walkthrough",
    href: "/walkthroughs/day-1",
    hint: "Every choice mapped, every flag explained",
  },
  {
    label: "The Only Confirmed Ending",
    href: "/endings",
    hint: "\"Missing\" — how to unlock it and what it means",
  },
];

export default function QuickPeek({
  theme = "surface",
  title = "Before You Go",
  subtitle = "Ready? Grab the game — or take a quick peek at what's inside first:",
  items = defaultItems,
}: QuickPeekProps) {
  const isArchive = theme === "archive";

  const bg = isArchive ? "bg-void-black" : "bg-surface";
  const cardBg = isArchive ? "archive-card" : "bg-surface-container border border-outline/20";
  const labelColor = isArchive ? "text-faint-paper" : "text-on-surface-variant";
  const titleColor = isArchive ? "text-paper" : "text-foreground";
  const accentColor = isArchive ? "text-circus-red" : "text-primary";
  const divider = isArchive ? "" : "border-t border-outline/10";
  const tagClass = isArchive
    ? "font-label text-[0.55rem]"
    : "font-[JetBrains_Mono] text-[0.6rem] uppercase tracking-widest";

  return (
    <section className={`${bg} ${divider} py-14 px-4 md:px-12`}>
      <div className="max-w-4xl mx-auto">
        <div className={`${tagClass} ${accentColor} mb-2 flex items-center gap-3`}>
          <span className={`inline-block w-6 h-px ${isArchive ? "bg-circus-red" : "bg-primary"}`} />
          QUICK PEEK
        </div>
        <h3 className={`font-heading text-xl md:text-2xl font-bold ${titleColor} mb-2`}>
          {title}
        </h3>
        <p className={`${labelColor} text-sm mb-6`}>
          {subtitle}
        </p>

        <div className="grid sm:grid-cols-3 gap-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${cardBg} p-4 block group transition-colors`}
            >
              <div className={`${accentColor} ${tagClass} mb-2 group-hover:underline`}>
                {item.label} →
              </div>
              <p className={`${labelColor} text-xs leading-relaxed`}>
                {item.hint}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
