"use client";

import { PublicationsMarquee } from "@/components/publications-marquee";
import { SectionCorners } from "@/components/section-corners";
import type { ReactNode } from "react";

export function Hero(): ReactNode {
  const openQuiz = (): void => {
    window.dispatchEvent(new Event("open-quiz"));
  };

  return (
    <section className="border-border relative border-b">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left column - copy + CTAs */}
        <div className="lg:border-border flex min-h-130 flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:min-h-160 lg:border-r lg:px-14 lg:py-24">
          <h1
            style={{ ["--enter-delay" as string]: "380ms" }}
            className="enter text-foreground font-serif text-4xl leading-[1.02] font-light tracking-tight sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem]"
          >
            Know exactly what your{" "}
            <em className="text-gold font-light">retirement</em> can look like.
          </h1>

          <p
            style={{ ["--enter-delay" as string]: "540ms" }}
            className="enter text-gold/75 mt-7 font-serif text-xl italic sm:text-2xl"
          >
            Scenario-based financial planning.
          </p>

          <p
            style={{ ["--enter-delay" as string]: "640ms" }}
            className="enter text-muted-foreground mt-3 max-w-md text-base leading-relaxed sm:text-lg"
          >
            We model your real options together, live, until the path is clear —
            for Canadians at or near retirement, with decisions that can&apos;t
            be undone.
          </p>

          <div
            style={{ ["--enter-delay" as string]: "800ms" }}
            className="enter mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#cta"
              className="focus-ring bg-gold text-navy-deep hover:bg-gold-light inline-flex items-center gap-2 px-7 py-4 text-xs font-semibold tracking-[0.12em] uppercase transition-colors"
            >
              Start a Conversation
            </a>
            <button
              type="button"
              onClick={openQuiz}
              className="focus-ring border-border text-muted-foreground hover:border-gold hover:text-gold inline-flex items-center gap-2 border px-7 py-4 text-xs font-medium tracking-[0.12em] uppercase transition-colors"
            >
              Take the 10-Question Quiz
            </button>
          </div>
        </div>

        {/* Right column - AI hero video (poster fallback) */}
        <div
          style={{ ["--enter-delay" as string]: "200ms" }}
          className="enter-fade bg-muted relative min-h-80 overflow-hidden lg:min-h-160"
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
            className="from-background/70 pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent lg:w-32"
          />
        </div>
      </div>

      {/* As-seen-in marquee, infinite scroll, theme-aware brand colors */}
      <div
        style={{ ["--enter-delay" as string]: "920ms" }}
        className="enter border-border bg-muted/20 flex flex-col items-center gap-4 border-t py-6"
      >
        <span className="text-gold/80 px-6 text-[10px] font-medium tracking-[0.2em] uppercase">
          As seen in
        </span>
        <PublicationsMarquee />
      </div>

      <SectionCorners />
    </section>
  );
}
