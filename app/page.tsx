import { ClientStories } from "@/components/client-stories";
import { Faq } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { IdealClient } from "@/components/ideal-client";
import { Process } from "@/components/process";
import { QuizModal } from "@/components/quiz-modal";
import { QuoteBand } from "@/components/quote-band";
import { Reveal } from "@/components/reveal";
import { TeamGrid } from "@/components/team-grid";
import { WhatIf } from "@/components/what-if";
import type { ReactNode } from "react";

export default function HomePage(): ReactNode {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />

        <Reveal>
          <IdealClient />
        </Reveal>

        <Reveal>
          <WhatIf />
        </Reveal>

        <Reveal>
          <QuoteBand />
        </Reveal>

        <Reveal>
          <Process />
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

      {/* Quiz modal, mounted globally so any "Take the Quiz" button on the page
        can open it via `window.dispatchEvent(new Event("open-quiz"))`. */}
      <QuizModal />
    </>
  );
}
