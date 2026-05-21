import { RevealItem, RevealStagger } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import Link from "next/link";
import type { ReactNode } from "react";

const yesItems = [
  "You're at or near retirement with real complexity: a pension, RRSPs, TFSAs, maybe a business or an estate",
  "You're facing decisions you can't undo, and you want to see your options before you choose",
  "You've had plans before that never quite fit, or that you never fully trusted",
  "You'd rather build the plan together than have one handed to you",
];

const noItems = [
  "Retirement is years away and your focus is growing wealth",
  "You want to talk markets and performance at every meeting",
  "Your situation is simple and your retirement is already settled",
  "You'd rather hand it off and stay out of it",
];

export function IdealClient(): ReactNode {
  return (
    <section id="ideal" className="border-border bg-muted/30 relative border-b">
      <div className="grid grid-cols-1 gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-14 lg:py-24">
        {/* Left column, header + body copy */}
        <div className="flex flex-col">
          <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
            Who This Is For
          </div>
          <h2 className="text-foreground font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Is this <em className="text-gold font-light">you?</em>
          </h2>

          <div className="text-muted-foreground mt-10 max-w-xl space-y-5 text-base leading-relaxed sm:text-[1.05rem]">
            <p>
              You&apos;ve built something. Now you&apos;re facing the decisions
              that turn savings into a retirement: when to stop working, when to
              take CPP, how to draw it all down without overpaying. They&apos;re
              more tangled than anyone prepared you for, and some can&apos;t be
              undone.
            </p>
            <p>
              You&apos;ve had advisors. You&apos;ve had plans. You&apos;ve never
              had someone sit with you and model the real options, live, until
              the answer was clear.
            </p>
            <p className="text-foreground font-medium">
              If that sounds like you, you don&apos;t need another binder. You
              need to see it for yourself.
            </p>

            <Link
              href="/who-we-help"
              className="focus-ring border-gold text-foreground hover:text-gold mt-10 inline-flex items-center gap-2 border-b pb-1 text-xs font-medium tracking-[0.1em] uppercase transition-all"
            >
              See the scenarios we plan around
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Right column, two filter boxes */}
        <div className="flex flex-col gap-4">
          <RevealStagger>
            <RevealItem>
              <div className="border-gold/30 bg-gold/[0.04] motion-lift rounded-lg border p-6 sm:p-8">
                <div className="text-gold mb-5 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase">
                  This is likely for you if…
                </div>
                <ul className="space-y-3">
                  {yesItems.map((item) => (
                    <li
                      key={item}
                      className="border-border text-muted-foreground flex gap-3 border-b pb-3 text-sm leading-relaxed last:border-b-0 last:pb-0 sm:text-[0.95rem]"
                    >
                      <span
                        aria-hidden="true"
                        className="text-gold mt-1 shrink-0"
                      >
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="border-border motion-lift rounded-lg border p-6 sm:p-8">
                <div className="text-muted-foreground mb-5 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase opacity-70">
                  This probably isn&apos;t for you if…
                </div>
                <ul className="space-y-3">
                  {noItems.map((item) => (
                    <li
                      key={item}
                      className="border-border text-muted-foreground/80 flex gap-3 border-b pb-3 text-sm leading-relaxed last:border-b-0 last:pb-0 sm:text-[0.95rem]"
                    >
                      <span
                        aria-hidden="true"
                        className="text-muted-foreground/40 mt-1 shrink-0"
                      >
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          </RevealStagger>
        </div>
      </div>
      <SectionCorners />
    </section>
  );
}
