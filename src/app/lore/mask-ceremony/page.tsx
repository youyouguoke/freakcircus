import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mask Ceremony — Symbolism, Ritual & Character Identity | Freak Circus Hub",
  description: "Complete guide to the Mask Ceremony in The Freak Circus. Covers mask symbolism, the ritual's significance, and how masks represent fractured identity across routes.",
  keywords: ["Mask Ceremony", "mask symbolism", "The Freak Circus lore", "character identity", "fractured personality"],
  alternates: {
    canonical: "https://freak-circus.com/lore/mask-ceremony",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            LORE_GUIDE // MASK_CEREMONY
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            The Mask Ceremony
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            Why every character wears a mask — and what they conceal beneath it.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Mask Ceremony is an unspoken ritual in The Freak Circus where every character wears a mask that represents their performed identity. The masks never come off in the game, suggesting the characters are defined by what they conceal rather than what they reveal. Each mask shares design elements with the others — Pierrot's tear matches Harlequin's smile, The Doctor's glasses match Columbina's veil — suggesting all characters are aspects of a single fractured personality.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Historical Record</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The masks were part of the original performers' costumes, designed to enhance the emotional impact of their performances. When Project Continuity reconstructed the performers, the masks became part of their reconstructed identities — not just costumes but integral aspects of their personalities. The Doctor's files describe the masks as 'identity anchors' that help stabilize the reconstructed memories. Without their masks, the characters would lose their sense of self.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Evidence</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">1. All characters wear masks throughout the game.
2. Mask designs appear in the title screen, loading screens, and ending credits.
3. The masks share design elements — suggesting a common origin.
4. Characters never remove their masks, even in intimate scenes.
5. The Doctor's files describe masks as 'identity anchors.'
6. Unused sprites show the characters without masks — their faces are blank.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Characters</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Pierrot: His mask conceals sadness — the tear is a permanent feature.
• Harlequin: Her mask conceals anger — the smile is a performance.
• The Doctor: His mask conceals guilt — the glasses represent clinical detachment.
• Columbina: Her mask conceals knowledge — the veil represents hidden awareness.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Endings</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Eternal Silence: Pierrot's mask cracks in the final scene, revealing nothing beneath.
• Grand Finale: Harlequin's mask burns with the circus, suggesting her identity is tied to the location.
• Columbina's Truth: The mirror shows the player wearing Columbina's mask.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Theories</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Fractured Identity: All characters are aspects of a single personality, and the masks represent different emotional states.
• Memory Anchor: The masks are technological devices that stabilize reconstructed memories.
• Purgatorial Performance: The characters must wear masks to maintain their roles in the circus's eternal performance.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Community Debate</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The community debates whether the masks are literal objects or metaphorical representations. The 'literal' camp points to The Doctor's files and the unused sprites as evidence. The 'metaphorical' camp argues that the masks represent the characters' emotional defenses. A third theory suggests the masks are both — physical devices that create psychological effects, explaining why characters cannot remove them.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Q: Do characters ever remove their masks?
A: No. The game never shows a character without their mask. Unused sprites show blank faces beneath.

Q: Are the masks related to Project Continuity?
A: Yes. The Doctor's files describe them as 'identity anchors' that stabilize reconstructed memories.

Q: What do the masks conceal?
A: Each mask conceals a specific emotion: sadness, anger, guilt, or knowledge. The unused sprites suggest the characters have no faces beneath — only blankness.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/lore#symbols" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Symbol</div>
                  <div className="font-bold text-foreground">Symbol Archive →</div>
                  <div className="text-on-surface-variant text-sm">All recurring symbols and meanings</div>
                </Link>
                <Link href="/theories" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Theory</div>
                  <div className="font-bold text-foreground">Fractured Identity Theory →</div>
                  <div className="text-on-surface-variant text-sm">Are all characters one person?</div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
