import { OnboardingPage } from "@/components/onboarding/onboarding-page";
import { SchoolOnboardingForm } from "@/components/onboarding/school-onboarding-form";

export default function SchoolOnboardingPage() {
  return (
    <OnboardingPage
      eyebrow="School Onboarding"
      title="Invite the next generation"
      description="Lay the groundwork for your academy profile so prospects can explore your coaching staff, seminars, and alumni."
      highlights={[
        "Introduce your facility and training style",
        "Promote seminars, workshops, and tryouts",
        "Link notable alumni once your profile is live",
      ]}
      saveTarget="school profile"
    >
      <SchoolOnboardingForm />
    </OnboardingPage>
  );
}
