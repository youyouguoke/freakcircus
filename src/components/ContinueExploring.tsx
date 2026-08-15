import Link from "next/link";

interface ExploreItem {
  label: string;
  href: string;
  icon: string;
  description: string;
}

const defaultItems: ExploreItem[] = [
  {
    label: "Characters",
    href: "/characters",
    icon: "🎭",
    description: "Meet every performer in the circus",
  },
  {
    label: "Walkthroughs",
    href: "/walkthroughs",
    icon: "🎮",
    description: "Day-by-day guides for every route",
  },
  {
    label: "Endings",
    href: "/endings",
    icon: "🎪",
    description: "All endings explained with unlock conditions",
  },
  {
    label: "Lore Archive",
    href: "/lore",
    icon: "📖",
    description: "Timeline, symbols, and hidden meanings",
  },
  {
    label: "Theories",
    href: "/theories",
    icon: "🧩",
    description: "Community investigations and fan theories",
  },
  {
    label: "Download",
    href: "/download",
    icon: "⬇️",
    description: "Get the official demo from itch.io",
  },
  {
    label: "Contribute",
    href: "/contribute",
    icon: "✏️",
    description: "Submit theories, corrections, and discoveries",
  },
  {
    label: "Resources",
    href: "/resources",
    icon: "🔗",
    description: "Embeddable charts, social posts, and link assets",
  },
  {
    label: "Day 3 Status",
    href: "/day-3-release-date",
    icon: "📅",
    description: "Official status, roadmap, and timeline for Day 3",
  },
];

interface ContinueExploringProps {
  title?: string;
  items?: ExploreItem[];
}

export default function ContinueExploring({
  title = "Continue Exploring",
  items = defaultItems,
}: ContinueExploringProps) {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-[Epilogue] text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
