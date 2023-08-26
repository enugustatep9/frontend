import styles from "@/app/invest/MobileAgricCard.module.scss";
import greenRec from "@/public/images/inv_agric_green.svg";
import orangeRec from "@/public/images/inv_agric_orange.svg";
import cart from "@/public/images/inv_agric_cart.svg";
import Image from "next/image";
export default function AgricCardMobile({ value }) {
  return (
    <>
      <div className={styles.agricCard}>
        <div className={styles.agric_bar}>
          <Image src={greenRec} alt="green rectangle" className={styles.bar1} />
          <Image
            src={orangeRec}
            alt="orange rectangle"
            className={styles.bar2}
          />
        </div>
        <div className={styles.cart}>
          <Image src={cart} alt="cart" />
        </div>
        <div className={styles.agric_text}>
          <h4>{value}%</h4>
          <h5>
            <span>Increase in</span> <br />
            Agriculture
          </h5>
        </div>
      </div>
    </>
  );
}
