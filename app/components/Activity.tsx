"use client";

// react imports
import Image from "next/image";

// components
import TextBlock from "./TextBlock";

// data
import type { ActivityData, ActivitySection } from "../data/activities";

type Props = {
  activity: ActivityData;
};

function Section({
  heading,
  description,
  tags,
  stats,
  photos,
}: ActivitySection) {
  return (
    <div className="flex flex-col gap-6">
      {heading && (
        <div className="text-lg md:text-xl font-bold">
          <span className="text-primary">void</span>
          {` ${heading}()`}
        </div>
      )}

      <TextBlock description={description} />

      {tags && (
        <div className="text-sm">
          <span className="text-primary">tags</span>
          {` = {${tags.map((item) => `"${item}"`).join(", ")}}`}
        </div>
      )}

      {stats && (
        <div className="text-sm">
          <span className="text-primary">stats</span>
          {" = {"}
          {Object.entries(stats).map(([key, value], index) => (
            <span key={key}>
              {index > 0 && ", "}
              <span className="text-secondary">{`${key}: `}</span>
              {value}
            </span>
          ))}
          {"}"}
        </div>
      )}

      {photos && (
        <div
          className={`flex flex-col md:flex-row gap-8 items-start ${photos.length === 1 ? "md:w-1/2" : ""}`}
        >
          {photos.map((photo) => (
            <figure
              key={photo.src}
              // width proportional to aspect ratio = same height in a row
              style={
                {
                  "--ratio": photo.width / photo.height,
                } as React.CSSProperties
              }
              className="flex flex-col gap-3 w-full min-w-0 md:[flex:var(--ratio)_1_0%]"
            >
              {/* opens the full size photo, useful for map details */}
              <a href={photo.src} target="_blank">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 768px) 50vw, 90vw"
                  // single photo keeps its width but tall portraits are capped
                  className={`h-auto border border-accent transition duration-300 ease-in-out hover:scale-[1.02] ${photos.length === 1 ? "w-auto max-w-full md:max-h-[24rem]" : "w-full"}`}
                />
              </a>
              <figcaption className="text-xs md:text-sm text-secondary">
                {`// ${photo.caption}`}
                {photo.credit && ` (${photo.credit})`}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Activity({ activity }: Props) {
  const { slug, title, logo, sections } = activity;

  return (
    <div id={`${slug}-activity`} className="flex flex-col gap-6 w-full">
      <div className="flex flex-row flex-wrap justify-between items-center gap-4">
        <span className="text-2xl md:text-3xl text-primary font-bold">
          {title}
        </span>
        {logo && (
          <Image
            src={logo.src}
            alt={logo.alt}
            width={300}
            height={100}
            className="w-auto h-10 md:h-14"
          />
        )}
      </div>

      <div className="flex flex-col gap-16 md:gap-20">
        {sections.map((section, index) => (
          <Section {...section} key={index} />
        ))}
      </div>
    </div>
  );
}
