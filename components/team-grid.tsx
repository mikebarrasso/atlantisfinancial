import { SectionCorners } from "@/components/section-corners";
import { teamByGroup, type TeamMember } from "@/lib/team-data";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function TeamCard({
  member,
  variant = "primary",
}: {
  member: TeamMember;
  variant?: "primary" | "consultant";
}): ReactNode {
  const isConsultant = variant === "consultant";
  // Mitchell has no photo yet, show initial placeholder
  const hasPhoto = member.slug !== "mitchell";

  return (
    <Link
      href={`/team/${member.slug}`}
      className="focus-ring group flex w-[130px] shrink-0 flex-col items-center gap-2.5 text-center transition-transform hover:-translate-y-1"
    >
      <div
        className={`relative h-[110px] w-[110px] overflow-hidden rounded-full bg-muted transition-colors ${
          isConsultant
            ? "border-2 border-silver/30 group-hover:border-silver-light"
            : "border-2 border-gold/20 group-hover:border-gold"
        }`}
      >
        {hasPhoto ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="110px"
            className="object-cover"
            style={{ filter: "grayscale(8%) brightness(1.02)" }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isConsultant ? "#B8C2D4" : "#C9A86C"}
              strokeWidth="1"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
        )}
      </div>
      <span className="text-[13px] font-medium text-foreground">
        {member.name}
      </span>
      <span
        className={`text-[10px] uppercase tracking-[0.07em] ${
          isConsultant ? "text-silver-light/80" : "text-gold/70"
        }`}
      >
        {member.role}
      </span>
    </Link>
  );
}

function TeamRow({
  label,
  members,
  variant = "primary",
}: {
  label: string;
  members: ReadonlyArray<TeamMember>;
  variant?: "primary" | "consultant";
}): ReactNode {
  return (
    <div>
      <div className="mb-5 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-silver/70">
        <span aria-hidden="true" className="inline-block h-px w-4 bg-silver/40" />
        {label}
      </div>
      <div className="flex flex-wrap gap-8">
        {members.map((m) => (
          <TeamCard key={m.slug} member={m} variant={variant} />
        ))}
      </div>
    </div>
  );
}

export function TeamGrid(): ReactNode {
  return (
    <section
      id="team"
      className="relative border-b border-border bg-muted/30"
    >
      <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="mb-12 max-w-2xl">
          <div className="mb-6 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            <span aria-hidden="true" className="inline-block h-px w-5 bg-gold" />
            The Team
          </div>
          <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            The people behind{" "}
            <em className="font-light text-gold">the process.</em>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            Click any team member to visit their full profile.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-14">
          <TeamRow label="Advisors" members={teamByGroup.advisors} />
          <TeamRow
            label="Client Services"
            members={teamByGroup["client-services"]}
          />
          <div>
            <TeamRow
              label="Specialist Partners"
              members={teamByGroup.specialists}
              variant="consultant"
            />
            <p className="mt-6 max-w-2xl border-l-2 border-silver/30 pl-4 text-sm italic leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              Mitchell is a specialist partner we bring in when your situation
              calls for specific expertise, tax, legal, estate, or corporate
              planning. When you work with Atlantis, you have access to his
              knowledge too.
            </p>
          </div>
        </div>

        <Link
          href="/team"
          className="focus-ring mt-12 inline-flex items-center gap-2 border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.1em] text-foreground transition-all hover:text-gold"
        >
          Meet the full team
          <span aria-hidden="true">→</span>
        </Link>
      </div>
      <SectionCorners />
    </section>
  );
}
