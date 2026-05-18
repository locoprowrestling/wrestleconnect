import { FeatureHighlight, HeroContent, SpotlightDetail, StatHighlight, TimelineEntry, TestimonialQuote, FinalCta } from "@/types/content";

export const promotionsHero: HeroContent = {
  badge: "For Promotions",
  title: "Organize rosters, cards, and talent relationships in one hub.",
  description:
    "WrestleConnect gives your promotion a verified presence with tools to manage events, highlight talent, and share recommendations that attract the right wrestlers.",
  primaryCta: {
    label: "Create Promotion Hub",
    href: "/onboarding/promotions",
    variant: "primary",
  },
  secondaryCta: {
    label: "Invite Your Roster",
    href: "/promotions",
    variant: "outline",
  },
};

export const promotionsStats: StatHighlight[] = [
  {
    id: "active-roster",
    value: "650+",
    label: "Active independent wrestlers connected to promotions.",
  },
  {
    id: "cards-built",
    value: "4.2K",
    label: "Match cards created with WrestleConnect scheduling tools.",
  },
  {
    id: "recommendations",
    value: "1,800",
    label: "Recommendations issued that help book trusted talent.",
  },
];

export const promotionsSpotlight: SpotlightDetail = {
  eyebrow: "Featured Promotion",
  name: "Crimson City Pro",
  subtitle: "Regional powerhouse · 52 events synced",
  tags: ["Roster Hub", "Verified", "Livestream Ready"],
  testimonial:
    "“Our roster, media, and upcoming cards stay organized and visible. WrestleConnect removes the manual chase when assembling a show.”",
  testimonialSource: "Owner · Alicia Rivera",
  upcoming: [
    {
      id: "next-card",
      label: "Next Card",
      title: "Fuel the Fire",
      meta: "Aug 3 · Riverfront Pavilion",
      description: "Main event ladder match · Tickets via SeatGeek.",
    },
    {
      id: "talent-need",
      label: "Talent Need",
      title: "Seeking Cruiserweights",
      description: "Looking for agile high-flyers for September tapings.",
    },
  ],
};

export const promotionsTimeline: TimelineEntry[] = [
  {
    id: "event-planning",
    date: "Step 1",
    title: "Plan",
    description: "Draft cards, set venues, and invite talent with roster tagging.",
  },
  {
    id: "event-night",
    date: "Step 2",
    title: "Promote",
    description: "Publish match graphics, embed video teasers, and boost on socials.",
  },
  {
    id: "post-show",
    date: "Step 3",
    title: "Recap",
    description: "Upload media, confirm results, and issue recommendations effortlessly.",
  },
];

export const promotionsFeatures: FeatureHighlight[] = [
  {
    id: "card-builder",
    title: "Match Card Builder",
    description: "Design complete show lineups, assign refs, and output printable running orders.",
  },
  {
    id: "media-room",
    title: "Media Room",
    description: "Store photos, video clips, and promo packages tied to each event.",
  },
  {
    id: "roster-management",
    title: "Roster Management",
    description: "Track availability, contracts, and history with each performer.",
  },
  {
    id: "recommendation-tools",
    title: "Recommendation Tools",
    description: "Issue and manage testimonials that help wrestlers book new promotions.",
  },
];

export const promotionsTestimonials: TestimonialQuote[] = [
  {
    id: "midwest",
    promotion: "Steel River Wrestling",
    quote:
      "“We replaced three spreadsheets with WrestleConnect. Cards build faster and our brand looks polished.”",
    role: "Operations Director",
  },
  {
    id: "coastline",
    promotion: "Coastline Championship",
    quote:
      "“The recommendation workflow keeps talent accountable and helps us hire with confidence.”",
    role: "General Manager",
  },
];

export const promotionsFinalCta: FinalCta = {
  badge: "Get Started",
  title: "Showcase your promotion with WrestleConnect",
  description:
    "Create your hub, invite roster members, and publish the story of your promotion in minutes.",
  bullets: [
    "Free tier includes roster hub, media gallery, and upcoming event listings.",
    "Verified badge available after identity confirmation by platform admins.",
    "Premium analytics coming soon for attendance, merch, and engagement insights.",
  ],
  primaryCta: {
    label: "Launch Promotion Hub",
    href: "/onboarding/promotions",
  },
  secondaryCta: {
    label: "Request Demo",
    href: "/contact",
    variant: "outline",
  },
};
