import './App.css';
import logo from "./images/new-header.png"
function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-teal-200 min-h-screen">
    <img src={logo} alt="logo" />
    <button className="bg-yellow-400 px-16 py-5 rounded-3xl font-black -translate-y-10">Enter the hive</button>
  </div>

  );
}

export default App;
