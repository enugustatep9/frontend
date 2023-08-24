"use client";
import Image from "next/image";
import Pic from "@/public/images/stadium.png";
import Pic2 from "@/public/images/africansenior.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

export default class LandmarkCard extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 5000, // Adjust the autoplay speed as needed
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="">
            <div className="rounded-md bg-white p-5 mx-2">
              <h1 className="text-2xl">Nnamdi Azikiwe Stadium</h1>
              <p className="mt-5">
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
          </div>
          <div>
            <Image src={Pic} className="rounded-md" />
          </div>
          <div>
            <Image src={Pic2} className="rounded-md" />
          </div>
          <div>
            <div className="rounded-md bg-white p-5 mx-2">
              <h1 className="text-2xl">Nnamdi Azikiwe Stadium</h1>
              <p className="mt-5">
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
          </div>
          <div>
            <Image src={Pic2} className="rounded-md" />
          </div>
          <div>
            <div className="rounded-md bg-white p-5 mx-2">
              <h1 className="text-2xl">Nnamdi Azikiwe Stadium</h1>
              <p className="mt-5">
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
          </div>
          <div>
            <Image src={Pic2} className="rounded-md" />
          </div>
        </Slider>
      </div>
    );
  }
}
