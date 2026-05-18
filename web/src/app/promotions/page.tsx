import Image from "next/image";
import brandLogo from "@/assets/brand-logo.png";
import { getPromotionsContent } from "@/lib/content";
import { Hero } from "@/components/ui/hero";
import { LogoCard } from "@/components/ui/logo-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StatGrid } from "@/components/ui/stat-grid";
import { SpotlightCard } from "@/components/spotlight-card";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { TestimonialGrid } from "@/components/ui/testimonial-grid";
import { FinalCtaSection } from "@/components/ui/final-cta";

export default async function PromotionsPage() {
  const { hero, stats, spotlight, timeline, testimonials, features, finalCta } =
    await getPromotionsContent();

  return (
    <div className="wc-page">
      <main className="wc-shell">
        <Hero
          badge={hero.badge}
          title={hero.title}
          description={hero.description}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
          aside={
            <LogoCard
              logo={
                <Image
                  src={brandLogo}
                  alt="WrestleConnect promotion badge"
                  width={160}
                  height={160}
                  priority
                />
              }
              eyebrow="Promotion Hub"
              content="Build a media-rich hub that streamlines booking operations and highlights your brand."
            />
          }
        />

        <Section variant="panel">
          <SectionHeader
            eyebrow="Platform Impact"
            title="Why promotions choose WrestleConnect"
          />
          <StatGrid items={stats} />
        </Section>

        <Section variant="split">
          <SectionHeader
            eyebrow="Featured Promotion"
            title={spotlight.name}
            description={spotlight.subtitle}
          />
          <SpotlightCard spotlight={spotlight} />
        </Section>

        <Section variant="panel-split">
          <SectionHeader
            eyebrow="How it works"
            title="Plan, promote, recap"
            description="From early booking conversations to show night recaps, WrestleConnect keeps your workflow organized."
          />
          <Timeline items={timeline} />
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Promotion toolkit"
            title="Run smoother shows and market like a pro"
          />
          <div className="wc-card-grid wc-card-grid--two">
            {features.map((feature) => (
              <Card key={feature.id}>
                <h3 className="wc-heading-sm">{feature.title}</h3>
                <p className="wc-body-sm wc-margin-top-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="What promotions are saying"
            title="Testimonials"
          />
          <TestimonialGrid quotes={testimonials} />
        </Section>

        <FinalCtaSection content={finalCta} />
      </main>
    </div>
  );
}
