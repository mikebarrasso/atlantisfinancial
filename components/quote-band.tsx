import type { ReactNode } from "react";

export function QuoteBand(): ReactNode {
  return (
    <section
      id="quote"
      className="relative border-b border-border bg-gold/[0.04] px-6 py-16 sm:px-10 sm:py-20 lg:px-14"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span
          aria-hidden="true"
          className="block font-serif text-7xl leading-none text-gold opacity-30"
        >
          &ldquo;
        </span>
        <blockquote className="mt-4">
          <p className="font-serif text-2xl font-light italic leading-snug text-foreground sm:text-3xl lg:text-[2.4rem]">
            How much is <em className="text-gold">enough</em>, and what does{" "}
            <em className="text-gold">more than enough</em> make possible for
            the people and causes you love?
          </p>
          <footer className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80">
            Inspired by Paul Armson,{" "}
            <span className="font-serif text-xs italic normal-case tracking-normal text-gold/70">
              Enough?
            </span>
          </footer>
        </blockquote>

        <a
          href="/downloads/enough-paul-armson.pdf"
          download
          className="focus-ring mt-8 inline-flex items-center gap-4 border border-border bg-gold/[0.04] px-5 py-3 text-left transition-colors hover:border-gold hover:bg-gold/[0.08]"
        >
          <span aria-hidden="true" className="text-xl text-gold">
            ↓
          </span>
          <span className="block">
            <span className="block text-sm font-medium text-foreground">
              Download:{" "}
              <em className="font-serif italic text-gold">Enough?</em> by Paul
              Armson
            </span>
            <span className="block text-xs text-muted-foreground/70">
              The book that asks the question most advisors never do, free PDF
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
