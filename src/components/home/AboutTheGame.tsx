"use client";

import Link from "next/link";

export default function AboutTheGame() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          About The Freak Circus
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-surface-container border border-outline/20 p-6">
            <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">
              What Is The Freak Circus?
            </h3>
            <p className="text-on-surface-variant text-sm mb-4">
              Many players first discover The Freak Circus through TikTok clips featuring Pierrot's route. What initially appears to be a simple horror visual novel quickly turns into a community-wide investigation into hidden dialogue, route memory, and contradictory endings. The game has no traditional jump scares. Instead, it builds dread through silence, repetition, and the growing realization that the characters know more than they should.
            </p>
            <p className="text-on-surface-variant text-sm">
              The community has spent over two years mapping routes, and new triggers are still being found. The most recent discovery — a hidden counter in save files that affects dialogue options — was documented in March 2026. This archive collects everything verified by multiple players, separating confirmed mechanics from speculation.
            </p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">
              Why We Think The Game Works
            </h3>
            <p className="text-on-surface-variant text-sm mb-4">
              Unlike most horror visual novels, The Freak Circus turns replaying into part of the narrative itself. The game repeatedly encourages players to question whether they are discovering new content or simply remembering content that was always there. This creates a unique tension where the player cannot trust their own memory of previous playthroughs.
            </p>
            <p className="text-on-surface-variant text-sm">
              The replay-aware mechanics are not just technical features — they are narrative devices. When Pierrot references a choice you made three routes ago, the game is not breaking the fourth wall. It is suggesting that the circus exists outside the save file system, and that the characters have always been watching.
            </p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">
              Who Are The Main Characters?
            </h3>
            <p className="text-on-surface-variant text-sm mb-4">
              Pierrot is the melancholic clown and the most discussed character in the community. His route introduces the silence mechanic and the loop theory. Harlequin brings chaotic energy with dialogue that shifts between playful and threatening. Players have reported her saying "You again" after multiple replays, a line that does not appear in the script files.
            </p>
            <p className="text-on-surface-variant text-sm">
              The Doctor serves as the circus physician, but his route contains the most disturbing clinical observations. He describes the White Room ending in Scene 7 with accuracy that suggests foreknowledge. Columbina appears gentle but her three-loop storyline requires perfect alignment — any deviation resets progress. Many players believe she is the only character who truly understands the circus.
            </p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">
              How Many Endings Are There?
            </h3>
            <p className="text-on-surface-variant text-sm mb-4">
              The community has confirmed 8 endings through repeated testing. Standard routes include Grand Finale, Smile For Me, and Doctor's Note. Secret endings like Eternal Silence and Columbina's Truth require specific conditions across multiple playthroughs. Corrupted endings break the game interface, displaying raw hex data before crashing.
            </p>
            <p className="text-on-surface-variant text-sm">
              The Corrupted Data ending remains unverified — found in unused game files but never legitimately unlocked. Data miners discovered references to a 13th ending in build 1.04. The White Room ending, described by The Doctor in Scene 7, has never been officially found despite extensive community effort.
            </p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6 md:col-span-2">
            <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">
              Where Can You Play The Freak Circus?
            </h3>
            <p className="text-on-surface-variant text-sm">
              The game is available on itch.io and runs directly in your browser without installation. It is rated 18+ for psychological horror, body horror, and unsettling narrative content. A single route takes 4-6 hours, but full completion requires 40+ hours due to replay dependencies and hidden triggers. For players who want to experience every ending without repeated playthroughs, this archive provides verified walkthroughs, character analysis, and community discoveries. All content here is compiled from player testing and documented route verification, not from leaked materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
