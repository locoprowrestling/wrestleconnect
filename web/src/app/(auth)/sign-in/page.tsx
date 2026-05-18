"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

import { createClient } from "@/lib/supabase-client";

export default function SignInPage() {
  const supabase = createClient();
  const [state, setState] = useState<{ loading: boolean; error?: string }>({
    loading: false,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    setState({ loading: true });
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setState({ loading: false, error: error.message });
      return;
    }

    window.location.href = "/onboarding/wrestlers";
  }

  return (
    <div className="auth-card">
      <header className="auth-card__header">
        <h1>Welcome Back</h1>
        <p>Sign in to manage your WrestleConnect profiles and bookings.</p>
      </header>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="auth-form__label" htmlFor="email">
          Email address
        </label>
        <input className="auth-form__input" id="email" name="email" type="email" required />

        <label className="auth-form__label" htmlFor="password">
          Password
        </label>
        <input
          className="auth-form__input"
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />

        {state.error ? <p className="auth-form__error">{state.error}</p> : null}

        <button className="auth-form__submit" type="submit" disabled={state.loading}>
          {state.loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
      <footer className="auth-card__footer">
        <p>
          Need an account? <Link href="/sign-up">Create one</Link>
        </p>
      </footer>
    </div>
  );
}
