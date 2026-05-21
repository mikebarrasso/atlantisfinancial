"use client";

import type { ReactNode } from "react";

export function FinalCTA(): ReactNode {
  const openQuiz = (): void => {
    window.dispatchEvent(new Event("open-quiz"));
  };

  return (
    <section
      id="cta"
      className="relative bg-background px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
    >
      {/* Soft gold glow at center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.06] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center justify-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
          <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
          Start Here
          <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
        </div>

        <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
          Not sure where
          <br />
          you <em className="font-light text-gold">actually</em> stand?
        </h2>

        <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
          Start a conversation directly. Or take the quiz first, ten
          questions to find out whether the financial advice you&apos;ve been
          getting actually matches the complexity of your life.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:info@atlantisfinancial.ca"
            className="focus-ring inline-flex items-center bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-navy-deep transition-colors hover:bg-gold-light"
          >
            Start a Conversation
          </a>
          <button
            type="button"
            onClick={openQuiz}
            className="focus-ring inline-flex items-center border border-border px-7 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-gold hover:text-gold"
          >
            Take the 10-Question Quiz
          </button>
        </div>

        <div className="mt-10 font-serif text-sm italic text-gold">
          Allan Norman · CFP · CIM · RWM
          <span className="mt-1 block text-xs not-italic uppercase tracking-[0.12em] text-silver">
            Atlantis Financial Inc. · Barrie, Ontario
          </span>
        </div>
      </div>
    </section>
  );
}
