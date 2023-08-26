import Image from "next/image";
import MainLayout from "../layouts/includes/MainLayout";
import TabComponent from "./Tabs";
import Feedback from "../invest/Feedback";
import Faq from "../invest/Faq";
import ScrollToDownButton from "../components/arrowDownButton/ArrowDownBtn";

export default function Explore() {
  return (
    <>
      <MainLayout>
        <div className="md:p-20 mb-10  md:mb-18 bg-[#F2EEEB] w-10/12  md:w-[1199px] h-[448px] md:h-[448px] flex items-center mx-auto rounded-xl ">
          <div>
            <h1 className="text-[36px] md:hidden flex justify-center md:text-6xl text-left mx-auto font-bold">
              Explore Investments Opportunities
            </h1>
            <div className="">
              <h1 className="text-5xl hidden md:block text-[64px] font-bold w-1/2">
                Explore Investments Opportunities
              </h1>
            </div>
          </div>
        </div>
        <ScrollToDownButton />
        <TabComponent />
        <Feedback />
        <Faq />
      </MainLayout>
    </>
  );
}
