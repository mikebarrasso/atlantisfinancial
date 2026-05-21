"use client";

import { PublicationsMarquee } from "@/components/publications-marquee";
import { SectionCorners } from "@/components/section-corners";
import type { ReactNode } from "react";

export function Hero(): ReactNode {
  const openQuiz = (): void => {
    window.dispatchEvent(new Event("open-quiz"));
  };

  return (
    <section className="relative border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left column ─ copy + CTAs */}
        <div className="flex min-h-130 flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:min-h-160 lg:border-r lg:border-border lg:px-14 lg:py-24">
          <div
            style={{ ["--enter-delay" as string]: "260ms" }}
            className="enter mb-7 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold"
          >
            <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
            Scenario-Based Financial Planning
          </div>

          <h1
            style={{ ["--enter-delay" as string]: "380ms" }}
            className="enter font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[6.5rem] xl:text-[8rem]"
          >
            The
            <br />
            <em className="font-light text-gold">Missing</em>
            <br />
            <span className="ml-12 inline-block sm:ml-20 lg:ml-28">
              Piece.
            </span>
          </h1>

          <p
            style={{ ["--enter-delay" as string]: "540ms" }}
            className="enter mt-8 font-serif text-xl italic text-gold/75 sm:text-2xl"
          >
            Discover what is possible.
          </p>

          <p
            style={{ ["--enter-delay" as string]: "640ms" }}
            className="enter mt-3 max-w-md font-serif text-base italic leading-relaxed text-muted-foreground sm:text-lg"
          >
            Where money and life collide, and you finally see what&apos;s
            possible.
          </p>

          <div
            style={{ ["--enter-delay" as string]: "800ms" }}
            className="enter mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#cta"
              className="focus-ring inline-flex items-center gap-2 bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-navy-deep transition-colors hover:bg-gold-light"
            >
              Start a Conversation
            </a>
            <button
              type="button"
              onClick={openQuiz}
              className="focus-ring inline-flex items-center gap-2 border border-border px-7 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Take the 10-Question Quiz
            </button>
          </div>
        </div>

        {/* Right column ─ AI hero video (poster fallback) */}
        <div
          style={{ ["--enter-delay" as string]: "200ms" }}
          className="enter-fade relative min-h-80 overflow-hidden bg-muted lg:min-h-160"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
            className="h-full w-full object-cover"
            aria-label="A couple watching different retirement scenarios play out on a screen, with the planner alongside them."
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background/70 to-transparent lg:w-32"
          />
        </div>
      </div>

      {/* As-seen-in marquee — infinite scroll, theme-aware brand colors */}
      <div
        style={{ ["--enter-delay" as string]: "920ms" }}
        className="enter flex flex-col items-center gap-4 border-t border-border bg-muted/20 py-6"
      >
        <span className="px-6 text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80">
          As seen in
        </span>
        <PublicationsMarquee />
      </div>

      <SectionCorners />
    </section>
  );
}
