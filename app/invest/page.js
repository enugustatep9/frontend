import Image from "next/image";
import Pic1 from "@/public/images/frame_2.png";
import Pic2 from "@/public/images/senior2.png";
import MainLayout from "../layouts/includes/MainLayout";
import TechVile from "./TechVile";
import RealEstate from "./RealEstate";
import Education from "./Education";
import Agriculture from "./Agriculture";
import Tourism from "./Tourism";
import Feedback from "./Feedback";
import Faq from "./Faq";

import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import DemoComponent from "./DemoComponent";

export default function Invest() {
  return (
    <>
      <MainLayout>
        <MobileView />
        <DesktopView />
        <TechVile />
        <RealEstate />
        <Education />
        <Agriculture />
        <Tourism />
        {/* <DemoComponent /> */}
        <Feedback />
        <Faq />
      </MainLayout>
    </>
  );
}
