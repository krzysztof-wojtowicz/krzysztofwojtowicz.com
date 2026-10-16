"use client";

// components
import ActivityCard from "./ActivityCard";

// data
import { activities } from "../data/activities";

export default function Activities() {
  return (
    <div
      id="activities"
      className="w-full flex flex-col items-start gap-4 opacity-0"
    >
      <div className="text-lg md:text-xl font-bold">
        <span className="text-primary">struct</span>
        {" activity activities[]"}
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {activities.map((activity) => (
          <ActivityCard activity={activity} key={activity.slug} />
        ))}
      </div>
    </div>
  );
}
