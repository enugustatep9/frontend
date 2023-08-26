"use client";
import React from "react";
import Frame1 from "@/public/images/tech_frame_1.png";
import Frame2 from "@/public/images/tech_frame_2.png";
import Frame3 from "@/public/images/tech_frame_3.png";
import Frame4 from "@/public/images/tech_frame_4.png";
import Frame5 from "@/public/images/tech_frame_5.png";
import Frame6 from "@/public/images/tech_frame_6.png";
import Image from "next/image";

const TechCard = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-10 grid-cols-1 mb-10">
        <Image src={Frame1} alt="tech frame" />
        <Image src={Frame2} alt="tech frame" />
        <Image src={Frame3} alt="tech frame" />
        <Image src={Frame4} alt="tech frame" />
        <Image src={Frame5} alt="tech frame" />
        <Image src={Frame6} alt="tech frame" />
      </div>
    </>
  );
};

export default TechCard;
