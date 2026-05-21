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
        <section className="border-border relative border-b">
          <div className="px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
            <div className="enter text-gold mb-7 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
              Published Writing
            </div>
            <h1 className="enter text-foreground font-serif text-5xl leading-[0.95] font-light tracking-tight sm:text-7xl lg:text-[6rem]">
              In <em className="text-gold font-light">print</em>
              <br />
              and on the record.
            </h1>
            <p className="enter text-muted-foreground mt-7 max-w-3xl font-serif text-lg leading-snug italic sm:text-xl">
              A running collection of columns and feature pieces on retirement,
              decumulation, scenario-based planning, and the questions Canadians
              actually ask about money, published in the outlets that matter.
            </p>
            <p className="enter text-silver mt-6 text-xs tracking-[0.12em] uppercase">
              By <strong className="text-gold font-medium">Allan Norman</strong>{" "}
              · CFP · CIM · RWM
            </p>
          </div>
          <SectionCorners />
        </section>

        {/* ── PUBLICATION LOGOS MARQUEE ────────────────────── */}
        <section className="border-border bg-muted/20 relative flex flex-col items-center gap-4 border-b py-8">
          <span className="text-gold/80 px-6 text-[10px] font-medium tracking-[0.2em] uppercase">
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
          <section className="border-border bg-muted/30 relative border-t px-6 py-20 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-gold mb-6 inline-flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Have a Question of Your Own?
              </div>
              <h2 className="text-foreground font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Most articles start with{" "}
                <em className="text-gold font-light">a real question.</em>
              </h2>
              <p className="text-muted-foreground mt-7 text-base leading-relaxed sm:text-[1.05rem]">
                If something here sparks a question about your own retirement,
                decumulation, or planning situation, that&apos;s the
                conversation we should be having.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
