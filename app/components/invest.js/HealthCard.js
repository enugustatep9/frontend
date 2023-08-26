import styles from "./HealthC.module.scss";
import health from "@/public/images/health.svg";
import orangeRec from "@/public/images/small_rectangle.svg";
import cart from "@/public/images/mid_rectangle.svg";
import Image from "next/image";
export default function HealthCard({ value }) {
  return (
    <>
      <div className={styles.healthCard}>
        <div className={styles.health_bar}>
          <Image src={cart} alt="green rectangle" className={styles.bar1} />
          <Image
            src={orangeRec}
            alt="orange rectangle"
            className={styles.bar2}
          />
        </div>
        <div className={styles.cart}>
          <Image src={health} alt="health" />
        </div>
        <div className={styles.health_text}>
          <h4>{value}%</h4>
          <h5>
            <span>Increase in</span> <br />
            Health
          </h5>
        </div>
      </div>
    </>
  );
}
