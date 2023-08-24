import Image from "next/image";
import Pic1 from "@/public/images/frame_2.png";
import MainLayout from "../layouts/includes/MainLayout";
import TechVile from "./TechVile";
import RealEstate from "./RealEstate";
import Education from "./Education";
import Agriculture from "./Agriculture";
import Tourism from "./Tourism";
import Feedback from "./Feedback";
import Faq from "./Faq";
import Svg3 from "@/public/images/Rectangle.svg";

export default function Invest() {
  return (
    <>
      <MainLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-40  md:mb-28 bg-[#F2EEEB] w-[87%] mx-auto rounded-lg ">
          <h1 className="text-5xl md:hidden flex md:text-6xl mt-20 text-center">
            Invest in the Future of Enugu State
          </h1>
          <div>
            <Image src={Pic1} className="ml-20 mx-auto" />
          </div>
          <div className=" -mt-[10rem] md:mt-32">
            <h1 className="text-5xl hidden md:flex md:text-6xl mt-20 w-2/3">
              Invest in the Future of Enugu State
            </h1>
            <div className="mt-10">
              <div className="flex gap-4 items-center md:justify-normal justify-center">
                <div className="flex items-center justify-center bg-primary text-secondary rounded-lg p-8 md:p-8 w-1/2 md:w-1/3 md:h-52">
                  <div>
                    <Image src={Svg3} />
                    <h2 className="text-6xl">50%</h2>
                    <h3>
                      Increase In
                      <br /> Agriculture
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-secondary text-primary rounded-lg p-8 md:p-8 w-1/2 md:w-1/3 md:h-52">
                  <div>
                    <h2 className="text-6xl">30%</h2>
                    <h3>
                      Increase In
                      <br /> Health
                    </h3>
                  </div>
                </div>
              </div>

              {/* grid two */}
              <div className="flex gap-4 mt-5 items-center md:justify-normal justify-center">
                <div className=" flex items-center justify-center bg-primary text-secondary rounded-lg p-8 md:p-8  w-1/2 md:w-1/3 md:h-52">
                  <div>
                    <h2 className="text-6xl">30%</h2>
                    <h3>
                      Increase In
                      <br /> Agriculture
                    </h3>
                  </div>
                </div>
                <div className=" flex items-center justify-center bg-white text-black rounded-lg p-8 md:p-8  w-1/2 md:w-1/3 md:h-52">
                  <div>
                    <h2 className="text-6xl">80%</h2>
                    <h3>
                      Increase In
                      <br /> RealEstate
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[94%] mt-5">
          <TechVile />
        </div>
        <div>
          <RealEstate />
        </div>
        <div className="w-[94%] mt-5">
          <Education />
        </div>
        <div>
          <Agriculture />
        </div>
        <div className="w-[94%] mt-5">
          <Tourism />
        </div>
        <Feedback />
        <Faq />
      </MainLayout>
    </>
  );
}
