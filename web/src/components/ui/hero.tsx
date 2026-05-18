import { ReactNode } from "react";

type HeroCTA = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
};

interface HeroProps {
  badge: string;
  title: string;
  description: string;
  primaryCta: HeroCTA;
  secondaryCta?: HeroCTA;
  aside?: ReactNode;
}

export function Hero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  aside,
}: HeroProps) {
  return (
    <section className="wc-hero">
      <div className="wc-hero__grid">
        <div className="wc-section__header">
          <span className="wc-hero__badge">{badge}</span>
          <h1 className="wc-heading-xl">{title}</h1>
          <p className="wc-body-lg">{description}</p>
          <div className="wc-cta-group">
            <a
              className={`wc-button ${
                primaryCta.variant === "outline"
                  ? "wc-button--outline"
                  : "wc-button--primary"
              }`}
              href={primaryCta.href}
            >
              {primaryCta.label}
            </a>
            {secondaryCta ? (
              <a
                className={`wc-button ${
                  secondaryCta.variant === "primary"
                    ? "wc-button--primary"
                    : "wc-button--outline"
                }`}
                href={secondaryCta.href}
              >
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
        {aside}
      </div>
    </section>
  );
}

