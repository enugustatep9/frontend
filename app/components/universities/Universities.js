import styles from './Universities.module.scss'
import University from './University'



export default function Universities() {
    const universitiesData = [
        {
            mainImgUrl: '/images/unn_main.png',
            minorUrls: ['/images/unn_minor.png', '/images/unn_minor.png', '/images/unn_minor.png'],
            name: 'University of Nigeria, Nsukka',
            id: 1,
            about: 'Discover a campus that celebrates both tradition and progress, where history intertwines with the promise of a brighter tomorrow. The University of Nigeria, Nsukka, beckons you to join a legacy of brilliance, where dreams are nurtured, and futures are crafted with unwavering determination. Are you ready to embark on a life-changing adventure? Come, let your aspirations roar at UNN!'
        },
        {
            mainImgUrl: '/images/unn_main.png',
            minorUrls: ['/images/unn_minor.png', '/images/unn_minor.png', '/images/unn_minor.png'],
            name: 'University of Nigeria, Nsukka',
            id: 2,
            about: 'Discover a campus that celebrates both tradition and progress, where history intertwines with the promise of a brighter tomorrow. The University of Nigeria, Nsukka, beckons you to join a legacy of brilliance, where dreams are nurtured, and futures are crafted with unwavering determination. Are you ready to embark on a life-changing adventure? Come, let your aspirations roar at UNN!'
        },
        {
            mainImgUrl: '/images/unn_main.png',
            minorUrls: ['/images/unn_minor.png', '/images/unn_minor.png', '/images/unn_minor.png'],
            name: 'University of Nigeria, Nsukka',
            id: 3,
            about: 'Discover a campus that celebrates both tradition and progress, where history intertwines with the promise of a brighter tomorrow. The University of Nigeria, Nsukka, beckons you to join a legacy of brilliance, where dreams are nurtured, and futures are crafted with unwavering determination. Are you ready to embark on a life-changing adventure? Come, let your aspirations roar at UNN!'
        },

    ]
    return (
        <>
        <section className={styles.universities}>
            <header className={styles.universities_header}>
                <h2>Top Universities <br/>in Enugu</h2>
            </header>
            <div className={styles.universities_content}>
                <div className={styles.universities_content_wrapper}>
                    {universitiesData.map(university => <University university={university}/>)}
                </div>
            </div>
        </section>
        </>
    )
}