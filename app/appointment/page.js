import Image from "next/image"
import Button from "../components/button/Button"
import styles from "./Appointment.module.scss"
import arrowSlant from "@/public/images/arrow_slant_green.svg"
import MainLayout from "../layouts/includes/MainLayout"
import decor from "@/public/images/appointment_decor.svg"
import InvestorFeedback from "../components/invest.js/InvestorFeedback"

export default function Appointment() {
    return (
        <>
        <MainLayout>
            <div className={styles.Appointment_page}>
                <section className={styles.appointment}>
                    <form action="" className={styles.form}>
                        <div className={styles.formcontrol_wrapper}>
                            <div className={styles.formcontrol}>
                                <label htmlFor="name">Name<span>*</span></label>
                                <input type="text" name="name" id="name" placeholder="Name here" required/>
                            </div>
                            <div className={styles.formcontrol}>
                                <label htmlFor="email">Email Address<span>*</span></label>
                                <input type="email" name="email" id="email" placeholder="Email address here." required/>
                            </div>
                        </div>
                        <div className={styles.formcontrol_wrapper}>
                            <div className={styles.formcontrol}>
                                <label htmlFor="phone">Phone Number<span>*</span></label>
                                <input type="tel" name="phone" id="phone" placeholder="Phone number here." required/>
                            </div>
                            <div className={styles.formcontrol}>
                                <label htmlFor="location">Location<span>*</span></label>
                                <input type="text" name="location" id="location" placeholder="Location here." required/>
                            </div>
                        </div>
                        <div className={styles.formcontrol_reason}>
                            <label htmlFor="reason">Reason for Appointment<span>*</span></label>
                            <textarea name="reason" id="reason" cols="30" rows="10" placeholder="Write here." required></textarea>
                        </div>
                        <div className={styles.btn_group}>
                            <Button text="Submit" parentclass="btn_medium" />
                            <div className={styles.slantbtn}>
                                <Image src={arrowSlant} alt="go to button" />
                            </div>
                        </div>
                    </form>
                    <article className={styles.booking_article}>
                        <div className={styles.booking_article_wrapper}>
                            <h2>Book an <br/>Appointment</h2>
                            <p>
                            By reserving your appointment, you're not just gaining access to our experts' insights;
                            you're gaining a strategic partner. Our seasoned professionals 
                            possess an in-depth understanding of Enugu's economic 
                            landscape, legal framework, and cultural nuances. 
                            They're dedicated to aligning your investment 
                            aspirations with the state's potential for growth. Invest in Enugu State today to be 
                            a part of its transformative evolution. Secure your appointment now, and 
                            let's shape the future together."
                            </p>
                        </div>
                        <div className={styles.app_decor}>
                            <Image src={decor} alt="decoration" />
                        </div>
                    </article>
                </section>
                <InvestorFeedback />
            </div>
        </MainLayout>
        </>
    )
}