"use client";

import Link from "next/link";

const folders = [
  { id: "F_01", title: "First Fire", status: "RECOVERED", href: "#first-fire" },
  { id: "F_07", title: "Mirror Hall", status: "FRAGMENTED", href: "#mirror-hall" },
  { id: "F_11", title: "Lost Performer", status: "CORRUPTED", href: "#lost-performer" },
  { id: "F_??", title: "Null File", status: "DELETED", href: "#null-file" },
];

export default function ArchiveFolders() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-8">
          Archive Room // RESTRICTED
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {folders.map((folder) => (
            <Link
              key={folder.id}
              href={folder.href}
              className="block bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors group"
            >
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-2">
                folder
              </div>
              <div className="font-[JetBrains_Mono] text-2xl text-primary mb-1">
                {folder.id}
              </div>
              <div className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {folder.title}
              </div>
              <div className="font-[JetBrains_Mono] text-xs text-blood">
                {folder.status}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
