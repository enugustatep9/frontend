import styles from "../invest/Inv.module.scss";
import FeedBackCard from "./FeedbackCard";

export default function Feedback() {
  const cardData = [
    {
      title: "CEO Mainland",
      name: "Mr. Scarge Holand",
      details:
        "Énugwú: Enugu State's Capital City in Nigeria, nestled in the southeast. With a population of 820,000, its name originates from 'Énú Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo, transformed into its current name in 1928, reflecting rapid expansion and cultural evolution",
      iconUrl: "/images/profile.png",
      id: 1,
    },
    {
      title: "CEO Mainland",
      name: "Mr. Scarge Holand",
      details:
        "Énugwú: Enugu State's Capital City in Nigeria, nestled in the southeast. With a population of 820,000, its name originates from 'Énú Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo, transformed into its current name in 1928, reflecting rapid expansion and cultural evolution",
      iconUrl: "/images/profile.png",
      id: 2,
    },
    {
      title: "CEO Mainland",
      name: "Mr. Scarge Holand",
      details:
        "Énugwú: Enugu State's Capital City in Nigeria, nestled in the southeast. With a population of 820,000, its name originates from 'Énú Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo, transformed into its current name in 1928, reflecting rapid expansion and cultural evolution",
      iconUrl: "/images/profile.png",
      id: 3,
    },
    {
      title: "CEO Mainland",
      name: "Mr. Scarge Holand",
      details:
        "Énugwú: Enugu State's Capital City in Nigeria, nestled in the southeast. With a population of 820,000, its name originates from 'Énú Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo, transformed into its current name in 1928, reflecting rapid expansion and cultural evolution",
      iconUrl: "/images/profile.png",
      id: 4,
    },
    {
      title: "CEO Mainland",
      name: "Mr. Scarge Holand",
      details:
        "Énugwú: Enugu State's Capital City in Nigeria, nestled in the southeast. With a population of 820,000, its name originates from 'Énú Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo, transformed into its current name in 1928, reflecting rapid expansion and cultural evolution",
      iconUrl: "/images/profile.png",
      id: 5,
    },
  ];
  return (
    <section className={styles.invest}>
      <div className={styles.invest_header}>
        <h2>
          What our
          <br /> Investors says
        </h2>
      </div>
      <div className={styles.invest_cards}>
        <div className={styles.invest_cards_wrapper}>
          {cardData.map((item) => (
            <FeedBackCard data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
