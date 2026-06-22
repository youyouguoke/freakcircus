"use client";

const triggers = [
  { id: "01", name: "Remain Silent Three Scenes", desc: "In Pierrot's route, refuse all dialogue options for three consecutive scenes in Act II. This unlocks the Silent Route branch.", route: "Pierrot Silent Route" },
  { id: "02", name: "Open Mirror After Doctor Failure", desc: "After failing The Doctor's route once, the mirror in Scene 9 becomes interactive. Examining it reveals a hidden file location.", route: "Doctor Memory Route" },
  { id: "03", name: "View Ending #11 Before Scene 9", desc: "In Columbina's route, viewing the Corrupted Data ending before Scene 9 causes her hallway to display a fourth door.", route: "Columbina Fractured Route" },
  { id: "04", name: "Select All Aggressive Options", desc: "In Harlequin's route, choosing every confrontational dialogue option unlocks her True Route ending instead of the standard one.", route: "Harlequin True Route" },
  { id: "05", name: "Fail Two Endings Before Loop 3", desc: "In Columbina's route, failing any two endings before starting Loop 3 causes her to reference those failures in dialogue.", route: "Columbina Fractured Route" },
];

export default function HiddenTriggerArchive() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Hidden Trigger Archive
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Documented triggers that unlock hidden routes, secret dialogue, and alternate endings
        </p>

        <div className="space-y-4">
          {triggers.map((t) => (
            <div key={t.id} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">
                  #{t.id}
                </span>
                <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
                  {t.route}
                </span>
              </div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {t.name}
              </h3>
              <p className="text-on-surface-variant text-sm">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
