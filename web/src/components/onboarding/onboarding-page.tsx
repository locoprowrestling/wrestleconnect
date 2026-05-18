"use client";

import Link from "next/link";
import { ReactNode, useMemo } from "react";

import { useSupabaseUser } from "@/hooks/use-supabase-user";
import { createClient } from "@/lib/supabase-client";

interface OnboardingPageProps {
  eyebrow: string;
  title: string;
  description: string;
  highlights?: string[];
  saveTarget?: string;
  children: ReactNode;
}

export function OnboardingPage({
  eyebrow,
  title,
  description,
  highlights = [],
  saveTarget,
  children,
}: OnboardingPageProps) {
  const supabase = useMemo(() => createClient(), []);
  const { status } = useSupabaseUser(supabase);
  const showAuthPrompt = status === "unauthenticated";
  const targetText = saveTarget ?? title.toLowerCase();

  return (
    <div className="onboarding-card">
      <header className="onboarding-card__header">
        {showAuthPrompt ? (
          <p className="onboarding-card__auth">
            <Link href="/sign-in" className="onboarding-card__auth-link">
              Sign in
            </Link>
            <span className="onboarding-card__auth-text">or</span>
            <Link href="/sign-up" className="onboarding-card__auth-link onboarding-card__auth-link--primary">
              create an account
            </Link>
            <span className="onboarding-card__auth-text">to save your {targetText}.</span>
          </p>
        ) : null}
        <span className="onboarding-card__eyebrow">{eyebrow}</span>
        <h1 className="onboarding-card__title">{title}</h1>
        <p className="onboarding-card__description">{description}</p>
        {highlights.length > 0 && (
          <ul className="onboarding-card__highlights">
            {highlights.map((item) => (
              <li key={item} className="onboarding-card__highlight">
                {item}
              </li>
            ))}
          </ul>
        )}
      </header>
      <section className="onboarding-card__form">{children}</section>
    </div>
  );
}
