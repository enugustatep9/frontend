import Image from "next/image";
import styles from "./FeedbackCard.module.scss";
export default function FeedBackCard({ data }) {
  const { title, id, details, details_intro, iconUrl, name } = data;

  return (
    <div
      key={id}
      className={styles[`${(id + 2) % 2 == 0 ? "card_down" : "card_up"}`]}
    >
      <div className={styles.card_text}>
        <p className={styles.text_strong}>{details_intro}</p>
        <p>{details}</p>
      </div>
      <div className={styles.investor}>
        <div className={styles.inv_img}>
          <Image src={iconUrl} alt={title} width={94} height={94} />
        </div>
        <div className={styles.inv_about}>
          <h3 className="font-bold">{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}