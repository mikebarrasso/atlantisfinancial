import { SectionCorners } from "@/components/section-corners";
import type { ReactNode } from "react";

const stories: ReadonlyArray<{
  who: string;
  before: string;
  after: string;
}> = [
  {
    who: "Retired couple, Ontario",
    before:
      "They had a DB pension, two RRSPs, a cottage, and a corporate portfolio. Every advisor they'd seen gave them a number to hit. Nobody had ever asked them what the number was actually for.",
    after:
      "For the first time, I understood what we actually had, and that we could afford to stop worrying and start planning the trips we'd always deferred.",
  },
  {
    who: "Teacher, approaching retirement",
    before:
      "She was 58, with a DB pension and a significant RRSP. Her husband, 69, had already retired. She didn't know whether to keep working, when to take CPP, or whether the lifestyle they wanted was even fundable.",
    after:
      "We ran five different scenarios in one meeting. By the end, I knew exactly which one fit our life, and that I could retire two years earlier than I thought.",
  },
  {
    who: "Business owner, transitioning out",
    before:
      "He'd built a successful business with retained earnings, personal RRSPs, and a ski property. His old advisor had a standardised approach that never quite fit.",
    after:
      "We mapped the whole picture, business assets, personal accounts, what I wanted to leave behind, and built something I actually understood and believed in.",
  },
];

export function ClientStories(): ReactNode {
  return (
    <section id="stories" className="relative border-b border-border">
      <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="mb-12 max-w-2xl">
          <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
            My Clients&apos; Stories
          </div>
          <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Not our story.{" "}
            <em className="font-light text-gold">Their stories.</em>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            A story is an arc, before, during, after. That&apos;s far more
            honest than a testimonial.
          </p>
        </div>

        <div className="grid grid-cols-1 border border-border md:grid-cols-3">
          {stories.map((story, i) => (
            <article
              key={story.who}
              className={`flex flex-col gap-4 p-6 transition-colors hover:bg-gold/[0.02] sm:p-8 ${
                i < stories.length - 1
                  ? "border-b border-border md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-gold/70">
                Before → After
              </span>
              <p className="border-b border-border pb-4 text-sm leading-relaxed text-muted-foreground">
                {story.before}
              </p>
              <p className="font-serif text-lg italic leading-snug text-foreground">
                &ldquo;{story.after}&rdquo;
              </p>
              <p className="mt-auto pt-2 text-[10px] uppercase tracking-[0.12em] text-gold/60">
                {story.who}
              </p>
            </article>
          ))}
        </div>

        {/* Video block */}
        <div className="mt-14">
          <div className="mb-4 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
            Client Video, In Their Own Words
          </div>
          <div className="relative mx-auto flex aspect-video w-full max-w-3xl flex-col items-center justify-center gap-3 overflow-hidden rounded-md border border-border bg-gradient-to-br from-muted to-background">
            <button
              type="button"
              aria-label="Play client video testimonial"
              className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/50 text-gold transition-all hover:scale-105 hover:border-gold"
            >
              <span aria-hidden="true" className="ml-1 text-xl">
                ▶
              </span>
            </button>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/50">
              Client video testimonial, compilation
            </span>
            <p className="absolute bottom-3 text-[10px] italic text-muted-foreground/40">
              Replace with client compilation video
            </p>
          </div>
        </div>
      </div>
      <SectionCorners />
    </section>
  );
}
