"use client";

// components
import InterestCard from "./InterestCard";

// data
import { interests } from "../data/interests";

export default function Interests() {
  return (
    <div
      id="interests"
      className="w-full flex flex-col items-start gap-4 opacity-0"
    >
      <div className="text-lg md:text-xl font-bold">
        <span className="text-primary">enum</span>
        {" interests {}"}
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {interests.map((interest) => (
          <InterestCard interest={interest} key={interest.slug} />
        ))}
      </div>
    </div>
  );
}
