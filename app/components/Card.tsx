"use client";

// react imports
import Link from "next/link";

type Props = {
  href?: string; // card is clickable with "open()" only when set
  children: React.ReactNode;
};

export default function Card({ href, children }: Props) {
  if (!href) {
    return (
      <div className="flex flex-col gap-3 h-full p-4 border border-accent">
        {children}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 h-full p-4 border border-accent transition duration-300 ease-in-out hover:border-primary hover:-translate-y-1"
    >
      {children}

      <div className="mt-auto self-end text-xs md:text-sm transition duration-300 ease-in-out group-hover:text-primary">
        {"open() ->"}
      </div>
    </Link>
  );
}
