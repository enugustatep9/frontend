import GridMob from "@/public/images/gov_mob.png";
import GridMob2 from "@/public/images/gov_mob2.png";
import GridMob3 from "@/public/images/gov_mob3.png";
import Image from "next/image";
import GovSmC from "./GovSmC";
import Excellency from "./Excellency";
export default function GovSmCMob() {
  return (
    <>
      <div className="flex flex-col w-[90%] mx-auto">
        <div>
          <Image src={GridMob} className="w-[100%] rounded-[12px]" />
        </div>
        <div className="flex gap-2 mt-2 w-[100%]">
          <div className=" w-[100%]">
            <GovSmC />
          </div>
          <div className=" w-[100%]">
            <Image src={GridMob2} className="rounded-[12px] h-full" />
          </div>
        </div>
        <div>
          <Excellency />
        </div>
        <div className="flex gap-2 mt-2 lg:mt-5">
          <div className="bg-secondary rounded-[9px] w-[20%] h-[34px]"></div>
          <div className="bg-primary w-[80%] h-[34px] rounded-[9px]"></div>
        </div>
        <div className="mt-2 bg-white">
          <Image src={GridMob3} />
        </div>
      </div>
    </>
  );
}
