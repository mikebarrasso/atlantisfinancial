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

function CycleDiagram(): ReactNode {
  return (
    <div className="mx-auto w-full max-w-md">
      <p className="mb-4 text-center font-serif text-sm italic text-muted-foreground/60">
        Possibilities always at the centre
      </p>
      <div className="rounded-md border border-border bg-muted/40 p-6">
        <svg
          viewBox="0 0 600 460"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-auto w-full"
          role="img"
          aria-label="Scenario-based planning cycle: Discovery → Scenarios → Solutions → Action, with possibilities at the centre"
        >
          {/* Outer dashed orbit ellipse */}
          <ellipse
            cx="300"
            cy="230"
            rx="200"
            ry="170"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.35"
          />
          {/* Center ellipse, "possibilities" */}
          <ellipse
            cx="300"
            cy="230"
            rx="110"
            ry="90"
            fill="var(--gold)"
            opacity="0.08"
          />
          <ellipse
            cx="300"
            cy="230"
            rx="110"
            ry="90"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.5"
          />
          <text
            x="300"
            y="225"
            textAnchor="middle"
            fontFamily="Georgia,serif"
            fontStyle="italic"
            fontSize="14"
            fill="var(--gold)"
          >
            Possibilities
          </text>
          <text
            x="300"
            y="245"
            textAnchor="middle"
            fontFamily="Georgia,serif"
            fontStyle="italic"
            fontSize="14"
            fill="var(--gold)"
          >
            Planning
          </text>

          {/* Four phase nodes */}
          {/* Discovery, top right */}
          <g>
            <circle cx="455" cy="100" r="48" fill="var(--navy-mid)" />
            <text
              x="455"
              y="93"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontSize="10"
              letterSpacing="1.5"
              fontWeight="600"
              fill="var(--cream)"
            >
              DISCOVERY
            </text>
            <text
              x="455"
              y="110"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontStyle="italic"
              fontSize="10"
              fill="var(--gold-light)"
            >
              Facts · Experience
            </text>
          </g>

          {/* Scenarios, bottom right */}
          <g>
            <circle cx="455" cy="360" r="48" fill="var(--navy-mid)" />
            <text
              x="455"
              y="353"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontSize="10"
              letterSpacing="1.5"
              fontWeight="600"
              fill="var(--cream)"
            >
              SCENARIOS
            </text>
            <text
              x="455"
              y="370"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontStyle="italic"
              fontSize="10"
              fill="var(--gold-light)"
            >
              Wants · Vision
            </text>
          </g>

          {/* Solutions, bottom left */}
          <g>
            <circle cx="145" cy="360" r="48" fill="var(--navy-mid)" />
            <text
              x="145"
              y="353"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontSize="10"
              letterSpacing="1.5"
              fontWeight="600"
              fill="var(--cream)"
            >
              SOLUTIONS
            </text>
            <text
              x="145"
              y="370"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontStyle="italic"
              fontSize="10"
              fill="var(--gold-light)"
            >
              Goals · Decisions
            </text>
          </g>

          {/* Action, top left */}
          <g>
            <circle cx="145" cy="100" r="48" fill="var(--navy-mid)" />
            <text
              x="145"
              y="93"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontSize="10"
              letterSpacing="1.5"
              fontWeight="600"
              fill="var(--cream)"
            >
              ACTION
            </text>
            <text
              x="145"
              y="110"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontStyle="italic"
              fontSize="10"
              fill="var(--gold-light)"
            >
              Tactics · Renewal
            </text>
          </g>

          {/* Clockwise arrows between nodes (subtle gold) */}
          <defs>
            <marker
              id="arrow-gold"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path
                d="M2 1L8 5L2 9"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>
          <path
            d="M 190 95 Q 300 50 410 95"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
            opacity="0.6"
            markerEnd="url(#arrow-gold)"
          />
          <path
            d="M 498 145 Q 545 230 498 315"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
            opacity="0.6"
            markerEnd="url(#arrow-gold)"
          />
          <path
            d="M 410 365 Q 300 410 190 365"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
            opacity="0.6"
            markerEnd="url(#arrow-gold)"
          />
          <path
            d="M 102 315 Q 55 230 102 145"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
            opacity="0.6"
            markerEnd="url(#arrow-gold)"
          />
        </svg>
      </div>
    </div>
  );
}

export function Process(): ReactNode {
  return (
    <section id="process" className="relative border-b border-border">
      <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="mb-14 max-w-2xl">
          <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
            The Process
          </div>
          <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Not a straight line.{" "}
            <em className="font-light text-gold">A continuous cycle.</em>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            Four phases, each building on the last, forming a loop that
            compounds over a lifetime of planning. Each time we return, we do
            so from a higher vantage point.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Phases list */}
          <div className="border-t border-border">
            {phases.map((phase) => (
              <div
                key={phase.num}
                className="group flex gap-5 border-b border-border py-7"
              >
                <span className="min-w-[55px] font-serif text-4xl font-light leading-none text-gold/25 transition-colors group-hover:text-gold/60">
                  {phase.num}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-light text-foreground">
                    {phase.name}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-gold">
                    {phase.outputs}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
            <Link
              href="/our-process"
              className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.1em] text-foreground transition-all hover:text-gold"
            >
              See the full process in detail
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Cycle diagram + compounds-upward callout */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-32 lg:self-start">
            <CycleDiagram />
            <div className="border-l-2 border-gold bg-gold/[0.04] px-5 py-4">
              <p className="font-serif text-base italic leading-relaxed text-foreground sm:text-[1.05rem]">
                Each cycle doesn&apos;t just repeat, it{" "}
                <strong className="not-italic font-medium text-gold">
                  compounds upward
                </strong>
                . Your life changes. You retire, sell a business, lose a
                spouse, discover that what you want at 70 looks different than
                what you imagined at 55. When that happens, we return to
                Discovery, and the process runs again from a higher vantage
                point.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionCorners />
    </section>
  );
}
