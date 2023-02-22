// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../Videospage/Videopage.css';
import Main from './Main';
import Featureproject from './Featureproject';
import Secondsection from './Secondsection';
import Reforestation from './Reforestation';
import Card from './Card';
import Fieldtrips from './Fieldtrips';
import Heighlites from './Heighlites';
import Supportproject from './Supportproject';

function Videopage() {
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

export default Videopage;
