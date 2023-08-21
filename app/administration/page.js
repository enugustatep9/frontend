import Image from "next/image";
import styles from './Administration.module.scss'
import Button from "../components/button/Button";
import Collaborate from "../components/collaborate/Collaborate";
import GovernorDen from "../components/governor_den/GovernorDen";
import MainLayout from "../layouts/includes/MainLayout";
import slantArrow from '@/public/images/arrow_slant_green.svg'
import CoreAdminCard from "../components/core_admin/CoreAdminCard";


export default function Administration() {
    let coreAdminData = [
        {
            imgurl: '/images/core_admin1_lg.png',
            name: 'bar ifeanyi osai',
            position: 'deputy governor',
            id: 1
        },
        {
            imgurl: '/images/core_admin2_lg.png',
            name: 'prof. chidera onyia',
            position: 'deputy governor',
            id: 2
        },
        {
            imgurl: '/images/core_admin1_lg.png',
            name: 'bar ifeanyi osai',
            position: 'deputy governor',
            id: 3
        },
        {
            imgurl: '/images/core_admin2_lg.png',
            name: 'prof. chidera onyia',
            position: 'deputy governor',
            id: 4
        },
        {
            imgurl: '/images/core_admin1_lg.png',
            name: 'bar ifeanyi osai',
            position: 'deputy governor',
            id: 5
        },
    ]
    return(
        <>
        <MainLayout >
            <main className={styles.main}>
                <section className={styles.admin}>
                    <div className={styles.admin_text}>
                        <h2 className={styles.s_title}>The Peter Mbah <br/>Administration</h2>
                        <p className={styles.s_info}>Our mission is to deliver excellence in governance, prioritizing equity, transparency, and accountability in every decision we make. Through strategic policies, innovative initiatives, and collaborative partnerships, we strive to improve the quality of life for our citizens, promote economic growth, and enhance the overall well-being of our communities.</p>
                        <div className={styles.buttons_group}>
                            <Button text='Read more'/>
                            <Image src={slantArrow} alt='go to read-more' />
                        </div>
                    </div>
                    <div className={styles.pictures}>
                        <div className={styles.whiteBox}>

                        </div>
                        <picture className={styles.admin_img}>
                            <source media="(max-width: 410px)" srcset="/images/admin_main_sm.png" />
                            <Image src='/images/admin_main.png' alt='Gov Peter' width={1158} height={469} />
                        </picture>
                    </div>
                </section>
                <section className={styles.core_admin}>
                    <div className={styles.core_text}>
                        <h2>Core Administrative <br/>Members</h2>
                        <p>Unleash Prosperity - <span>Invest in Enugu State:</span> Your Gateway to Opportunity! Discover a thriving investment landscape in Nigeria where innovation meets strategic advantage. With prime location, pro-business policies, and skilled workforce, <span>Enugu State offers a lucrative environment for investors.</span> Tap into booming industries, explore real estate, support startups - Enugu State ensures success. Join us in shaping a brighter economic future. Invest now and soar in Enugu State!</p>
                    </div>
                    <div className={styles.core_admin_gallery}>
                        <div className={styles.gallery_wrapper}>
                            {coreAdminData.map(admin => <CoreAdminCard admin={admin}/>)}
                        </div>
                    </div>
                </section>
                <Collaborate />
                <GovernorDen />
            </main>
        </MainLayout>
        </>
    )
}