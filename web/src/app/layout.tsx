import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const headingFont = Manrope({
  variable: "--wc-font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

const bodyFont = Inter({
  variable: "--wc-font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const displayFont = Space_Grotesk({
  variable: "--wc-font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "WrestleConnect",
  description:
    "Connecting independent wrestlers, promotions, and schools through verified profiles and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${displayFont.variable}`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
