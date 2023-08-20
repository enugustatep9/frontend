import Image from 'next/image';
import styles from './University.module.scss'

export default function University ({university}) {
    const { mainImgUrl, minorUrls, name, about, id} = university;
    return (
        <article key={id} className={styles.university}>
            <div className={styles.gallery}>
                <div className={styles.main_image}>
                    <Image src={mainImgUrl} alt={name} width={314} height={320}/>
                </div>
                <div className={styles.minor_images}>
                    {minorUrls.map(url => <Image src={url} width={159} height={136} alt='university grounds' />)}
                </div>
            </div>
            <div className={styles.university_text}>
                <h3>{name}</h3>
                <p>{about}</p>
            </div>
        </article>
    )
}