import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { QACarousel } from "@/components/qa-carousel";
import { Reveal } from "@/components/reveal";
import { SectionCorners } from "@/components/section-corners";
import { createMetadata } from "@/lib/metadata";
import { findMember, teamMembers, type TeamMember } from "@/lib/team-data";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = findMember(slug);
  if (!member) return createMetadata({ title: "Team", path: "/team" });

  const description = member.profile?.professional[0]?.slice(0, 155) ?? "";
  return createMetadata({
    title: `${member.name}${member.credentials ? ", " + member.credentials : ""}`,
    description,
    path: `/team/${member.slug}`,
  });
}

export default async function TeamProfilePage({ params }: PageProps): Promise<ReactNode> {
  const { slug } = await params;
  const member = findMember(slug);
  if (!member || !member.profile) notFound();

  const { profile } = member;
  const hasPhoto = member.slug !== "mitchell";

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* ── HERO ──────────────────────────────────────────── */}
        <ProfileHero member={member} hasPhoto={hasPhoto} />

        {/* ── BIO ────────────────────────────────────────────── */}
        <Reveal>
          <section className="relative border-b border-border px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
              <div>
                <h2 className="border-b border-border pb-3 font-serif text-2xl font-light text-foreground">
                  Professional
                </h2>
                <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                  {profile.professional.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {profile.personal && !profile.minimal && (
                  <>
                    <h2 className="mt-14 border-b border-border pb-3 font-serif text-2xl font-light text-foreground">
                      Personal
                    </h2>
                    <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                      {profile.personal.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Sidebar, quote card */}
              <aside className="lg:sticky lg:top-32 lg:self-start">
                <div className="border-l-[3px] border-gold bg-muted/40 p-6 sm:p-8">
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                    In their own words
                  </p>
                  <p className="font-serif text-lg italic leading-snug text-foreground sm:text-xl">
                    &ldquo;{profile.quote}&rdquo;
                  </p>
                </div>
              </aside>
            </div>
          </section>
        </Reveal>

        {/* ── Q&A CAROUSEL (skip for minimal/specialist profiles) ─ */}
        {!profile.minimal && profile.qa.length > 0 && (
          <Reveal>
            <section className="relative border-b border-border bg-muted/40 px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
              <div className="mx-auto max-w-5xl">
                <div className="mb-12 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                  <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
                  Spotlight Q&amp;A
                </div>
                <QACarousel items={profile.qa} />
              </div>
            </section>
          </Reveal>
        )}

        {/* ── CREDENTIALS ────────────────────────────────────── */}
        <Reveal>
          <section className="relative border-b border-border px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                  <span aria-hidden="true" className="inline-block h-px w-4 bg-gold" />
                  Credentials & Registration
                </div>
                <ul className="space-y-3">
                  {profile.credentials.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 border-b border-border pb-3 text-sm leading-relaxed text-muted-foreground last:border-b-0 last:pb-0 sm:text-[0.95rem]"
                    >
                      <span aria-hidden="true" className="mt-1 shrink-0 text-gold">
                        ·
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              {profile.contact && (
                <div>
                  <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                    <span aria-hidden="true" className="inline-block h-px w-4 bg-gold" />
                    Contact
                  </div>
                  <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                    {profile.contact.email && (
                      <p>
                        <span className="block text-[10px] uppercase tracking-[0.12em] text-gold/70">
                          Email
                        </span>
                        <a
                          href={`mailto:${profile.contact.email}`}
                          className="focus-ring text-foreground transition-colors hover:text-gold"
                        >
                          {profile.contact.email}
                        </a>
                      </p>
                    )}
                    {profile.contact.phone && (
                      <p>
                        <span className="block text-[10px] uppercase tracking-[0.12em] text-gold/70">
                          Phone
                        </span>
                        <a
                          href={`tel:${profile.contact.phone.replace(/-/g, "")}`}
                          className="focus-ring text-foreground transition-colors hover:text-gold"
                        >
                          {profile.contact.phone}
                          {profile.contact.extension &&
                            ` ext. ${profile.contact.extension}`}
                        </a>
                      </p>
                    )}
                    <p>
                      <span className="block text-[10px] uppercase tracking-[0.12em] text-gold/70">
                        Location
                      </span>
                      <span className="text-foreground">
                        Atlantis Financial Inc. · Barrie, Ontario
                        <br />
                        Virtual &amp; In-Person
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </Reveal>

        {/* ── CTA ────────────────────────────────────────────── */}
        <Reveal>
          <section className="relative border-t-[3px] border-gold bg-muted/30 px-6 py-16 sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
                  Want to ask {member.name.split(" ")[0]}{" "}
                  <em className="font-light text-gold">a question?</em>
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.contact?.email ?? "info@atlantisfinancial.ca"}`}
                  className="focus-ring inline-flex items-center bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-navy-deep transition-colors hover:bg-gold-light"
                >
                  Start a Conversation
                </a>
                <Link
                  href="/#team"
                  className="focus-ring inline-flex items-center border border-border px-7 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  ← Back to the Team
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

function ProfileHero({
  member,
  hasPhoto,
}: {
  member: TeamMember;
  hasPhoto: boolean;
}): ReactNode {
  const { profile } = member;
  if (!profile) return null;

  return (
    <section className="relative border-b border-border bg-navy-deep">
      <div className="relative z-10 px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left, name + credentials + tagline */}
          <div>
            <Link
              href="/#team"
              className="focus-ring mb-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-cream/50 transition-colors hover:text-gold"
            >
              <span aria-hidden="true">←</span> Back to the Team
            </Link>

            <div className="mb-4 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
              <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
              {profile.eyebrow}
            </div>
            <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-[5rem]">
              {member.name}
            </h1>
            {member.credentials && (
              <p className="mt-3 font-serif text-lg italic tracking-wide text-gold sm:text-xl">
                {member.credentials}
              </p>
            )}
            {profile.title && (
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-silver">
                {profile.title}
              </p>
            )}
          </div>

          {/* Right, photo */}
          {hasPhoto ? (
            <div className="relative h-72 w-56 overflow-hidden border border-gold/20 bg-muted shadow-2xl sm:h-80 sm:w-64">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 224px, 256px"
                priority
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex h-72 w-56 items-center justify-center border border-silver/30 bg-navy/60 sm:h-80 sm:w-64">
              <svg
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B8C2D4"
                strokeWidth="0.8"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M3 21c0-5 3.6-8.5 9-8.5s9 3.5 9 8.5" />
              </svg>
            </div>
          )}
        </div>
      </div>
      <SectionCorners />
    </section>
  );
}
