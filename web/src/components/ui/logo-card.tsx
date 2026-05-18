import { ReactNode } from "react";

interface LogoCardProps {
  logo: ReactNode;
  eyebrow: string;
  content: string;
}

export function LogoCard({ logo, eyebrow, content }: LogoCardProps) {
  return (
    <div className="wc-hero-card">
      <div className="wc-hero-card__logo">{logo}</div>
      <div className="wc-hero-card__copy">
        <span className="wc-hero-card__eyebrow">{eyebrow}</span>
        <p className="wc-hero-card__text">{content}</p>
      </div>
    </div>
  );
}

