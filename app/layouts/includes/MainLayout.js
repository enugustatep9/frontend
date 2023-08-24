"use client"
import TopMenu from '@/app/layouts/includes/TopMenu'
import styles from './MainLayout.module.scss'
import Footer from './Footer'
import { usePathname } from 'next/navigation'

export default function MainLayout({ children }) {
    const pathName = usePathname();
    return (
        <>
            <div id='MainLayout' className={styles[`${pathName.includes("governors_den")? "mainlayout_dark" : "mainlayout"}`]}>
                <TopMenu />
                {children}
                <Footer />
            </div>
        </>
    )
}
