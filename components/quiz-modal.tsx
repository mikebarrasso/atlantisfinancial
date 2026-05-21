"use client";

import { X } from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";

type QuizOption = { text: string; score: number };
type Question = {
  id: number;
  theme: string;
  question: string;
  subtitle?: string;
  options: ReadonlyArray<QuizOption>;
};

const QUESTIONS: ReadonlyArray<Question> = [
  {
    id: 1,
    theme: "Problem Complexity",
    question:
      "When you picture your financial future, which description fits best?",
    options: [
      { text: "It's fairly straightforward, I just need to stay on track", score: 1 },
      { text: "There are several moving parts, but I can see the shape of it", score: 2 },
      { text: "It's genuinely complicated, multiple income sources, decisions, timing trade-offs", score: 3 },
      { text: "I have a lot of uncertainty and I'm not sure what's even possible yet", score: 4 },
    ],
  },
  {
    id: 2,
    theme: "Goal-Setting Order",
    question:
      "Has an advisor ever asked you to name your financial goals before showing you what's actually achievable given your situation?",
    options: [
      { text: "No, they always showed me the full picture first", score: 1 },
      { text: "Yes, but it didn't bother me", score: 2 },
      { text: "Yes, and it felt premature, how do I set goals if I don't know what's realistic?", score: 4 },
      { text: "I've never really thought about the order, but now that you mention it…", score: 3 },
    ],
  },
  {
    id: 3,
    theme: "Collaboration Style",
    question: "Which metaphor best describes how you'd like to work with a financial advisor?",
    options: [
      { text: "Mechanic, I hand them the keys, they call me when it's done", score: 1 },
      { text: "Architect, they design the plan, I review and approve it", score: 2 },
      { text: "GPS, I'm driving, they're navigating in real time", score: 3 },
      { text: "Co-pilot, we figure out the route together, adjusting as we go", score: 4 },
    ],
  },
  {
    id: 4,
    theme: "What-If Thinking",
    question: "How often do 'what if' questions keep you up at night about money?",
    options: [
      { text: "Rarely, my situation is settled enough that I'm not losing sleep", score: 1 },
      { text: "Occasionally, a few big questions I'd like answered", score: 2 },
      { text: "Often, there are real forks in the road ahead and the stakes are high", score: 3 },
      { text: "Constantly, it feels like every decision connects to ten others", score: 4 },
    ],
  },
  {
    id: 5,
    theme: "Complexity Inventory",
    question: "How many of these apply to your situation? (Select the range that fits)",
    subtitle:
      "Pension or CPP timing decisions · Corporate or holdco assets · Business transition or sale · Estate planning needs · Registered vs non-registered account mix · Variable retirement date · Spousal income differences · Insurance as a financial tool",
    options: [
      { text: "None or one", score: 1 },
      { text: "Two or three", score: 2 },
      { text: "Four or five", score: 3 },
      { text: "Six or more", score: 4 },
    ],
  },
  {
    id: 6,
    theme: "Past Planning Experience",
    question:
      "Have you ever received a financial plan that felt like it didn't quite capture your real situation?",
    options: [
      { text: "No, past plans have felt accurate and actionable", score: 1 },
      { text: "Somewhat, it was fine but a bit generic", score: 2 },
      { text: "Yes, it felt like a template that could have been for anyone", score: 3 },
      { text: "Yes, and I never fully trusted it or acted on it", score: 4 },
    ],
  },
  {
    id: 7,
    theme: "Decision Under Uncertainty",
    question: "When facing a major financial decision with many unknowns, you tend to:",
    options: [
      { text: "Trust a professional's recommendation and move forward", score: 1 },
      { text: "Research it yourself until you feel confident", score: 2 },
      { text: "Want to see the numbers behind different options before deciding", score: 3 },
      { text: "Need to see multiple scenarios play out visually before you can commit", score: 4 },
    ],
  },
  {
    id: 8,
    theme: "Trade-Off Awareness",
    question:
      "Retiring two years earlier, saving $500 more per month, or downsizing your home, which best describes how you think about choices like these?",
    options: [
      { text: "I'd prefer my advisor just tell me the best option", score: 1 },
      { text: "I'm comfortable with a single recommendation and a brief explanation", score: 2 },
      { text: "I'd want to see what each option actually does to the long-term picture", score: 3 },
      { text: "I want to explore all of them, and combinations of them, before deciding", score: 4 },
    ],
  },
  {
    id: 9,
    theme: "Technology & Transparency",
    question:
      "How important is it to you that your advisor can run scenarios live, in the meeting, with you watching?",
    options: [
      { text: "Not important, I trust them to do the work and present results", score: 1 },
      { text: "Somewhat, it would be nice but isn't essential", score: 2 },
      { text: "Important, I want to understand how the numbers work, not just the conclusion", score: 3 },
      { text: "Very important, that kind of transparency is exactly what I've been looking for", score: 4 },
    ],
  },
  {
    id: 10,
    theme: "What You Want Most",
    question: "What would a truly excellent advisor relationship give you that you don't have now?",
    options: [
      { text: "Confidence that my investments are being managed well", score: 1 },
      { text: "A clear, written plan I can refer back to", score: 2 },
      { text: "A trusted thinking partner for major life and money decisions", score: 3 },
      { text: "The ability to see my financial future in different scenarios and choose my own path", score: 4 },
    ],
  },
];

