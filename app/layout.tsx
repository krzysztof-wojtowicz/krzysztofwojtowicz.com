import "./globals.css";
import { jetbrains } from "./fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krzysztof Wójtowicz",
  description:
    "Welcome to my personal portfolio showcasing my projects and skills. Built with Next.js, Tailwind CSS, and GSAP.",
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
      </body>
    </html>
  );
}
