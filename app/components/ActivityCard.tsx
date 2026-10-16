"use client";

// components
import Card from "./Card";

// data
import type { ActivityData } from "../data/activities";

type Props = {
  activity: ActivityData;
};

export default function ActivityCard({ activity }: Props) {
  const { slug, title, short } = activity;

  return (
    <Card href={`/activities/${slug}`}>
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
