import { FeatureHighlight, HeroContent, SpotlightDetail } from "@/types/content";

export const homeHero: HeroContent = {
  badge: "Trusted Bookings",
  title: "The home base for independent wrestling talent, promotions, and schools.",
  description:
    "WrestleConnect brings verified profiles, past match history, and upcoming opportunities together so you can book confidently and grow your career.",
  primaryCta: {
    label: "Explore Wrestlers",
    href: "/wrestlers",
    variant: "primary",
  },
  secondaryCta: {
    label: "List Your Promotion",
    href: "/promotions",
    variant: "outline",
  },
};

export const homeSpotlight: SpotlightDetail = {
  eyebrow: "Spotlight · Alumni Verified",
  name: "“Thunder Lynx” Rivera",
  subtitle: "Hybrid striker · 6 years experience",
  tags: ["Punctual", "Crowd Favorite", "Technical"],
  testimonial:
    "“Lynx brought championship energy to Crimson City Pro. We booked them in two main events and the locker room chemistry was electric.”",
  testimonialSource: "Crimson City Pro · Rated 4.9 / 5",
  upcoming: [
    {
      id: "summer-slamfest",
      label: "Upcoming",
      title: "Summer Slamfest",
      meta: "Jun 22 · Highline Arena · New Jersey",
      description: "Main event championship bout announced.",
    },
    {
      id: "open-availability",
      label: "Availability",
      title: "Open July 12–14 · Northeast tour",
      description: "Available for double shots within 150 miles.",
    },
  ],
};

export const promotionHighlights: FeatureHighlight[] = [
  {
    id: "promotion-hubs",
    title: "Promotion Hubs",
    description:
      "Manage rosters, track event cards, and embed media recaps to grow your audience.",
  },
  {
    id: "recommendation-engine",
    title: "Recommendation Engine",
    description:
      "Verify bookings, rate experiences, and help the community hire responsibly.",
  },
  {
    id: "school-spotlights",
    title: "School Spotlights",
    description:
      "Publish seminar schedules, coach bios, and alumni success stories to attract trainees.",
  },
  {
    id: "discovery-search",
    title: "Discovery & Search",
    description:
      "Filter by style, location, and availability to match talent with the right opportunities.",
  },
];
