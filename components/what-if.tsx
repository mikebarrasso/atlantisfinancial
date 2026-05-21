"use client";

import { SectionCorners } from "@/components/section-corners";
import type { ReactNode } from "react";

export function WhatIf(): ReactNode {
  const openQuiz = (): void => {
    window.dispatchEvent(new Event("open-quiz"));
  };

  return (
    <section id="what-if" className="border-border relative border-b">
      <div className="grid grid-cols-1 items-stretch gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-14 lg:py-24">
        {/* Left, headline + reframe pullquote */}
        <div className="flex flex-col justify-center">
          <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
            The Idea Behind Everything
          </div>
          <h2 className="text-foreground font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.6rem]">
            What if you could see your{" "}
            <em className="text-gold font-light">future</em>
            <br />
            before you decide?
          </h2>
          <p className="text-muted-foreground mt-5 font-serif text-lg leading-snug italic sm:text-xl">
            Not a projection. A live conversation with your possibilities.
          </p>

          <p className="text-muted-foreground mt-7 max-w-xl text-base leading-relaxed sm:text-[1.05rem]">
            Most financial planning starts by asking what you want, before
            you&apos;ve ever seen what&apos;s possible.{" "}
            <em className="text-foreground font-serif italic">
              We start with your life.
            </em>{" "}
            Together, in real time, we explore the futures that might exist for
            you, adjusting, comparing, asking{" "}
            <em className="text-foreground font-serif italic">what if</em>,
            until you see clearly what works, what doesn&apos;t, and what you
            actually want.
          </p>

          {/* Reframe pullquote */}
          <blockquote className="border-gold bg-gold/[0.04] mt-8 max-w-xl border-l-2 px-5 py-4">
            <p className="text-foreground font-serif text-base leading-relaxed italic sm:text-[1.05rem]">
              Traditional planning gives you a single projection and calls it a
              plan.{" "}
              <strong className="text-gold font-medium not-italic">
                Scenario-based planning shows you the full landscape of
                what&apos;s possible
              </strong>{" "}
              , so your decisions are made with clarity, not guesswork.
            </p>
          </blockquote>
        </div>

        {/* Right, quiz invitation card */}
        <div className="border-border bg-gold/[0.03] flex flex-col justify-center rounded-lg border p-7 sm:p-10">
          <div className="text-gold mb-5 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase">
            The 10-Question Quiz
          </div>
          <h3 className="text-foreground font-serif text-2xl leading-tight font-light tracking-tight sm:text-3xl">
            Find out if your situation is more complex than the advice
            you&apos;ve been getting.
          </h3>
          <p className="text-muted-foreground mt-5 text-sm leading-relaxed sm:text-[0.95rem]">
            Ten questions to find out whether the financial advice you&apos;ve
            been getting actually matches the complexity of your life, and
            whether you&apos;ve been asking the right question all along.
          </p>
          <div className="mt-7">
            <button
              type="button"
              onClick={openQuiz}
              className="focus-ring bg-gold text-navy-deep hover:bg-gold-light inline-flex items-center px-6 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase transition-colors"
            >
              Take the Quiz
            </button>
          </div>
          <p className="text-muted-foreground/60 mt-4 text-xs italic">
            Takes about five minutes. Your result might surprise you.
          </p>
        </div>
      </div>
      <SectionCorners />
    </section>
  );
}
