import Svg3 from "@/public/images/Rectangle.svg";
import AgricCard from "../components/invest.js/AgricCard";
import EstatesCard from "../components/invest.js/EstateCard";
import HealthCard from "../components/invest.js/HealthCard";
import Image from "next/image";
import Pic2 from "@/public/images/senior2.png";

export default function DesktopView() {
  return (
    <>
      <div className="bg-[#F2EEEB] md:w-11/12 md:h-[792px] hidden md:flex mx-auto rounded-[33px] mb-48">
        <div className="flex gap-3">
          <h1 className="absolute h-[157px] mt-[100px] md:ml-[600px] text-[64px] w-[433px] font-bold leading-[57.28px]">
            Invest in the Future of Enugu State
          </h1>
          <div className="flex">
            <Image src={Pic2} />
          </div>

          <div className="flex absolute right-60 top-3/4  gap-6">
            <div className="mb-10">
              <AgricCard value={50} />
              <br />
              <AgricCard value={10} />
            </div>
            {/* grid two */}
            <div className="">
              <HealthCard value={30} />

              <br />
              <EstatesCard value={80} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
