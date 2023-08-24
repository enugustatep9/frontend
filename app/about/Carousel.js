import styles from "../about/Landmark.module.scss";
import LandmarkCard from "./LandmarkCard";
import Svg from "../../public/images/s1.svg";
import Image from "next/image";

export default function Carousel() {
  const cardData = [
    {
      title: "CEO Mainland",
      name: "Mr. Scarge Holand",
      details:
        "Énugwú: Enugu State's Capital City in Nigeria, nestled in the southeast. With a population of 820,000, its name originates from 'Énú Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo, transformed into its current name in 1928, reflecting rapid expansion and cultural evolution",
      iconUrl: "/images/invest_card_icon.svg",
      id: 1,
    },
    {
      title: "CEO Mainland",
      name: "Mr. Scarge Holand",
      details:
        "Énugwú: Enugu State's Capital City in Nigeria, nestled in the southeast. With a population of 820,000, its name originates from 'Énú Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo, transformed into its current name in 1928, reflecting rapid expansion and cultural evolution",
      iconUrl: "/images/invest_card_icon.svg",
      id: 2,
    },
    {
      title: "CEO Mainland",
      name: "Mr. Scarge Holand",
      details:
        "Énugwú: Enugu State's Capital City in Nigeria, nestled in the southeast. With a population of 820,000, its name originates from 'Énú Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo, transformed into its current name in 1928, reflecting rapid expansion and cultural evolution",
      iconUrl: "/images/invest_card_icon.svg",
      id: 3,
    },
    {
      title: "CEO Mainland",
      name: "Mr. Scarge Holand",
      details:
        "Énugwú: Enugu State's Capital City in Nigeria, nestled in the southeast. With a population of 820,000, its name originates from 'Énú Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo, transformed into its current name in 1928, reflecting rapid expansion and cultural evolution",
      iconUrl: "/images/invest_card_icon.svg",
      id: 4,
    },
    {
      title: "CEO Mainland",
      name: "Mr. Scarge Holand",
      details:
        "Énugwú: Enugu State's Capital City in Nigeria, nestled in the southeast. With a population of 820,000, its name originates from 'Énú Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo, transformed into its current name in 1928, reflecting rapid expansion and cultural evolution",
      iconUrl: "/images/invest_card_icon.svg",
      id: 5,
    },
  ];
  return (
    <section className={styles.invest}>
      <Image src={Svg} className="mt-20" />

      <div className={styles.invest_cards}>
        <div className={styles.invest_cards_wrapper}>
          <div className={styles.invest_header}>
            <h2>
              Landmarks
              <br /> in Enugu
            </h2>
          </div>
          {cardData.map((item) => (
            <LandmarkCard data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
