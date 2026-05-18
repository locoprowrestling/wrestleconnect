"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

import { createClient } from "@/lib/supabase-client";

export default function SignUpPage() {
  const supabase = createClient();
  const [state, setState] = useState<{ loading: boolean; error?: string; message?: string }>({
    loading: false,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    setState({ loading: true });
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setState({ loading: false, error: error.message });
      return;
    }

    setState({
      loading: false,
      message: "Check your inbox for a confirmation link to finish creating your account.",
    });
  }

  return (
    <div className="auth-card">
      <header className="auth-card__header">
        <h1>Create your account</h1>
        <p>Sign up to build your WrestleConnect profile and start connecting.</p>
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
          autoComplete="new-password"
          required
        />

        {state.error ? <p className="auth-form__error">{state.error}</p> : null}
        {state.message ? <p className="auth-form__success">{state.message}</p> : null}

        <button className="auth-form__submit" type="submit" disabled={state.loading}>
          {state.loading ? "Signing up…" : "Create account"}
        </button>
      </form>
      <footer className="auth-card__footer">
        <p>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </p>
      </footer>
    </div>
  );
}
