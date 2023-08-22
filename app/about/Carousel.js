"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Pic1 from "../../public/images/core_admin1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 h-auto rounded-md">
              <h1>Nnamdi Azikwe Stadium</h1>
              <p className=" text-left mt-5">
                Nnamdi Azikiwe Stadium, a sporting jewel nestled in Enugu,
                Nigeria, is a vibrant hub for athletic excellence. Named after
                the iconic Nigerian statesman, this stadium has witnessed
                thrilling football clashes, hosting local and international
                matches that electrify the crowd. With a capacity to hold 25,000
                of passionate fans, it's a symbol of unity and a testament to
                the nation's sporting prowess. Experience the magic of African
                football at Nnamdi Azikiwe Stadium
              </p>
            </div>
            <div className="md:col-span-2 h-[50%] md:h-[65%] rounded-md">
              <Image src={Pic1} className="rounded-md" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 h-auto rounded-md">
              <h1>National Museum of Unity</h1>
              <p className=" text-left mt-5">
                The National Museum of Unity, located in Enugu, Nigeria, serves
                as a repository of the nation's diverse cultural heritage.
                Founded in 1991, the museum showcases a wide array of artifacts,
                artworks, and historical items, offering visitors a glimpse into
                the rich tapestry of Nigeria's traditions and history. The
                museum's exhibits provide insights into the cultural, social,
                and artistic aspects of various Nigerian ethnic groups,
                celebrating unity in diversity.
              </p>
            </div>
            <div className="md:col-span-2 h-[50%] md:h-[65%] rounded-md">
              <Image src={Pic1} className="rounded-md" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 h-auto rounded-md">
              <h1>Nnamdi Azikwe Stadium</h1>
              <p className=" text-left mt-5">
                Nnamdi Azikiwe Stadium, a sporting jewel nestled in Enugu,
                Nigeria, is a vibrant hub for athletic excellence. Named after
                the iconic Nigerian statesman, this stadium has witnessed
                thrilling football clashes, hosting local and international
                matches that electrify the crowd. With a capacity to hold 25,000
                of passionate fans, it's a symbol of unity and a testament to
                the nation's sporting prowess. Experience the magic of African
                football at Nnamdi Azikiwe Stadium
              </p>
            </div>
            <div className="md:col-span-2 h-[50%] md:h-[65%] rounded-md">
              <Image src={Pic1} className="rounded-md" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
