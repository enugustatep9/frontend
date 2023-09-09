import Pic1 from "@/public/images/grid_1.png";
import Pic2 from "@/public/images/grid_2.png";
import Pic3 from "@/public/images/grid_3.png";
import Pic9 from "@/public/images/grid_4.png";
import Pic4 from "@/public/images/frame4n.png";
import MidGrid from "@/public/images/mid_grid.png";
import Pic6 from "@/public/images/grid_5.png";
import Pic7 from "@/public/images/frame7n.png";
import Svg1 from "@/public/images/sun.svg";
import Svg3 from "@/public/images/v4.svg";
import Svg2 from "@/public/images/v1.svg";
import Icon from "@/public/images/gallery_icon1.svg";
import Icon2 from "@/public/images/gallery_icon3.svg";
import Icon3 from "@/public/images/gallery_icon4.svg";

import Image from "next/image";
import GalleryCard from "../about/Gallery_card";

export default function PhotoGalleryDemo() {
  return (
    <>
      <Image
        src={Svg3}
        className="absolute md:block md:left-20 md:mt-28 lg:left-32 lg:mt-[105px] hidden lg:block"
      />
      <Image
        src={Icon2}
        className="absolute right-0 -mt-14 md:hidden sm:block"
      />
      <Image
        src={Svg2}
        className="absolute md:block md:right-20 md:mt-28 lg:right-40 lg:mt-24 lg:block hidden"
      />
      <Image
        src={Svg2}
        className="absolute w-10 left-5 -mt-5 sm:block md:hidden"
      />
      <div
        className="sm:overflow-x-auto md:overflow-x-auto"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="grid grid-cols-5 sm:w-[487.611px] md:w-[100%] lg:w-[90%] md:mx-auto lg:mx-auto lg:gap-3 gap-2 md:mt-[100px] sm:mt-[100px]">
          {/* first col */}
          <div className="flex items-center">
            <Image
              src={Pic2}
              className="md:h-[317px] rounded-[8px] md:w-[100%] lg:w-[100%]"
            />
          </div>
          <Image
            src={Icon}
            className="absolute lg:block hidden md:block md:mt-[470px] md:left-[50px] lg:mt-[465px] lg:left-[200px]"
          />
          {/* second col */}
          <div className="flex flex-col">
            <div>
              <Image
                src={Pic3}
                className="md:h-[190px] md:md:w-[100%] sm:h-[90.14px] sm:w-[97.25px]"
              />
            </div>
            <GalleryCard name="Date Created" date="27th Aug, 91" />
            <div>
              <Image
                src={Pic9}
                className="md:h-[55px] sm:mt-2 md:mt-3 md:w-[100%] sm:h-[26.09px] sm:w-[97.25px]"
              />
            </div>
          </div>
          {/* third col */}
          <div>
            <Image
              src={MidGrid}
              className="sm:h-[251.91px] sm:w-[119.55px] md:h-[505px] md:w-[100%]"
            />
          </div>
          {/* fourth col */}
          <div className="flex flex-col">
            <div>
              <Image
                src={Pic6}
                className="md:h-[55px] md:w-[100%] sm:w-[97.25px] sm:h-[26.09px]"
              />
            </div>
            <div>
              <GalleryCard name="Nick Named" date="Coal City" />
            </div>
            <div>
              <Image
                src={Pic7}
                className="md:h-[190px] sm:mt-2 md:mt-3 md:w-[100%] sm:h-[101.05px] sm:w-[97.25px] rounded-[4px]"
              />
            </div>
          </div>
          {/* last col */}
          <div className="flex items-center">
            <Image
              src={Pic1}
              className="md:h-[317px] rounded-[8px] md:w-[100%]"
            />
          </div>
        </div>
      </div>
      <Image
        src={Icon3}
        className="absolute w-10 left-0 -mt-5 sm:block md:hidden"
      />
    </>
  );
}
