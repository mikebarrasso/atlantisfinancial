"use client";

import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { AnimatePresence, motion, type Transition } from "motion/react";
import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { SectionCorners } from "@/components/section-corners";

const PANEL_TRANSITION: Transition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1],
};

const CHEVRON_TRANSITION: Transition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
};

type FAQ = {
  q: string;
  a: ReadonlyArray<string>;
};

const FAQS: ReadonlyArray<FAQ> = [
  {
    q: "When should I start taking CPP and OAS?",
    a: [
      "There's no universal right age. Delaying CPP to 70 increases your payment by 42% versus age 65, but it only pays off if you live long enough to collect more in total, which depends on your health, longevity, other income, and whether your spouse has their own CPP. We model your specific situation as a scenario, not a formula, so the timing decision is made with the full picture in view.",
    ],
  },
  {
    q: "What's the most tax-efficient way to draw down my accounts (RRSP, RRIF, TFSA, non-registered)?",
    a: [
      "The sequencing of RRSP, RRIF, TFSA, and non-registered withdrawals can meaningfully reduce your lifetime tax bill, but the right answer depends on your specific income picture, estate goals, and spousal situation. For most retirees, strategic RRSP drawdowns before RRIF conversion plus careful coordination with OAS clawback thresholds saves meaningful tax over a 25–30 year retirement.",
    ],
  },
  {
    q: "Can you do a one-time financial plan or review, rather than ongoing management?",
    a: [
      "Yes. Many people need a comprehensive scenario-based planning engagement rather than an ongoing advisory relationship. We can do a thorough review, build your game plan, and let you decide whether ongoing support makes sense after that. There's no pressure to commit to either.",
    ],
  },
  {
    q: "How do I build a decumulation strategy that minimizes taxes through retirement?",
    a: [
      "A year-by-year income plan, drawing from the right accounts in the right order, with strategic RRSP drawdowns before RRIF conversion and TFSA contributions where appropriate, can save significant tax over a 25–30 year retirement. The right schedule depends on your specific income sources, spousal situation, and estate goals. This is scenario work at its most valuable.",
    ],
  },
  {
    q: "We have a mix of assets (DB pension, rental properties, RRSPs, TFSAs, business), can you help us put it all together?",
    a: [
      "Yes, this is exactly the kind of complexity scenario-based planning is designed for. We model all of your assets together, in real time, so you can see how each piece interacts with the others and make decisions with the full picture in front of you.",
    ],
  },
  {
    q: "When should I convert my RRSP to a RRIF, and how much should I be drawing down each year?",
    a: [
      "You must convert by the end of the year you turn 71, but converting earlier and drawing down strategically can reduce your OAS clawback, shrink your eventual RRIF balance, and lower your lifetime tax. We model the optimal conversion and drawdown schedule as part of your income plan, given your specific situation.",
    ],
  },
  {
    q: "We have a significant age gap, how do we plan retirement around two very different financial timelines?",
    a: [
      "Age-gap couples face genuinely asymmetric planning challenges, different CPP ages, different RRIF timelines, different health and lifestyle phases. Scenario planning is especially valuable here because we can model what the plan looks like at each transition point across both timelines simultaneously, in the same meeting.",
    ],
  },
  {
    q: "We're planning to sell our business, farm, or rental property, how does that factor into our retirement income plan?",
    a: [
      "A business or property sale reshapes your entire financial picture. Timing, capital gains exposure, the Lifetime Capital Gains Exemption, and how proceeds integrate with your retirement income and estate strategy all need to be modelled together, ideally before the sale, not after.",
    ],
  },
  {
    q: "Should I take my government pension as a monthly payment or commute the value?",
    a: [
      "This is one of the most consequential and irreversible decisions in retirement planning. The right answer depends on your health, longevity expectations, your spouse's situation, and how you'd invest the commuted value. We model both scenarios in full, including survivor benefits and tax implications, before you decide.",
    ],
  },
  {
    q: "I have retained earnings sitting in a corporation, what's the best way to draw those down alongside my personal retirement income?",
    a: [
      "Corporate retained earnings offer real tax planning flexibility, salary, eligible dividends, non-eligible dividends, and capital dividends each create different outcomes. The right sequence and timing depends on your personal income, your spouse's situation, and your estate goals. This is genuinely complex territory and one where scenario modelling earns its keep most clearly.",
    ],
  },
];

export function Faq(): ReactNode {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const headingId = useId();

  return (
    <section
      id="faq"
      aria-labelledby={headingId}
      className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
            Common Questions
          </div>
          <h2
            id={headingId}
            className="text-foreground font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            Questions you might{" "}
            <em className="text-gold font-light">actually</em> have.
          </h2>
          <p className="text-muted-foreground mt-5 max-w-md font-serif text-base leading-relaxed italic sm:text-[1.05rem]">
            These are the questions people actually bring to a first
            conversation. You&apos;re probably wondering some of them too.
          </p>
          <Link
            href="/faq"
            className="focus-ring border-gold text-foreground hover:text-gold mt-8 inline-flex items-center gap-2 border-b pb-1 text-xs font-medium tracking-[0.1em] uppercase transition-all"
          >
            See all 25+ questions
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <Reveal>
          <div className="border-border border-t">
            <ul className="divide-border divide-y">
              {FAQS.map((faq, i) => (
                <FaqRow
                  key={faq.q}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
                />
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <SectionCorners />
    </section>
  );
}

function FaqRow({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}): ReactNode {
  const triggerId = useId();
  const panelId = useId();

  return (
    <li>
      <button
        id={triggerId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="focus-ring flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left sm:py-7"
      >
        <span className="text-foreground text-base leading-snug font-medium tracking-tight sm:text-lg">
          {faq.q}
        </span>

        {/* Chevron capsule. Cross-fades two background layers so the closed
         * state shows a filled muted chip and the open state shows a hairline
         * border ring. Animating the layers' opacities sidesteps Motion's
         * inability to interpolate between CSS-variable colors. */}
        <motion.span
          aria-hidden="true"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={CHEVRON_TRANSITION}
          className="text-foreground relative inline-flex h-9 w-9 shrink-0 items-center justify-center"
        >
          <motion.span
            className="bg-muted absolute inset-0 rounded-full"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={CHEVRON_TRANSITION}
          />
          <motion.span
            className="border-border absolute inset-0 rounded-full border"
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={CHEVRON_TRANSITION}
          />
          <ChevronDown className="relative h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={PANEL_TRANSITION}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              initial={{ y: -6 }}
              animate={{ y: 0 }}
              exit={{ y: -6 }}
              transition={PANEL_TRANSITION}
              className="text-muted-foreground max-w-3xl space-y-4 pr-12 pb-7 text-sm leading-relaxed sm:text-base"
            >
              {faq.a.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </li>
  );
}
