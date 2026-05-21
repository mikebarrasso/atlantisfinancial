import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, RevealHero, RevealHeroItem } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Who We Help",
  description:
    "Financial planning for active Canadians at or near retirement with complex situations, DB pensions, RRSPs, corporate assets, business sales, age-gap couples. Allan Norman, CFP, Barrie, Ontario.",
  path: "/who-we-help",
});

const scenarioCategories = [
  {
    label: "Scenario 01",
    title: "When to retire, and when to start drawing",
    summary:
      "The timing questions almost every Canadian near or at retirement faces.",
    questions: [
      "When should I actually retire, and what changes if I work one more year, or two fewer?",
      "When should I take CPP and OAS, at 60, 65, 70, or somewhere in between?",
      "When should I convert my RRSP to a RRIF, and start drawing what?",
      "What does the income look like if I bridge with my own savings before government benefits kick in?",
    ],
  },
  {
    label: "Scenario 02",
    title: "How to draw across multiple accounts",
    summary:
      "Drawdown sequencing is one of the highest-impact, least-discussed planning moves in retirement.",
    questions: [
      "Which account should I pull from first, RRSP, RRIF, TFSA, or non-registered?",
      "Does a strategic RRSP drawdown before age 71 actually save tax over my lifetime?",
      "How do I coordinate withdrawals to avoid the OAS clawback?",
      "What's the year-by-year income plan that gets me through 25–30 years with the least tax leakage?",
    ],
  },
  {
    label: "Scenario 03",
    title: "Major transitions and one-time decisions",
    summary:
      "The irreversible moves where running the scenarios matters most, before, not after.",
    questions: [
      "Should I commute my pension or take it as monthly income for life?",
      "What does selling a business, farm, or rental property do to the rest of my plan?",
      "How do I draw down retained earnings in a corporation alongside personal income?",
      "If I receive a severance, inheritance, or one-time windfall, what's the most efficient way to deploy it?",
    ],
  },
  {
    label: "Scenario 04",
    title: "Planning across two people, two timelines",
    summary:
      "Couples almost never have perfectly aligned situations. The plan has to live across both.",
    questions: [
      "How do we coordinate CPP across two timelines so the total payout is maximized?",
      "What happens to the plan if one of us passes away before the other?",
      "If we're at different career stages, how do we plan the years before we're both retired?",
      "How do we handle different drawdown rates, different RRIF conversion ages, different tax brackets?",
    ],
  },
] as const;

const complexityChecklist = [
  "Pension or CPP/OAS timing decisions ahead",
  "Corporate or holdco assets to manage",
  "Business transition or sale on the horizon",
  "Estate planning needs across generations",
  "Mix of registered and non-registered accounts",
  "Variable or undecided retirement date",
  "Significant spousal income differences",
  "Insurance considered as a financial planning tool",
  "Second property (cottage, rental, US asset) to coordinate",
  "Charitable giving planned alongside estate",
];

