"use client";

// components
import Link from "next/link";

// gsap
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default function Header() {
  const tl = gsap.timeline({});

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget.textContent === "krzysztof_wójtowicz") {
      tl.to("#header-name", {
        text: "wójtowicz_krzysztof",
        duration: 0.5,
        ease: "none",
      });
    } else {
      tl.to("#header-name", {
        text: "krzysztof_wójtowicz",
        duration: 0.5,
        ease: "none",
      });
    }
  };

  return (
    <div
      id="header"
      className="w-full flex justify-between items-start md:items-center pt-4 md:pt-8 pb-2 border-b border-secondary text-sm md:text-base opacity-0"
    >
      <div
        id="header-name"
        className="font-semibold"
        onMouseEnter={(e) => {
          handleMouseEnter(e);
        }}
      >
        krzysztof_wójtowicz
      </div>
      <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-8">
        {/* <Link href="#about">{"about_me()"}</Link>
        <Link href="#projects">{"projects()"}</Link> */}
        <Link
          href="/resume_Krzysztof_Wojtowicz.pdf"
          target="_blank"
          className="transition duration-300 ease-in-out hover:text-primary"
        >
          {"get_resume()"}
        </Link>
      </div>
    </div>
  );
}
