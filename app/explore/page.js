import Image from "next/image";
import MainLayout from "../layouts/includes/MainLayout";
import TabComponent from "./Tabs";
import Feedback from "../invest/Feedback";
import Faq from "../invest/Faq";
import Doodle from "@/public/images/doodle.svg";
import svg1 from "@/public/images/invest_svg.svg";
import svg2 from "@/public/images/invest_svg1.svg";
import ScrollToDownButton from "../components/arrowDownButton/ArrowDownBtn";

export default function Explore() {
  return (
    <>
      <MainLayout>
        <div className="md:p-20 mb-10  md:mb-18 bg-[#F2EEEB] w-10/12  md:w-[1199px] h-[448px] md:h-[448px] flex items-center mx-auto rounded-xl">
          <Image
            src={Doodle}
            className="absolute top-[90px] left-[28px]  md:top-[110px] md:left-[75px]"
          />

          <Image src={svg1} className="absolute right-20 -mt-[300px]" />
          <Image src={svg2} className="absolute right-36 -mt-[430px]" />
          <div>
            <div className="flex justify-center mx-auto">
              <h1 className="text-[30px] font-[Clash Display] leading-[32px] md:hidden  font-bold w-10/12">
                Explore Investments Opportunities
              </h1>
            </div>

            <div className="">
              <h1 className="hidden leading-[57px] md:block text-[64px] font-bold w-1/2">
                Explore Investments Opportunities
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-start md:justify-start ml-10 -mt-[40px] md:-mt-[60px] md:ml-40 z-10">
          <ScrollToDownButton />
        </div>
        <TabComponent />
        <Feedback />
        <Faq />
      </MainLayout>
    </>
  );
}
