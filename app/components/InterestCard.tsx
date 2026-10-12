"use client";

// components
import Card from "./Card";

// data
import type { InterestData } from "../data/interests";

type Props = {
  interest: InterestData;
  clickable?: boolean; // false on the interest's own subpage
};

export default function InterestCard({ interest, clickable = true }: Props) {
  const { slug, title, short } = interest;

  return (
    <Card href={clickable ? `/interests/${slug}` : undefined}>
      <span className="text-base md:text-lg text-primary font-bold">
        {title}
      </span>

      <div className="text-xs md:text-sm">
        <span className="text-secondary">{"/* "}</span>
        {short}
        <span className="text-secondary">{" */"}</span>
      </div>
    </Card>
  );
}
