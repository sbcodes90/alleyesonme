import { Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />}>
      <Route path="about" />
      </Route>
    </Routes>
   

  );
}

export default App;
