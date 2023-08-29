import Image from "next/image";
import Pic1 from "@/public/images/techVilleNew.png";
import Svg1 from "@/public/images/Vector.svg";
import Svg2 from "@/public/images/vector_2.svg";
import Svg4 from "@/public/images/smcardone.svg";
import Svg5 from "@/public/images/about_desktop.svg";

import Button from "../components/button/Button";
import AgricCard from "../components/invest.js/AgricCard";
import EstatesCard from "../components/invest.js/EstateCard";
import Link from "next/link";
import EstatesCardMobile from "./RealEstateMobile";
import AgricCardMobile from "../components/invest.js/MobileAgricCard";
export default function TechVile() {
  return (
    <>
      <h1 className="sm:text-[36px] sm:w-0 md:text-6xl flex  md:w-[331px] md:h-[43px] md:justify-normal  md:ml-[50px] font-bold font-[Clash Display] md:mb-20 mb-4 sm:mb-[30px] sm:mt-[100px] mt-[170px] text-[36px]  sm:mr-auto sm:pl-7">
        TechVille
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mb-5 md:mb-28 sm:gap-1 gap-10 sm:w-[100%] md:w-[90%]">
        <div className="md:col-span-2 bg-white mt-10 p-2 sm:w-[90%] md:w-[100%] h-[300px] md:h-[508px] sm:mr-auto ">
          <div className="flex flex-shrink-0 sm:gap-10 md:gap-4 ">
            <div>
              <Image
                src={Pic1}
                className="ml-2 md:h-[530px] object-cover rounded-lg sm:w-[75%] h-[300px] md:w-[90%] -mt-10 sm:ml-6 md:ml-20 md:-mt-20"
              />
            </div>
            <div className="left-[265px]  -mt-10 md:-mt-20 absolute md:hidden">
              <EstatesCard />
              {/* row two */}
              <div className="mt-5">
                <AgricCard value={50} />
              </div>
            </div>
            <div className="-mt-10 md:-mt-20  hidden lg:block absolute ml-[580px]">
              <EstatesCard />
              {/* row two */}
              <div className="mt-5">
                <AgricCard value={50} />
              </div>
            </div>
          </div>
        </div>
        <div className=" md:h-[369px] md:leading-[24.21px]">
          <div className="md:-mt-10 sm:mx-auto sm:w-[80%] md:ml-20 lg:ml-24">
            <div className="bg-white lg:w-[100%]  md:w-[290px] sm:rounded-[11px] rounded-[14px] lg:mt-5 mt-5 p-10 h-auto relative ">
              <p className="sm:text-[12px] text-gray-600 lg:text-[18px] leading-normal relative">
                <span className="md:font-bold lg:font-bold">
                  Énugwú: Enugu State's Capital City in Nigeria, nestled in the
                  southeast.
                </span>
                With a population of 820,000, its name originates from 'Énú
                Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo,
                transformed into its current name in 1928, reflecting rapid
                expansion and cultural evolution
              </p>

              <Image
                src={Svg5}
                className="sm:hidden md:block relative  object-contain sm:h-[66.11px] sm:w-[51.726px] lg:w-[115.453px] ml-[190px] lg:-mb-10"
              />
            </div>
            <div className="mt-5">
              <Link href="/explore">
                {" "}
                <Button text="Invest in Education" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
