import Image from 'next/image'
import styles from './TopMenu.module.scss'
import logo from '@/public/images/enu_logo.svg'
import globe from '@/public/images/world.svg'
import chevDown from '@/public/images/chev_down.svg'
import Link from 'next/link'
import accessWorld from '@/public/images/access_world.svg'
import hamburger from '@/public/images/hamburger.svg'
import {useState} from 'react';

export default function TopMenu() {
    const [ navActive, setNavActive ] = useState(false);
    const navItems = [
        {
            title: 'Home',
            label: '',
            id: 1
        },
        {
            title: "MDA's",
            label: 'mda',
            id: 2
        },
        {
            title: 'Products',
            label: 'products',
            id: 3
        },
        {
            title: 'Administration',
            label: 'administration',
            id: 4
        },
        {
            title: 'Market Place',
            label: 'market',
            id: 5
        },
        {
            title: "Governor's Den",
            label: 'governors_den',
            id: 6
        }
    ]

    let navArray = navItems.map(item => {
        return (
            <li key={item.id} >
                <Link href={`/${item.label}`}>{item.title}</Link>
            </li>
        )
    })

    function toggleMenu() {
        setNavActive(prev => !prev)
    }
    return (
        <>
            <header className={styles.mainheader}>
                <div className={styles.logo}>
                    <Image src={logo} alt='logo' />
                </div>
                <nav className={styles[`${navActive ? 'nav-show' : 'nav'}`]} >
                    <ul>
                        {navArray}
                    </ul>
                </nav>
                <div className={styles.symbols}>
                    <div className={styles.accessglobe}>
                        <Image src={accessWorld} alt='globe' />
                        <p>Access</p>
                    </div>
                    <div className={styles.globe}>
                        <p>EN</p>
                        <Image src={chevDown} alt='dropdown' />
                        <Image src={globe} alt='the globe' />
                    </div>
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <Image src={hamburger} alt='hamburget menu' />
                    </div>
                </div>
            </header>
        </>
    )
}