import Mobile from "@/public/images/investment_mobile.png";
import Image from "next/image";
import Svg1 from "@/public/images/investment_mobile_svg.svg";
import HealthCardMobile from "./MobileHealthCard";
import EstatesCardMobile from "./RealEstateMobile";
import AgricCardMobile from "../components/invest.js/MobileAgricCard";
import InvestAgricCard from "./InvestAgricCard";
import InvestHealthCard from "./InvestHealthCard";
import EmptyCard from "./EmptyCard";
import InvestEstateCard from "./InvestEstateCard";

export default function MobileView() {
  return (
    <>
      <div className=" mb-20 md:hidden w-[90%] h-[564px] rounded-[15px] bg-[#F2EEEB] mx-auto relative">
        <Image src={Svg1} className="absolute left-0" />
        <h1 className="text-left h-[46px]  mx-auto font-bold text-[36px] leading-7 p-5 pt-10 font-[Clash Display] w-[100%]">
          Invest in the Future of Enugu State
        </h1>
        <div className="grid grid-cols-2 absolute mt-[20rem] w-[75%] left-0 right-0 mx-auto gap-2 ">
          <InvestAgricCard value={50} />
          <InvestHealthCard value={30} />
          <EmptyCard value={50} />
          <InvestEstateCard value={80} />
        </div>
        <Image src={Mobile} className="w-[80%] mx-auto mt-28" />
      </div>
    </>
  );
}
