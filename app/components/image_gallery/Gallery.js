import Image from "next/image";
import AboutImage1 from "../../../public/images/hero_sm2.png";
import Svg1 from "../../../public/images/about_v.svg";
import Svg2 from "../../../public/images/sun.svg";
import Svg3 from "../../../public/images/aboutv2.svg";
import Pic1 from "../../../public/images/about_f.png";
import Pic2 from "../../../public/images/about1_f.png";
import Pic3 from "../../../public/images/about2_f.png";

export default function Gallery() {
  return (
    <div className="grid grid-cols-5 md:gap-2 gap-2 h-auto w-full md:w-11/12 md:w-6/6 mx-auto mt-8 pb-10">
      <div>
        <Image src={Svg1} className="absolute -mt-6 w-14" />
        <Image
          src={Pic1}
          className="h-[50%] w-full md:h-[70%] object-cover rounded-lg"
          style={{ marginTop: "50px" }}
        />
      </div>
      <div>
        <div>
          <Image
            src={Pic2}
            className="md:h-24 h-20 w-full object-cover rounded-lg"
          />
        </div>
        <div className="mt-2">
          {/* <Image src={Pic3} className="md:h-24 w-full rounded-lg" /> */}
          <div className="rounded-lg md:h-24 w-full md:w-full bg-gradient-to-b from-white to-gray-200">
            <div className="flex md:mx-3 md:pt-2">
              <h2 className="text-primary font-bold md:text-left text-sm">
                Date Created
              </h2>
              <Image src={Svg2} />
            </div>
            <div className="md:text-center">
              <h2>27th Aug, 1991</h2>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <Image
            src={AboutImage1}
            className="md:h-14 w-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div>
        <Image
          src={AboutImage1}
          className="md:h-[100%] w-full object-cover rounded-lg"
          style={{ marginTop: "" }}
        />
      </div>
      <div>
        <div>
          <Image
            src={AboutImage1}
            className="md:h-14 w-full object-cover rounded-lg"
          />
        </div>
        <div className="mt-2">
          <Image
            src={AboutImage1}
            className="md:h-24 w-full object-cover rounded-lg"
          />
        </div>
        <div className="mt-2">
          <Image
            src={AboutImage1}
            className="md:h-24 w-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div>
        <Image
          src={AboutImage1}
          className="md:h-[70%] w-full object-cover rounded-lg"
          style={{ marginTop: "50px" }}
        />
      </div>
    </div>
  );
}
