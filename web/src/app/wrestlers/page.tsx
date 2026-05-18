import Image from "next/image";
import brandLogo from "@/assets/brand-logo.png";
import { getWrestlerContent } from "@/lib/content";
import { Hero } from "@/components/ui/hero";
import { LogoCard } from "@/components/ui/logo-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StatGrid } from "@/components/ui/stat-grid";
import { SpotlightCard } from "@/components/spotlight-card";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import { TestimonialGrid } from "@/components/ui/testimonial-grid";
import { FinalCtaSection } from "@/components/ui/final-cta";

export default async function WrestlersPage() {
  const { hero, stats, spotlight, timeline, testimonials, features, finalCta } =
    await getWrestlerContent();

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
                  alt="WrestleConnect badge"
                  width={160}
                  height={160}
                  priority
                />
              }
              eyebrow="Verified Profiles"
              content="Publish once, update anywhere. Promotions see the latest media, accolades, and availability instantly."
            />
          }
        />

        <Section variant="panel">
          <SectionHeader
            eyebrow="Credibility Proof"
            title="Booking signals in one glance"
          />
          <StatGrid items={stats} />
        </Section>

        <Section id="profile-showcase" variant="split">
          <div className="wc-section__header">
            <span className="wc-eyebrow">Profile Showcase</span>
            <h2 className="wc-heading-lg">
              Your highlight reel, press kit, and resume in one place
            </h2>
            <p className="wc-body">
              Combine high-impact media, real-time availability, and verified
              testimonials. WrestleConnect makes it easy to upload match footage
              and display the credentials that matter to promoters.
            </p>
            <div className="wc-card-grid wc-card-grid--two">
              {[
                "Drag-and-drop photo uploads with automatic responsive sizing.",
                "Embed YouTube, Vimeo, or IWTV links with poster frames.",
                "Showcase championships, signature moves, and style tags.",
                "Publish travel radius, preferred contacts, and booking notes.",
              ].map((item) => (
                <Card key={item}>{item}</Card>
              ))}
            </div>
          </div>
          <SpotlightCard spotlight={spotlight} />
        </Section>

        <Section variant="panel-split">
          <SectionHeader
            eyebrow="Match Timeline"
            title="Automatic event history that builds itself"
            description="Promotions tag you on their event cards and WrestleConnect adds the results to your profile automatically. No more spreadsheets or missing dates—your history stays accurate."
          />
          <Timeline items={timeline} />
        </Section>

        <Section variant="split">
          <div className="wc-panel">
            <span className="wc-eyebrow">Promotion Testimonials</span>
            <h2 className="wc-heading-lg">
              Recommendations that vouch for your professionalism
            </h2>
            <p className="wc-body">
              Promotions can verify past bookings, add skill tags, and publish
              testimonials on your profile. You stay in control with approval
              workflows and dispute options.
            </p>
            <div className="wc-card--pill-group">
              {["Punctual", "Locker Room Leader", "Fan Favorite", "Technical"].map(
                (tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ),
              )}
            </div>
          </div>
          <TestimonialGrid quotes={testimonials} />
        </Section>

        <Section variant="panel-split">
          <SectionHeader
            eyebrow="Tools at your fingertips"
            title="Everything you need to stay bookable"
            description="WrestleConnect centralizes the marketing assets and logistics that promotions expect. Build a profile once and keep it updated from your phone or laptop."
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

        <FinalCtaSection content={finalCta} />
      </main>
    </div>
  );
}
