"use client";
import React from "react";
import Frame1 from "@/public/images/tech_frame_1.png";
import Frame2 from "@/public/images/tech_frame_2.png";
import Frame3 from "@/public/images/tech_frame_2.png";
import Frame4 from "@/public/images/tech_frame_3.png";
import Frame5 from "@/public/images/tech_frame_3.png";
import Frame6 from "@/public/images/tech_frame_4.png";
import Image from "next/image";
import AllCardComp from "./AllCardComp";

const AllCard = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-5 grid-cols-1 sm:mb-10 md:mb-2">
        <AllCardComp
          img_url={Frame1}
          roi="20%roi"
          text="Harnessing the power of AI"
        />
        <AllCardComp img_url={Frame2} roi="20%roi" text="Virttual Reality" />
        <AllCardComp img_url={Frame3} roi="20%roi" text="Virttual Reality" />
        <AllCardComp
          img_url={Frame4}
          roi="20%roi"
          text="Artificial intelligence xHumans"
        />
        <AllCardComp
          img_url={Frame5}
          roi="20%roi"
          text="Artificial intelligence xHumans"
        />
        <AllCardComp
          img_url={Frame6}
          roi="20%roi"
          text="Biometrics Research and implementation"
        />
      </div>
    </>
  );
};

export default AllCard;
