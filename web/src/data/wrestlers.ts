import {
  FeatureHighlight,
  FinalCta,
  HeroContent,
  SpotlightDetail,
  StatHighlight,
  TestimonialQuote,
  TimelineEntry,
} from "@/types/content";

export const wrestlerHero: HeroContent = {
  badge: "For Independent Wrestlers",
  title: "Own your booking story and get verified references that travel with you.",
  description:
    "WrestleConnect is your digital presence, combining media, event history, and promotion testimonials so you can step into any locker room with confidence.",
  primaryCta: {
    label: "Create Your Profile",
    href: "/onboarding/wrestlers",
  },
  secondaryCta: {
    label: "Preview Demo Profile",
    href: "#profile-showcase",
    variant: "outline",
  },
};

export const wrestlerStats: StatHighlight[] = [
  {
    id: "recommendations",
    value: "120+",
    label: "Promotion recommendations issued last quarter.",
  },
  {
    id: "events-synced",
    value: "2,400",
    label: "Events synced automatically from promotion cards.",
  },
  {
    id: "response-time",
    value: "3 hrs",
    label: "Median promotion response time after booking requests.",
  },
];

export const wrestlerSpotlight: SpotlightDetail = {
  eyebrow: "Spotlight · Alumni Verified",
  name: "“Thunder Lynx” Rivera",
  subtitle: "Hybrid striker · 6 years experience",
  tags: ["Verified", "Fan Favorite", "Technical"],
  testimonial:
    "“Professional from day one. Brings the crowd to life and keeps communication clear backstage.”",
  testimonialSource: "Coastline Championship · Rated 4.9 / 5",
  upcoming: [
    {
      id: "upcoming",
      label: "Upcoming",
      title: "Summer Slamfest",
      meta: "Jun 22 · Highline Arena · New Jersey",
      description: "Main event championship bout announced.",
    },
    {
      id: "availability",
      label: "Availability",
      title: "Open July 12–14 · Northeast tour",
      description: "Available for double shots within 150 miles.",
    },
  ],
};

export const wrestlerTimeline: TimelineEntry[] = [
  {
    id: "fury-road-6",
    date: "May 4, 2024",
    title: "Fury Road 6",
    subtitle: "Crimson City Pro",
    description: "Main event triple-threat · Match of the Night.",
  },
  {
    id: "breakthrough",
    date: "Apr 12, 2024",
    title: "Breakthrough",
    subtitle: "Steel River Wrestling",
    description: "Title defense streamed to 1.2K live viewers.",
  },
  {
    id: "rising-tide",
    date: "Mar 30, 2024",
    title: "Rising Tide",
    subtitle: "Coastline Championship",
    description: "Tag team showcase · Featured on IWTV.",
  },
];

export const wrestlerTestimonials: TestimonialQuote[] = [
  {
    id: "crimson-city-pro",
    promotion: "Crimson City Pro",
    quote:
      "“WrestleConnect makes it simple to verify who we’ve booked and highlight talent worth bringing back.”",
    role: "Head Booker · 52 events synced",
  },
  {
    id: "steel-river",
    promotion: "Steel River Wrestling",
    quote:
      "“Profiles give us the footage, availability, and references we need in one place.”",
    role: "Operations Director · 38 events synced",
  },
  {
    id: "coastline",
    promotion: "Coastline Championship",
    quote:
      "“Recommendations build trust fast. Our talent knows they’re walking into professional locker rooms.”",
    role: "General Manager · 44 events synced",
  },
];

export const wrestlerFeatures: FeatureHighlight[] = [
  {
    id: "media",
    title: "Media Hub",
    description:
      "Upload high-res photography, embed YouTube or Vimeo matches, and curate your highlight reel.",
  },
  {
    id: "availability",
    title: "Availability Planner",
    description:
      "Show when you’re open for bookings with calendar syncs and custom travel notes.",
  },
  {
    id: "brand-kit",
    title: "Brand Kit",
    description:
      "Share entrance music, gear colors, and press-ready bios for quick promotion marketing.",
  },
  {
    id: "metrics",
    title: "Metrics & Insights",
    description:
      "Track profile views, recommendation trends, and event exposure with pro analytics (coming soon).",
  },
];

export const wrestlerFinalCta: FinalCta = {
  badge: "Get Started",
  title: "Ready to stand out to every independent promotion?",
  description:
    "Create your WrestleConnect profile in minutes. Upload media, request recommendations, and keep your event history verified.",
  bullets: [
    "Free core profile with media uploads and basic analytics.",
    "Verified badge once a promotion confirms your booking.",
    "Optional premium add-ons for advanced insights.",
  ],
  primaryCta: {
    label: "Claim Your Profile",
    href: "/auth/register?role=wrestler",
    variant: "primary",
  },
  secondaryCta: {
    label: "Talk With Our Team",
    href: "/contact",
    variant: "outline",
  },
};
