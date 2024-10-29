import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Neurolink() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-up');
                }
            });
        });

        const sections = document.querySelectorAll('.neuro-text');
        sections.forEach((section) => {
            observer.observe(section);
        });
    }, []);

    return (
    <> 
    <main id='neuro-main'>
        <section id='neuro-opener'>  
                <div className="neuro-section" id='opener-1'>
                    <p className="neuro-text">One ordinary summer day, a man takes a swimming trip with some of his friends.</p>
                </div>

                <div className="neuro-section" id='opener-2'>
                    <p className="neuro-text">On the walk there a friend yelled “Last one there is a rotten egg!”. A race had begun. A friendly competition to get to the water first.</p>
                </div>

                <div className="neuro-section" id='opener-3'>
                    <p className="neuro-text">Wanting to not be a rotten egg, the man ran ahead of his friends and dove in, as he had done many times before.</p>
                </div>

                <div className="neuro-section" id='opener-4'>
                    <p className="neuro-text">Suddenly everything was black.</p>
                </div>

                <div className="neuro-section" id='opener-5'>
                    <p className="neuro-text">His friends stood confused as they saw his seemingly lifeless body float up to the surface.</p>
                </div>

                <div className="neuro-section" id='opener-6'>
                    <p className="neuro-text">The next thing he knew, he was in the hospital, unable to move more than his head.</p>
                </div>
        </section>
        <section id='neuro-content'>
            <div className='neuro-intro'> 
                <p>
                    This is what happened to Noland Arbaugh in 2016. After diving in the water he hit his head hard on something under the water, causing paralysis from the neck down.
                    The Neuralink changed this man’s life, can it change others too?
                </p>
            </div> 
            <div>
                <p>
                    Being unable to move his body he had to return home to his parents and start living there again. Having recently started college and embracing his newfound freedom it was a terrible strike for Arbaugh to have it taken away again.

                    However, a savior came to Arbaugh's rescue by the name of Neuralink. In late 2023 they were ready to give the Neuralink to people for the first time. Arbaugh heard about it through a friend and found out that he might be the first person ever to have a Neuralink.

                    He was very apprehensive at first. It was very experimental, and even Neuralink themselves were unsure if it would even work. Arbaugh was thinking things like “maybe someone else can do this first, and I can get the better version.” Eventually, he decided to go through with it anyway, even if he knew it might not work.

                    Fortunately for Arbaugh, it was a success! He was still far away from being a walking cyborg, but now he could control computers through his Neuralink by making his hand be the mouse cursor.

                    When he thought about moving his arm forward, the cursor moved upward. And when he tapped with a finger, the cursor clicked.

                    He may still not be able to take a shower on his own, but now he can browse the web completely independently and thus can continue his education and possibly find a job, something he thought was impossible for him now.

                    This technology might still be in its early stages, but through the help of more volunteers and more time it can truly become something extraordinary for the entire world.

                    According to WHO, 1.3 billion people in the world are considered disabled.

                    This ranges from Down syndrome, to autism and from diabetes to a spinal cord injury.

                    Given the wide range of what is considered a disability it makes it hard to define exactly how many people could benefit from a Neuralink.

                    However, if we were to assume that just 0.1% of people with a disability would benefit from a Neuralink, that would still be 1.3 million people.
                </p>
            </div>
           
        </section>
                    
    </main>           
    </>
    );
}
