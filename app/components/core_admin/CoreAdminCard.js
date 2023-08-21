import Image from 'next/image'
import styles from './CoreAdmin.module.scss'


export default function CoreAdminCard({admin}) {
    const { imgurl, name, position, id } = admin
    return(
        <>
            <div key={id} className={styles[`${(id + 2)%2 == 0 ? 'card_down' : 'card_up'}`]}>
                <Image src={imgurl} alt={position} width={484} height={573} />
                <div className={styles.overlay}>
                    <h3>{name}</h3>
                    <p>{position}</p>
                </div>
            </div>
        </>
    )
}