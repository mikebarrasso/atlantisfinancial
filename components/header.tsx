"use client";

import { Menu, X } from "lucide-react";
import { smoothEase } from "@/components/reveal";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "@/lib/motion";
import { useEffect, useState, type ReactNode } from "react";

const primaryLinks = [
  { label: "Process", href: "/our-process" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Investment", href: "/investment" },
  { label: "Insurance", href: "/insurance" },
  { label: "Articles", href: "/articles" },
  { label: "Team", href: "/team" },
  { label: "FAQ", href: "/faq" },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  ...primaryLinks,
  { label: "Client Stories", href: "/#stories" },
];

const utilityLinks = [
  { label: "Contact", href: "/#cta" },
  { label: "Email Allan", href: "mailto:info@atlantisfinancial.ca" },
];

function Logo(): ReactNode {
  return (
    <Link
      href="/"
      className="focus-ring enter block overflow-hidden rounded-md transition-opacity hover:opacity-90"
      aria-label="Atlantis Financial Inc., home"
    >
      <Image
        src="/atlantis-logo.png"
        alt="Atlantis Financial Inc."
        width={1325}
        height={433}
        priority
        unoptimized
        className="block h-10 w-auto sm:h-11"
      />
    </Link>
  );
}

export function Header(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const closeMenu = (): void => setIsOpen(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("nav-open");

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove("nav-open");
    };
  }, [isOpen]);

  return (
    <header className="border-border bg-background/95 supports-backdrop-filter:bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <span
        aria-hidden="true"
        className="border-border bg-background pointer-events-none absolute bottom-0 left-0 z-10 h-[7px] w-[7px] -translate-x-1/2 translate-y-1/2 border"
      />
      <span
        aria-hidden="true"
        className="border-border bg-background pointer-events-none absolute right-0 bottom-0 z-10 h-[7px] w-[7px] translate-x-1/2 translate-y-1/2 border"
      />

      <div className="flex h-20 items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className={`hidden rounded-full px-2 py-1.5 transition-[background-color] duration-300 ease-out lg:ml-12 lg:flex lg:items-center lg:gap-1 ${
            isScrolled ? "bg-transparent" : "bg-muted"
          }`}
          aria-label="Primary navigation"
        >
          {primaryLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ ["--enter-delay" as string]: `${80 + i * 60}ms` }}
              className="focus-ring enter text-foreground hover:text-muted-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <Link
            href="/#cta"
            style={{ ["--enter-delay" as string]: "320ms" }}
            className="focus-ring enter bg-gold text-navy-deep hover:bg-gold-light rounded-full px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-300 ease-out"
          >
            Start a Conversation
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Link
            href="/#cta"
            style={{ ["--enter-delay" as string]: "120ms" }}
            className="focus-ring enter bg-gold text-navy-deep hover:bg-gold-light rounded-full px-4 py-2 text-xs font-semibold tracking-[0.1em] uppercase transition-colors"
          >
            Talk to us
          </Link>
          <button
            type="button"
            style={{ ["--enter-delay" as string]: "180ms" }}
            className="focus-ring enter bg-muted text-foreground hover:bg-border inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }
            }
            transition={{ duration: 0.28, ease: smoothEase }}
            className="border-border bg-background fixed inset-x-0 top-20 z-40 min-h-[calc(100dvh-5rem)] border-t sm:top-24 sm:min-h-[calc(100dvh-6rem)] lg:hidden"
          >
            <div className="min-h-[calc(100dvh-5rem)] px-4 pt-20 sm:min-h-[calc(100dvh-6rem)] sm:px-6 sm:pt-24">
              <nav aria-label="Mobile navigation">
                <motion.ul
                  className="space-y-2"
                  initial={prefersReducedMotion ? false : "hidden"}
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.04,
                      },
                    },
                  }}
                >
                  {mobileLinks.map((link) => (
                    <motion.li
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.35, ease: smoothEase },
                        },
                      }}
                    >
                      <Link
                        href={link.href}
                        className="focus-ring text-foreground hover:text-muted-foreground block rounded-lg text-4xl leading-tight font-normal tracking-[-0.04em] transition-colors sm:text-5xl"
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              <div className="mt-12 flex flex-col items-start gap-2 pb-10">
                <p className="text-muted-foreground text-base font-medium tracking-[-0.02em]">
                  Connect
                </p>
                {utilityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="focus-ring text-foreground hover:text-muted-foreground rounded-md text-base font-normal transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
