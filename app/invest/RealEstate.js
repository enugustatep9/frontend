import Image from "next/image";
import Pic1 from "@/public/images/estate.png";
import Svg1 from "@/public/images/Vector.svg";
import Svg2 from "@/public/images/vector_2.svg";
import Button from "../components/button/Button";
import Link from "next/link";
import EstatesCard from "../components/invest.js/EstateCard";
import AgricCard from "../components/invest.js/AgricCard";
import EstatesCardMobile from "./RealEstateMobile";
import AgricCardMobile from "../components/invest.js/MobileAgricCard";
export default function RealEstate() {
  return (
    <>
      <h1 className=" text-[36px] md:text-6xl flex justify-center md:w-[331px] md:h-[43px] md:justify-normal mr-[50px] md:ml-[128px] font-bold font-[Clash Display] md:mb-0 mb-4 mt-[50px]">
        RealEstate
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 md:mb-28 gap-10 ml-auto w-11/12  md:mt-0">
        <div className="md:ml-0 md:leading-[24.21px]  hidden md:block w-[270px] md:w-[369px] ">
          <div className=" md:ml-5 md:mr-10">
            <p className="bg-white rounded-lg p-8 md:mt-20 h-2/3 text-[18px] font-[]">
              <span className="text-black font-bold">
                Énugwú: Enugu State's Capital City in Nigeria, nestled in the
                southeast.
              </span>
              With a population of 820,000, its name originates from 'Énú Ụ́gwụ́',
              signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo,
              transformed into its current name in 1928, reflecting rapid
              expansion and cultural evolution.
              <Image
                width={100}
                className="ml-40 hidden md:flex mt-1"
                src={Svg2}
              />
            </p>
            <div className="mt-5">
              <Link href="/explore">
                <Button text="Invest in RealEsate" />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 bg-white mt-20 md:mt-36 p-2 md:h-[508px] md:w-[700px] w-[380.28px] ml-auto">
          <div className="grid grid-cols-2 gap-8 md:gap-10 ">
            <div className=" md:ml-10 -mt-10 md:-mt-10">
              <div className="mr-[50px] md:ml-[640px] -ml-5 -mt-10 md:-mt-20 md:absolute  md:hidden">
                <EstatesCardMobile />
                {/* row two */}
                <div className="mt-5">
                  <AgricCardMobile value={50} />
                </div>
              </div>
              <div className="md:-ml-[120px] -mt-10 hidden md:block md:absolute">
                <EstatesCard />
                {/* row two */}
                <div className="mt-5">
                  <AgricCard value={50} />
                </div>
              </div>
            </div>
            <div>
              <Image
                src={Pic1}
                className="md:h-[500px] md:w-[387px] object-cover rounded-lg w-[206.76px] h-[239.88px] -ml-24 md:-ml-44 -mt-10 md:-mt-20"
              />
            </div>
          </div>
        </div>
        <div className="md:ml-0 md:hidden">
          <div className="-ml-4 md:ml-0">
            <p className="bg-white rounded-lg p-8 md:mt-20 h-2/3 w-[296px]">
              <span className="text-black font-bold">
                Énugwú: Enugu State's Capital City in Nigeria, nestled in the
                southeast.
              </span>
              With a population of 820,000, its name originates from 'Énú Ụ́gwụ́',
              signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo,
              transformed into its current name in 1928, reflecting rapid
              expansion and cultural evolution.
              <Image
                width={100}
                className=" ml-48 hidden md:flex "
                src={Svg2}
              />
            </p>
            <div className="mt-5">
              <Link href="/explore">
                <Button text="Invest in RealEsate" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
