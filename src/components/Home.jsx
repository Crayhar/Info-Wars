import '../css/style.css';

// Images
import neurolinkImage from "../photos/image of guy.png"; // Renamed for consistency
import map from "../photos/map.jpg";

// Links
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
            <Link to="/header">
                <button>Read More</button>
            </Link>
        </article>

        <article>
            <h3>Isolation to Connection: The Rise of Online Gaming in the Pandemic</h3>
            <h2>Temp 3</h2>
            <img src="src\photos\Isolation-header.jpg" alt="placehold" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsa, obcaecati commodi, natus rem.</p>
            <Link to="/isolation">
              <button>Read More</button>
            </Link>
        </article>

        <article>
            <h3>Article 4</h3>
            <h2>Temp 4</h2>
            <img src="https://placehold.co/300x200" alt="placehold" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsa, obcaecati commodi, natus rem.</p>
            <button>Read More</button>
        </article>

        <article>
          <h2>Code examples</h2>

          <img src={map} alt="image of map" />

          <h3>Map zoomin</h3>

          <Link to="/zoomin">
            <button>Zoomin</button>
          </Link>

          <h3>Parallax</h3>

          <img src="https://placehold.co/300x200" alt="placeholder" />

          <Link to="/parallax">
            <button>Paralax</button>
          </Link>
        </article>
      </main>
    </>
  );
}
