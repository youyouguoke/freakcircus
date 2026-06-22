"use client";

const walkthroughs = [
  {
    title: "Pierrot Silent Route",
    desc: "A hidden interaction changes the final confrontation. Silence is not passive — it is a choice.",
  },
  {
    title: "Doctor's Memory Route",
    desc: "The Doctor collects more than medical data. Some files exist outside the main storyline.",
  },
  {
    title: "Columbina Fractured Route",
    desc: "Perfection requires repetition. What you remember may not be what happened.",
  },
];

export default function SpoilerWalkthroughs() {
  return (
    <section id="hidden-branches" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Spoiler-Safe Walkthroughs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {walkthroughs.map((w) => (
            <div key={w.title} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {w.title}
              </h3>
              <p className="text-on-surface-variant text-sm">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
