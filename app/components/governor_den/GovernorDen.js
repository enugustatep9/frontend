"use client";
import Image from "next/image";
import styles from "./GovernorDen.module.scss";
import mainGov from "@/public/images/gov_den_main.png";
import cardGov from "@/public/images/gov_den_card.png";
import GovCard from "./GovCard";
import { useRouter } from "next/navigation";

export default function GovernorDen() {
  const articleArray = [
    {
      type: "Education",
      date: "4th May, 2023",
      reading: "4",
      title:
        "Governor Peter Mbah Launches Ambitious Education Reform Initiative",
      imgUrl: "/images/gov_den_card.png",
      id: 1,
    },
    {
      type: "Real Estate",
      date: "4th May, 2023",
      reading: "4",
      title:
        "Governor Peter Mbah Launches Ambitious Education Reform Initiative",
      imgUrl: "/images/gov_den_card.png",
      id: 2,
    },
    {
      type: "Tech",
      date: "4th May, 2023",
      reading: "4",
      title:
        "Governor Peter Mbah Launches Ambitious Education Reform Initiative",
      imgUrl: "/images/gov_den_card.png",
      id: 3,
    },
    {
      type: "Agriculture",
      date: "4th May, 2023",
      reading: "4",
      title:
        "Governor Peter Mbah Launches Ambitious Education Reform Initiative",
      imgUrl: "/images/gov_den_card.png",
      id: 4,
    },
    {
      type: "Agriculture",
      date: "4th May, 2023",
      reading: "4",
      title:
        "Governor Peter Mbah Launches Ambitious Education Reform Initiative",
      imgUrl: "/images/gov_den_card.png",
      id: 5,
    },
  ];
  let article = {
    type: "Economy",
    date: "4th May, 2023",
    reading: "4",
    title: "Gov Peter Mbah Promises to Transform Enugu's Economy",
    imgUrl: "/images/gov_den_main.png",
    content:
      "Mrs. Ogochukwu is an exceptional traffic conductor in Enugu State, displaying unparalleled expertise in efficiently directing and resolving congested road traffic. Her remarkable skills and dedication contribute to the smooth flow of vehicles, ensuring safety and minimizing delays. With her adept management, Mrs. Ogochukwu stands as a shining example of effective traffic control and a true asset to the community",
  };
  return (
    <>
      <section className={styles.governor_den} data-aos="fade-up">
        <h2 data-aos="fade-up">
          Governor's <br />
          Den
        </h2>
        <article className={styles.gov_den_content}>
          <GovDenArticle article={article} />
          {/* <div className={styles.gov_article}>
                        <Image src={mainGov} alt='Gov Peter Mbah' />
                        <div className={styles.gov_main_text}>
                            <div className={styles.gov_main_type}>
                                <p className={styles.gov_type}>Economy</p>
                                <p className={styles.gov_main_date}>4th May, 2023</p>
                            </div>
                            <h3 className={styles.gov_main_title}>Gov Peter Mbah Promises to Transform Enugu's Economy</h3>
                            <p className={styles.gov_main_details}>Mrs. Ogochukwu is an exceptional traffic conductor in Enugu State, displaying unparalleled expertise in efficiently directing and resolving congested road traffic. Her remarkable skills and dedication contribute to the smooth flow of vehicles, ensuring safety and minimizing delays. With her adept management, Mrs. Ogochukwu stands as a shining example of effective traffic control and a true asset to the community</p>
                        </div>
                    </div> */}
          <div className={styles.cards} data-aos="fade-up">
            {articleArray.map((article) => (
              <GovCard article={article} />
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

export function GovDenArticle({ article, many = false }) {
  const router = useRouter();
  const { type, date, reading, title, imgUrl, content, id } = article;
  return (
    <div
      key={id}
      className={styles[`${many ? "gov_article-many" : "gov_article"}`]}
      onClick={() => router.push("/governors_den/1")}
      data-aos="fade-up"
    >
      <Image src={imgUrl} alt="Gov Peter Mbah" width={494} height={422} />
      <div className={styles.gov_main_text} data-aos="fade-up">
        <div className={styles.gov_main_type}>
          <p className={styles.gov_type}>{type}</p>
          <p className={styles.gov_main_date}>{date}</p>
          <p className={styles.gov_main_date}>{reading} mins read</p>
        </div>
        <h3 className={styles.gov_main_title}>{title}</h3>
        <p className={styles.gov_main_details}>{content}</p>
      </div>
    </div>
  );
}
