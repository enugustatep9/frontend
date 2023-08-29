import Image from "next/image";
import Svg4 from "@/public/images/smcardone.svg";
import Svg5 from "@/public/images/about_desktop.svg";
import Link from "next/link";
import Button from "../components/button/Button";
import EstatesCard from "../components/invest.js/EstateCard";
import AgricCard from "../components/invest.js/AgricCard";
import Pic1 from "@/public/images/estate.png";

export default function RealEstate() {
  return (
    <>
      <h1 className="sm:text-[36px] sm:w-0 md:text-6xl flex  md:w-[331px] md:h-[43px] md:justify-normal  md:ml-[50px] font-bold font-[Clash Display] md:mb-20 mb-4 sm:mb-[60px] sm:mt-[30px] mt-[170px] text-[36px]  sm:mr-auto sm:pl-7">
        RealEstate
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-[90%] sm:w-[90%] gap-10 md:ml-auto sm:ml-auto">
        <div className="md:-mt-5 md:h-[369px] md:leading-[24.21px] sm:hidden lg:block">
          <div className=" sm:mx-auto sm:w-[80%]  lg:mr-48">
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
                className="sm:hidden md:block relative  object-contain sm:h-[66.11px] sm:w-[51.726px] lg:w-[115.453px] ml-[160px] lg:-mb-10"
              />
            </div>
            <div className="mt-5">
              <Link href="/explore">
                {" "}
                <Button text="Invest in RealEstate" />
              </Link>
            </div>
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
                className="md:w-[100%] sm:w-[80%]  md:h-[530px] h-[300px] md:-mt-10 -mt-5"
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
              <Button text="Invest in Education" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
