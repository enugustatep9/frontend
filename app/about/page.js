import Explore from "../components/explore/Explore";
import MainLayout from "../layouts/includes/MainLayout";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Carousel from "./Carousel";
import Svg3 from "@/public/images/v4.svg";
import Svg4 from "@/public/images/v3.svg";
import Svg5 from "@/public/images/gallery_icon.svg";

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
import YourNextPage from "./TestCarousel";
import PhotoGalleryDemo from "../components/PhotoGalleryDemo";
import CardTest from "./test";
export default function About() {
  return (
    <>
      <MainLayout>
        <main className="sm:w-[100%] md:w-[95%] lg:w-[100%] lg:mx-auto md:mx-auto sm:mb-10 md:mb-[80px] md:top-[110px] top-[127px]">
          <Image
            src={Svg5}
            className="absolute right-0 mt-14 md:block hidden"
          />
          <div className="text-center bg-[#F8F8F8] rounded-[19px] md:rounded-[33px] sm:h-[534px] md:w-[100%] lg:w-[1303px] md:h-[1000px] sm:w-[95%] mx-auto">
            <Image
              src={Svg2}
              className="absolute right-0 md:right-10 top-20 md:top-20 md:w-16 w-10 hidden sm:hidden"
            />
            <Image src={Svg4} className="absolute right-20 mt-4 sm:hidden" />

            <h2 className="text-center font-semibold text-[32px] lg:text-[64px]  pt-10 tracking-tighter lg:p-10 p-5 leading-[35.68px] lg:leading-[71.36px] md:-[114px] md:pt-[136px] mx-auto md:w-[90%] lg:w-[841px] md:mx-auto sm:hidden xs:hidden md:block  justify-center font-[Clash Display]">
              Tracing Our Rich Heritage:
              <br /> A Journey Through Time.
            </h2>

            <h2 className="text-center font-semibold text-[32px]  pt-10 tracking-tighter p-5 leading-[35.68px] md:hidden font-[Clash Display]  h-[93px] mx-auto top-[69px]">
              Tracing Our Rich Heritage: A Journey Through Time.
            </h2>
            {/* <PhotoGallery /> */}
            <PhotoGalleryDemo />
            <ScrollToDownButton />
            <Image
              src={Svg1}
              className="absolute object-contain md:ml-10 w-10 md:w-16 hidden"
            />
          </div>
          <div className=" md:mt-0 mt-10 sm:mb-0 sm:ml-0  sm:flex sm:justify-center sm:mx-auto">
            <div className="md:mt-[80px] md:p-0 md:mx-0 md:ml-[100px] md:mr-auto mx-auto md:w-[50%] text-[#838384] font-bold text-[24px] md:text-[36px] sm:leading-[27.36px] md:leading-[41.04px] sm:text-[24px] font-[Clash Display] sm:w-[90%]">
              <p className="font-bold">
                Dive into Enugu's Enigmatic History: From Coal Hub to Biafra's
                Heart, Unveil Mesmerizing Tales.
                <br />
                <span className="text-black">
                  Immerse in Culture, Festivals, and Enduring Spirit. Explore
                  Enugu's Legacy - a Captivating Journey!
                </span>
              </p>
            </div>
          </div>
        </main>
        <section className="mb-40 ">
          <Card />
          <Card2 />
          <Card3 />
          <Explore />
          <Carousel />
          {/* <CardTest /> */}
          {/* <YourNextPage /> */}
          <Future />
        </section>
      </MainLayout>
    </>
  );
}
