import MainLayout from "../layouts/includes/MainLayout"
import DenContent from "./DenContent"
import styles from "./GovDen.module.scss"
import Hero from "./Hero"

export default function GovDen(){
    return (
        <>
        <MainLayout>
            <main className={styles.govDen}>
                <Hero />
                <div className={styles.general_title}>
                    <h3>
                    Open and transparent communication between a leader and the citizens creates a powerful synergy, 
                    <span>empowering a society to grow as one, united by common goals and fueled by a sense of belonging</span>
                    </h3>
                </div>
                <DenContent />
            </main>
        </MainLayout>
        </>
    )
}