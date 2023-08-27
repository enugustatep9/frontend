import GovCard from "../components/governor_den/GovCard";
import styles from "./DenContent.module.scss"


export default function MoreDen({otherArticles}) {
    
    return(
        <div className={styles.others}>
            <h2 className={styles.others_title}>More on Governor's Den</h2>
            <div className={styles.others_cards}>
                <div className={styles.others_cards_wrapper} >
                    {otherArticles.map(article => <GovCard article={article} />)}
                </div>
            </div>
        </div>
    )
}