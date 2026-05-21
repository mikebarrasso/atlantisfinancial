import { RevealItem, RevealStagger } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import type { ReactNode } from "react";

/**
 * The Plan: StoryBrand's "plan" element. Three simple steps that lower the
 * activation energy of engaging. Distinct from the Process cycle diagram,
 * which is the deeper methodology. This answers "what do I actually do?"
 */

const steps: ReadonlyArray<{
  num: string;
  title: string;
  body: string;
}> = [
  {
    num: "01",
    title: "Start a conversation",
    body: "A relaxed 30-minute call. You talk, we listen. No cost, no obligation, and no pressure to go further.",
  },
  {
    num: "02",
    title: "See your scenarios",
    body: "We model your real options together, live in the meeting, adjusting and comparing until the trade-offs are obvious.",
  },
  {
    num: "03",
    title: "Move forward with clarity",
    body: "Choose the path that fits your life, and put it into action with us alongside you for the long run.",
  },
];

export function Plan(): ReactNode {
  return (
    <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
            How It Works
          </div>
          <h2 className="text-foreground font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Three steps to a plan you can{" "}
            <em className="text-gold font-light">see.</em>
          </h2>
        </div>

        <RevealStagger className="border-border bg-border grid grid-cols-1 gap-px overflow-hidden rounded-lg border md:grid-cols-3">
          {steps.map((step) => (
            <RevealItem key={step.num}>
              <div className="bg-background motion-lift flex h-full flex-col gap-4 p-7 sm:p-9">
                <span className="text-gold/30 font-serif text-5xl leading-none font-light">
                  {step.num}
                </span>
                <h3 className="text-foreground font-serif text-2xl leading-tight font-light tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed sm:text-[0.95rem]">
                  {step.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#cta"
            className="focus-ring bg-gold text-navy-deep hover:bg-gold-light inline-flex items-center px-7 py-4 text-xs font-semibold tracking-[0.12em] uppercase transition-colors"
          >
            Start a Conversation
          </a>
          <span className="text-muted-foreground text-sm italic">
            It begins with a single call. Nothing to prepare.
          </span>
        </div>
      </div>
      <SectionCorners />
    </section>
  );
}
