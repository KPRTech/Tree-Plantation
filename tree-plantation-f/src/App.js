import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Featureproject from './components/Featureproject';
import Secondsection from './components/Secondsection';
import Reforestation from './components/Reforestation';
import Card from './components/Card';
import Fieldtrips from './components/Fieldtrips';
import Heighlites from './components/Heighlites';
import Supportproject from './components/Supportproject';
function App() {
  return (
    <div className="App">
      <Main />
      <Secondsection />

      <Featureproject />
      <Reforestation />
      <Card />
      <Fieldtrips />
      <Heighlites />
      <Supportproject />
    </div>
  );
}

export default App;
