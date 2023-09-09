import "@/app/about/about.css";
import Image from "next/image";
import Svg1 from "@/public/images/box.svg";
import Svg2 from "@/public/images/pic_svg.svg";
import Pic1 from "@/public/images/stadium.png";
import Pic2 from "@/public/images/africansenior.png";
import Pic3 from "@/public/images/museum.png";
import Pic4 from "@/public/images/park.png";

export default function LandmarkCard() {
  return (
    <>
      <div className="wrapper">
        <Image src={Svg1} className=" md:-ml-12 mb-[500px] md:mb-[600px]" />
        <h1 className="md:text-6xl text-[28px] ml-10 font-bold ">
          Landmarks in Enugu
        </h1>
        <div className="item item1 p-10 z-50">
          <h1 className="flex w-1/5 text-3xl font-bold mt-10">
            Nnamdi Azikiwe Stadium
          </h1>
          <p className="text-left mt-5 text-[18px] leading-[24.21px]">
            Nnamdi Azikiwe Stadium, a sporting jewel nestled in Enugu, Nigeria,
            is a vibrant hub for athletic excellence. Named after the iconic
            Nigerian statesman, this stadium has witnessed thrilling football
            clashes, hosting local and international matches that electrify the
            crowd. With a capacity to hold 25,000 of passionate fans, it's a
            symbol of unity and a testament to the nation's sporting prowess.
            Experience the magic of African football at Nnamdi Azikiwe Stadium
          </p>
        </div>
        {/* <Image src={Svg2} className="absolute -mt-10 z-20 hidden md:flex" /> */}
        <div className="item item2 z-50 relative">
          <Image
            src={Pic1}
            className="object-cover h-[655px] rounded-[14px] z-50 w-full"
          />
          <Image
            src={Svg2}
            className="absolute md:bottom-14 md:left-20 object-cover"
          />
        </div>
        <div className="item item3 ">
          <Image
            src={Pic2}
            className="object-cover z-50 h-[800px] rounded-[14px] w-full"
          />
        </div>
        <div className="item item4 p-10 z-50">
          <h1 className="flex w-1/5 text-3xl font-bold mt-10">
            National Museum of Unity
          </h1>
          <p className="text-left mt-5 text-[18px] leading-[24.21px]">
            The National Museum of Unity, located in Enugu, Nigeria, serves as a
            repository of the nation's diverse cultural heritage. Founded in
            1991, the museum showcases a wide array of artifacts, artworks, and
            historical items, offering visitors a glimpse into the rich tapestry
            of Nigeria's traditions and history. The museum's exhibits provide
            insights into the cultural, social, and artistic aspects of various
            Nigerian ethnic groups, celebrating unity in diversity.
          </p>
        </div>
        <div className="item item5 z-50">
          <Image
            src={Pic3}
            className="object-cover h-[655px] rounded-[14px] z-50 w-full"
          />
        </div>
        <div className="item item6 p-10 z-50">
          <h1 className="flex w-1/5 text-3xl font-bold mt-10">Unity Park</h1>
          <p className="text-left mt-5 text-[18px] leading-[24.21px]">
            Unity Park in Enugu is a tranquil recreational space that holds
            historical significance. Once a colonial-era prison, it has been
            transformed into a serene park where residents and visitors alike
            can unwind and enjoy nature. The park's peaceful ambiance, lush
            greenery, and picturesque surroundings make it a popular destination
            for relaxation, picnics, and leisure activities. The transformation
            of a site with historical significance into a space of unity and
            leisure reflects Enugu's dynamic blend of history and progress.
          </p>
        </div>
        <div className="item item7">
          <Image
            src={Pic4}
            className="object-cover h-[655px] rounded-[14px] z-50 w-full"
          />
        </div>
      </div>
    </>
  );
}
