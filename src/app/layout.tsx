import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import ButtonInView from "@/components/ButtonInView";
import { SHARE_TITLE, shareDescription } from "@/lib/pricing";
import { propertyTypes } from "@/lib/property-types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const SHARE_DESCRIPTION = shareDescription(
  Math.min(...propertyTypes.map((p) => p.price)),
  true,
);

export const metadata: Metadata = {
  metadataBase: new URL("https://clobekheritageplace.live"),
  title: "Clobek Heritage Place | Lugbe, Abuja",
  description:
    "Clobek Heritage Place is a gated, master-planned estate in Lugbe, Abuja FCT, with 6 property types from 3-bedroom terraces to 5-bedroom detached duplexes, green parks, and a community center.",
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    url: "/",
    siteName: "Clobek Heritage Place",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ButtonInView />
        {children}
      </body>
    </html>
  );
}
