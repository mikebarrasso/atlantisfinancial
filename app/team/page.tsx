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
  const snippet = member.profile?.professional[0]
    ?.split(". ")
    .slice(0, 2)
    .join(". ");

  return (
    <Link
      href={`/team/${member.slug}`}
      className="focus-ring group border-border bg-background hover:border-gold hover:bg-gold/[0.02] flex gap-6 border p-5 transition-all sm:p-6"
    >
      <div className="border-gold/20 bg-muted group-hover:border-gold relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 transition-colors sm:h-28 sm:w-28">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 96px, 112px"
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-foreground font-serif text-xl leading-tight font-light tracking-tight">
          {member.name}
        </h3>
        <p className="text-gold mt-1 text-[10px] tracking-[0.1em] uppercase">
          {member.role}
        </p>
        {snippet && (
          <p className="text-muted-foreground mt-3 line-clamp-2 text-sm leading-relaxed">
            {snippet}.
          </p>
        )}
        <span className="text-gold mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-transform group-hover:translate-x-1">
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
        <section className="border-border relative border-b">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
            <div className="lg:border-border flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:border-r lg:px-14 lg:py-24">
              <div className="enter text-gold mb-7 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                The Team
              </div>
              <h1 className="enter text-foreground font-serif text-5xl leading-[0.95] font-light tracking-tight sm:text-6xl lg:text-[5rem]">
                The people behind{" "}
                <em className="text-gold font-light">the process.</em>
              </h1>
              <p className="enter text-muted-foreground mt-7 max-w-xl font-serif text-lg leading-snug italic sm:text-xl">
                Atlantis Financial is a small firm. Every client knows every
                person who works on their file, by name, by role, by what they
                actually do for you.
              </p>
            </div>
            <div className="bg-muted relative min-h-80 overflow-hidden lg:min-h-160">
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
          <section className="border-border bg-muted/30 relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                How We Work Together
              </div>
              <h2 className="text-foreground font-serif text-3xl leading-[1.15] font-light tracking-tight sm:text-4xl lg:text-[2.6rem]">
                A small firm by design.
              </h2>
              <div className="text-muted-foreground mt-7 space-y-5 text-base leading-relaxed sm:text-[1.05rem]">
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
                  When you call, you get someone who knows your file. When you
                  book a meeting, you meet with the advisor who built your plan,
                  not a junior associate three rotations removed from the
                  original conversation. This isn&apos;t because we&apos;re
                  old-fashioned. It&apos;s because we don&apos;t know how else
                  to do the work well.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── ADVISORS ──────────────────────────────────────── */}
        <Reveal>
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="text-gold mb-3 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Advisors
              </div>
              <h2 className="text-foreground font-serif text-3xl font-light tracking-tight sm:text-4xl">
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
          <section className="border-border bg-muted/30 relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="text-gold mb-3 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                Client Services
              </div>
              <h2 className="text-foreground font-serif text-3xl font-light tracking-tight sm:text-4xl">
                The people who keep things on track.
              </h2>
              <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed">
                Most planning is between meetings. Client services is the steady
                cadence of follow-up, paperwork, scheduling, and quiet attention
                to detail that turns a plan into a relationship that actually
                holds together over years.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {teamByGroup["client-services"].map((m) => (
                  <MemberCard key={m.slug} member={m} />
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── CTA ──────────────────────────────────────────── */}
        <Reveal>
          <section className="border-gold bg-muted/30 relative border-t-[3px] px-6 py-16 sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-foreground font-serif text-3xl leading-tight font-light tracking-tight sm:text-4xl">
                  Want to meet{" "}
                  <em className="text-gold font-light">the team?</em>
                </h2>
                <p className="text-muted-foreground mt-2 font-serif text-sm italic">
                  The first conversation is with Allan. Everything else starts
                  from there.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@atlantisfinancial.ca"
                  className="focus-ring bg-gold text-navy-deep hover:bg-gold-light inline-flex items-center px-7 py-4 text-xs font-semibold tracking-[0.12em] uppercase transition-colors"
                >
                  Start a Conversation
                </a>
                <Link
                  href="/"
                  className="focus-ring border-border text-muted-foreground hover:border-gold hover:text-gold inline-flex items-center border px-7 py-4 text-xs font-medium tracking-[0.12em] uppercase transition-colors"
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
