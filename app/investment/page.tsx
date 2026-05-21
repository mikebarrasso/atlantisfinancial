import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Investment Management",
  description:
    "Evidence-based investment management built to fund your retirement. Through Aligned Capital Partners, a CIRO member firm, with CIPF coverage and CI Investment Services custody.",
  path: "/investment",
});

const safetyFacts = [
  {
    label: "CIRO Member",
    text: "Aligned Capital Partners is regulated by CIRO, the national body that oversees investment dealers and their advisors across Canada.",
  },
  {
    label: "CI Investment Services",
    text: "Your investments are held in custody by CI Investment Services, separately from our firm. If anything happened to Atlantis Financial, your investments would be unaffected.",
  },
  {
    label: "CIPF Coverage",
    text: "Your accounts are covered by the Canadian Investor Protection Fund, which protects eligible client assets in the event a member firm becomes insolvent.",
  },
];

const investmentTypes = [
  "GICs",
  "Structured Notes",
  "ETFs",
  "Mutual Funds",
  "Individual Equities",
  "Alternative Investments",
];

export default function InvestmentPage(): ReactNode {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="border-gold bg-muted/30 relative border-b-[3px]">
          <div className="px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-32">
            <div className="enter text-gold mb-7 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
              Investment Management
            </div>
            <h1 className="enter text-foreground font-serif text-5xl leading-[0.95] font-light tracking-tight sm:text-7xl lg:text-[6rem]">
              Built to fund
              <br />
              <em className="text-gold font-light">your life.</em>
            </h1>
            <p className="enter text-muted-foreground mt-7 max-w-xl font-serif text-lg leading-snug italic sm:text-xl">
              Once you know what you want, the next question is whether your
              investments will actually get you there.
            </p>
          </div>
          <SectionCorners />
        </section>

        {/* ── SAFETY & STRUCTURE ────────────────────────────── */}
        <Reveal>
          <section
            id="safety"
            className="border-border bg-navy-deep relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24"
          >
            <div className="mx-auto max-w-4xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Structure and Security
              </div>
              <h2 className="text-cream font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.6rem]">
                Your money is <em className="text-gold font-light">safe.</em>
              </h2>
              <p className="text-cream/70 mt-7 max-w-2xl text-base leading-relaxed sm:text-[1.05rem]">
                Atlantis Financial is the trade name through which Allan Norman
                provides financial planning. Investment services are offered
                separately through{" "}
                <strong className="text-cream">
                  Aligned Capital Partners Inc.
                </strong>{" "}
                , a member of the Canadian Investment Regulatory Organization
                (CIRO). Your investments are held in custody by{" "}
                <strong className="text-cream">CI Investment Services</strong>{" "}
                under your name, separately from our firm, and covered by the{" "}
                <strong className="text-cream">
                  Canadian Investor Protection Fund (CIPF)
                </strong>{" "}
                up to applicable limits. Our first obligation is to you.
              </p>

              {/* Three safety fact cards */}
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {safetyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="border-gold/15 border bg-white/[0.03] p-6"
                  >
                    <p className="text-gold mb-3 text-[10px] font-medium tracking-[0.18em] uppercase opacity-80">
                      {fact.label}
                    </p>
                    <p
                      className="text-cream/55 text-[13.5px] leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: fact.text.replace(
                          /(CIRO|CI Investment Services|Canadian Investor Protection Fund)/g,
                          '<strong class="text-cream/85 font-medium">$1</strong>'
                        ),
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Compliance logo strip, hyperlinked per Aligned Disclaimer Library */}
              <div className="border-gold/15 mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-y bg-white/[0.02] px-6 py-7">
                <a
                  href="https://www.alignedcapitalpartners.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aligned Capital Partners Inc."
                  className="focus-ring inline-flex transition-opacity hover:opacity-100"
                >
                  <Image
                    src="/images/compliance/aligned.png"
                    alt="Aligned Capital Partners Inc."
                    width={300}
                    height={80}
                    className="h-11 w-auto opacity-85 transition-opacity hover:opacity-100"
                  />
                </a>
                <div
                  aria-hidden="true"
                  className="bg-gold/20 hidden h-8 w-px sm:block"
                />
                <a
                  href="https://www.ciro.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Canadian Investment Regulatory Organization (CIRO)"
                  className="focus-ring inline-flex transition-opacity hover:opacity-100"
                >
                  <Image
                    src="/images/compliance/ciro.png"
                    alt="CIRO, Canadian Investment Regulatory Organization"
                    width={300}
                    height={80}
                    className="h-9 w-auto opacity-85 transition-opacity hover:opacity-100"
                  />
                </a>
                <div
                  aria-hidden="true"
                  className="bg-gold/20 hidden h-8 w-px sm:block"
                />
                <a
                  href="https://www.cipf.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Canadian Investor Protection Fund (CIPF)"
                  className="focus-ring inline-flex transition-opacity hover:opacity-100"
                >
                  <Image
                    src="/images/compliance/cipf.png"
                    alt="Canadian Investor Protection Fund"
                    width={300}
                    height={80}
                    className="h-9 w-auto opacity-60 transition-opacity hover:opacity-100"
                    style={{ filter: "invert(0.85)" }}
                  />
                </a>
              </div>

              {/* Compliance disclaimer, Disclaimer #2 (ACPI-only) per Aligned Disclaimer Library */}
              <p className="text-cream/45 mx-auto mt-6 max-w-3xl text-center text-[11.5px] leading-relaxed">
                Aligned Capital Partners Inc. (&ldquo;ACPI&rdquo;) is a
                full-service investment dealer and a member of the Canadian
                Investor Protection Fund (&ldquo;CIPF&rdquo;) and Canadian
                Investment Regulatory Organization (&ldquo;CIRO&rdquo;).
                Investment services are provided through ACPI. Only
                investment-related products and services are offered through
                ACPI and covered by the CIPF.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ── PORTFOLIO PURPOSE ─────────────────────────────── */}
        <Reveal>
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Your Portfolio, Your Life
              </div>
              <h2 className="text-foreground font-serif text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Your portfolio exists to fund{" "}
                <em className="text-gold font-light">something specific.</em>
              </h2>
              <p className="text-muted-foreground mt-7 max-w-2xl text-base leading-relaxed sm:text-[1.05rem]">
                The life you want to live. The experiences you want to have.
                What you want to pass on to the people and causes you care
                about. When your investments are built with those goals clearly
                in mind, everything becomes more intentional, how much risk you
                actually need to take, which accounts to draw from first, how to
                keep more of what you&apos;ve earned, and how to make sure what
                you&apos;ve built lands where you want it to.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ── APPROACH ──────────────────────────────────────── */}
        <Reveal>
          <section className="border-border bg-muted/30 relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Our Approach
              </div>
              <h2 className="text-foreground font-serif text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]">
                We follow{" "}
                <em className="text-gold font-light">the evidence.</em>
              </h2>
              <p className="text-muted-foreground mt-7 max-w-2xl text-base leading-relaxed sm:text-[1.05rem]">
                Low cost, broadly diversified, built around your situation and
                your goals. Decades of academic research on investing has shown
                that costs matter enormously over time and that a disciplined,
                evidence-based approach outperforms active management over the
                long run. We follow that evidence.
              </p>
              <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed sm:text-[1.05rem]">
                We work with the investments that fit your situation:
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {investmentTypes.map((type) => (
                  <span
                    key={type}
                    className="border-border bg-background text-foreground hover:border-navy hover:bg-navy hover:text-cream border px-4 py-2 text-xs font-medium tracking-wide transition-colors"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── INDEX MATRIX ──────────────────────────────────── */}
        <Reveal>
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div>
                <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                  Want to go deeper?
                </div>
                <h2 className="text-foreground font-serif text-3xl leading-[1.15] font-light tracking-tight sm:text-4xl lg:text-[2.4rem]">
                  The best place to start with investments is{" "}
                  <em className="text-gold font-light">the history.</em>
                </h2>
                <p className="text-muted-foreground mt-5 max-w-lg text-base leading-relaxed sm:text-[1.05rem]">
                  The Index Matrix shows you the actual historical performance
                  of stocks and bonds. The good years and the bad. Returns
                  before and after inflation. The probability of positive
                  returns over time. It makes a compelling case for why a
                  long-term approach works, in data, not words.
                </p>
                <a
                  href="https://theindexmatrix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring border-gold text-foreground hover:text-gold mt-7 inline-flex items-center gap-2 border-b pb-1 text-xs font-medium tracking-[0.1em] uppercase transition-colors"
                >
                  Visit theindexmatrix.com
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="border-border bg-muted hidden h-32 w-32 items-center justify-center border text-center lg:flex">
                <span className="text-muted-foreground text-[9px] leading-relaxed tracking-[0.12em] uppercase">
                  The Index
                  <br />
                  Matrix
                  <br />
                  <br />
                  [ Logo
                  <br />
                  placeholder ]
                </span>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── CTA BAND ─────────────────────────────────────── */}
        <Reveal>
          <section className="border-gold bg-navy-deep relative border-t-[3px] px-6 py-16 sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-cream font-serif text-3xl leading-tight font-light tracking-tight sm:text-4xl">
                  Ready to see if your investments are built for{" "}
                  <em className="text-gold font-light">your life?</em>
                </h2>
                <p className="text-cream/50 mt-2 font-serif text-sm italic">
                  Start a conversation. No obligation, no pressure.
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
                  href="/"
                  className="focus-ring border-gold/30 text-cream/70 hover:border-gold hover:text-gold inline-flex items-center border px-7 py-4 text-xs font-medium tracking-[0.12em] uppercase transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer variant="investment" />
    </>
  );
}
