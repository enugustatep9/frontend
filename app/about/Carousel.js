import styles from "../about/Landmark.module.scss";
import LandmarkCard from "./LandmarkCard";
import Svg from "@/public/images/s1.svg";
import Image from "next/image";
import "../about/about.css";

export default function Carousel() {
  return (
    <section className={styles.invest}>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="flex gap-2">
          <Image src={Svg} className="" />
          <h1 className="mt-20 md:mt-10 text-3xl md:text-4xl">
            Landmarks in Enugu
          </h1>
        </div>
        <div className="col-span-2 mt-20 pb-10">
          <LandmarkCard />
        </div>
      </div>
    </section>
  );
}
