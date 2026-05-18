import { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  accent?: boolean;
  className?: string;
}

export function Pill({ children, accent = false, className = "" }: PillProps) {
  const baseClass = "wc-pill";
  const accentClass = accent ? "wc-pill--accent" : "";
  return (
    <span className={`${baseClass} ${accentClass} ${className}`.trim()}>
      {children}
    </span>
  );
}

