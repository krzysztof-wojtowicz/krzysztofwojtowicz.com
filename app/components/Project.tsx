"use client";

// react imports
import Image from "next/image";
import Link from "next/link";

// components
import TextBlock from "./TextBlock";

// icons imports
import Web from "../icons/web.svg";
import Github from "../icons/github.svg";

type Props = {
  title: string;
  description: string;
  link: string;
  github_link: string;
  github_link_front: string;
  github_link_back: string;
  tech: string;
};

export default function Project({
  title,
  description,
  link,
  github_link,
  github_link_front,
  github_link_back,
  tech,
}: Props) {
  return (
    <div
      id={`${title}-project`}
      className="flex flex-col md:flex-row gap-8 md:gap-16 items-center opacity-0"
    >
      <Image
        src={`/img/${title}_both.png`}
        alt={`${title} screenshots`}
        width={2500}
        height={1500}
        className="w-4/5 md:w-1/3"
      />
      <div className="flex flex-col gap-6">
        <span className="text-xl text-primary font-bold">{title}</span>
        <TextBlock description={description} />
        <div className="text-sm">
          <span className="text-primary">tech</span>
          {` = {${tech}}`}
        </div>
        <div className="flex flex-wrap md:flex-row gap-4 md:gap-6 text-sm items-center">
          <Link
            className="flex flex-row gap-2 items-center transition duration-300 ease-in-out hover:text-primary"
            href={link}
            target="_blank"
          >
            <Web width={25} height={25} />
            <div>{"visit()"}</div>
          </Link>
          {github_link && (
            <Link
              className="flex flex-row gap-2 items-center transition duration-300 ease-in-out hover:text-primary"
              href={github_link}
              target="_blank"
            >
              <Github width={25} height={25} />
              <div>{"read_me()"}</div>
            </Link>
          )}
          {github_link_front && (
            <Link
              className="flex flex-row gap-2 items-center transition duration-300 ease-in-out hover:text-primary"
              href={github_link_front}
              target="_blank"
            >
              <Github width={25} height={25} />
              <div>{"read_me(frontend)"}</div>
            </Link>
          )}
          {github_link_back && (
            <Link
              className="flex flex-row gap-2 items-center transition duration-300 ease-in-out hover:text-primary"
              href={github_link_back}
              target="_blank"
            >
              <Github width={25} height={25} />
              <div>{"read_me(backend)"}</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
