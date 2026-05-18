"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="auth-shell">
      <header className="auth-shell__header">
        <Link href="/" className="auth-shell__brand">
          <span className="auth-shell__brand-mark">WC</span>
          <span className="auth-shell__brand-text">WrestleConnect</span>
        </Link>
      </header>
      <main className="auth-shell__main">{children}</main>
      <footer className="auth-shell__footer">
        <p>&copy; {new Date().getFullYear()} WrestleConnect. All rights reserved.</p>
        <div className="auth-shell__footer-links">
          <Link href="/">Home</Link>
          <Link href="/wrestlers">Wrestlers</Link>
          <Link href="/promotions">Promotions</Link>
          <Link href="/schools">Schools</Link>
        </div>
      </footer>
    </div>
  );
}
