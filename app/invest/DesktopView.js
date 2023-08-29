import Svg3 from "@/public/images/Rectangle.svg";
import AgricCard from "../components/invest.js/AgricCard";
import EstatesCard from "../components/invest.js/EstateCard";
import HealthCard from "../components/invest.js/HealthCard";
import svg1 from "@/public/images/invest_svg.svg";
import svg2 from "@/public/images/invest_svg1.svg";
import Image from "next/image";
import Pic2 from "@/public/images/investment_page.png";
import InvestAgricCard from "./InvestAgricCard";
import InvestHealthCard from "./InvestHealthCard";
import InvestEstateCard from "./InvestEstateCard";
import EmptyCard from "./EmptyCard";

export default function DesktopView() {
  return (
    <>
      <div className="bg-[#F2EEEB] md:w-[95%] flex justify-center items-center h-auto pt-10 pb-10 mx-auto rounded-[26px] sm:hidden md:block lg:block relative">
        <Image src={svg1} className="absolute right-0" />
        <Image src={svg2} className="absolute right-20 -mt-5" />
        <div className="flex w-[100%] mx-auto gap-20 ml-20">
          <div>
            <Image src={Pic2} className="w-[100%]" />
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
                <div className="mt-5">
                  <EmptyCard />
                </div>
              </div>
              <div>
                <div>
                  <InvestHealthCard value={30} />
                </div>
                <div className="mt-5">
                  <InvestEstateCard value={80} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
