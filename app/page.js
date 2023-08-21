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

export default function Home() {
  return (
    <>
      <MainLayout>
        <main className={styles.main}>
          <Hero />
          <section className={styles.heritage}>
            <div className={styles.heritage_content}>
              <div className={styles.heritage_content_text}>
                <h2>
                  Where Heritage <br />
                  meets Progress
                </h2>
                <p>
                  "Where vibrant culture thrives! Nestled in Nigeria, our rich
                  heritage resonates through traditional dances, captivating
                  festivals, and warm hospitality. Explore landmarks, savour
                  cuisine, and immerse in Enugu's cultural embrace. Discover the
                  magic of our cherished cultural treasure."
                </p>
              </div>
              <div className={styles.heritage_content_img}>
                <div className={styles.heritage_empty_box}>.</div>
                <div className={styles.imgg}>
                  <Image src={heritageImg} alt="enugu heritage" />
                </div>
              </div>
            </div>
            <div className={styles.heritage_stats}>
              <div className={styles.heritage_stats_item}>
                <p className={styles.number}>17</p>
                <p className={styles.label}>LGAs</p>
              </div>
              <div className={styles.heritage_stats_item}>
                <p className={styles.number}>25</p>
                <p className={styles.label}>Ministries</p>
              </div>
              <div className={styles.heritage_stats_item}>
                <p className={styles.number}>107+</p>
                <p className={styles.label}>MDAs</p>
              </div>
            </div>
          </section>
          <Invest />
          <Explore />
          <Entertainments />
          <section className={styles.collaborate}>
            <div className={styles.collaborate_container}>
              <div className={styles.collaborate_bg}>
                <Image src={collab_bg} alt="svg bg" />
              </div>
              <div className={styles.collaborate_content}>
                <h2>
                  <span>Collaborate with Enugu State:</span> Your Global Partner
                  for Mutual Growth and Prosperity
                </h2>
                <p>
                  Together, we can forge powerful partnerships, tap into diverse
                  expertise, and unlock the true potential of interconnected
                  success.
                </p>
                <Button text="Collaborate with us" hover={false} />
              </div>
            </div>
          </section>
          <Universities />
          <Accolades />
          <GovernorDen />
        </main>
      </MainLayout>
    </>
  );
}
