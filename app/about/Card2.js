import Image from "next/image";
import Button from "../components/button/Button";
import CardImg from "@/public/images/hero1.png";
import Svg1 from "@/public/images/about_v.svg";

export default function Card2() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-[26px] hidden md:flex">
          <div>
            <div>
              <Image
                src={CardImg}
                className="mx-auto w-full h-56 p-2 rounded-[26px]"
              />
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <Image
                  src={CardImg}
                  className="mx-auto w-full h-56 p-2 rounded-[26px]"
                />
              </div>
              <div>
                <Image
                  src={CardImg}
                  className="mx-auto w-full h-56 p-2 rounded-[26px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div>
                <Image
                  src={CardImg}
                  className="mx-auto w-full h-56 p-2 rounded-[26px]"
                />
              </div>
              <div className="col-span-2">
                <Image
                  src={CardImg}
                  className="mx-auto w-full h-56 p-2 rounded-[26px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <button className="bg-secondary text-primary py-2 items-center px-2 font-bold flex gap-10 rounded-[26px]">
            Ngwo Caves
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
        <div className="col-span-2 bg-white rounded-[26px] md:hidden flex">
          <div>
            <div>
              <Image
                src={CardImg}
                className="mx-auto w-full h-56 p-2 rounded-[26px]"
              />
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <Image
                  src={CardImg}
                  className="mx-auto w-full h-56 p-2 rounded-[26px]"
                />
              </div>
              <div>
                <Image
                  src={CardImg}
                  className="mx-auto w-full h-56 p-2 rounded-[26px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div>
                <Image
                  src={CardImg}
                  className="mx-auto w-full h-56 p-2 rounded-[26px]"
                />
              </div>
              <div className="col-span-2">
                <Image
                  src={CardImg}
                  className="mx-auto w-full h-56 p-2 rounded-[26px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
