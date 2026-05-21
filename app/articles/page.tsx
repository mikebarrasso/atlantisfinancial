import { ArticlesList } from "@/components/articles-list";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PublicationsMarquee } from "@/components/publications-marquee";
import { Reveal } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Articles by Allan Norman",
  description:
    "Allan Norman's published columns on retirement, decumulation, RRIF strategy, and scenario-based planning, featured in MoneySense, Financial Post, Yahoo Finance Canada, Maclean's, and more.",
  path: "/articles",
});

export default function ArticlesPage(): ReactNode {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative border-b border-border">
          <div className="px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
            <div className="enter mb-7 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
              <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
              Published Writing
            </div>
            <h1 className="enter font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[6rem]">
              In <em className="font-light text-gold">print</em>
              <br />
              and on the record.
            </h1>
            <p className="enter mt-7 max-w-3xl font-serif text-lg italic leading-snug text-muted-foreground sm:text-xl">
              A running collection of columns and feature pieces on
              retirement, decumulation, scenario-based planning, and the
              questions Canadians actually ask about money, published in the
              outlets that matter.
            </p>
            <p className="enter mt-6 text-xs uppercase tracking-[0.12em] text-silver">
              By <strong className="font-medium text-gold">Allan Norman</strong>{" "}
              · CFP · CIM · RWM
            </p>
          </div>
          <SectionCorners />
        </section>

        {/* ── PUBLICATION LOGOS MARQUEE ────────────────────── */}
        <section className="relative flex flex-col items-center gap-4 border-b border-border bg-muted/20 py-8">
          <span className="px-6 text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80">
            Featured in
          </span>
          <PublicationsMarquee />
        </section>

        {/* ── FILTER + ARTICLES LIST (client) ───────────────── */}
        <Reveal>
          <ArticlesList />
        </Reveal>

        {/* ── CTA BAND ─────────────────────────────────────── */}
        <Reveal>
          <section className="relative border-t border-border bg-muted/30 px-6 py-20 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
                Have a Question of Your Own?
                <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
              </div>
              <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
                Most articles start with{" "}
                <em className="font-light text-gold">a real question.</em>
              </h2>
              <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                If something here sparks a question about your own retirement,
                decumulation, or planning situation, that&apos;s the
                conversation we should be having.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:info@atlantisfinancial.ca"
                  className="focus-ring inline-flex items-center bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-navy-deep transition-colors hover:bg-gold-light"
                >
                  Start a Conversation
                </a>
                <Link
                  href="/"
                  className="focus-ring inline-flex items-center border border-border px-7 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-gold hover:text-gold"
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
