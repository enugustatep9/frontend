import Image from "next/image";
import Button from "../components/button/Button";
import Svg1 from "@/public/images/about_desktop.svg";
import Svg2 from "@/public/images/login.svg";
import Svg4 from "@/public/images/smcardone.svg";
import Img from "@/public/images/about_desktop1.png";
import Imgdemo from "@/public/images/about_demo.png";
import imgD from "@/public/images/about_desktop2.png";
import imgD1 from "@/public/images/about_desktop3.png";
import imgD2 from "@/public/images/about_desktop4.png";
import Img2 from "@/public/images/about_mobile.png";
import Img3 from "@/public/images/about_mobile2.png";
import Img4 from "@/public/images/about_mobile3.png";
import Svg3 from "@/public/images/arrow_login.svg";

export default function Card() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 sm:w-[100%] sm:mx-auto lg:mx-auto lg:w-[85%] mx-auto">
        <div className="lg:w-[100%] p-2 xs:w-[90%] sm:w-[97%] sm:mx-auto md:w-[290px]">
          <button className="bg-primary text-secondary py-2 items-center lg:text-[24px] sm:text-[14px]  font-bold sm:rounded-[9.47px] rounded-[12px] sm:w-[90%] lg:w-[100%] lg:h-[63px] flex justify-between sm:pr-0  sm:pl-10 lg:pr-5 lg:pl-5">
            Enugu Igbo
            <span className="md:hidden pl-20 lg:hidden">
              <Image src={Svg3} className="bg-[#64CAB7] rounded-[12px]" />
            </span>
            <span className="">
              <Image
                src={Svg2}
                className="bg-[#64CAB7] rounded-[12px]  sm:hidden md:block"
              />
            </span>
          </button>

          <div className="bg-white lg:w-[100%] xs:w-[100%] md:w-[290px] sm:rounded-[11px] rounded-[14px] mx-auto lg:mt-5 mt-5 p-10 h-auto relative">
            <p className="sm:text-[12px] text-gray-600 lg:text-[18px] leading-normal">
              <span className="md:font-bold lg:font-bold">
                Énugwú: Enugu State's Capital City in Nigeria, nestled in the
                southeast.
              </span>
              With a population of 820,000, its name originates from 'Énú Ụ́gwụ́',
              signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo,
              transformed into its current name in 1928, reflecting rapid
              expansion and cultural evolution
            </p>
            <Image
              src={Svg4}
              className="block md:hidden absolute object-contain right-0 -mt-7 sm:h-[66.11px] sm:w-[51.726px] md:w-16"
            />

            <Image
              src={Svg1}
              className="sm:hidden md:block relative  object-contain sm:h-[66.11px] sm:w-[51.726px] lg:w-[115.453px] ml-[210px] lg:-mb-10"
            />
          </div>
        </div>
        <div className="col-span-2 sm:mx-auto h-auto sm:w-[95%] lg:w-[100%] p-2  lg:p-5 mt-5 lg:mt-2 bg-white lg:rounded-[26px] sm:rounded-[12.582px] rounded-[26px]">
          <div className="">
            <Image
              src={Img2}
              className="sm:w-[380.812px] mx-auto pl-[5.6] pr-[14] object-cover md:hidden rounded-[9.056px]"
            />
            <Image
              src={Img}
              className="mx-auto w-[100%] h-[333.1px] object-cover rounded-[26px] md:block sm:hidden"
            />
          </div>
          <div className="grid mt-2 grid-cols-3 lg:w-[100%] xs:w-[385.812px] lg:gap-0 xs:-ml-2 xs:gap-0 sm:gap-2 xs:h-auto">
            <div className="col-span-2">
              <Image
                src={Img3}
                className="mx-auto pt-[5.6px]  object-contain md:hidden rounded-[9.056px]"
              />
              <Image
                src={imgD1}
                className="mx-auto w-[100%] h-[272.204px] p-2 rounded-[26px] object-cover sm:hidden lg:block"
              />
            </div>
            <div>
              <Image
                src={Imgdemo}
                className=" xs:max-w-[133.541px] mx-auto pt-[5.6px] h-full object-cover md:hidden rounded-[9.056px]"
              />
              <Image
                src={imgD2}
                className=" mx-auto lg:w-[100%] lg:h-[272.204px] p-2 ml-3 rounded-[26px] object-cover sm:hidden lg:block"
              />
            </div>
          </div>

          <div className="grid mt-2 grid-cols-3 lg:w-[100%] xs:w-[385.812px] lg:gap-0 xs:-ml-2 xs:gap-0 sm:gap-2 xs:h-auto ">
            <div>
              <Image
                src={Img4}
                className="xs:w-[133.541px] mx-auto xs:h-[140px] h-full pt-[5.6px] object-cover md:hidden rounded-[9.056px] "
              />
              <Image
                src={imgD2}
                className=" mx-auto lg:w-[100%] lg:h-[272.204px] p-2 ml-0 rounded-[26px] object-cover sm:hidden lg:block"
              />
            </div>
            <div className="col-span-2">
              <Image
                src={Img3}
                className="mx-auto pt-[5.6px]  object-contain md:hidden rounded-[9.056px]"
              />
              <Image
                src={imgD1}
                className="mx-auto w-[100%] h-[272.204px] ml-3 p-2 rounded-[26px] object-cover sm:hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
