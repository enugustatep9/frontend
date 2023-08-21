import Image from 'next/image'
import styles from './GovernorDen.module.scss'
import mainGov from '@/public/images/gov_den_main.png'
import cardGov from '@/public/images/gov_den_card.png'
import GovCard from './GovCard'



export default function GovernorDen() {
    const articleArray = [
        {
            type: 'Education',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 1
        },
        {
            type: 'Real Estate',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 2
        },
        {
            type: 'Tech',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 3
        },
        {
            type: 'Agriculture',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 4
        },
        {
            type: 'Agriculture',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 5
        },
    ]
    return (
        <>
            <section className={styles.governor_den}>
                <h2>Governor's <br/>Den</h2>
                <article className={styles.gov_den_content}>
                    <div className={styles.gov_article}>
                        <Image src={mainGov} alt='Gov Peter Mbah' />
                        <div className={styles.gov_main_text}>
                            <div className={styles.gov_main_type}>
                                <p className={styles.gov_type}>Economy</p>
                                <p className={styles.gov_main_date}>4th May, 2023</p>
                            </div>
                            <h3 className={styles.gov_main_title}>Gov Peter Mbah Promises to Transform Enugu's Economy</h3>
                            <p className={styles.gov_main_details}>Mrs. Ogochukwu is an exceptional traffic conductor in Enugu State, displaying unparalleled expertise in efficiently directing and resolving congested road traffic. Her remarkable skills and dedication contribute to the smooth flow of vehicles, ensuring safety and minimizing delays. With her adept management, Mrs. Ogochukwu stands as a shining example of effective traffic control and a true asset to the community</p>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        {articleArray.map(article => <GovCard article={article}/>)}
                    </div>
                </article>
            </section>
        </>
    )
}