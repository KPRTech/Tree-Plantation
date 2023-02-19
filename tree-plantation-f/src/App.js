// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LatinAmerica from './Components/Where WE Plant/Pages/LatinAmerica';
import Navbar from './Components/Shared/Navbar';
import NavbarTwo from './Components/Shared/NavbarTwo';


function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarTwo />
      <LatinAmerica />
      
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
