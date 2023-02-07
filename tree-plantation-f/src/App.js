// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import NavbarTwo from './Components/Shared/NavbarTwo';
import FullPage from './Components/Where WE Plant/FullPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarTwo />
      <FullPage />
      
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
