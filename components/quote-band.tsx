import type { ReactNode } from "react";

export function QuoteBand(): ReactNode {
  return (
    <section
      id="quote"
      className="border-border bg-gold/[0.04] relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span
          aria-hidden="true"
          className="text-gold block font-serif text-7xl leading-none opacity-30"
        >
          &ldquo;
        </span>
        <blockquote className="mt-4">
          <p className="text-foreground font-serif text-2xl leading-snug font-light italic sm:text-3xl lg:text-[2.4rem]">
            How much is <em className="text-gold">enough</em>, and what does{" "}
            <em className="text-gold">more than enough</em> make possible for
            the people and causes you love?
          </p>
          <footer className="text-gold/80 mt-4 text-[10px] font-medium tracking-[0.2em] uppercase">
            Inspired by Paul Armson,{" "}
            <span className="text-gold/70 font-serif text-xs tracking-normal normal-case italic">
              Enough?
            </span>
          </footer>
        </blockquote>

        <a
          href="/downloads/enough-paul-armson.pdf"
          download
          className="focus-ring border-border bg-gold/[0.04] hover:border-gold hover:bg-gold/[0.08] mt-8 inline-flex items-center gap-4 border px-5 py-3 text-left transition-colors"
        >
          <span aria-hidden="true" className="text-gold text-xl">
            ↓
          </span>
          <span className="block">
            <span className="text-foreground block text-sm font-medium">
              Download: <em className="text-gold font-serif italic">Enough?</em>{" "}
              by Paul Armson
            </span>
            <span className="text-muted-foreground/70 block text-xs">
              The book that asks the question most advisors never do, free PDF
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
