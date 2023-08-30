import Image from "next/image";
import Pic1 from "@/public/images/agric.png";
import Svg5 from "@/public/images/about_desktop.svg";

import Svg1 from "@/public/images/Vector.svg";
import Svg2 from "@/public/images/vector_2.svg";
import Button from "../components/button/Button";
import Link from "next/link";
import AgricCard from "../components/invest.js/AgricCard";
import EstatesCard from "../components/invest.js/EstateCard";
import EstatesCardMobile from "./RealEstateMobile";
import AgricCardMobile from "../components/invest.js/MobileAgricCard";
export default function Agriculture() {
  return (
    <>
      <h1 className="sm:text-[36px] sm:w-0 md:text-6xl flex  md:w-[331px] md:h-[43px] md:justify-normal  md:ml-[50px] font-bold font-[Clash Display] md:mb-20 mb-4 sm:mb-[60px] sm:mt-[100px] mt-[150px] text-[36px]  sm:mr-auto sm:pl-7">
        Agriculture
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-[90%] sm:w-[90%] gap-10 md:ml-auto sm:ml-auto">
        <div className="sm:hidden md:block">
          <div className="bg-white p-10 rounded-[14px] sm:-ml-0 sm:w-[90%]  md:-ml-16 md:w-[100%]">
            <p className="sm:text-[12px] text-gray-600 lg:text-[18px] leading-normal relative">
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
              src={Svg5}
              className="sm:hidden md:block relative  object-contain sm:h-[66.11px] sm:w-[51.726px] lg:w-[115.453px] ml-[245px] lg:-mb-10"
            />
          </div>
          <div className="mt-5 md:-ml-16">
            <Link href="/explore">
              {" "}
              <Button text="Invest in Agriculture" />
            </Link>
          </div>
        </div>

        <div className="md:col-span-2 md:mt-10 bg-white md:w-[100%] pb-10">
          <div className="flex gap-4 md:-ml-10 -ml-4">
            <div className="md:-mt-10 -mt-5">
              <div>
                <EstatesCard value={39} />
              </div>
              <div className="mt-2">
                <AgricCard value={50} />
              </div>
            </div>
            <div>
              <Image
                src={Pic1}
                className="md:w-[100%] md:h-[530px] h-[300px] md:-mt-10 -mt-5"
              />
            </div>
          </div>
        </div>

        {/* display bock */}

        <div className="sm:block md:hidden">
          <div className="bg-white p-10 rounded-[14px] sm:-ml-0 sm:w-[90%]  md:-ml-16 md:w-[100%]">
            <p className="sm:text-[12px] text-gray-600 lg:text-[18px] leading-normal relative">
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
              src={Svg5}
              className="sm:hidden md:block relative  object-contain sm:h-[66.11px] sm:w-[51.726px] lg:w-[115.453px] ml-[245px] lg:-mb-10"
            />
          </div>
          <div className="mt-5 md:-ml-16">
            <Link href="/explore">
              {" "}
              <Button text="Invest in Agriculture" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
