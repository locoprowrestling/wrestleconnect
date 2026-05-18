import { OnboardingPage } from "@/components/onboarding/onboarding-page";
import { PromotionOnboardingForm } from "@/components/onboarding/promotion-onboarding-form";

export default function PromotionOnboardingPage() {
  return (
    <OnboardingPage
      eyebrow="Promotion Onboarding"
      title="Showcase your promotion"
      description="Start with the basics and add events, roster highlights, and media the moment your promotion is verified."
      highlights={[
        "Establish your brand presence and locale",
        "Share booking history and upcoming shows",
        "Collaborate with wrestlers through recommendations",
      ]}
      saveTarget="promotion profile"
    >
      <PromotionOnboardingForm />
    </OnboardingPage>
  );
}
