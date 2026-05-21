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
    <section id="stories" className="border-border relative border-b">
      <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="mb-12 max-w-2xl">
          <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
            My Clients&apos; Stories
          </div>
          <h2 className="text-foreground font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]">
            This could be your{" "}
            <em className="text-gold font-light">before and after.</em>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-md text-base leading-relaxed sm:text-[1.05rem]">
            A story is an arc: before, during, after. These are real situations
            we&apos;ve worked through. Yours would be your own.
          </p>
        </div>

        <div className="border-border grid grid-cols-1 border md:grid-cols-3">
          {stories.map((story, i) => (
            <article
              key={story.who}
              className={`hover:bg-gold/[0.02] flex flex-col gap-4 p-6 transition-colors sm:p-8 ${
                i < stories.length - 1
                  ? "border-border border-b md:border-r md:border-b-0"
                  : ""
              }`}
            >
              <span className="text-gold/70 text-[10px] font-medium tracking-[0.18em] uppercase">
                Before → After
              </span>
              <p className="border-border text-muted-foreground border-b pb-4 text-sm leading-relaxed">
                {story.before}
              </p>
              <p className="text-foreground font-serif text-lg leading-snug italic">
                &ldquo;{story.after}&rdquo;
              </p>
              <p className="text-gold/60 mt-auto pt-2 text-[10px] tracking-[0.12em] uppercase">
                {story.who}
              </p>
            </article>
          ))}
        </div>

        {/* Video block */}
        <div className="mt-14">
          <div className="text-gold mb-4 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
            Client Video, In Their Own Words
          </div>
          <div className="border-border from-muted to-background relative mx-auto flex aspect-video w-full max-w-3xl flex-col items-center justify-center gap-3 overflow-hidden rounded-md border bg-gradient-to-br">
            <button
              type="button"
              aria-label="Play client video testimonial"
              className="border-gold/50 text-gold hover:border-gold flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all hover:scale-105"
            >
              <span aria-hidden="true" className="ml-1 text-xl">
                ▶
              </span>
            </button>
            <span className="text-muted-foreground/50 text-[11px] tracking-[0.18em] uppercase">
              Client video testimonial, compilation
            </span>
            <p className="text-muted-foreground/40 absolute bottom-3 text-[10px] italic">
              Replace with client compilation video
            </p>
          </div>
        </div>
      </div>
      <SectionCorners />
    </section>
  );
}
