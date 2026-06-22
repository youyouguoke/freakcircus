"use client";

export default function ReplayTracker() {
  return (
    <section id="requirements" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Replay Requirements
        </h2>
        <div className="bg-surface-container border border-outline/20 p-6">
          <p className="text-on-surface-variant mb-4">
            The following conditions persist between playthroughs and affect route availability:
          </p>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              <span>Mirror Hall observations carry over to all subsequent routes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              <span>Character relationship states persist across saves</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              <span>Hidden dialogue options unlock after completing specific endings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              <span>Title screen wait time decreases with each completed route</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
