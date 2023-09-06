import Image from "next/image";
import Pic1 from "@/public/images/techVilleNew.png";
import Svg1 from "@/public/images/Vector.svg";
import Svg2 from "@/public/images/vector_2.svg";
import Svg4 from "@/public/images/smcardone.svg";
import Svg5 from "@/public/images/about_desktop.svg";

import Button from "../components/button/Button";
import AgricCard from "../components/invest.js/AgricCard";
import EstatesCard from "../components/invest.js/EstateCard";
import Link from "next/link";
import EstatesCardMobile from "./RealEstateMobile";
import AgricCardMobile from "../components/invest.js/MobileAgricCard";
import ChildrenCard from "./ChildrenCard";
import RealEstateTest from "../about/test";
export default function TechVile() {
  return (
    <>
      <h1 className="sm:text-[36px] sm:w-0 md:text-6xl flex  md:w-[331px] md:h-[43px] md:justify-normal  md:ml-[100px] font-bold font-[Clash Display] md:mb-20 mb-4 sm:mb-[60px] sm:mt-[150px] mt-[170px] text-[36px]  sm:mr-auto sm:pl-7">
        TechVile
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 md:w-[90%] sm:w-[90%] gap-10 md:mr-auto sm:mr-auto">
        <div className="md:col-span-2 md:mt-10 bg-white md:w-[100%] pb-10">
          <div className="flex gap-4 md:ml-28 ml-10">
            <div>
              <Image
                src={Pic1}
                className="md:w-[100%] sm:w-[100%]  md:h-[530px] h-[300px] md:-mt-10 -mt-5 object-cover rounded-[12px]"
              />
            </div>
            <div className="md:-mt-10 sm:-mr-4 -mt-5 md:-mr-44">
              <div>
                <ChildrenCard value={39} />
              </div>
              <div className="mt-2">
                <AgricCard value={50} />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[80%] md:ml-16 sm:w-full  sm:-mr-3 lg:ml-20 md:mx-auto sm:mx-auto ">
          <div className="bg-white  sm:h-[256.7px] md:h-[352px] lg:h-[552px] rounded-[14px] relative ">
            <p className="md:p-10 sm:p-5 lg:p-10 md:text-[16px] lg:text-[18px] lg:leading-[24.21px]">
              Forge Enugu's Technological Frontier. Invest in the Tech Scene of
              Enugu, Where Innovation and Progress Intersect. Collaborate with
              Pioneering Minds to Drive the Digital Evolution and Position Enugu
              as a Hub of Technological Advancements
            </p>
            <Image
              src={Svg5}
              className="absolute bottom-0 right-0 sm:hidden md:block lg:block"
            />
          </div>
          <div className="mt-5">
            <Link href="/explore">
              {" "}
              <Button text="Invest in Techville" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
