import { OnboardingPage } from "@/components/onboarding/onboarding-page";
import { WrestlerOnboardingForm } from "@/components/onboarding/wrestler-onboarding-form";

export default function WrestlerOnboardingPage() {
  return (
    <OnboardingPage
      eyebrow="Wrestler Onboarding"
      title="Launch your standout profile"
      description="Lock in the essentials so promoters and fans can discover you, verify bookings, and line up your next appearance."
      highlights={[
        "Spotlight your ring name and hometown presence",
        "Share stats that help matchmakers build compelling cards",
        "Unlock recommendations and booking tools after setup",
      ]}
      saveTarget="wrestler profile"
    >
      <WrestlerOnboardingForm />
    </OnboardingPage>
  );
}
