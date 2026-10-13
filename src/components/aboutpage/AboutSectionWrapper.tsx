import React, { useEffect, useState, useRef } from "react";
import { AboutImpact } from "./AboutImpact";
import { AboutPetProject } from "./AboutPetProject";

export function AboutSectionWrapper() {
  const [isDark, setIsDark] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const isVisible =
        rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.3;

      setIsDark(isVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    body.style.transition =
      "background-color 0.7s cubic-bezier(0.16, 1, 0.3, 1)";

    if (isDark) {
      body.style.backgroundColor = "#0A0D14";
    } else {
      body.style.backgroundColor = "";
    }

    return () => {
      body.style.backgroundColor = "";
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className="w-full relative flex flex-col gap-0 my-20 sm:my-32"
    >
      <AboutImpact isDark={isDark} />
      <AboutPetProject isDark={isDark} />
    </div>
  );
}