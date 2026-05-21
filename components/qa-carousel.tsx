"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { QA } from "@/lib/team-data";
import { useState, type ReactNode } from "react";

export function QACarousel({ items }: { items: ReadonlyArray<QA> }): ReactNode {
  const [idx, setIdx] = useState(0);
  if (items.length === 0) return null;
  const cur = items[idx];
  if (!cur) return null;

  const prev = (): void => setIdx((i) => Math.max(0, i - 1));
  const next = (): void => setIdx((i) => Math.min(items.length - 1, i + 1));

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-stretch">
        <button
          type="button"
          onClick={prev}
          disabled={idx === 0}
          aria-label="Previous question"
          className="focus-ring border-border bg-background text-foreground hover:bg-navy hover:text-cream disabled:hover:bg-background disabled:hover:text-foreground flex w-12 shrink-0 items-center justify-center border border-r-0 transition-colors disabled:cursor-not-allowed disabled:opacity-20"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div className="border-border bg-background flex min-h-[220px] flex-1 flex-col justify-between border p-8 sm:p-10">
          <div>
            <p className="text-gold mb-3 text-[10px] font-medium tracking-[0.18em] uppercase opacity-80">
              {cur.q}
            </p>
            <p className="text-foreground font-serif text-2xl leading-snug font-light sm:text-3xl">
              {cur.a}
            </p>
          </div>
          <div className="border-border mt-7 flex items-center justify-between border-t pt-4">
            <span className="text-muted-foreground text-[11px] tracking-[0.12em] uppercase">
              {idx + 1} / {items.length}
            </span>
            <div className="flex gap-1.5" role="tablist">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={idx === i}
                  aria-label={`Go to question ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    idx === i ? "bg-gold" : "bg-border hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          disabled={idx === items.length - 1}
          aria-label="Next question"
          className="focus-ring border-border bg-background text-foreground hover:bg-navy hover:text-cream disabled:hover:bg-background disabled:hover:text-foreground flex w-12 shrink-0 items-center justify-center border border-l-0 transition-colors disabled:cursor-not-allowed disabled:opacity-20"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
