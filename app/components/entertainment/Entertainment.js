import Image from "next/image";
import styles from "./Entertainment.module.scss";

export default function Entertainment({ entertainment }) {
  const { id, title, imgUrl, info } = entertainment;
  return (
    <div key={id} className={styles.entertainment}>
      <p className={styles.title}>0{id.toString()}.</p>
      <div className={styles.entertainment_details}>
        <h3>{title}</h3>
        <p>{info}</p>
        <Image src={imgUrl} alt="entertainment" width={608} height={497} />
      </div>
    </div>
  );
}
