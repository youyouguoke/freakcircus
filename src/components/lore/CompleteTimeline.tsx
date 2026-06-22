"use client";

const timelineEvents = [
  { year: "1887", event: "The Circus Opens", detail: "First documented performance. Location unknown. No audience records survive." },
  { year: "1892", event: "First Missing Child", detail: "A child disappears during a performance. Parents report 'the clown smiled at us before it happened.' No body found." },
  { year: "1903", event: "Mirror Hall Incident", detail: "Seven performers enter the Mirror Hall. Only three exit. The other four are never seen again, but their reflections remain in the mirrors." },
  { year: "1917", event: "Doctor Arrives", detail: "A traveling physician joins the circus. Medical records begin. His notes mention 'patients who don't remember their own names.'" },
  { year: "1945", event: "Timeline Fracture", detail: "Multiple sources report the circus 'disappearing' for 3 days. When it reappears, the performers are different ages. Some are younger." },
  { year: "1987", event: "White Room Event", detail: "The White Room is discovered. A space with no walls, no ceiling, no floor. Only light. And a chair facing a mirror that shows nothing." },
  { year: "2026", event: "Current Routes", detail: "Players experience the circus through multiple routes. Each route reveals different fragments. The complete picture remains unknown." },
];

export default function CompleteTimeline() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Complete Timeline Of Events
        </h2>
        <p className="text-on-surface-variant text-sm mb-12">
          Chronological history of The Freak Circus — from the first opening to the current routes
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 md:-translate-x-px" />

          {timelineEvents.map((item, i) => (
            <div key={i} className={`relative flex items-start mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Year dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-2 border-surface md:-translate-x-1.5 mt-1.5 z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-surface-container border border-outline/20 p-5">
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">{item.year}</div>
                  <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{item.event}</h3>
                  <p className="text-on-surface-variant text-sm">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
