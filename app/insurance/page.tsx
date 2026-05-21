import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Insurance Planning",
  description:
    "Life, disability, critical illness, long-term care, and travel insurance, planned with scenarios, not fear. Allan Norman, CFP, Barrie, Ontario.",
  path: "/insurance",
});

const threeQuestions = [
  {
    qNum: "Q1",
    headline: "Live the planned life",
    body: "Will the plan still work if something derails the way you earn or the way you live? Disability and critical illness coverage protect the income that funds everything else.",
  },
  {
    qNum: "Q2",
    headline: "Family carries it on",
    body: "If you weren't there, would the people you love still have the life you've built for them? Life insurance closes the gap between what they need and what would otherwise be available.",
  },
  {
    qNum: "Q3",
    headline: "Maximize what you pass on",
    body: "How do you transfer wealth efficiently, outside the estate, without probate, without tax surprises? Permanent insurance can be one of the most powerful tools for this.",
  },
];

const coverage = [
  {
    label: "Life Insurance",
    items: ["Term (10 / 20 / 30 year)", "Whole Life", "Universal Life"],
  },
  {
    label: "Living Benefits",
    items: ["Disability Insurance", "Critical Illness", "Long-Term Care"],
  },
  {
    label: "Travel Insurance",
    items: [
      "Through Manulife",
      "Single-trip & multi-trip",
      "Snowbird & retiree coverage",
    ],
    cta: {
      label: "Visit Manulife Travel",
      href: "https://www.manulife-travel.ca/dist/home.html?as=wlawn",
    },
  },
];

