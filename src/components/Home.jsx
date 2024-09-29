import '../css/style.css';
import neurolinkImage from "../photos/image of guy.png"; // Renamed for consistency
import { Link } from "react-router-dom"; // Import Link

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <h1>Eksamen i Kommunikasjonsdesign Høst 2024</h1>
          <h1>Kandidatnummer: A, B, C og D</h1>
        </nav>
        <section className="introduction">
          <h1>"Short introduction"</h1>
        </section>
      </header>
      
      <main>
        <article>
            <h3>Article 1</h3>
            <h2>The Neuralink changed this man’s life, can it change others too?</h2>
            <img src={neurolinkImage} alt="man in wheelchair" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsa, obcaecati commodi, natus rem.</p>
            <Link to="/neurolink">
                <button>Read More</button>
            </Link>
        </article>

        <article>
            <h3>Article 2</h3>
            <h2>Oceangate diaster</h2>
            <img src="https://placehold.co/300x200" alt="placehold" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsa, obcaecati commodi, natus rem.</p>
            <button>Read More</button>
        </article>

        <article>
            <h3>Aticle 3</h3>
            <h2>Temp 3</h2>
            <img src="https://placehold.co/300x200" alt="placehold" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsa, obcaecati commodi, natus rem.</p>
            <button>Read More</button>
        </article>

        <article>
            <h3>Article 4</h3>
            <h2>Temp 4</h2>
            <img src="https://placehold.co/300x200" alt="placehold" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsa, obcaecati commodi, natus rem.</p>
            <button>Read More</button>
        </article>
      </main>
    </>
  );
}
