import { z } from "zod";

export const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
  variant: z.enum(["primary", "outline"]).optional(),
});

export const heroSchema = z.object({
  badge: z.string(),
  title: z.string(),
  description: z.string(),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema.optional(),
});

export const spotlightSchema = z.object({
  eyebrow: z.string(),
  name: z.string(),
  subtitle: z.string(),
  tags: z.array(z.string()),
  testimonial: z.string(),
  testimonialSource: z.string(),
  rating: z.string().optional(),
  upcoming: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      title: z.string(),
      meta: z.string().optional(),
      description: z.string().optional(),
    }),
  ),
});

export const featureHighlightSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export const statHighlightSchema = z.object({
  id: z.string(),
  value: z.string(),
  label: z.string(),
});

export const timelineEntrySchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
});

export const testimonialSchema = z.object({
  id: z.string(),
  quote: z.string(),
  promotion: z.string(),
  role: z.string(),
});

export const finalCtaSchema = z.object({
  badge: z.string(),
  title: z.string(),
  description: z.string(),
  bullets: z.array(z.string()),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema.optional(),
});

export const homeContentSchema = z.object({
  hero: heroSchema,
  spotlight: spotlightSchema,
  features: z.array(featureHighlightSchema),
});

export const wrestlerContentSchema = z.object({
  hero: heroSchema,
  stats: z.array(statHighlightSchema),
  spotlight: spotlightSchema,
  timeline: z.array(timelineEntrySchema),
  testimonials: z.array(testimonialSchema),
  features: z.array(featureHighlightSchema),
  finalCta: finalCtaSchema,
});

export const promotionsContentSchema = z.object({
  hero: heroSchema,
  stats: z.array(statHighlightSchema),
  spotlight: spotlightSchema,
  timeline: z.array(timelineEntrySchema),
  testimonials: z.array(testimonialSchema),
  features: z.array(featureHighlightSchema),
  finalCta: finalCtaSchema,
});

export const schoolsContentSchema = z.object({
  hero: heroSchema,
  stats: z.array(statHighlightSchema),
  spotlight: spotlightSchema,
  testimonials: z.array(testimonialSchema),
  features: z.array(featureHighlightSchema),
  finalCta: finalCtaSchema,
});

export type HomeContentSchema = z.infer<typeof homeContentSchema>;
export type WrestlerContentSchema = z.infer<typeof wrestlerContentSchema>;
export type PromotionsContentSchema = z.infer<typeof promotionsContentSchema>;
export type SchoolsContentSchema = z.infer<typeof schoolsContentSchema>;
