import Image from "next/image";
import Grid1 from "@/public/images/gov_grid.png";
import Grid2 from "@/public/images/gov_grid2.png";
import Grid3 from "@/public/images/gov_grid3.png";
import Icon from "@/public/images/gov_icon3.svg";
import GovSmC from "./GovSmC";
import Excellency from "./Excellency";
export default function GridComp() {
  return (
    <>
      {/* <div className="flex gap-5 w-[90%] mx-auto">
        <div>
          <div>
            <Image src={Grid1} />
          </div>
          <div className="flex gap-2">
            <div className="bg-primary h-[171px] mt-5 w-full flex justify-start items-center relative rounded-[9px]">
              <p className="text-secondary w-1/2 text-[30px] font-bold ml-10">
                His Excellency, Dr. Bar. Peter Mbah
              </p>
              <Image src={Icon} className="absolute bottom-0 right-0" />
            </div>
            <div className="">
              <div className="flex gap-2 mt-5">
                <div className="bg-secondary rounded-[9px] w-[25%] h-[54px]"></div>
                <div className="bg-primary w-[57%] h-[54px] rounded-[9px]"></div>
              </div>
              <Image src={Grid3} className="w-[579px] mt-5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <GovSmC />
          </div>
          <div>
            <Image src={Grid2} className="rounded-[13px]" />
          </div>
        </div>
      </div> */}
      <div className="flex gap-5 w-[90%] justify-center mx-auto">
        <div>
          <Image src={Grid1} className="w-[100%] rounded-[12px]" />
        </div>
        <div className="flex-col w-[25%]">
          <GovSmC />
          <div>
            <Image src={Grid2} className="rounded-[13px]" />
          </div>
        </div>
      </div>

      <div className="flex gap-5 w-[87%] mx-auto justify-center -mt-[70px]">
        <Excellency />
        <div className="">
          <div className="flex gap-2 mt-5">
            <div className="bg-secondary rounded-[9px] w-[20%] h-[54px]"></div>
            <div className="bg-primary w-[23%] h-[54px] rounded-[9px]"></div>
          </div>
          <Image src={Grid3} className="w-[579px] mt-5" />
        </div>
      </div>
    </>
  );
}
