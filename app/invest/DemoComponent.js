import Image from "next/image";
import Svg4 from "@/public/images/smcardone.svg";
import Svg5 from "@/public/images/about_desktop.svg";
import Link from "next/link";
import Button from "../components/button/Button";
import EstatesCard from "../components/invest.js/EstateCard";
import AgricCard from "../components/invest.js/AgricCard";
import Pic1 from "@/public/images/techVilleNew.png";

export default function DemoComponent() {
  return (
    <>
      <h1 className="sm:text-[36px] sm:w-0 md:text-6xl flex  md:w-[331px] md:h-[43px] md:justify-normal  md:ml-[50px] font-bold font-[Clash Display] md:mb-20 mb-4 sm:mb-[60px] sm:mt-[100px] mt-[150px] text-[36px]  sm:mr-auto sm:pl-7">
        DemoComponent
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 sm:w-[90%] md:w-[90%] gap-10 md:mr-auto sm:mr-auto">
        <div className="md:col-span-2 md:mt-10 bg-white md:w-[100%] pb-10">
          <div className="flex gap-4 md:ml-28">
            <div className="md:flex-shrink-0">
              <Image
                src={Pic1}
                className="md:w-[100%] sm:w-[100%] sm:ml-10 md:h-[530px] h-[300px] md:-mt-10 -mt-5"
              />
            </div>
            <div className="md:-mt-10  -mt-5">
              <div>
                <EstatesCard value={39} />
              </div>
              <div className="mt-2">
                <AgricCard value={50} />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="bg-white p-10 rounded-[14px] sm:-ml-0 sm:w-[90%]  md:ml-16 md:w-[100%]">
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
              className="relative  object-contain sm:h-[66.11px] sm:w-[51.726px] lg:w-[115.453px] ml-[245px] lg:-mb-10 sm:hidden"
            />
          </div>
          <div className="mt-5 md:ml-16">
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
