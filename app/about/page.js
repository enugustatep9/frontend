import Button from "../components/button/Button";
import Gallery from "../components/image_gallery/Gallery";
import MainLayout from "../layouts/includes/MainLayout";
import Card from "./Card";
import Card2 from "./Card2";

export default function About() {
  return (
    <>
      <MainLayout>
        <main className="mb-28 mt-5">
          <div className="text-center bg-[#FFF] rounded-2xl w-[87%] mx-auto">
            <h2 className="text-center font-semibold text-4xl pt-10 tracking-tighter">
              Tracing Our Rich Heritage:
              <br /> A Journey Through Time.
            </h2>
            <Gallery />
          </div>
          <div className="mt-10 mb-10">
            <p className="md:w-1/3 ml-10 md:ml-24 text-[#838384] font-bold text-2xl">
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
        </main>
      </MainLayout>
    </>
  );
}
