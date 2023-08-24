import Image from "next/image";
import Button from "../components/button/Button";
import CardImg from "@/public/images/hero1.png";

export default function Card() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5">
          <button className="bg-primary text-secondary py-2 items-center px-2 font-bold flex gap-10 rounded-[26px]">
            Enugu Igbo
            <img src="../../../images/arrow_slant_green.svg" />
          </button>
          <div className="bg-white  w-full  rounded-[26px] mt-5 p-5 h-auto">
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
              className=" object-contain ml-auto w-10 md:w-16"
            />
          </div>
        </div>
        <div className="col-span-2 mt-5 md:mt-0 bg-white rounded-[26px]">
          <div className="">
            <Image
              src={CardImg}
              className="mx-auto w-full h-48 p-2 object-cover rounded-[26px]"
            />
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <Image
                src={CardImg}
                className="mx-auto w-full h-48 p-2 rounded-[26px] object-cover"
              />
            </div>
            <div>
              <Image
                src={CardImg}
                className="mx-auto w-full h-48 p-2 rounded-[26px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div>
              <Image
                src={CardImg}
                className="mx-auto w-full h-48 p-2 rounded-[26px]"
              />
            </div>
            <div className="col-span-2">
              <Image
                src={CardImg}
                className="mx-auto w-full h-48 p-2 rounded-[26px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
