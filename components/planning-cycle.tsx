"use client";

import { useReducedMotion } from "@/lib/motion";
import { motion } from "motion/react";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";

const CYCLE_PATH =
  "M 145 100 Q 300 50 455 100 Q 545 230 455 360 Q 300 410 145 360 Q 55 230 145 100 Z";

const ARROW_PATHS = [
  "M 190 95 Q 300 50 410 95",
  "M 498 145 Q 545 230 498 315",
  "M 410 365 Q 300 410 190 365",
  "M 102 315 Q 55 230 102 145",
] as const;

const phases = [
  {
    id: "action",
    name: "Action",
    label: "ACTION",
    outputs: "Tactics · Renewal",
    x: 24.2,
    y: 21.7,
  },
  {
    id: "discovery",
    name: "Discovery",
    label: "DISCOVERY",
    outputs: "Facts · Experience",
    x: 75.8,
    y: 21.7,
  },
  {
    id: "scenarios",
    name: "Scenarios",
    label: "SCENARIOS",
    outputs: "Wants · Vision",
    x: 75.8,
    y: 78.3,
  },
  {
    id: "solutions",
    name: "Solutions",
    label: "SOLUTIONS",
    outputs: "Goals · Decisions",
    x: 24.2,
    y: 78.3,
  },
] as const;

const PHASE_DURATION_MS = 2800;

export function PlanningCycle(): ReactNode {
  const uid = useId();
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback((): void => {
    setActiveIndex((current) => (current + 1) % phases.length);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const timer = window.setInterval(advance, PHASE_DURATION_MS);
    return () => window.clearInterval(timer);
  }, [advance, paused, reduceMotion]);

  const glowId = `cycle-glow-${uid}`;
  const arrowId = `cycle-arrow-${uid}`;

  return (
    <div className="mx-auto w-full max-w-md">
      <p className="text-muted-foreground/60 mb-4 text-center font-serif text-sm italic">
        Possibilities always at the centre
      </p>

      <div
        className="border-border bg-muted/40 relative overflow-hidden rounded-md border p-4 sm:p-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setPaused(false);
          }
        }}
      >
        <div
          className="relative mx-auto aspect-[600/460] w-full"
          role="img"
          aria-label="Animated planning cycle: Action, Discovery, Scenarios, and Solutions orbit around Possibilities Planning at the centre"
        >
          {/* SVG tracks + orbiting particle */}
          <svg
            viewBox="0 0 600 460"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <marker
                id={arrowId}
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path
                  d="M2 1L8 5L2 9"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>

            <motion.g
              style={{ transformOrigin: "300px 230px" }}
              animate={{ rotate: reduceMotion ? 0 : 360 }}
              transition={
                reduceMotion
                  ? { duration: 0.01 }
                  : { duration: 48, repeat: Infinity, ease: "linear" }
              }
            >
              <ellipse
                cx="300"
                cy="230"
                rx="200"
                ry="170"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.28"
              />
            </motion.g>

            <motion.ellipse
              cx="300"
              cy="230"
              rx="110"
              ry="90"
              fill="var(--gold)"
              animate={
                reduceMotion
                  ? { opacity: 0.08 }
                  : { opacity: [0.06, 0.14, 0.06] }
              }
              transition={
                reduceMotion
                  ? { duration: 0.01 }
                  : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
            />

            <motion.ellipse
              cx="300"
              cy="230"
              rx="110"
              ry="90"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1"
              strokeDasharray="3 5"
              animate={
                reduceMotion
                  ? { strokeDashoffset: 0 }
                  : { strokeDashoffset: [0, -16] }
              }
              transition={
                reduceMotion
                  ? { duration: 0.01 }
                  : { duration: 6, repeat: Infinity, ease: "linear" }
              }
              opacity="0.55"
            />

            {ARROW_PATHS.map((path, index) => (
              <motion.path
                key={path}
                d={path}
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.5"
                opacity={activeIndex === index ? 0.95 : 0.35}
                markerEnd={`url(#${arrowId})`}
                strokeDasharray="10 8"
                animate={
                  reduceMotion
                    ? { strokeDashoffset: 0 }
                    : { strokeDashoffset: [0, -36] }
                }
                transition={
                  reduceMotion
                    ? { duration: 0.2 }
                    : {
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.15,
                      }
                }
              />
            ))}

            <path
              d={CYCLE_PATH}
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1"
              opacity="0.12"
            />

            {!reduceMotion && (
              <>
                <circle r="10" fill="var(--gold)" opacity="0.18" filter={`url(#${glowId})`}>
                  <animateMotion
                    dur="11.2s"
                    repeatCount="indefinite"
                    path={CYCLE_PATH}
                  />
                </circle>
                <circle r="4.5" fill="var(--gold-light)" filter={`url(#${glowId})`}>
                  <animateMotion
                    dur="11.2s"
                    repeatCount="indefinite"
                    path={CYCLE_PATH}
                  />
                </circle>
              </>
            )}
          </svg>

          {/* Centre hub */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 w-[38%] -translate-x-1/2 -translate-y-1/2 text-center">
            <motion.div
              className="border-gold/50 bg-gold/[0.06] flex min-h-[5.5rem] flex-col items-center justify-center rounded-full border border-dashed px-4 py-3 backdrop-blur-[1px]"
              animate={reduceMotion ? { scale: 1 } : { scale: [1, 1.03, 1] }}
              transition={
                reduceMotion
                  ? { duration: 0.01 }
                  : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <span className="text-gold font-serif text-sm italic sm:text-base">
                Possibilities
              </span>
              <span className="text-gold font-serif text-sm italic sm:text-base">
                Planning
              </span>
            </motion.div>
          </div>

          {/* Phase nodes */}
          {phases.map((phase, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={phase.id}
                type="button"
                aria-pressed={isActive}
                aria-label={`${phase.name}: ${phase.outputs}`}
                className="focus-ring absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none"
                style={{ left: `${phase.x}%`, top: `${phase.y}%` }}
                onClick={() => setActiveIndex(index)}
              >
                <motion.div
                  className="bg-navy-mid relative flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-full sm:h-[6.25rem] sm:w-[6.25rem]"
                  animate={{
                    scale: reduceMotion ? 1 : isActive ? 1.08 : 1,
                    boxShadow: isActive
                      ? "0 0 0 2px rgba(201,168,108,0.85), 0 12px 28px rgba(15,30,58,0.28)"
                      : "0 0 0 1px rgba(201,168,108,0.18), 0 4px 14px rgba(15,30,58,0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <motion.span
                    aria-hidden="true"
                    className="bg-gold absolute inset-0 rounded-full"
                    animate={{ opacity: isActive ? 0.14 : 0 }}
                    transition={{ duration: 0.35 }}
                  />
                  <span className="text-cream relative text-[9px] font-semibold tracking-[0.14em] sm:text-[10px]">
                    {phase.label}
                  </span>
                  <span className="text-gold-light relative mt-1 px-2 text-center font-serif text-[9px] italic sm:text-[10px]">
                    {phase.outputs}
                  </span>
                </motion.div>
              </button>
            );
          })}
        </div>

        <p className="text-muted-foreground/70 mt-4 text-center text-[11px] tracking-[0.08em] uppercase">
          {paused ? "Paused" : "Live cycle"} ·{" "}
          <span className="text-gold">{phases[activeIndex]?.name}</span>
        </p>
      </div>
    </div>
  );
}
