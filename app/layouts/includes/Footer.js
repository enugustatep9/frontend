"use client"
import Image from 'next/image'
import styles from './Footer.module.scss'
import logoLg from '@/public/images/enu_logo.svg'
import Link from 'next/link'
import facebook from '@/public/images/facebook.svg'
import instagram from '@/public/images/instagram.svg'
import linkedin from '@/public/images/linkedin.svg'
import twitter from '@/public/images/twitter.svg'


export default function Footer() {
    let mdaItems = [
        {
            title: "MDA's",
            url: '/mda',
            id: 1
        },
        {
            title: "MDA's",
            url: '/mda',
            id: 2
        },
        {
            title: "MDA's",
            url: '/mda',
            id: 3
        },
        {
            title: "Products",
            url: '/products',
            id: 4
        },
    ]

    let mdaArray = mdaItems.map(item => {
        return (
            <li key={item.id}>
                <Link href={item.url}>{item.title}</Link>
            </li>
        )
    })
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_wrapper}>
                    <div className={styles.footer_content}>
                        <div className={styles.logo}>
                            <Image src={logoLg} alt='logo' />
                            <p>
                            Mrs. Ogochukwu is an exceptional traffic conductor in Enugu State, displaying unparalleled expertise in efficiently directing and resolving congested road traffic. 
                            </p>
                        </div>
                        <div className={styles.columns}>
                            <p>About Us</p>
                            <ul>
                                {mdaArray}
                            </ul>
                        </div>
                        <div className={styles.columns}>
                            <p>About Us</p>
                            <ul>
                                {mdaArray}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <p><span>&copy;</span> Copyright Enugu State 2023</p>
                        <div className={styles.socials}>
                            <Image src={facebook} alt='facebook logo' />
                            <Image src={twitter} alt='twitter logo' />
                            <Image src={linkedin} alt='linkedin logo'/>
                            <Image src={instagram} alt='instagram logo' />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}