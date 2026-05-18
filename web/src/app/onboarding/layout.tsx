import { ReactNode } from "react";

import { OnboardingFooter } from "@/components/onboarding/onboarding-footer";

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="onboarding-page">
      <main className="onboarding-container">{children}</main>
      <OnboardingFooter />
    </div>
  );
}
