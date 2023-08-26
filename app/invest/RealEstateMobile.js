import styles from "@/app/invest/RealEstateMobile.module.scss";

import bars from "@/public/images/inv_estate_bars.svg";
import tBg from "@/public/images/inv_estate_t.svg";
import Image from "next/image";

export default function EstatesCardMobile({ value }) {
  return (
    <>
      <div className={styles.estCard}>
        <div className={styles.est_t_bg}>
          <Image src={tBg} alt="background" />
        </div>
        <div className={styles.est_text}>
          <h4>{value}%</h4>
          <h5>
            <span>Increase in </span>Estates
          </h5>
        </div>
        <div className={styles.est_bars}>
          <Image src={bars} alt="progress bars" />
        </div>
      </div>
    </>
  );
}
