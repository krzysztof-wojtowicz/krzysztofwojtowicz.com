"use client";

// components
import TextBlock from "./TextBlock";

export default function AboutMe() {
  return (
    <div id="about" className="flex flex-col items-start gap-4 opacity-0">
      <div className="text-lg md:text-xl font-bold">
        <span className="text-primary">void</span>
        {" about_me()"}
      </div>
      <div className="">
        <TextBlock
          description="Hey! I’m Krzysztof Wójtowicz, a web developer, currently studying
        Computer Science at Warsaw University of Technology. When I’m not
        coding, I enjoy running and orienteering — navigating both complex
        terrains and intricate code with the same drive for discovery."
        />
      </div>
    </div>
  );
}
