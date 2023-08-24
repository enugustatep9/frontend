import Image from 'next/image';
import styles from './Card.module.scss'
import overlay from '@/public/images/invest_card_overlay.png'

export default function InvestCard({data}) {
    const { title, id, details, iconUrl } = data;

    return (
        <div key={id} className={styles[`${(id + 2)%2 == 0? 'card_down' : 'card_up'}`]}>
            <div className={styles.invest_card_overlay}>
                <Image src={overlay} alt='hover effect' />
            </div>
            <div className={styles.card_wrapper}>
                <div className={styles.card_icon}>
                    <Image src={iconUrl} alt={title} width={94} height={94} />
                </div>
                <div className={styles.card_text}>
                    <h3>{title}</h3>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    )
}