import Image from "next/image";
import AboutImage1 from "../../../public/images/hero_sm2.png";

export default function Gallery() {
  return (
    <div className="grid grid-cols-5 md:gap-0 gap-4 h-auto w-11/12 md:w-4/6 mx-auto mt-8 pb-10">
      <div>
        <Image
          src={AboutImage1}
          className="h-[70%]"
          style={{ marginTop: "50px" }}
        />
      </div>
      <div>
        <div>
          <Image src={AboutImage1} className="h-24" />
        </div>
        <div className="mt-3">
          <Image src={AboutImage1} className="h-24" />
        </div>
        <div className="mt-3">
          <Image src={AboutImage1} className="h-14" />
        </div>
      </div>
      <div>
        <Image
          src={AboutImage1}
          className="h-[100%]"
          style={{ marginTop: "" }}
        />
      </div>
      <div>
        <div>
          <Image src={AboutImage1} className="h-14" />
        </div>
        <div className="mt-3">
          <Image src={AboutImage1} className="h-24" />
        </div>
        <div className="mt-3">
          <Image src={AboutImage1} className="h-24" />
        </div>
      </div>
      <div>
        <Image
          src={AboutImage1}
          className="h-[70%]"
          style={{ marginTop: "50px" }}
        />
      </div>
    </div>
  );
}
