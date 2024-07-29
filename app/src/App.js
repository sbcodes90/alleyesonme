import { Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import About from "./components/About";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Home />}>
      <Route path="/Home:welcome" element={<Welcome />} />

      <Route path="about" element={<About />} />
      </Route>
    </Routes>
   

  );
}

export default App;