export default function WhoWeHelpPage(): ReactNode {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="border-border relative border-b">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
            <RevealHero className="lg:border-border flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:border-r lg:px-14 lg:py-24">
              <RevealHeroItem>
                <div className="text-gold mb-7 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                  Who We Help
                </div>
              </RevealHeroItem>
              <RevealHeroItem>
                <h1 className="text-foreground font-serif text-5xl leading-[0.95] font-light tracking-tight sm:text-6xl lg:text-[5.4rem] xl:text-[6rem]">
                  Built for the
                  <br />
                  <em className="text-gold font-light">complicated</em> years.
                </h1>
              </RevealHeroItem>
              <RevealHeroItem>
                <p className="text-muted-foreground mt-7 max-w-xl font-serif text-lg leading-snug italic sm:text-xl">
                  Most planning assumes a simple situation. Ours starts where your
                  real life is, with a pension, a business, a portfolio, a partner,
                  an estate, and a lot of decisions whose timing matters as much as
                  their outcome.
                </p>
              </RevealHeroItem>
            </RevealHero>

            <div className="enter-fade bg-muted relative min-h-80 overflow-hidden lg:min-h-160">
              <Image
                src="/images/who-we-help-hero.png"
                alt="An active couple walking on a beach at sunset, the kind of retirement they've planned for together."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="from-background/80 pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent lg:w-24"
              />
            </div>
          </div>
          <SectionCorners />
        </section>

        {/* ── SCENARIO CATEGORIES ─────────────────────────── */}
        <Reveal>
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-6xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                The Scenarios We Plan
              </div>
              <h2 className="text-foreground font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]">
                We don&apos;t plan for a type of person.{" "}
                <em className="text-gold font-light">
                  We plan for the questions.
                </em>
              </h2>
              <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed sm:text-[1.05rem]">
                Scenario-based planning works for any situation complex enough
                to need it. The plan is different for everyone. The questions we
                model are the same ones almost every Canadian near or at
                retirement actually has.
              </p>

              <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {scenarioCategories.map((scenario) => (
                  <article
                    key={scenario.title}
                    className="border-border bg-muted/30 flex flex-col gap-5 border p-7 sm:p-9"
                  >
                    <div>
                      <p className="text-gold mb-3 text-[10px] font-medium tracking-[0.18em] uppercase opacity-80">
                        {scenario.label}
                      </p>
                      <h3 className="text-foreground font-serif text-2xl leading-tight font-light tracking-tight sm:text-3xl">
                        {scenario.title}
                      </h3>
                      <p className="text-muted-foreground mt-3 text-sm leading-snug italic sm:text-[0.95rem]">
                        {scenario.summary}
                      </p>
                    </div>

                    <div>
                      <p className="text-gold/70 mb-3 text-[10px] font-medium tracking-[0.18em] uppercase">
                        Questions we model
                      </p>
                      <ul className="space-y-2.5">
                        {scenario.questions.map((question) => (
                          <li
                            key={question}
                            className="text-muted-foreground flex gap-3 text-sm leading-relaxed"
                          >
                            <span
                              aria-hidden="true"
                              className="text-gold mt-1 shrink-0"
                            >
                              →
                            </span>
                            <span>{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── COMPLEXITY CHECKLIST ──────────────────────────── */}
        <Reveal>
          <section className="border-border bg-muted/30 relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div>
                <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                  Complexity Inventory
                </div>
                <h2 className="text-foreground font-serif text-3xl leading-[1.1] font-light tracking-tight sm:text-4xl">
                  How many of these{" "}
                  <em className="text-gold font-light">apply to you?</em>
                </h2>
                <p className="text-muted-foreground mt-5 text-base leading-relaxed sm:text-[1.05rem]">
                  Four or more is the threshold where traditional planning
                  starts to break down, and where scenario-based planning earns
                  its keep. Six or more is where most of our clients sit when we
                  first meet.
                </p>
                <div className="mt-7">
                  <Link
                    href="/#what-if"
                    className="focus-ring border-gold text-foreground hover:text-gold inline-flex items-center gap-2 border-b pb-1 text-xs font-medium tracking-[0.1em] uppercase transition-colors"
                  >
                    Take the 10-question quiz <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {complexityChecklist.map((item) => (
                  <li
                    key={item}
                    className="border-border bg-background text-muted-foreground flex gap-3 border p-4 text-sm leading-relaxed sm:text-[0.95rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="text-gold mt-0.5 shrink-0"
                    >
                      ☐
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        {/* ── WHERE WE WORK ─────────────────────────────────── */}
        <Reveal>
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Where We Work
              </div>
              <h2 className="text-foreground font-serif text-3xl leading-[1.15] font-light tracking-tight sm:text-4xl">
                Based in Barrie.{" "}
                <em className="text-gold font-light">Working across Canada.</em>
              </h2>
              <div className="text-muted-foreground mt-7 space-y-5 text-base leading-relaxed sm:text-[1.05rem]">
                <p>
                  Our office is in Barrie, Ontario, roughly an hour north of
                  Toronto. We work with clients in person across central
                  Ontario, the Greater Toronto Area, and Muskoka.
                </p>
                <p>
                  We also work virtually with clients across Canada, from
                  Vancouver Island to St. John&apos;s. The scenario tools we use
                  are designed for the screen as much as the boardroom, and the
                  planning is the same either way. Many clients we&apos;ve
                  worked with for years have never been to our office.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── CTA ──────────────────────────────────────────── */}
        <Reveal>
          <section className="border-gold bg-muted/30 relative border-t-[3px] px-6 py-16 sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-foreground font-serif text-3xl leading-tight font-light tracking-tight sm:text-4xl">
                  Recognise <em className="text-gold font-light">yourself</em>{" "}
                  in any of this?
                </h2>
                <p className="text-muted-foreground mt-2 font-serif text-sm italic">
                  Start a conversation, or take the quiz first.
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
                  className="focus-ring border-border text-muted-foreground hover:border-gold hover:text-gold inline-flex items-center border px-7 py-4 text-xs font-medium tracking-[0.12em] uppercase transition-colors"
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