type Result = {
  tier: "Straightforward" | "Complicated" | "Hyper-Complex";
  label: string;
  summary: string;
  cta: string;
};

function calcResult(total: number): Result {
  if (total <= 16) {
    return {
      tier: "Straightforward",
      label: "Your Situation Is Relatively Simple",
      summary:
        "Your financial life appears well-defined and on a clear trajectory. A competent advisor can likely serve you well with a solid, structured plan. You may still benefit from a periodic review and some scenario modelling at key transitions, but your core needs are focused rather than complex.",
      cta: "Even if your situation is simpler today, life has a way of adding complexity. A brief discovery conversation costs nothing and might reveal more value than you'd expect.",
    };
  }
  if (total <= 27) {
    return {
      tier: "Complicated",
      label: "Your Situation Is Meaningfully Complex",
      summary:
        "You have several interconnected decisions ahead, and the order and timing of those decisions matters. A standard plan may give you a framework, but it's unlikely to capture all the trade-offs that are specific to you. You would benefit from an advisor who thinks in scenarios, not just conclusions.",
      cta: "This is exactly the kind of complexity that scenario-based planning was designed for. A conversation about your situation would let us map the key decisions and explore the possibilities.",
    };
  }
  return {
    tier: "Hyper-Complex",
    label: "Your Situation Is Hyper-Complex",
    summary:
      "Your financial life involves multiple intersecting variables where the right answer depends on dozens of 'what ifs.' Traditional goals-based planning often fails people in this situation, not because the advisor isn't good, but because the approach doesn't fit the problem. What you need isn't a plan handed to you. You need a collaborative process of exploring the possibilities first, then building the plan from what's actually achievable.",
    cta: "This is where scenario-based financial planning, working through options together, live, until the picture becomes clear, makes all the difference. Let's talk.",
  };
}

