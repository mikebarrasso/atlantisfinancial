import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import { createMetadata } from "@/lib/metadata";
import { teamByGroup, type TeamMember } from "@/lib/team-data";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Our Team",
  description:
    "The people behind Atlantis Financial, advisors, client services, and specialist partners working together on scenario-based financial planning for Canadians.",
  path: "/team",
});

function MemberCard({ member }: { member: TeamMember }): ReactNode {
  const hasPhoto = member.slug !== "mitchell";
  const snippet = member.profile?.professional[0]?.split(". ").slice(0, 2).join(". ");

  return (
    <Link
      href={`/team/${member.slug}`}
      className="focus-ring group flex gap-6 border border-border bg-background p-5 transition-all hover:border-gold hover:bg-gold/[0.02] sm:p-6"
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-gold/20 bg-muted transition-colors group-hover:border-gold sm:h-28 sm:w-28">
        {hasPhoto ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 96px, 112px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B8C2D4"
              strokeWidth="1"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-serif text-xl font-light leading-tight tracking-tight text-foreground">
          {member.name}
        </h3>
        <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-gold">
          {member.role}
        </p>
        {snippet && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {snippet}.
          </p>
        )}
        <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-gold transition-transform group-hover:translate-x-1">
          Read full profile <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

export default function TeamIndexPage(): ReactNode {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:border-r lg:border-border lg:px-14 lg:py-24">
              <div className="enter mb-7 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
                The Team
              </div>
              <h1 className="enter font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-[5rem]">
                The people behind{" "}
                <em className="font-light text-gold">the process.</em>
              </h1>
              <p className="enter mt-7 max-w-xl font-serif text-lg italic leading-snug text-muted-foreground sm:text-xl">
                Atlantis Financial is a small firm. Every client knows every
                person who works on their file, by name, by role, by what
                they actually do for you.
              </p>
            </div>
            <div className="relative min-h-80 overflow-hidden bg-muted lg:min-h-160">
              <Image
                src="/images/team-photos/team-studio.jpg"
                alt="The Atlantis Financial team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
          <SectionCorners />
        </section>

        {/* ── HOW WE WORK ───────────────────────────────────── */}
        <Reveal>
          <section className="relative border-b border-border bg-muted/30 px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
                How We Work Together
              </div>
              <h2 className="font-serif text-3xl font-light leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
                A small firm by design.
              </h2>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                <p>
                  We are seven people. We could be more. We choose not to be.
                  Every client engagement touches every team member at some
                  point, the advisor who builds the scenarios, the client
                  services team who keeps the cadence steady, the specialist
                  partner we bring in when a corporate structure or estate
                  question needs deeper expertise than any one advisor can
                  honestly claim.
                </p>
                <p>
                  When you call, you get someone who knows your file. When
                  you book a meeting, you meet with the advisor who built
                  your plan, not a junior associate three rotations removed
                  from the original conversation. This isn&apos;t because
                  we&apos;re old-fashioned. It&apos;s because we don&apos;t
                  know how else to do the work well.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── ADVISORS ──────────────────────────────────────── */}
        <Reveal>
          <section className="relative border-b border-border px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="mb-3 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
                Advisors
              </div>
              <h2 className="font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                The people who build your plan.
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {teamByGroup.advisors.map((m) => (
                  <MemberCard key={m.slug} member={m} />
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── CLIENT SERVICES ───────────────────────────────── */}
        <Reveal>
          <section className="relative border-b border-border bg-muted/30 px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="mb-3 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
                Client Services
              </div>
              <h2 className="font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                The people who keep things on track.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Most planning is between meetings. Client services is the
                steady cadence of follow-up, paperwork, scheduling, and
                quiet attention to detail that turns a plan into a
                relationship that actually holds together over years.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {teamByGroup["client-services"].map((m) => (
                  <MemberCard key={m.slug} member={m} />
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── SPECIALIST PARTNERS ───────────────────────────── */}
        <Reveal>
          <section className="relative border-b border-border px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="mb-3 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-silver-light">
                <span
                  aria-hidden="true"
                  className="inline-block h-px w-5 bg-silver-light/50"
                />
                Specialist Partners
              </div>
              <h2 className="font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                The people we bring in when your situation needs them.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Some questions, corporate structure, complex estate
                planning, intergenerational transfers, advanced
                insurance-based strategies, call for a level of specialist
                expertise that no single advisor can credibly hold. When
                they come up, we bring in partners who&apos;ve spent a
                career on that one thing.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {teamByGroup.specialists.map((m) => (
                  <MemberCard key={m.slug} member={m} />
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── CTA ──────────────────────────────────────────── */}
        <Reveal>
          <section className="relative border-t-[3px] border-gold bg-muted/30 px-6 py-16 sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
                  Want to meet{" "}
                  <em className="font-light text-gold">the team?</em>
                </h2>
                <p className="mt-2 font-serif text-sm italic text-muted-foreground">
                  The first conversation is with Allan. Everything else
                  starts from there.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@atlantisfinancial.ca"
                  className="focus-ring inline-flex items-center bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-navy-deep transition-colors hover:bg-gold-light"
                >
                  Start a Conversation
                </a>
                <Link
                  href="/"
                  className="focus-ring inline-flex items-center border border-border px-7 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
