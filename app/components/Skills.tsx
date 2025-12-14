"use client";

// react imports
import Image from "next/image";

export default function Skills() {
  const skillsList = [
    "c",
    "c++",
    "csharp",
    "matlab",
    "python",
    "javascript",
    "typescript",
    "reactjs",
    "nextjs",
    "tailwindcss",
    "gsap",
    "nodejs",
    "expressjs",
    "flask",
    "mongodb",
    "mysql",
    "docker",
    "vercel",
    "postman",
    "figma",
  ];

  return (
    <div
      id="skills"
      className="w-full flex flex-col items-start gap-4 opacity-0"
    >
      <div className="text-lg md:text-xl font-bold">
        <span className="text-primary">char</span>
        {"* skills[]"}
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-5 md:gap-y-5 justify-evenly md:justify-start">
        {skillsList.map((item, index) => (
          <div
            className="flex flex-row gap-1 md:gap-2 items-center"
            key={index}
          >
            <div className="w-6 md:w-8 aspect-square relative">
              <Image
                fill
                className="object-cover"
                src={`/icons/${item}.svg`}
                alt={`${item} logo`}
              />
            </div>

            <span className="text-sm">{`"${item}",`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
