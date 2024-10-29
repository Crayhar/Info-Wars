import "./css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from './components/Home';
import Neurolink from './components/Neurolink';
import Parallax from './components/Paralax';
import Zoomin from './components/Zoomin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/neurolink" element={<Neurolink />} />
        <Route path="/parallax" element={<Parallax />} />
        <Route path="/zoomin" element={<Zoomin />} />
      </Routes>
    </Router>
  );
}

export default App;
