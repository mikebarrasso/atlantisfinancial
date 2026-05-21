import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Our Process, Scenario-Based Financial Planning",
  description:
    "How scenario-based financial planning works at Atlantis Financial, a four-phase cycle of Discovery, Scenarios, Solutions, and Action, run live with you in the meeting.",
  path: "/our-process",
});

const phaseDetails = [
  {
    num: "01",
    name: "Discovery",
    outputs: "Facts · Experience",
    summary:
      "We learn what's true today, every asset, every income source, every constraint, and what you've learned about money along the way.",
    whatHappens: [
      "An open-ended conversation about what you actually want, for yourself, for your family, for the life you're building toward",
      "A full inventory: accounts, pensions, debts, properties, business interests, insurance, expected inheritances",
      "Cash flow today and projected through retirement",
      "Tax history and current bracket realities",
      "What's worked and what hasn't with previous advisors",
    ],
    whatYouGet:
      "A complete picture of where you are, not a sales pitch, not a recommendation, just the map of the territory.",
  },
  {
    num: "02",
    name: "Scenarios",
    outputs: "Wants · Vision",
    summary:
      "We explore what's possible, live, in the meeting, by adjusting one variable at a time. Retire at 62 vs. 65. Sell the cottage or keep it. Commute the pension or take it monthly.",
    whatHappens: [
      "We run the planning software with you watching, not behind closed doors",
      "Each what-if is modeled in real time so you can see the trade-offs visually",
      "Multiple scenarios sit side by side, five or six in a typical meeting is normal",
      "You ask the questions. We adjust the model. The picture moves.",
      "We map decisions across the full retirement horizon, 25, 30, sometimes 35 years",
    ],
    whatYouGet:
      "The full landscape of what's possible for your situation. Not one projection, many. With the trade-offs visible.",
  },
  {
    num: "03",
    name: "Solutions",
    outputs: "Goals · Decisions",
    summary:
      "Once you've seen the landscape, the right path becomes obvious. We choose it together and document the decisions.",
    whatHappens: [
      "The scenario you chose becomes the working plan",
      "We write it down, every decision, every assumption, every trade-off you knowingly accepted",
      "Tax sequence, withdrawal schedule, conversion timing, insurance coverage levels, all documented",
      "Investment policy statement built around what the portfolio actually needs to do",
      "Estate planning coordination with your lawyer if relevant",
    ],
    whatYouGet:
      "A written plan you understand because you helped build it. Not a binder you'll never open, a document that reflects what you actually decided.",
  },
  {
    num: "04",
    name: "Action",
    outputs: "Tactics · Renewal",
    summary:
      "We execute, investment allocations, tax sequencing, insurance, estate documents. Then we return to Discovery, because life changes.",
    whatHappens: [
      "Account openings, rollovers, RRIF conversions where needed",
      "Portfolio implementation through Aligned Capital Partners with appropriate custody at CI Investment Services",
      "Insurance policies put in place (life, disability, LTC as the plan calls for)",
      "Tax filings coordinated with your accountant during the first year of execution",
      "Annual review meetings, the cycle returns to Discovery from a higher vantage point",
    ],
    whatYouGet:
      "The plan, executed. And a partnership that keeps adjusting as your life does.",
  },
] as const;

const comparisonRows = [
  {
    dimension: "Starting point",
    traditional:
      "Asks what you want, then builds a plan around the goal you stated",
    scenario:
      "Shows what's possible first, then helps you choose from informed options",
  },
  {
    dimension: "Number of paths considered",
    traditional: "One, the recommended plan",
    scenario: "Five or six in a typical meeting; dozens over the engagement",
  },
  {
    dimension: "Where the work happens",
    traditional: "Behind the scenes; you receive the output",
    scenario: "In the room with you; you watch the model adjust live",
  },
  {
    dimension: "When trade-offs surface",
    traditional: "Rarely, usually after a decision is implemented",
    scenario: "Immediately, every what-if shows the cost on the other side",
  },
  {
    dimension: "When the plan gets updated",
    traditional: "Annual review of the original projection",
    scenario:
      "Every life event re-runs the cycle from Discovery at a higher vantage point",
  },
  {
    dimension: "What you walk away understanding",
    traditional: "The recommendation",
    scenario: "Why the recommendation, and what you gave up to get there",
  },
];

