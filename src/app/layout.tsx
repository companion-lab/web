import type { Metadata } from "next";
import { Inter, DM_Serif_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Companion — Your Privacy-First AI Coworker",
  description:
    "Companion gives every team member a personal AI agent connected to your organization's knowledge. Attend meetings, capture decisions, and ask anything — all on your own private infrastructure.",
  keywords: [
    "AI coworker",
    "meeting intelligence",
    "organizational knowledge",
    "privacy-first AI",
    "self-hosted AI",
    "knowledge management",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        dmSerifDisplay.variable,
        ibmPlexMono.variable
      )}
    >
      <body className="font-[var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
