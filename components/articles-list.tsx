"use client";

import { articleFilters, articles, type Article } from "@/lib/articles-data";
import { useMemo, useState, type ReactNode } from "react";

export function ArticlesList(): ReactNode {
  const [filter, setFilter] = useState<string>("all");

  const visible = useMemo<ReadonlyArray<Article>>(() => {
    if (filter === "all") return articles;
    return articles.filter((a) => a.pub === filter);
  }, [filter]);

  return (
    <>
      {/* Filter chips */}
      <section
        id="filter"
        className="relative border-b border-border bg-muted/30 px-6 py-10 sm:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-gold opacity-80">
            Filter by publication
          </p>
          <div className="flex flex-wrap gap-2">
            {articleFilters.map((chip) => (
              <button
                key={chip.value}
                type="button"
                onClick={() => setFilter(chip.value)}
                className={`focus-ring border px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                  filter === chip.value
                    ? "border-gold bg-gold text-navy-deep"
                    : "border-border bg-transparent text-muted-foreground hover:border-gold/50 hover:text-foreground"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article list */}
      <section className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-5xl">
          {visible.length === 0 ? (
            <p className="border border-border bg-muted/30 p-8 text-center text-sm italic text-muted-foreground">
              No articles in this publication yet. Try another filter, or
              view all of Allan&apos;s writing.
            </p>
          ) : (
            <ul className="divide-y divide-border border-y border-border">
              {visible.map((article, i) => (
                <li
                  key={`${article.pub}-${i}`}
                  className="grid grid-cols-1 items-start gap-6 py-8 transition-colors hover:bg-gold/[0.02] md:grid-cols-[170px_1fr_auto] md:gap-10"
                >
                  <div className="flex flex-col gap-1.5 md:flex-col">
                    <span className="font-serif text-base italic leading-snug text-gold">
                      {article.pubLabel}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground/55">
                      {article.date}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-normal leading-snug tracking-tight text-foreground sm:text-2xl">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-gold"
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex md:items-center">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-2 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.1em] text-gold transition-transform hover:translate-x-1"
                    >
                      Read on {article.pubLabel}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
