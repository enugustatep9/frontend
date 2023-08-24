"use client"
import styles from './Explore.module.scss'
import { useRef, useState } from 'react'
import playIcon from '@/public/images/play.svg'
import pauseIcon from '@/public/images/pause.svg'
import Image from 'next/image'

export default function Explore() {
    const videoRef = useRef();
    const [pause, setPause] = useState(true)

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <section className={styles.explore}>
            <header className={styles.explore_header}>
                <h2>A Brief Exploration <br/>of Enugu State</h2>
                <p>
                Enugu State, located in southeastern Nigeria, has emerged as 
                a promising investment destination with a multitude of opportunities 
                across various sectors. 
                </p>
            </header>
            <div className={styles.explore_video}>
                <video onPause={() => setPause(true)} onPlay={() => setPause(false)} ref={videoRef} loop controls src="/images/enuguV2.mp4"></video>
                {pause && (<button onClick={handlePlay} className={styles.play}><span>Play</span><Image src={playIcon} alt='play'/></button>)}
                {!pause && (<button onClick={handlePause} className={styles.pause}><span>Pause</span><Image src={pauseIcon} alt='pause' /></button>)}
            </div>
        </section>
    )
}