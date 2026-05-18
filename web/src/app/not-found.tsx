import Link from "next/link";
import Image from "next/image";
import brandLogo from "@/assets/brand-logo.png";

export default function NotFound() {
  return (
    <div className="wc-page">
      <main className="wc-shell" style={{ alignItems: "center", textAlign: "center" }}>
        <section className="wc-hero" style={{ maxWidth: 640 }}>
          <div className="wc-section wc-section--compact" style={{ alignItems: "center" }}>
            <span className="wc-hero__badge">Error 404</span>
            <h1 className="wc-heading-xl">This match card is missing</h1>
            <p className="wc-body-lg">
              Looks like this page took a bump off the apron. While we tape it back
              together, head to the locker room for the latest cards.
            </p>
            <div
              className="wc-hero-card"
              style={{ maxWidth: 320, margin: "0 auto" }}
            >
              <div className="wc-hero-card__logo">
                <Image
                  src={brandLogo}
                  alt="WrestleConnect logo"
                  width={120}
                  height={120}
                  priority
                />
              </div>
              <div className="wc-hero-card__copy">
                <span className="wc-hero-card__eyebrow">Backstage Banter</span>
                <p className="wc-hero-card__text">
                  “We swear this page was just here. Maybe it’s cutting a promo
                  somewhere else.”
                </p>
              </div>
            </div>
            <div className="wc-cta-group" style={{ justifyContent: "center" }}>
              <Link className="wc-button wc-button--primary" href="/">
                Return to Home
              </Link>
              <Link className="wc-button wc-button--outline" href="/wrestlers">
                Explore Wrestlers
              </Link>
            </div>
            <p className="wc-body-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              Need help finding something specific? <a href="/contact">Tag in the crew</a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
