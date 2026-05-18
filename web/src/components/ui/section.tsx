import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  variant?: "default" | "split" | "panel" | "panel-split";
  className?: string;
}

const variantClassMap: Record<NonNullable<SectionProps["variant"]>, string> = {
  default: "wc-section",
  split: "wc-section wc-section--split",
  panel: "wc-panel",
  "panel-split": "wc-panel wc-panel--split",
};

export function Section({
  id,
  children,
  variant = "default",
  className = "",
}: SectionProps) {
  const variantClass = variantClassMap[variant];
  return (
    <section id={id} className={`${variantClass} ${className}`.trim()}>
      {children}
    </section>
  );
}

