"use client";
// HorizontalScrollContainer.js
import "@/app/about/test.css"; // Import your CSS file

import React, { useRef, useEffect } from "react";

const HorizontalScrollContainer = ({ children }) => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    container.addEventListener("mousemove", (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3; // Adjust scroll speed here
      container.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <div ref={containerRef} className="horizontal-scroll-container">
      {children}
    </div>
  );
};

export default HorizontalScrollContainer;
