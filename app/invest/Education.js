import Image from "next/image";
import Pic1 from "@/public/images/edu.png";
import Svg1 from "@/public/images/Vector.svg";
import Svg2 from "@/public/images/vector_2.svg";
import Button from "../components/button/Button";
import EstatesCard from "../components/invest.js/EstateCard";
import AgricCard from "../components/invest.js/AgricCard";
import Link from "next/link";
import EstatesCardMobile from "./RealEstateMobile";
import AgricCardMobile from "../components/invest.js/MobileAgricCard";
export default function Education() {
  return (
    <>
      <h1 className="  text-[36px] md:text-6xl flex justify-center md:w-[331px] md:h-[43px] md:justify-normal mr-[50px] md:ml-[128px] font-bold font-[Clash Display] md:mb-20 mb-4 mt-[50px] ">
        Education
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mb-40 md:mb-28 gap-10 w-11/12">
        <div className="md:col-span-2 bg-white mt-10 p-2 w-[380.28px] md:w-[700px] md:h-[508px]">
          <div className="flex gap-8 md:gap-4">
            <div>
              <Image
                src={Pic1}
                className="ml-2 md:h-[500px] object-cover rounded-lg w-[206.76px] h-[239.88px] md:w-[387px] -mt-10 md:ml-28 md:-mt-20"
              />
            </div>
            <div className="mr-[50px] md:ml-[640px] -mt-10 md:-mt-20 md:absolute md:hidden">
              <EstatesCardMobile />
              {/* row two */}
              <div className="mt-5">
                <AgricCardMobile value={50} />
              </div>
            </div>
            <div className="mr-[50px] md:ml-[510px] -mt-10 md:-mt-20 md:absolute hidden md:block">
              <EstatesCard />
              {/* row two */}
              <div className="mt-5">
                <AgricCard value={50} />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto md:mx-0 md:ml-auto md:w-[330px] h-[369px] md:leading-[24.21px] w-[310px]">
          <div className="md:-mt-10 ml-2">
            <p className="bg-white rounded-lg p-8 h-2/3 text-[18px] font-[]">
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
                className=" ml-48 hidden md:flex mt-10"
                src={Svg2}
              />
            </p>
            <div className="mt-5">
              <Link href="/explore">
                {" "}
                <Button text="Invest in Education" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
