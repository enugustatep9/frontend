import Entertainment from './Entertainment'
import styles from './Entertainments.module.scss'


export default function Entertainments() {
    const entertainments = [
        {
            title: 'music',
            id: 1,
            imgUrl: '/images/entertainment.png',
            info: "Dive into Enugu State's Melodic Tapestry - Where Music Breathes Life! Explore the rich blend of Highlife, Afrobeat, and more, echoing across our land. Embrace the talents of Flavor N’abania, Phyno, Zoro, and others, as their music unites our diverse community. Let the enchanting rhythms and harmonies of Enugu State's musical symphony stir your heart and soul. Join us in celebrating the vibrant spirit of our culture through the captivating notes of our music scene!"
        },
        {
            title: 'music',
            id: 2,
            imgUrl: '/images/entertainment.png',
            info: "Nnamdi Azikiwe Stadium, a sporting jewel nestled in Enugu, Nigeria, is a vibrant hub for athletic excellence. Named after the iconic Nigerian statesman, this stadium has witnessed thrilling football clashes, hosting local and international matches that electrify the crowd. With a capacity to hold 25,000 of passionate fans, it's a symbol of unity and a testament to the nation's sporting prowess. Experience the magic of African football at Nnamdi Azikiwe Stadium"
        },
        {
            title: 'music',
            id: 3,
            imgUrl: '/images/entertainment.png',
            info: "Dive into Enugu State's Melodic Tapestry - Where Music Breathes Life! Explore the rich blend of Highlife, Afrobeat, and more, echoing across our land. Embrace the talents of Flavor N’abania, Phyno, Zoro, and others, as their music unites our diverse community. Let the enchanting rhythms and harmonies of Enugu State's musical symphony stir your heart and soul. Join us in celebrating the vibrant spirit of our culture through the captivating notes of our music scene!"
        },
    ]
    return (
        <section className={styles.entertainments}>
            <div className={styles.topWhite}>

            </div>
            <header className={styles.entertainments_header}>
                <h2>Enugu <br/>Entertainment</h2>
            </header>
            <div className={styles.entertainments_content}>
                <div className={styles.entertainments_wrapper}>
                    {entertainments.map(entertainment => <Entertainment entertainment={entertainment} />)}
                </div>
            </div>
        </section>
    )
}