import Image from "next/image";
import Pic1 from "../../public/images/frame_1.png";

export default function Section() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
        <div>
          <Image src={Pic1} />
        </div>
        <div className="mt-20">
          <h1 className="text-5xl md:text-6xl">
            Invest in the Future of Enugu State
          </h1>
          <p className="md:mt-10">
            Be a part of Enugu's remarkable journey towards progress and
            innovation. Here, we showcase a range of transformative projects
            that the Enugu State Government is embarking on, offering you a
            chance to invest in these initiatives and reap the rewards of your
            partnership.
          </p>
        </div>
      </div>
    </>
  );
}
