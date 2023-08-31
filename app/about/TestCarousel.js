// YourNextPage.js
import React from "react";
import Image1 from "@/public/images/tech_frame_1.png";
import Image2 from "@/public/images/tech_frame_2.png";
import Image3 from "@/public/images/tech_frame_3.png";
import HorizontalScrollContainer from "./test";
import Image from "next/image";
// ... import your images

const YourNextPage = () => {
  return (
    <div>
      <h1>Your Page Title</h1>
      <p>Your page content...</p>

      <HorizontalScrollContainer>
        <div className="horizontal-scroll-item">
          <Image src={Image1} alt="Image 1" />
        </div>
        <div className="horizontal-scroll-item">
          <Image src={Image2} alt="Image 2" />
        </div>
        <div className="horizontal-scroll-item">
          <Image src={Image3} alt="Image 3" />
        </div>
        {/* Add more items as needed */}
      </HorizontalScrollContainer>

      <p>More content...</p>
    </div>
  );
};

export default YourNextPage;
