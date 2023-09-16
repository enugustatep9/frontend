import Image from "next/image";
import styles from "./page.module.scss";
import MainLayout from "./layouts/includes/MainLayout";
import GovernorDen from "./components/governor_den/GovernorDen";
import Accolades from "./components/accolades/Accolades";
import Universities from "./components/universities/Universities";
import Button from "./components/button/Button";
import collab_bg from "@/public/images/collaborate_bg.svg";
import Entertainments from "./components/entertainment/Entertainments";
import Explore from "./components/explore/Explore";
import Invest from "./components/invest.js/Invest";
import heritageImg from "@/public/images/heritage.png";
import Hero from "./components/hero/Hero";
import Collaborate from "./components/collaborate/Collaborate";
import Future from "./components/invest.js/Future";

export default function Home() {
  return (
    <>
      <MainLayout>
        <main className={styles.main}>
          <Hero />
          <section className={styles.heritage}>
            <div className={styles.heritage_content}>
              <div className={styles.heritage_content_text}>
                <h2 data-aos="fade-up">
                  Where Heritage <br />
                  meets Progress
                </h2>
                <p data-aos="fade-up">
                  "Where vibrant culture thrives! Nestled in Nigeria, our rich
                  heritage resonates through traditional dances, captivating
                  festivals, and warm hospitality. Explore landmarks, savour
                  cuisine, and immerse in Enugu's cultural embrace. Discover the
                  magic of our cherished cultural treasure."
                </p>
              </div>
              <div className={styles.heritage_content_img} data-aos="fade-up">
                <div className={styles.heritage_empty_box} data-aos="fade-up">
                  .
                </div>
                <div className={styles.imgg}>
                  <Image
                    data-aos="fade-up"
                    src={heritageImg}
                    alt="enugu heritage"
                  />
                </div>
              </div>
            </div>
            <div className={styles.heritage_stats} data-aos="fade-up">
              <div className={styles.heritage_stats_item} data-aos="fade-up">
                <p className={styles.number} data-aos="fade-up">
                  17
                </p>
                <p className={styles.label} data-aos="fade-up">
                  LGAs
                </p>
              </div>
              <div className={styles.heritage_stats_item} data-aos="fade-up">
                <p className={styles.number} data-aos="fade-up">
                  25
                </p>
                <p className={styles.label} data-aos="fade-up">
                  Ministries
                </p>
              </div>
              <div className={styles.heritage_stats_item} data-aos="fade-up">
                <p className={styles.number} data-aos="fade-up">
                  107+
                </p>
                <p className={styles.label} data-aos="fade-up">
                  MDAs
                </p>
              </div>
            </div>
          </section>
          <Future />
          <Explore />
          <Entertainments />
          <Collaborate />
          <Universities />
          <GovernorDen />
        </main>
      </MainLayout>
    </>
  );
}
