import { PlanningCycle } from "@/components/planning-cycle";
import { RevealItem, RevealStagger } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import Link from "next/link";
import type { ReactNode } from "react";

const phases: ReadonlyArray<{
  num: string;
  name: string;
  outputs: string;
  desc: string;
}> = [
  {
    num: "01",
    name: "Discovery",
    outputs: "Facts · Experience",
    desc: "We learn what's true today, every asset, every income source, every constraint, and what you've learned about money along the way.",
  },
  {
    num: "02",
    name: "Scenarios",
    outputs: "Wants · Vision",
    desc: "We explore what's possible, live, in the meeting, by adjusting one variable at a time. Retire at 62 vs. 65. Sell the cottage or keep it. Commute the pension or take it monthly.",
  },
  {
    num: "03",
    name: "Solutions",
    outputs: "Goals · Decisions",
    desc: "Once you've seen the landscape, the right path becomes obvious. We choose it together and document the decisions.",
  },
  {
    num: "04",
    name: "Action",
    outputs: "Tactics · Renewal",
    desc: "We execute, investment allocations, tax sequencing, insurance, estate documents. Then we return to Discovery, because life changes.",
  },
];

export function Process(): ReactNode {
  return (
    <section id="process" className="border-border relative border-b">
      <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="mb-14 max-w-2xl">
          <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
            The Process
          </div>
          <h2 className="text-foreground font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Not a straight line.{" "}
            <em className="text-gold font-light">A continuous cycle.</em>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-lg text-base leading-relaxed sm:text-[1.05rem]">
            Four phases, each building on the last, forming a loop that
            compounds over a lifetime of planning. Each time we return, we do so
            from a higher vantage point.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Phases list */}
          <RevealStagger className="border-border border-t">
            {phases.map((phase) => (
              <RevealItem key={phase.num}>
                <div className="group border-border motion-lift flex gap-5 border-b py-7">
                  <span className="text-gold/25 group-hover:text-gold/60 min-w-[55px] font-serif text-4xl leading-none font-light transition-colors">
                    {phase.num}
                  </span>
                  <div>
                    <h3 className="text-foreground font-serif text-2xl font-light">
                      {phase.name}
                    </h3>
                    <p className="text-gold mt-1 text-[10px] tracking-[0.16em] uppercase">
                      {phase.outputs}
                    </p>
                    <p className="text-muted-foreground mt-3 max-w-md text-sm leading-relaxed sm:text-[0.95rem]">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
            <RevealItem>
              <Link
                href="/our-process"
                className="focus-ring border-gold text-foreground hover:text-gold mt-8 inline-flex items-center gap-2 border-b pb-1 text-xs font-medium tracking-[0.1em] uppercase transition-all"
              >
                See the full process in detail
                <span aria-hidden="true">→</span>
              </Link>
            </RevealItem>
          </RevealStagger>

          {/* Cycle diagram + compounds-upward callout */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-32 lg:self-start">
            <PlanningCycle />
            <div className="border-gold bg-gold/[0.04] border-l-2 px-5 py-4">
              <p className="text-foreground font-serif text-base leading-relaxed italic sm:text-[1.05rem]">
                Each cycle doesn&apos;t just repeat, it{" "}
                <strong className="text-gold font-medium not-italic">
                  compounds upward
                </strong>
                . Your life changes. You retire, sell a business, lose a spouse,
                discover that what you want at 70 looks different than what you
                imagined at 55. When that happens, we return to Discovery, and
                the process runs again from a higher vantage point.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionCorners />
    </section>
  );
}
