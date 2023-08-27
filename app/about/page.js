import Explore from "../components/explore/Explore";
import MainLayout from "../layouts/includes/MainLayout";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Carousel from "./Carousel";
import Svg3 from "@/public/images/v4.svg";
import Svg4 from "@/public/images/v3.svg";

import Section from "./Section";
import Pic1 from "@/public/images/AboutBg.png";
import Svg1 from "@/public/images/about_v.svg";
import Svg2 from "@/public/images/about3_f.svg";
import Image from "next/image";
import Gallery from "../components/image_gallery/Gallery";
import PhotoGallery from "../components/image_gallery/PhotoGallery";
import Future from "../components/invest.js/Future";
import "@/app/about/about.css";
import ScrollToDownButton from "../components/arrowDownButton/ArrowDownBtn";
export default function About() {
  return (
    <>
      <MainLayout>
        <main className="mb-40 md:top-[110px] top-[127px]">
          <div className="text-center bg-[#F8F8F8] rounded-[19px] md:rounded-[33px] h-[534px] md:w-[1303px] md:h-[1000px] w-[290px] mx-auto">
            <Image
              src={Svg2}
              className="absolute right-0 md:right-10 top-20 md:top-20 md:w-16 w-10 hidden"
            />
            <Image src={Svg4} className="absolute right-20 mt-4" />

            <h2 className="text-center font-semibold text-[32px] md:text-[64px] pt-10 tracking-tighter md:p-10 p-5 leading-[35.68px] md:leading-[71.36px] md:-[114px] md:top-[136px] mx-auto md:w-[841px] hidden md:flex justify-center font-[Clash Display]">
              Tracing Our Rich Heritage:
              <br /> A Journey Through Time.
            </h2>

            <h2 className="text-center font-semibold text-[32px]  pt-10 tracking-tighter p-5 leading-[35.68px] md:hidden font-[Clash Display]  h-[93px] mx-auto top-[69px] ">
              Tracing Our Rich Heritage: A Journey Through Time.
            </h2>
            <PhotoGallery />
            <ScrollToDownButton />
            <Image
              src={Svg1}
              className="absolute object-contain md:ml-10 w-10 md:w-16 hidden"
            />
          </div>
          <div className="mt-10 mb-10 md:ml-[90px]">
            <p className="md:h-[229px] h-[232px] p-5 md:p-0 md:mx-0 mx-auto md:ml-24 text-[#838384] font-bold text-[24px] md:text-[36px] leading-[27.36px] md:leading-[41.04px] w-[328px] md:w-[620px] font-[Clash Display]">
              Dive into Enugu's Enigmatic History: From Coal Hub to Biafra's
              Heart, Unveil Mesmerizing Tales.
              <br />
              <span className="text-black">
                Immerse in Culture, Festivals, and Enduring Spirit. Explore
                Enugu's Legacy - a Captivating Journey!
              </span>
            </p>
          </div>
        </main>
        <section className="mb-40 ">
          <Card />
          <Card2 />
          <Card3 />
          <Explore />
          <Carousel />
          <Future />
        </section>
      </MainLayout>
    </>
  );
}
