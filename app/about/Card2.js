import Image from "next/image";
import Button from "../components/button/Button";
import Svg1 from "@/public/images/about_desktop.svg";
import Svg2 from "@/public/images/login.svg";
import Svg4 from "@/public/images/smcardone.svg";
import Img from "@/public/images/about_desktop1.png";
import imgD from "@/public/images/about_desktop2.png";
import imgD1 from "@/public/images/about_desktop3.png";
import imgD2 from "@/public/images/about_desktop4.png";
import Img2 from "@/public/images/about_mobile.png";
import Img3 from "@/public/images/about_mobile2.png";
import Img4 from "@/public/images/about_mobile3.png";
import Svg3 from "@/public/images/arrow_login.svg";
import new_pic_1 from "@/public/images/about_new.png";
import new_pic_2 from "@/public/images/about_new1.png";
import new_pic_3 from "@/public/images/about_new2.png";
import new_pic_4 from "@/public/images/about_new3.png";
import new_pic_5 from "@/public/images/about_new4.png";
export default function Card2() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 sm:w-[100%] sm:mx-auto lg:mx-auto lg:w-[90%] md:mx-auto mt-20">
        {/* hidden */}
        <div className="sm:hidden md:hidden col-span-2 bg-white p-3 md:p-7 mx-auto w-[90%] rounded-[14px] md:rounded-[26px]">
          <div className="flex flex-col gap-2 md:gap-4">
            <div>
              <Image src={new_pic_1} className="w-full object-cover" />
            </div>
            <div className="flex gap-2 md:gap-4">
              <div>
                <Image src={new_pic_2} className="object-cover" />
              </div>
              <div>
                <Image src={new_pic_3} className="object-cover" />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div>
                <Image src={new_pic_4} className="object-cover" />
              </div>
              <div>
                <Image src={new_pic_5} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
        {/* button hidden */}
        <div className="p-2 w-[228.04px] md:w-[290px] xs:w-[90%] sm:w-[97%] sm:mx-auto lg:hidden">
          <button className="bg-secondary text-primary py-2 items-center lg:text-[24px] sm:text-[14px]  font-bold sm:rounded-[9.47px] rounded-[12px] sm:w-[90%] lg:w-[100%] lg:h-[63px] flex justify-between sm:pr-0  sm:pl-10 lg:pr-5 lg:pl-5">
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
          <div className="bg-white xs:w-[100%] md:w-[290px] sm:rounded-[11px] rounded-[14px] mx-auto mt-5 p-10 h-auto relative">
            <p className="sm:text-[12px] md:text-[18px] leading-normal text-gray-600">
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
              className="block md:hidden absolute object-contain right-0 -mt-7 sm:h-[66.11px] sm:w-[51.726px] md:w-16 "
            />

            <Image
              src={Svg1}
              className="sm:hidden md:block relative object-contain ml-auto  w-16 md:w-16"
            />
          </div>
        </div>
        <div className="col-span-2 bg-white p-3 md:p-7 mx-auto w-[90%] rounded-[14px] md:rounded-[26px]">
          <div className="flex flex-col gap-2 md:gap-4">
            <div>
              <Image src={new_pic_1} className="w-full object-cover" />
            </div>
            <div className="flex gap-2 md:gap-4">
              <div>
                <Image src={new_pic_2} className="object-cover" />
              </div>
              <div>
                <Image src={new_pic_3} className="object-cover" />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div>
                <Image src={new_pic_4} className="object-cover" />
              </div>
              <div>
                <Image src={new_pic_5} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden lg:block lg:w-[100%] p-2 xs:w-[90%] sm:w-[97%] sm:mx-auto md:w-[290px]">
          <button className="bg-secondary text-primary py-2 items-center lg:text-[24px] sm:text-[14px]  font-bold sm:rounded-[9.47px] rounded-[12px] sm:w-[90%] lg:w-[100%] lg:h-[63px] flex justify-between sm:pr-0  sm:pl-10 lg:pr-5 lg:pl-5">
            Ngwo Caves
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
            <p className="sm:text-[12px] md:text-[18px] leading-normal text-gray-600">
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
      </div>
    </>
  );
}
