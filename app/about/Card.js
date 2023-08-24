import Image from "next/image";
import Button from "../components/button/Button";
import Svg1 from "@/public/images/about_v.svg";
import Svg2 from "@/public/images/login.svg";
import Img from "@/public/images/Sub.png";

export default function Card() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-2">
          <button className="bg-primary text-secondary  py-2 items-center pl-[50px] pr-[11px] pt-[8px] pb-[8px] font-bold flex gap-10 rounded-[12px] md:ml-10 md:w-[289px]">
            Enugu Igbo
            <Image src={Svg2} className="bg-[#64CAB7] rounded-[12px] mx-5" />
          </button>

          <div className="bg-white w-[350px] md:w-[290px] rounded-[14px] mx-auto mt-5 p-10 h-auto">
            <p className="text-xl leading-normal">
              <strong>
                Énugwú: Enugu State's Capital City in Nigeria, nestled in the
                southeast.
              </strong>
              With a population of 820,000, its name originates from 'Énú Ụ́gwụ́',
              signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo,
              transformed into its current name in 1928, reflecting rapid
              expansion and cultural evolution
            </p>
            <Image
              src={Svg1}
              className="relative object-contain ml-auto  w-16 md:w-16"
            />
          </div>
        </div>
        <div className="col-span-2 mt-5 md:mt-0 bg-white rounded-[26px]">
          <div className="">
            <Image
              src={Img}
              className="mx-auto w-[380.81px] md:w-full md:h-60 h-[161.2px] p-2 object-cover rounded-[26px]"
            />
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <Image
                src={Img}
                className="mx-auto w-[380.81px] md:w-full md:h-60 h-[131.73px] p-2 rounded-[26px] object-cover"
              />
            </div>
            <div>
              <Image
                src={Img}
                className="mx-auto w-full md:h-60 h-[131.73px] p-2 rounded-[26px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div>
              <Image
                src={Img}
                className="mx-auto w-[133.54px] md:w-full h-[131.73px] md:h-60 p-2 rounded-[26px]"
              />
            </div>
            <div className="col-span-2">
              <Image
                src={Img}
                className="mx-auto w-[237.66px] md:w-full h-[131.73px] md:h-60 p-2 rounded-[26px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
