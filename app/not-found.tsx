// react imports
import Link from "next/link";
import type { Metadata } from "next";

// components
import SubpageShell from "./components/SubpageShell";
import TextBlock from "./components/TextBlock";

export const metadata: Metadata = {
  title: "404 | Krzysztof Wójtowicz",
};

export default function NotFound() {
  return (
    <SubpageShell>
      <div className="flex flex-col items-start gap-6 md:gap-8">
        <div className="text-5xl md:text-7xl font-bold">
          <span className="text-secondary">{"//"}</span>
          <span className="text-primary">404</span>
        </div>
        <div className="text-lg md:text-xl font-bold">
          <span className="text-primary">throw</span>
          {" page_not_found();"}
        </div>
        <TextBlock description="Looks like this page doesn't exist or has been moved. Let's get you back on track." />
        <Link
          href="/"
          className="text-base md:text-lg font-semibold transition duration-300 ease-in-out hover:text-primary"
        >
          {"return main();"}
        </Link>
      </div>
    </SubpageShell>
  );
}
