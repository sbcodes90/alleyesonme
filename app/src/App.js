import { Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import About from "./components/About";
import Welcome from "./components/Welcome";
import ProgramInfo from "./components/ProgramInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Home />}>
      <Route path="welcome" element={<Welcome />} />

      <Route path="about" element={<About />} />
      <Route path="program-info" element={<ProgramInfo />} />

      </Route>

    </Routes>
   

  );
}

export default App;
