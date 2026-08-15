"use client";

const timeline = [
  {
    year: "1887",
    title: "The Circus Opens",
    desc: "First documented performance. Location unknown. No audience records survive. The founding date appears in recovered posters and environmental details across all routes.",
  },
  {
    year: "1892",
    title: "First Missing Child",
    desc: "A child disappears during a performance. Parents report 'the clown smiled at us before it happened.' No body found. This event is referenced in Pierrot's dialogue fragments.",
  },
  {
    year: "1903",
    title: "Mirror Hall Incident",
    desc: "Seven performers enter the Mirror Hall. Only three exit. The other four are never seen again, but their reflections remain in the mirrors. The community connects this to the 'Masks Hide The Same Face' theory.",
  },
  {
    year: "1917",
    title: "Doctor Arrives",
    desc: "A traveling physician joins the circus. Medical records begin. His notes mention 'patients who don't remember their own names.' The 'Doctor Is The Observer' theory connects his awareness to the game's meta-narrative.",
  },
  {
    year: "1945",
    title: "Timeline Fracture",
    desc: "Multiple sources report the circus 'disappearing' for 3 days. When it reappears, the performers are different ages. The calendar inside the circus reads 1887.",
  },
  {
    year: "1987",
    title: "White Room Event",
    desc: "The White Room is discovered. A space with no walls, no ceiling, no floor. Only light. And a chair facing a mirror that shows nothing. Referenced in patch notes 1.03 and described by The Doctor in Scene 7.",
  },
  {
    year: "2026",
    title: "Current Routes",
    desc: "Players experience the circus through multiple routes. Each route reveals different fragments. The 'Circus Does Not Exist' theory suggests the player is the one keeping the loop running. The complete picture remains unknown.",
  },
];

export default function CompleteTimeline() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Complete Freak Circus Timeline
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Chronological history of the circus — from the first performance to the current routes
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline/20" />

          <div className="space-y-8">
            {timeline.map((event, i) => (
              <div key={event.year} className={`flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Year marker */}
                <div className="flex-shrink-0 w-8 flex justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 relative z-10" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-surface-container border border-outline/20 p-6">
                  <div className="font-[Creepster] text-2xl text-primary mb-2">
                    {event.year}
                  </div>
                  <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
