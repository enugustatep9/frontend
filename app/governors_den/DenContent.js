"use client"
import GovCard from "../components/governor_den/GovCard"
import { GovDenArticle } from "../components/governor_den/GovernorDen"
import styles from "./DenContent.module.scss"
import { useState } from "react"

export default function DenContent() {
    const [active, setActive] = useState('economy')
    const filterKeys = ["all posts", "education", "tech", "agriculture", "economy", "tourism", "real estate", "video"]
    const articles = [
        {
            type: "Economy",
            date: "4th May, 2023",
            reading: "4",
            title: "Gov Peter Mbah Promises to Transform Enugu's Economy",
            imgUrl: "/images/gov_den_main.png",
            content: "Mrs. Ogochukwu is an exceptional traffic conductor in Enugu State, displaying unparalleled expertise in efficiently directing and resolving congested road traffic. Her remarkable skills and dedication contribute to the smooth flow of vehicles, ensuring safety and minimizing delays. With her adept management, Mrs. Ogochukwu stands as a shining example of effective traffic control and a true asset to the community",
            id: 1
        },
        {
            type: "Economy",
            date: "4th May, 2023",
            reading: "4",
            title: "Gov Peter Mbah Promises to Transform Enugu's Economy",
            imgUrl: "/images/gov_den_main.png",
            content: "Mrs. Ogochukwu is an exceptional traffic conductor in Enugu State, displaying unparalleled expertise in efficiently directing and resolving congested road traffic. Her remarkable skills and dedication contribute to the smooth flow of vehicles, ensuring safety and minimizing delays. With her adept management, Mrs. Ogochukwu stands as a shining example of effective traffic control and a true asset to the community",
            id: 2
        },
        {
            type: "Economy",
            date: "4th May, 2023",
            reading: "4",
            title: "Gov Peter Mbah Promises to Transform Enugu's Economy",
            imgUrl: "/images/gov_den_main.png",
            content: "Mrs. Ogochukwu is an exceptional traffic conductor in Enugu State, displaying unparalleled expertise in efficiently directing and resolving congested road traffic. Her remarkable skills and dedication contribute to the smooth flow of vehicles, ensuring safety and minimizing delays. With her adept management, Mrs. Ogochukwu stands as a shining example of effective traffic control and a true asset to the community",
            id: 3
        },
        {
            type: "Economy",
            date: "4th May, 2023",
            reading: "4",
            title: "Gov Peter Mbah Promises to Transform Enugu's Economy",
            imgUrl: "/images/gov_den_main.png",
            content: "Mrs. Ogochukwu is an exceptional traffic conductor in Enugu State, displaying unparalleled expertise in efficiently directing and resolving congested road traffic. Her remarkable skills and dedication contribute to the smooth flow of vehicles, ensuring safety and minimizing delays. With her adept management, Mrs. Ogochukwu stands as a shining example of effective traffic control and a true asset to the community",
            id: 4
        },
        {
            type: "Economy",
            date: "4th May, 2023",
            reading: "4",
            title: "Gov Peter Mbah Promises to Transform Enugu's Economy",
            imgUrl: "/images/gov_den_main.png",
            content: "Mrs. Ogochukwu is an exceptional traffic conductor in Enugu State, displaying unparalleled expertise in efficiently directing and resolving congested road traffic. Her remarkable skills and dedication contribute to the smooth flow of vehicles, ensuring safety and minimizing delays. With her adept management, Mrs. Ogochukwu stands as a shining example of effective traffic control and a true asset to the community",
            id: 5
        },
        {
            type: "Economy",
            date: "4th May, 2023",
            reading: "4",
            title: "Gov Peter Mbah Promises to Transform Enugu's Economy",
            imgUrl: "/images/gov_den_main.png",
            content: "Mrs. Ogochukwu is an exceptional traffic conductor in Enugu State, displaying unparalleled expertise in efficiently directing and resolving congested road traffic. Her remarkable skills and dedication contribute to the smooth flow of vehicles, ensuring safety and minimizing delays. With her adept management, Mrs. Ogochukwu stands as a shining example of effective traffic control and a true asset to the community",
            id: 6
        },
    ]
    const otherArticles = [
        {
            type: 'Education',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 1
        },
        {
            type: 'Real Estate',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 2
        },
        {
            type: 'Tech',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 3
        },
        {
            type: 'Agriculture',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 4
        },
        {
            type: 'Agriculture',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 5
        },
        {
            type: 'Education',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 6
        },
        {
            type: 'Real Estate',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 7
        },
        {
            type: 'Tech',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 8
        },
        {
            type: 'Agriculture',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 9
        },
        {
            type: 'Agriculture',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 10
        },
        {
            type: 'Education',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 11
        },
        {
            type: 'Real Estate',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 12
        },
        {
            type: 'Tech',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 13
        },
        {
            type: 'Agriculture',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 14
        },
        {
            type: 'Agriculture',
            date: '4th May, 2023',
            reading: '4',
            title: 'Governor Peter Mbah Launches Ambitious Education Reform Initiative',
            imgUrl: '/images/gov_den_card.png',
            id: 15
        },
    ]

    function handleActiveFilter(key) {
        console.log(key.split(" ")[0]);
        setActive(key.split(" ")[0])
    }
    let filterSection = filterKeys.map(key => {
        return(
            <h4 key={key} className={styles[`${active == key.split(" ")[0] ? "active" : key.split(" ")[0]}`]} onClick={() => handleActiveFilter(key)} >
                {key}
            </h4>
        )
    })
    return(
        <>
        <section className={styles.denContent}>
            <div className={styles.filters}>
                {filterSection}
            </div>
            <div className={styles.filtered}>
                {articles.map(article => <GovDenArticle article={article} many={true}/>)}
            </div>
            <div className={styles.others}>
                <h2 className={styles.others_title}>More on Governor's Den</h2>
                <div className={styles.others_cards}>
                    <div className={styles.others_cards_wrapper} >
                        {otherArticles.map(article => <GovCard article={article} />)}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}