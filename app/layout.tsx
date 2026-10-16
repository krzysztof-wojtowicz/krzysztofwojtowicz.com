import "./globals.css";
import { jetbrains } from "./fonts";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const description =
  "Personal website of Krzysztof Wójtowicz, Computer Science student at Warsaw University of Technology and web developer. Projects, student activities, JetBrains Campus Ambassador work and orienteering.";

export const metadata: Metadata = {
  // base for absolute urls in link previews, sitemap and robots
  metadataBase: new URL("https://krzysztofwojtowicz.com"),
  title: "Krzysztof Wójtowicz",
  description,
  // link previews (linkedin, messenger etc.), image from app/opengraph-image
  openGraph: {
    title: "Krzysztof Wójtowicz",
    description,
    url: "/",
    siteName: "Krzysztof Wójtowicz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`${jetbrains.className} bg-background text-text`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
