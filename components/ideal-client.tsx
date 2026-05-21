import { SectionCorners } from "@/components/section-corners";
import Link from "next/link";
import type { ReactNode } from "react";

const yesItems = [
  "You're at or approaching retirement with real complexity, DB pension, RRSPs, TFSAs, corporate assets, an estate to consider",
  "You live actively, travelling, skiing, sailing, cycling, hiking, or simply making the most of time with family",
  "You think about the people around you as much as yourself, family, the next generation, what you leave behind",
  "You've never had someone show you what enough, and more than enough, actually looks like for your specific life",
  "You want a thinking partner who explores the possibilities with you, not a report handed to you",
  "You want a portfolio you can trust and largely ignore",
];

const noItems = [
  "Your primary focus is growing wealth, retirement is still a long way off",
  "You want to discuss markets and portfolio performance at every meeting",
  "You prefer a plan delivered to you rather than built together",
  "Your financial situation is straightforward and your vision of retirement is already settled",
  "You want someone to manage your money with minimal conversation",
];

export function IdealClient(): ReactNode {
  return (
    <section id="ideal" className="relative border-b border-border bg-muted/30">
      <div className="grid grid-cols-1 gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-14 lg:py-24">
        {/* Left column, header + body copy */}
        <div className="flex flex-col">
          <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
            Who This Is For
          </div>
          <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Do you recognise{" "}
            <em className="font-light text-gold">yourself</em> here?
          </h2>

          <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            <p>
              You&apos;ve accumulated well. You&apos;re approaching retirement
              or already there, and life is full. You travel, ski, sail,
              cycle, hike, and make the most of time with the people who
              matter most to you. You aren&apos;t slowing down.
            </p>
            <p>
              But nobody has ever answered the question that actually matters:{" "}
              <em className="font-serif italic text-foreground">
                how much is enough to fund the life you actually want, and
                what does more than enough make possible for the people and
                causes you care about?
              </em>
            </p>
            <p>
              Your situation is complex. You&apos;ve had advisors. You&apos;ve
              had plans. But you&apos;ve never had a thinking partner who
              explores the possibilities with you, in real time, until you
              can actually see your future clearly.
            </p>
            <p className="font-medium text-foreground">That&apos;s what we do.</p>

            <Link
              href="/who-we-help"
              className="focus-ring mt-10 inline-flex items-center gap-2 border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.1em] text-foreground transition-all hover:text-gold"
            >
              See the four situations we plan around
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Right column, two filter boxes */}
        <div className="flex flex-col gap-4">
          {/* YES box */}
          <div className="rounded-lg border border-gold/30 bg-gold/[0.04] p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
              <span aria-hidden="true" className="inline-block h-px w-4 bg-gold" />
              This is likely for you if…
            </div>
            <ul className="space-y-3">
              {yesItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-border pb-3 text-sm leading-relaxed text-muted-foreground last:border-b-0 last:pb-0 sm:text-[0.95rem]"
                >
                  <span aria-hidden="true" className="mt-1 shrink-0 text-gold">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO box */}
          <div className="rounded-lg border border-border p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground opacity-70">
              <span
                aria-hidden="true"
                className="inline-block h-px w-4 bg-current"
              />
              This probably isn&apos;t for you if…
            </div>
            <ul className="space-y-3">
              {noItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-border pb-3 text-sm leading-relaxed text-muted-foreground/80 last:border-b-0 last:pb-0 sm:text-[0.95rem]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-muted-foreground/40"
                  >
                    ·
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <SectionCorners />
    </section>
  );
}