const exampleScenarios = [
  {
    title: "Retire at 62, 65, or 67?",
    body: "Same couple, same money, three retirement ages. The chart shows lifetime cash, net worth at 85, and the size of the inheritance left. The right age usually isn't the one we expected when we started.",
  },
  {
    title: "Commute the pension or take it monthly?",
    body: "Two parallel plans modeled side by side. Health, longevity, spouse's situation, and assumed return on the commuted value all get adjusted live. The decision becomes obvious, and irreversible, so we run it carefully.",
  },
  {
    title: "RRSP draw-down before age 71",
    body: "We model the strategic RRSP drawdown schedule, typically over 5–15 years, that flattens lifetime tax, reduces eventual RRIF minimums, and protects OAS. Often the highest-impact move on the table.",
  },
  {
    title: "Sell the cottage or keep it?",
    body: "Tax implications, capital gains exposure, what the proceeds would fund vs. what the cottage costs annually to keep. The numbers usually surprise the family, in either direction.",
  },
  {
    title: "Age-gap couple, two timelines",
    body: "Two parallel income plans modeled across the same horizon. CPP timing for each, RRIF conversion ages staggered, survivor benefit decisions, what happens during the gap years between retirements.",
  },
  {
    title: "Selling a business in the next 3–5 years",
    body: "Pre-sale and post-sale modeled separately. LCGE optimization. How the proceeds integrate with retirement income. Timing the sale to coordinate with personal tax brackets.",
  },
];

