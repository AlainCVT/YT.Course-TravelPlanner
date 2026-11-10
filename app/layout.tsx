import "./globals.css";

import clsx from "clsx";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import { LocaleProvider } from "@/contexts/locale";
import { ThemeProvider } from "@/contexts/theme";
import { cn } from "@/lib/utils";

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" });

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Travel Planner | Plan Trips and Itineraries",
    template: "%s | Travel Planner",
  },
  description:
    "Plan your next adventure with Travel Planner. Organize destinations, build day-by-day itineraries, and explore every stop on an interactive map.",
  applicationName: "Travel Planner",
  keywords: [
    "travel planner",
    "trip planner",
    "travel itinerary",
    "trip itinerary",
    "destination planning",
    "interactive travel map",
  ],
  openGraph: {
    type: "website",
    siteName: "Travel Planner",
    title: "Travel Planner | Plan Trips and Itineraries",
    description:
      "Organize destinations, build day-by-day itineraries, and explore every stop on an interactive map.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Travel Planner | Plan Trips and Itineraries",
    description:
      "Organize destinations, build day-by-day itineraries, and explore every stop on an interactive map.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const session = await auth();

  return (
    <html lang="en" className={cn("font-sans", inter.variable, geistHeading.variable)}>
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          "grid min-h-screen grid-rows-[auto_1fr] antialiased",
        )}
      >
        <ThemeProvider>
          <LocaleProvider>
            <Navbar session={session} />
            <div className="pt-8 pb-12">{children}</div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
