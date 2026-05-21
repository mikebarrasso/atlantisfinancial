import { ClientStories } from "@/components/client-stories";
import { Faq } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { IdealClient } from "@/components/ideal-client";
import { Plan } from "@/components/plan";
import { Process } from "@/components/process";
import { QuizModal } from "@/components/quiz-modal";
import { QuoteBand } from "@/components/quote-band";
import { Reveal } from "@/components/reveal";
import { Stakes } from "@/components/stakes";
import { TeamGrid } from "@/components/team-grid";
import { WhatIf } from "@/components/what-if";
import type { ReactNode } from "react";

/**
 * Homepage section order follows the StoryBrand SB7 flow:
 *   Hero (one-liner) → Stakes (failure) → Is This You (empathy) →
 *   Plan (how to start) → What If/Quiz (differentiator) →
 *   Process (methodology) → Quote (philosophical) → Stories (success) →
 *   Team (guide authority) → FAQ (objections) → Final CTA (repeat).
 */
export default function HomePage(): ReactNode {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />

        <Reveal>
          <Stakes />
        </Reveal>

        <Reveal>
          <IdealClient />
        </Reveal>

        <Reveal>
          <Plan />
        </Reveal>

        <Reveal>
          <WhatIf />
        </Reveal>

        <Reveal>
          <Process />
        </Reveal>

        <Reveal>
          <QuoteBand />
        </Reveal>

        <Reveal>
          <ClientStories />
        </Reveal>

        <Reveal>
          <TeamGrid />
        </Reveal>

        <Reveal>
          <Faq />
        </Reveal>

        <Reveal>
          <FinalCTA />
        </Reveal>
      </main>
      <Footer />

      {/* Quiz modal, mounted globally so any "Take the Quiz" button opens it. */}
      <QuizModal />
    </>
  );
}
