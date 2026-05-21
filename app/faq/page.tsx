import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import { faqCategories } from "@/lib/faq-data";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to the questions Canadians actually ask about CPP and OAS timing, RRSP/RRIF strategy, decumulation, business sales, estate planning, and age-gap couples planning.",
  path: "/faq",
});

// JSON-LD FAQPage schema for AI-search visibility
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  ),
};

export default function FAQPage(): ReactNode {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* JSON-LD for AI/Google extraction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative border-b border-border">
          <div className="px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
            <div className="enter mb-7 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
              <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
              Frequently Asked Questions
            </div>
            <h1 className="enter font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[6rem]">
              The questions
              <br />
              people <em className="font-light text-gold">actually ask.</em>
            </h1>
            <p className="enter mt-7 max-w-3xl font-serif text-lg italic leading-snug text-muted-foreground sm:text-xl">
              Twenty-five answers, organized by the question type. Every
              answer is the same one Allan gives in a first conversation,
              direct, with the trade-offs visible, no hedge or
              over-qualification.
            </p>
          </div>
          <SectionCorners />
        </section>

        {/* ── CATEGORY JUMP NAV ─────────────────────────────── */}
        <Reveal>
          <section className="relative border-b border-border bg-muted/30 px-6 py-8 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gold opacity-80">
                Jump to a category
              </p>
              <div className="flex flex-wrap gap-2">
                {faqCategories.map((cat) => (
                  <a
                    key={cat.slug}
                    href={`#${cat.slug}`}
                    className="focus-ring border border-border bg-background px-4 py-2 text-xs font-medium tracking-wide text-foreground transition-colors hover:border-gold hover:bg-gold hover:text-navy-deep"
                  >
                    {cat.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── CATEGORIES ───────────────────────────────────── */}
        {faqCategories.map((category) => (
          <Reveal key={category.slug}>
            <section
              id={category.slug}
              className="relative border-b border-border px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 scroll-mt-24"
            >
              <div className="mx-auto max-w-4xl">
                <div className="mb-12">
                  <div className="mb-4 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                    <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
                    {category.label}
                  </div>
                  <h2 className="font-serif text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
                    {category.label}
                  </h2>
                  <p className="mt-4 max-w-2xl font-serif text-base italic leading-relaxed text-muted-foreground sm:text-lg">
                    {category.intro}
                  </p>
                </div>

                <div className="divide-y divide-border border-y border-border">
                  {category.items.map((item) => (
                    <details
                      key={item.q}
                      className="group py-6 sm:py-7"
                    >
                      <summary className="focus-ring flex cursor-pointer items-start justify-between gap-6 list-none [&::-webkit-details-marker]:hidden">
                        <span className="font-serif text-lg font-normal leading-snug tracking-tight text-foreground transition-colors group-hover:text-gold sm:text-xl">
                          {item.q}
                        </span>
                        <span
                          aria-hidden="true"
                          className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-gold transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <div className="mt-4 max-w-3xl pr-10 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>
        ))}

        {/* ── CTA ──────────────────────────────────────────── */}
        <Reveal>
          <section className="relative border-t-[3px] border-gold bg-muted/30 px-6 py-20 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                Your question{" "}
                <em className="font-light text-gold">not here?</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                Most planning questions are situation-specific. The fastest
                way to a real answer is a 30-minute conversation. No
                obligation, no pressure.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:info@atlantisfinancial.ca"
                  className="focus-ring inline-flex items-center bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-navy-deep transition-colors hover:bg-gold-light"
                >
                  Start a Conversation
                </a>
                <Link
                  href="/#what-if"
                  className="focus-ring inline-flex items-center border border-border px-7 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-gold hover:text-gold"
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
