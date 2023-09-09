import Svg3 from "@/public/images/Rectangle.svg";
import AgricCard from "../components/invest.js/AgricCard";
import EstatesCard from "../components/invest.js/EstateCard";
import HealthCard from "../components/invest.js/HealthCard";
import svg1 from "@/public/images/invest_svg.svg";
import svg2 from "@/public/images/invest_svg1.svg";
import svg3 from "@/public/images/inv_icon.svg";
import svg4 from "@/public/images/inv_icon2.svg";
import Image from "next/image";
import Pic2 from "@/public/images/investment_page.png";
import InvestAgricCard from "./InvestAgricCard";
import InvestHealthCard from "./InvestHealthCard";
import InvestEstateCard from "./InvestEstateCard";
import EmptyCard from "./EmptyCard";

export default function DesktopView() {
  return (
    <>
      <div className="bg-[#F2EEEB] md:w-[90%] lg:w-[95%] flex justify-center items-center h-auto pt-10 pb-10 mx-auto rounded-[26px] sm:hidden md:block lg:block">
        <Image src={svg1} className="absolute right-8" />
        <Image src={svg2} className="absolute right-20 -mt-5" />

        <div className="flex w-[100%] mx-auto gap-5 md:p-2 lg:gap-20 lg:ml-20 md:-mb-28 lg:-mb-24">
          <div>
            <Image src={svg4} className="top-[127px] absolute h-12" />

            <Image src={Pic2} className="w-[100%] md:mb-10 " />
          </div>
          <div>
            <h1 className="font-bold font-[Clash Display] text-[54px] leading-[45px] mt-20 w-[55%] sm:hidden lg:block">
              Invest in the Future of Enugu State
            </h1>
            <div className="flex mt-10">
              <div>
                <div>
                  <InvestAgricCard value={50} />
                </div>
                <div className="mt-10">
                  <EmptyCard />
                </div>
              </div>
              <div>
                <div>
                  <InvestHealthCard value={30} />
                </div>
                <div className="relative mt-10">
                  <div className="z-10 absolute">
                    <InvestEstateCard value={80} />
                  </div>
                  <div className="sm:hidden xs:hidden md:block absolute -mt-[70px] ml-[110px] z-1">
                    <Image src={svg3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
