// App.js
import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import '../css/parallax.css';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <header className="header">
          <h1>Parallax Effect Example</h1>
          <p>Scroll down to see the parallax effect in action!</p>
        </header>
        
        <Parallax speed={-10}>
          <div className="parallax-section">
            <h2>Section 1</h2>
            <p>This section moves at a slower speed when scrolling.</p>
          </div>
        </Parallax>

        <Parallax speed={10}>
          <div className="parallax-section">
            <h2>Section 2</h2>
            <p>This section moves at a faster speed when scrolling.</p>
          </div>
        </Parallax>

        <Parallax speed={-5}>
          <div className="parallax-section">
            <h2>Section 3</h2>
            <p>This section moves at a medium speed when scrolling.</p>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default App;
