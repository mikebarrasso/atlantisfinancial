/**
 * Team data, single source of truth for the homepage team grid AND
 * the `/team/[slug]` profile routes.
 *
 * Each member has two shapes of content:
 *   • Card data, name/role/photo for the homepage grid (always populated)
 *   • Profile data, bio, quote, Q&A, credentials (populated for everyone
 *     except Mitchell, who as a specialist partner uses a stripped variant)
 */

export type TeamGroup = "advisors" | "client-services" | "specialists";

export type QA = {
  q: string;
  a: string;
};

export type ContactInfo = {
  email?: string;
  phone?: string;
  extension?: string;
};

export type TeamProfile = {
  /** "Senior Advisor & Founder", "Office Manager · Client Services", etc. */
  eyebrow: string;
  /** Optional headline credential line directly under the name */
  title?: string;
  /** Signature pull-quote shown in the profile hero */
  quote: string;
  /** Professional bio paragraphs */
  professional: ReadonlyArray<string>;
  /** Personal bio paragraphs (omitted for specialist partners) */
  personal?: ReadonlyArray<string>;
  /** 3–5 Q&A items for the carousel */
  qa: ReadonlyArray<QA>;
  /** Credential lines shown in the credentials block */
  credentials: ReadonlyArray<string>;
  /** Contact information for the CTA block */
  contact?: ContactInfo;
  /** Hide the Q&A carousel + personal bio (used for specialist partners) */
  minimal?: boolean;
};

export type TeamMember = {
  slug: string;
  name: string;
  /** Short role label shown on the homepage team card */
  role: string;
  /** Comma-separated credentials shown under name in profile hero (e.g. "CFP · CIM · RWM") */
  credentials?: string;
  photo: string;
  group: TeamGroup;
  /** Full profile data, present for everyone with a profile page */
  profile?: TeamProfile;
};

