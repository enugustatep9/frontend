import Image from 'next/image'
import styles from './Accolades.module.scss'
import accImage from '@/public/images/accolade_lg.png'
import sickleIconWhite from '@/public/images/sickle_white.svg'
import sickleIconGreen from '@/public/images/sickle_green.svg'
import profileIcon from '@/public/images/profile_icon.svg'


export default function Accolades() {
    return (
        <>
            <section className={styles.accolades}>
                <header className={styles.accolades_header}>
                    <h4>accolades</h4>
                    <h2>Recognising our Patriotic Citizens</h2>
                </header>
                <div className={styles.accolades_content}>
                    <article className={styles.acc_article}>
                        <h4>Mrs Ogochukwu</h4>
                        <p>
                        Mrs. Ogochukwu is an exceptional traffic conductor in Enugu State, 
                        displaying unparalleled expertise in efficiently directing and 
                        resolving congested road traffic. Her remarkable skills and 
                        dedication contribute to the smooth flow of vehicles, ensuring 
                        safety and minimizing delays. With her adept management, Mrs. Ogochukwu 
                        stands as a shining example of effective traffic control and a true asset 
                        to the community
                        </p>
                        <Image src={accImage} alt='Mrs Ogochukwu'/>
                    </article>
                    <div className={styles.acc_names}>
                        <div className={styles.acc_names_wrapper}>
                            <div className={styles.name_active}>
                                <Image src={profileIcon} alt='profile icon' />
                                <h4>Mrs <br/>Ogochukwu</h4>
                            </div>
                            <div className={styles.name}>
                                <h4>mrs <br/>claire nwachukwu</h4>
                            </div>
                            <div className={styles.name}>
                                <h4>mrs <br/>claire nwachukwu</h4>
                            </div>
                            <div className={styles.name}>
                                <h4>mrs <br/>claire nwachukwu</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}