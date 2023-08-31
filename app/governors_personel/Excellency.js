import Image from "next/image";
import Icon from "@/public/images/gov_icon3.svg";

export default function Excellency() {
  return (
    <>
      <div className="bg-primary h-[65.591px] lg:h-[171px] mt-2 lg:mt-5 w-full lg:w-1/2 flex lg:justify-start items-center relative rounded-[9px]">
        <p className="text-secondary w-1/2 lg:w-1/2 text-[15.465px] lg:text-[30px] font-bold ml-10">
          His Excellency, Dr. Bar. Peter Mbah
        </p>
        <Image
          src={Icon}
          className="absolute bottom-0 right-0 lg:w-auto w-10"
        />
      </div>
    </>
  );
}
