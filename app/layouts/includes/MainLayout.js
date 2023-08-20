"use client"
import TopMenu from '@/app/layouts/includes/TopMenu'
import styles from './MainLayout.module.scss'
import Footer from './Footer'

export default function MainLayout({ children }) {
    return (
        <>
            <div id='MainLayout' className={styles.mainlayout}>
                <TopMenu />
                {children}
                <Footer />
            </div>
        </>
    )
}