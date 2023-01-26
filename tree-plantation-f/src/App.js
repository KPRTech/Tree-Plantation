import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GiftTrees from './components/GiftTrees';

function App() {
  return (
    <div className="App">
      <GiftTrees />
      <BrowserRouter>
      <Routes>
        <Route path="./components/GiftTrees" element={<GiftTrees />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
