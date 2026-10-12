"use client";

// react imports
import Link from "next/link";

// components
import Header from "./Header";
import Footer from "./Footer";

// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

type Props = {
  back?: string; // where "cd .." leads to, hidden when not set
  children: React.ReactNode;
};

export default function SubpageShell({ back, children }: Props) {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo("#header", { opacity: 0 }, { opacity: 1, duration: 0.3 });
    tl.fromTo("#subpage-content", { opacity: 0 }, { opacity: 1, duration: 0.4 });
    tl.fromTo("#footer", { opacity: 0 }, { opacity: 1, duration: 0.3 });
  });

  return (
    <div className="flex flex-col items-center mx-6 md:mx-28 min-h-screen">
      <Header />

      <div
        id="subpage-content"
        className="flex flex-col gap-8 md:gap-12 w-full md:w-4/5 pt-8 md:pt-16 opacity-0"
      >
        {back && (
          <Link
            href={back}
            className="self-start text-base md:text-lg font-semibold text-secondary transition duration-300 ease-in-out hover:text-primary"
          >
            {"cd .."}
          </Link>
        )}
        {children}
      </div>

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
}
