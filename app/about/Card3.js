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

export default function Card3() {
  return (
    <>
      <div className="lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 sm:w-[100%] sm:mx-auto lg:mx-auto lg:w-[85%] mx-auto">
        <div className="lg:w-[100%] p-2 xs:w-[90%] sm:w-[97%] sm:mx-auto md:w-[290px]">
          <button className="bg-primary text-secondary py-2 items-center md:text-[24px] sm:text-[14px]  font-bold sm:rounded-[9.47px] md:rounded-[12px] sm:w-[90%] md:w-[100%] md:h-[63px] md:flex md:justify-between sm:hidden sm:pr-0  sm:pl-10 md:pr-5 md:pl-5">
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
            <p className="sm:text-[12px] md:text-[18px] leading-normal text-gray-600 md:hidden">
              From the breath-relaxing view of the Udi Hills to the enchanting
              aerial exploration of Enugu State's diverse landscapes, this
              captivating video showcases the region's natural beauty and
              cultural richness. Glide above lush greenery and cascading
              waterfalls, witness the bustling cityscape with its vibrant
              markets and historic landmarks, and immerse yourself in the warmth
              and hospitality of the local communities. The aerial perspective
              provides a unique and awe-inspiring experience, highlighting the
              hidden gems and timeless charm of Enugu State from a whole new
              angle.
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
        <div className="col-span-2 bg-white p-3 md:p-7 mx-auto w-[90%] rounded-[14px] mdrounded-[26px]">
          <div className="flex flex-col gap-2 md:gap-4">
            <div>
              <Image src={Img} className="w-full object-cover" />
            </div>
            <div className="flex gap-2 md:gap-4">
              <div>
                <Image src={imgD1} className="object-cover" />
              </div>
              <div>
                <Image src={imgD2} className="object-cover" />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div>
                <Image src={imgD2} className="object-cover" />
              </div>
              <div>
                <Image src={imgD1} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
