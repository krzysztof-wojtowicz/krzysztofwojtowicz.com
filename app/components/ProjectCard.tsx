"use client";

// react imports
import Image from "next/image";

// components
import Card from "./Card";

// data
import type { ProjectData } from "../data/projects";

type Props = {
  project: ProjectData;
};

// how many tech items are shown on the card before "..."
const TECH_PREVIEW = 3;

export default function ProjectCard({ project }: Props) {
  const { slug, title, year, short, image, tech } = project;

  const techPreview = tech
    .slice(0, TECH_PREVIEW)
    .map((item) => `"${item}"`)
    .join(", ");

  return (
    <Card href={`/projects/${slug}`}>
      {image && (
        <div className="relative w-full h-24 md:h-28">
          <Image
            src={image}
            alt={`${title} screenshots`}
            fill
            sizes="(min-width: 640px) 200px, 160px"
            className="object-contain"
          />
        </div>
      )}

      <div className="flex flex-row justify-between items-baseline gap-2">
        <span className="text-base md:text-lg text-primary font-bold">
          {title}
        </span>
        <span className="text-sm md:text-base text-secondary">{`// ${year}`}</span>
      </div>

      <div className="text-xs md:text-sm">
        <span className="text-secondary">{"/* "}</span>
        {short}
        <span className="text-secondary">{" */"}</span>
      </div>

      <div className="text-xs text-secondary">
        {`{${techPreview}${tech.length > TECH_PREVIEW ? ", ..." : ""}}`}
      </div>
    </Card>
  );
}
