"use client";

// react imports
import { useState, useEffect, useRef } from "react";

// types
type Props = {
  description: string;
};

export default function TextBlock({ description }: Props) {
  const [height, setHeight] = useState(0);
  const [text, setText] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry) {
        setHeight(entry.contentRect.height);
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let newText = "";

    for (let i = 1; i <= height / 20; i++) {
      newText += `${i} `;
    }

    setText(newText);
  }, [height]);

  return (
    <div className="flex flex-row gap-6 text-sm">
      <div className="w-2 text-accent pe-6 border-r border-accent">{text}</div>

      <div className="flex flex-col h-min" ref={ref}>
        <div className="text-secondary">{"/*"}</div>
        <div className="text-justify">{description}</div>
        <div className="text-secondary">{"*/"}</div>
      </div>
    </div>
  );
}
