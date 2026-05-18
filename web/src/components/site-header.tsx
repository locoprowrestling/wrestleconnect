import Image from "next/image";
import Link from "next/link";
import brandLogo from "@/assets/brand-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/wrestlers", label: "Wrestlers" },
  { href: "/promotions", label: "Promotions" },
  { href: "/schools", label: "Schools" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-brand">
          <Image
            src={brandLogo}
            alt="WrestleConnect"
            width={32}
            height={32}
            className="site-brand__logo"
            priority
          />
          <span className="site-brand__text">WrestleConnect</span>
        </Link>
        <nav className="site-nav">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="site-nav__link">
              {label}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <Link href="/sign-in" className="site-header__auth-link">
            Sign in
          </Link>
          <Link href="/sign-up" className="site-header__cta">
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
}
