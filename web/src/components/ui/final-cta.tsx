import { FinalCta } from "@/types/content";

interface FinalCtaProps {
  content: FinalCta;
}

export function FinalCtaSection({ content }: FinalCtaProps) {
  return (
    <section id="sign-up" className="wc-cta-final">
      <div className="wc-cta-final__content">
        <div className="wc-section wc-section--compact">
          <span className="wc-badge wc-badge--light">{content.badge}</span>
          <h2 className="wc-heading-lg wc-text-light">{content.title}</h2>
          <p className="wc-body wc-text-light">{content.description}</p>
          <ul className="wc-cta-final__list">
            {content.bullets.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="wc-cta-final__actions">
          <a
            className={`wc-button ${
              content.primaryCta.variant === "outline"
                ? "wc-button--outline"
                : "wc-button--primary"
            }`}
            href={content.primaryCta.href}
          >
            {content.primaryCta.label}
          </a>
          {content.secondaryCta ? (
            <a
              className={`wc-button ${
                content.secondaryCta.variant === "primary"
                  ? "wc-button--primary"
                  : "wc-button--outline"
              }`}
              href={content.secondaryCta.href}
            >
              {content.secondaryCta.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

