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
          className="focus-ring flex w-12 shrink-0 items-center justify-center border border-r-0 border-border bg-background text-foreground transition-colors hover:bg-navy hover:text-cream disabled:cursor-not-allowed disabled:opacity-20 disabled:hover:bg-background disabled:hover:text-foreground"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div className="flex min-h-[220px] flex-1 flex-col justify-between border border-border bg-background p-8 sm:p-10">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-gold opacity-80">
              {cur.q}
            </p>
            <p className="font-serif text-2xl font-light leading-snug text-foreground sm:text-3xl">
              {cur.a}
            </p>
          </div>
          <div className="mt-7 flex items-center justify-between border-t border-border pt-4">
            <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
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
          className="focus-ring flex w-12 shrink-0 items-center justify-center border border-l-0 border-border bg-background text-foreground transition-colors hover:bg-navy hover:text-cream disabled:cursor-not-allowed disabled:opacity-20 disabled:hover:bg-background disabled:hover:text-foreground"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
