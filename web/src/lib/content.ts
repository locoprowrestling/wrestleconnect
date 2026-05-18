import { z } from "zod";

import {
  homeHero,
  homeSpotlight,
  promotionHighlights,
} from "@/data/home";
import {
  promotionsFinalCta,
  promotionsFeatures,
  promotionsHero,
  promotionsSpotlight,
  promotionsStats,
  promotionsTestimonials,
  promotionsTimeline,
} from "@/data/promotions";
import {
  schoolsFinalCta,
  schoolsFeatures,
  schoolsHero,
  schoolsSpotlight,
  schoolsStats,
  schoolsTestimonials,
} from "@/data/schools";
import {
  wrestlerFeatures,
  wrestlerFinalCta,
  wrestlerHero,
  wrestlerSpotlight,
  wrestlerStats,
  wrestlerTestimonials,
  wrestlerTimeline,
} from "@/data/wrestlers";
import {
  homeContentSchema,
  promotionsContentSchema,
  schoolsContentSchema,
  wrestlerContentSchema,
} from "@/lib/content-schema";
import { getSupabaseServerClient } from "@/lib/supabase-server";
import {
  HomeContent,
  PromotionContent,
  SchoolContent,
  WrestlerContent,
} from "@/types/content";

function localHomeContent(): HomeContent {
  return {
    hero: homeHero,
    spotlight: homeSpotlight,
    features: promotionHighlights,
  };
}

function localWrestlerContent(): WrestlerContent {
  return {
    hero: wrestlerHero,
    stats: wrestlerStats,
    spotlight: wrestlerSpotlight,
    timeline: wrestlerTimeline,
    testimonials: wrestlerTestimonials,
    features: wrestlerFeatures,
    finalCta: wrestlerFinalCta,
  };
}

function localPromotionsContent(): PromotionContent {
  return {
    hero: promotionsHero,
    stats: promotionsStats,
    spotlight: promotionsSpotlight,
    timeline: promotionsTimeline,
    testimonials: promotionsTestimonials,
    features: promotionsFeatures,
    finalCta: promotionsFinalCta,
  };
}

function localSchoolsContent(): SchoolContent {
  return {
    hero: schoolsHero,
    stats: schoolsStats,
    spotlight: schoolsSpotlight,
    testimonials: schoolsTestimonials,
    features: schoolsFeatures,
    finalCta: schoolsFinalCta,
  };
}

async function loadContent<T>({
  slug,
  schema,
  fallback,
}: {
  slug: string;
  schema: z.ZodType<T>;
  fallback: () => T;
}): Promise<T> {
  const supabase = getSupabaseServerClient();

  try {
    const { data, error } = await supabase
      .from("page_content")
      .select("data")
      .eq("slug", slug)
      .maybeSingle();

    if (error || !data?.data) {
      throw error ?? new Error(`No remote content found for slug ${slug}`);
    }

    return schema.parse(data.data);
  } catch (error) {
    console.warn(
      `[content] Falling back to local data for ${slug} due to error:`,
      error,
    );
    const fallbackData = fallback();
    return schema.parse(fallbackData);
  }
}

export function getHomeContent(): Promise<HomeContent> {
  return loadContent<HomeContent>({
    slug: "home",
    schema: homeContentSchema,
    fallback: localHomeContent,
  });
}

export function getWrestlerContent(): Promise<WrestlerContent> {
  return loadContent<WrestlerContent>({
    slug: "wrestlers",
    schema: wrestlerContentSchema,
    fallback: localWrestlerContent,
  });
}

export function getPromotionsContent(): Promise<PromotionContent> {
  return loadContent<PromotionContent>({
    slug: "promotions",
    schema: promotionsContentSchema,
    fallback: localPromotionsContent,
  });
}

export function getSchoolsContent(): Promise<SchoolContent> {
  return loadContent<SchoolContent>({
    slug: "schools",
    schema: schoolsContentSchema,
    fallback: localSchoolsContent,
  });
}
