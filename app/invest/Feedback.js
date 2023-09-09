import styles from "../invest/Inv.module.scss";
import FeedBackCard from "./FeedbackCard";
import FeedBarkCd1 from "@/public/images/feedback_icon1.svg";
import FeedBarkCd2 from "@/public/images/feedback_icon2.svg";
import FeedBarkCd3 from "@/public/images/feedback_icon3.svg";
import FeedBarkCd4 from "@/public/images/feedback_icon4.svg";
import Image from "next/image";

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
      <div className="-mt-[135px] ml-[100px] lg:flex md:hidden lg:block sm:hidden xs:hidden">
        <Image src={FeedBarkCd1} />
        <Image src={FeedBarkCd2} />
        <Image src={FeedBarkCd3} className="ml-20 mt-20" />
        <Image src={FeedBarkCd4} className="ml-[400px]" />
      </div>
    </section>
  );
}
