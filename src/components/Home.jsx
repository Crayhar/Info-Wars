import '../css/style.css';
import neurolinkImage from "../photos/image of guy.png"; 
import map from "../photos/map.jpg";
import { Link } from "react-router-dom"; 

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <h1>Eksamen i Kommunikasjonsdesign Høst 2024</h1>
          <h2>Kandidatnummer: 455, 474, C og D</h2>
        </nav>
        <section className="introduction">
          <h1>Welcome to our exam project. We have created 4 different news articles, which have their own personality and touch. Using different modalities and elements, like maps, 
            visualtions, graphics, pictures and text we have made engaging and interesting media. </h1>
        </section>
      </header>
      
      <main>
        <article>
            <h3>News story 1</h3>            
            <img src={neurolinkImage} alt="man in wheelchair" />
            <h2>A New Frontier in Overcoming Disability</h2>
            <p>
              After paralysis from a swimming accident, Noland Arbaugh regained independence through Neuralink, a brain-computer interface enabling device control via thought. 
              This revolutionary technology holds transformative potential for millions with disabilities.
            </p>
            <Link to="/neurolink">
                <button>Read More</button>
            </Link>
        </article>

        <article>
            <h3>News story 2</h3>
            <img src="https://placehold.co/300x200" alt="placehold" />
            <h2>Oceangate diaster</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsa, obcaecati commodi, natus rem.</p>
            <Link to="/header">
                <button>Read More</button>
            </Link>
        </article>

        <article>
            <h3>Long read</h3>
            <img src="src\photos\Article3\Isolation-header.jpg" alt="placehold" />
            <h2>The Rise of Online Gaming in the Pandemic</h2>
            <p>
              The pandemic caused a surge in online gaming, helping people stay connected while isolated. Games like Among Us became social lifelines, fostering emotional resilience,
               while platforms like Discord grew. Gaming transformed from leisure to a vital tool for emotional support and maintaining relationships during lockdown.
            </p>
            <Link to="/isolation">
              <button>Read More</button>
            </Link>
        </article>

        <article>
            <h3>News story 4</h3>
            <img src="https://placehold.co/300x200" alt="placehold" />
            <h2>Temp 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsa, obcaecati commodi, natus rem.</p>
            <button>Read More</button>
        </article>

       
      </main>
    </>
  );
}
/*  <article>
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
        </article>*/