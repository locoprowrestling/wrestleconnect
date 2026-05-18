import { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function FormSection({ title, description, children }: FormSectionProps) {
  return (
    <section className="onboarding-section">
      <header className="onboarding-section__header">
        <h2 className="onboarding-section__title">{title}</h2>
        <p className="onboarding-section__subtitle">{description}</p>
      </header>
      <div className="onboarding-section__content">{children}</div>
    </section>
  );
}
