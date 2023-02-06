import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import School from './School/School';

function App() {
  return (
    <div className="App">
    <School/>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
