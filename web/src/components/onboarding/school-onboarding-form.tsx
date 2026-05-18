"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

import { FormField, formFieldInputClassName } from "@/components/onboarding/form-field";
import { FormGrid } from "@/components/onboarding/form-grid";
import { FormSection } from "@/components/onboarding/form-section";
import { useSupabaseUser } from "@/hooks/use-supabase-user";
import { createClient } from "@/lib/supabase-client";
import { US_STATES } from "@/lib/us-states";

export function SchoolOnboardingForm() {
  const supabase = useMemo(() => createClient(), []);
  const { status, user } = useSupabaseUser(supabase);
  const [formState, setFormState] = useState<
    { status: "idle" | "submitting" | "error" | "success"; message?: string }
  >({
    status: "idle",
  });

  if (status === "loading") {
    return (
      <div className="onboarding-auth-state">
        <h2 className="onboarding-auth-state__title">Checking your session…</h2>
        <p className="onboarding-auth-state__body">
          Hold tight while we confirm you&rsquo;re signed in.
        </p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="onboarding-auth-state">
        <h2 className="onboarding-auth-state__title">Sign in required</h2>
        <p className="onboarding-auth-state__body">
          <Link href="/sign-in">Sign in</Link> or <Link href="/sign-up">create an account</Link> to save your school
          profile.
        </p>
      </div>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setFormState({ status: "submitting" });

    const { error } = await supabase.from("schools").insert([
      {
        user_id: user.id,
        name: formData.get("name"),
        location: `${formData.get("city")}, ${formData.get("state")}`,
        website_url: formData.get("website_url"),
      },
    ]);

    if (error) {
      const enrichedError = {
        message: error.message,
        code: (error as { code?: string }).code,
        details: (error as { details?: string }).details,
      };
      console.error("Error inserting data", enrichedError);
      setFormState({
        status: "error",
        message: enrichedError.message || "Something went wrong while saving your school profile.",
      });
    } else {
      setFormState({ status: "success", message: "School profile saved successfully." });
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12">
      <FormSection
        title="Academy Overview"
        description="Introduce your school at a glance for prospective students and guest coaches."
      >
        <FormGrid>
          <FormField
            label="School Name"
            name="name"
            required
            wrapperClassName="md:col-span-2"
            placeholder="Pro Wrestling Academy"
          />
          <FormField
            label="City"
            name="city"
            placeholder="Anytown"
            wrapperClassName="md:col-span-1"
          />
          <div className="flex flex-col gap-1.5 md:col-span-1">
            <label htmlFor="state" className="text-sm font-medium text-gray-700">
              State
            </label>
            <select
              id="state"
              name="state"
              className={formFieldInputClassName}
              defaultValue={US_STATES[0]?.value}
            >
              {US_STATES.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>
        </FormGrid>
      </FormSection>

      <FormSection
        title="Online Presence"
        description="Point wrestlers toward your site for schedules, tryouts, and contact details."
      >
        <FormGrid>
          <FormField
            label="Website URL"
            name="website_url"
            type="url"
            placeholder="https://pwa.example.com"
            wrapperClassName="md:col-span-2"
          />
        </FormGrid>
      </FormSection>

      <div className="onboarding-actions">
        <p className="onboarding-actions__hint">
          Share seminars, staff, and highlights once your school page is live.
        </p>
        <button
          type="submit"
          className="onboarding-actions__submit"
          disabled={formState.status === "submitting"}
        >
          {formState.status === "submitting" ? "Saving…" : "Save School Profile"}
        </button>
      </div>
      {formState.status === "error" ? (
        <p className="onboarding-form-status onboarding-form-status--error">{formState.message}</p>
      ) : null}
      {formState.status === "success" ? (
        <p className="onboarding-form-status onboarding-form-status--success">{formState.message}</p>
      ) : null}
    </form>
  );
}
