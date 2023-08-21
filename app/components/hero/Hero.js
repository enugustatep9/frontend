import styles from './Hero.module.scss'
import herosm1 from '@/public/images/hero_sm1.png'
import herosm2 from '@/public/images/hero_sm2.png'
import herosm3 from '@/public/images/hero_sm3.png'
import herosm4 from '@/public/images/hero_sm4.png'
import herosm5 from '@/public/images/hero_sm5.png'
import playbtn from '@/public/images/hero_play.svg'
import Image from 'next/image'
import Button from '../button/Button'

export default function Hero() {
    const heroData = [
        {
            imgUrl: '/images/hero1.png',
            imgUrlsm: '/images/hero_bg_sm.png',
            text: 'welcome to enugu state',
            showRoundBtn: true,
            label: 'hero1'
        },
        {
            imgUrl: '/images/hero2.png',
            imgUrlsm: '/images/hero_bg_sm2.png',
            text: 'home to significant natural resources',
            showRoundBtn: false,
            label: 'hero2'
        },
        {
            imgUrl: '/images/hero3.png',
            imgUrlsm: '/images/hero_bg_sm3.png',
            text: 'Land of Investment Opportunities',
            showRoundBtn: false,
            label: 'hero3'
        },
        {
            imgUrl: '/images/hero4.png',
            imgUrlsm: '/images/hero_bg_sm4.png',
            text: 'His Excellency, Dr. Barr. Peter Mbah',
            showRoundBtn: true,
            label: 'hero4'
        },
        {
            imgUrl: '/images/hero5.png',
            imgUrlsm: '/images/hero_bg_sm5.png',
            text: 'UNITING HEARTS, IGNITING DIVERSITY',
            showRoundBtn: true,
            label: 'hero5'
        },
    ];

    const HeroSlideArray = heroData.map(item => {
        let {imgUrl, imgUrlsm, text, showRoundBtn, label} = item;
        return(
            <div key={label} className={styles[`${label}`]}>
                <div className={styles.hero_main}>
                    <div className={styles.hero_img}>
                        <picture>
                            <source srcSet={imgUrlsm ? imgUrlsm : imgUrl} media="(max-width: 430px)" />
                            <img src={imgUrl} alt="enugu" />
                        </picture>
                        {/* <Image src={hero1} alt='enugu' /> */}
                    </div>
                    <div className={styles.hero_text}>
                        <h1>{text}</h1>
                        <div className={styles.hero_text_btn}>
                            <Button text='Invest in us' />
                            {showRoundBtn && (<Image src={playbtn} alt='play' />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section className={styles.hero}>
            {HeroSlideArray}
            <div className={styles.hero_stats}>
                <div className={styles.hero_stats_wrapper}>
                    <div className={styles.hero_stats_gallery}>
                        <div className={styles.hero_sm2}>
                            <Image src={herosm2} alt='enugu' />
                        </div>
                        <div className={styles.hero_sm3}>
                            <Image src={herosm3} alt='enugu' />
                        </div>
                        <div className={styles.hero_sm4}>
                            <Image src={herosm4} alt='enugu' />
                        </div>
                        <div className={styles.hero_sm5}>
                            <Image src={herosm5} alt='enugu' />
                        </div>
                    </div>
                    <div className={styles.hero_stats_data}>
                        <div>
                            <h4>27 Aug, 1991</h4>
                            <p>Created</p>
                        </div>
                        <div>
                            <h4>N30.2 Bn</h4>
                            <p>Proposed IGR</p>
                        </div>
                        <div>
                            <h4>N3.13 Tn</h4>
                            <p>State GDP</p>
                        </div>
                        <div>
                            <h4>7,161 km²</h4>
                            <p>Land Area</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}