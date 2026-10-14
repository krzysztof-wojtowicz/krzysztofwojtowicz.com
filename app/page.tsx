"use client";

// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
// import Skills from "./components/Skills"; // hidden for now
import Projects from "./components/Projects";
import Interests from "./components/Interests";
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
        endTrigger: "#footer",
        start: "top",
        end: "bottom bottom",
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
      { opacity: 1, scale: 1, stagger: 0.1, duration: 0.3, ease: "back" },
    );

    tl.fromTo(
      "#my-projects",
      { scale: 0.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back" },
    );

    tl.fromTo("#about", { opacity: 0 }, { opacity: 1, duration: 0.4 });

    tl.to("#my-projects", {
      scale: 1.05,
      y: -5,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
    });

    // tl2.to("#skills", { opacity: 1 }); // hidden for now
    tl2.to("#projects", { opacity: 1 });
    tl2.to("#interests", { opacity: 1 });
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
        <Interests />
      </div>

      <Footer />
    </div>
  );
}
