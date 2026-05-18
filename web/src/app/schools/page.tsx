import Image from "next/image";
import brandLogo from "@/assets/brand-logo.png";
import { getSchoolsContent } from "@/lib/content";
import { Hero } from "@/components/ui/hero";
import { LogoCard } from "@/components/ui/logo-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StatGrid } from "@/components/ui/stat-grid";
import { SpotlightCard } from "@/components/spotlight-card";
import { Card } from "@/components/ui/card";
import { TestimonialGrid } from "@/components/ui/testimonial-grid";
import { FinalCtaSection } from "@/components/ui/final-cta";

export default async function SchoolsPage() {
  const { hero, stats, spotlight, testimonials, features, finalCta } =
    await getSchoolsContent();

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
                  alt="WrestleConnect school badge"
                  width={160}
                  height={160}
                  priority
                />
              }
              eyebrow="Training Hubs"
              content="Showcase your facility, coaches, and alumni so the next class knows exactly what to expect."
            />
          }
        />

        <Section variant="panel">
          <SectionHeader
            eyebrow="School Impact"
            title="Grow your training pipeline"
          />
          <StatGrid items={stats} />
        </Section>

        <Section variant="split">
          <SectionHeader
            eyebrow={spotlight.eyebrow}
            title={spotlight.name}
            description={spotlight.subtitle}
          />
          <SpotlightCard spotlight={spotlight} />
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Training toolkit"
            title="Tools built for wrestling schools"
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
            eyebrow="Community voices"
            title="What promotions and alumni say"
          />
          <TestimonialGrid quotes={testimonials} />
        </Section>

        <FinalCtaSection content={finalCta} />
      </main>
    </div>
  );
}
