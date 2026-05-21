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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
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

export default async function TeamProfilePage({
  params,
}: PageProps): Promise<ReactNode> {
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
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
              <div>
                <h2 className="border-border text-foreground border-b pb-3 font-serif text-2xl font-light">
                  Professional
                </h2>
                <div className="text-muted-foreground mt-7 space-y-5 text-base leading-relaxed sm:text-[1.05rem]">
                  {profile.professional.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {profile.personal && !profile.minimal && (
                  <>
                    <h2 className="border-border text-foreground mt-14 border-b pb-3 font-serif text-2xl font-light">
                      Personal
                    </h2>
                    <div className="text-muted-foreground mt-7 space-y-5 text-base leading-relaxed sm:text-[1.05rem]">
                      {profile.personal.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Sidebar, quote card */}
              <aside className="lg:sticky lg:top-32 lg:self-start">
                <div className="border-gold bg-muted/40 border-l-[3px] p-6 sm:p-8">
                  <p className="text-gold mb-4 text-[10px] font-medium tracking-[0.18em] uppercase">
                    In their own words
                  </p>
                  <p className="text-foreground font-serif text-lg leading-snug italic sm:text-xl">
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
            <section className="border-border bg-muted/40 relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
              <div className="mx-auto max-w-5xl">
                <div className="text-gold mb-12 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                  Spotlight Q&amp;A
                </div>
                <QACarousel items={profile.qa} />
              </div>
            </section>
          </Reveal>
        )}

        {/* ── CREDENTIALS ────────────────────────────────────── */}
        <Reveal>
          <section className="border-border relative border-b px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase">
                  Credentials & Registration
                </div>
                <ul className="space-y-3">
                  {profile.credentials.map((c) => (
                    <li
                      key={c}
                      className="border-border text-muted-foreground flex gap-3 border-b pb-3 text-sm leading-relaxed last:border-b-0 last:pb-0 sm:text-[0.95rem]"
                    >
                      <span
                        aria-hidden="true"
                        className="text-gold mt-1 shrink-0"
                      >
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
                  <div className="text-gold mb-6 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase">
                    Contact
                  </div>
                  <div className="text-muted-foreground space-y-3 text-sm leading-relaxed sm:text-[0.95rem]">
                    {profile.contact.email && (
                      <p>
                        <span className="text-gold/70 block text-[10px] tracking-[0.12em] uppercase">
                          Email
                        </span>
                        <a
                          href={`mailto:${profile.contact.email}`}
                          className="focus-ring text-foreground hover:text-gold transition-colors"
                        >
                          {profile.contact.email}
                        </a>
                      </p>
                    )}
                    {profile.contact.phone && (
                      <p>
                        <span className="text-gold/70 block text-[10px] tracking-[0.12em] uppercase">
                          Phone
                        </span>
                        <a
                          href={`tel:${profile.contact.phone.replace(/-/g, "")}`}
                          className="focus-ring text-foreground hover:text-gold transition-colors"
                        >
                          {profile.contact.phone}
                          {profile.contact.extension &&
                            ` ext. ${profile.contact.extension}`}
                        </a>
                      </p>
                    )}
                    <p>
                      <span className="text-gold/70 block text-[10px] tracking-[0.12em] uppercase">
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
          <section className="border-gold bg-muted/30 relative border-t-[3px] px-6 py-16 sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-foreground font-serif text-3xl leading-tight font-light tracking-tight sm:text-4xl">
                  Want to ask {member.name.split(" ")[0]}{" "}
                  <em className="text-gold font-light">a question?</em>
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.contact?.email ?? "info@atlantisfinancial.ca"}`}
                  className="focus-ring bg-gold text-navy-deep hover:bg-gold-light inline-flex items-center px-7 py-4 text-xs font-semibold tracking-[0.12em] uppercase transition-colors"
                >
                  Start a Conversation
                </a>
                <Link
                  href="/#team"
                  className="focus-ring border-border text-muted-foreground hover:border-gold hover:text-gold inline-flex items-center border px-7 py-4 text-xs font-medium tracking-[0.12em] uppercase transition-colors"
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
    <section className="border-border bg-navy-deep relative border-b">
      <div className="relative z-10 px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left, name + credentials + tagline */}
          <div>
            <Link
              href="/#team"
              className="focus-ring text-cream/50 hover:text-gold mb-7 inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase transition-colors"
            >
              <span aria-hidden="true">←</span> Back to the Team
            </Link>

            <div className="text-gold mb-4 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase">
              {profile.eyebrow}
            </div>
            <h1 className="text-cream font-serif text-5xl leading-[0.95] font-light tracking-tight sm:text-6xl lg:text-[5rem]">
              {member.name}
            </h1>
            {member.credentials && (
              <p className="text-gold mt-3 font-serif text-lg tracking-wide italic sm:text-xl">
                {member.credentials}
              </p>
            )}
            {profile.title && (
              <p className="text-silver mt-2 text-xs tracking-[0.12em] uppercase">
                {profile.title}
              </p>
            )}
          </div>

          {/* Right, photo */}
          {hasPhoto ? (
            <div className="border-gold/20 bg-muted relative h-72 w-56 overflow-hidden border shadow-2xl sm:h-80 sm:w-64">
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
            <div className="border-silver/30 bg-navy/60 flex h-72 w-56 items-center justify-center border sm:h-80 sm:w-64">
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
