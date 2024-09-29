import React from 'react';
import styles from '../css/Neurolink.module.css'; // Import CSS module
import neurolinkImage from '../photos/image of guy.png';
import hospitalImage from '../photos/in hospital.png'; 
import anotherImage from '../photos/lv_nolandarbaugh1jpg-JS888636728.webp';

export default function Neurolink() {
    return (
        <div className={styles.neurolinkContainer}> {/* Use class from CSS Module */}
            <p className={styles.neurolinkText}>
                This is what happened to Noland Arbaugh in 2016. After diving in the water
                he hit his head hard on something under the water, causing paralysis from
                the neck down. 
            </p>

            <img src={hospitalImage} alt="image of guy in hospital" className={styles.neurolinkImage} />

            <h1>The Neuralink changed this man’s life, can it change others too?</h1>
            <p>Written by Jonas Hagen Aronsen</p>

            <hr />

            <p className={styles.neurolinkText}>  
                Being unable to move his body he had to return home to his
                parents and start living there again. Having recently started college and
                embracing his new-found freedom it was a terrible strike for Arbaugh to
                have it taken away again.
            </p>

            <p className={styles.neurolinkText}>
                However, a savior came to Arbaugh's rescue by the name of Neuralink. In
                late 2023 they were ready to give the neuralink to people for the first
                time. Arbaugh heard about it through a friend and found out that he might
                be the first person ever to have a neuralink. 
            </p>  

            <img src={neurolinkImage} alt="image of guy" className={styles.neurolinkImage} />

            <p className={styles.neurolinkText}>
                He was very apprehensive at first. It was very experimental, and even Neuralink 
                themselves were unsure if it would even work. Arbaugh was thinking things like “maybe someone
                else can do this first, and I can get the better version.” Eventually he
                decided to go through with it anyway, even if he knew it might not work.
            </p>

            <p className={styles.neurolinkText}>
                Fortunately for Arbaugh it was a success! He was still far away from being
                a walking cyborg, but now he could control computers through his Neuralink
                by making his hand be the mouse cursor. 
            </p>

            <img src={anotherImage} alt="Another image of Noland Arbaugh" className={styles.neurolinkImage} />

            <p className={styles.neurolinkText}>
                When he thought about moving his arm forward, the cursor moved upward. And when he tapped with a finger the
                cursor clicked. 
            </p>

            <p className={styles.neurolinkText}>
                He may still not be able to take a shower on his own, but
                now he can browse the web completely independently and thus can continue
                his education and possibly find a job, something he thought was impossible
                for him now.
            </p>

            <p className={styles.neurolinkText}>
                This technology might still be in its early stages, but through the help of more volunteers and more time it 
                can truly become something extraordinary for the entire world. 
            </p>

            <p className={styles.neurolinkText}>
                According to <a className={styles.neurolinkLinks} href="https://www.who.int/health-topics/disability#tab=tab_1">WHO</a>,
                1.3 billion people in the world are considered disabled.
            </p>

            <p className={styles.neurolinkText}>
                This ranges from Down syndrome, to autism and from diabetes to a spinal cord injury.
            </p>

            <p className={styles.neurolinkText}>
                Given the wide range of what is considered a disability, it makes it hard to define 
                exactly how many people could benefit from a Neuralink. 
            </p>

            <p className={styles.neurolinkText}>
                However, if we were to assume that just 0.1% of people with a disability 
                would benefit from a Neuralink, that would still be 1.3 million people. 
            </p>
        </div>
    );
}
