"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

import { FormField, formFieldInputClassName } from "@/components/onboarding/form-field";
import { FormGrid } from "@/components/onboarding/form-grid";
import { FormSection } from "@/components/onboarding/form-section";
import { useSupabaseUser } from "@/hooks/use-supabase-user";
import { createClient } from "@/lib/supabase-client";
import { US_STATES } from "@/lib/us-states";

export function WrestlerOnboardingForm() {
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
          <Link href="/sign-in">Sign in</Link> or <Link href="/sign-up">create an account</Link> to save your wrestler
          profile.
        </p>
      </div>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setFormState({ status: "submitting" });

    const { error } = await supabase.from("wrestler_profiles").insert([
      {
        user_id: user.id,
        ring_name: formData.get("ring_name"),
        real_name: formData.get("real_name"),
        location: `${formData.get("city")}, ${formData.get("state")}`,
        weight: parseOptionalNumber(formData.get("weight")),
        height: parseOptionalNumber(formData.get("height")),
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
        message: enrichedError.message || "Something went wrong while saving your wrestler profile.",
      });
    } else {
      setFormState({ status: "success", message: "Wrestler profile saved successfully." });
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12">
      <FormSection
        title="Identity & Presence"
        description="Tell the community who you are and how you want to be introduced."
      >
        <FormGrid>
          <FormField
            label="Ring Name"
            name="ring_name"
            required
            wrapperClassName="md:col-span-2"
            placeholder="'The Mauler' Mike Miller"
          />
          <FormField
            label="Real Name"
            name="real_name"
            placeholder="Mike Miller"
            wrapperClassName="md:col-span-2"
          />
        </FormGrid>
      </FormSection>

      <FormSection
        title="Vitals & Location"
        description="Share the details promotions need to book you for the right matchups."
      >
        <FormGrid>
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
          <FormField
            label="Weight (lbs)"
            name="weight"
            type="number"
            placeholder="220"
            wrapperClassName="md:col-span-1"
          />
          <FormField
            label="Height (in)"
            name="height"
            type="number"
            placeholder="72"
            wrapperClassName="md:col-span-1"
          />
        </FormGrid>
      </FormSection>

      <div className="onboarding-actions">
        <p className="onboarding-actions__hint">
          You can update your stats and add media from your dashboard at any time.
        </p>
        <button
          type="submit"
          className="onboarding-actions__submit"
          disabled={formState.status === "submitting"}
        >
          {formState.status === "submitting" ? "Saving…" : "Save Wrestler Profile"}
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

function parseOptionalNumber(value: FormDataEntryValue | null): number | null {
  if (!value) return null;
  const strValue = value.toString().trim();
  if (!strValue) return null;
  const parsed = Number(strValue);
  return Number.isFinite(parsed) ? parsed : null;
}
