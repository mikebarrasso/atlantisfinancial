"use client";

import { Moon, Sun } from "lucide-react";
import { smoothEase } from "@/components/reveal";
import { useReducedMotion } from "@/lib/motion";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore, type ReactNode } from "react";

function useIsMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeSwitch(): ReactNode {
  const mounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = (): void => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <div className="fixed right-6 bottom-6 z-50">
        <button
          className="bg-foreground/10 h-10 w-10 cursor-not-allowed rounded-full opacity-30"
          aria-label="Toggle theme"
          disabled
        />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      className="fixed right-6 bottom-6 z-50"
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: smoothEase, delay: 0.4 }}
    >
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: prefersReducedMotion ? 1 : 1.06 }}
        whileTap={{ scale: prefersReducedMotion ? 1 : 0.96 }}
        className="bg-muted text-foreground flex h-10 w-10 cursor-pointer items-center justify-center rounded-full opacity-30 shadow-lg transition-opacity duration-300 hover:opacity-100 hover:shadow-xl"
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        aria-pressed={isDark}
        type="button"
      >
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={prefersReducedMotion ? false : { rotate: -40, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: smoothEase }}
          className="inline-flex"
        >
          {isDark ? (
            <Sun className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Moon className="h-5 w-5" aria-hidden="true" />
          )}
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
