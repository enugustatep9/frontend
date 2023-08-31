import Image from "next/image";
import Svg from "@/public/images/sun.svg";

export default function GalleryCard({ name, date }) {
  return (
    <>
      <div className="bg-white sm:h-[111.959px] md:h-auto lg:h-[236px] sm:w-full md:w-full sm:mt-2 md:mt-5 flex items-center justify-center">
        <div className="bg-gradient-to-b from-white to-gray-300 sm:w-[100%] md:w-[90%] sm:h-[111.959px] md:h-[220px]">
          <div className="flex justify-between sm:p-2 md:p-5">
            <h1 className="text-[#0CAD8E] font-bold md:text-[16px] sm:text-[7.59px]">
              {name}
            </h1>
            <Image src={Svg} />
          </div>
          <p className="text-black font-bold md:text-[32px] lg:w-1/2 sm:leading-[10px] md:leading-[37px] mx-auto sm:mt-5 md:mt-10">
            {date}
          </p>
        </div>
      </div>
    </>
  );
}
