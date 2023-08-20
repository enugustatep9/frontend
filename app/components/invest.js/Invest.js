import Image from 'next/image'
import Button from '../button/Button'
import styles from './Invest.module.scss'
import slantArrow from '@/public/images/arrow_slant_green.svg'
import InvestCard from './Card'

export default function Invest() {
    const cardData = [
        {
            title: 'infrastructure development',
            details: 'Significant advancements in transportation, energy, and digital connectivity.',
            iconUrl: '/images/invest_card_icon.svg',
            id: 1
        },
        {
            title: 'infrastructure development',
            details: 'Significant advancements in transportation, energy, and digital connectivity.',
            iconUrl: '/images/invest_card_icon.svg',
            id: 2
        },
        {
            title: 'infrastructure development',
            details: 'Significant advancements in transportation, energy, and digital connectivity.',
            iconUrl: '/images/invest_card_icon.svg',
            id: 3
        },
        {
            title: 'infrastructure development',
            details: 'Significant advancements in transportation, energy, and digital connectivity.',
            iconUrl: '/images/invest_card_icon.svg',
            id: 4
        },
        {
            title: 'infrastructure development',
            details: 'Significant advancements in transportation, energy, and digital connectivity.',
            iconUrl: '/images/invest_card_icon.svg',
            id: 5
        },
    ]
    return(
        <section className={styles.invest}>
            <div className={styles.invest_header}>
                <Button text='Why invest in us' hover={true} parentclass='btn_small' />
                <h2>Investments, Opportunities & Advantage</h2>
                <p>
                "Unleash Prosperity - <strong>Invest in Enugu State:</strong> Your Gateway to Opportunity! 
                Discover a thriving investment landscape in Nigeria where innovation 
                meets strategic advantage. With prime location, pro-business policies, 
                and skilled workforce, <strong>Enugu State offers a lucrative environment for 
                investors.</strong> Tap into booming industries, explore real estate, support 
                startups - Enugu State ensures success. Join us in shaping a brighter 
                economic future. Invest now and soar in Enugu State!"
                </p>
            </div>
            <div className={styles.invest_cards}>
                <div className={styles.invest_cards_wrapper}>
                    {cardData.map(item => <InvestCard data={item} />)}
                </div>
            </div>
            <div className={styles.invest_buttons}>
                <Button text='Invest in us'/>
                <Image src={slantArrow} alt='click to invest' />
            </div>
        </section>
    )
}