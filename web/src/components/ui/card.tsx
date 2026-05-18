import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "dark" | "stat" | "testimonial";
  className?: string;
}

const variantClassMap: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "wc-card",
  dark: "wc-card wc-card--dark",
  stat: "wc-stat",
  testimonial: "wc-testimonial",
};

export function Card({
  children,
  variant = "default",
  className = "",
}: CardProps) {
  const variantClass = variantClassMap[variant];
  return <div className={`${variantClass} ${className}`.trim()}>{children}</div>;
}

