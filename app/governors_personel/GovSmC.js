import Icon from "@/public/images/gov_icon4.svg";
import Icon2 from "@/public/images/doodle.svg";
import Icon3 from "@/public/images/doodle1.svg";
import Image from "next/image";

export default function GovSmC() {
  return (
    <div className=" bg-secondary w-[100%] md:w-[100%] h-[93px] md:h-[243px] lg:mb-5 relative rounded-[13px]">
      <Image src={Icon} className="absolute top-0 left-0 lg:w-auto w-5" />
      <p className="p-5 md:p-10 font-bold text-[15.465px] md:text-[40px] leading-[13.841px] md:leading-[35.8px]">
        The Governor, Enugu State
      </p>
      <Image src={Icon2} className="absolute top-0 right-0 sm:w-5 w-auto" />

      <Image src={Icon3} className="absolute bottom-0 right-0 sm:w-5 w-auto" />
    </div>
  );
}
