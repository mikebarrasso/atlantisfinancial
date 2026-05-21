import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import type { ReactNode } from "react";

const linkColumns: ReadonlyArray<{
  label: string;
  items: ReadonlyArray<{ label: string; href: string }>;
}> = [
  {
    label: "Services",
    items: [
      { label: "Our Process", href: "/our-process" },
      { label: "Who We Help", href: "/who-we-help" },
      { label: "Investment Management", href: "/investment" },
      { label: "Insurance", href: "/insurance" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Articles", href: "/articles" },
      { label: "FAQ", href: "/faq" },
      { label: "Client Stories", href: "/#stories" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    label: "Connect",
    items: [
      { label: "Start a Conversation", href: "/#cta" },
      {
        label: "info@atlantisfinancial.ca",
        href: "mailto:info@atlantisfinancial.ca",
      },
      { label: "Barrie, Ontario", href: "/team" },
    ],
  },
];

/**
 * Compliance disclaimer text per Aligned Capital Partners' Disclaimer Library.
 *
 *   "general", used on every non-investment page (Disclaimer #3, OBA Business)
 *   "investment", used only on /investment (Disclaimer #2, ACPI Only)
 */
type FooterVariant = "general" | "investment";

function ComplianceDisclaimer({
  variant,
}: {
  variant: FooterVariant;
}): ReactNode {
  if (variant === "investment") {
    return (
      <>
        Aligned Capital Partners Inc. (&ldquo;ACPI&rdquo;) is a full-service
        investment dealer and a member of the Canadian Investor Protection Fund
        (&ldquo;CIPF&rdquo;) and Canadian Investment Regulatory Organization
        (&ldquo;CIRO&rdquo;). Investment services are provided through ACPI.
        Only investment-related products and services are offered through ACPI
        and covered by the CIPF.
      </>
    );
  }
  return (
    <>
      Aligned Capital Partners Inc. (&ldquo;ACPI&rdquo;) is a full-service
      investment dealer and a member of the Canadian Investor Protection Fund
      (&ldquo;CIPF&rdquo;) and Canadian Investment Regulatory Organization
      (&ldquo;CIRO&rdquo;). Investment services are provided through ACPI. Only
      investment-related products and services are offered through ACPI and
      covered by the CIPF. Financial planning and insurance services are
      provided through Atlantis Financial Inc.. Atlantis Financial Inc. is an
      independent company separate and distinct from ACPI.
    </>
  );
}

export function Footer({
  variant = "general",
}: { variant?: FooterVariant } = {}): ReactNode {
  return (
    <Reveal>
      <section className="bg-background p-3 sm:p-4 lg:p-6">
        <div className="bg-navy-deep text-cream rounded-3xl px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          {/* ── LINK COLUMNS + CTA ─────────────────────────── */}
          <RevealStagger className="grid grid-cols-1 gap-12 lg:grid-cols-[auto_1fr_auto] lg:gap-16">
            <RevealItem>
              <div>
                <a
                  href="#main-content"
                  className="focus-ring text-cream-dim hover:text-gold inline-flex items-center gap-2 rounded-sm text-sm transition-colors"
                >
                  Back to top
                  <span aria-hidden="true">↑</span>
                </a>
              </div>
            </RevealItem>

            <RevealItem>
              <nav
                aria-label="Footer"
                className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-12"
              >
                {linkColumns.map((column) => (
                  <div key={column.label}>
                    <p className="text-gold/80 mb-5 text-[10px] font-medium tracking-[0.18em] uppercase">
                      {column.label}
                    </p>
                    <ul className="space-y-3">
                      {column.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="focus-ring text-cream-dim hover:text-cream rounded-sm text-sm transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </RevealItem>

            <RevealItem>
              <div className="flex flex-col items-start gap-4 lg:items-end lg:pt-px">
                <a
                  href="mailto:info@atlantisfinancial.ca"
                  className="focus-ring border-gold/30 text-cream hover:border-gold hover:text-gold inline-flex items-center gap-2 border px-5 py-3 text-xs font-semibold tracking-[0.12em] uppercase transition-colors"
                >
                  Start a Conversation
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </RevealItem>
          </RevealStagger>

          {/* ── LOGO + TAGLINE ─────────────────────────────── */}
          <div className="border-gold/15 mt-14 grid grid-cols-1 items-end gap-6 border-t pt-8 sm:grid-cols-2 lg:mt-20">
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-3 self-start rounded-md"
              aria-label="Atlantis Financial Inc."
            >
              <Image
                src="/atlantis-logo.png"
                alt="Atlantis Financial Inc."
                width={1325}
                height={433}
                unoptimized
                className="block h-9 w-auto sm:h-10"
              />
            </Link>

            <div className="text-left sm:text-right">
              <p className="text-cream-dim font-serif text-sm italic">
                Scenario-Based Financial Planning · Barrie, Ontario · Virtual
                &amp; In-Person
              </p>
              <p className="text-cream-dim/50 mt-2 text-[11px]">
                © {new Date().getFullYear()} Atlantis Financial Inc.
              </p>
            </div>
          </div>

          {/* ── COMPLIANCE BAND (Aligned/CIRO/CIPF, required on every page) ── */}
          <div className="border-gold/15 mt-12 border-t pt-8">
            <div className="bg-cream text-navy-mid rounded-2xl px-5 py-6 sm:px-8 sm:py-7">
              {/* Logos with linked hyperlinks */}
              <div className="border-navy/10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 border-b pb-6 sm:justify-start">
                <a
                  href="https://www.alignedcapitalpartners.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aligned Capital Partners Inc."
                  className="focus-ring inline-flex transition-opacity hover:opacity-100"
                >
                  <Image
                    src="/images/compliance/aligned.png"
                    alt="Aligned Capital Partners Inc."
                    width={300}
                    height={80}
                    className="h-9 w-auto opacity-90 transition-opacity hover:opacity-100"
                  />
                </a>
                <div
                  aria-hidden="true"
                  className="bg-navy/15 hidden h-7 w-px sm:block"
                />
                <a
                  href="https://www.ciro.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Canadian Investment Regulatory Organization (CIRO)"
                  className="focus-ring inline-flex transition-opacity hover:opacity-100"
                >
                  <Image
                    src="/images/compliance/ciro.png"
                    alt="CIRO, Canadian Investment Regulatory Organization"
                    width={300}
                    height={80}
                    className="h-8 w-auto opacity-90 transition-opacity hover:opacity-100"
                  />
                </a>
                <div
                  aria-hidden="true"
                  className="bg-navy/15 hidden h-7 w-px sm:block"
                />
                <a
                  href="https://www.cipf.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Canadian Investor Protection Fund (CIPF)"
                  className="focus-ring inline-flex transition-opacity hover:opacity-100"
                >
                  <Image
                    src="/images/compliance/cipf.png"
                    alt="Canadian Investor Protection Fund"
                    width={300}
                    height={80}
                    className="h-8 w-auto opacity-90 transition-opacity hover:opacity-100"
                  />
                </a>
              </div>

              {/* Disclaimer text */}
              <p className="text-navy-mid/70 mt-6 text-[11.5px] leading-relaxed sm:text-xs">
                <ComplianceDisclaimer variant={variant} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
