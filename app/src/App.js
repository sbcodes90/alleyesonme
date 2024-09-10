import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ProgramInfo from './components/ProgramInfo';
import ParentBootcamps from './routes/ParentBootcamps';
import About from './components/About';

function App () {
  return (
  

    <Routes>
      <Route path="/"  element={ <LandingPage /> } />
      <Route path="/home" element={ <Home />} />
      <Route path="/program-info"  element={ <ProgramInfo />} />
     <Route path="/parent-bootcamps"  element={ <ParentBootcamps />} />
     <Route path="/about"  element={ <About />} />




    </Routes>
  
    
  );
}

export default App;
