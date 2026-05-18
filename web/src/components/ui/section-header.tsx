import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
 description,
  children,
}: SectionHeaderProps) {
  return (
    <div className="wc-section__header">
      {eyebrow ? <span className="wc-eyebrow">{eyebrow}</span> : null}
      <h2 className="wc-heading-lg">{title}</h2>
      {description ? <p className="wc-body">{description}</p> : null}
      {children}
    </div>
  );
}

