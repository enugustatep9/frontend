import Image from "next/image";
import Button from "../components/button/Button";
import Svg1 from "@/public/images/about_desktop.svg";
import Svg2 from "@/public/images/login.svg";
import Svg4 from "@/public/images/smcardone.svg";
import Img from "@/public/images/about_desktop1.png";
import imgD from "@/public/images/about_desktop2.png";
import Img2 from "@/public/images/about_mobile.png";
import Img3 from "@/public/images/about_mobile2.png";
import Img4 from "@/public/images/about_mobile3.png";
import Svg3 from "@/public/images/arrow_login.svg";

export default function Card() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 sm:w-[100%] sm:mx-auto lg:mx-auto lg:w-[85%] mx-auto">
        <div className="lg:w-[100%] p-2 xs:w-[90%] sm:w-[97%] sm:mx-auto md:w-[290px]">
          <button className="bg-primary text-secondary py-2 items-center lg:text-[24px] sm:text-[14px] lg:pl-[11px] lg:pr-[11px] lg:pt-[8px] lg:pb-[8px] sm:pl-[26.5px] sm:pr-[6.31px] sm:pt-[8.68px] sm:pb-[6.31px] font-bold flex gap-10 sm:rounded-[9.47px] rounded-[12px] sm:w-[90%] lg:w-[100%] lg:h-[63px]">
            Enugu Igbo
            <span className="md:hidden lg:hidden pl-24 ">
              <Image src={Svg3} className="bg-[#64CAB7] rounded-[12px]" />
            </span>
            <span className="lg:pl-5">
              <Image
                src={Svg2}
                className="bg-[#64CAB7] rounded-[12px] mx-5 sm:hidden md:block"
              />
            </span>
          </button>

          <div className="bg-white lg:w-[100%] xs:w-[100%] md:w-[290px] sm:rounded-[11px] rounded-[14px] mx-auto lg:mt-5 mt-5 p-10 h-auto relative">
            <p className="sm:text-[12px] lg:text-[18px] leading-normal">
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
        <div className="col-span-2 sm:mx-auto h-auto sm:w-[95%] lg:w-[100%] p-2 md:w-full lg:p-2 mt-5 lg:mt-2 bg-white lg:rounded-[26px] sm:rounded-[12.582px] rounded-[26px]">
          <div className="">
            <Image
              src={Img2}
              className="sm:w-[380.812px] mx-auto pl-[5.6] pr-[14] object-cover md:hidden rounded-[9.056px]"
            />
            <Image
              src={Img}
              className="mx-auto w-[380.81px] md:w-[786.9px] md:h-[333.1px] h-[161.2px]  object-cover rounded-[26px] md:block sm:hidden"
            />
          </div>
          <div className="grid grid-cols-3 xs:w-[385.812px] xs:-ml-2 xs:gap-0 sm:gap-2">
            <div className="col-span-2">
              <Image
                src={Img3}
                className=" mx-auto pt-[5.6px]  object-contain md:hidden rounded-[9.056px]"
              />
              <Image
                src={imgD}
                className="mx-auto w-[491.09px] lg:block sm:hidden object-cover"
              />
            </div>
            <div>
              <Image
                src={Img4}
                className="xs:w-[133.541px] mx-auto xs:h-[140px] h-[110px] pt-[5.6px] object-cover md:hidden rounded-[9.056px]"
              />
              <Image
                src={Img}
                className="mx-auto w-full md:h-[272.2px] h-[131.73px] p-2 rounded-[26px] object-cover sm:hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 xs:w-[385.812px] xs:ml-0 xs:gap-0 sm:gap-2">
            <div>
              <Image
                src={Img4}
                className="mx-auto xs:h-[140px] h-[110px] pt-[5.6px] object-cover md:hidden rounded-[9.056px]"
              />
              <Image
                src={Img}
                className="mx-auto w-full md:h-[272.2px] h-[131.73px] p-2 rounded-[26px] object-cover sm:hidden"
              />
            </div>
            <div className="col-span-2">
              <Image
                src={Img3}
                className="mx-auto pt-[5.6px]  object-cover md:hidden rounded-[9.056px]"
              />
              <Image
                src={Img}
                className="mx-auto w-[380.81px] md:w-full md:h-[272.2px] h-[131.73px] p-2 rounded-[26px] sm:hidden object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
