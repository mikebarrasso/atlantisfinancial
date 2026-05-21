"use client";

import type { ReactNode } from "react";

export function FinalCTA(): ReactNode {
  const openQuiz = (): void => {
    window.dispatchEvent(new Event("open-quiz"));
  };

  return (
    <section
      id="cta"
      className="bg-background relative px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
    >
      {/* Soft gold glow at center */}
      <div
        aria-hidden="true"
        className="bg-gold/[0.06] pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="text-gold mb-6 inline-flex items-center justify-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
          Start Here
        </div>

        <h2 className="text-foreground font-serif text-5xl leading-[1.05] font-light tracking-tight sm:text-6xl lg:text-[4.5rem]">
          Not sure where
          <br />
          you <em className="text-gold font-light">actually</em> stand?
        </h2>

        <p className="text-muted-foreground mt-7 text-base leading-relaxed sm:text-[1.05rem]">
          Start a conversation directly. Or take the quiz first, ten questions
          to find out whether the financial advice you&apos;ve been getting
          actually matches the complexity of your life.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:info@atlantisfinancial.ca"
            className="focus-ring bg-gold text-navy-deep hover:bg-gold-light inline-flex items-center px-7 py-4 text-xs font-semibold tracking-[0.12em] uppercase transition-colors"
          >
            Start a Conversation
          </a>
          <button
            type="button"
            onClick={openQuiz}
            className="focus-ring border-border text-muted-foreground hover:border-gold hover:text-gold inline-flex items-center border px-7 py-4 text-xs font-medium tracking-[0.12em] uppercase transition-colors"
          >
            Take the 10-Question Quiz
          </button>
        </div>

        <div className="text-gold mt-10 font-serif text-sm italic">
          Allan Norman · CFP · CIM · RWM
          <span className="text-silver mt-1 block text-xs tracking-[0.12em] uppercase not-italic">
            Atlantis Financial Inc. · Barrie, Ontario
          </span>
        </div>
      </div>
    </section>
  );
}
