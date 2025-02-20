"use client";

// icons imports
import Linkedin from "../icons/linkedin.svg";
import Github from "../icons/github.svg";
import Mail from "../icons/mail.svg";
import Strava from "../icons/strava.svg";
import Youtube from "../icons/youtube.svg";
import ArrowDown from "../icons/arrow-down.svg";

// react imports
import Link from "next/link";
import Image from "next/image";

// gsap
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollToPlugin, TextPlugin);

export default function Hero() {
  const handleButton = () => {
    gsap.to(window, { duration: 1, scrollTo: "#projects" });
  };

  const tl = gsap.timeline({});

  const handleMouseEnterStudent = () => {
    tl.to("#student", { text: "at @wut;", duration: 0.3, ease: "none" });
  };

  const handleMouseLeaveStudent = () => {
    tl.to("#student", { text: "student;", duration: 0.3, ease: "none" });
  };

  const handleMouseEnterRunner = () => {
    tl.to("#runner", { text: "@unts waw;", duration: 0.3, ease: "none" });
  };

  const handleMouseLeaveRunner = () => {
    tl.to("#runner", { text: "runner;", duration: 0.3, ease: "none" });
  };

  const handleIconEnter = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    gsap.to(`#${e.currentTarget.id}`, {
      scale: 1.3,
      duration: 0.3,
      fill: "#D9DBDF",
    });
  };

  const handleIconLeave = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    gsap.to(`#${e.currentTarget.id}`, { scale: 1, duration: 0.3 });
  };

  return (
    <div
      id="hero"
      className="flex flex-col pb-16 pt-8 md:pt-16 gap-12 md:gap-16 w-full items-center"
    >
      <div className="w-full md:justify-around items-center flex flex-col md:flex-row gap-6 md:gap-0">
        {/* whoami? */}
        <div className="flex flex-row gap-6 text-3xl md:text-5xl">
          <div
            id="hero-numbers"
            className="flex flex-col gap-2 border-r-2 border-accent text-accent pe-2 opacity-0"
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>

          <div className="flex flex-col gap-2 font-bold w-48 md:w-72">
            <div id="whoami" className="text-secondary"></div>
            <div
              id="student"
              className=""
              onMouseEnter={handleMouseEnterStudent}
              onMouseLeave={handleMouseLeaveStudent}
            ></div>
            <div id="developer" className="text-primary"></div>
            <div
              id="runner"
              className=""
              onMouseEnter={handleMouseEnterRunner}
              onMouseLeave={handleMouseLeaveRunner}
            ></div>
          </div>
        </div>
        {/* image with socials */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div
            id="hero-image"
            className="flex flex-col gap-4 items-center opacity-0"
          >
            <div className="relative w-52 md:w-64 aspect-square rounded-full overflow-clip">
              <Image
                priority
                src="/img/me.png"
                alt="my photo"
                fill
                className="object-cover"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)",
                  maskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)",
                }}
              />
            </div>

            <div className="text-text font-extralight text-sm">
              warsaw, poland 🇵🇱
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center justify-center gap-4 text-secondary">
            <Link
              className="socials opacity-0 flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-text"
              href="https://www.linkedin.com/in/wojtowicz-k"
              target="_blank"
              onMouseEnter={(e) => {
                handleIconEnter(e);
              }}
              onMouseLeave={(e) => {
                handleIconLeave(e);
              }}
              id="linkedin-icon"
            >
              <Linkedin width={35} height={35} />
            </Link>

            <Link
              className="socials opacity-0 flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-text"
              href="https://github.com/krzysztof-wojtowicz"
              target="_blank"
              onMouseEnter={(e) => {
                handleIconEnter(e);
              }}
              onMouseLeave={(e) => {
                handleIconLeave(e);
              }}
              id="github-icon"
            >
              <Github width={35} height={35} />
            </Link>

            <Link
              className="socials opacity-0 flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-text"
              href="mailto:kwojt13@gmail.com"
              target="_blank"
              onMouseEnter={(e) => {
                handleIconEnter(e);
              }}
              onMouseLeave={(e) => {
                handleIconLeave(e);
              }}
              id="mail-icon"
            >
              <Mail width={40} height={40} />
            </Link>

            <Link
              className="socials opacity-0 flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-text"
              href="https://www.strava.com/athletes/43606833"
              target="_blank"
              onMouseEnter={(e) => {
                handleIconEnter(e);
              }}
              onMouseLeave={(e) => {
                handleIconLeave(e);
              }}
              id="strava-icon"
            >
              <Strava width={35} height={35} />
            </Link>

            <Link
              className="socials opacity-0 flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-text"
              href="https://www.youtube.com/@kwojtowicz"
              target="_blank"
              onMouseEnter={(e) => {
                handleIconEnter(e);
              }}
              onMouseLeave={(e) => {
                handleIconLeave(e);
              }}
              id="youtube-icon"
            >
              <Youtube width={35} height={35} />
            </Link>
          </div>
        </div>
      </div>

      <button
        className="flex flex-row items-center opacity-0"
        onClick={handleButton}
        id="my-projects"
      >
        <ArrowDown width={30} height={30} fill={"#7A7E85"} />
        <div className="text-lg">{"my_projects"}</div>
        <ArrowDown width={30} height={30} fill={"#7A7E85"} />
      </button>
    </div>
  );
}
