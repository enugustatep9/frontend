import Mobile from "@/public/images/mobile_view.png";
import Image from "next/image";
import AgricCardMobile from "../components/invest.js/MobileAgricCard";
import HealthCardMobile from "./MobileHealthCard";
import EstatesCardMobile from "./RealEstateMobile";

export default function MobileView() {
  return (
    <>
      <div className=" mb-10 md:hidden w-10/12 h-[564px] mt-[18px] rounded-[15px] bg-[#F2EEEB] mx-auto">
        <h1 className="text-center h-[46px]  mx-auto font-bold text-[36px] leading-8 p-5 pt-20">
          Invest in the Future of Enugu State
        </h1>
        <div className="grid gap-2 grid-cols-2 absolute mt-[20rem] mx-auto justify-center">
          <HealthCardMobile value={50} />
          <AgricCardMobile value={50} />
          <AgricCardMobile value={50} />
          <EstatesCardMobile />
        </div>
        <Image src={Mobile} className="" />
      </div>
    </>
  );
}
