import Image from "next/image";
import Svg4 from "@/public/images/smcardone.svg";
import Svg5 from "@/public/images/about_desktop.svg";
import Link from "next/link";
import Button from "../components/button/Button";
import EstatesCard from "../components/invest.js/EstateCard";
import AgricCard from "../components/invest.js/AgricCard";
import Pic1 from "@/public/images/estate.png";

export default function RealEstate() {
  return (
    <>
      <h1 className="sm:text-[36px] sm:w-0 md:text-6xl flex  md:w-[331px] md:h-[43px] md:justify-normal  md:ml-[70px] font-bold font-[Clash Display] md:mb-20 mb-4 sm:mb-[60px] sm:mt-[30px] mt-[170px] text-[36px]  sm:mr-auto sm:pl-7">
        RealEstate
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 md:w-[90%] sm:w-[90%] gap-10 md:ml-auto sm:ml-auto">
        <div className="md:mr-28 sm:mr-5 lg:mr-20 md:mx-auto sm:mx-auto md:hidden lg:block sm:hidden">
          <div className="bg-white  sm:h-[350.7px] md:h-[352px] lg:h-[552px] rounded-[14px] relative ">
            <p className="md:p-10 sm:p-5 lg:p-10 md:text-[16px] lg:text-[18px] lg:leading-[24.21px]">
              Craft Your Vision in Enugu's Urban Canvas. Explore a World of Real
              Estate Opportunities Where Modern Urban Planning Meets Affordable
              Housing Initiatives. Become a Part of Enugu's Transformative
              Growth as We Create Sustainable Communities and Shape the Skyline
              Together
            </p>
            <Image
              src={Svg5}
              className="absolute bottom-0 right-0 sm:hidden md:block lg:block"
            />
          </div>
          <div className="mt-5">
            <Link href="/explore">
              {" "}
              <Button text="Invest in RealEstate" />
            </Link>
          </div>
        </div>

        <div className="md:col-span-2 md:mt-10 bg-white md:w-[100%] pb-10">
          <div className="flex gap-4 md:-ml-10 -ml-4">
            <div className="md:-mt-10 -mt-5">
              <div>
                <EstatesCard value={39} />
              </div>
              <div className="mt-2">
                <AgricCard value={50} />
              </div>
            </div>
            <div>
              <Image
                src={Pic1}
                className="md:w-[100%] sm:w-[80%]  md:h-[530px] h-[300px] md:-mt-10 -mt-5"
              />
            </div>
          </div>
        </div>

        {/* display bock */}

        <div className="sm:block md:mx-auto lg:hidden md:block">
          <div className="md:w-full sm:w-full md:mr-16 sm:-ml-5 lg:mr-20 md:mx-auto sm:mx-auto ">
            <div className="bg-white  sm:h-[356.7px] md:h-[352px] lg:h-[552px] rounded-[14px] relative ">
              <p className="md:p-10 sm:p-5 lg:p-10 md:text-[16px] lg:text-[18px] lg:leading-[24.21px]">
                Craft Your Vision in Enugu's Urban Canvas. Explore a World of
                Real Estate Opportunities Where Modern Urban Planning Meets
                Affordable Housing Initiatives. Become a Part of Enugu's
                Transformative Growth as We Create Sustainable Communities and
                Shape the Skyline Together
              </p>
              <Image
                src={Svg5}
                className="absolute bottom-0 right-0 sm:hidden md:block lg:block"
              />
            </div>
            <div className="mt-5">
              <Link href="/explore">
                {" "}
                <Button text="Invest in RealEstate" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
