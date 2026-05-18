export type CtaVariant = "primary" | "outline";

export interface Cta {
  label: string;
  href: string;
  variant?: CtaVariant;
}

export interface HeroContent {
  badge: string;
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}

export interface SpotlightDetail {
  eyebrow: string;
  name: string;
  subtitle: string;
  tags: string[];
  testimonial: string;
  testimonialSource: string;
  rating?: string;
  upcoming: Array<{
    id: string;
    label: string;
    title: string;
    meta?: string;
    description?: string;
  }>;
}

export interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
}

export interface StatHighlight {
  id: string;
  value: string;
  label: string;
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface TestimonialQuote {
  id: string;
  quote: string;
  promotion: string;
  role: string;
}

export interface FinalCta {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  primaryCta: Cta;
  secondaryCta?: Cta;
}

export interface WrestlerContent {
  hero: HeroContent;
  stats: StatHighlight[];
  spotlight: SpotlightDetail;
  timeline: TimelineEntry[];
  testimonials: TestimonialQuote[];
  features: FeatureHighlight[];
  finalCta: FinalCta;
}

export interface PromotionContent {
  hero: HeroContent;
  stats: StatHighlight[];
  spotlight: SpotlightDetail;
  timeline: TimelineEntry[];
  testimonials: TestimonialQuote[];
  features: FeatureHighlight[];
  finalCta: FinalCta;
}

export interface SchoolContent {
  hero: HeroContent;
  stats: StatHighlight[];
  spotlight: SpotlightDetail;
  testimonials: TestimonialQuote[];
  features: FeatureHighlight[];
  finalCta: FinalCta;
}

export type HomeContent = {
  hero: HeroContent;
  spotlight: SpotlightDetail;
  features: FeatureHighlight[];
};
