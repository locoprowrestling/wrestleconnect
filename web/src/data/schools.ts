import { FeatureHighlight, FinalCta, HeroContent, SpotlightDetail, StatHighlight, TestimonialQuote } from "@/types/content";

export const schoolsHero: HeroContent = {
  badge: "For Training Schools",
  title: "Grow the next generation of independent wrestling talent.",
  description:
    "Manage seminars, showcase coaches, and highlight alumni success stories so aspiring wrestlers know where to train and promotions know who you develop.",
  primaryCta: {
    label: "Register Your School",
    href: "/onboarding/schools",
  },
  secondaryCta: {
    label: "Publish Seminar",
    href: "/schools",
    variant: "outline",
  },
};

export const schoolsStats: StatHighlight[] = [
  {
    id: "seminars",
    value: "320",
    label: "Seminars hosted through WrestleConnect schools last year.",
  },
  {
    id: "graduates",
    value: "1.5K",
    label: "Graduates with verified alumni badges on the platform.",
  },
  {
    id: "placements",
    value: "760",
    label: "Promotion bookings sourced from school recommendations.",
  },
];

export const schoolsSpotlight: SpotlightDetail = {
  eyebrow: "Spotlight School",
  name: "Elevation Wrestling Academy",
  subtitle: "Head Coach: Marcus Vega · Est. 2013",
  tags: ["In-Ring", "Promo", "Conditioning"],
  testimonial:
    "“WrestleConnect lets prospective students preview our training style and keeps alumni connected to promotions.”",
  testimonialSource: "Lead Trainer · Dana Cruz",
  upcoming: [
    {
      id: "camp",
      label: "Camp",
      title: "Summer Intensive",
      meta: "Jul 8–12 · 5 day camp",
      description: "Advanced ring psychology and promo lab with guest coaches.",
    },
    {
      id: "tryout",
      label: "Tryout",
      title: "Open Ring Night",
      description: "Monthly tryout for new students · Limited slots available.",
    },
  ],
};

export const schoolsFeatures: FeatureHighlight[] = [
  {
    id: "seminar-manager",
    title: "Seminar Manager",
    description: "Schedule seminars, manage registrations, and automate reminder emails.",
  },
  {
    id: "coach-bios",
    title: "Coach Bios",
    description: "Showcase coaching staff credentials with bio pages and media content.",
  },
  {
    id: "alumni-showcase",
    title: "Alumni Showcase",
    description: "Highlight graduates with links to their WrestleConnect profiles and achievements.",
  },
  {
    id: "facility-tour",
    title: "Facility Tour",
    description: "Upload video walkthroughs and equipment lists to sell the experience.",
  },
];

export const schoolsTestimonials: TestimonialQuote[] = [
  {
    id: "academy",
    promotion: "Crimson City Pro",
    quote:
      "“We scout many of our next talents directly from schools on WrestleConnect—alumni badges make vetting easy.”",
    role: "Talent Relations",
  },
  {
    id: "graduate",
    promotion: "Alumni Spotlight",
    quote:
      "“After listing my school and alumni credentials, promotions started reaching out for seminars and bookings.”",
    role: "Head Coach",
  },
];

export const schoolsFinalCta: FinalCta = {
  badge: "Start Teaching",
  title: "Empower your students with WrestleConnect",
  description:
    "Enroll your school, publish training calendars, and connect alumni to promotions that need fresh talent.",
  bullets: [
    "List recurring classes, special seminars, and guest trainers with ease.",
    "Offer verified alumni badges that signal readiness to promotions.",
    "Promote your facility with media galleries and testimonials.",
  ],
  primaryCta: {
    label: "Register School",
    href: "/onboarding/schools",
  },
  secondaryCta: {
    label: "Talk to Onboarding",
    href: "/contact",
    variant: "outline",
  },
};
