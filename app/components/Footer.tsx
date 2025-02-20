"use client";

// react imports
import Link from "next/link";

export default function Footer() {
  return (
    <div
      id="footer"
      className="w-full flex flex-col gap-8 items-center pb-8 mt-20 border-t border-secondary opacity-0"
    >
      <div className="mt-2 font-bold text-sm md:text-base">
        want to connect?
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 font-light text-xs md:text-sm">
        <Link
          href="https://www.linkedin.com/in/wojtowicz-k"
          target="_blank"
          className="transition duration-300 ease-in-out hover:text-primary"
        >
          linkedin
        </Link>
        <Link
          href="https://github.com/krzysztof-wojtowicz"
          target="_blank"
          className="transition duration-300 ease-in-out hover:text-primary"
        >
          github
        </Link>
        <Link
          href="mailto:kwojt13@gmail.com"
          target="_blank"
          className="transition duration-300 ease-in-out hover:text-primary"
        >
          kwojt13@gmail.com
        </Link>
        <Link
          href="https://www.strava.com/athletes/43606833"
          target="_blank"
          className="transition duration-300 ease-in-out hover:text-primary"
        >
          strava
        </Link>
        <Link
          href="https://www.youtube.com/@kwojtowicz"
          target="_blank"
          className="transition duration-300 ease-in-out hover:text-primary"
        >
          youtube
        </Link>
      </div>
      <div className="text-[11px] md:text-xs flex flex-col items-center text-secondary">
        <span>made with 🧡 using next.js, tailwindcss and gsap</span>
        <span>©2025 Krzysztof Wójtowicz</span>
      </div>
    </div>
  );
}