export function QuizModal(): ReactNode {
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState(0);
  const [answers, setAnswers] = useState<ReadonlyArray<number | null>>(
    () => new Array(QUESTIONS.length).fill(null),
  );
  const [showResults, setShowResults] = useState(false);

  const close = useCallback((): void => {
    setOpen(false);
  }, []);

  const reset = useCallback((): void => {
    setCur(0);
    setAnswers(new Array(QUESTIONS.length).fill(null));
    setShowResults(false);
  }, []);

  // Listen for global open-quiz events
  useEffect(() => {
    const handler = (): void => {
      reset();
      setOpen(true);
    };
    window.addEventListener("open-quiz", handler);
    return () => window.removeEventListener("open-quiz", handler);
  }, [reset]);

  // Lock body scroll + Escape key
  useEffect(() => {
    if (!open) return;
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = origOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  const question = QUESTIONS[cur];
  const selectedIndex = answers[cur];
  const total = answers.reduce(
    (sum: number, a, i) => sum + (a !== null ? (QUESTIONS[i]?.options[a]?.score ?? 0) : 0),
    0,
  );
  const result = calcResult(total);
  const progressPct = showResults ? 100 : Math.round(((cur + 1) / QUESTIONS.length) * 100);

  const selectOption = (i: number): void => {
    const next = [...answers];
    next[cur] = i;
    setAnswers(next);
  };

  const nextQuestion = (): void => {
    if (cur < QUESTIONS.length - 1) {
      setCur(cur + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = (): void => {
    if (cur > 0) setCur(cur - 1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-title"
      className="fixed inset-0 z-[500] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden border border-border bg-background shadow-2xl">
        <button
          type="button"
          aria-label="Close quiz"
          onClick={close}
          className="focus-ring absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-gold"
        >
          <X className="h-5 w-5" strokeWidth={1.75} />
        </button>

        {!showResults && (
          <>
            <div className="px-8 pb-2 pt-10 sm:px-10">
              <div className="mb-4 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                <span aria-hidden="true" className="inline-block h-px w-4 bg-gold" />
                <span id="quiz-title">The 10-Question Quiz</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Ten questions to find out whether the financial advice
                you&apos;ve been getting actually matches the complexity of
                your life, and whether you&apos;ve been asking the right
                question all along.
              </p>
              <p className="mt-3 text-xs italic text-muted-foreground/60">
                Takes about five minutes. Your result might surprise you.
              </p>
            </div>

            <div className="flex items-center justify-between border-y border-border px-8 py-3 sm:px-10">
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                Scenario Complexity Assessment
              </span>
              <span className="text-xs text-muted-foreground">
                Question {cur + 1} of {QUESTIONS.length}
              </span>
            </div>
            <div className="h-[2px] bg-border">
              <div
                className="h-full bg-gold transition-[width] duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6 sm:px-10 sm:py-8">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-gold/70">
                {question?.theme}
              </p>
              {question?.subtitle && (
                <p className="mb-4 border-l-2 border-silver/40 bg-silver/[0.05] px-4 py-3 text-xs italic leading-relaxed text-silver">
                  {question.subtitle}
                </p>
              )}
              <p className="mb-6 font-serif text-2xl font-light leading-snug text-foreground sm:text-3xl">
                {question?.question}
              </p>
              <div className="flex flex-col gap-2">
                {question?.options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => selectOption(i)}
                    className={`focus-ring flex items-start gap-3.5 border px-5 py-3.5 text-left text-sm leading-relaxed transition-all ${
                      selectedIndex === i
                        ? "border-gold bg-gold/10 text-foreground"
                        : "border-border text-muted-foreground hover:translate-x-1 hover:border-gold hover:bg-gold/[0.04] hover:text-foreground"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 inline-block h-4 w-4 shrink-0 rounded-full border-2 transition-colors ${
                        selectedIndex === i
                          ? "border-gold bg-gold"
                          : "border-muted-foreground/30"
                      }`}
                    />
                    <span>{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border px-8 py-4 sm:px-10">
              <button
                type="button"
                onClick={prevQuestion}
                style={{ visibility: cur === 0 ? "hidden" : "visible" }}
                className="focus-ring border border-border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:border-cream-dim hover:text-foreground"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={nextQuestion}
                disabled={selectedIndex === null}
                className="focus-ring bg-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-navy-deep transition-all hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-30"
              >
                {cur === QUESTIONS.length - 1 ? "See My Results →" : "Next →"}
              </button>
            </div>
          </>
        )}

        {showResults && (
          <div className="flex-1 overflow-y-auto px-8 py-8 sm:px-10">
            <div className="flex flex-col gap-5">
              <div className="border-t-[3px] border-gold bg-muted/40 p-6 text-center sm:p-8">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                  Your Financial Complexity Profile
                </p>
                <h3 className="font-serif text-2xl font-light leading-tight text-foreground sm:text-3xl">
                  {result.label}
                </h3>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {(["Straightforward", "Complicated", "Hyper-Complex"] as const).map(
                    (tier) => (
                      <span
                        key={tier}
                        className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                          result.tier === tier
                            ? "border-gold bg-gold text-navy-deep"
                            : "border-border bg-background text-muted-foreground"
                        }`}
                      >
                        {tier}
                      </span>
                    ),
                  )}
                </div>
                <p className="mt-5 text-left text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                  {result.summary}
                </p>
              </div>

              <div className="border border-gold/30 bg-gold/[0.05] p-5 sm:p-6">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                  What This Means For You
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Most financial advice is built for simple or complicated
                  situations, where goals are clear, timelines are fixed,
                  and the advisor just needs to build a plan. But when your
                  situation is genuinely complex, the traditional approach
                  breaks down.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <em className="font-serif italic text-gold">
                    Scenario-based planning
                  </em>{" "}
                  takes a different approach. Instead of asking you to set
                  goals first and then building a plan around them, we
                  explore what&apos;s actually possible given your full
                  picture, then help you choose the path that fits your
                  life. You&apos;re in the room when the numbers run. You
                  see the trade-offs. You make informed choices rather than
                  accepting conclusions.
                </p>
              </div>

              <div className="border border-border bg-background p-5 text-center sm:p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {result.cta}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
                  <a
                    href="mailto:info@atlantisfinancial.ca"
                    onClick={close}
                    className="focus-ring bg-gold px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-navy-deep transition-colors hover:bg-gold-light"
                  >
                    Start a Conversation
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="focus-ring border border-border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                  >
                    Retake the Quiz
                  </button>
                </div>
                <p className="mt-5 font-serif text-sm italic text-gold">
                  Allan Norman · CFP · CIM · RWM
                  <span className="mt-1 block text-[10px] not-italic uppercase tracking-[0.12em] text-silver">
                    Atlantis Financial Inc. · Barrie, Ontario
                  </span>
                </p>
              </div>

              <p className="text-center text-[11px] italic text-muted-foreground/40">
                Based on concepts from <em>Scenario Selling</em> by Sullivan
                &amp; Lazenby
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
