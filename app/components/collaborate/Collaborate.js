import Image from "next/image";
import Button from "../button/Button";
import styles from "./Collaborate.module.scss";
import collab_bg from "@/public/images/collaborate_bg.svg";

export default function Collaborate() {
  return (
    <>
      <section className={styles.collaborate} data-aos="fade-up">
        <div className={styles.collaborate_container} data-aos="fade-up">
          <div className={styles.collaborate_bg}>
            <Image data-aos="fade-up" src={collab_bg} alt="svg bg" />
          </div>
          <div className={styles.collaborate_content}>
            <h2 data-aos="fade-up">
              <span>Collaborate with Enugu State:</span> Your Global Partner for
              Mutual Growth and Prosperity
            </h2>
            <p data-aos="fade-up">
              Together, we can forge powerful partnerships, tap into diverse
              expertise, and unlock the true potential of interconnected
              success.
            </p>
            <Button
              data-aos="fade-up"
              text="Collaborate with us"
              hover={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}
