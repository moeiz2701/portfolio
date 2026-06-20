import type { Metadata, Viewport } from "next";
import { display, sans, mono, pixel } from "@/lib/fonts";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { SideRail } from "@/components/layout/SideRail";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://cv-teal-chi.vercel.app"
  ),
  title: "Abdul Moeiz — Full-Stack & AI Engineer",
  description:
    "Full-Stack Engineer building production web apps and AI/automation systems in Next.js, NestJS, and PostgreSQL.",
  openGraph: {
    title: "Abdul Moeiz — Full-Stack & AI Engineer",
    description:
      "Full-Stack Engineer building production web apps and AI/automation systems.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} ${pixel.variable}`}
    >
      <body>
        <SmoothScroll>
          <SideRail />
          <Header />
          <main id="top">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