export default function InsurancePage(): ReactNode {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="border-gold bg-muted/30 relative border-b-[3px]">
          <div className="px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-32">
            <div className="enter text-gold mb-7 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
              Insurance Planning
            </div>
            <h1 className="enter text-foreground font-serif text-5xl leading-[0.95] font-light tracking-tight sm:text-7xl lg:text-[6rem]">
              A family-first
              <br />
              <em className="text-gold font-light">investment.</em>
            </h1>
            <p className="enter text-muted-foreground mt-7 max-w-xl font-serif text-lg leading-snug italic sm:text-xl">
              Insurance isn&apos;t something we sell. It is something we show
              you, as part of your plan, never apart from it.
            </p>
          </div>
          <SectionCorners />
        </section>

        {/* ── THREE QUESTIONS ───────────────────────────────── */}
        <Reveal>
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Where Insurance Fits
              </div>
              <h2 className="text-foreground font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Three questions worth{" "}
                <em className="text-gold font-light">asking.</em>
              </h2>
              <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed sm:text-[1.05rem]">
                Insurance answers questions that ordinary planning can&apos;t.
                These are the three that matter most.
              </p>

              <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
                {threeQuestions.map((item) => (
                  <article
                    key={item.qNum}
                    className="border-border bg-muted/30 flex flex-col gap-4 rounded-lg border p-6 sm:p-8"
                  >
                    <span className="text-gold text-[10px] font-medium tracking-[0.18em] uppercase">
                      {item.qNum}
                    </span>
                    <h3 className="text-foreground font-serif text-2xl leading-tight font-light tracking-tight">
                      {item.headline}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── PROTECTING YOUR PLAN ──────────────────────────── */}
        <Reveal>
          <section className="border-border bg-muted/30 relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Protecting Your Plan
              </div>
              <h2 className="text-foreground font-serif text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl lg:text-[3rem]">
                The income that funds{" "}
                <em className="text-gold font-light">everything else.</em>
              </h2>
              <div className="text-muted-foreground mt-7 max-w-2xl space-y-5 text-base leading-relaxed sm:text-[1.05rem]">
                <p>
                  Most of what you want, for yourself, for your family, for the
                  people you care about, depends on your ability to earn.
                  Disability insurance and critical illness coverage replace
                  some or all of that income when something interrupts it.
                  They&apos;re not glamorous. They&apos;re foundational.
                </p>
                <p>
                  Long-term care insurance covers the costs of extended
                  assistance later in life, costs that, in Canada, are not fully
                  covered by provincial health systems. For couples planning a
                  30-year retirement, this is increasingly part of the
                  conversation.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── PROTECTING YOUR FAMILY ────────────────────────── */}
        <Reveal>
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Protecting Your Family
              </div>
              <h2 className="text-foreground font-serif text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl lg:text-[3rem]">
                The gap{" "}
                <em className="text-gold font-light">life insurance closes.</em>
              </h2>
              <div className="text-muted-foreground mt-7 max-w-2xl space-y-5 text-base leading-relaxed sm:text-[1.05rem]">
                <p>
                  Life insurance answers a simple question: if you weren&apos;t
                  here tomorrow, what would change for the people you love, and
                  how much of that change can be made less harsh by money
                  landing where it&apos;s needed?
                </p>
                <p>
                  For some families, the answer is term insurance through
                  working years. For others, especially business owners and
                  people with significant estate planning needs, permanent
                  insurance (whole life or universal life) becomes a long-term
                  planning instrument. Both work. Which one is right depends on
                  what the policy needs to do.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── PROTECTING YOUR LEGACY ────────────────────────── */}
        <Reveal>
          <section className="border-border bg-muted/30 relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Protecting Your Legacy
              </div>
              <h2 className="text-foreground font-serif text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl lg:text-[3rem]">
                A tax-efficient way to{" "}
                <em className="text-gold font-light">pass it on.</em>
              </h2>
              <p className="text-muted-foreground mt-7 max-w-2xl text-base leading-relaxed sm:text-[1.05rem]">
                Permanent life insurance can be one of the most efficient ways
                to transfer wealth to the next generation, paying out outside
                your estate, free of probate, and (in most cases) tax-free to
                your beneficiaries. For families with significant assets, this
                isn&apos;t just protection, it&apos;s a planning instrument that
                can meaningfully shift how much of what you&apos;ve built
                actually arrives where you want it.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ── COVERAGE PANEL ────────────────────────────────── */}
        <Reveal>
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="text-gold mb-12 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Coverage We Work With
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
                {coverage.map((col) => (
                  <div
                    key={col.label}
                    className="border-border bg-background flex flex-col gap-5 rounded-lg border p-6 sm:p-8"
                  >
                    <h3 className="text-foreground font-serif text-xl font-light tracking-tight">
                      {col.label}
                    </h3>
                    <ul className="space-y-2.5">
                      {col.items.map((item) => (
                        <li
                          key={item}
                          className="text-muted-foreground flex gap-3 text-sm leading-relaxed"
                        >
                          <span aria-hidden="true" className="text-gold/60">
                            ·
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {col.cta && (
                      <a
                        href={col.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring border-gold text-foreground hover:text-gold mt-auto inline-flex items-center gap-2 self-start border-b pb-1 text-xs font-medium tracking-[0.1em] uppercase transition-colors"
                      >
                        {col.cta.label}
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── SCENARIO-BASED DIFFERENCE ─────────────────────── */}
        <Reveal>
          <section className="border-border bg-navy-deep relative border-b px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
            <div className="mx-auto max-w-3xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                How We Do This Differently
              </div>
              <h2 className="text-cream font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Insurance isn&apos;t something we sell. It is something{" "}
                <em className="text-gold font-light">we show you.</em>
              </h2>
              <div className="text-cream/70 mt-7 space-y-5 text-base leading-relaxed sm:text-[1.05rem]">
                <p>
                  Most insurance conversations start by selling you a product.
                  Ours starts by modeling your plan, and then asking{" "}
                  <em className="text-cream font-serif italic">
                    what changes if something happens?
                  </em>{" "}
                  You see, in the same scenario tool that runs your retirement
                  income, exactly what role insurance plays. How much you need.
                  How much you don&apos;t. Where it fits.
                </p>
                <p className="text-gold font-serif text-xl italic">
                  Not out of fear. Out of <em>intention.</em>
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── CTA BAND ─────────────────────────────────────── */}
        <Reveal>
          <section className="border-gold bg-muted/30 relative border-t-[3px] px-6 py-16 sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-foreground font-serif text-3xl leading-tight font-light tracking-tight sm:text-4xl">
                  Ready to see where insurance actually fits{" "}
                  <em className="text-gold font-light">your plan?</em>
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@atlantisfinancial.ca"
                  className="focus-ring bg-gold text-navy-deep hover:bg-gold-light inline-flex items-center px-7 py-4 text-xs font-semibold tracking-[0.12em] uppercase transition-colors"
                >
                  Start a Conversation
                </a>
                <Link
                  href="/"
                  className="focus-ring border-border text-muted-foreground hover:border-gold hover:text-gold inline-flex items-center border px-7 py-4 text-xs font-medium tracking-[0.12em] uppercase transition-colors"
                >
                  Back to Home
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
