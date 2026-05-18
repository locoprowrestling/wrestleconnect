import Image from "next/image";
import brandLogo from "@/assets/brand-logo.png";
import { Hero } from "@/components/ui/hero";
import { LogoCard } from "@/components/ui/logo-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { getHomeContent } from "@/lib/content";
import { SpotlightCard } from "@/components/spotlight-card";

export default async function Home() {
  const { hero, spotlight, features } = await getHomeContent();

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
                  alt="WrestleConnect handshake logo"
                  width={160}
                  height={160}
                  priority
                />
              }
              eyebrow="WrestleConnect"
              content="Built for the independent wrestling scene — handshake verified, community powered."
            />
          }
        />

        <Section id="roster" variant="split">
          <div className="wc-section__header">
            <span className="wc-eyebrow">Verified Talent</span>
            <h2 className="wc-heading-lg">Book wrestlers with confidence</h2>
            <p className="wc-body">
              Every profile highlights media, accolades, and promotion-backed
              recommendations. Promotions can confirm past bookings and share
              why they would work together again.
            </p>
            <div className="wc-card-grid wc-card-grid--two">
              {[
                "Media-rich bios with photo galleries and match reels.",
                "Availability snapshots to streamline outreach and booking.",
                "Promotion testimonials with ratings and skill tags.",
                "Automated event history pulled from confirmed match cards.",
              ].map((item) => (
                <Card key={item}>{item}</Card>
              ))}
            </div>
          </div>
          <SpotlightCard spotlight={spotlight} />
        </Section>

        <Section id="promotions">
          <SectionHeader
            eyebrow="Build Momentum"
            title="Promotions & schools"
            description="Showcase your event history, roster highlights, and upcoming seminars so talent knows exactly what to expect."
          />
          <div className="wc-card-grid wc-card-grid--two">
            {features.map((feature) => (
              <Card key={feature.id}>
                <h3 className="wc-heading-md">{feature.title}</h3>
                <p className="wc-body-sm wc-margin-top-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
