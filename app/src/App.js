import {Route, Routes} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import HomePageLayout from './components/HomePageLayout';
import About from './components/About';
import Home from './components/Home';
import ProgramInfo from './components/ProgramInfo';

function App () {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route element={<HomePageLayout />}>
        <Route  element={<Home />} />
        <Route path="welcome" element={<Home />} />
      
        <Route path="about" element={<About />} />
        <Route path="program-info" element={<ProgramInfo />} />
      </Route>

    </Routes>
  );
}

export default App;
