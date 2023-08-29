import styles from "./ChildrenCard.module.scss";

import bars from "@/public/images/inv_estate_bars.svg";
import tBg from "@/public/images/inv_estate_t.svg";
import Image from "next/image";

export default function ChildrenCard({ value }) {
  return (
    <>
      <div className={styles.estCard}>
        <div className={styles.est_t_bg}>
          <Image src={tBg} alt="background" />
        </div>
        <div className={styles.est_text}>
          <h4>{value}k</h4>
          <h5>
            More
            <span> children </span>can now write and read
          </h5>
        </div>
        <div className={styles.est_bars}></div>
      </div>
    </>
  );
}
