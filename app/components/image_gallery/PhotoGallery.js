import "@/app/components/image_gallery/gallery.css";
import Image from "next/image";
import Pic1 from "@/public/images/frame1n.png";
import Pic2 from "@/public/images/frame2n.png";
import Pic3 from "@/public/images/frame3n.png";
import Pic4 from "@/public/images/frame4n.png";
import Pic5 from "@/public/images/frame5n.png";
import Pic6 from "@/public/images/frame6n.png";
import Pic7 from "@/public/images/frame7n.png";
import Svg1 from "@/public/images/sun.svg";
import Svg3 from "@/public/images/v4.svg";
import Svg2 from "@/public/images/v1.svg";

export default function PhotoGallery() {
  return (
    <>
      <Image src={Svg3} className="absolute left-44 mt-16 hidden md:block" />
      <Image src={Svg2} className="absolute right-44 mt-24 md:block hidden" />

      <div class="container ">
        <Image className="object-cover box a" src={Pic1} />
        <Image className="object-cover box b" src={Pic2} />
        <Image className="object-cover box c" src={Pic4} />
        <Image className="object-cover box d" src={Pic6} />

        <Image className="object-cover box e" src={Pic5} />

        <div className="object-cover box f  bg-white bg-gradient-to-b from-white to-gray-200">
          <div className="flex justify-between p-5">
            <h1 className="md:text-[16px] font-[Clash Display] w-[97.25px] md:w-[73px] md:h-[28px] md:top-[21.5] md:text-left text-primary md:font-bold md:left-[35px]">
              Nick Named
            </h1>
            <Image src={Svg1} />
          </div>
          <div className="mdw-[174px] md:h-[127px] md:top-[69.5px]">
            <h1 className="md:top-[69px] md:p-5 md:w-[107px] md:text-[32px] md:leading-[29.5px] font-bold ">
              Coal Cityyy
            </h1>
          </div>
        </div>
        <div className="object-cover box g  bg-white bg-gradient-to-b from-white to-gray-200">
          <div className="flex justify-between p-5">
            <h1 className="md:text-[16px] font-[Clash Display] w-[97.25px] md:w-[73px] md:h-[28px] md:top-[21.5] md:text-left text-primary font-bold md:left-[35px]">
              Nick Named
            </h1>
            <Image src={Svg1} />
          </div>
          <div className="md:-[174px] md:h-[127px] md:top-[69.5px]">
            <h1 className="md:top-[69px] md:-5 md:w-[107px] md:text-[32px] md:leading-[29.5px] font-bold ">
              Coal City
            </h1>
          </div>
        </div>
        <Image className="object-cover box h" src={Pic3} />
        <Image className="object-cover box m" src={Pic7} />
      </div>
    </>
  );
}
