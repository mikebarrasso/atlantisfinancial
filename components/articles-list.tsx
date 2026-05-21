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
        className="border-border bg-muted/30 relative border-b px-6 py-10 sm:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-gold mb-4 text-[10px] font-medium tracking-[0.18em] uppercase opacity-80">
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
                    : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground bg-transparent"
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
            <p className="border-border bg-muted/30 text-muted-foreground border p-8 text-center text-sm italic">
              No articles in this publication yet. Try another filter, or view
              all of Allan&apos;s writing.
            </p>
          ) : (
            <ul className="divide-border border-border divide-y border-y">
              {visible.map((article, i) => (
                <li
                  key={`${article.pub}-${i}`}
                  className="hover:bg-gold/[0.02] grid grid-cols-1 items-start gap-6 py-8 transition-colors md:grid-cols-[170px_1fr_auto] md:gap-10"
                >
                  <div className="flex flex-col gap-1.5 md:flex-col">
                    <span className="text-gold font-serif text-base leading-snug italic">
                      {article.pubLabel}
                    </span>
                    <span className="text-muted-foreground/55 text-[11px] tracking-[0.12em] uppercase">
                      {article.date}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-foreground font-serif text-xl leading-snug font-normal tracking-tight sm:text-2xl">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold transition-colors"
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p className="text-muted-foreground mt-2.5 max-w-2xl text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex md:items-center">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring text-gold inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.1em] whitespace-nowrap uppercase transition-transform hover:translate-x-1"
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
