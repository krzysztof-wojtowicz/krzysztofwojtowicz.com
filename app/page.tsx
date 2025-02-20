"use client";

// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";

// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    const tl2 = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: "#hero",
        endTrigger: "#drone_cone-project",
        start: "top",
        end: "top",
        scrub: 1,
        //markers: true,
      },
    });

    tl.fromTo("#header", { opacity: 0 }, { opacity: 1, duration: 0.3 });
    tl.fromTo("#hero-numbers", { opacity: 0 }, { opacity: 1, duration: 0.2 });

    tl.to("#whoami", { duration: 0.4, text: "//whoami?", ease: "none" });
    tl.to("#student", { duration: 0.4, text: "student;", ease: "none" });

    tl.to("#developer", {
      duration: 0.4,
      text: "developer;",
      ease: "none",
    });
    tl.to("#runner", { duration: 0.4, text: "runner;", ease: "none" });

    tl.fromTo("#hero-image", { opacity: 0 }, { opacity: 1, duration: 0.3 });

    tl.fromTo(
      ".socials",
      { opacity: 0, scale: 0.3 },
      { opacity: 1, scale: 1, stagger: 0.1, duration: 0.3, ease: "back" }
    );

    tl.fromTo(
      "#my-projects",
      { scale: 0.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back" }
    );

    tl.fromTo("#about", { opacity: 0 }, { opacity: 1, duration: 0.4 });

    tl.to("#my-projects", {
      scale: 1.05,
      y: -5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
    });

    tl2.to("#skills", { opacity: 1 });
    tl2.to("#mapple-project", { opacity: 1 });
    tl2.to("#drone_cone-project", { opacity: 1 });
    tl2.to("#playlist_pal-project", { opacity: 1 });
    tl2.to("#footer", { opacity: 1 });
  });

  return (
    <div className="flex flex-col items-center mx-6 md:mx-28">
      <Header />
      <Hero />

      <div className="flex flex-col items-center gap-16 w-full md:w-4/5">
        <AboutMe />
        <Skills />
      </div>

      <div
        id="projects"
        className="flex flex-col gap-20 md:gap-24 mt-24 md:mt-32 mb-6 md:mb-16 w-full"
      >
        <Project
          title={"mapple"}
          description={
            "Social media web app designed for orienteering enthusiasts. It allows users to share their maps and tracks with other runners, making it easier to explore, analyze, and discuss different routes and experiences."
          }
          tech='"react.js", "tailwind css", "node.js", "express.js", "mongodb", "cloudinary"'
          link={"https://mapple-app.vercel.app"}
          github_link={""}
          github_link_front={
            "https://github.com/krzysztof-wojtowicz/mapple-web-app-frontend"
          }
          github_link_back={
            "https://github.com/krzysztof-wojtowicz/mapple-web-app-backend"
          }
        />
        <Project
          title={"drone_cone"}
          description={
            "DroneCone's official website, built with modern web technologies for a fast, interactive, and visually stunning experience."
          }
          tech='"next.js", "tailwind css", "framer motion", "resend api"'
          link={"https://dronecone.pl"}
          github_link={
            "https://github.com/krzysztof-wojtowicz/dronecone-website"
          }
          github_link_front={""}
          github_link_back={""}
        />
        <Project
          title={"playlist_pal"}
          description={
            "PlaylistPal is my personal project, built to explore the integration of Spotify's Web API while delivering a seamless way for users to generate personalized playlists based on their favorite songs and artists."
          }
          tech='"next.js", "tailwind css", "gsap", "spotify web api"'
          link={"https://playlist-pal.vercel.app"}
          github_link={
            "https://github.com/krzysztof-wojtowicz/playlist-pal-spotify"
          }
          github_link_front={""}
          github_link_back={""}
        />
      </div>

      <Footer />
    </div>
  );
}
