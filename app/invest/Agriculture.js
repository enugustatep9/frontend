import Image from "next/image";
import Pic1 from "@/public/images/agric.png";
import Svg1 from "@/public/images/vector.svg";
import Svg2 from "@/public/images/vector_2.svg";
import Button from "../components/button/Button";
export default function Agriculture() {
  return (
    <>
      <h1 className="text-5xl md:text-6xl flex justify-center md:justify-normal md:ml-24">
        Agriculture
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mb-28 gap-10 ml-auto w-[94%]">
        <div className="md:ml-0 hidden md:flex">
          <div className="ml-5 md:ml-0">
            <p className="bg-white rounded-lg p-8 md:mt-20 h-2/3">
              <span className="text-black font-bold">
                Énugwú: Enugu State's Capital City in Nigeria, nestled in the
                southeast.
              </span>
              With a population of 820,000, its name originates from 'Énú Ụ́gwụ́',
              signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo,
              transformed into its current name in 1928, reflecting rapid
              expansion and cultural evolution.
              <Image
                width={100}
                className=" ml-48 hidden md:flex "
                src={Svg2}
              />
            </p>
            <div className="mt-5">
              <Button text="Invest in Tech Ville" />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 bg-white mt-36 p-2">
          <div className="grid grid-cols-2 gap-8 md:gap-4">
            <div className=" md:ml-10 -mt-10 md:-mt-20">
              <div className=" text-black bg-[#FCFCFC] rounded-lg p-8 md:p-8 w-full md:w-3/4 h-48 md:h-44 flex justify-center md:-ml-10">
                <div className="relative">
                  <h2 className="text-5xl md:text-6xl">50k</h2>
                  <Image
                    src={Svg1}
                    className="absolute -top-8 ml-16 md:ml-44 "
                  />

                  <p>
                    More <span className="text-primary">Children</span> can now
                    read and write
                  </p>
                </div>
              </div>
              {/* row two */}
              <div className="mt-5 text-white bg-primary rounded-lg p-8 md:p-8 w-full md:w-3/4 h-48 md:h-44 flex  justify-center md:-ml-10">
                <div className="relative">
                  <h2 className="text-5xl md:text-6xl">50k</h2>

                  <p>Increase in Agriculture</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={Pic1}
                className="h-full object-cover rounded-lg w-full md:w-full md:-ml-32 -mt-10 md:-mt-20"
              />
            </div>
          </div>
        </div>
        <div className="md:ml-0 md:hidden">
          <div className="ml-5 md:ml-0">
            <p className="bg-white rounded-lg p-8 md:mt-20 h-2/3">
              <span className="text-black font-bold">
                Énugwú: Enugu State's Capital City in Nigeria, nestled in the
                southeast.
              </span>
              With a population of 820,000, its name originates from 'Énú Ụ́gwụ́',
              signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo,
              transformed into its current name in 1928, reflecting rapid
              expansion and cultural evolution.
              <Image
                width={100}
                className=" ml-48 hidden md:flex "
                src={Svg2}
              />
            </p>
            <div className="mt-5">
              <Button text="Invest in Tech Ville" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
