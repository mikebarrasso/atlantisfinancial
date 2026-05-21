import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PlanningCycle } from "@/components/planning-cycle";
import { Reveal, RevealHero, RevealHeroItem } from "@/components/reveal";
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
        <section className="border-border relative border-b">
          <RevealHero className="grid grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-14 lg:px-14 lg:py-24 xl:grid-cols-[1.05fr_minmax(0,28rem)]">
            <div>
              <RevealHeroItem>
                <div className="text-gold mb-7 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                  Our Process
                </div>
              </RevealHeroItem>
              <RevealHeroItem>
                <h1 className="text-foreground font-serif text-5xl leading-[0.95] font-light tracking-tight sm:text-6xl lg:text-[5.4rem] xl:text-[6rem]">
                  Not a straight line.
                  <br />
                  <em className="text-gold font-light">A continuous cycle.</em>
                </h1>
              </RevealHeroItem>
              <RevealHeroItem>
                <p className="text-muted-foreground mt-7 max-w-2xl font-serif text-lg leading-snug italic sm:text-xl">
                  Four phases, run together with you live in the meeting. Each
                  cycle returns to Discovery from a higher vantage point,
                  because life keeps moving, and the plan moves with it.
                </p>
              </RevealHeroItem>
            </div>

            <RevealHeroItem className="mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end">
              <PlanningCycle />
            </RevealHeroItem>
          </RevealHero>
          <SectionCorners />
        </section>

        {/* ── PHASES IN DETAIL ──────────────────────────────── */}
        <Reveal>
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Four Phases
              </div>
              <h2 className="text-foreground font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl">
                What actually happens, in order.
              </h2>

              <div className="mt-14 flex flex-col gap-12 lg:gap-16">
                {phaseDetails.map((phase) => (
                  <article
                    key={phase.num}
                    className="border-border grid grid-cols-1 gap-8 border-t pt-12 lg:grid-cols-[200px_1fr] lg:gap-14"
                  >
                    {/* Number + name */}
                    <div>
                      <p className="text-gold/30 font-serif text-5xl font-light lg:text-6xl">
                        {phase.num}
                      </p>
                      <h3 className="text-foreground mt-4 font-serif text-3xl leading-tight font-light sm:text-4xl">
                        {phase.name}
                      </h3>
                      <p className="text-gold mt-2 text-[10px] tracking-[0.16em] uppercase">
                        {phase.outputs}
                      </p>
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-muted-foreground font-serif text-lg leading-snug italic sm:text-xl">
                        {phase.summary}
                      </p>

                      <div className="mt-7">
                        <p className="text-gold/80 mb-3 text-[10px] font-medium tracking-[0.18em] uppercase">
                          What happens
                        </p>
                        <ul className="space-y-2.5">
                          {phase.whatHappens.map((item) => (
                            <li
                              key={item}
                              className="text-muted-foreground flex gap-3 text-sm leading-relaxed sm:text-[0.95rem]"
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

                      <div className="border-gold bg-gold/[0.04] mt-6 border-l-2 px-4 py-3">
                        <p className="text-gold mb-1.5 text-[10px] font-medium tracking-[0.18em] uppercase">
                          What you walk away with
                        </p>
                        <p className="text-foreground font-serif text-sm leading-snug italic sm:text-base">
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
          <section className="border-border bg-muted/30 relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                The Scenarios We Actually Run
              </div>
              <h2 className="text-foreground font-serif text-3xl leading-[1.1] font-light tracking-tight sm:text-4xl lg:text-[2.8rem]">
                Examples from{" "}
                <em className="text-gold font-light">real meetings.</em>
              </h2>
              <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed sm:text-[1.05rem]">
                These are the what-ifs that come up most. Each one gets modeled
                live, side-by-side, until the right decision becomes the obvious
                one.
              </p>

              <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                {exampleScenarios.map((s) => (
                  <article
                    key={s.title}
                    className="border-border bg-background border p-6 sm:p-7"
                  >
                    <h3 className="text-foreground font-serif text-lg leading-tight font-medium sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
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
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                How It Compares
              </div>
              <h2 className="text-foreground font-serif text-3xl leading-[1.1] font-light tracking-tight sm:text-4xl lg:text-[2.8rem]">
                Scenario-based vs.{" "}
                <em className="text-gold font-light">traditional planning.</em>
              </h2>

              <div className="mt-10 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-border bg-muted/40 border-y">
                      <th className="text-gold px-4 py-4 text-left text-[10px] font-medium tracking-[0.16em] uppercase sm:px-6">
                        Dimension
                      </th>
                      <th className="text-muted-foreground px-4 py-4 text-left text-[10px] font-medium tracking-[0.16em] uppercase sm:px-6">
                        Traditional Planning
                      </th>
                      <th className="text-gold px-4 py-4 text-left text-[10px] font-medium tracking-[0.16em] uppercase sm:px-6">
                        Scenario-Based Planning
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr
                        key={row.dimension}
                        className="border-border border-b align-top"
                      >
                        <td className="text-foreground px-4 py-5 text-sm font-medium sm:px-6">
                          {row.dimension}
                        </td>
                        <td className="text-muted-foreground px-4 py-5 text-sm leading-relaxed sm:px-6">
                          {row.traditional}
                        </td>
                        <td className="text-foreground px-4 py-5 text-sm leading-relaxed sm:px-6">
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

        {/* ── CTA ──────────────────────────────────────────── */}
        <Reveal>
          <section className="border-gold bg-navy-deep relative border-t-[3px] px-6 py-16 sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-cream font-serif text-3xl leading-tight font-light tracking-tight sm:text-4xl">
                  Want to see this process{" "}
                  <em className="text-gold font-light">run for you?</em>
                </h2>
                <p className="text-cream/50 mt-2 font-serif text-sm italic">
                  Start with the initial conversation. Everything else follows
                  from there.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@atlantisfinancial.ca"
                  className="focus-ring bg-gold text-navy-deep hover:bg-gold-light inline-flex items-center px-7 py-4 text-xs font-semibold tracking-[0.12em] uppercase transition-colors"
                >
                  Start a Conversation
                </a>
                <Link
                  href="/#what-if"
                  className="focus-ring border-gold/30 text-cream/70 hover:border-gold hover:text-gold inline-flex items-center border px-7 py-4 text-xs font-medium tracking-[0.12em] uppercase transition-colors"
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