export default function OurProcessPage(): ReactNode {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative border-b border-border">
          <div className="px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
            <div className="enter mb-7 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
              <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
              Our Process
            </div>
            <h1 className="enter font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[6rem]">
              Not a straight line.
              <br />
              <em className="font-light text-gold">A continuous cycle.</em>
            </h1>
            <p className="enter mt-7 max-w-3xl font-serif text-lg italic leading-snug text-muted-foreground sm:text-xl">
              Four phases, run together with you live in the meeting. Each
              cycle returns to Discovery from a higher vantage point,
              because life keeps moving, and the plan moves with it.
            </p>
          </div>
          <SectionCorners />
        </section>

        {/* ── PHASES IN DETAIL ──────────────────────────────── */}
        <Reveal>
          <section className="relative border-b border-border px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
                Four Phases
              </div>
              <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                What actually happens, in order.
              </h2>

              <div className="mt-14 flex flex-col gap-12 lg:gap-16">
                {phaseDetails.map((phase) => (
                  <article
                    key={phase.num}
                    className="grid grid-cols-1 gap-8 border-t border-border pt-12 lg:grid-cols-[200px_1fr] lg:gap-14"
                  >
                    {/* Number + name */}
                    <div>
                      <p className="font-serif text-5xl font-light text-gold/30 lg:text-6xl">
                        {phase.num}
                      </p>
                      <h3 className="mt-4 font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
                        {phase.name}
                      </h3>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-gold">
                        {phase.outputs}
                      </p>
                    </div>

                    {/* Content */}
                    <div>
                      <p className="font-serif text-lg italic leading-snug text-muted-foreground sm:text-xl">
                        {phase.summary}
                      </p>

                      <div className="mt-7">
                        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-gold/80">
                          What happens
                        </p>
                        <ul className="space-y-2.5">
                          {phase.whatHappens.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]"
                            >
                              <span aria-hidden="true" className="mt-1 shrink-0 text-gold">
                                →
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 border-l-2 border-gold bg-gold/[0.04] px-4 py-3">
                        <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                          What you walk away with
                        </p>
                        <p className="font-serif text-sm italic leading-snug text-foreground sm:text-base">
                          {phase.whatYouGet}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── EXAMPLE SCENARIOS ─────────────────────────────── */}
        <Reveal>
          <section className="relative border-b border-border bg-muted/30 px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
                The Scenarios We Actually Run
              </div>
              <h2 className="font-serif text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.8rem]">
                Examples from{" "}
                <em className="font-light text-gold">real meetings.</em>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                These are the what-ifs that come up most. Each one gets
                modeled live, side-by-side, until the right decision
                becomes the obvious one.
              </p>

              <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                {exampleScenarios.map((s) => (
                  <article
                    key={s.title}
                    className="border border-border bg-background p-6 sm:p-7"
                  >
                    <h3 className="font-serif text-lg font-medium leading-tight text-foreground sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── COMPARISON TABLE ──────────────────────────────── */}
        <Reveal>
          <section className="relative border-b border-border px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
                How It Compares
              </div>
              <h2 className="font-serif text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.8rem]">
                Scenario-based vs.{" "}
                <em className="font-light text-gold">traditional planning.</em>
              </h2>

              <div className="mt-10 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-y border-border bg-muted/40">
                      <th className="px-4 py-4 text-left text-[10px] font-medium uppercase tracking-[0.16em] text-gold sm:px-6">
                        Dimension
                      </th>
                      <th className="px-4 py-4 text-left text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:px-6">
                        Traditional Planning
                      </th>
                      <th className="px-4 py-4 text-left text-[10px] font-medium uppercase tracking-[0.16em] text-gold sm:px-6">
                        Scenario-Based Planning
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr
                        key={row.dimension}
                        className="border-b border-border align-top"
                      >
                        <td className="px-4 py-5 text-sm font-medium text-foreground sm:px-6">
                          {row.dimension}
                        </td>
                        <td className="px-4 py-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                          {row.traditional}
                        </td>
                        <td className="px-4 py-5 text-sm leading-relaxed text-foreground sm:px-6">
                          {row.scenario}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── TYPICAL ENGAGEMENT ────────────────────────────── */}
        <Reveal>
          <section className="relative border-b border-border bg-muted/30 px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
                The Typical Engagement
              </div>
              <h2 className="font-serif text-3xl font-light leading-[1.15] tracking-tight text-foreground sm:text-4xl">
                What this looks like{" "}
                <em className="font-light text-gold">on the calendar.</em>
              </h2>
              <div className="mt-9 space-y-6">
                <TimelineRow
                  step="Initial Conversation"
                  when="30–45 minutes"
                  detail="No agenda. You tell us what's on your mind. We tell you whether scenario-based planning is the right fit for your situation. No obligation either way."
                />
                <TimelineRow
                  step="Discovery"
                  when="2–3 sessions, 60–90 minutes each"
                  detail="We build the full picture of your situation, accounts, cash flow, history, intentions. You leave each session with a clearer map of where you actually stand."
                />
                <TimelineRow
                  step="Scenarios"
                  when="3–5 sessions, 90 minutes each"
                  detail="The what-if work. Multiple paths modeled live. Trade-offs visible. The right plan emerges through the conversation, not from a recommendation."
                />
                <TimelineRow
                  step="Solutions & Action"
                  when="4–8 weeks"
                  detail="Documents drafted. Accounts opened. Portfolio implemented. Tax and estate coordination. The decisions become real."
                />
                <TimelineRow
                  step="Ongoing"
                  when="Annual review + life events"
                  detail="The cycle returns to Discovery at every meaningful change. We update what's true, re-run the scenarios that matter, and adjust the plan."
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── CTA ──────────────────────────────────────────── */}
        <Reveal>
          <section className="relative border-t-[3px] border-gold bg-navy-deep px-6 py-16 sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-cream sm:text-4xl">
                  Want to see this process{" "}
                  <em className="font-light text-gold">run for you?</em>
                </h2>
                <p className="mt-2 font-serif text-sm italic text-cream/50">
                  Start with the initial conversation. Everything else
                  follows from there.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@atlantisfinancial.ca"
                  className="focus-ring inline-flex items-center bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-navy-deep transition-colors hover:bg-gold-light"
                >
                  Start a Conversation
                </a>
                <Link
                  href="/#what-if"
                  className="focus-ring inline-flex items-center border border-gold/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.12em] text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  Take the Quiz
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

function TimelineRow({
  step,
  when,
  detail,
}: {
  step: string;
  when: string;
  detail: string;
}): ReactNode {
  return (
    <div className="grid grid-cols-1 gap-3 border-l-2 border-gold pl-5 sm:grid-cols-[170px_1fr] sm:gap-6 sm:pl-7">
      <div>
        <p className="font-serif text-xl font-light tracking-tight text-foreground">
          {step}
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gold/80">
          {when}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
        {detail}
      </p>
    </div>
  );
}
