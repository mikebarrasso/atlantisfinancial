import { RevealItem, RevealStagger } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import type { ReactNode } from "react";

/**
 * Stakes section: the StoryBrand "failure" element the page was missing.
 * Establishes what's at risk if the visitor keeps planning on guesswork.
 * Leans on loss aversion: the irreversible, expensive decisions of retirement.
 */
export function Stakes(): ReactNode {
  return (
    <section className="border-border bg-navy-deep relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
          What&apos;s at Stake
        </div>
        <h2 className="text-cream font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]">
          Most retirement plans are a{" "}
          <em className="text-gold font-light">single guess.</em>
        </h2>
        <RevealStagger className="text-cream/70 mt-7 space-y-5 text-base leading-relaxed sm:text-[1.05rem]">
          <RevealItem>
            <p>
              One projection. One set of assumptions. Printed in a binder
              you&apos;ll open once. But retirement is full of decisions you
              can&apos;t take back. When to take CPP. Whether to commute your
              pension. How to draw down your accounts.
            </p>
          </RevealItem>
          <RevealItem>
            <p>
              Guess wrong, and you could hand the CRA tens of thousands more
              than you owed, or find out too late that you could have retired
              earlier, given more, and worried less.
            </p>
          </RevealItem>
          <RevealItem>
            <p className="text-gold font-serif text-xl italic">
              You deserve to see the whole picture before you decide. Not after.
            </p>
          </RevealItem>
        </RevealStagger>
      </div>
      <SectionCorners />
    </section>
  );
}
