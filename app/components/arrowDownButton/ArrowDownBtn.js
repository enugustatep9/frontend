"use client";
import { useState, useEffect } from "react";
import icon from "@/public/images/chev_down-white.svg";
import Image from "next/image";

const ScrollToDownButton = () => {
  const [showButton, setShowButton] = useState(false);
  const scrollToDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <Image src={icon} className="absolute mx-auto mt-[150px]" />;
};

export default ScrollToDownButton;
