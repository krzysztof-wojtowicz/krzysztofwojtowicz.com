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
          description="Hey! I’m Krzysztof Wójtowicz, a software engineer currently 
        studying Computer Science (3rd year) at the Faculty of Mathematics and Information Science 
        (Warsaw University of Technology). Beyond the code, I’m an active member of the 
        Student Council and JetBrains Campus Ambassador. In my free time, I enjoy running and orienteering — navigating 
        complex terrains, student initiatives and intricate code with the same drive for discovery."
        />
      </div>
    </div>
  );
}
