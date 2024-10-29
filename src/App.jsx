import "./css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from './components/Home';
import Neurolink from './components/Neurolink';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/neurolink" element={<Neurolink />} />
      </Routes>
    </Router>
  );
}

export default App;
