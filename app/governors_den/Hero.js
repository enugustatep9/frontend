import Image from "next/image"
import styles from "./Hero.module.scss"
import gdenBg from "@/public/images/gden_hero_main.png"
import overlay from "@/public/images/gden_overlay_main.svg"

export default function Hero() {
    return(
        <>
        <section className={styles.govDenHero}>
            <div className={styles.hero_wrapper}>
                <div className={styles.hero_bg_container}>
                    <div className={styles.hero_text}>
                        <h1>Governor's <br />Den</h1>
                    </div>
                    <picture className={styles.hero_overlay}>
                        <source media="(max-width: 480px)" srcSet="/images/gden_overlay_sm.svg" />
                        <Image src={overlay} alt="bg" />
                        {/* <img src="/images/gden_overlay_main.svg" alt="" /> */}
                    </picture>
                </div>
                {/* <picture className={styles.hero_img}>
                    <source media="(max-width: 600px)" srcSet="/images/gden_hero_sm.png" />
                    <img src="/images/gden_hero_main.png" alt="governo's den" />
                    <Image src={gdenBg} alt="governo's den" />
                </picture> */}
            </div>
        </section>
        </>
    )
}