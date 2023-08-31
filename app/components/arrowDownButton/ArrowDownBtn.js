"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ArrDown from "@/public/images/formkit_down.svg";
import ArrDownBg from "@/public/images/formkit_down_bg.svg";

const ScrollToDownButton = () => {
  const [showButton, setShowButton] = useState(false);
  const scrollDownDistance = 500; // Adjust the distance you want to scroll down

  const scrollToDown = () => {
    const targetPosition = window.scrollY + scrollDownDistance;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
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

  return (
    <div className="" onClick={scrollToDown}>
      <Image src={ArrDown} className="mx-auto -mt-5 md:hidden cursor-pointer" />
      <Image
        src={ArrDownBg}
        className="mx-auto -mt-5 sm:hidden md:block cursor-pointer"
      />
    </div>
  );
};

export default ScrollToDownButton;
