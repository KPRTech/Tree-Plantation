import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import GiftTrees from './components/GiftTrees';
import Business from './components/business-sustainability';

function App() {
  return (
    <div className="App">
      <Business />
      <BrowserRouter>
      <Routes>
        <Route path="./components/business-sustainability" element={<Business />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
