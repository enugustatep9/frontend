import Image from "next/image";
import Svg from "@/public/images/sun_new.svg";

export default function GalleryCard({ name, date }) {
  return (
    <>
      <div className="bg-white sm:h-[111.959px] md:h-auto lg:h-[236px] sm:w-full md:w-full sm:mt-2 md:mt-3 flex items-center justify-center rounded-[12px]">
        <div className="bg-gradient-to-b from-white to-gray-100 sm:w-[100%] md:w-[85%] sm:h-[111.959px] md:h-[220px]">
          <div className="flex justify-between sm:p-2 md:p-5">
            <h1 className="text-[#0CAD8E] font-bold md:text-[16px] sm:text-[7.59px] md:leading-[16px] md:text-left md:w-1/2 font-[Clash Display]">
              {name}
            </h1>
            <Image src={Svg} className="w-3 h-3 md:w-8 md:h-8 object-cover" />
          </div>
          <p className="text-black font-extrabold md:text-[32px] lg:w-1/2 w-0 sm:leading-[10px] mx-4 md:mx-8 md:leading-[30px] sm:mt-5 md:mt-5 font-[Clash Display] sm:text-[15.181px] sm:leading-[15px]">
            {date}
          </p>
        </div>
      </div>
    </>
  );
}
