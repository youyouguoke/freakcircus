import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import TicketTakerClient from "./TicketTakerClient";
import { ENDINGS_CONFIRMED, ENDINGS_TOTAL } from "@/lib/site-facts";

export const metadata: Metadata = {
  title: "The Freak Circus Ticket Taker Guide | Freak Circus Hub",
  description: "Ticket Taker guide for The Freak Circus. Confirmed appearances, community-reported scenes, route status, theories, and evidence status.",
  keywords: ["The Freak Circus Ticket Taker", "Ticket Taker guide", "Freak Circus characters", "gatekeeper", "character analysis"],
  openGraph: { title: "The Freak Circus Ticket Taker Guide", description: "Confirmed appearances, community-reported scenes, route status, theories, and evidence status.", type: "article", url: "https://freak-circus.com/characters/ticket-taker" },
  alternates: { canonical: "https://freak-circus.com/characters/ticket-taker" },
};

const faqData = [
  {
    question: "Who is Ticket Taker in The Freak Circus?",
    answer: "Ticket Taker is a character who appears at the boundary of The Freak Circus narrative. Community members have reported encountering Ticket Taker at the circus entrance and in mirror-related scenes. Whether Ticket Taker has a dedicated route, specific endings, or deeper narrative significance is unverified.",
  },
  {
    question: "Does Ticket Taker have a route?",
    answer: "Whether Ticket Taker has a dedicated playable route with specific endings is unverified. Community members speculate about hidden mechanics, but no independent verification exists. The developer has not confirmed a Ticket Taker route.",
  },
  {
    question: "Is Ticket Taker connected to The Doctor?",
    answer: "Both characters appear in Day 2 content. Whether they have a deeper connection is unverified community speculation. Claims about shared physical characteristics or vocal patterns are unverified.",
  },
  {
    question: "Is Ticket Taker the same as Jester?",
    answer: "Community debate continues. Some theorists believe Ticket Taker and Jester are the same entity in different forms. Others argue they are distinct entities with separate roles. No official confirmation exists either way.",
  },
  {
    question: "What is the mirror scene?",
    answer: "Community members have described a scene where the player sees themselves wearing Ticket Taker's mask. Whether this is a confirmed game mechanic or player interpretation is unverified against the current build. Some players have connected this to theories about time loops, but this connection is speculative.",
  },
  {
    question: "Does Ticket Taker have endings?",
    answer: `The current build has ${ENDINGS_TOTAL} documented endings (${ENDINGS_CONFIRMED} confirmed). Whether any are specifically tied to Ticket Taker is unverified. For the complete endings list, see the Endings Archive.`,
  },
  {
    question: "What does Ticket Taker look like?",
    answer: "No officially confirmed visual description has been published by the developer. The in-game sprite shows a figure associated with the circus entrance, but specific details beyond that are unverified.",
  },
  {
    question: "What is Ticket Taker's role in the story?",
    answer: "Ticket Taker appears to function as a boundary or threshold character in the narrative. Whether this role has deeper significance, meta-narrative meaning, or connections to other characters is unverified community speculation.",
  },
];

export default function TicketTakerPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TicketTakerClient faqData={faqData} />
      <ContinueExploring />
      <Footer />
    </main>
  );
}
