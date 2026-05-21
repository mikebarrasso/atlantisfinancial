"use client";

import { SectionCorners } from "@/components/section-corners";
import type { ReactNode } from "react";

export function WhatIf(): ReactNode {
  const openQuiz = (): void => {
    window.dispatchEvent(new Event("open-quiz"));
  };

  return (
    <section id="what-if" className="relative border-b border-border">
      <div className="grid grid-cols-1 items-stretch gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-14 lg:py-24">
        {/* Left, headline + reframe pullquote */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
            The Idea Behind Everything
          </div>
          <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.6rem]">
            What if you could see your{" "}
            <em className="font-light text-gold">future</em>
            <br />
            before you decide?
          </h2>
          <p className="mt-5 font-serif text-lg italic leading-snug text-muted-foreground sm:text-xl">
            Not a projection. A live conversation with your possibilities.
          </p>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            Most financial planning starts by asking what you want, before
            you&apos;ve ever seen what&apos;s possible.{" "}
            <em className="font-serif italic text-foreground">
              We start with your life.
            </em>{" "}
            Together, in real time, we explore the futures that might exist
            for you, adjusting, comparing, asking{" "}
            <em className="font-serif italic text-foreground">what if</em>,
            until you see clearly what works, what doesn&apos;t, and what you
            actually want.
          </p>

          {/* Reframe pullquote */}
          <blockquote className="mt-8 max-w-xl border-l-2 border-gold bg-gold/[0.04] px-5 py-4">
            <p className="font-serif text-base italic leading-relaxed text-foreground sm:text-[1.05rem]">
              Traditional planning gives you a single projection and calls it a
              plan.{" "}
              <strong className="not-italic font-medium text-gold">
                Scenario-based planning shows you the full landscape of
                what&apos;s possible
              </strong>{" "}
             , so your decisions are made with clarity, not guesswork.
            </p>
          </blockquote>
        </div>

        {/* Right, quiz invitation card */}
        <div className="flex flex-col justify-center rounded-lg border border-border bg-gold/[0.03] p-7 sm:p-10">
          <div className="mb-5 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
            <span aria-hidden="true" className="inline-block h-px w-4 bg-gold" />
            The 10-Question Quiz
          </div>
          <h3 className="font-serif text-2xl font-light leading-tight tracking-tight text-foreground sm:text-3xl">
            Find out if your situation is more complex than the advice
            you&apos;ve been getting.
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
            Ten questions to find out whether the financial advice you&apos;ve
            been getting actually matches the complexity of your life, and
            whether you&apos;ve been asking the right question all along.
          </p>
          <div className="mt-7">
            <button
              type="button"
              onClick={openQuiz}
              className="focus-ring inline-flex items-center bg-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-navy-deep transition-colors hover:bg-gold-light"
            >
              Take the Quiz
            </button>
          </div>
          <p className="mt-4 text-xs italic text-muted-foreground/60">
            Takes about five minutes. Your result might surprise you.
          </p>
        </div>
      </div>
      <SectionCorners />
    </section>
  );
}
