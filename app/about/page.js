import Button from "../components/button/Button";
import Explore from "../components/explore/Explore";
import Gallery from "../components/image_gallery/Gallery";
import MainLayout from "../layouts/includes/MainLayout";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Carousel from "./Carousel";
import styles from "../components/explore/Explore.module.scss";
import Section from "./Section";
import Pic1 from "@/public/images/AboutBg.png";
import Svg1 from "@/public/images/about_v.svg";
import Svg2 from "@/public/images/about3_f.svg";
import Image from "next/image";
import Feedback from "../invest/Feedback";
export default function About() {
  return (
    <>
      <MainLayout>
        <main className="mb-28 mt-10">
          <div className="text-center bg-[#F8F8F8] rounded-2xl w-[87%] mx-auto">
            <Image

              src={Svg2}
              className="absolute right-0 md:right-10 top-20 md:top-20 md:w-16 w-10"
            />

            <h2 className="text-center font-semibold text-5xl pt-10 tracking-tighter md:p-10 p-5">
              Tracing Our Rich Heritage:
              <br /> A Journey Through Time.
            </h2>
            {/* <Gallery /> */}
            <Image
              src={Svg1}
              className="absolute object-contain md:ml-10 w-10 md:w-16"
            />

            <div className="w-full md:w-11/12 mt-10 pb-10 mx-auto ">
              <Image src={Pic1} className="object-cover" />
            </div>
          </div>
          <div className="mt-10 mb-10">
            <p className="md:w-1/2 ml-10 md:ml-24 text-[#838384] font-bold text-2xl">
              Dive into Enugu's Enigmatic History: From Coal Hub to Biafra's
              Heart, Unveil Mesmerizing Tales.
              <br />
              <span className="text-black">
                Immerse in Culture, Festivals, and Enduring Spirit. Explore
                Enugu's Legacy - a Captivating Journey!
              </span>
            </p>
          </div>
          <div className="w-[87%] mx-auto">
            <Card />
          </div>
          <div className="w-[87%] mx-auto mt-10">
            <Card2 />
          </div>
          <div className="w-[87%] mx-auto mt-10">
            <Card3 />
          </div>

          <Explore />

          <Carousel />
          <div className="w-[87%] mx-auto mt-10 ">
            <Section />
          </div>
        </main>
      </MainLayout>
    </>
  );
}
