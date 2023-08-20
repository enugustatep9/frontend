import Image from 'next/image'
import styles from './GovCard.module.scss'

export default function GovCard({article}) {
    return (
        <>
        <div key={article.id} className={styles.GovCard}>
            <Image src={article.imgUrl} width={98} height={98} alt='gov Peter Mbah'/>
            <div className={styles.card_text}>
                <p className={styles.card_type}>{article.type}</p>
                <div className={styles.card_datetime}>
                    <p>{article.date}</p>
                    <p>{article.reading} mins read</p>
                </div>
                <h4 className={styles.card_title}>{article.title}</h4>
            </div>
        </div>
        </>
    )
}