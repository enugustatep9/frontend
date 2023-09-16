import styles from "./Universities.module.scss";
import University from "./University";

export default function Universities() {
  const universitiesData = [
    {
      mainImgUrl: "/images/esut_main.png",
      minorUrls: [
        "/images/esut_minor1.png",
        "/images/esut_minor2.png",
        "/images/esut_minor3.png",
      ],
      name: "Enugu State University of Science Technology",
      id: 1,
      about:
        "Enugu State University of Science and Technology (ESUT) has been a pivotal force in advancing technological education in the region since its inception in 1980. Dedicated to science, technology, and related disciplines, ESUT's curriculum and research initiatives cater to the evolving needs of industries and society. Its campus in Enugu reflects a commitment to preparing students for the challenges and opportunities of the modern world.",
    },
    {
      mainImgUrl: "/images/unn_main.png",
      minorUrls: [
        "/images/unn_minor.png",
        "/images/unn_minor.png",
        "/images/unn_minor.png",
      ],
      name: "University of Nigeria, Nsukka",
      id: 2,
      about:
        "Discover a campus that celebrates both tradition and progress, where history intertwines with the promise of a brighter tomorrow. The University of Nigeria, Nsukka, beckons you to join a legacy of brilliance, where dreams are nurtured, and futures are crafted with unwavering determination. Are you ready to embark on a life-changing adventure? Come, let your aspirations roar at UNN!",
    },
    {
      mainImgUrl: "/images/ccue_main.png",
      minorUrls: [
        "/images/ccue_minor1.png",
        "/images/ccue_minor2.png",
        "/images/ccue_minor1.png",
      ],
      name: "Coal City University, Enugu",
      id: 3,
      about:
        "Coal City University, established in 2016, contributes to the academic fabric of Enugu State. This private institution aims to provide quality education and equip students with practical skills, fostering their development as well-rounded individuals. Located in the heart of Enugu, the university's focus on innovation and community engagement fosters a unique educational experience.",
    },
  ];
  return (
    <>
      <section className={styles.universities} data-aos="fade-up">
        <header className={styles.universities_header} data-aos="fade-up">
          <h2 data-aos="fade-up">
            Top Universities <br />
            in Enugu
          </h2>
        </header>
        <div className={styles.universities_content} data-aos="fade-up">
          <div className={styles.universities_content_wrapper}>
            {universitiesData.map((university) => (
              <University university={university} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
