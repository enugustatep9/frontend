import Image from "next/image";
import styles from "../about/LandmarkCard.module.scss";
export default function LandmarkCard({ data }) {
  const { title, id, details, iconUrl, name } = data;

  return (
    <div
      key={id}
      className={styles[`${(id + 2) % 2 == 0 ? "card_up" : "card_up"}`]}
    >
      <div className={styles.card_text}>
        <p>{details}</p>
      </div>
      <div className="flex gap-10">
        <div className={styles.card_icon}>
          <Image src={iconUrl} alt={title} width={94} height={94} />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
