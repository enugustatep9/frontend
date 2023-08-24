import Image from "next/image";
import MainLayout from "../layouts/includes/MainLayout";
import TabComponent from "./Tabs";
import Feedback from "../invest/Feedback";
import Faq from "../invest/Faq";

export default function Explore() {
  const tabs = [
    "All",
    "Education",
    "Tech",
    "Agriculture",
    "Economy",
    "Tourism",
    "Real Estate",
    "Health",
  ];

  const tabContents = [
    {
      title: "Tab 1",
      description: "Content for tab 1",
    },
    {
      title: "Tab 2",
      description: "Content for tab 1",
    },
    {
      title: "Tab 3",
      description: "Content for tab 1",
    },
    {
      title: "Tab 4",
      description: "Content for tab 1",
    },
    {
      title: "Tab 4",
      description: "Content for tab 1",
    },
    {
      title: "Tab 5",
      description: "Content for tab 1",
    },
    {
      title: "Tab 6",
      description: "Content for tab 1",
    },
    {
      title: "Tab 7",
      description: "Content for tab 1",
    },
    {
      title: "Tab 8",
      description: "Content for tab 1",
    },
  ];

  return (
    <>
      <MainLayout>
        <div className="md:p-20 mb-40  md:mb-28 bg-[#F2EEEB] w-[87%] h-[350px] flex items-center mx-auto rounded-xl ">
          <div>
            <h1 className="text-5xl md:hidden flex justify-center md:text-6xl text-center">
              Explore Investments Opportunities
            </h1>
            <div className="">
              <h1 className="text-5xl hidden md:flex md:text-6xl  w-1/2">
                Explore Investments Opportunities
              </h1>
            </div>
          </div>
        </div>
        <TabComponent tabs={tabs} tabContents={tabContents} />
        <Feedback />
        <Faq />
      </MainLayout>
    </>
  );
}
