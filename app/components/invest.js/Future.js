import Image from "next/image";
import styles from "./Future.module.scss";
import EstatesCard from "./EstateCard";
import AgricCard from "./AgricCard";
import invMan from "@/public/images/investment_page.png";
import Button from "../button/Button";
import slantArrow from "@/public/images/arrow_slant_green.svg";

export default function Future() {
  return (
    <>
      <section className={styles.future} data-aos="fade-ip">
        <div className={styles.future_investor} data-aos="fade-up">
          <Image src={invMan} alt="investor" className={styles.inv_img} />
          <div className={styles.future_cards}>
            <div className={styles.future_card_wrapper}>
              <div className={styles.future_est_card}>
                <EstatesCard value={39} />
              </div>
              <div className={styles.future_agric_card}>
                <AgricCard value={50} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.future_text} data-aos="fade-up">
          <h2>Invest in the Future of Enugu State</h2>
          <p>
            Be a part of Enugu's remarkable journey towards progress and
            innovation. Here, we showcase a range of transformative projects
            that the Enugu State Government is embarking on, offering you a
            chance to invest in these initiatives and reap the rewards of your
            partnership.
          </p>
          <div className={styles.future_btn_group} data-aos="fade-up">
            <Button text="Invest in us" />
            <Image
              src={slantArrow}
              alt="go to invest page"
              className={styles.btnImg}
            />
          </div>
        </div>
      </section>
    </>
  );
}
