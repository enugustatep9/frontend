import Image from "next/image";
import blog1Main from "@/public/images/blog1_main.png"
import blog1Minor from "@/public/images/blog1_minor.png"
import dateIcon from "@/public/images/blog_date_icon.svg"
import eyesIcon from "@/public/images/blog_eyes_icon.svg"
import clockIcon from "@/public/images/blog_clock_icon.svg"
import styles from "./Blog.module.scss"




export default function Blog1() {
    return(
        <>
        <section className={styles.blog}>
            <header className={styles.blog_header}>
                <div className={styles.blog_header_img}>
                    <Image src={blog1Main} alt="Dr Peter Mbah"/>
                </div>
                <p className={styles.blogType}>Economy</p>
                <h2 className={styles.blog_title}>Gov Peter Mbah Promises to Transform Enugu’s Economy</h2>
                <div className={styles.blog_date_time}>
                    <div>
                        <Image src={dateIcon} alt="" />
                        <p>10th January, 2022</p>
                    </div>
                    <div>
                        <Image src={eyesIcon} alt="" />
                        <p>2,222</p>
                    </div>
                    <div>
                        <Image src={clockIcon} alt="" />
                        <p>4:00pm</p>
                    </div>
                </div>
            </header>
            <article className={styles.blog_content}>
                <p>
                In a stride towards fostering economic growth and sustainable development, a significant meeting 
                took place between His Excellency Dr. Peter Mbah, the esteemed Governor of Enugu State, 
                and Shubham Chaudhur, the Country Director of the World Bank in Nigeria. 
                The meeting marked a pivotal moment in the pursuit of forging a robust 
                economic partnership between Enugu State and the World Bank.
                </p>
                <p>
                The conversation centered around innovative strategies and collaborative efforts to catalyze 
                economic transformation in Enugu State. Dr. Peter Mbah's visionary leadership and the World 
                Bank's commitment to fostering global development converged in a productive exchange of ideas, 
                ultimately aiming to bring about positive changes that would reverberate across the region.
                </p>
                <p>
                *A Shared Vision for Economic Progress*
                </p>
                <div className={styles.blog_img_gallery}>
                    <Image src={blog1Minor} alt="" />
                </div>
                <p>
                His Excellency Dr. Peter Mbah, with his unwavering dedication to driving prosperity, initiated 
                the dialogue with the World Bank. The meeting highlighted the mutual recognition of the importance 
                of building a sustainable, vibrant economy that benefits all citizens. Dr. Mbah's administration 
                has laid the groundwork for innovative policies and projects aimed at creating opportunities, 
                improving infrastructure, and boosting the business climate within Enugu State.
                </p>
                <p>
                *Collaborative Strategies for Growth*
                </p>
                <p>
                As the World Bank Country Director, Shubham Chaudhur, engaged in discussions with Dr. Peter Mbah, 
                the focus was on identifying areas where the World Bank could provide expertise, resources, 
                and financial support. The meeting explored avenues for collaboration, such as developing 
                initiatives to enhance key sectors, promoting entrepreneurship, and bolstering human capital development.
                </p>
                <p>
                The potential for public-private partnerships, infrastructure improvement projects, and the adoption
                of cutting-edge technologies were central to the talks. Both sides acknowledged that the synergy 
                of efforts could pave the way for sustainable growth, benefiting not only Enugu State but also 
                contributing to the broader economic landscape of Nigeria.
                </p>
                <p>
                *Towards a Prosperous Future*
                </p>
                <p>
                The meeting's outcome resonates with the shared commitment of both His Excellency Dr. Peter Mbah's 
                administration and the World Bank to foster positive change through strategic partnerships. 
                By leveraging the World Bank's global expertise and Enugu State's local insights, the potential 
                for impactful initiatives and projects that address crucial socio-economic challenges was a 
                prevalent theme throughout the conversation.
                </p>
                <p>
                The meeting concluded with a sense of optimism and renewed determination to collaborate on the development
                 of comprehensive strategies that would empower Enugu State's citizens, businesses, 
                 and communities. This partnership signals a promising chapter in Enugu State's journey 
                 towards economic prosperity and a brighter future.
                </p>
                <p>
                As the collaboration between His Excellency Dr. Peter Mbah's administration and the World Bank unfolds, 
                Enugu State stands poised to achieve transformative progress, setting an example for sustainable 
                development that goes beyond boundaries. The meeting underscored that, united by a common vision, 
                the path ahead is one of shared growth, innovation, and positive impact.
                </p>
            </article>
            <form id="comment_section" action="" className={styles.blog_form}>
                <div className={styles.formcontrol}>
                    <label htmlFor="comment">Leave a comment</label>
                    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Leave a comment"></textarea>
                </div>
                <div className={styles.formcontrol}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter name here" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
        </>
    )
}