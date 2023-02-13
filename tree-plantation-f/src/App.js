import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import GiftTrees from './components/GiftTrees';
import Business from './components/business-sustainability';
import PlantingReport from './components/plantingReport';

function App() {
  return (
    <div className="App">
      <PlantingReport />
      <BrowserRouter>
      <Routes>
        <Route path="./components/business-sustainability" element={<Business />}/>
        <Route path="./components/plantingReport" element={<PlantingReport />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
