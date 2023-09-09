"use client";
import Image from "next/image";
import { useState } from "react";
import slantArrow from "@/public/images/arrow_slant_green.svg";

export default function AllCardComp({ img_url, roi, text }) {
  const [isHovered, setIsHovered] = useState(false);
  const [divHeight, setDivHeight] = useState(130);
  const [buttonBox, setButtonBox] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setDivHeight(170);
    setButtonBox(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setDivHeight(130);
    setButtonBox(false);
  };
  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-[100%] mt-2 relative md:h-[441px] `}
      >
        <Image
          src={img_url}
          className="rounded-[12px] transform-gpu scale-100 transition-transform duration-500"
        />
        <div
          style={{ backdropFilter: "blur(2.5px)", height: divHeight }}
          className={`absolute sm:bottom-[7px] md:bottom-[10px] bg-white bg-opacity-80 bg-clip-padding mx-auto left-0 right-0 sm:w-[95%] md:w-[95%] rounded-[12px] sm:p-5 md:p-10 transition-all duration-500 ${
            isHovered ? divHeight : ""
          }`}
        >
          <button className="bg-primary text-white text-[12px] rounded-[48px] pl-4 py-1 pr-4 font-bold">
            {roi}
          </button>
          <p className="font-bold text-[20px] leading-[20px] mt-2">{text}</p>
          {buttonBox && (
            <div className="flex gap-2 mt-2 ">
              <button className="bg-secondary text-primary text-[12px] rounded-[48px] pl-5 py-2 pr-5 font-bold transition-all duration-500">
                Invest
              </button>
              <Image
                className="w-10 transition-all duration-700"
                src={slantArrow}
                alt="click to invest"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
