import "./css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from './components/Home';
import Neurolink from './components/Neurolink';
import Isolation from "./components/Isolation";
import ScrollToTop from "./components/ScrollToTop";
import Oceangate from "./components/Oceangate";
import Oceangate_test from "./components/oceangate_test";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="/neurolink" element={<Neurolink />} />
        <Route path="/isolation" element={<Isolation />} />
        <Route path="/oceangate_test" element={<Oceangate_test />} />
      </Routes>
    </Router>
  );
}

export default App;