export const teamMembers: ReadonlyArray<TeamMember> = [
  // ──────────────────────────────────────────────────────────────────────
  // ADVISORS
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "simon",
    name: "Simon Ffrench",
    role: "CFP · Co-Founder",
    credentials: "CFP",
    photo: "/images/team/simon.jpg",
    group: "advisors",
    profile: {
      eyebrow: "Advisor & Co-Founder",
      title: "Certified Financial Planner",
      quote:
        "I came to this work by way of agriculture. Both taught me to plan for weather you can't predict.",
      professional: [
        "Simon co-founded Atlantis Financial in 2000 after a decade with Sun Life. He works with accredited clients, family businesses, and farm operations across central Ontario, people whose wealth is tied up in assets that don't trade on an exchange. His specialty is integrating business and personal balance sheets into a single plan that survives the messy years.",
      ],
      personal: [
        "Simon and his wife Caroline live on 24 acres in Egbert, Ontario, where they run an organic farm. He's a competitive road cyclist, the 300-kilometre Highway-to-Heaven ride is an annual ritual, and a serious gardener.",
      ],
      qa: [
        {
          q: "Best client moment?",
          a: "A client won a large lottery and I was the first person they called.",
        },
        {
          q: "What do farmers know about money that office workers don't?",
          a: "That nothing is ever finished. The work continues. The plan keeps adjusting. You don't retire from a farm, you transition it.",
        },
        {
          q: "Why scenarios over plans?",
          a: "Because the weather changes. You don't plan for one forecast, you build something that holds up across several.",
        },
      ],
      credentials: [
        "Certified Financial Planner (CFP)",
        "Registered Representative, Aligned Capital Partners",
        "Insurance Advisor, Province of Ontario",
      ],
      contact: {
        email: "simon@atlantisfinancial.ca",
      },
    },
  },
  {
    slug: "allan",
    name: "Allan Norman",
    role: "CFP · CIM · RWM",
    credentials: "CFP · CIM · RWM",
    photo: "/images/team/allan.jpg",
    group: "advisors",
    profile: {
      eyebrow: "Senior Advisor & Founder",
      title:
        "Certified Financial Planner · Chartered Investment Manager · Responsible Wealth Manager",
      quote:
        "Most plans answer the wrong question. I want to help you ask the right one, and see clearly what's possible before you decide.",
      professional: [
        "Allan founded Atlantis Financial Inc. to do one thing differently: explore the possibilities with clients live, in real time, until the picture becomes clear. He pioneered the use of scenario-based financial planning in Canada, drawing on decades of fee-only advisory experience and the sales-and-planning frameworks of Scenario Selling by Sullivan & Lazenby, and has built his practice around the kinds of clients other advisors find too complex: business owners, professionals, retirees with multiple income sources, and couples with genuinely asymmetric planning needs.",
        "His columns on retirement, decumulation, pension timing, and corporate retained earnings appear regularly in MoneySense, the Financial Post, Yahoo Finance Canada, Maclean's, Canadian Business, and the Postmedia papers across Canada. He has been quoted in the Globe and Mail's Client Approved feature.",
      ],
      personal: [
        "Allan lives in Barrie, Ontario, with his family. When he's not at his desk modeling scenarios, he's most likely on his bike, he's a serious road cyclist who can put together a 200-kilometre day without much fuss. He believes plainspoken honesty beats clever marketing, and that the financial planning industry has spent too long making things sound more complicated than they need to be.",
      ],
      qa: [
        {
          q: "What's the question you wish more clients asked first?",
          a: "Not 'how much do I need', but 'what is the money actually for?' Once you can answer that, the rest gets simpler.",
        },
        {
          q: "What planning move helps clients most that nobody talks about?",
          a: "Strategic RRSP drawdowns before age 71. It's not exciting and it's not new, but for the right client it can save six figures over a retirement.",
        },
        {
          q: "What kind of client do you genuinely look forward to a meeting with?",
          a: "Someone who shows up curious. Who wants to look at the numbers with me, not be handed a binder.",
        },
        {
          q: "If you weren't a financial planner, what would you be doing?",
          a: "Cycling more, probably. Or running a bookstore where everything was non-fiction.",
        },
        {
          q: "One thing about financial planning you wish more people understood?",
          a: "That the right answer almost always depends on more than one variable. Anyone who hands you a simple answer to a complex question is selling you something.",
        },
      ],
      credentials: [
        "Certified Financial Planner (CFP)",
        "Chartered Investment Manager (CIM)",
        "Responsible Wealth Manager (RWM)",
        "Financial Planning Association of Canada, Member",
        "Registered Representative, Aligned Capital Partners Inc. (CIRO member firm)",
        "Insurance Advisor, Province of Ontario",
      ],
      contact: {
        email: "allan@atlantisfinancial.ca",
      },
    },
  },
  {
    slug: "cat",
    name: "Catriona Ffrench",
    role: "Associate Advisor",
    credentials: "CFP candidate · Insurance Advisor",
    photo: "/images/team/cat.jpg",
    group: "advisors",
    profile: {
      eyebrow: "Associate Advisor & Insurance Advisor",
      title: "CFP candidate · Licensed Insurance Advisor",
      quote:
        "I care about making things better, simpler, and more meaningful.",
      professional: [
        "Catriona joined the practice as an Associate Advisor and holds her Insurance Advisor license. She works with individuals, families, and business owners across the full picture, income, investments, insurance, and the transitions of retirement and family wealth. She is currently completing her Certified Financial Planner designation.",
      ],
      personal: [
        "Cat is a mother of two and a former classical singer and flutist. She gardens, cooks, runs, and reads broadly, fiction, history, philosophy. She believes that the quality of a financial conversation is set by the quality of attention people bring to it.",
      ],
      qa: [
        {
          q: "What pulled you into this work?",
          a: "I wanted a profession where the conversations were honest, useful, and the stakes were real.",
        },
        {
          q: "What's the most underrated planning move?",
          a: "Naming the people who matter and the things you want for them, out loud, on paper. Plans are easier when the people are visible.",
        },
        {
          q: "One thing you do for your own clarity?",
          a: "I sing. Even now. It re-tunes everything else.",
        },
      ],
      credentials: [
        "CFP candidate, in progress",
        "Licensed Insurance Advisor, Province of Ontario",
        "Associate Investment Advisor, Aligned Capital Partners",
      ],
      contact: {
        email: "cat@atlantisfinancial.ca",
      },
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // CLIENT SERVICES
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "donna",
    name: "Donna Girdler",
    role: "Office Manager",
    photo: "/images/team/donna.jpg",
    group: "client-services",
    profile: {
      eyebrow: "Office Manager · Client Services",
      title: "Since 2003 · 35+ years of client service",
      quote:
        "In 100 years, no one will care about most of what we worry about today. The work is to figure out the things that will still matter.",
      professional: [
        "Donna has been with Atlantis Financial since 2003. With 35+ years in administrative and client-service roles, she's the person who keeps the practice running on time and on top of every detail. When a client calls in, she's usually who they speak to first.",
      ],
      personal: [
        "Donna is well-travelled, philosophical, and a deep believer in the long view. She is currently planning her next trip, a multi-month one, probably.",
      ],
      qa: [
        {
          q: "What's changed most in 35 years of client service?",
          a: "People used to dread calling their advisor. Now they look forward to it. That's the goal.",
        },
        {
          q: "One thing you wish clients knew about us?",
          a: "We're paying attention. Even when you don't hear from us, we're tracking the things that matter to you.",
        },
        {
          q: "Best part of the job?",
          a: "Watching plans become lives.",
        },
      ],
      credentials: [
        "35+ years in administrative and client-service roles",
        "Office Manager, Atlantis Financial, Since 2003",
      ],
      contact: {
        phone: "705-726-6884",
        extension: "0",
      },
    },
  },
  {
    slug: "angela",
    name: "Angela Gale",
    role: "Strategic Assistant",
    photo: "/images/team/angela.jpg",
    group: "client-services",
    profile: {
      eyebrow: "Strategic Assistant · Client Services",
      title: "Since 2019 · 30+ years of client service",
      quote:
        "Show up. Pay attention. Don't make people chase you. That's most of the job.",
      professional: [
        "Angela joined the practice in 2019 and brings 30+ years of client-service experience. She is the operational backbone of the team, calendar, follow-ups, the steady cadence of contact that clients come to rely on.",
      ],
      personal: [
        "Angela is a lifelong Barrie local and a Mötley Crüe superfan, yes, she has seen them more than once, yes, she will tell you about it. She is dependable, direct, and the person you want to call when something needs to actually happen.",
      ],
      qa: [
        {
          q: "What's the thing nobody appreciates about client services?",
          a: "Punctuality. Returning a call same-day. It's small. It builds everything.",
        },
        {
          q: "Mötley Crüe, how many times now?",
          a: "I've lost count. Enough that I have a system.",
        },
        {
          q: "Best part of working here?",
          a: "Watching people stop being afraid of their money.",
        },
      ],
      credentials: [
        "30+ years in client service",
        "Strategic Assistant, Atlantis Financial, Since 2019",
      ],
      contact: {
        phone: "705-726-6884",
        extension: "225",
      },
    },
  },
  {
    slug: "erin",
    name: "Erin Parker",
    role: "Administrative Assistant",
    photo: "/images/team/erin.jpg",
    group: "client-services",
    profile: {
      eyebrow: "Administrative Assistant · Client Services",
      title: "10+ years of administrative experience",
      quote:
        "What you do makes a difference. And you have to decide what kind of difference you want to make., Jane Goodall",
      professional: [
        "Erin brings 10+ years of administrative experience to the team. She handles the day-to-day rhythm of the office, scheduling, document flow, the quiet work that keeps everything else moving.",
      ],
      personal: [
        "Erin is mother to twin boys. She is an avid hiker and a jujitsu practitioner. She'll cheerfully tell you she is afraid of snakes, which is also, on reflection, a perfectly reasonable position.",
      ],
      qa: [
        {
          q: "Favourite recent hike?",
          a: "Anything with a view at the end.",
        },
        {
          q: "What does jujitsu teach you that translates?",
          a: "Stay calm under pressure. Most problems don't need force, they need patience.",
        },
        {
          q: "Most important thing you've learned here?",
          a: "That financial planning, at its best, is really just helping people make decisions they can live with.",
        },
      ],
      credentials: [
        "10+ years in administrative roles",
        "Administrative Assistant, Atlantis Financial",
      ],
      contact: {
        phone: "705-726-6884",
        extension: "222",
      },
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // SPECIALIST PARTNERS (external)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "mitchell",
    name: "Mitchell Shields",
    role: "CFP · CLU · TEP",
    credentials: "CFP · CLU · TEP",
    photo: "/images/team/mitchell.jpg", // placeholder, Alan to send
    group: "specialists",
    profile: {
      minimal: true,
      eyebrow: "Specialist Partner, External",
      title:
        "CFP · CLU · TEP, Still Water Financial Partners · Huntsville, ON",
      quote:
        "Tax, estate, and corporate structure questions don't always need new strategies, they often need a fresh look at the existing ones.",
      professional: [
        "Mitchell is a Certified Financial Planner, Chartered Life Underwriter, and Trust & Estate Practitioner with a focus on corporate structure, business succession, and multi-generational estate planning for Ontario business owners and high-net-worth families.",
        "Atlantis works with Mitchell on engagements that require deep specialist expertise, corporate restructuring, inter-generational estate transfers, family business succession, and complex insurance-based estate planning. He works alongside Atlantis on those engagements; he is not a direct employee of the firm.",
      ],
      qa: [],
      credentials: [
        "Certified Financial Planner (CFP)",
        "Chartered Life Underwriter (CLU)",
        "Trust & Estate Practitioner (TEP)",
        "Still Water Financial Partners · Huntsville, Ontario",
      ],
    },
  },
];

export const teamByGroup = {
  advisors: teamMembers.filter((m) => m.group === "advisors"),
  "client-services": teamMembers.filter((m) => m.group === "client-services"),
  specialists: teamMembers.filter((m) => m.group === "specialists"),
} as const;

export function findMember(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
