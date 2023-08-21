import Image from 'next/image'
import Button from '../button/Button'
import styles from './Collaborate.module.scss'
import collab_bg from '@/public/images/collaborate_bg.svg'

export default function Collaborate() {
    return(
        <>
        <section className={styles.collaborate}>
            <div className={styles.collaborate_container}>
              <div className={styles.collaborate_bg}>
                <Image src={collab_bg} alt='svg bg' />
              </div>
              <div className={styles.collaborate_content}>
                <h2><span>Collaborate with Enugu State:</span> Your Global Partner for Mutual Growth and Prosperity</h2>
                <p>
                Together, we can forge powerful partnerships, tap into diverse expertise, 
                and unlock the true potential of interconnected success.
                </p>
                <Button text='Collaborate with us' hover={false} />
              </div>
            </div>
        </section>
        </>
    )
}