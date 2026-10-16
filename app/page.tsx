"use client";

// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
// import Skills from "./components/Skills"; // hidden for now
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Footer from "./components/Footer";

// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    const tl2 = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: "#hero",
        endTrigger: "#footer",
        start: "top",
        end: "bottom bottom",
        scrub: 1,
        //markers: true,
      },
    });

    tl.fromTo("#header", { opacity: 0 }, { opacity: 1, duration: 0.2 });
    tl.fromTo("#hero-numbers", { opacity: 0 }, { opacity: 1, duration: 0.15 });

    // photo, socials and about me reveal while the whoami text is typed
    tl.addLabel("typing");

    tl.to("#whoami", { duration: 0.25, text: "//whoami?", ease: "none" });
    tl.to("#student", { duration: 0.25, text: "student;", ease: "none" });

    tl.to("#developer", {
      duration: 0.25,
      text: "developer;",
      ease: "none",
    });
    tl.to("#runner", { duration: 0.25, text: "runner;", ease: "none" });

    tl.fromTo(
      "#my-projects",
      { scale: 0.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.3, ease: "back" },
    );

    tl.fromTo(
      "#hero-image",
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
      "typing",
    );

    tl.fromTo(
      ".socials",
      { opacity: 0, scale: 0.3 },
      { opacity: 1, scale: 1, stagger: 0.06, duration: 0.25, ease: "back" },
      "typing+=0.2",
    );

    tl.fromTo(
      "#about",
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
      "typing+=0.5",
    );

    tl.to("#my-projects", {
      scale: 1.05,
      y: -5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
    });

    // tl2.to("#skills", { opacity: 1 }); // hidden for now
    tl2.to("#projects", { opacity: 1 });
    tl2.to("#activities", { opacity: 1 });
    tl2.to("#footer", { opacity: 1 });
  });

  return (
    <div className="flex flex-col items-center mx-6 md:mx-28">
      <Header />
      <Hero />

      <div className="flex flex-col items-center gap-16 w-full md:w-4/5">
        <AboutMe />
        {/* <Skills /> hidden for now */}
        <Projects />
        <Activities />
      </div>

      <Footer />
    </div>
  );
}
