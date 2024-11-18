import { React } from 'react';
import FadeInSection from './FadeInSection';
import AnimatedBarChart from './AnimatedBarChart';

export default function Isolation() {
    return(
        <>
             <main className="isolation-main">
                <header className="isolation-header"> 
                    <h1>Isolation to Connection: The Rise of Online Gaming in the Pandemic</h1>
                </header>
                <section className="isolation-s1">
                    <h2>
                        When COVID-19 forced the world into lockdown, online gaming experienced an unprecedented surge, offering an essential outlet for connection and entertainment. 
                    </h2>
                    <p>
                        According to <a href="https://www.statista.com/statistics/746230/fortnite-players/">Statista</a>, popular games like Fortnite saw their player count double as millions
                        turned to virtual spaces to fill the void left by traditional social 
                        interactions. For many, online gaming became more than just a pastime—it was a way to stay mentally healthy, maintain relationships, and cope with the isolation.
                    </p>
                    <AnimatedBarChart />
                </section>
                <section className="isolation-s2">
                    <h2>
                        One standout example of this trend was Among Us, a social deduction game that exploded in popularity during the pandemic. 
                    </h2>
                    <p>
                        Before 2020, Among Us had a modest 
                        player base. However, the need for safe, engaging ways to socialize catapulted it to global fame, boasting over 100 million downloads by the end of the year—a 
                        staggering 1,500% increase in search interest, according to GamesRadar.
                    </p>
                </section>

             </main>
        </>
    )

}